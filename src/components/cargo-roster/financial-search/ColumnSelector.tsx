
import React from "react";
import { Checkbox } from "@/components/ui/checkbox";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { SelectedLCColumns } from "./types";

interface ColumnSelectorProps {
  selectedColumns: SelectedLCColumns;
  onColumnChange: (columnName: keyof SelectedLCColumns, value: boolean) => void;
  onSelectAll: () => void;
  onUnselectAll: () => void;
}

export function FinancialColumnSelector({
  selectedColumns,
  onColumnChange,
  onSelectAll,
  onUnselectAll,
}: ColumnSelectorProps) {
  return (
    <div className="p-4 border rounded-md space-y-4">
      <div className="flex justify-between items-center mb-2">
        <h3 className="text-sm font-medium">Visible Columns</h3>
        <div className="space-x-2">
          <Button
            type="button"
            variant="outline"
            size="sm"
            onClick={onSelectAll}
          >
            Select All
          </Button>
          <Button
            type="button"
            variant="outline"
            size="sm"
            onClick={onUnselectAll}
          >
            Unselect All
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
        <div className="flex items-center space-x-2">
          <Checkbox
            id="column-id"
            checked={selectedColumns.id}
            onCheckedChange={(checked) =>
              onColumnChange("id", checked as boolean)
            }
          />
          <Label htmlFor="column-id">ID</Label>
        </div>

        <div className="flex items-center space-x-2">
          <Checkbox
            id="column-transactionId"
            checked={selectedColumns.transactionId}
            onCheckedChange={(checked) =>
              onColumnChange("transactionId", checked as boolean)
            }
          />
          <Label htmlFor="column-transactionId">Transaction ID</Label>
        </div>

        <div className="flex items-center space-x-2">
          <Checkbox
            id="column-lcIssuingDate"
            checked={selectedColumns.lcIssuingDate}
            onCheckedChange={(checked) =>
              onColumnChange("lcIssuingDate", checked as boolean)
            }
          />
          <Label htmlFor="column-lcIssuingDate">LC Issuing Date</Label>
        </div>

        <div className="flex items-center space-x-2">
          <Checkbox
            id="column-lcType"
            checked={selectedColumns.lcType}
            onCheckedChange={(checked) =>
              onColumnChange("lcType", checked as boolean)
            }
          />
          <Label htmlFor="column-lcType">LC Type</Label>
        </div>

        <div className="flex items-center space-x-2">
          <Checkbox
            id="column-lcNumber"
            checked={selectedColumns.lcNumber}
            onCheckedChange={(checked) =>
              onColumnChange("lcNumber", checked as boolean)
            }
          />
          <Label htmlFor="column-lcNumber">LC Number</Label>
        </div>

        <div className="flex items-center space-x-2">
          <Checkbox
            id="column-lcCredit"
            checked={selectedColumns.lcCredit}
            onCheckedChange={(checked) =>
              onColumnChange("lcCredit", checked as boolean)
            }
          />
          <Label htmlFor="column-lcCredit">LC Credit</Label>
        </div>

        <div className="flex items-center space-x-2">
          <Checkbox
            id="column-lcExpiryDate"
            checked={selectedColumns.lcExpiryDate}
            onCheckedChange={(checked) =>
              onColumnChange("lcExpiryDate", checked as boolean)
            }
          />
          <Label htmlFor="column-lcExpiryDate">LC Expiry Date</Label>
        </div>

        <div className="flex items-center space-x-2">
          <Checkbox
            id="column-lcSellStatus"
            checked={selectedColumns.lcSellStatus}
            onCheckedChange={(checked) =>
              onColumnChange("lcSellStatus", checked as boolean)
            }
          />
          <Label htmlFor="column-lcSellStatus">LC Sell Status</Label>
        </div>

        <div className="flex items-center space-x-2">
          <Checkbox
            id="column-lcSellerBank"
            checked={selectedColumns.lcSellerBank}
            onCheckedChange={(checked) =>
              onColumnChange("lcSellerBank", checked as boolean)
            }
          />
          <Label htmlFor="column-lcSellerBank">LC Seller Bank</Label>
        </div>

        <div className="flex items-center space-x-2">
          <Checkbox
            id="column-contractParty"
            checked={selectedColumns.contractParty}
            onCheckedChange={(checked) =>
              onColumnChange("contractParty", checked as boolean)
            }
          />
          <Label htmlFor="column-contractParty">Contract Party</Label>
        </div>

        <div className="flex items-center space-x-2">
          <Checkbox
            id="column-buyerLcDate"
            checked={selectedColumns.buyerLcDate}
            onCheckedChange={(checked) =>
              onColumnChange("buyerLcDate", checked as boolean)
            }
          />
          <Label htmlFor="column-buyerLcDate">Buyer LC Date</Label>
        </div>

        <div className="flex items-center space-x-2">
          <Checkbox
            id="column-buyerLcNumber"
            checked={selectedColumns.buyerLcNumber}
            onCheckedChange={(checked) =>
              onColumnChange("buyerLcNumber", checked as boolean)
            }
          />
          <Label htmlFor="column-buyerLcNumber">Buyer LC Number</Label>
        </div>

        <div className="flex items-center space-x-2">
          <Checkbox
            id="column-buyerLcIssuingBank"
            checked={selectedColumns.buyerLcIssuingBank}
            onCheckedChange={(checked) =>
              onColumnChange("buyerLcIssuingBank", checked as boolean)
            }
          />
          <Label htmlFor="column-buyerLcIssuingBank">Buyer LC Issuing Bank</Label>
        </div>

        <div className="flex items-center space-x-2">
          <Checkbox
            id="column-dueDateWithBuyer"
            checked={selectedColumns.dueDateWithBuyer}
            onCheckedChange={(checked) =>
              onColumnChange("dueDateWithBuyer", checked as boolean)
            }
          />
          <Label htmlFor="column-dueDateWithBuyer">Due Date With Buyer</Label>
        </div>

        <div className="flex items-center space-x-2">
          <Checkbox
            id="column-lcAdvisingBank"
            checked={selectedColumns.lcAdvisingBank}
            onCheckedChange={(checked) =>
              onColumnChange("lcAdvisingBank", checked as boolean)
            }
          />
          <Label htmlFor="column-lcAdvisingBank">LC Advising Bank</Label>
        </div>

        <div className="flex items-center space-x-2">
          <Checkbox
            id="column-status"
            checked={selectedColumns.status}
            onCheckedChange={(checked) =>
              onColumnChange("status", checked as boolean)
            }
          />
          <Label htmlFor="column-status">Status</Label>
        </div>
      </div>
    </div>
  );
}
