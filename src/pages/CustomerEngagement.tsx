
import React from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { MessageCircle, Users, Bell, LineChart, Brain, Bot, Database, Zap, RefreshCw } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";

export default function CustomerEngagement() {
  return (
    <div className="space-y-6">
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Active Conversations</CardTitle>
            <MessageCircle className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">124</div>
            <p className="text-xs text-muted-foreground">+18% from last month</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">User Satisfaction</CardTitle>
            <Users className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">92%</div>
            <p className="text-xs text-muted-foreground">+5% from last quarter</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Response Time</CardTitle>
            <Bell className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">45s</div>
            <p className="text-xs text-muted-foreground">-15s from last week</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">AI Resolution Rate</CardTitle>
            <Brain className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">78%</div>
            <p className="text-xs text-muted-foreground">+8% from last month</p>
          </CardContent>
        </Card>
      </div>

      <Tabs defaultValue="chatbot" className="space-y-4">
        <TabsList>
          <TabsTrigger value="chatbot">AI Chatbot</TabsTrigger>
          <TabsTrigger value="analytics">Engagement Analytics</TabsTrigger>
          <TabsTrigger value="knowledge">Knowledge Base</TabsTrigger>
          <TabsTrigger value="notifications">Notifications</TabsTrigger>
        </TabsList>
        
        {/* AI Chatbot Tab */}
        <TabsContent value="chatbot" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>AI Chatbot Configuration</CardTitle>
              <CardDescription>
                Configure your specialized AI chatbots for petroleum trading and support
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <Card className="border bg-muted/20">
                  <CardHeader className="pb-2">
                    <CardTitle className="text-base">Active Chatbots</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <Avatar className="h-8 w-8">
                            <AvatarFallback className="bg-primary/20">PT</AvatarFallback>
                          </Avatar>
                          <div>
                            <p className="text-sm font-medium">Petroleum Trading Specialist</p>
                            <p className="text-xs text-muted-foreground">For trading inquiries</p>
                          </div>
                        </div>
                        <Badge>Active</Badge>
                      </div>
                      
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <Avatar className="h-8 w-8">
                            <AvatarFallback className="bg-green-100 text-green-800">LI</AvatarFallback>
                          </Avatar>
                          <div>
                            <p className="text-sm font-medium">Licensing Advisor</p>
                            <p className="text-xs text-muted-foreground">For licensing procedures</p>
                          </div>
                        </div>
                        <Badge>Active</Badge>
                      </div>
                      
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <Avatar className="h-8 w-8">
                            <AvatarFallback className="bg-blue-100 text-blue-800">OT</AvatarFallback>
                          </Avatar>
                          <div>
                            <p className="text-sm font-medium">Order Tracking Assistant</p>
                            <p className="text-xs text-muted-foreground">For order status inquiries</p>
                          </div>
                        </div>
                        <Badge variant="outline">Training</Badge>
                      </div>
                    </div>
                  </CardContent>
                </Card>
                
                <Card className="border">
                  <CardHeader className="pb-2">
                    <CardTitle className="text-base">Chatbot Training</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="space-y-2">
                      <label className="text-sm font-medium">Model Selection</label>
                      <select className="w-full p-2 rounded-md border bg-background">
                        <option>Industry-specific GPT model</option>
                        <option>Generic customer service model</option>
                        <option>Technical support model</option>
                      </select>
                    </div>
                    
                    <div className="space-y-2">
                      <label className="text-sm font-medium">Knowledge Source</label>
                      <div className="flex flex-col gap-2">
                        <div className="flex items-center gap-2">
                          <input type="checkbox" id="kb" className="rounded" checked />
                          <label htmlFor="kb" className="text-sm">Company Knowledge Base</label>
                        </div>
                        <div className="flex items-center gap-2">
                          <input type="checkbox" id="crm" className="rounded" checked />
                          <label htmlFor="crm" className="text-sm">CRM System</label>
                        </div>
                        <div className="flex items-center gap-2">
                          <input type="checkbox" id="docs" className="rounded" checked />
                          <label htmlFor="docs" className="text-sm">Industry Documentation</label>
                        </div>
                      </div>
                    </div>
                    
                    <Button className="w-full">Update Training</Button>
                  </CardContent>
                </Card>
              </div>
              
              <Card className="border">
                <CardHeader className="pb-2">
                  <CardTitle className="text-base">Chatbot Simulator</CardTitle>
                  <CardDescription>Test your chatbot responses in real-time</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="border rounded-lg p-4 h-60 mb-4 overflow-y-auto bg-muted/20 space-y-4">
                    <div className="flex gap-2">
                      <Avatar className="h-8 w-8">
                        <AvatarFallback>U</AvatarFallback>
                      </Avatar>
                      <div className="bg-secondary p-2 rounded-lg max-w-[80%]">
                        <p className="text-sm">What's the current price for marine fuel oil?</p>
                      </div>
                    </div>
                    
                    <div className="flex gap-2 justify-end">
                      <div className="bg-primary text-primary-foreground p-2 rounded-lg max-w-[80%]">
                        <p className="text-sm">The current price for marine fuel oil is $625 per metric ton. This price was last updated 2 hours ago. Would you like to see recent price trends or place an order?</p>
                      </div>
                      <Avatar className="h-8 w-8">
                        <AvatarFallback className="bg-primary/20">AI</AvatarFallback>
                      </Avatar>
                    </div>
                  </div>
                  
                  <div className="flex gap-2">
                    <Textarea placeholder="Type a test query..." className="min-h-[40px]" />
                    <Button size="sm" className="h-full">Send</Button>
                  </div>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="text-base">CRM Integration</CardTitle>
                  <CardDescription>Link chatbot interactions with your CRM system</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <Bot className="h-5 w-5 text-blue-600" />
                        <div>
                          <p className="text-sm font-medium">Salesforce CRM</p>
                          <p className="text-xs text-muted-foreground">Connected - Last sync: 5 minutes ago</p>
                        </div>
                      </div>
                      <Button variant="outline" size="sm">Configure</Button>
                    </div>
                    
                    <div className="space-y-2">
                      <div className="flex justify-between items-center">
                        <p className="text-sm font-medium">Automatic ticket creation</p>
                        <div className="flex items-center h-6">
                          <input type="checkbox" id="ticket" className="rounded" checked />
                        </div>
                      </div>
                      
                      <div className="flex justify-between items-center">
                        <p className="text-sm font-medium">Human escalation threshold</p>
                        <select className="p-1 rounded-md border bg-background text-sm w-24">
                          <option>Low</option>
                          <option selected>Medium</option>
                          <option>High</option>
                        </select>
                      </div>
                      
                      <div className="flex justify-between items-center">
                        <p className="text-sm font-medium">Conversation history retention</p>
                        <select className="p-1 rounded-md border bg-background text-sm w-24">
                          <option>30 days</option>
                          <option selected>90 days</option>
                          <option>1 year</option>
                        </select>
                      </div>
                    </div>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button className="w-full">Save Integration Settings</Button>
                </CardFooter>
              </Card>
            </CardContent>
          </Card>
        </TabsContent>
        
        {/* Engagement Analytics Tab */}
        <TabsContent value="analytics" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Engagement Analytics</CardTitle>
              <CardDescription>
                Track customer engagement metrics and chatbot performance
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <Card className="border">
                  <CardHeader className="pb-2">
                    <CardTitle className="text-base">Conversation Metrics</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="h-[250px] rounded-lg border bg-muted/20 flex items-center justify-center">
                      <LineChart className="h-16 w-16 text-muted-foreground/50" />
                    </div>
                    <div className="grid grid-cols-3 gap-4 mt-4">
                      <div>
                        <p className="text-sm text-muted-foreground">Avg. Duration</p>
                        <p className="text-lg font-medium">4:32</p>
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground">Messages/Conv.</p>
                        <p className="text-lg font-medium">8.4</p>
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground">Resolution Rate</p>
                        <p className="text-lg font-medium">78%</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
                
                <Card className="border">
                  <CardHeader className="pb-2">
                    <CardTitle className="text-base">Topic Analysis</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="h-[250px] rounded-lg border bg-muted/20 flex items-center justify-center">
                      <Database className="h-16 w-16 text-muted-foreground/50" />
                    </div>
                    <div className="space-y-2 mt-4">
                      <div className="flex justify-between items-center">
                        <p className="text-sm">Order Status Inquiries</p>
                        <Badge>32%</Badge>
                      </div>
                      <div className="flex justify-between items-center">
                        <p className="text-sm">Pricing Questions</p>
                        <Badge>28%</Badge>
                      </div>
                      <div className="flex justify-between items-center">
                        <p className="text-sm">Licensing Procedures</p>
                        <Badge>15%</Badge>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
              
              <Card className="border">
                <CardHeader className="pb-2">
                  <CardTitle className="text-base">Customer Satisfaction</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-3 gap-6">
                    <div className="space-y-4">
                      <div className="h-[180px] rounded-lg border bg-muted/20 flex items-center justify-center">
                        <Brain className="h-16 w-16 text-muted-foreground/50" />
                      </div>
                      <div>
                        <p className="text-sm font-medium text-center">AI Chatbot</p>
                        <p className="text-2xl font-bold text-center">86%</p>
                        <p className="text-xs text-muted-foreground text-center">+4% from last month</p>
                      </div>
                    </div>
                    
                    <div className="space-y-4">
                      <div className="h-[180px] rounded-lg border bg-muted/20 flex items-center justify-center">
                        <MessageCircle className="h-16 w-16 text-muted-foreground/50" />
                      </div>
                      <div>
                        <p className="text-sm font-medium text-center">Human Support</p>
                        <p className="text-2xl font-bold text-center">92%</p>
                        <p className="text-xs text-muted-foreground text-center">+1% from last month</p>
                      </div>
                    </div>
                    
                    <div className="space-y-4">
                      <div className="h-[180px] rounded-lg border bg-muted/20 flex items-center justify-center">
                        <Zap className="h-16 w-16 text-muted-foreground/50" />
                      </div>
                      <div>
                        <p className="text-sm font-medium text-center">Overall Experience</p>
                        <p className="text-2xl font-bold text-center">89%</p>
                        <p className="text-xs text-muted-foreground text-center">+3% from last month</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              <Card className="border">
                <CardHeader className="pb-2">
                  <CardTitle className="text-base">Custom Reports</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-sm font-medium">Chatbot Performance Report</p>
                        <p className="text-xs text-muted-foreground">Weekly analysis of chatbot metrics</p>
                      </div>
                      <Button variant="outline" size="sm">Generate</Button>
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-sm font-medium">Customer Engagement Trends</p>
                        <p className="text-xs text-muted-foreground">Monthly trends in customer engagement</p>
                      </div>
                      <Button variant="outline" size="sm">Generate</Button>
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-sm font-medium">Topic Analysis Report</p>
                        <p className="text-xs text-muted-foreground">Detailed breakdown of conversation topics</p>
                      </div>
                      <Button variant="outline" size="sm">Generate</Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </CardContent>
          </Card>
        </TabsContent>
        
        {/* Knowledge Base Tab */}
        <TabsContent value="knowledge" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Knowledge Base Management</CardTitle>
              <CardDescription>
                Manage and update the AI knowledge base for customer support
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <Card className="border">
                  <CardHeader className="pb-2">
                    <CardTitle className="text-base">Knowledge Categories</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <RefreshCw className="h-5 w-5 text-blue-600" />
                          <p className="text-sm font-medium">Trading Procedures</p>
                        </div>
                        <Badge variant="outline">42 articles</Badge>
                      </div>
                      
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <FileText className="h-5 w-5 text-green-600" />
                          <p className="text-sm font-medium">Licensing Requirements</p>
                        </div>
                        <Badge variant="outline">28 articles</Badge>
                      </div>
                      
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <Truck className="h-5 w-5 text-orange-600" />
                          <p className="text-sm font-medium">Order Tracking</p>
                        </div>
                        <Badge variant="outline">36 articles</Badge>
                      </div>
                      
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <Ship className="h-5 w-5 text-purple-600" />
                          <p className="text-sm font-medium">Bunkering Processes</p>
                        </div>
                        <Badge variant="outline">19 articles</Badge>
                      </div>
                      
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <Settings className="h-5 w-5 text-gray-600" />
                          <p className="text-sm font-medium">Technical Support</p>
                        </div>
                        <Badge variant="outline">31 articles</Badge>
                      </div>
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Button variant="outline" className="w-full">Add New Category</Button>
                  </CardFooter>
                </Card>
                
                <Card className="border">
                  <CardHeader className="pb-2">
                    <CardTitle className="text-base">Knowledge Source</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <Database className="h-5 w-5 text-blue-600" />
                          <div>
                            <p className="text-sm font-medium">Company Database</p>
                            <p className="text-xs text-muted-foreground">Synchronized 30 minutes ago</p>
                          </div>
                        </div>
                        <Button size="sm" variant="outline">Sync</Button>
                      </div>
                      
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <Database className="h-5 w-5 text-green-600" />
                          <div>
                            <p className="text-sm font-medium">Document Repository</p>
                            <p className="text-xs text-muted-foreground">Synchronized 2 hours ago</p>
                          </div>
                        </div>
                        <Button size="sm" variant="outline">Sync</Button>
                      </div>
                      
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <Database className="h-5 w-5 text-orange-600" />
                          <div>
                            <p className="text-sm font-medium">Training Materials</p>
                            <p className="text-xs text-muted-foreground">Synchronized 1 day ago</p>
                          </div>
                        </div>
                        <Button size="sm" variant="outline">Sync</Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
              
              <Card className="border">
                <CardHeader className="pb-2">
                  <CardTitle className="text-base">Content Management</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex space-x-2">
                      <Input placeholder="Search knowledge base..." className="flex-1" />
                      <Button variant="outline">Search</Button>
                    </div>
                    
                    <div className="border rounded-lg overflow-hidden">
                      <table className="min-w-full">
                        <thead className="bg-muted/40">
                          <tr>
                            <th className="text-left p-2 text-sm font-medium">Article Title</th>
                            <th className="text-left p-2 text-sm font-medium">Category</th>
                            <th className="text-left p-2 text-sm font-medium">Last Updated</th>
                            <th className="text-left p-2 text-sm font-medium">Status</th>
                            <th className="p-2"></th>
                          </tr>
                        </thead>
                        <tbody className="divide-y">
                          <tr>
                            <td className="p-2 text-sm">Petroleum Trading Guidelines</td>
                            <td className="p-2 text-sm">Trading Procedures</td>
                            <td className="p-2 text-sm">2 days ago</td>
                            <td className="p-2"><Badge className="bg-green-100 text-green-800 hover:bg-green-100">Published</Badge></td>
                            <td className="p-2"><Button size="sm" variant="ghost">Edit</Button></td>
                          </tr>
                          <tr>
                            <td className="p-2 text-sm">International Licensing Requirements</td>
                            <td className="p-2 text-sm">Licensing Requirements</td>
                            <td className="p-2 text-sm">1 week ago</td>
                            <td className="p-2"><Badge className="bg-green-100 text-green-800 hover:bg-green-100">Published</Badge></td>
                            <td className="p-2"><Button size="sm" variant="ghost">Edit</Button></td>
                          </tr>
                          <tr>
                            <td className="p-2 text-sm">Order Tracking System Guide</td>
                            <td className="p-2 text-sm">Order Tracking</td>
                            <td className="p-2 text-sm">3 days ago</td>
                            <td className="p-2"><Badge className="bg-yellow-100 text-yellow-800 hover:bg-yellow-100">Draft</Badge></td>
                            <td className="p-2"><Button size="sm" variant="ghost">Edit</Button></td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </CardContent>
                <CardFooter>
                  <div className="flex space-x-2 w-full">
                    <Button className="flex-1">Create New Article</Button>
                    <Button variant="outline" className="flex-1">Import Articles</Button>
                  </div>
                </CardFooter>
              </Card>
              
              <Card className="border">
                <CardHeader className="pb-2">
                  <CardTitle className="text-base">Knowledge Base Performance</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-3 gap-4">
                    <div className="border rounded-lg p-4 text-center">
                      <p className="text-sm text-muted-foreground">Search Success Rate</p>
                      <p className="text-2xl font-bold">83%</p>
                      <p className="text-xs text-muted-foreground">+5% from last month</p>
                    </div>
                    
                    <div className="border rounded-lg p-4 text-center">
                      <p className="text-sm text-muted-foreground">Knowledge Coverage</p>
                      <p className="text-2xl font-bold">79%</p>
                      <p className="text-xs text-muted-foreground">+12% from last quarter</p>
                    </div>
                    
                    <div className="border rounded-lg p-4 text-center">
                      <p className="text-sm text-muted-foreground">Content Freshness</p>
                      <p className="text-2xl font-bold">92%</p>
                      <p className="text-xs text-muted-foreground">+3% from last week</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </CardContent>
          </Card>
        </TabsContent>
        
        {/* Notifications Tab */}
        <TabsContent value="notifications" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Notification Management</CardTitle>
              <CardDescription>
                Configure automated notifications and alerts
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <Card className="border">
                  <CardHeader className="pb-2">
                    <CardTitle className="text-base">Notification Templates</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="p-3 border rounded-lg">
                        <div className="flex justify-between items-center mb-2">
                          <p className="font-medium">Order Confirmation</p>
                          <Badge variant="outline">Email & SMS</Badge>
                        </div>
                        <p className="text-sm text-muted-foreground">Sent when a new order is placed</p>
                        <div className="flex justify-end mt-2">
                          <Button size="sm" variant="ghost">Edit</Button>
                        </div>
                      </div>
                      
                      <div className="p-3 border rounded-lg">
                        <div className="flex justify-between items-center mb-2">
                          <p className="font-medium">License Renewal</p>
                          <Badge variant="outline">Email</Badge>
                        </div>
                        <p className="text-sm text-muted-foreground">Sent 30 days before license expiration</p>
                        <div className="flex justify-end mt-2">
                          <Button size="sm" variant="ghost">Edit</Button>
                        </div>
                      </div>
                      
                      <div className="p-3 border rounded-lg">
                        <div className="flex justify-between items-center mb-2">
                          <p className="font-medium">Delivery Status</p>
                          <Badge variant="outline">Email & Push</Badge>
                        </div>
                        <p className="text-sm text-muted-foreground">Sent when delivery status changes</p>
                        <div className="flex justify-end mt-2">
                          <Button size="sm" variant="ghost">Edit</Button>
                        </div>
                      </div>
                      
                      <div className="p-3 border rounded-lg">
                        <div className="flex justify-between items-center mb-2">
                          <p className="font-medium">Price Alert</p>
                          <Badge variant="outline">Email & SMS</Badge>
                        </div>
                        <p className="text-sm text-muted-foreground">Sent when price changes by more than 5%</p>
                        <div className="flex justify-end mt-2">
                          <Button size="sm" variant="ghost">Edit</Button>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Button className="w-full">Create New Template</Button>
                  </CardFooter>
                </Card>
                
                <Card className="border">
                  <CardHeader className="pb-2">
                    <CardTitle className="text-base">Personalization Rules</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="flex justify-between items-center">
                        <div>
                          <p className="text-sm font-medium">User Segment-Based Content</p>
                          <p className="text-xs text-muted-foreground">Customize content based on user segments</p>
                        </div>
                        <div className="flex items-center h-5">
                          <input type="checkbox" id="segment" className="rounded" checked />
                        </div>
                      </div>
                      
                      <div className="flex justify-between items-center">
                        <div>
                          <p className="text-sm font-medium">Behavioral Triggers</p>
                          <p className="text-xs text-muted-foreground">Notifications based on user behavior</p>
                        </div>
                        <div className="flex items-center h-5">
                          <input type="checkbox" id="behavior" className="rounded" checked />
                        </div>
                      </div>
                      
                      <div className="flex justify-between items-center">
                        <div>
                          <p className="text-sm font-medium">Location-Based Alerts</p>
                          <p className="text-xs text-muted-foreground">Customize alerts based on location</p>
                        </div>
                        <div className="flex items-center h-5">
                          <input type="checkbox" id="location" className="rounded" />
                        </div>
                      </div>
                      
                      <div className="flex justify-between items-center">
                        <div>
                          <p className="text-sm font-medium">Time Zone Optimization</p>
                          <p className="text-xs text-muted-foreground">Send at optimal times per timezone</p>
                        </div>
                        <div className="flex items-center h-5">
                          <input type="checkbox" id="timezone" className="rounded" checked />
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
              
              <Card className="border">
                <CardHeader className="pb-2">
                  <CardTitle className="text-base">Notification Analytics</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="h-[200px] rounded-lg border bg-muted/20 flex items-center justify-center mb-4">
                    <LineChart className="h-16 w-16 text-muted-foreground/50" />
                  </div>
                  
                  <div className="grid grid-cols-4 gap-4">
                    <div className="text-center">
                      <p className="text-sm text-muted-foreground">Send Rate</p>
                      <p className="text-xl font-bold">99.8%</p>
                    </div>
                    
                    <div className="text-center">
                      <p className="text-sm text-muted-foreground">Delivery Rate</p>
                      <p className="text-xl font-bold">97.5%</p>
                    </div>
                    
                    <div className="text-center">
                      <p className="text-sm text-muted-foreground">Open Rate</p>
                      <p className="text-xl font-bold">42.1%</p>
                    </div>
                    
                    <div className="text-center">
                      <p className="text-sm text-muted-foreground">Click Rate</p>
                      <p className="text-xl font-bold">18.7%</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              <Card className="border">
                <CardHeader className="pb-2">
                  <CardTitle className="text-base">Notification Scheduler</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="p-3 border rounded-lg">
                      <div className="flex justify-between items-center mb-2">
                        <p className="font-medium">Weekly Price Update</p>
                        <Badge className="bg-blue-100 text-blue-800 hover:bg-blue-100">Active</Badge>
                      </div>
                      <p className="text-sm text-muted-foreground">Scheduled for every Monday at 9:00 AM</p>
                      <div className="flex justify-end mt-2 gap-2">
                        <Button size="sm" variant="ghost">Edit</Button>
                        <Button size="sm" variant="ghost">Pause</Button>
                      </div>
                    </div>
                    
                    <div className="p-3 border rounded-lg">
                      <div className="flex justify-between items-center mb-2">
                        <p className="font-medium">Monthly Performance Report</p>
                        <Badge className="bg-blue-100 text-blue-800 hover:bg-blue-100">Active</Badge>
                      </div>
                      <p className="text-sm text-muted-foreground">Scheduled for 1st of each month</p>
                      <div className="flex justify-end mt-2 gap-2">
                        <Button size="sm" variant="ghost">Edit</Button>
                        <Button size="sm" variant="ghost">Pause</Button>
                      </div>
                    </div>
                    
                    <div className="p-3 border rounded-lg">
                      <div className="flex justify-between items-center mb-2">
                        <p className="font-medium">Quarterly Compliance Reminder</p>
                        <Badge className="bg-gray-100 text-gray-800 hover:bg-gray-100">Paused</Badge>
                      </div>
                      <p className="text-sm text-muted-foreground">Scheduled for beginning of each quarter</p>
                      <div className="flex justify-end mt-2 gap-2">
                        <Button size="sm" variant="ghost">Edit</Button>
                        <Button size="sm" variant="ghost">Resume</Button>
                      </div>
                    </div>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button className="w-full">Create New Schedule</Button>
                </CardFooter>
              </Card>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}
