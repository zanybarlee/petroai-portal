
export interface LCCargoRosterEntry {
  id: string;
  transactionId: string;
  lcIssuingDate: string;
  lcType: string;
  lcNumber: string;
  lcCredit: string;
  lcExpiryDate: string;
  lcSellStatus: string;
  lcSellerBank: string;
  contractParty: string;
  buyerLcDate: string;
  buyerLcNumber: string;
  buyerLcIssuingBank: string;
  dueDateWithBuyer: string;
  lcAdvisingBank: string;
  status: "Draft" | "Updated" | "Final";
}

export interface SelectedLCColumns {
  id: boolean;
  transactionId: boolean;
  lcIssuingDate: boolean;
  lcType: boolean;
  lcNumber: boolean;
  lcCredit: boolean;
  lcExpiryDate: boolean;
  lcSellStatus: boolean;
  lcSellerBank: boolean;
  contractParty: boolean;
  buyerLcDate: boolean;
  buyerLcNumber: boolean;
  buyerLcIssuingBank: boolean;
  dueDateWithBuyer: boolean;
  lcAdvisingBank: boolean;
  status: boolean;
}

export type LCSearchField = keyof LCCargoRosterEntry;
