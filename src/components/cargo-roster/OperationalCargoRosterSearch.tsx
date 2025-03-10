
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
import { Search, Printer, Download } from "lucide-react";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { toast } from "sonner";

interface SearchResult {
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

const mockResults: SearchResult[] = [
  {
    id: "1",
    txId: "OP-TX-001",
    vesselName: "Vessel Alpha",
    tradeType: "Import",
    productType: "Crude",
    productName: "Crude Oil",
    buyer: "Company A",
    supplier: "Supplier X",
    layDayStart: "01-Apr-2023",
    loadPort: "Singapore",
    dischargePort: "Hong Kong",
    quantityLoadedBBLs: "14,750",
    quantityLoadedMT: "2,350",
    status: "Updated",
  },
  {
    id: "2",
    txId: "OP-TX-002",
    vesselName: "Vessel Beta",
    tradeType: "Export",
    productType: "Refined",
    productName: "Diesel",
    buyer: "Company B",
    supplier: "Supplier Y",
    layDayStart: "10-Apr-2023",
    loadPort: "Hong Kong",
    dischargePort: "Tokyo",
    quantityLoadedBBLs: "8,050",
    quantityLoadedMT: "1,280",
    status: "Draft",
  },
  {
    id: "3",
    txId: "OP-TX-003",
    vesselName: "Vessel Gamma",
    tradeType: "Domestic",
    productType: "Gas",
    productName: "LNG",
    buyer: "Company C",
    supplier: "Supplier Z",
    layDayStart: "18-Apr-2023",
    loadPort: "Shanghai",
    dischargePort: "Busan",
    quantityLoadedBBLs: "12,300",
    quantityLoadedMT: "1,950",
    status: "Final",
  },
];

export default function OperationalCargoRosterSearch() {
  const [searchField, setSearchField] = useState("txId");
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState<SearchResult[]>([]);
  const [hasSearched, setHasSearched] = useState(false);
  const [selectedColumns, setSelectedColumns] = useState({
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

  const handlePrint = () => {
    toast.info("Print functionality", {
      description: "Generating print-friendly version...",
    });
  };

  const handleExport = () => {
    toast.info("Export functionality", {
      description: "Exporting search results to Excel...",
    });
  };

  const toggleColumn = (column: keyof typeof selectedColumns) => {
    setSelectedColumns(prev => ({
      ...prev,
      [column]: !prev[column]
    }));
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
      
      {hasSearched && (
        <div className="space-y-4">
          <div className="flex justify-between items-center">
            <h3 className="text-lg font-medium">Search Results</h3>
            
            <div className="flex gap-2">
              <Button variant="outline" className="gap-2" onClick={handlePrint}>
                <Printer className="h-4 w-4" />
                Print Friendly
              </Button>
              <Button variant="outline" className="gap-2" onClick={handleExport}>
                <Download className="h-4 w-4" />
                Export
              </Button>
            </div>
          </div>
          
          <div className="space-y-2">
            <h4 className="text-sm font-medium">Display Columns</h4>
            <div className="flex flex-wrap gap-3">
              <div className="flex items-center space-x-2">
                <Checkbox 
                  id="col-txId" 
                  checked={selectedColumns.txId} 
                  onCheckedChange={() => toggleColumn('txId')}
                />
                <Label htmlFor="col-txId">TX ID</Label>
              </div>
              
              <div className="flex items-center space-x-2">
                <Checkbox 
                  id="col-vesselName" 
                  checked={selectedColumns.vesselName} 
                  onCheckedChange={() => toggleColumn('vesselName')}
                />
                <Label htmlFor="col-vesselName">Vessel</Label>
              </div>
              
              <div className="flex items-center space-x-2">
                <Checkbox 
                  id="col-tradeType" 
                  checked={selectedColumns.tradeType} 
                  onCheckedChange={() => toggleColumn('tradeType')}
                />
                <Label htmlFor="col-tradeType">Trade Type</Label>
              </div>
              
              <div className="flex items-center space-x-2">
                <Checkbox 
                  id="col-product" 
                  checked={selectedColumns.product} 
                  onCheckedChange={() => toggleColumn('product')}
                />
                <Label htmlFor="col-product">Product</Label>
              </div>
              
              <div className="flex items-center space-x-2">
                <Checkbox 
                  id="col-buyer" 
                  checked={selectedColumns.buyer} 
                  onCheckedChange={() => toggleColumn('buyer')}
                />
                <Label htmlFor="col-buyer">Buyer</Label>
              </div>
              
              <div className="flex items-center space-x-2">
                <Checkbox 
                  id="col-supplier" 
                  checked={selectedColumns.supplier} 
                  onCheckedChange={() => toggleColumn('supplier')}
                />
                <Label htmlFor="col-supplier">Supplier</Label>
              </div>
              
              <div className="flex items-center space-x-2">
                <Checkbox 
                  id="col-layDayStart" 
                  checked={selectedColumns.layDayStart} 
                  onCheckedChange={() => toggleColumn('layDayStart')}
                />
                <Label htmlFor="col-layDayStart">Lay Day</Label>
              </div>
              
              <div className="flex items-center space-x-2">
                <Checkbox 
                  id="col-ports" 
                  checked={selectedColumns.ports} 
                  onCheckedChange={() => toggleColumn('ports')}
                />
                <Label htmlFor="col-ports">Ports</Label>
              </div>
              
              <div className="flex items-center space-x-2">
                <Checkbox 
                  id="col-quantity" 
                  checked={selectedColumns.quantity} 
                  onCheckedChange={() => toggleColumn('quantity')}
                />
                <Label htmlFor="col-quantity">Quantity</Label>
              </div>
              
              <div className="flex items-center space-x-2">
                <Checkbox 
                  id="col-status" 
                  checked={selectedColumns.status} 
                  onCheckedChange={() => toggleColumn('status')}
                />
                <Label htmlFor="col-status">Status</Label>
              </div>
            </div>
          </div>
          
          {searchResults.length > 0 ? (
            <div className="rounded-md border">
              <Table>
                <TableHeader>
                  <TableRow>
                    {selectedColumns.txId && <TableHead>TX ID</TableHead>}
                    {selectedColumns.vesselName && <TableHead>Vessel</TableHead>}
                    {selectedColumns.tradeType && <TableHead>Trade Type</TableHead>}
                    {selectedColumns.product && <TableHead>Product</TableHead>}
                    {selectedColumns.buyer && <TableHead>Buyer</TableHead>}
                    {selectedColumns.supplier && <TableHead>Supplier</TableHead>}
                    {selectedColumns.layDayStart && <TableHead>Lay Day Start</TableHead>}
                    {selectedColumns.ports && <TableHead>Load/Discharge Ports</TableHead>}
                    {selectedColumns.quantity && <TableHead>Quantity (BBLs/MT)</TableHead>}
                    {selectedColumns.status && <TableHead>Status</TableHead>}
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {searchResults.map((result) => (
                    <TableRow key={result.id}>
                      {selectedColumns.txId && 
                        <TableCell className="font-medium">{result.txId}</TableCell>}
                      {selectedColumns.vesselName && 
                        <TableCell>{result.vesselName}</TableCell>}
                      {selectedColumns.tradeType && 
                        <TableCell>{result.tradeType}</TableCell>}
                      {selectedColumns.product && 
                        <TableCell>{`${result.productType} - ${result.productName}`}</TableCell>}
                      {selectedColumns.buyer && 
                        <TableCell>{result.buyer}</TableCell>}
                      {selectedColumns.supplier && 
                        <TableCell>{result.supplier}</TableCell>}
                      {selectedColumns.layDayStart && 
                        <TableCell>{result.layDayStart}</TableCell>}
                      {selectedColumns.ports && 
                        <TableCell>{`${result.loadPort} → ${result.dischargePort}`}</TableCell>}
                      {selectedColumns.quantity && 
                        <TableCell>{`${result.quantityLoadedBBLs} / ${result.quantityLoadedMT}`}</TableCell>}
                      {selectedColumns.status && 
                        <TableCell>
                          <Badge 
                            variant={
                              result.status === "Final" 
                                ? "default" 
                                : result.status === "Updated" 
                                  ? "secondary" 
                                  : "outline"
                            }
                          >
                            {result.status}
                          </Badge>
                        </TableCell>}
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
