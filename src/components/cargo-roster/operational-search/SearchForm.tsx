
import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Search } from "lucide-react";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { SearchField, SearchResult } from "./types";
import { mockResults } from "./mockData";

interface SearchFormProps {
  onSearchResults: (results: SearchResult[]) => void;
  onSearchPerformed: () => void;
}

export function SearchForm({ onSearchResults, onSearchPerformed }: SearchFormProps) {
  const [searchField, setSearchField] = useState<SearchField>("txId");
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = () => {
    // In a real app, this would be an API call
    // For now, just filter the mock data
    const results = mockResults.filter(result => {
      const valueToSearch = result[searchField]?.toString().toLowerCase();
      return valueToSearch?.includes(searchTerm.toLowerCase());
    });
    
    onSearchResults(results);
    onSearchPerformed();
  };

  return (
    <div className="space-y-4 p-4 border rounded-md">
      <h3 className="text-lg font-medium">Search Criteria</h3>
      
      <div className="grid gap-4 md:grid-cols-3">
        <div className="space-y-2">
          <Label htmlFor="searchField">Search by</Label>
          <Select value={searchField} onValueChange={(value) => setSearchField(value as SearchField)}>
            <SelectTrigger id="searchField">
              <SelectValue placeholder="Select search field" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="txId">Transaction ID</SelectItem>
              <SelectItem value="vesselName">Vessel Name</SelectItem>
              <SelectItem value="productName">Product Name</SelectItem>
              <SelectItem value="buyer">Buyer</SelectItem>
              <SelectItem value="supplier">Supplier</SelectItem>
              <SelectItem value="loadPort">Load Port</SelectItem>
              <SelectItem value="dischargePort">Discharge Port</SelectItem>
            </SelectContent>
          </Select>
        </div>
        
        <div className="space-y-2">
          <Label htmlFor="searchTerm">Search term</Label>
          <Input 
            id="searchTerm" 
            value={searchTerm} 
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder={`Enter ${searchField}`}
          />
        </div>
        
        <div className="flex items-end">
          <Button onClick={handleSearch} className="gap-2">
            <Search className="h-4 w-4" />
            Search
          </Button>
        </div>
      </div>
    </div>
  );
}
