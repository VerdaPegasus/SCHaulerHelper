import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import type { Mission, CommodityRow, Ship, SystemId, Category } from '@/types';
import { findShipById } from '@/data';
import { parsePayoutToNumber } from '@/utils/box-breakdown';

let nextMissionId = 0;
let nextCommodityId = 0;

function generateMissionId(): string {
  return `mission_${++nextMissionId}`;
}

function generateCommodityId(): string {
  return `commodity_${++nextCommodityId}`;
}

interface MissionState {
  missions: Mission[];
  selectedShip: Ship | null;
  selectedSystem: SystemId | '';
  selectedCategory: Category | '';
  hydrated: boolean;

  // Ship & filter actions
  setShip: (ship: Ship | null) => void;
  setSystem: (system: SystemId | '') => void;
  setCategory: (category: Category | '') => void;

  // Mission actions
  addMission: () => void;
  removeMission: (id: string) => void;
  reorderMissions: (orderedIds: string[]) => void;
  updatePayout: (missionId: string, payout: string) => void;

  // Commodity actions
  addCommodityRow: (missionId: string) => void;
  removeCommodityRow: (missionId: string, rowId: string) => void;
  updateCommodityRow: (
    missionId: string,
    rowId: string,
    field: keyof CommodityRow,
    value: string | number
  ) => void;

  // OCR import
  importOCRMissions: (
    parsed: Array<{
      payout: number | null;
      commodities: Array<{
        commodity: string;
        pickup: string;
        destination: string;
        quantity: number;
      }>;
    }>
  ) => void;

  // Reset
  clearMissions: () => void;
  clearAll: () => void;

  // Computed helpers
  getTotalPayout: () => number;
  getTotalSCU: () => number;
}

export const useMissionStore = create<MissionState>()(
  persist(
    (set, get) => ({
      missions: [],
      selectedShip: null,
      selectedSystem: '',
      selectedCategory: '',
      hydrated: false,

      // Ship & filters
      setShip: (ship) => set({ selectedShip: ship }),
      setSystem: (system) => set({ selectedSystem: system }),
      setCategory: (category) => set({ selectedCategory: category }),

      // Mission CRUD
      addMission: () =>
        set((state) => {
          const id = generateMissionId();
          const firstCommodityId = generateCommodityId();
          const newMission: Mission = {
            id,
            payout: '',
            commodities: [
              {
                id: firstCommodityId,
                commodity: '',
                pickup: '',
                destination: '',
                quantity: 0,
                maxBoxSize: 4,
              },
            ],
          };
          return { missions: [...state.missions, newMission] };
        }),

      removeMission: (id) =>
        set((state) => ({
          missions: state.missions.filter((m) => m.id !== id),
        })),

      reorderMissions: (orderedIds) =>
        set((state) => {
          const byId = new Map(state.missions.map((m) => [m.id, m]));
          const reordered = orderedIds
            .map((id) => byId.get(id))
            .filter((m): m is Mission => m !== undefined);
          return { missions: reordered };
        }),

      updatePayout: (missionId, payout) =>
        set((state) => ({
          missions: state.missions.map((m) =>
            m.id === missionId ? { ...m, payout } : m
          ),
        })),

      // Commodity CRUD
      addCommodityRow: (missionId) =>
        set((state) => ({
          missions: state.missions.map((m) => {
            if (m.id !== missionId) return m;
            if (m.commodities.length >= 8) return m;

            const prev = m.commodities[m.commodities.length - 1];
            const newRow: CommodityRow = {
              id: generateCommodityId(),
              commodity: prev?.commodity ?? '',
              pickup: prev?.pickup ?? '',
              destination: prev?.destination ?? '',
              quantity: 0,
              maxBoxSize: prev?.maxBoxSize ?? 4,
            };
            return { ...m, commodities: [...m.commodities, newRow] };
          }),
        })),

      removeCommodityRow: (missionId, rowId) =>
        set((state) => ({
          missions: state.missions.map((m) =>
            m.id === missionId
              ? { ...m, commodities: m.commodities.filter((c) => c.id !== rowId) }
              : m
          ),
        })),

      updateCommodityRow: (missionId, rowId, field, value) =>
        set((state) => ({
          missions: state.missions.map((m) =>
            m.id === missionId
              ? {
                  ...m,
                  commodities: m.commodities.map((c) =>
                    c.id === rowId ? { ...c, [field]: value } : c
                  ),
                }
              : m
          ),
        })),

      // OCR import — directly creates missions from parsed OCR data
      importOCRMissions: (parsed) =>
        set((state) => {
          const newMissions = parsed.map((p) => {
            const id = generateMissionId();
            const payout = p.payout
              ? (p.payout / 1000).toFixed(2).replace(/\.?0+$/, '') + 'k'
              : '';
            return {
              id,
              payout,
              commodities: p.commodities.map((c) => ({
                id: generateCommodityId(),
                commodity: c.commodity,
                pickup: c.pickup,
                destination: c.destination,
                quantity: c.quantity,
                maxBoxSize: 4 as const,
              })),
            };
          });
          return { missions: [...state.missions, ...newMissions] };
        }),

      // Reset
      clearMissions: () =>
        set({ missions: [] }),
      clearAll: () => {
        set({
          missions: [],
          selectedShip: null,
          selectedSystem: '',
          selectedCategory: '',
        });
        localStorage.removeItem('haulerHelperSession');
        localStorage.removeItem('haulerHelperUI');
      },

      // Computed
      getTotalPayout: () => {
        const { missions } = get();
        return missions.reduce((sum, m) => sum + parsePayoutToNumber(m.payout), 0);
      },
      getTotalSCU: () => {
        const { missions } = get();
        return missions.reduce(
          (sum, m) =>
            sum + m.commodities.reduce((s, c) => s + (c.quantity || 0), 0),
          0
        );
      },
    }),
    {
      name: 'haulerHelperSession',
      partialize: (state) => ({
        missions: state.missions,
        selectedShipId: state.selectedShip?.id ?? null,
        selectedSystem: state.selectedSystem,
        selectedCategory: state.selectedCategory,
      }),
      onRehydrateStorage: () => {
        return (rehydrated?: MissionState) => {
          if (rehydrated) {
            // Restore ship object from ID
            const stored = JSON.parse(
              localStorage.getItem('haulerHelperSession') ?? '{}'
            );
            if (stored?.state?.selectedShipId) {
              const ship = findShipById(stored.state.selectedShipId);
              if (ship) {
                rehydrated.selectedShip = ship;
              }
            }
            // Restore ID counters
            const maxMission = rehydrated.missions.reduce(
              (max: number, m: Mission) => {
                const num = parseInt(m.id.replace('mission_', ''), 10);
                return num > max ? num : max;
              },
              0
            );
            nextMissionId = maxMission;

            const maxCommodity = rehydrated.missions.reduce(
              (max: number, m: Mission) => {
                return m.commodities.reduce(
                  (mx: number, c: CommodityRow) => {
                    const num = parseInt(c.id.replace('commodity_', ''), 10);
                    return num > mx ? num : mx;
                  },
                  max
                );
              },
              0
            );
            nextCommodityId = maxCommodity;

            rehydrated.hydrated = true;
          }
        };
      },
    }
  )
);

// Selector hooks for granular subscriptions
export const useMissions = () => useMissionStore((s) => s.missions);
export const useShip = () => useMissionStore((s) => s.selectedShip);
export const useSystem = () => useMissionStore((s) => s.selectedSystem);
export const useCategory = () => useMissionStore((s) => s.selectedCategory);
