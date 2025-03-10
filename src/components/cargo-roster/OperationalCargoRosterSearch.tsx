
import { useState } from "react";
import { SearchForm } from "./operational-search/SearchForm";
import { ColumnSelector } from "./operational-search/ColumnSelector";
import { SearchResults } from "./operational-search/SearchResults";
import { SearchResult, SelectedColumns } from "./operational-search/types";

export default function OperationalCargoRosterSearch() {
  const [searchResults, setSearchResults] = useState<SearchResult[]>([]);
  const [hasSearched, setHasSearched] = useState(false);
  const [selectedColumns, setSelectedColumns] = useState<SelectedColumns>({
    txId: true,
    vesselName: true,
    tradeType: true,
    product: true,
    buyer: true,
    supplier: true,
    layDayStart: true,
    ports: true,
    quantity: true,
    status: true,
  });

  const handleSearchResults = (results: SearchResult[]) => {
    setSearchResults(results);
  };

  const handleSearchPerformed = () => {
    setHasSearched(true);
  };

  const toggleColumn = (column: keyof SelectedColumns) => {
    setSelectedColumns(prev => ({
      ...prev,
      [column]: !prev[column]
    }));
  };

  return (
    <div className="space-y-8">
      <SearchForm 
        onSearchResults={handleSearchResults}
        onSearchPerformed={handleSearchPerformed}
      />
      
      {hasSearched && (
        <div className="space-y-4">
          <ColumnSelector 
            selectedColumns={selectedColumns}
            onToggleColumn={toggleColumn}
          />
          
          <SearchResults 
            results={searchResults}
            selectedColumns={selectedColumns}
          />
        </div>
      )}
    </div>
  );
}
