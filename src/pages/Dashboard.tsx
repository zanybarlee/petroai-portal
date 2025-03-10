
import { DashboardCard } from "@/components/ui/dashboard/DashboardCard";
import { StatCard } from "@/components/ui/dashboard/StatCard";
import { ChartCard } from "@/components/ui/dashboard/ChartCard";
import { ActivityLog } from "@/components/ui/dashboard/ActivityLog";
import { BarChart2, Clock, DollarSign, TrendingUp, AlertCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Badge } from "@/components/ui/badge";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { LineChart, ResponsiveContainer } from 'recharts';

const activityData = [
  {
    id: "1",
    user: { name: "John Doe", avatar: "" },
    action: "created trade",
    target: "#12387",
    date: "2 minutes ago",
    status: "completed" as const,
  },
  {
    id: "2",
    user: { name: "Sarah Kim", avatar: "" },
    action: "approved document",
    target: "Contract #985",
    date: "1 hour ago",
    status: "completed" as const,
  },
  {
    id: "3",
    user: { name: "Robert Chen", avatar: "" },
    action: "requested review on",
    target: "Risk Assessment #445",
    date: "3 hours ago",
    status: "pending" as const,
  },
  {
    id: "4",
    user: { name: "Maria Lopez", avatar: "" },
    action: "rejected trade",
    target: "#12265",
    date: "Yesterday",
    status: "failed" as const,
  },
  {
    id: "5",
    user: { name: "James Wilson", avatar: "" },
    action: "updated price on",
    target: "Contract #673",
    date: "Yesterday",
    status: "completed" as const,
  },
];

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

const data = Array.from({ length: 20 }, (_, i) => ({
  name: `Day ${i + 1}`,
  value: Math.floor(Math.random() * 100) + 50,
  revenue: Math.floor(Math.random() * 10000) + 5000,
  cost: Math.floor(Math.random() * 5000) + 2000,
}));

export default function Dashboard() {
  return (
    <div className="grid gap-6">
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        <StatCard
          title="Today's Trading Volume"
          value="75,431"
          label="Trading Volume"
          trend={12.5}
          trendLabel="from yesterday"
          icon={<BarChart2 className="h-5 w-5" />}
          metric="bbl"
          isGlass
        />
        <StatCard
          title="Active Trades"
          value="143"
          label="Active Trades"
          trend={-4.3}
          trendLabel="from last week"
          icon={<Clock className="h-5 w-5" />}
          isGlass
        />
        <StatCard
          title="Revenue"
          value="$1.2M"
          label="Monthly Revenue"
          trend={8.1}
          trendLabel="from last month"
          icon={<DollarSign className="h-5 w-5" />}
          isGlass
        />
        <StatCard
          title="Market Opportunities"
          value="24"
          label="AI-identified Opportunities"
          trend={15}
          trendLabel="from last week"
          icon={<TrendingUp className="h-5 w-5" />}
          isGlass
        />
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-7">
        <ChartCard
          className="lg:col-span-4"
          title="Trading Performance"
          chart={
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={data}>
                {/* Chart implementation */}
              </LineChart>
            </ResponsiveContainer>
          }
        />
        <ActivityLog
          activities={activityData}
          className="lg:col-span-3"
        />
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-7">
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

        <div className="space-y-6 lg:col-span-3">
          <DashboardCard
            title="Market Alerts"
            isGlass
          >
            <Alert className="mb-4">
              <AlertCircle className="h-4 w-4" />
              <AlertTitle>Price Volatility Alert</AlertTitle>
              <AlertDescription>
                Crude oil prices showing unusual volatility. Consider adjusting trading strategy.
              </AlertDescription>
            </Alert>
            <Alert>
              <AlertCircle className="h-4 w-4" />
              <AlertTitle>Contract Expiry</AlertTitle>
              <AlertDescription>
                3 contracts expiring in the next 48 hours. Review and take action.
              </AlertDescription>
            </Alert>
          </DashboardCard>

          <DashboardCard
            title="AI Assistant"
            isGlass
          >
            <div className="flex items-center gap-4 mb-4">
              <Avatar>
                <AvatarImage src="/ai-assistant.png" />
                <AvatarFallback className="bg-primary text-primary-foreground">AI</AvatarFallback>
              </Avatar>
              <div>
                <h4 className="font-medium">Trading Assistant</h4>
                <p className="text-sm text-muted-foreground">AI-powered insights</p>
              </div>
            </div>
            <div className="text-sm text-muted-foreground mb-4">
              I've analyzed your recent trades and noticed a pattern in natural gas pricing that could present an opportunity. Would you like me to prepare a detailed report?
            </div>
            <div className="flex gap-2">
              <Button size="sm">Generate Report</Button>
              <Button size="sm" variant="outline">Ask a Question</Button>
            </div>
          </DashboardCard>
        </div>
      </div>
    </div>
  );
}
