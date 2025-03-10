
import { LCCargoRosterEntry } from "./types";

export const mockLCData: LCCargoRosterEntry[] = [
  {
    id: "251",
    transactionId: "FIN-TX-001",
    lcIssuingDate: "27-Aug-2003",
    lcType: "Sight",
    lcNumber: "LC-0001",
    lcCredit: "$15,000,000",
    lcExpiryDate: "31-Dec-2003",
    lcSellStatus: "With Seller",
    lcSellerBank: "PT BANK ABC",
    contractParty: "Company X",
    buyerLcDate: "",
    buyerLcNumber: "",
    buyerLcIssuingBank: "",
    dueDateWithBuyer: "",
    lcAdvisingBank: "",
    status: "Updated"
  },
  {
    id: "252",
    transactionId: "FIN-TX-002",
    lcIssuingDate: "10-Sep-2003",
    lcType: "Term",
    lcNumber: "LC-0002",
    lcCredit: "$8,500,000",
    lcExpiryDate: "15-Mar-2004",
    lcSellStatus: "With Seller",
    lcSellerBank: "PT BANK XYZ",
    contractParty: "Company Y",
    buyerLcDate: "15-Sep-2003",
    buyerLcNumber: "BLC-0234",
    buyerLcIssuingBank: "PT MANDIRI SEJATI",
    dueDateWithBuyer: "25-Mar-2004",
    lcAdvisingBank: "CITY BANK",
    status: "Draft"
  },
  {
    id: "253",
    transactionId: "FIN-TX-003",
    lcIssuingDate: "05-Oct-2003",
    lcType: "Sight",
    lcNumber: "LC-0003",
    lcCredit: "$12,750,000",
    lcExpiryDate: "20-Apr-2004",
    lcSellStatus: "With Seller",
    lcSellerBank: "PT BANK DEF",
    contractParty: "Company Z",
    buyerLcDate: "12-Oct-2003",
    buyerLcNumber: "BLC-0456",
    buyerLcIssuingBank: "PT BANK INDONESIA",
    dueDateWithBuyer: "30-Apr-2004",
    lcAdvisingBank: "HSBC",
    status: "Final"
  }
];
