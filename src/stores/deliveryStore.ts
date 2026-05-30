import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import type {
  RouteStop,
  CargoGroup,
  CargoGridLayout,
  RouteViewMode,
  Mission,
} from '@/types';
import { travelCost } from '@/data/location-graph';
import { shortName } from '@/utils/short-name';

const PALETTE = [
  '#4dd4ac', '#ec4899', '#fbbf24', '#8b5cf6',
  '#3b82f6', '#f97316', '#84cc16', '#06b6d4', '#ef4444',
];

interface DeliveryState {
  routeStops: RouteStop[];
  routeStepCompletion: Record<string, boolean>;
  routeViewMode: RouteViewMode;
  cargoGroups: Record<string, Omit<CargoGroup, 'totalSCU' | 'type' | 'items'>>;
  cargoGroupPositions: Record<string, number>;
  cargoGridLayout: CargoGridLayout;

  generateRoute: (missions: Mission[]) => void;
  reorderStops: (orderedStops: RouteStop[]) => void;
  toggleStep: (stopIndex: number, stop: RouteStop) => void;
  toggleRouteItem: (itemKey: string) => void;
  resetSteps: () => void;
  setRouteViewMode: (mode: RouteViewMode) => void;

  updateCargoGroupColor: (location: string, color: string) => void;
  updateCargoGroupLabel: (location: string, label: string) => void;
  moveCargoGroup: (location: string, toCellIndex: number) => void;
  setGridLayout: (layout: CargoGridLayout) => void;

  getComputedCargoGroups: (missions: Mission[]) => Record<string, CargoGroup>;
  getInvalidItems: (missions: Mission[]) => Set<string>;
  getCurrentStepIndex: () => number;
}

export const useDeliveryStore = create<DeliveryState>()(
  persist(
    (set, get) => ({
      routeStops: [],
      routeStepCompletion: {},
      routeViewMode: 'all',
      cargoGroups: {},
      cargoGroupPositions: {},
      cargoGridLayout: { cols: 2, rows: 4 },

      generateRoute: (missions) =>
        set((state) => {
          interface Cargo {
            missionIdx: number;
            commodity: string;
            scu: number;
            maxBoxSize: 1 | 2 | 4 | 8 | 16 | 24 | 32;
            from: string;
            to: string;
          }

          type LocationMap = Record<string, { pickups: Cargo[]; deliveries: Cargo[] }>;

          const locationMap: LocationMap = {};
          const allCargo: Cargo[] = [];

          missions.forEach((mission, mi) => {
            mission.commodities.forEach((c) => {
              if (!c.pickup || !c.destination || !c.commodity || !c.quantity) return;
              const cargo: Cargo = {
                missionIdx: mi + 1,
                commodity: c.commodity,
                scu: c.quantity,
                maxBoxSize: c.maxBoxSize,
                from: c.pickup,
                to: c.destination,
              };
              allCargo.push(cargo);
              if (!locationMap[c.pickup]) locationMap[c.pickup] = { pickups: [], deliveries: [] };
              if (!locationMap[c.destination]) locationMap[c.destination] = { pickups: [], deliveries: [] };
              locationMap[c.pickup].pickups.push(cargo);
              locationMap[c.destination].deliveries.push(cargo);
            });
          });

          const locations = Object.keys(locationMap);
          if (locations.length === 0) return { routeStops: [], cargoGroups: {}, cargoGroupPositions: {}, routeStepCompletion: {} };

          // Warehouse detection: location with most unique destinations for its pickups
          const warehouse = locations
            .filter((loc) => locationMap[loc].pickups.length > 0 && locationMap[loc].deliveries.length > 0)
            .sort((a, b) => {
              const aDests = new Set(locationMap[a].pickups.map((p) => p.to)).size;
              const bDests = new Set(locationMap[b].pickups.map((p) => p.to)).size;
              if (aDests !== bDests) return bDests - aDests;
              return locationMap[b].pickups.length - locationMap[a].pickups.length;
            })[0] ?? null;

          const pendingPickups = new Set(allCargo.map((c) => `${c.from}|${c.commodity}|${c.to}|${c.missionIdx}`));
          const pendingDeliveries = new Set(allCargo.map((c) => `${c.to}|${c.commodity}|${c.from}|${c.missionIdx}`));
          const cargoOnBoard = new Set<string>();

          const stops: RouteStop[] = [];
          let currentCargo = 0;
          let iteration = 0;

          while (pendingDeliveries.size > 0 && iteration < 50) {
            iteration++;
            let bestLocation: string | null = null;
            let bestScore = -1;

            if (warehouse && stops.length === 0 && locationMap[warehouse].pickups.some((p) => {
              const id = `${p.from}|${p.commodity}|${p.to}|${p.missionIdx}`;
              return pendingPickups.has(id);
            })) {
              bestLocation = warehouse;
            } else {
              for (const location of locations) {
                const pickupIds = new Set(
                  locationMap[location].pickups
                    .filter((p) => pendingPickups.has(`${p.from}|${p.commodity}|${p.to}|${p.missionIdx}`))
                    .map((p) => `${p.from}|${p.commodity}|${p.to}|${p.missionIdx}`),
                );
                const deliveryIds = new Set(
                  locationMap[location].deliveries
                    .filter((d) => cargoOnBoard.has(`${d.to}|${d.commodity}|${d.from}|${d.missionIdx}`))
                    .map((d) => `${d.to}|${d.commodity}|${d.from}|${d.missionIdx}`),
                );

                if (pickupIds.size === 0 && deliveryIds.size === 0) continue;

                if (location === warehouse && deliveryIds.size > 0) {
                  const otherPending = locations.filter(
                    (l) => l !== warehouse && locationMap[l].deliveries.some((d) =>
                      pendingDeliveries.has(`${d.to}|${d.commodity}|${d.from}|${d.missionIdx}`)
                    ),
                  );
                  if (otherPending.length > 0) continue;
                  const otherPickups = locations.filter(
                    (l) => l !== warehouse && locationMap[l].pickups.some((p) =>
                      pendingPickups.has(`${p.from}|${p.commodity}|${p.to}|${p.missionIdx}`)
                    ),
                  );
                  if (otherPickups.length > 0) continue;
                }

                const deliveryScu = locationMap[location].deliveries
                  .filter((d) => cargoOnBoard.has(`${d.to}|${d.commodity}|${d.from}|${d.missionIdx}`))
                  .reduce((s, d) => s + d.scu, 0);
                const pickupScu = locationMap[location].pickups
                  .filter((p) => pendingPickups.has(`${p.from}|${p.commodity}|${p.to}|${p.missionIdx}`))
                  .reduce((s, p) => s + p.scu, 0);

                const distance = stops.length > 0
                  ? travelCost(stops[stops.length - 1].location, location)
                  : 0;

                const normalizedDistance = distance / 1e8;

                const score = deliveryScu * 3 + pickupScu * 2
                  + (deliveryScu > 0 && pickupScu > 0 ? 200 : 0)
                  - normalizedDistance * 0.5;

                if (score > bestScore) {
                  bestScore = score;
                  bestLocation = location;
                }
              }
            }

            if (!bestLocation) break;

            const pickupsHere = locationMap[bestLocation].pickups.filter((p) =>
              pendingPickups.has(`${p.from}|${p.commodity}|${p.to}|${p.missionIdx}`),
            );
            const deliveriesHere = locationMap[bestLocation].deliveries.filter((d) =>
              cargoOnBoard.has(`${d.to}|${d.commodity}|${d.from}|${d.missionIdx}`),
            );

            if (pickupsHere.length === 0 && deliveriesHere.length === 0) break;

            const deliveryScu = deliveriesHere.reduce((s, d) => s + d.scu, 0);
            const pickupScu = pickupsHere.reduce((s, p) => s + p.scu, 0);
            const cargoBefore = currentCargo;
            currentCargo = currentCargo - deliveryScu + pickupScu;

            stops.push({
              location: bestLocation,
              pickups: pickupsHere.map((p) => ({
                missionNum: p.missionIdx,
                commodity: p.commodity,
                quantity: p.scu,
                maxBoxSize: p.maxBoxSize,
                from: p.from,
                to: p.to,
              })),
              deliveries: deliveriesHere.map((d) => ({
                missionNum: d.missionIdx,
                commodity: d.commodity,
                quantity: d.scu,
                maxBoxSize: d.maxBoxSize,
                from: d.from,
                to: d.to,
              })),
              cargoBeforeStop: cargoBefore,
              cargoAfterStop: currentCargo,
            });

            deliveriesHere.forEach((d) => {
              cargoOnBoard.delete(`${d.to}|${d.commodity}|${d.from}|${d.missionIdx}`);
              pendingDeliveries.delete(`${d.to}|${d.commodity}|${d.from}|${d.missionIdx}`);
            });
            pickupsHere.forEach((p) => {
              pendingPickups.delete(`${p.from}|${p.commodity}|${p.to}|${p.missionIdx}`);
              cargoOnBoard.add(`${p.to}|${p.commodity}|${p.from}|${p.missionIdx}`);
            });
          }

          // Merge consecutive same-location stops
          const merged = new Map<string, RouteStop>();
          for (const stop of stops) {
            const existing = merged.get(stop.location);
            if (existing) {
              existing.pickups.push(...stop.pickups);
              existing.deliveries.push(...stop.deliveries);
              existing.cargoAfterStop = stop.cargoAfterStop;
            } else {
              merged.set(stop.location, { ...stop, pickups: [...stop.pickups], deliveries: [...stop.deliveries] });
            }
          }
          const mergedStops = Array.from(merged.values());

          // Recalculate cargo
          let runningCargo = 0;
          for (const stop of mergedStops) {
            const dScu = stop.deliveries.reduce((s, d) => s + d.quantity, 0);
            const pScu = stop.pickups.reduce((s, p) => s + p.quantity, 0);
            stop.cargoBeforeStop = runningCargo;
            runningCargo = runningCargo - dScu + pScu;
            stop.cargoAfterStop = runningCargo;
          }

          // Build cargo groups from saved state
          const saved = state.cargoGroups;
          const newGroups: Record<string, Omit<CargoGroup, 'totalSCU' | 'type' | 'items'>> = {};
          const newPositions: Record<string, number> = { ...state.cargoGroupPositions };
          const occupiedCells = new Set(Object.values(newPositions));
          let colorIdx = 0;
          const seen = new Set<string>();

          allCargo.forEach((c) => {
            for (const loc of [c.to, c.from]) {
              if (seen.has(loc)) continue;
              if (loc === c.from && loc === c.to) continue;
              seen.add(loc);
              const existing = saved[loc];
              newGroups[loc] = {
                label: existing?.label ?? shortName(loc),
                color: existing?.color ?? PALETTE[colorIdx % PALETTE.length],
                position: existing?.position ?? null,
              };
              if (!(loc in newPositions)) {
                let cell = 0;
                while (occupiedCells.has(cell)) cell++;
                newPositions[loc] = cell;
                occupiedCells.add(cell);
              }
              colorIdx++;
            }
          });

          return {
            routeStops: mergedStops,
            cargoGroups: newGroups,
            cargoGroupPositions: newPositions,
            routeStepCompletion: {},
          };
        }),

      reorderStops: (orderedStops) =>
        set({ routeStops: orderedStops }),

      toggleStep: (stopIndex, stop) =>
        set((state) => {
          const next = { ...state.routeStepCompletion };
          const allDone = stop.pickups.every((_, pi) =>
            next[itemKey(stopIndex, 'pick', pi)]
          ) && stop.deliveries.every((_, di) =>
            next[itemKey(stopIndex, 'del', di)]
          );
          const newVal = !allDone;
          stop.deliveries.forEach((_, di) => {
            next[itemKey(stopIndex, 'del', di)] = newVal;
          });
          stop.pickups.forEach((_, pi) => {
            next[itemKey(stopIndex, 'pick', pi)] = newVal;
          });
          return { routeStepCompletion: next };
        }),

      toggleRouteItem: (itemKey) =>
        set((state) => ({
          routeStepCompletion: {
            ...state.routeStepCompletion,
            [itemKey]: !state.routeStepCompletion[itemKey],
          },
        })),

      resetSteps: () => set({ routeStepCompletion: {} }),

      setRouteViewMode: (mode) => set({ routeViewMode: mode }),

      updateCargoGroupColor: (location, color) =>
        set((state) => ({
          cargoGroups: {
            ...state.cargoGroups,
            [location]: { ...state.cargoGroups[location], color },
          },
        })),

      updateCargoGroupLabel: (location, label) =>
        set((state) => ({
          cargoGroups: {
            ...state.cargoGroups,
            [location]: { ...state.cargoGroups[location], label },
          },
        })),

      moveCargoGroup: (location, toCellIndex) =>
        set((state) => {
          const newPositions = { ...state.cargoGroupPositions };
          const occupant = Object.entries(newPositions).find(
            ([, idx]) => idx === toCellIndex,
          );
          if (occupant) {
            newPositions[occupant[0]] = newPositions[location];
          }
          newPositions[location] = toCellIndex;
          return { cargoGroupPositions: newPositions };
        }),

      setGridLayout: (layout) => set({ cargoGridLayout: layout }),

      getComputedCargoGroups: (missions) => {
        const { cargoGroups } = get();
        const groupData: Record<string, CargoGroup> = {};
        let groupIdx = Object.keys(cargoGroups).length;

        missions.forEach((mission, mi) => {
          mission.commodities.forEach((c) => {
            if (!c.pickup || !c.destination || !c.commodity || !c.quantity) return;

            if (!groupData[c.destination]) {
              const existing = cargoGroups[c.destination];
              groupData[c.destination] = {
                label: existing?.label ?? shortName(c.destination),
                color: existing?.color ?? PALETTE[groupIdx % PALETTE.length],
                position: existing?.position ?? null,
                totalSCU: 0,
                type: 'delivery',
                items: [],
              };
              if (!existing) groupIdx++;
            }
            groupData[c.destination].totalSCU += c.quantity;
            groupData[c.destination].items.push({
              missionNum: mi + 1,
              commodity: c.commodity,
              quantity: c.quantity,
              maxBoxSize: c.maxBoxSize,
              type: 'delivery',
              pickup: c.pickup,
            });

            if (c.pickup !== c.destination) {
              if (!groupData[c.pickup]) {
                const existing = cargoGroups[c.pickup];
                groupData[c.pickup] = {
                  label: existing?.label ?? shortName(c.pickup),
                  color: existing?.color ?? PALETTE[groupIdx % PALETTE.length],
                  position: existing?.position ?? null,
                  totalSCU: 0,
                  type: 'pickup',
                  items: [],
                };
                if (!existing) groupIdx++;
              }
              groupData[c.pickup].totalSCU += c.quantity;
              groupData[c.pickup].items.push({
                missionNum: mi + 1,
                commodity: c.commodity,
                quantity: c.quantity,
                maxBoxSize: c.maxBoxSize,
                type: 'pickup',
                destination: c.destination,
              });
            } else {
              groupData[c.destination].type = 'both';
            }
          });
        });

        return groupData;
      },

      getInvalidItems: (missions) => {
        const invalid = new Set<string>();
        const { routeStops } = get();
        missions.forEach((mission, mi) => {
          const missionNum = mi + 1;
          mission.commodities.forEach((c) => {
            if (!c.pickup || !c.destination) return;
            const pickupIdx = routeStops.findIndex((s) =>
              s.pickups.some(
                (p) =>
                  p.missionNum === missionNum &&
                  p.commodity === c.commodity &&
                  p.quantity === c.quantity,
              ),
            );
            const deliveryIdx = routeStops.findIndex((s) =>
              s.deliveries.some(
                (d) =>
                  d.missionNum === missionNum &&
                  d.commodity === c.commodity &&
                  d.quantity === c.quantity,
              ),
            );
            if (pickupIdx !== -1 && deliveryIdx !== -1 && pickupIdx > deliveryIdx) {
              invalid.add(`${missionNum}:${c.commodity}:${c.quantity}`);
            }
          });
        });
        return invalid;
      },

      getCurrentStepIndex: () => {
        const { routeStops, routeStepCompletion } = get();
        for (let i = 0; i < routeStops.length; i++) {
          const stop = routeStops[i];
          const allDone = stop.pickups.every((_, pi) =>
            routeStepCompletion[itemKey(i, 'pick', pi)]
          ) && stop.deliveries.every((_, di) =>
            routeStepCompletion[itemKey(i, 'del', di)]
          );
          if (!allDone) return i;
        }
        return routeStops.length - 1;
      },
    }),
    {
      name: 'haulerHelperDelivery',
      partialize: (state) => ({
        routeViewMode: state.routeViewMode,
        cargoGridLayout: state.cargoGridLayout,
        cargoGroups: state.cargoGroups,
        cargoGroupPositions: state.cargoGroupPositions,
      }),
    }
  )
);

export function itemKey(stopIndex: number, type: 'del' | 'pick', itemIdx: number): string {
  return `step-${stopIndex}-${type}-${itemIdx}`;
}
