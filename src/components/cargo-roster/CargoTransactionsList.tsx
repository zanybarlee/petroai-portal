
import { useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ChevronDown, Download, Printer, Eye, Edit, Trash } from "lucide-react";

type TransactionStatus = "new" | "updated" | "final";

interface CargoTransaction {
  id: string;
  txId: string;
  vessel: string;
  voyageNo: string;
  product: string;
  quantity: string;
  buyer: string;
  supplier: string;
  layDayStart: string;
  layDayEnd: string;
  status: TransactionStatus;
}

const mockTransactions: CargoTransaction[] = [
  {
    id: "1",
    txId: "TX-001",
    vessel: "Vessel A",
    voyageNo: "V001",
    product: "Crude Oil",
    quantity: "10,000 MT",
    buyer: "Buyer 1",
    supplier: "Supplier 1",
    layDayStart: "01-Mar-2023",
    layDayEnd: "10-Mar-2023",
    status: "new"
  },
  {
    id: "2",
    txId: "TX-002",
    vessel: "Vessel B",
    voyageNo: "V002",
    product: "Gasoline",
    quantity: "5,000 MT",
    buyer: "Buyer 2",
    supplier: "Supplier 2",
    layDayStart: "15-Mar-2023",
    layDayEnd: "20-Mar-2023",
    status: "updated"
  },
  {
    id: "3",
    txId: "TX-003",
    vessel: "Vessel C",
    voyageNo: "V003",
    product: "Diesel",
    quantity: "7,500 MT",
    buyer: "Buyer 3",
    supplier: "Supplier 3",
    layDayStart: "22-Mar-2023",
    layDayEnd: "30-Mar-2023",
    status: "final"
  },
  {
    id: "4",
    txId: "TX-004",
    vessel: "Vessel D",
    voyageNo: "V004",
    product: "Jet Fuel",
    quantity: "3,000 MT",
    buyer: "Buyer 1",
    supplier: "Supplier 2",
    layDayStart: "05-Apr-2023",
    layDayEnd: "12-Apr-2023",
    status: "new"
  },
  {
    id: "5",
    txId: "TX-005",
    vessel: "Vessel E",
    voyageNo: "V005",
    product: "LPG",
    quantity: "2,000 MT",
    buyer: "Buyer 3",
    supplier: "Supplier 1",
    layDayStart: "18-Apr-2023",
    layDayEnd: "25-Apr-2023",
    status: "updated"
  }
];

export default function CargoTransactionsList() {
  const [transactions, setTransactions] = useState<CargoTransaction[]>(mockTransactions);
  const [visibleColumns, setVisibleColumns] = useState<string[]>([
    "txId", "vessel", "voyageNo", "product", "quantity", "buyer", "supplier", "layDayStart", "layDayEnd", "status", "actions"
  ]);

  const handleStatusChange = (id: string, newStatus: TransactionStatus) => {
    setTransactions(transactions.map(tx => 
      tx.id === id ? { ...tx, status: newStatus } : tx
    ));
  };

  const toggleColumn = (column: string) => {
    if (visibleColumns.includes(column)) {
      setVisibleColumns(visibleColumns.filter(col => col !== column));
    } else {
      setVisibleColumns([...visibleColumns, column]);
    }
  };

  const getStatusBadge = (status: TransactionStatus) => {
    switch (status) {
      case "new":
        return <Badge variant="outline">New</Badge>;
      case "updated":
        return <Badge variant="secondary">Updated</Badge>;
      case "final":
        return <Badge variant="default">Final</Badge>;
      default:
        return null;
    }
  };
  
  return (
    <div className="space-y-4">
      <div className="flex justify-between items-center">
        <h2 className="text-xl font-semibold">Cargo Transactions</h2>
        
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline" className="ml-auto">
              <ChevronDown className="mr-2 h-4 w-4" />
              Display Columns
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuLabel>Toggle Columns</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem onClick={() => toggleColumn("txId")} className="flex items-center justify-between">
              TX ID {visibleColumns.includes("txId") && "✓"}
            </DropdownMenuItem>
            <DropdownMenuItem onClick={() => toggleColumn("vessel")} className="flex items-center justify-between">
              Vessel {visibleColumns.includes("vessel") && "✓"}
            </DropdownMenuItem>
            <DropdownMenuItem onClick={() => toggleColumn("voyageNo")} className="flex items-center justify-between">
              Voyage No {visibleColumns.includes("voyageNo") && "✓"}
            </DropdownMenuItem>
            <DropdownMenuItem onClick={() => toggleColumn("product")} className="flex items-center justify-between">
              Product {visibleColumns.includes("product") && "✓"}
            </DropdownMenuItem>
            <DropdownMenuItem onClick={() => toggleColumn("quantity")} className="flex items-center justify-between">
              Quantity {visibleColumns.includes("quantity") && "✓"}
            </DropdownMenuItem>
            <DropdownMenuItem onClick={() => toggleColumn("buyer")} className="flex items-center justify-between">
              Buyer {visibleColumns.includes("buyer") && "✓"}
            </DropdownMenuItem>
            <DropdownMenuItem onClick={() => toggleColumn("supplier")} className="flex items-center justify-between">
              Supplier {visibleColumns.includes("supplier") && "✓"}
            </DropdownMenuItem>
            <DropdownMenuItem onClick={() => toggleColumn("layDayStart")} className="flex items-center justify-between">
              Lay Day Start {visibleColumns.includes("layDayStart") && "✓"}
            </DropdownMenuItem>
            <DropdownMenuItem onClick={() => toggleColumn("layDayEnd")} className="flex items-center justify-between">
              Lay Day End {visibleColumns.includes("layDayEnd") && "✓"}
            </DropdownMenuItem>
            <DropdownMenuItem onClick={() => toggleColumn("status")} className="flex items-center justify-between">
              Status {visibleColumns.includes("status") && "✓"}
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
      
      <div className="rounded-md border">
        <Table>
          <TableHeader>
            <TableRow>
              {visibleColumns.includes("txId") && <TableHead>TX ID</TableHead>}
              {visibleColumns.includes("vessel") && <TableHead>Vessel</TableHead>}
              {visibleColumns.includes("voyageNo") && <TableHead>Voyage No</TableHead>}
              {visibleColumns.includes("product") && <TableHead>Product</TableHead>}
              {visibleColumns.includes("quantity") && <TableHead>Quantity</TableHead>}
              {visibleColumns.includes("buyer") && <TableHead>Buyer</TableHead>}
              {visibleColumns.includes("supplier") && <TableHead>Supplier</TableHead>}
              {visibleColumns.includes("layDayStart") && <TableHead>Lay Day Start</TableHead>}
              {visibleColumns.includes("layDayEnd") && <TableHead>Lay Day End</TableHead>}
              {visibleColumns.includes("status") && <TableHead>Status</TableHead>}
              {visibleColumns.includes("actions") && <TableHead className="text-right">Actions</TableHead>}
            </TableRow>
          </TableHeader>
          <TableBody>
            {transactions.map((transaction) => (
              <TableRow key={transaction.id}>
                {visibleColumns.includes("txId") && (
                  <TableCell className="font-medium cursor-pointer hover:text-primary" onClick={() => console.log(`Edit ${transaction.txId}`)}>
                    {transaction.txId}
                  </TableCell>
                )}
                {visibleColumns.includes("vessel") && <TableCell>{transaction.vessel}</TableCell>}
                {visibleColumns.includes("voyageNo") && <TableCell>{transaction.voyageNo}</TableCell>}
                {visibleColumns.includes("product") && <TableCell>{transaction.product}</TableCell>}
                {visibleColumns.includes("quantity") && <TableCell>{transaction.quantity}</TableCell>}
                {visibleColumns.includes("buyer") && <TableCell>{transaction.buyer}</TableCell>}
                {visibleColumns.includes("supplier") && <TableCell>{transaction.supplier}</TableCell>}
                {visibleColumns.includes("layDayStart") && <TableCell>{transaction.layDayStart}</TableCell>}
                {visibleColumns.includes("layDayEnd") && <TableCell>{transaction.layDayEnd}</TableCell>}
                {visibleColumns.includes("status") && (
                  <TableCell>{getStatusBadge(transaction.status)}</TableCell>
                )}
                {visibleColumns.includes("actions") && (
                  <TableCell className="text-right">
                    <div className="flex justify-end space-x-2">
                      {transaction.status !== "final" && (
                        <Button 
                          variant="outline" 
                          size="sm"
                          onClick={() => handleStatusChange(transaction.id, "updated")}
                        >
                          Update
                        </Button>
                      )}
                      {transaction.status !== "final" && (
                        <Button 
                          variant="default" 
                          size="sm"
                          onClick={() => handleStatusChange(transaction.id, "final")}
                        >
                          Final
                        </Button>
                      )}
                      <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                          <Button variant="ghost" size="sm">
                            <ChevronDown className="h-4 w-4" />
                          </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end">
                          <DropdownMenuItem className="flex items-center">
                            <Eye className="mr-2 h-4 w-4" /> View
                          </DropdownMenuItem>
                          <DropdownMenuItem className="flex items-center">
                            <Edit className="mr-2 h-4 w-4" /> Edit
                          </DropdownMenuItem>
                          <DropdownMenuItem className="flex items-center">
                            <Printer className="mr-2 h-4 w-4" /> Print Friendly
                          </DropdownMenuItem>
                          <DropdownMenuItem className="flex items-center">
                            <Download className="mr-2 h-4 w-4" /> Export
                          </DropdownMenuItem>
                          <DropdownMenuSeparator />
                          <DropdownMenuItem className="flex items-center text-destructive">
                            <Trash className="mr-2 h-4 w-4" /> Delete
                          </DropdownMenuItem>
                        </DropdownMenuContent>
                      </DropdownMenu>
                    </div>
                  </TableCell>
                )}
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}
