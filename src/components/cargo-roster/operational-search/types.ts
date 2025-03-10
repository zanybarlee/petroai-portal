
export interface SearchResult {
  id: string;
  txId: string;
  vesselName: string;
  tradeType: string;
  productType: string;
  productName: string;
  buyer: string;
  supplier: string;
  layDayStart: string;
  loadPort: string;
  dischargePort: string;
  quantityLoadedBBLs: string;
  quantityLoadedMT: string;
  status: string;
}

export interface SelectedColumns {
  txId: boolean;
  vesselName: boolean;
  tradeType: boolean;
  product: boolean;
  buyer: boolean;
  supplier: boolean;
  layDayStart: boolean;
  ports: boolean;
  quantity: boolean;
  status: boolean;
}

export type SearchField = keyof SearchResult;
