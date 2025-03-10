
import { AppLayout } from "@/components/layout/AppLayout";
import { DashboardCard } from "@/components/ui/dashboard/DashboardCard";
import { ChartCard } from "@/components/ui/dashboard/ChartCard";
import { ResponsiveContainer, LineChart, BarChart, PieChart, Pie, Cell, Line, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from "recharts";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowDownIcon, ArrowUpIcon, Download } from "lucide-react";

export default function Analytics() {
  // Sample data for charts
  const performanceData = Array.from({ length: 20 }, (_, i) => ({
    name: `Day ${i + 1}`,
    crude: Math.floor(Math.random() * 1000) + 5000,
    gas: Math.floor(Math.random() * 500) + 2000,
  }));

  const volumeData = Array.from({ length: 12 }, (_, i) => ({
    name: `Month ${i + 1}`,
    volume: Math.floor(Math.random() * 5000) + 10000,
  }));

  const productMixData = [
    { name: "Crude Oil", value: 45 },
    { name: "Natural Gas", value: 25 },
    { name: "Jet Fuel", value: 15 },
    { name: "Gasoline", value: 10 },
    { name: "Diesel", value: 5 },
  ];

  const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042", "#8884D8"];

  const metrics = [
    {
      title: "Trading Volume",
      value: "1.2M bbl",
      change: 12.5,
      trend: "up",
    },
    {
      title: "Average Price",
      value: "$72.43",
      change: -2.3,
      trend: "down",
    },
    {
      title: "Profit Margin",
      value: "8.7%",
      change: 1.5,
      trend: "up",
    },
    {
      title: "Market Share",
      value: "14.2%",
      change: 0.8,
      trend: "up",
    },
  ];

  return (
    <AppLayout title="Analytics" subtitle="Trading performance and market insights">
      <Tabs defaultValue="overview" className="space-y-6">
        <div className="flex flex-col sm:flex-row justify-between sm:items-center gap-4">
          <TabsList>
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="performance">Performance</TabsTrigger>
            <TabsTrigger value="market">Market Analysis</TabsTrigger>
            <TabsTrigger value="risk">Risk Assessment</TabsTrigger>
          </TabsList>
          <Button variant="outline" className="gap-2">
            <Download className="h-4 w-4" />
            Export Report
          </Button>
        </div>

        <TabsContent value="overview" className="m-0 space-y-6">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {metrics.map((metric, idx) => (
              <Card key={idx}>
                <CardHeader className="pb-2">
                  <CardTitle className="text-sm font-medium text-muted-foreground">
                    {metric.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">{metric.value}</div>
                  <div className="mt-2 flex items-center gap-1">
                    {metric.trend === "up" ? (
                      <ArrowUpIcon className="h-4 w-4 text-green-500" />
                    ) : (
                      <ArrowDownIcon className="h-4 w-4 text-red-500" />
                    )}
                    <span
                      className={`text-sm font-medium ${
                        metric.trend === "up" ? "text-green-500" : "text-red-500"
                      }`}
                    >
                      {Math.abs(metric.change)}%
                    </span>
                    <span className="text-sm text-muted-foreground">vs last period</span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <div className="lg:col-span-2">
              <ChartCard
                title="Trading Performance"
                chart={
                  <ResponsiveContainer width="100%" height="100%">
                    <LineChart data={performanceData}>
                      <CartesianGrid strokeDasharray="3 3" stroke="#888" strokeOpacity={0.2} />
                      <XAxis dataKey="name" stroke="#888" fontSize={12} tickLine={false} axisLine={false} />
                      <YAxis stroke="#888" fontSize={12} tickLine={false} axisLine={false} />
                      <Tooltip />
                      <Legend />
                      <Line type="monotone" dataKey="crude" stroke="#0088FE" strokeWidth={2} dot={false} />
                      <Line type="monotone" dataKey="gas" stroke="#00C49F" strokeWidth={2} dot={false} />
                    </LineChart>
                  </ResponsiveContainer>
                }
              />
            </div>
            <div>
              <ChartCard
                title="Product Mix"
                chart={
                  <ResponsiveContainer width="100%" height="100%">
                    <PieChart>
                      <Pie
                        data={productMixData}
                        cx="50%"
                        cy="50%"
                        innerRadius={60}
                        outerRadius={90}
                        paddingAngle={2}
                        dataKey="value"
                        label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
                        labelLine={false}
                      >
                        {productMixData.map((entry, index) => (
                          <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                        ))}
                      </Pie>
                      <Tooltip />
                    </PieChart>
                  </ResponsiveContainer>
                }
              />
            </div>
          </div>

          <ChartCard
            title="Monthly Trading Volume"
            chart={
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={volumeData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#888" strokeOpacity={0.2} />
                  <XAxis dataKey="name" stroke="#888" fontSize={12} tickLine={false} axisLine={false} />
                  <YAxis stroke="#888" fontSize={12} tickLine={false} axisLine={false} />
                  <Tooltip />
                  <Bar dataKey="volume" fill="#8884d8" radius={[4, 4, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            }
          />
        </TabsContent>
      </Tabs>
    </AppLayout>
  );
}
