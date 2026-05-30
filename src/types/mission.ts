export interface CommodityRow {
  id: string;
  commodity: string;
  pickup: string;
  destination: string;
  quantity: number;
  maxBoxSize: 1 | 2 | 4 | 8 | 16 | 24 | 32;
}

export interface Mission {
  id: string;
  payout: string;
  commodities: CommodityRow[];
}
