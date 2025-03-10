
import { useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import { Search, Printer, Download, ChevronDown } from "lucide-react";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

interface SearchResult {
  id: string;
  txId: string;
  vessel: string;
  product: string;
  quantity: string;
  buyer: string;
  supplier: string;
  layDayStart: string;
  layDayEnd: string;
  status: string;
  sellValue: string;
  buyValue: string;
  margin: string;
}

const mockResults: SearchResult[] = [
  {
    id: "1",
    txId: "TX-001",
    vessel: "Vessel A",
    product: "Crude Oil",
    quantity: "10,000 MT",
    buyer: "Buyer 1",
    supplier: "Supplier 1",
    layDayStart: "01-Mar-2023",
    layDayEnd: "10-Mar-2023",
    status: "Final",
    sellValue: "$750,000",
    buyValue: "$700,000",
    margin: "$50,000"
  },
  {
    id: "2",
    txId: "TX-002",
    vessel: "Vessel B",
    product: "Gasoline",
    quantity: "5,000 MT",
    buyer: "Buyer 2",
    supplier: "Supplier 2",
    layDayStart: "15-Mar-2023",
    layDayEnd: "20-Mar-2023",
    status: "Updated",
    sellValue: "$375,000",
    buyValue: "$345,000",
    margin: "$30,000"
  },
  {
    id: "3",
    txId: "TX-003",
    vessel: "Vessel C",
    product: "Diesel",
    quantity: "7,500 MT",
    buyer: "Buyer 3",
    supplier: "Supplier 3",
    layDayStart: "22-Mar-2023",
    layDayEnd: "30-Mar-2023",
    status: "Final",
    sellValue: "$562,500",
    buyValue: "$525,000",
    margin: "$37,500"
  }
];

export default function CargoRosterSearch() {
  const [searchField, setSearchField] = useState("txId");
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState<SearchResult[]>([]);
  const [hasSearched, setHasSearched] = useState(false);

  const handleSearch = () => {
    // In a real app, this would be an API call
    // For now, just filter the mock data
    const results = mockResults.filter(result => {
      const valueToSearch = result[searchField as keyof SearchResult]?.toString().toLowerCase();
      return valueToSearch?.includes(searchTerm.toLowerCase());
    });
    
    setSearchResults(results);
    setHasSearched(true);
  };

  return (
    <div className="space-y-8">
      <div className="space-y-4 p-4 border rounded-md">
        <h3 className="text-lg font-medium">Search Criteria</h3>
        
        <div className="grid gap-4 md:grid-cols-3">
          <div className="space-y-2">
            <Label htmlFor="searchField">Search by</Label>
            <Select value={searchField} onValueChange={setSearchField}>
              <SelectTrigger id="searchField">
                <SelectValue placeholder="Select search field" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="txId">Transaction ID</SelectItem>
                <SelectItem value="vessel">Vessel</SelectItem>
                <SelectItem value="product">Product</SelectItem>
                <SelectItem value="buyer">Buyer</SelectItem>
                <SelectItem value="supplier">Supplier</SelectItem>
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
      
      {hasSearched && (
        <div className="space-y-4">
          <div className="flex justify-between items-center">
            <h3 className="text-lg font-medium">Search Results</h3>
            
            <div className="flex gap-2">
              <Button variant="outline" className="gap-2">
                <Printer className="h-4 w-4" />
                Print Friendly
              </Button>
              <Button variant="outline" className="gap-2">
                <Download className="h-4 w-4" />
                Export
              </Button>
            </div>
          </div>
          
          {searchResults.length > 0 ? (
            <div className="rounded-md border">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>TX ID</TableHead>
                    <TableHead>Vessel</TableHead>
                    <TableHead>Product</TableHead>
                    <TableHead>Quantity</TableHead>
                    <TableHead>Buyer</TableHead>
                    <TableHead>Supplier</TableHead>
                    <TableHead>Lay Day Period</TableHead>
                    <TableHead>Sell Value</TableHead>
                    <TableHead>Buy Value</TableHead>
                    <TableHead>Margin</TableHead>
                    <TableHead>Status</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {searchResults.map((result) => (
                    <TableRow key={result.id}>
                      <TableCell className="font-medium">{result.txId}</TableCell>
                      <TableCell>{result.vessel}</TableCell>
                      <TableCell>{result.product}</TableCell>
                      <TableCell>{result.quantity}</TableCell>
                      <TableCell>{result.buyer}</TableCell>
                      <TableCell>{result.supplier}</TableCell>
                      <TableCell>{`${result.layDayStart} - ${result.layDayEnd}`}</TableCell>
                      <TableCell>{result.sellValue}</TableCell>
                      <TableCell>{result.buyValue}</TableCell>
                      <TableCell className="font-medium text-green-600">{result.margin}</TableCell>
                      <TableCell>
                        <Badge 
                          variant={result.status === "Final" ? "default" : "secondary"}
                        >
                          {result.status}
                        </Badge>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          ) : (
            <div className="text-center p-8 border rounded-md bg-muted/20">
              <p>No results found. Try different search criteria.</p>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
