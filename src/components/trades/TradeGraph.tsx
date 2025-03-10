
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { AreaChart, LineChart, BarChart } from "@/components/ui/chart";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

export function TradeGraph() {
  // Sample data for charts
  const areaChartData = [
    { name: "Jan", total: 4500 },
    { name: "Feb", total: 5000 },
    { name: "Mar", total: 4700 },
    { name: "Apr", total: 5300 },
    { name: "May", total: 5800 },
    { name: "Jun", total: 6000 },
    { name: "Jul", total: 5900 },
    { name: "Aug", total: 6500 },
    { name: "Sep", total: 6800 },
    { name: "Oct", total: 7000 },
    { name: "Nov", total: 7200 },
    { name: "Dec", total: 7500 },
  ];
  
  const barChartData = [
    { name: "BTC", total: 45 },
    { name: "ETH", total: 30 },
    { name: "XRP", total: 10 },
    { name: "SOL", total: 8 },
    { name: "Others", total: 7 },
  ];

  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between">
        <div>
          <CardTitle>Trading Performance</CardTitle>
          <CardDescription>
            View your trading portfolio and performance over time.
          </CardDescription>
        </div>
        <div className="flex items-center gap-2">
          <Select defaultValue="1m">
            <SelectTrigger className="w-[100px]">
              <SelectValue placeholder="Time Range" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="1d">1 Day</SelectItem>
              <SelectItem value="1w">1 Week</SelectItem>
              <SelectItem value="1m">1 Month</SelectItem>
              <SelectItem value="3m">3 Months</SelectItem>
              <SelectItem value="1y">1 Year</SelectItem>
              <SelectItem value="all">All Time</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </CardHeader>
      <CardContent>
        <Tabs defaultValue="performance">
          <TabsList className="mb-4 w-fit">
            <TabsTrigger value="performance">Performance</TabsTrigger>
            <TabsTrigger value="allocation">Allocation</TabsTrigger>
          </TabsList>
          <TabsContent value="performance" className="h-[300px]">
            <AreaChart data={areaChartData} />
          </TabsContent>
          <TabsContent value="allocation" className="h-[300px]">
            <BarChart data={barChartData} />
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  );
}
