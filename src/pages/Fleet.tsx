
import React from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  Truck, Route, Wrench, BarChart4, Box,
  AlertTriangle, TrendingUp, Navigation, CloudRain,
  Fuel, Timer, CheckCircle2, XCircle
} from "lucide-react";

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
                Optimize routes based on real-time conditions and historical data
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                <Card>
                  <CardHeader>
                    <div className="flex items-center gap-2">
                      <Navigation className="h-4 w-4" />
                      <h4 className="text-sm font-semibold">Current Routes</h4>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span className="text-muted-foreground">Active Routes</span>
                        <span className="font-medium">15</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span className="text-muted-foreground">Optimized Today</span>
                        <span className="font-medium">8</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span className="text-muted-foreground">Efficiency Gain</span>
                        <span className="font-medium text-green-600">+12%</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <div className="flex items-center gap-2">
                      <CloudRain className="h-4 w-4" />
                      <h4 className="text-sm font-semibold">Weather Impact</h4>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span className="text-muted-foreground">Visibility</span>
                        <span className="font-medium">Good ({'>'}5nm)</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span className="text-muted-foreground">Port Traffic</span>
                        <span className="font-medium">Moderate</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span className="text-muted-foreground">Risk Level</span>
                        <span className="font-medium text-yellow-600">Medium</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <div className="flex items-center gap-2">
                      <Fuel className="h-4 w-4" />
                      <h4 className="text-sm font-semibold">Fuel Analytics</h4>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span className="text-muted-foreground">Avg. Consumption</span>
                        <span className="font-medium">42L/100km</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span className="text-muted-foreground">Cost Savings</span>
                        <span className="font-medium text-green-600">$1,245</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span className="text-muted-foreground">CO2 Reduction</span>
                        <span className="font-medium">-8.5%</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="predictive-maintenance" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Predictive Maintenance Dashboard</CardTitle>
              <CardDescription>
                Monitor equipment health and schedule proactive maintenance
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                <Card>
                  <CardHeader>
                    <div className="flex items-center gap-2">
                      <Wrench className="h-4 w-4" />
                      <h4 className="text-sm font-semibold">Maintenance Status</h4>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span className="text-muted-foreground">Due This Week</span>
                        <span className="font-medium">5 vehicles</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span className="text-muted-foreground">Completed</span>
                        <span className="font-medium text-green-600">12 tasks</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span className="text-muted-foreground">Pending</span>
                        <span className="font-medium text-yellow-600">3 tasks</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <div className="flex items-center gap-2">
                      <AlertTriangle className="h-4 w-4" />
                      <h4 className="text-sm font-semibold">Critical Alerts</h4>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span className="text-muted-foreground">Engine Alerts</span>
                        <span className="font-medium text-red-600">2</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span className="text-muted-foreground">Battery Health</span>
                        <span className="font-medium text-yellow-600">4</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span className="text-muted-foreground">Tire Pressure</span>
                        <span className="font-medium text-green-600">OK</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <div className="flex items-center gap-2">
                      <Timer className="h-4 w-4" />
                      <h4 className="text-sm font-semibold">Service Timeline</h4>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span className="text-muted-foreground">Next Service</span>
                        <span className="font-medium">48 hours</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span className="text-muted-foreground">Avg. Downtime</span>
                        <span className="font-medium">4.2 hours</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span className="text-muted-foreground">Efficiency</span>
                        <span className="font-medium text-green-600">94%</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="fleet-analytics" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Fleet Analytics Overview</CardTitle>
              <CardDescription>
                Track key performance indicators and fleet utilization metrics
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                <Card>
                  <CardHeader>
                    <div className="flex items-center gap-2">
                      <BarChart4 className="h-4 w-4" />
                      <h4 className="text-sm font-semibold">Performance Metrics</h4>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span className="text-muted-foreground">Fleet Utilization</span>
                        <span className="font-medium">87%</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span className="text-muted-foreground">On-Time Delivery</span>
                        <span className="font-medium text-green-600">92%</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span className="text-muted-foreground">Cost per Mile</span>
                        <span className="font-medium">$1.24</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="h-4 w-4" />
                      <h4 className="text-sm font-semibold">Compliance Status</h4>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span className="text-muted-foreground">Safety Score</span>
                        <span className="font-medium text-green-600">95%</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span className="text-muted-foreground">Documentation</span>
                        <span className="font-medium">Complete</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span className="text-muted-foreground">Violations</span>
                        <span className="font-medium text-green-600">None</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <div className="flex items-center gap-2">
                      <XCircle className="h-4 w-4" />
                      <h4 className="text-sm font-semibold">Risk Assessment</h4>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span className="text-muted-foreground">Safety Incidents</span>
                        <span className="font-medium text-red-600">2 minor</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span className="text-muted-foreground">Risk Level</span>
                        <span className="font-medium text-yellow-600">Medium</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span className="text-muted-foreground">Insurance Status</span>
                        <span className="font-medium">Updated</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="logistics-coordination" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Logistics Coordination Center</CardTitle>
              <CardDescription>
                Coordinate deliveries and manage inventory across the fleet
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                <Card>
                  <CardHeader>
                    <div className="flex items-center gap-2">
                      <Box className="h-4 w-4" />
                      <h4 className="text-sm font-semibold">Delivery Status</h4>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span className="text-muted-foreground">In Transit</span>
                        <span className="font-medium">18</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span className="text-muted-foreground">Completed Today</span>
                        <span className="font-medium text-green-600">24</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span className="text-muted-foreground">Delayed</span>
                        <span className="font-medium text-yellow-600">2</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <div className="flex items-center gap-2">
                      <TrendingUp className="h-4 w-4" />
                      <h4 className="text-sm font-semibold">Resource Allocation</h4>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span className="text-muted-foreground">Fleet Coverage</span>
                        <span className="font-medium">92%</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span className="text-muted-foreground">Load Factor</span>
                        <span className="font-medium">85%</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span className="text-muted-foreground">Idle Time</span>
                        <span className="font-medium text-green-600">7%</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <div className="flex items-center gap-2">
                      <Route className="h-4 w-4" />
                      <h4 className="text-sm font-semibold">Schedule Optimization</h4>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span className="text-muted-foreground">Routes Optimized</span>
                        <span className="font-medium">15/18</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span className="text-muted-foreground">Time Saved</span>
                        <span className="font-medium text-green-600">45 min</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span className="text-muted-foreground">Fuel Saved</span>
                        <span className="font-medium">120L</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}
