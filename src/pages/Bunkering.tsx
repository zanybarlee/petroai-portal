import React from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  Ship, 
  Calendar, 
  AlertTriangle, 
  BarChart4, 
  Clock, 
  MapPin, 
  Wind,
  FileCheck,
  BellRing,
  Smartphone,
  Gauge,
  BarChart2,
  ShieldAlert,
  Waves,
  ChevronsUp
} from "lucide-react";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Progress } from "@/components/ui/progress";

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
        
        {/* Dynamic Scheduling Tab */}
        <TabsContent value="dynamic-scheduling" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Dynamic Scheduling</CardTitle>
              <CardDescription>
                AI-powered scheduling for optimal bunkering operations
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <Card className="shadow-sm">
                  <CardHeader className="pb-2">
                    <div className="flex items-center justify-between">
                      <CardTitle className="text-base">Upcoming Bunkering Operations</CardTitle>
                      <Clock className="h-4 w-4 text-muted-foreground" />
                    </div>
                  </CardHeader>
                  <CardContent>
                    <Table>
                      <TableHeader>
                        <TableRow>
                          <TableHead>Vessel</TableHead>
                          <TableHead>Location</TableHead>
                          <TableHead>Scheduled</TableHead>
                          <TableHead>Status</TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        <TableRow>
                          <TableCell className="font-medium">Maersk Voyager</TableCell>
                          <TableCell>Port Klang</TableCell>
                          <TableCell>Today, 14:30</TableCell>
                          <TableCell>
                            <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                              On Schedule
                            </span>
                          </TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell className="font-medium">COSCO Shipping</TableCell>
                          <TableCell>Singapore</TableCell>
                          <TableCell>Today, 18:45</TableCell>
                          <TableCell>
                            <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-amber-100 text-amber-800">
                              Delayed (30m)
                            </span>
                          </TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell className="font-medium">Evergreen Marine</TableCell>
                          <TableCell>Johor Port</TableCell>
                          <TableCell>Tomorrow, 06:15</TableCell>
                          <TableCell>
                            <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                              On Schedule
                            </span>
                          </TableCell>
                        </TableRow>
                      </TableBody>
                    </Table>
                  </CardContent>
                </Card>
                
                <Card className="shadow-sm">
                  <CardHeader className="pb-2">
                    <div className="flex items-center justify-between">
                      <CardTitle className="text-base">Environmental Factors</CardTitle>
                      <Wind className="h-4 w-4 text-muted-foreground" />
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="grid grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <div className="flex justify-between text-sm">
                            <span className="text-muted-foreground">Weather Condition</span>
                            <span className="font-medium">Clear</span>
                          </div>
                          <div className="flex justify-between text-sm">
                            <span className="text-muted-foreground">Wind Speed</span>
                            <span className="font-medium">8 knots</span>
                          </div>
                          <div className="flex justify-between text-sm">
                            <span className="text-muted-foreground">Sea State</span>
                            <span className="font-medium">Slight (0.5-1.25m)</span>
                          </div>
                        </div>
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
                            <span className="text-muted-foreground">Tidal Condition</span>
                            <span className="font-medium">Ebbing</span>
                          </div>
                        </div>
                      </div>
                      
                      <div className="rounded-md bg-blue-50 p-4">
                        <div className="flex">
                          <div className="flex-shrink-0">
                            <MapPin className="h-5 w-5 text-blue-400" />
                          </div>
                          <div className="ml-3">
                            <h3 className="text-sm font-medium text-blue-800">AI Recommendation</h3>
                            <div className="mt-2 text-sm text-blue-700">
                              <p>Optimal bunkering window for Port Klang operations has been updated to 14:00-19:30 based on weather forecast and port congestion data.</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
              
              <Card className="shadow-sm">
                <CardHeader className="pb-2">
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-base">Schedule Optimization</CardTitle>
                    <Calendar className="h-4 w-4 text-muted-foreground" />
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <p className="text-sm text-muted-foreground">
                      The AI system continuously analyzes vessel locations, port conditions, weather forecasts, and fuel demands to optimize the bunkering schedule. Adjustments are made automatically when delays or disruptions occur.
                    </p>
                    
                    <div className="grid md:grid-cols-3 gap-4">
                      <div className="bg-slate-50 p-4 rounded-lg">
                        <h3 className="font-medium mb-2 text-sm">Port Congestion Impact</h3>
                        <div className="flex items-center space-x-2">
                          <span className="text-sm font-medium">High</span>
                          <Progress value={75} className="h-2" />
                        </div>
                        <p className="text-xs text-muted-foreground mt-2">
                          Current congestion at Port Klang requires schedule adjustments for 4 vessels
                        </p>
                      </div>
                      
                      <div className="bg-slate-50 p-4 rounded-lg">
                        <h3 className="font-medium mb-2 text-sm">Weather Condition Impact</h3>
                        <div className="flex items-center space-x-2">
                          <span className="text-sm font-medium">Low</span>
                          <Progress value={25} className="h-2" />
                        </div>
                        <p className="text-xs text-muted-foreground mt-2">
                          Favorable weather conditions across most operational areas
                        </p>
                      </div>
                      
                      <div className="bg-slate-50 p-4 rounded-lg">
                        <h3 className="font-medium mb-2 text-sm">Fuel Supply Chain</h3>
                        <div className="flex items-center space-x-2">
                          <span className="text-sm font-medium">Medium</span>
                          <Progress value={50} className="h-2" />
                        </div>
                        <p className="text-xs text-muted-foreground mt-2">
                          Minor delays in fuel delivery at Singapore terminal affecting 2 operations
                        </p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </CardContent>
          </Card>
        </TabsContent>
        
        {/* Process Automation Tab */}
        <TabsContent value="process-automation" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Process Automation</CardTitle>
              <CardDescription>
                Automated bunkering orders and IoT integration
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <Card className="shadow-sm">
                  <CardHeader className="pb-2">
                    <div className="flex items-center justify-between">
                      <CardTitle className="text-base">Automated Order Management</CardTitle>
                      <FileCheck className="h-4 w-4 text-muted-foreground" />
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="rounded-md bg-green-50 p-4">
                        <div className="flex">
                          <div className="flex-shrink-0">
                            <BellRing className="h-5 w-5 text-green-400" />
                          </div>
                          <div className="ml-3">
                            <h3 className="text-sm font-medium text-green-800">New Order Generated</h3>
                            <div className="mt-2 text-sm text-green-700">
                              <p>Bunkering order #BK-2023-0492 for vessel COSCO Singapore has been automatically generated and sent to supplier Petronas Marine.</p>
                            </div>
                          </div>
                        </div>
                      </div>
                      
                      <Table>
                        <TableHeader>
                          <TableRow>
                            <TableHead>Order ID</TableHead>
                            <TableHead>Vessel</TableHead>
                            <TableHead>Fuel Type</TableHead>
                            <TableHead>Status</TableHead>
                          </TableRow>
                        </TableHeader>
                        <TableBody>
                          <TableRow>
                            <TableCell className="font-medium">BK-2023-0490</TableCell>
                            <TableCell>Maersk Voyager</TableCell>
                            <TableCell>VLSFO</TableCell>
                            <TableCell>
                              <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                                Confirmed
                              </span>
                            </TableCell>
                          </TableRow>
                          <TableRow>
                            <TableCell className="font-medium">BK-2023-0491</TableCell>
                            <TableCell>Evergreen Marine</TableCell>
                            <TableCell>MGO</TableCell>
                            <TableCell>
                              <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-amber-100 text-amber-800">
                                Awaiting Confirmation
                              </span>
                            </TableCell>
                          </TableRow>
                          <TableRow>
                            <TableCell className="font-medium">BK-2023-0492</TableCell>
                            <TableCell>COSCO Singapore</TableCell>
                            <TableCell>VLSFO</TableCell>
                            <TableCell>
                              <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                                Just Created
                              </span>
                            </TableCell>
                          </TableRow>
                        </TableBody>
                      </Table>
                    </div>
                  </CardContent>
                </Card>
                
                <Card className="shadow-sm">
                  <CardHeader className="pb-2">
                    <div className="flex items-center justify-between">
                      <CardTitle className="text-base">IoT Sensor Integration</CardTitle>
                      <Smartphone className="h-4 w-4 text-muted-foreground" />
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <p className="text-sm text-muted-foreground">
                        Real-time monitoring of vessels and bunkering operations through IoT sensors.
                      </p>
                      
                      <div className="grid grid-cols-2 gap-4">
                        <div className="bg-slate-50 p-4 rounded-lg">
                          <h3 className="font-medium mb-2 text-sm">Fuel Level Monitoring</h3>
                          <div className="space-y-3">
                            <div>
                              <div className="flex justify-between text-xs mb-1">
                                <span>Maersk Voyager</span>
                                <span>78% full</span>
                              </div>
                              <Progress value={78} className="h-2" />
                            </div>
                            <div>
                              <div className="flex justify-between text-xs mb-1">
                                <span>COSCO Singapore</span>
                                <span>32% full</span>
                              </div>
                              <Progress value={32} className="h-2" />
                            </div>
                            <div>
                              <div className="flex justify-between text-xs mb-1">
                                <span>Evergreen Marine</span>
                                <span>56% full</span>
                              </div>
                              <Progress value={56} className="h-2" />
                            </div>
                          </div>
                        </div>
                        
                        <div className="bg-slate-50 p-4 rounded-lg">
                          <h3 className="font-medium mb-2 text-sm">Active Refueling Operations</h3>
                          <div className="space-y-2">
                            <div className="flex justify-between text-xs">
                              <span>Current Flow Rate</span>
                              <span className="font-medium">450 m³/hr</span>
                            </div>
                            <div className="flex justify-between text-xs">
                              <span>Transfer Temperature</span>
                              <span className="font-medium">42°C</span>
                            </div>
                            <div className="flex justify-between text-xs">
                              <span>Pressure</span>
                              <span className="font-medium">5.2 bar</span>
                            </div>
                            <div className="flex justify-between text-xs">
                              <span>Est. Completion</span>
                              <span className="font-medium">14:45 (30m remaining)</span>
                            </div>
                          </div>
                        </div>
                      </div>
                      
                      <div className="rounded-md bg-blue-50 p-4 text-sm">
                        <p className="font-medium text-blue-800">Automated Actions</p>
                        <ul className="mt-2 list-disc list-inside text-blue-700 space-y-1">
                          <li>Fuel order automatically triggered for COSCO Singapore at 30% threshold</li>
                          <li>Pressure adjustment notification sent to bunkering vessel</li>
                          <li>Parameter logs captured for compliance documentation</li>
                        </ul>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
              
              <Card className="shadow-sm">
                <CardHeader className="pb-2">
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-base">Process Analytics</CardTitle>
                    <BarChart2 className="h-4 w-4 text-muted-foreground" />
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <p className="text-sm text-muted-foreground">
                      The system continuously monitors and improves bunkering processes through AI analysis of historical data and operational patterns.
                    </p>
                    
                    <div className="grid md:grid-cols-3 gap-4">
                      <Card className="bg-slate-50">
                        <CardHeader className="py-3 px-4">
                          <CardTitle className="text-sm">Order Processing Time</CardTitle>
                        </CardHeader>
                        <CardContent className="py-2 px-4">
                          <div className="text-2xl font-bold">12.5 min</div>
                          <p className="text-xs text-muted-foreground">-45% from manual processing</p>
                        </CardContent>
                      </Card>
                      
                      <Card className="bg-slate-50">
                        <CardHeader className="py-3 px-4">
                          <CardTitle className="text-sm">Documentation Accuracy</CardTitle>
                        </CardHeader>
                        <CardContent className="py-2 px-4">
                          <div className="text-2xl font-bold">99.8%</div>
                          <p className="text-xs text-muted-foreground">+12% from previous quarter</p>
                        </CardContent>
                      </Card>
                      
                      <Card className="bg-slate-50">
                        <CardHeader className="py-3 px-4">
                          <CardTitle className="text-sm">Transfer Efficiency</CardTitle>
                        </CardHeader>
                        <CardContent className="py-2 px-4">
                          <div className="text-2xl font-bold">97.2%</div>
                          <p className="text-xs text-muted-foreground">+5.4% from manual control</p>
                        </CardContent>
                      </Card>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </CardContent>
          </Card>
        </TabsContent>
        
        {/* Operational Efficiency Tab */}
        <TabsContent value="operational-efficiency" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Operational Efficiency</CardTitle>
              <CardDescription>
                Resource allocation optimization and real-time monitoring
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <Card className="shadow-sm">
                  <CardHeader className="pb-2">
                    <div className="flex items-center justify-between">
                      <CardTitle className="text-base">Resource Allocation</CardTitle>
                      <Gauge className="h-4 w-4 text-muted-foreground" />
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <p className="text-sm text-muted-foreground">
                        AI optimization of bunkering vessels, crew, and equipment based on demand forecasting and operational constraints.
                      </p>
                      
                      <Table>
                        <TableHeader>
                          <TableRow>
                            <TableHead>Resource</TableHead>
                            <TableHead>Allocation</TableHead>
                            <TableHead>Utilization</TableHead>
                            <TableHead>Status</TableHead>
                          </TableRow>
                        </TableHeader>
                        <TableBody>
                          <TableRow>
                            <TableCell className="font-medium">Bunker Vessel #BV-032</TableCell>
                            <TableCell>Port Klang (Zones A, B)</TableCell>
                            <TableCell>
                              <div className="flex items-center">
                                <Progress value={85} className="h-2 w-16 mr-2" />
                                <span className="text-xs">85%</span>
                              </div>
                            </TableCell>
                            <TableCell>
                              <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                                Optimal
                              </span>
                            </TableCell>
                          </TableRow>
                          <TableRow>
                            <TableCell className="font-medium">Crew Team #C-114</TableCell>
                            <TableCell>Singapore Terminal</TableCell>
                            <TableCell>
                              <div className="flex items-center">
                                <Progress value={65} className="h-2 w-16 mr-2" />
                                <span className="text-xs">65%</span>
                              </div>
                            </TableCell>
                            <TableCell>
                              <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                                Optimal
                              </span>
                            </TableCell>
                          </TableRow>
                          <TableRow>
                            <TableCell className="font-medium">Bunker Vessel #BV-028</TableCell>
                            <TableCell>Johor Port (All Zones)</TableCell>
                            <TableCell>
                              <div className="flex items-center">
                                <Progress value={95} className="h-2 w-16 mr-2" />
                                <span className="text-xs">95%</span>
                              </div>
                            </TableCell>
                            <TableCell>
                              <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-amber-100 text-amber-800">
                                Near Capacity
                              </span>
                            </TableCell>
                          </TableRow>
                        </TableBody>
                      </Table>
                      
                      <div className="rounded-md bg-blue-50 p-4">
                        <div className="flex">
                          <div className="flex-shrink-0">
                            <ChevronsUp className="h-5 w-5 text-blue-400" />
                          </div>
                          <div className="ml-3">
                            <h3 className="text-sm font-medium text-blue-800">AI Optimization Recommendation</h3>
                            <div className="mt-2 text-sm text-blue-700">
                              <p>Consider reallocating Bunker Vessel #BV-041 from Singapore to Johor Port on Thursday to balance workload and reduce waiting times.</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
                
                <Card className="shadow-sm">
                  <CardHeader className="pb-2">
                    <div className="flex items-center justify-between">
                      <CardTitle className="text-base">Performance Metrics</CardTitle>
                      <BarChart4 className="h-4 w-4 text-muted-foreground" />
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="grid grid-cols-2 gap-4">
                        <Card className="bg-slate-50">
                          <CardHeader className="py-3 px-4">
                            <CardTitle className="text-sm">Average Waiting Time</CardTitle>
                          </CardHeader>
                          <CardContent className="py-2 px-4">
                            <div className="text-2xl font-bold">1.2 hrs</div>
                            <p className="text-xs text-green-600">-35% month-over-month</p>
                          </CardContent>
                        </Card>
                        
                        <Card className="bg-slate-50">
                          <CardHeader className="py-3 px-4">
                            <CardTitle className="text-sm">Bunkering Duration</CardTitle>
                          </CardHeader>
                          <CardContent className="py-2 px-4">
                            <div className="text-2xl font-bold">3.4 hrs</div>
                            <p className="text-xs text-green-600">-18% month-over-month</p>
                          </CardContent>
                        </Card>
                        
                        <Card className="bg-slate-50">
                          <CardHeader className="py-3 px-4">
                            <CardTitle className="text-sm">Resource Utilization</CardTitle>
                          </CardHeader>
                          <CardContent className="py-2 px-4">
                            <div className="text-2xl font-bold">87%</div>
                            <p className="text-xs text-green-600">+12% month-over-month</p>
                          </CardContent>
                        </Card>
                        
                        <Card className="bg-slate-50">
                          <CardHeader className="py-3 px-4">
                            <CardTitle className="text-sm">Operational Cost</CardTitle>
                          </CardHeader>
                          <CardContent className="py-2 px-4">
                            <div className="text-2xl font-bold">$412/hr</div>
                            <p className="text-xs text-green-600">-8.5% month-over-month</p>
                          </CardContent>
                        </Card>
                      </div>
                      
                      <div className="bg-slate-50 p-4 rounded-lg">
                        <h3 className="font-medium mb-2 text-sm">Efficiency Improvement Trends</h3>
                        <div className="h-40 bg-muted/50 rounded-md flex items-center justify-center text-muted-foreground text-sm">
                          [Efficiency trends chart visualization]
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
              
              <Card className="shadow-sm">
                <CardHeader className="pb-2">
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-base">Bottleneck Analysis</CardTitle>
                    <BarChart2 className="h-4 w-4 text-muted-foreground" />
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <p className="text-sm text-muted-foreground">
                      AI analysis of operational data identifies bottlenecks and suggests process improvements.
                    </p>
                    
                    <div className="grid md:grid-cols-3 gap-4">
                      <div className="bg-red-50 p-4 rounded-lg">
                        <h3 className="font-medium mb-2 text-sm text-red-800">Critical Bottleneck: Port Clearance</h3>
                        <p className="text-xs text-red-700">
                          Average delay of 42 minutes due to document processing at Port Klang. Recommendation: Implement pre-clearance protocol for regular vessels.
                        </p>
                      </div>
                      
                      <div className="bg-amber-50 p-4 rounded-lg">
                        <h3 className="font-medium mb-2 text-sm text-amber-800">Moderate Bottleneck: Crew Handovers</h3>
                        <p className="text-xs text-amber-700">
                          15-20 minute delays during shift transitions. Recommendation: Implement staggered handover schedule.
                        </p>
                      </div>
                      
                      <div className="bg-green-50 p-4 rounded-lg">
                        <h3 className="font-medium mb-2 text-sm text-green-800">Resolved: Fuel Transfer Rate</h3>
                        <p className="text-xs text-green-700">
                          Previous bottleneck resolved by upgrading pump systems. Transfer rate improved by 22%.
                        </p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </CardContent>
          </Card>
        </TabsContent>
        
        {/* Risk & Safety Tab */}
        <TabsContent value="risk-safety" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Risk & Safety Alerts</CardTitle>
              <CardDescription>
                Predictive analytics for safety risks and automated alerts
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <Card className="shadow-sm">
                  <CardHeader className="pb-2">
                    <div className="flex items-center justify-between">
                      <CardTitle className="text-base">Active Safety Alerts</CardTitle>
                      <ShieldAlert className="h-4 w-4 text-muted-foreground" />
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="rounded-md bg-red-50 p-4">
                        <div className="flex">
                          <div className="flex-shrink-0">
                            <AlertTriangle className="h-5 w-5 text-red-400" />
                          </div>
                          <div className="ml-3">
                            <h3 className="text-sm font-medium text-red-800">High Priority Alert: Pressure Anomaly</h3>
                            <div className="mt-2 text-sm text-red-700">
                              <p>Abnormal pressure fluctuations detected during bunkering operation #BK-2023-0487. Transfer rate automatically reduced by 15%.</p>
                              <p className="mt-1">Location: Port Klang, Berth 12</p>
                              <p className="mt-1">Vessel: Maersk Voyager</p>
                            </div>
                            <div className="mt-4">
                              <button
                                type="button"
                                className="inline-flex items-center rounded-md border border-transparent bg-red-100 px-3 py-2 text-sm font-medium leading-4 text-red-800 hover:bg-red-200 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2"
                              >
                                View Details
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                      
                      <div className="rounded-md bg-amber-50 p-4">
                        <div className="flex">
                          <div className="flex-shrink-0">
                            <AlertTriangle className="h-5 w-5 text-amber-400" />
                          </div>
                          <div className="ml-3">
                            <h3 className="text-sm font-medium text-amber-800">Medium Priority: Weather Advisory</h3>
                            <div className="mt-2 text-sm text-amber-700">
                              <p>Increased wind speeds expected in Singapore area (15-20 knots) within next 4 hours. May impact scheduled bunkering operations.</p>
                            </div>
                            <div className="mt-4">
                              <button
                                type="button"
                                className="inline-flex items-center rounded-md border border-transparent bg-amber-100 px-3 py-2 text-sm font-medium leading-4 text-amber-800 hover:bg-amber-200 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:ring-offset-2"
                              >
                                View Details
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
                
                <Card className="shadow-sm">
                  <CardHeader className="pb-2">
                    <div className="flex items-center justify-between">
                      <CardTitle className="text-base">Predictive Risk Assessment</CardTitle>
                      <Waves className="h-4 w-4 text-muted-foreground" />
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <p className="text-sm text-muted-foreground">
                        AI analyzes operational data to predict potential safety risks before they occur.
                      </p>
                      
                      <Table>
                        <TableHeader>
                          <TableRow>
                            <TableHead>Upcoming Operation</TableHead>
                            <TableHead>Risk Factors</TableHead>
                            <TableHead>Risk Level</TableHead>
                          </TableRow>
                        </TableHeader>
                        <TableBody>
                          <TableRow>
                            <TableCell className="font-medium">COSCO Singapore, Tomorrow 06:30</TableCell>
                            <TableCell>Weather conditions, crew fatigue</TableCell>
                            <TableCell>
                              <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-amber-100 text-amber-800">
                                Medium (68%)
                              </span>
                            </TableCell>
                          </TableRow>
                          <TableRow>
                            <TableCell className="font-medium">Evergreen Marine, Today 18:45</TableCell>
                            <TableCell>Technical maintenance history</TableCell>
                            <TableCell>
                              <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                                Low (23%)
                              </span>
                            </TableCell>
                          </TableRow>
                          <TableRow>
                            <TableCell className="font-medium">Maersk Voyager, Today 14:30</TableCell>
                            <TableCell>Port congestion, first-time procedure</TableCell>
                            <TableCell>
                              <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-amber-100 text-amber-800">
                                Medium (54%)
                              </span>
                            </TableCell>
                          </TableRow>
                        </TableBody>
                      </Table>
                      
                      <div className="rounded-md bg-blue-50 p-4">
                        <div className="flex">
                          <div className="flex-shrink-0">
                            <ShieldAlert className="h-5 w-5 text-blue-400" />
                          </div>
                          <div className="ml-3">
                            <h3 className="text-sm font-medium text-blue-800">Automated Safety Measures</h3>
                            <div className="mt-2 text-sm text-blue-700">
                              <ul className="list-disc list-inside space-y-1">
                                <li>Additional safety briefing scheduled for COSCO Singapore operation</li>
                                <li>Weather monitoring frequency increased for Singapore Terminal</li>
                                <li>Pressure thresholds adjusted for Maersk Voyager operation</li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
              
              <Card className="shadow-sm">
                <CardHeader className="pb-2">
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-base">Safety Compliance & Training</CardTitle>
                    <ShieldAlert className="h-4 w-4 text-muted-foreground" />
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <p className="text-sm text-muted-foreground">
                      AI analysis of safety incidents and near-misses to identify training needs and compliance improvements.
                    </p>
                    
                    <div className="grid md:grid-cols-3 gap-4">
                      <Card className="bg-slate-50">
                        <CardHeader className="py-3 px-4">
                          <CardTitle className="text-sm">Safety Compliance Rate</CardTitle>
                        </CardHeader>
                        <CardContent className="py-2 px-4">
                          <div className="text-2xl font-bold">97.8%</div>
                          <p className="text-xs text-green-600">+2.3% from last quarter</p>
                        </CardContent>
                      </Card>
                      
                      <Card className="bg-slate-50">
                        <CardHeader className="py-3 px-4">
                          <CardTitle className="text-sm">Incident Rate</CardTitle>
                        </CardHeader>
                        <CardContent className="py-2 px-4">
                          <div className="text-2xl font-bold">0.025</div>
                          <p className="text-xs text-green-600">-15% from last quarter</p>
                        </CardContent>
                      </Card>
                      
                      <Card className="bg-slate-50">
                        <CardHeader className="py-3 px-4">
                          <CardTitle className="text-sm">Safety Training Completion</CardTitle>
                        </CardHeader>
                        <CardContent className="py-2 px-4">
                          <div className="text-2xl font-bold">94.5%</div>
                          <p className="text-xs text-amber-600">+0.8% from last quarter</p>
                        </CardContent>
                      </Card>
                    </div>
                    
                    <div className="bg-slate-50 p-4 rounded-lg">
                      <h3 className="font-medium mb-2 text-sm">AI-Identified Training Needs</h3>
                      <div className="space-y-2">
                        <div className="flex items-center">
                          <Progress value={85} className="h-2 w-full mr-2" />
                          <span className="text-xs whitespace-nowrap">Pressure Management (85%)</span>
                        </div>
                        <div className="flex items-center">
                          <Progress value={72} className="h-2 w-full mr-2" />
                          <span className="text-xs whitespace-nowrap">Emergency Protocols (72%)</span>
                        </div>
                        <div className="flex items-center">
                          <Progress value={54} className="h-2 w-full mr-2" />
                          <span className="text-xs whitespace-nowrap">Documentation Standards (54%)</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}
