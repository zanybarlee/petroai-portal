
import React from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { 
  BarChart,
  LineChart,
  Bar,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip as RechartsTooltip,
  Legend,
  ResponsiveContainer 
} from "recharts";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { FileText, AlertCircle, Check, TrendingUp, BarChart3, FileSearch } from "lucide-react";

// Sample data for charts
const supplierPerformanceData = [
  { name: "Jan", Petron: 78, Petronas: 82, Shell: 75 },
  { name: "Feb", Petron: 82, Petronas: 85, Shell: 79 },
  { name: "Mar", Petron: 80, Petronas: 87, Shell: 81 },
  { name: "Apr", Petron: 84, Petronas: 84, Shell: 82 },
  { name: "May", Petron: 86, Petronas: 88, Shell: 85 },
  { name: "Jun", Petron: 88, Petronas: 90, Shell: 87 }
];

const pricingTrendData = [
  { name: "Jan", Petron: 62.5, Petronas: 63.1, Shell: 64.2, Average: 63.3 },
  { name: "Feb", Petron: 63.2, Petronas: 64.1, Shell: 65.3, Average: 64.2 },
  { name: "Mar", Petron: 64.1, Petronas: 65.0, Shell: 66.1, Average: 65.1 },
  { name: "Apr", Petron: 63.8, Petronas: 64.7, Shell: 65.9, Average: 64.8 },
  { name: "May", Petron: 64.5, Petronas: 65.3, Shell: 66.5, Average: 65.4 },
  { name: "Jun", Petron: 65.2, Petronas: 66.0, Shell: 67.2, Average: 66.1 }
];

const recentContractsData = [
  { id: "CT-2023-056", supplier: "Petron", status: "Valid", expiry: "2024-12-31", compliance: 98 },
  { id: "CT-2023-078", supplier: "Petronas", status: "Under Review", expiry: "2024-10-15", compliance: 92 },
  { id: "CT-2023-104", supplier: "Shell", status: "Valid", expiry: "2025-02-28", compliance: 97 },
  { id: "CT-2023-112", supplier: "Caltex", status: "Needs Attention", expiry: "2024-08-20", compliance: 85 }
];

const SupplierRelationship = () => {
  return (
    <div className="space-y-6">
      {/* Overview Cards */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Active Suppliers</CardTitle>
            <FileText className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">24</div>
            <p className="text-xs text-muted-foreground">+2 from last quarter</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Contracts Reviewed</CardTitle>
            <AlertCircle className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">18</div>
            <p className="text-xs text-muted-foreground">This month</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Compliance Rate</CardTitle>
            <Check className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">94.3%</div>
            <p className="text-xs text-muted-foreground">+2.1% from last month</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Savings Projected</CardTitle>
            <TrendingUp className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">$1.2M</div>
            <p className="text-xs text-muted-foreground">Next quarter forecast</p>
          </CardContent>
        </Card>
      </div>

      {/* Main Content Tabs */}
      <Tabs defaultValue="contracts" className="w-full">
        <TabsList className="grid grid-cols-4 w-full mb-4">
          <TabsTrigger value="contracts">Contract Validation</TabsTrigger>
          <TabsTrigger value="pricing">Pricing Optimization</TabsTrigger>
          <TabsTrigger value="performance">Supplier Performance</TabsTrigger>
          <TabsTrigger value="negotiation">Negotiation Support</TabsTrigger>
        </TabsList>

        {/* Contract Validation Tab */}
        <TabsContent value="contracts" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Automated Contract Validation</CardTitle>
              <CardDescription>
                AI-powered analysis of supplier contracts for compliance and risk assessment
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <h3 className="text-lg font-medium">Recent Contract Reviews</h3>
                  <Button variant="outline" size="sm">View All</Button>
                </div>
                <div className="rounded-md border">
                  <table className="min-w-full divide-y divide-gray-200">
                    <thead className="bg-muted/50">
                      <tr>
                        <th className="px-6 py-3 text-left text-xs font-medium text-muted-foreground uppercase tracking-wider">Contract ID</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-muted-foreground uppercase tracking-wider">Supplier</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-muted-foreground uppercase tracking-wider">Status</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-muted-foreground uppercase tracking-wider">Expiry</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-muted-foreground uppercase tracking-wider">Compliance</th>
                      </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                      {recentContractsData.map((contract, i) => (
                        <tr key={i}>
                          <td className="px-6 py-4 whitespace-nowrap text-sm">{contract.id}</td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm">{contract.supplier}</td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm">
                            <Badge variant={contract.status === "Valid" ? "success" : 
                                          contract.status === "Under Review" ? "outline" : "destructive"}>
                              {contract.status}
                            </Badge>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm">{contract.expiry}</td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm">
                            <div className="flex items-center">
                              <span className={`mr-2 ${contract.compliance > 95 ? "text-green-600" : 
                                                      contract.compliance > 90 ? "text-amber-600" : 
                                                      "text-red-600"}`}>
                                {contract.compliance}%
                              </span>
                              <div className="w-24 bg-gray-200 rounded-full h-2.5">
                                <div 
                                  className={`h-2.5 rounded-full ${contract.compliance > 95 ? "bg-green-600" : 
                                                                 contract.compliance > 90 ? "bg-amber-600" : 
                                                                 "bg-red-600"}`}
                                  style={{ width: `${contract.compliance}%` }}>
                                </div>
                              </div>
                            </div>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Pricing Optimization Tab */}
        <TabsContent value="pricing" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Pricing Optimization</CardTitle>
              <CardDescription>
                AI-driven analysis of pricing trends and recommendations for better supplier rates
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="h-80">
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart
                    data={pricingTrendData}
                    margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
                  >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <RechartsTooltip />
                    <Legend />
                    <Line type="monotone" dataKey="Petron" stroke="#8884d8" />
                    <Line type="monotone" dataKey="Petronas" stroke="#82ca9d" />
                    <Line type="monotone" dataKey="Shell" stroke="#ffc658" />
                    <Line type="monotone" dataKey="Average" stroke="#ff8042" strokeWidth={2} />
                  </LineChart>
                </ResponsiveContainer>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <Card>
                  <CardHeader className="p-4">
                    <CardTitle className="text-sm">Price Variance</CardTitle>
                  </CardHeader>
                  <CardContent className="p-4 pt-0">
                    <div className="text-2xl font-bold">±3.2%</div>
                    <p className="text-xs text-muted-foreground">Across major suppliers</p>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader className="p-4">
                    <CardTitle className="text-sm">Potential Savings</CardTitle>
                  </CardHeader>
                  <CardContent className="p-4 pt-0">
                    <div className="text-2xl font-bold">$425K</div>
                    <p className="text-xs text-muted-foreground">Through optimized pricing</p>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader className="p-4">
                    <CardTitle className="text-sm">Market Position</CardTitle>
                  </CardHeader>
                  <CardContent className="p-4 pt-0">
                    <div className="text-2xl font-bold">Favorable</div>
                    <p className="text-xs text-muted-foreground">For next quarter negotiations</p>
                  </CardContent>
                </Card>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Supplier Performance Tab */}
        <TabsContent value="performance" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Supplier Performance Analytics</CardTitle>
              <CardDescription>
                Track performance metrics and identify areas for improvement
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="h-80">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart
                    data={supplierPerformanceData}
                    margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
                  >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <RechartsTooltip />
                    <Legend />
                    <Bar dataKey="Petron" fill="#8884d8" />
                    <Bar dataKey="Petronas" fill="#82ca9d" />
                    <Bar dataKey="Shell" fill="#ffc658" />
                  </BarChart>
                </ResponsiveContainer>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <Card>
                  <CardHeader className="p-4">
                    <CardTitle className="text-sm">Top Performer</CardTitle>
                  </CardHeader>
                  <CardContent className="p-4 pt-0">
                    <div className="text-xl font-bold">Petronas</div>
                    <p className="text-xs text-muted-foreground">90% reliability score</p>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader className="p-4">
                    <CardTitle className="text-sm">Most Improved</CardTitle>
                  </CardHeader>
                  <CardContent className="p-4 pt-0">
                    <div className="text-xl font-bold">Shell</div>
                    <p className="text-xs text-muted-foreground">+12% year over year</p>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader className="p-4">
                    <CardTitle className="text-sm">Risk Assessment</CardTitle>
                  </CardHeader>
                  <CardContent className="p-4 pt-0">
                    <div className="text-xl font-bold">Low</div>
                    <p className="text-xs text-muted-foreground">For major suppliers</p>
                  </CardContent>
                </Card>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Negotiation Support Tab */}
        <TabsContent value="negotiation" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>AI-Driven Negotiation Support</CardTitle>
              <CardDescription>
                Data-driven insights to strengthen your position during contract negotiations
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <Card>
                    <CardHeader className="p-4">
                      <CardTitle className="text-sm">Active Negotiations</CardTitle>
                    </CardHeader>
                    <CardContent className="p-4 pt-0">
                      <ul className="space-y-2">
                        <li className="flex justify-between">
                          <span>Petron Master Agreement</span>
                          <Badge>In Progress</Badge>
                        </li>
                        <li className="flex justify-between">
                          <span>Petronas Q3 Pricing</span>
                          <Badge variant="outline">Planning</Badge>
                        </li>
                        <li className="flex justify-between">
                          <span>Shell Service Extension</span>
                          <Badge variant="secondary">Draft</Badge>
                        </li>
                      </ul>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardHeader className="p-4">
                      <CardTitle className="text-sm">Recommended Strategies</CardTitle>
                    </CardHeader>
                    <CardContent className="p-4 pt-0">
                      <ul className="space-y-2">
                        <li className="flex items-start">
                          <div className="mr-2 mt-0.5 h-2 w-2 rounded-full bg-blue-500"></div>
                          <span>Bundle services for 5% volume discount</span>
                        </li>
                        <li className="flex items-start">
                          <div className="mr-2 mt-0.5 h-2 w-2 rounded-full bg-green-500"></div>
                          <span>Extend Petronas contract to secure pricing</span>
                        </li>
                        <li className="flex items-start">
                          <div className="mr-2 mt-0.5 h-2 w-2 rounded-full bg-purple-500"></div>
                          <span>Renegotiate payment terms with Shell</span>
                        </li>
                      </ul>
                    </CardContent>
                  </Card>
                </div>
                <Card>
                  <CardHeader className="p-4">
                    <CardTitle className="text-sm">Pricing Scenario Simulator</CardTitle>
                  </CardHeader>
                  <CardContent className="p-4 pt-0">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      <div>
                        <h4 className="text-sm font-medium mb-2">Conservative</h4>
                        <div className="p-3 bg-muted rounded-md">
                          <div className="text-lg font-bold">$63.50/unit</div>
                          <div className="text-xs text-muted-foreground">Savings: $120K</div>
                          <div className="text-xs text-muted-foreground">Acceptance: High</div>
                        </div>
                      </div>
                      <div>
                        <h4 className="text-sm font-medium mb-2">Balanced</h4>
                        <div className="p-3 bg-blue-50 border border-blue-200 rounded-md">
                          <div className="text-lg font-bold">$61.75/unit</div>
                          <div className="text-xs text-muted-foreground">Savings: $280K</div>
                          <div className="text-xs text-muted-foreground">Acceptance: Medium</div>
                        </div>
                      </div>
                      <div>
                        <h4 className="text-sm font-medium mb-2">Aggressive</h4>
                        <div className="p-3 bg-muted rounded-md">
                          <div className="text-lg font-bold">$60.25/unit</div>
                          <div className="text-xs text-muted-foreground">Savings: $425K</div>
                          <div className="text-xs text-muted-foreground">Acceptance: Low</div>
                        </div>
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
};

export default SupplierRelationship;
