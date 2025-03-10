
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { SelectedColumns } from "./types";

interface ColumnSelectorProps {
  selectedColumns: SelectedColumns;
  onToggleColumn: (column: keyof SelectedColumns) => void;
}

export function ColumnSelector({ selectedColumns, onToggleColumn }: ColumnSelectorProps) {
  return (
    <div className="space-y-2">
      <h4 className="text-sm font-medium">Display Columns</h4>
      <div className="flex flex-wrap gap-3">
        <div className="flex items-center space-x-2">
          <Checkbox 
            id="col-txId" 
            checked={selectedColumns.txId} 
            onCheckedChange={() => onToggleColumn('txId')}
          />
          <Label htmlFor="col-txId">TX ID</Label>
        </div>
        
        <div className="flex items-center space-x-2">
          <Checkbox 
            id="col-vesselName" 
            checked={selectedColumns.vesselName} 
            onCheckedChange={() => onToggleColumn('vesselName')}
          />
          <Label htmlFor="col-vesselName">Vessel</Label>
        </div>
        
        <div className="flex items-center space-x-2">
          <Checkbox 
            id="col-tradeType" 
            checked={selectedColumns.tradeType} 
            onCheckedChange={() => onToggleColumn('tradeType')}
          />
          <Label htmlFor="col-tradeType">Trade Type</Label>
        </div>
        
        <div className="flex items-center space-x-2">
          <Checkbox 
            id="col-product" 
            checked={selectedColumns.product} 
            onCheckedChange={() => onToggleColumn('product')}
          />
          <Label htmlFor="col-product">Product</Label>
        </div>
        
        <div className="flex items-center space-x-2">
          <Checkbox 
            id="col-buyer" 
            checked={selectedColumns.buyer} 
            onCheckedChange={() => onToggleColumn('buyer')}
          />
          <Label htmlFor="col-buyer">Buyer</Label>
        </div>
        
        <div className="flex items-center space-x-2">
          <Checkbox 
            id="col-supplier" 
            checked={selectedColumns.supplier} 
            onCheckedChange={() => onToggleColumn('supplier')}
          />
          <Label htmlFor="col-supplier">Supplier</Label>
        </div>
        
        <div className="flex items-center space-x-2">
          <Checkbox 
            id="col-layDayStart" 
            checked={selectedColumns.layDayStart} 
            onCheckedChange={() => onToggleColumn('layDayStart')}
          />
          <Label htmlFor="col-layDayStart">Lay Day</Label>
        </div>
        
        <div className="flex items-center space-x-2">
          <Checkbox 
            id="col-ports" 
            checked={selectedColumns.ports} 
            onCheckedChange={() => onToggleColumn('ports')}
          />
          <Label htmlFor="col-ports">Ports</Label>
        </div>
        
        <div className="flex items-center space-x-2">
          <Checkbox 
            id="col-quantity" 
            checked={selectedColumns.quantity} 
            onCheckedChange={() => onToggleColumn('quantity')}
          />
          <Label htmlFor="col-quantity">Quantity</Label>
        </div>
        
        <div className="flex items-center space-x-2">
          <Checkbox 
            id="col-status" 
            checked={selectedColumns.status} 
            onCheckedChange={() => onToggleColumn('status')}
          />
          <Label htmlFor="col-status">Status</Label>
        </div>
      </div>
    </div>
  );
}
