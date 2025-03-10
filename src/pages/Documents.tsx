
import { AppLayout } from "@/components/layout/AppLayout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Plus, Search, Clock, FileText, PlusCircle, Filter, SlidersHorizontal } from "lucide-react";

export default function Documents() {
  const documents = [
    {
      id: "DOC-1234",
      title: "Crude Oil Purchase Agreement",
      type: "Contract",
      createdBy: { name: "John Doe", avatar: "" },
      created: "May 15, 2023",
      status: "Active",
    },
    {
      id: "DOC-1233",
      title: "Natural Gas Supply Agreement",
      type: "Contract",
      createdBy: { name: "Sarah Kim", avatar: "" },
      created: "May 14, 2023",
      status: "Draft",
    },
    {
      id: "DOC-1232",
      title: "Q1 2023 Market Analysis",
      type: "Report",
      createdBy: { name: "Robert Chen", avatar: "" },
      created: "May 12, 2023",
      status: "Active",
    },
    {
      id: "DOC-1231",
      title: "Risk Assessment - Gulf Region",
      type: "Analysis",
      createdBy: { name: "Maria Lopez", avatar: "" },
      created: "May 10, 2023",
      status: "Active",
    },
    {
      id: "DOC-1230",
      title: "Pipeline Transport Agreement",
      type: "Contract",
      createdBy: { name: "James Wilson", avatar: "" },
      created: "May 8, 2023",
      status: "Pending Review",
    },
    {
      id: "DOC-1229",
      title: "Hedging Strategy Proposal",
      type: "Proposal",
      createdBy: { name: "Linda Chen", avatar: "" },
      created: "May 5, 2023",
      status: "Active",
    },
  ];

  const templates = [
    {
      id: "TPL-001",
      title: "Standard Purchase Agreement",
      description: "Basic template for commodity purchase contracts.",
      type: "Contract",
    },
    {
      id: "TPL-002",
      title: "Supply Chain Agreement",
      description: "Template for logistics and supply chain contracts.",
      type: "Contract",
    },
    {
      id: "TPL-003",
      title: "Monthly Market Report",
      description: "Template for regular market analysis reports.",
      type: "Report",
    },
    {
      id: "TPL-004",
      title: "Risk Assessment Template",
      description: "Standardized template for risk assessments.",
      type: "Analysis",
    },
  ];

  return (
    <AppLayout title="Documents" subtitle="Manage contracts, reports, and other documents">
      <Tabs defaultValue="all" className="space-y-6">
        <div className="flex flex-col sm:flex-row justify-between sm:items-center gap-4">
          <TabsList>
            <TabsTrigger value="all">All Documents</TabsTrigger>
            <TabsTrigger value="contracts">Contracts</TabsTrigger>
            <TabsTrigger value="reports">Reports</TabsTrigger>
            <TabsTrigger value="templates">Templates</TabsTrigger>
          </TabsList>
          <div className="flex gap-2">
            <Button className="gap-2">
              <Plus className="h-4 w-4" /> New Document
            </Button>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row justify-between sm:items-center gap-4">
          <div className="flex gap-2">
            <Button variant="outline" className="gap-2">
              <Filter className="h-4 w-4" /> Filter
            </Button>
            <Button variant="outline" className="gap-2">
              <SlidersHorizontal className="h-4 w-4" /> Sort
            </Button>
          </div>
          <div className="w-full sm:w-64 md:w-80 relative">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input placeholder="Search documents..." className="pl-8" />
          </div>
        </div>

        <TabsContent value="all" className="m-0">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {documents.map((doc) => (
              <Card key={doc.id} className="hover-scale overflow-hidden">
                <CardHeader className="pb-2">
                  <div className="flex justify-between">
                    <Badge variant="outline">{doc.type}</Badge>
                    <Badge
                      variant={
                        doc.status === "Active" ? "outline" :
                        doc.status === "Draft" ? "secondary" :
                        "default"
                      }
                    >
                      {doc.status}
                    </Badge>
                  </div>
                  <CardTitle className="mt-2">{doc.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Clock className="h-4 w-4" />
                    <span>Created {doc.created}</span>
                  </div>
                </CardContent>
                <CardFooter className="flex justify-between border-t pt-4">
                  <div className="flex items-center gap-2">
                    <Avatar className="h-6 w-6">
                      <AvatarFallback>{doc.createdBy.name.substring(0, 2)}</AvatarFallback>
                    </Avatar>
                    <span className="text-sm">{doc.createdBy.name}</span>
                  </div>
                  <Button variant="ghost" size="sm">View</Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="templates" className="m-0">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {templates.map((template) => (
              <Card key={template.id} className="hover-scale overflow-hidden">
                <CardHeader>
                  <Badge variant="outline">{template.type}</Badge>
                  <CardTitle className="mt-2">{template.title}</CardTitle>
                  <CardDescription>{template.description}</CardDescription>
                </CardHeader>
                <CardFooter className="flex justify-end pt-0">
                  <Button>
                    <PlusCircle className="mr-2 h-4 w-4" />
                    Use Template
                  </Button>
                </CardFooter>
              </Card>
            ))}
            <Card className="border-dashed flex flex-col items-center justify-center p-6 hover:bg-muted/50 transition-colors cursor-pointer hover-scale">
              <div className="rounded-full bg-primary/10 p-3 mb-3">
                <FileText className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-lg font-medium mb-1">Create New Template</h3>
              <p className="text-sm text-muted-foreground text-center mb-4">
                Design your own custom document template
              </p>
              <Button variant="outline" size="sm">
                <Plus className="mr-2 h-4 w-4" />
                Create Template
              </Button>
            </Card>
          </div>
        </TabsContent>
      </Tabs>
    </AppLayout>
  );
}
