
import React from "react";
import { FinancialSearchForm } from "./financial-search/SearchForm";
import { FinancialColumnSelector } from "./financial-search/ColumnSelector";
import { FinancialSearchResults } from "./financial-search/SearchResults";
import { useFinancialSearch } from "./financial-search/useFinancialSearch";

export default function FinancialCargoRosterSearch() {
  const {
    results,
    selectedColumns,
    performSearch,
    handleColumnChange,
    handleSelectAllColumns,
    handleUnselectAllColumns,
    handleEditSeller,
    handleEditBuyer,
  } = useFinancialSearch();

  return (
    <div className="space-y-6">
      <div className="p-6 bg-white rounded-lg border shadow-sm">
        <h2 className="text-xl font-semibold mb-4">Search Financial Cargo Roster</h2>
        <FinancialSearchForm onSearch={performSearch} />
      </div>

      {results.length > 0 && (
        <>
          <div className="p-6 bg-white rounded-lg border shadow-sm">
            <h2 className="text-xl font-semibold mb-4">Column Selection</h2>
            <FinancialColumnSelector
              selectedColumns={selectedColumns}
              onColumnChange={handleColumnChange}
              onSelectAll={handleSelectAllColumns}
              onUnselectAll={handleUnselectAllColumns}
            />
          </div>

          <div className="p-6 bg-white rounded-lg border shadow-sm overflow-auto">
            <h2 className="text-xl font-semibold mb-4">Search Results</h2>
            <FinancialSearchResults
              results={results}
              selectedColumns={selectedColumns}
              onEditSeller={handleEditSeller}
              onEditBuyer={handleEditBuyer}
            />
          </div>
        </>
      )}
    </div>
  );
}
