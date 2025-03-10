import { useState } from "react";
import { LCCargoRosterEntry, SelectedLCColumns } from "./types";
import { mockLCData } from "./mockData";
import { toast } from "sonner";

interface SearchParams {
  id?: string;
  transactionId?: string;
  lcNumber?: string;
  lcIssuingDate?: string;
  sellerBank?: string;
  buyerBank?: string;
}

export function useFinancialSearch() {
  const [results, setResults] = useState<LCCargoRosterEntry[]>([]);
  const [selectedColumns, setSelectedColumns] = useState<SelectedLCColumns>({
    id: true,
    transactionId: true,
    lcIssuingDate: true,
    lcType: true,
    lcNumber: true,
    lcCredit: true,
    lcExpiryDate: false,
    lcSellStatus: true,
    lcSellerBank: true,
    contractParty: false,
    buyerLcDate: false,
    buyerLcNumber: false,
    buyerLcIssuingBank: false,
    dueDateWithBuyer: false,
    lcAdvisingBank: false,
    status: true,
  });

  const performSearch = (params: SearchParams) => {
    // Filter the mock data based on search params
    const filteredResults = mockLCData.filter((item) => {
      if (params.id && !item.id.toLowerCase().includes(params.id.toLowerCase())) {
        return false;
      }
      if (params.transactionId && !item.transactionId.toLowerCase().includes(params.transactionId.toLowerCase())) {
        return false;
      }
      if (params.lcNumber && !item.lcNumber.toLowerCase().includes(params.lcNumber.toLowerCase())) {
        return false;
      }
      if (params.lcIssuingDate && !item.lcIssuingDate.toLowerCase().includes(params.lcIssuingDate.toLowerCase())) {
        return false;
      }
      if (params.sellerBank && !item.lcSellerBank.toLowerCase().includes(params.sellerBank.toLowerCase())) {
        return false;
      }
      if (params.buyerBank && !item.buyerLcIssuingBank.toLowerCase().includes(params.buyerBank.toLowerCase())) {
        return false;
      }
      return true;
    });

    setResults(filteredResults);
  };

  const handleColumnChange = (columnName: keyof SelectedLCColumns, value: boolean) => {
    setSelectedColumns((prev) => ({
      ...prev,
      [columnName]: value,
    }));
  };

  const handleSelectAllColumns = () => {
    // Create a new object with all properties set to true
    const allSelected: SelectedLCColumns = {
      id: true,
      transactionId: true,
      lcIssuingDate: true,
      lcType: true,
      lcNumber: true,
      lcCredit: true,
      lcExpiryDate: true,
      lcSellStatus: true,
      lcSellerBank: true,
      contractParty: true,
      buyerLcDate: true,
      buyerLcNumber: true,
      buyerLcIssuingBank: true,
      dueDateWithBuyer: true,
      lcAdvisingBank: true,
      status: true,
    };
    setSelectedColumns(allSelected);
  };

  const handleUnselectAllColumns = () => {
    // Keep at least the ID column selected
    const allUnselected: SelectedLCColumns = {
      id: true,
      transactionId: false,
      lcIssuingDate: false,
      lcType: false,
      lcNumber: false,
      lcCredit: false,
      lcExpiryDate: false,
      lcSellStatus: false,
      lcSellerBank: false,
      contractParty: false,
      buyerLcDate: false,
      buyerLcNumber: false,
      buyerLcIssuingBank: false,
      dueDateWithBuyer: false,
      lcAdvisingBank: false,
      status: false,
    };
    setSelectedColumns(allUnselected);
  };

  const handleEditSeller = (id: string) => {
    // In a real application, this would navigate to a form or open a modal
    toast.info(`Editing seller information for LC #${id}`);
    console.log(`Edit seller for LC #${id}`);
  };

  const handleEditBuyer = (id: string) => {
    // In a real application, this would navigate to a form or open a modal
    toast.info(`Editing buyer information for LC #${id}`);
    console.log(`Edit buyer for LC #${id}`);
  };

  return {
    results,
    selectedColumns,
    performSearch,
    handleColumnChange,
    handleSelectAllColumns,
    handleUnselectAllColumns,
    handleEditSeller,
    handleEditBuyer,
  };
}
