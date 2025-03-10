
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
import { Printer, Download, Eye, RefreshCw, Check } from "lucide-react";
import { toast } from "sonner";

interface OperationalTransaction {
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
  quantityNominated: string;
  quantityLoadedBBLs: string;
  quantityLoadedMT: string;
  status: "Draft" | "Updated" | "Final";
}

const mockTransactions: OperationalTransaction[] = [
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
    quantityNominated: "15,000",
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
    quantityNominated: "8,000",
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
    quantityNominated: "12,500",
    quantityLoadedBBLs: "12,300",
    quantityLoadedMT: "1,950",
    status: "Final",
  },
];

export default function OperationalCargoTransactionsList() {
  const [transactions, setTransactions] = useState<OperationalTransaction[]>(mockTransactions);

  const handleUpdateStatus = (id: string, newStatus: "Updated" | "Final") => {
    setTransactions(prev => 
      prev.map(tx => 
        tx.id === id 
          ? { ...tx, status: newStatus } 
          : tx
      )
    );
    
    toast.success(`Transaction ${id} status updated to ${newStatus}`, {
      description: `The transaction has been ${newStatus === "Final" ? "finalized" : "updated"}.`,
    });
  };

  const handleViewTransaction = (id: string) => {
    toast.info(`Viewing transaction ${id}`, {
      description: "Transaction details view would open here.",
    });
  };

  const handlePrint = () => {
    toast.info("Print functionality", {
      description: "Printing transactions list...",
    });
  };

  const handleExport = () => {
    toast.info("Export functionality", {
      description: "Exporting transactions to Excel...",
    });
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h3 className="text-lg font-medium">Operational Cargo Transactions</h3>
        
        <div className="flex gap-2">
          <Button variant="outline" size="sm" className="gap-2" onClick={handlePrint}>
            <Printer className="h-4 w-4" />
            Print
          </Button>
          <Button variant="outline" size="sm" className="gap-2" onClick={handleExport}>
            <Download className="h-4 w-4" />
            Export
          </Button>
        </div>
      </div>
      
      <div className="rounded-md border">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>TX ID</TableHead>
              <TableHead>Vessel</TableHead>
              <TableHead>Trade Type</TableHead>
              <TableHead>Product</TableHead>
              <TableHead>Buyer</TableHead>
              <TableHead>Supplier</TableHead>
              <TableHead>Lay Day Start</TableHead>
              <TableHead>Load Port</TableHead>
              <TableHead>Discharge Port</TableHead>
              <TableHead>Qty (BBLs/MT)</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {transactions.map((tx) => (
              <TableRow key={tx.id}>
                <TableCell className="font-medium">{tx.txId}</TableCell>
                <TableCell>{tx.vesselName}</TableCell>
                <TableCell>{tx.tradeType}</TableCell>
                <TableCell>{`${tx.productType} - ${tx.productName}`}</TableCell>
                <TableCell>{tx.buyer}</TableCell>
                <TableCell>{tx.supplier}</TableCell>
                <TableCell>{tx.layDayStart}</TableCell>
                <TableCell>{tx.loadPort}</TableCell>
                <TableCell>{tx.dischargePort}</TableCell>
                <TableCell>{`${tx.quantityLoadedBBLs} / ${tx.quantityLoadedMT}`}</TableCell>
                <TableCell>
                  <Badge 
                    variant={
                      tx.status === "Final" 
                        ? "default" 
                        : tx.status === "Updated" 
                          ? "secondary" 
                          : "outline"
                    }
                  >
                    {tx.status}
                  </Badge>
                </TableCell>
                <TableCell>
                  <div className="flex space-x-2">
                    <Button 
                      variant="ghost" 
                      size="icon" 
                      onClick={() => handleViewTransaction(tx.id)}
                      title="View Details"
                    >
                      <Eye className="h-4 w-4" />
                    </Button>
                    {tx.status !== "Final" && (
                      <>
                        <Button 
                          variant="ghost" 
                          size="icon" 
                          onClick={() => handleUpdateStatus(tx.id, "Updated")}
                          title="Update"
                          disabled={tx.status === "Updated"}
                        >
                          <RefreshCw className="h-4 w-4" />
                        </Button>
                        <Button 
                          variant="ghost" 
                          size="icon" 
                          onClick={() => handleUpdateStatus(tx.id, "Final")}
                          title="Finalize"
                        >
                          <Check className="h-4 w-4" />
                        </Button>
                      </>
                    )}
                  </div>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}
