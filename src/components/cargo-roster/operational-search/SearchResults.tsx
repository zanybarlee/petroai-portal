
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Printer, Download } from "lucide-react";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { toast } from "sonner";
import { SearchResult, SelectedColumns } from "./types";

interface SearchResultsProps {
  results: SearchResult[];
  selectedColumns: SelectedColumns;
}

export function SearchResults({ results, selectedColumns }: SearchResultsProps) {
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

  return (
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
      
      {results.length > 0 ? (
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
              {results.map((result) => (
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
  );
}
