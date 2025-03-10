import React from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Truck, Calendar, AlertTriangle, TrendingUp, Route, Wrench, BarChart4, Database } from "lucide-react";

export default function Fleet() {
  return (
    <div className="space-y-6">
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Active Fleet</CardTitle>
            <Truck className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">42</div>
            <p className="text-xs text-muted-foreground">36 operational, 6 in maintenance</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Maintenance Alerts</CardTitle>
            <Wrench className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">7</div>
            <p className="text-xs text-muted-foreground">3 high priority</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Route Efficiency</CardTitle>
            <Route className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">89.3%</div>
            <p className="text-xs text-muted-foreground">+2.7% from last month</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Fuel Efficiency</CardTitle>
            <TrendingUp className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">95.8%</div>
            <p className="text-xs text-muted-foreground">+1.2% from last quarter</p>
          </CardContent>
        </Card>
      </div>

      <Tabs defaultValue="route-planning" className="space-y-4">
        <TabsList>
          <TabsTrigger value="route-planning">Route Planning</TabsTrigger>
          <TabsTrigger value="predictive-maintenance">Predictive Maintenance</TabsTrigger>
          <TabsTrigger value="fleet-analytics">Fleet Analytics</TabsTrigger>
          <TabsTrigger value="logistics-coordination">Logistics Coordination</TabsTrigger>
        </TabsList>
        <TabsContent value="route-planning" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>AI-Driven Route Planning</CardTitle>
              <CardDescription>
                Optimize routes based on traffic, weather, and fuel consumption
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="h-[300px] rounded-lg border bg-muted flex items-center justify-center">
                <p className="text-muted-foreground">Interactive route planning map would appear here</p>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="predictive-maintenance" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Predictive Maintenance</CardTitle>
              <CardDescription>
                Monitor equipment health and schedule proactive maintenance
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="h-[300px] rounded-lg border bg-muted flex items-center justify-center">
                <p className="text-muted-foreground">Equipment health monitoring dashboard would appear here</p>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="fleet-analytics" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Fleet Utilization Analytics</CardTitle>
              <CardDescription>
                Optimize tanker allocation and track key performance indicators
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="h-[300px] rounded-lg border bg-muted flex items-center justify-center">
                <p className="text-muted-foreground">Fleet analytics dashboard would appear here</p>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="logistics-coordination" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Logistics Coordination</CardTitle>
              <CardDescription>
                Integrate with supply chain systems for seamless operations
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="h-[300px] rounded-lg border bg-muted flex items-center justify-center">
                <p className="text-muted-foreground">Logistics coordination interface would appear here</p>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}
