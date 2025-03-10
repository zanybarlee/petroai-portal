
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";

type TradeType = "active" | "history" | "pending";

interface TradesListProps {
  type?: TradeType;
}

export function TradesList({ type = "active" }: TradesListProps) {
  // Sample trade data based on type
  const trades = generateSampleTrades(type);

  return (
    <div className="rounded-md border">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Asset</TableHead>
            <TableHead>Type</TableHead>
            <TableHead>Amount</TableHead>
            <TableHead>Entry Price</TableHead>
            <TableHead>Current/Exit Price</TableHead>
            <TableHead>Profit/Loss</TableHead>
            <TableHead>Status</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {trades.map((trade) => (
            <TableRow key={trade.id}>
              <TableCell className="font-medium">{trade.asset}</TableCell>
              <TableCell>{trade.type}</TableCell>
              <TableCell>{trade.amount}</TableCell>
              <TableCell>${trade.entryPrice}</TableCell>
              <TableCell>${trade.currentPrice}</TableCell>
              <TableCell className={trade.profitLoss.startsWith("+") ? "text-green-500" : trade.profitLoss.startsWith("-") ? "text-red-500" : ""}>
                {trade.profitLoss}
              </TableCell>
              <TableCell>
                <Badge variant={getStatusVariant(trade.status)}>{trade.status}</Badge>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}

// Helper to get badge variant based on status
function getStatusVariant(status: string) {
  switch (status) {
    case "Active":
      return "success";
    case "Completed":
      return "default";
    case "Pending":
      return "secondary";
    case "Cancelled":
      return "destructive";
    default:
      return "outline";
  }
}

// Generate sample trades based on type
function generateSampleTrades(type: TradeType) {
  const baseData = [
    { id: "1", asset: "BTC/USD", type: "Buy", amount: "0.5 BTC", entryPrice: "42,500", currentPrice: "43,200", profitLoss: "+3.2%", status: "Active" },
    { id: "2", asset: "ETH/USD", type: "Sell", amount: "5 ETH", entryPrice: "3,200", currentPrice: "3,150", profitLoss: "+1.5%", status: "Active" },
    { id: "3", asset: "XRP/USD", type: "Buy", amount: "1000 XRP", entryPrice: "0.52", currentPrice: "0.48", profitLoss: "-4.0%", status: "Active" },
    { id: "4", asset: "BNB/USD", type: "Buy", amount: "2 BNB", entryPrice: "350", currentPrice: "355", profitLoss: "+1.4%", status: "Active" },
    { id: "5", asset: "SOL/USD", type: "Sell", amount: "10 SOL", entryPrice: "120", currentPrice: "115", profitLoss: "+4.2%", status: "Active" }
  ];
  
  if (type === "history") {
    return [
      { id: "6", asset: "BTC/USD", type: "Sell", amount: "0.3 BTC", entryPrice: "38,500", currentPrice: "42,000", profitLoss: "+9.1%", status: "Completed" },
      { id: "7", asset: "ETH/USD", type: "Buy", amount: "3 ETH", entryPrice: "2,800", currentPrice: "3,200", profitLoss: "+14.3%", status: "Completed" },
      { id: "8", asset: "LTC/USD", type: "Sell", amount: "10 LTC", entryPrice: "175", currentPrice: "162", profitLoss: "+7.4%", status: "Completed" },
      { id: "9", asset: "DOGE/USD", type: "Buy", amount: "1000 DOGE", entryPrice: "0.12", currentPrice: "0.09", profitLoss: "-25.0%", status: "Completed" },
      { id: "10", asset: "ADA/USD", type: "Sell", amount: "500 ADA", entryPrice: "0.45", currentPrice: "0.48", profitLoss: "-6.3%", status: "Cancelled" }
    ];
  } else if (type === "pending") {
    return [
      { id: "11", asset: "BTC/USD", type: "Buy", amount: "0.1 BTC", entryPrice: "41,000", currentPrice: "42,500", profitLoss: "0.0%", status: "Pending" },
      { id: "12", asset: "ETH/USD", type: "Buy", amount: "2 ETH", entryPrice: "3,150", currentPrice: "3,200", profitLoss: "0.0%", status: "Pending" },
      { id: "13", asset: "DOT/USD", type: "Sell", amount: "25 DOT", entryPrice: "8.75", currentPrice: "8.80", profitLoss: "0.0%", status: "Pending" }
    ];
  }
  
  return baseData;
}
