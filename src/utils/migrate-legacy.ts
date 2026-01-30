/**
 * Migrate localStorage data from the vanilla JS app to the new Zustand persist format.
 *
 * Must be called BEFORE Zustand stores are created (i.e. before any component imports).
 *
 * Old keys:
 *   haulerHelperSession   — main session (missions, ship, system, category, locationColors, etc.)
 *   haulerHelperTheme     — theme name string
 *   haulerHelperCargoGridLayout — { cols, rows }
 *   haulerHelperRouteViewMode   — "all" | "current" | "current-next"
 *
 * New Zustand keys (wrapped in { state: {...}, version: 0 }):
 *   haulerHelperSession   — missions, selectedShipId, selectedSystem, selectedCategory
 *   haulerHelperUI         — theme, activeDeliveryTab, modal states
 *   haulerHelperDelivery   — routeViewMode, cargoGridLayout, cargoGroups, cargoGroupPositions
 */

interface LegacyCommodity {
  id: string;
  pickup: string;
  destination: string;
  commodity: string;
  quantity: string | number;
  maxBoxSize: string | number;
}

interface LegacyMission {
  id: string;
  payout: string;
  commodities: LegacyCommodity[];
}

interface LegacySession {
  ship?: string | null;
  system?: string;
  category?: string;
  missions?: LegacyMission[];
  locationColors?: Record<string, { color: string; label: string }>;
  cargoGroups?: Record<string, { color: string }>;
  routeStepCompletion?: Record<string, boolean>;
  routeViewMode?: string;
  timestamp?: string;
}

function isLegacyFormat(raw: unknown): raw is LegacySession {
  if (!raw || typeof raw !== 'object') return false;
  const obj = raw as Record<string, unknown>;
  // New Zustand format wraps everything in { state: {...}, version: N }
  // Legacy format stores data at the root level
  if ('state' in obj && 'version' in obj) return false;
  // Legacy format has missions array at root, or ship/system/category keys
  return 'missions' in obj || 'ship' in obj || 'system' in obj;
}

export function migrateLegacyStorage(): void {
  const rawSession = localStorage.getItem('haulerHelperSession');
  if (!rawSession) return;

  let parsed: unknown;
  try {
    parsed = JSON.parse(rawSession);
  } catch {
    return;
  }

  if (!isLegacyFormat(parsed)) return;

  // --- Migrate main session → Zustand haulerHelperSession ---
  const missions = (parsed.missions ?? []).map((m) => ({
    id: m.id,
    payout: m.payout ?? '',
    commodities: (m.commodities ?? []).map((c) => ({
      id: c.id,
      commodity: c.commodity ?? '',
      pickup: c.pickup ?? '',
      destination: c.destination ?? '',
      quantity: typeof c.quantity === 'string' ? parseInt(c.quantity, 10) || 0 : c.quantity || 0,
      maxBoxSize: typeof c.maxBoxSize === 'string' ? parseInt(c.maxBoxSize, 10) || 4 : c.maxBoxSize || 4,
    })),
  }));

  const newSession = {
    state: {
      missions,
      selectedShipId: parsed.ship ?? null,
      selectedSystem: parsed.system ?? '',
      selectedCategory: parsed.category ?? '',
    },
    version: 0,
  };

  localStorage.setItem('haulerHelperSession', JSON.stringify(newSession));

  // --- Migrate theme → Zustand haulerHelperUI ---
  const legacyTheme = localStorage.getItem('haulerHelperTheme');
  // Only write if haulerHelperUI doesn't already exist
  if (!localStorage.getItem('haulerHelperUI')) {
    const newUI = {
      state: {
        theme: legacyTheme ?? 'stardust',
        activeDeliveryTab: 'route',
      },
      version: 0,
    };
    localStorage.setItem('haulerHelperUI', JSON.stringify(newUI));
  }

  // --- Migrate delivery settings → Zustand haulerHelperDelivery ---
  if (!localStorage.getItem('haulerHelperDelivery')) {
    // Grid layout
    let gridLayout = { cols: 2, rows: 4 };
    const legacyGrid = localStorage.getItem('haulerHelperCargoGridLayout');
    if (legacyGrid) {
      try {
        const g = JSON.parse(legacyGrid);
        if (g.cols && g.rows) gridLayout = { cols: g.cols, rows: g.rows };
      } catch {
        // ignore
      }
    }

    // Route view mode
    const legacyViewMode = localStorage.getItem('haulerHelperRouteViewMode') ??
      parsed.routeViewMode ?? 'all';

    // Cargo groups — merge locationColors and cargoGroups from old session
    const cargoGroups: Record<string, { color: string; label: string; items: never[] }> = {};
    const cargoGroupPositions: Record<string, number> = {};
    let posIndex = 0;

    if (parsed.locationColors) {
      for (const [location, data] of Object.entries(parsed.locationColors)) {
        cargoGroups[location] = {
          color: data.color,
          label: data.label || location,
          items: [],
        };
        cargoGroupPositions[location] = posIndex++;
      }
    }

    const newDelivery = {
      state: {
        routeViewMode: legacyViewMode,
        cargoGridLayout: gridLayout,
        cargoGroups,
        cargoGroupPositions,
      },
      version: 0,
    };
    localStorage.setItem('haulerHelperDelivery', JSON.stringify(newDelivery));
  }

  // --- Clean up legacy-only keys ---
  localStorage.removeItem('haulerHelperTheme');
  localStorage.removeItem('haulerHelperCargoGridLayout');
  localStorage.removeItem('haulerHelperCargoGridExpanded');
  localStorage.removeItem('haulerHelperRouteViewMode');
  localStorage.removeItem('haulerHelperOCRImport');
  localStorage.removeItem('haulerHelperOCRImportAll');
  // Deprecated legacy keys
  localStorage.removeItem('haulerHelperDeliveryLayout');
  localStorage.removeItem('haulerHelperDeliveryOrder');
  localStorage.removeItem('haulerHelperCommodityOrder');
  localStorage.removeItem('haulerHelperOrganizerGroupBy');
}
