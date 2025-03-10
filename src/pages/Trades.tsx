
import { AppLayout } from "@/components/layout/AppLayout";
import { PageTransition } from "@/components/ui/transitions/PageTransition";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { PlusIcon, Filter, DownloadIcon } from "lucide-react";

export default function Trades() {
  const trades = [
    {
      id: "TR-7829",
      product: "Crude Oil",
      volume: "5,000 bbl",
      price: "$75.43",
      counterparty: "Exxon Corp.",
      date: "May 15, 2023",
      status: "Pending",
    },
    {
      id: "TR-7828",
      product: "Natural Gas",
      volume: "10,000 MMBtu",
      price: "$3.15",
      counterparty: "Shell Energy",
      date: "May 15, 2023",
      status: "Completed",
    },
    {
      id: "TR-7827",
      product: "Jet Fuel",
      volume: "15,000 gal",
      price: "$2.89",
      counterparty: "AirFuel Inc.",
      date: "May 14, 2023",
      status: "Completed",
    },
    {
      id: "TR-7826",
      product: "Gasoline",
      volume: "25,000 gal",
      price: "$2.75",
      counterparty: "Quick Gas Co.",
      date: "May 14, 2023",
      status: "Completed",
    },
    {
      id: "TR-7825",
      product: "Diesel",
      volume: "20,000 gal",
      price: "$3.05",
      counterparty: "Diesel Depot",
      date: "May 13, 2023",
      status: "Completed",
    },
    {
      id: "TR-7824",
      product: "Propane",
      volume: "8,000 gal",
      price: "$1.20",
      counterparty: "PropaneNow",
      date: "May 13, 2023",
      status: "Failed",
    },
    {
      id: "TR-7823",
      product: "Crude Oil",
      volume: "10,000 bbl",
      price: "$76.10",
      counterparty: "PetroCo",
      date: "May 12, 2023",
      status: "Completed",
    },
    {
      id: "TR-7822",
      product: "Natural Gas",
      volume: "15,000 MMBtu",
      price: "$3.22",
      counterparty: "GasCorp",
      date: "May 12, 2023",
      status: "Completed",
    },
  ];

  return (
    <AppLayout title="Trades" subtitle="Manage and monitor all trading activities">
      <div className="space-y-6">
        <div className="flex flex-col sm:flex-row justify-between sm:items-center gap-4">
          <div className="flex gap-2">
            <Button className="gap-2">
              <PlusIcon className="h-4 w-4" /> New Trade
            </Button>
            <Button variant="outline" className="gap-2">
              <Filter className="h-4 w-4" /> Filter
            </Button>
            <Button variant="outline" className="gap-2">
              <DownloadIcon className="h-4 w-4" /> Export
            </Button>
          </div>
          <div className="w-full sm:w-64 md:w-80">
            <Input placeholder="Search trades..." />
          </div>
        </div>

        <div className="rounded-md border bg-white dark:bg-gray-900 overflow-hidden">
          <div className="overflow-x-auto">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>ID</TableHead>
                  <TableHead>Product</TableHead>
                  <TableHead>Volume</TableHead>
                  <TableHead>Price</TableHead>
                  <TableHead>Counterparty</TableHead>
                  <TableHead>Date</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead className="text-right">Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {trades.map((trade) => (
                  <TableRow key={trade.id} className="hover-scale">
                    <TableCell className="font-medium">{trade.id}</TableCell>
                    <TableCell>{trade.product}</TableCell>
                    <TableCell>{trade.volume}</TableCell>
                    <TableCell>{trade.price}</TableCell>
                    <TableCell>{trade.counterparty}</TableCell>
                    <TableCell>{trade.date}</TableCell>
                    <TableCell>
                      <Badge
                        variant={
                          trade.status === "Completed" ? "outline" :
                          trade.status === "Pending" ? "secondary" :
                          "destructive"
                        }
                      >
                        {trade.status}
                      </Badge>
                    </TableCell>
                    <TableCell className="text-right">
                      <Button variant="ghost" size="sm">View</Button>
                      <Button variant="ghost" size="sm">Edit</Button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </div>
      </div>
    </AppLayout>
  );
}
