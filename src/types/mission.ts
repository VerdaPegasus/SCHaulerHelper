export interface CommodityRow {
  id: string;
  commodity: string;
  pickup: string;
  destination: string;
  quantity: number;
  maxBoxSize: 1 | 2 | 3 | 4;
}

export interface Mission {
  id: string;
  payout: string;
  commodities: CommodityRow[];
}
