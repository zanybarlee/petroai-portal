
import React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { LCCargoRosterEntry, SelectedLCColumns } from "./types";

interface SearchResultsProps {
  results: LCCargoRosterEntry[];
  selectedColumns: SelectedLCColumns;
  onEditSeller: (id: string) => void;
  onEditBuyer: (id: string) => void;
}

export function FinancialSearchResults({
  results,
  selectedColumns,
  onEditSeller,
  onEditBuyer
}: SearchResultsProps) {
  const getStatusVariant = (status: string) => {
    switch (status) {
      case "Draft":
        return "secondary";
      case "Updated":
        return "default";
      case "Final":
        return "success";
      default:
        return "outline";
    }
  };

  return (
    <div className="border rounded-md">
      <Table>
        <TableHeader>
          <TableRow>
            {selectedColumns.id && <TableHead>ID</TableHead>}
            {selectedColumns.transactionId && <TableHead>Transaction ID</TableHead>}
            {selectedColumns.lcIssuingDate && <TableHead>LC Issuing Date</TableHead>}
            {selectedColumns.lcType && <TableHead>LC Type</TableHead>}
            {selectedColumns.lcNumber && <TableHead>LC Number</TableHead>}
            {selectedColumns.lcCredit && <TableHead>LC Credit</TableHead>}
            {selectedColumns.lcExpiryDate && <TableHead>LC Expiry Date</TableHead>}
            {selectedColumns.lcSellStatus && <TableHead>LC Sell Status</TableHead>}
            {selectedColumns.lcSellerBank && <TableHead>LC Seller Bank</TableHead>}
            {selectedColumns.contractParty && <TableHead>Contract Party</TableHead>}
            {selectedColumns.buyerLcDate && <TableHead>Buyer LC Date</TableHead>}
            {selectedColumns.buyerLcNumber && <TableHead>Buyer LC Number</TableHead>}
            {selectedColumns.buyerLcIssuingBank && <TableHead>Buyer LC Issuing Bank</TableHead>}
            {selectedColumns.dueDateWithBuyer && <TableHead>Due Date With Buyer</TableHead>}
            {selectedColumns.lcAdvisingBank && <TableHead>LC Advising Bank</TableHead>}
            {selectedColumns.status && <TableHead>Status</TableHead>}
            <TableHead>Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {results.length === 0 ? (
            <TableRow>
              <TableCell colSpan={Object.values(selectedColumns).filter(Boolean).length + 1} className="text-center py-4">
                No results found
              </TableCell>
            </TableRow>
          ) : (
            results.map((result) => (
              <TableRow key={result.id}>
                {selectedColumns.id && <TableCell>{result.id}</TableCell>}
                {selectedColumns.transactionId && <TableCell>{result.transactionId}</TableCell>}
                {selectedColumns.lcIssuingDate && <TableCell>{result.lcIssuingDate}</TableCell>}
                {selectedColumns.lcType && <TableCell>{result.lcType}</TableCell>}
                {selectedColumns.lcNumber && <TableCell>{result.lcNumber}</TableCell>}
                {selectedColumns.lcCredit && <TableCell>{result.lcCredit}</TableCell>}
                {selectedColumns.lcExpiryDate && <TableCell>{result.lcExpiryDate}</TableCell>}
                {selectedColumns.lcSellStatus && <TableCell>{result.lcSellStatus}</TableCell>}
                {selectedColumns.lcSellerBank && <TableCell>{result.lcSellerBank}</TableCell>}
                {selectedColumns.contractParty && <TableCell>{result.contractParty}</TableCell>}
                {selectedColumns.buyerLcDate && <TableCell>{result.buyerLcDate}</TableCell>}
                {selectedColumns.buyerLcNumber && <TableCell>{result.buyerLcNumber}</TableCell>}
                {selectedColumns.buyerLcIssuingBank && <TableCell>{result.buyerLcIssuingBank}</TableCell>}
                {selectedColumns.dueDateWithBuyer && <TableCell>{result.dueDateWithBuyer}</TableCell>}
                {selectedColumns.lcAdvisingBank && <TableCell>{result.lcAdvisingBank}</TableCell>}
                {selectedColumns.status && (
                  <TableCell>
                    <Badge variant={getStatusVariant(result.status)}>{result.status}</Badge>
                  </TableCell>
                )}
                <TableCell>
                  <div className="flex space-x-2">
                    <Button 
                      variant="outline" 
                      size="sm"
                      onClick={() => onEditSeller(result.id)}
                      disabled={result.status === "Final"}
                    >
                      Seller
                    </Button>
                    <Button 
                      variant="outline" 
                      size="sm"
                      onClick={() => onEditBuyer(result.id)}
                      disabled={result.status === "Final"}
                    >
                      Buyer
                    </Button>
                  </div>
                </TableCell>
              </TableRow>
            ))
          )}
        </TableBody>
      </Table>
    </div>
  );
}
