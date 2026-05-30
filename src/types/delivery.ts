export interface RouteItem {
  missionNum: number;
  commodity: string;
  quantity: number;
  maxBoxSize: 1 | 2 | 4 | 8 | 16 | 24 | 32;
  from: string;
  to: string;
}

export interface RouteStop {
  location: string;
  pickups: RouteItem[];
  deliveries: RouteItem[];
  cargoBeforeStop: number;
  cargoAfterStop: number;
}

export interface CargoItem {
  missionNum: number;
  commodity: string;
  quantity: number;
  maxBoxSize: 1 | 2 | 4 | 8 | 16 | 24 | 32;
  type: 'pickup' | 'delivery';
  pickup?: string;
  destination?: string;
}

export interface CargoGroup {
  color: string;
  label: string;
  totalSCU: number;
  type: 'pickup' | 'delivery' | 'both';
  items: CargoItem[];
  position: number | null;
}

export interface CargoGridLayout {
  cols: number;
  rows: number;
}

export type RouteViewMode = 'all' | 'current' | 'current-next' | 'remaining';
