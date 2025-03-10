
import React from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Ship, Calendar, AlertTriangle, BarChart4 } from "lucide-react";

export default function Bunkering() {
  return (
    <div className="space-y-6">
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Active Bunkering Operations</CardTitle>
            <Ship className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">12</div>
            <p className="text-xs text-muted-foreground">3 awaiting completion</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Scheduled Operations</CardTitle>
            <Calendar className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">24</div>
            <p className="text-xs text-muted-foreground">Next in 2h 15m</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Safety Alerts</CardTitle>
            <AlertTriangle className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">2</div>
            <p className="text-xs text-muted-foreground">1 high priority</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Operational Efficiency</CardTitle>
            <BarChart4 className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">94.2%</div>
            <p className="text-xs text-muted-foreground">+2.1% from last week</p>
          </CardContent>
        </Card>
      </div>

      <Tabs defaultValue="dynamic-scheduling" className="space-y-4">
        <TabsList>
          <TabsTrigger value="dynamic-scheduling">Dynamic Scheduling</TabsTrigger>
          <TabsTrigger value="process-automation">Process Automation</TabsTrigger>
          <TabsTrigger value="operational-efficiency">Operational Efficiency</TabsTrigger>
          <TabsTrigger value="risk-safety">Risk & Safety</TabsTrigger>
        </TabsList>
        <TabsContent value="dynamic-scheduling" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Dynamic Scheduling</CardTitle>
              <CardDescription>
                AI-powered scheduling for optimal bunkering operations
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="h-[300px] rounded-lg border bg-muted flex items-center justify-center">
                <p className="text-muted-foreground">Interactive scheduling dashboard would appear here</p>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="process-automation" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Process Automation</CardTitle>
              <CardDescription>
                Automated bunkering orders and IoT integration
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="h-[300px] rounded-lg border bg-muted flex items-center justify-center">
                <p className="text-muted-foreground">Process automation dashboard would appear here</p>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="operational-efficiency" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Operational Efficiency</CardTitle>
              <CardDescription>
                Resource allocation optimization and real-time monitoring
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="h-[300px] rounded-lg border bg-muted flex items-center justify-center">
                <p className="text-muted-foreground">Operational efficiency metrics would appear here</p>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="risk-safety" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Risk & Safety Alerts</CardTitle>
              <CardDescription>
                Predictive analytics for safety risks and automated alerts
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="h-[300px] rounded-lg border bg-muted flex items-center justify-center">
                <p className="text-muted-foreground">Risk monitoring dashboard would appear here</p>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}
