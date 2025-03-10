
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { DocumentsList } from "@/components/documents/DocumentsList";
import { Button } from "@/components/ui/button";
import { PlusCircle } from "lucide-react";

export default function Documents() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-3xl font-bold tracking-tight">Documents</h2>
        <Button className="flex items-center gap-1">
          <PlusCircle className="h-4 w-4" />
          <span>Upload Document</span>
        </Button>
      </div>
      
      <Tabs defaultValue="reports">
        <TabsList>
          <TabsTrigger value="reports">Reports</TabsTrigger>
          <TabsTrigger value="contracts">Contracts</TabsTrigger>
          <TabsTrigger value="guides">Guides</TabsTrigger>
        </TabsList>
        <TabsContent value="reports" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Trading Reports</CardTitle>
              <CardDescription>
                Access your trading reports and analysis documents.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <DocumentsList type="reports" />
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="contracts" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Contracts & Agreements</CardTitle>
              <CardDescription>
                View and manage legal documents and agreements.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <DocumentsList type="contracts" />
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="guides" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>User Guides</CardTitle>
              <CardDescription>
                Helpful guides and documentation for platform usage.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <DocumentsList type="guides" />
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}
