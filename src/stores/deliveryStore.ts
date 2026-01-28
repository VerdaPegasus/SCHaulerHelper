import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import type {
  RouteStop,
  RouteItem,
  CargoGroup,
  CargoGridLayout,
  RouteViewMode,
  Mission,
} from '@/types';

let nextStopId = 0;

interface DeliveryState {
  routeStops: RouteStop[];
  routeStepCompletion: Record<string, boolean>;
  routeViewMode: RouteViewMode;
  cargoGroups: Record<string, CargoGroup>;
  cargoGroupPositions: Record<string, number>; // location → cell index
  cargoGridLayout: CargoGridLayout;

  // Route actions
  generateRoute: (missions: Mission[]) => void;
  reorderStops: (orderedIds: string[]) => void;
  completeStep: (stopId: string) => void;
  resetSteps: () => void;
  setRouteViewMode: (mode: RouteViewMode) => void;

  // Cargo actions
  updateCargoGroupColor: (location: string, color: string) => void;
  updateCargoGroupLabel: (location: string, label: string) => void;
  moveCargoGroup: (location: string, toCellIndex: number) => void;
  setGridLayout: (layout: CargoGridLayout) => void;
}

export const useDeliveryStore = create<DeliveryState>()(
  persist(
    (set) => ({
      routeStops: [],
      routeStepCompletion: {},
      routeViewMode: 'all',
      cargoGroups: {},
      cargoGroupPositions: {},
      cargoGridLayout: { cols: 2, rows: 4 },

      generateRoute: (missions) =>
        set((state) => {
          // Group items by location, separating pickups and deliveries
          const pickups = new Map<string, RouteItem[]>();
          const deliveries = new Map<string, RouteItem[]>();

          missions.forEach((mission) => {
            mission.commodities.forEach((c) => {
              if (!c.commodity || !c.quantity) return;

              const item: RouteItem = {
                missionId: mission.id,
                commodity: c.commodity,
                quantity: c.quantity,
                maxBoxSize: c.maxBoxSize,
              };

              if (c.pickup) {
                const existing = pickups.get(c.pickup) ?? [];
                existing.push(item);
                pickups.set(c.pickup, existing);
              }
              if (c.destination) {
                const existing = deliveries.get(c.destination) ?? [];
                existing.push(item);
                deliveries.set(c.destination, existing);
              }
            });
          });

          const stops: RouteStop[] = [];

          // Pickups first, then deliveries
          pickups.forEach((items, location) => {
            stops.push({
              id: `stop_${++nextStopId}`,
              type: 'pickup',
              location,
              items,
            });
          });

          deliveries.forEach((items, location) => {
            stops.push({
              id: `stop_${++nextStopId}`,
              type: 'delivery',
              location,
              items,
            });
          });

          // Build cargo groups from deliveries
          const palette = [
            '#4dd4ac', '#ec4899', '#fbbf24', '#8b5cf6',
            '#3b82f6', '#f97316', '#84cc16', '#06b6d4',
          ];
          const newGroups: Record<string, CargoGroup> = {};
          const newPositions: Record<string, number> = {};
          let colorIndex = 0;
          // Track which cells are already taken by preserved positions
          const occupiedCells = new Set<number>();

          deliveries.forEach((items, location) => {
            const existing = state.cargoGroups[location];
            newGroups[location] = {
              color: existing?.color ?? palette[colorIndex % palette.length],
              label: existing?.label ?? location,
              items: items.map((i) => ({
                missionId: i.missionId,
                commodity: i.commodity,
                quantity: i.quantity,
              })),
            };
            // Preserve existing position if it exists
            if (location in state.cargoGroupPositions) {
              newPositions[location] = state.cargoGroupPositions[location];
              occupiedCells.add(state.cargoGroupPositions[location]);
            }
            colorIndex++;
          });

          // Assign positions to new groups that don't have one yet
          let nextCell = 0;
          for (const location of Object.keys(newGroups)) {
            if (!(location in newPositions)) {
              while (occupiedCells.has(nextCell)) nextCell++;
              newPositions[location] = nextCell;
              occupiedCells.add(nextCell);
              nextCell++;
            }
          }

          return {
            routeStops: stops,
            cargoGroups: newGroups,
            cargoGroupPositions: newPositions,
            routeStepCompletion: {},
          };
        }),

      reorderStops: (orderedIds) =>
        set((state) => {
          const byId = new Map(state.routeStops.map((s) => [s.id, s]));
          const reordered = orderedIds
            .map((id) => byId.get(id))
            .filter((s): s is RouteStop => s !== undefined);
          return { routeStops: reordered };
        }),

      completeStep: (stopId) =>
        set((state) => ({
          routeStepCompletion: {
            ...state.routeStepCompletion,
            [stopId]: !state.routeStepCompletion[stopId],
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
          // If the target cell is occupied, swap positions
          const occupant = Object.entries(newPositions).find(
            ([, idx]) => idx === toCellIndex
          );
          if (occupant) {
            newPositions[occupant[0]] = newPositions[location];
          }
          newPositions[location] = toCellIndex;
          return { cargoGroupPositions: newPositions };
        }),

      setGridLayout: (layout) => set({ cargoGridLayout: layout }),
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
