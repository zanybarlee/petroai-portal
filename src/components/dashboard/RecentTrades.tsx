
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { DashboardCard } from "@/components/ui/dashboard/DashboardCard";

const recentTrades = [
  {
    id: "TR-7829",
    product: "Crude Oil",
    volume: "5,000 bbl",
    price: "$75.43",
    counterparty: "Exxon Corp.",
    date: "Today",
    status: "Pending" as const,
  },
  {
    id: "TR-7828",
    product: "Natural Gas",
    volume: "10,000 MMBtu",
    price: "$3.15",
    counterparty: "Shell Energy",
    date: "Today",
    status: "Completed" as const,
  },
  {
    id: "TR-7827",
    product: "Jet Fuel",
    volume: "15,000 gal",
    price: "$2.89",
    counterparty: "AirFuel Inc.",
    date: "Yesterday",
    status: "Completed" as const,
  },
  {
    id: "TR-7826",
    product: "Gasoline",
    volume: "25,000 gal",
    price: "$2.75",
    counterparty: "Quick Gas Co.",
    date: "Yesterday",
    status: "Completed" as const,
  },
];

export function RecentTrades() {
  return (
    <DashboardCard 
      className="lg:col-span-4"
      title="Recent Trades"
      isGlass
    >
      <div className="overflow-x-auto">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>ID</TableHead>
              <TableHead>Product</TableHead>
              <TableHead>Volume</TableHead>
              <TableHead>Price</TableHead>
              <TableHead>Counterparty</TableHead>
              <TableHead>Status</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {recentTrades.map((trade) => (
              <TableRow key={trade.id}>
                <TableCell className="font-medium">{trade.id}</TableCell>
                <TableCell>{trade.product}</TableCell>
                <TableCell>{trade.volume}</TableCell>
                <TableCell>{trade.price}</TableCell>
                <TableCell>{trade.counterparty}</TableCell>
                <TableCell>
                  <Badge variant={trade.status === "Completed" ? "outline" : "secondary"}>
                    {trade.status}
                  </Badge>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
      <div className="mt-4 flex justify-end">
        <Button variant="outline" size="sm">View All Trades</Button>
      </div>
    </DashboardCard>
  );
}
