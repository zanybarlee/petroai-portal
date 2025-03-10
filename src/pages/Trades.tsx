
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { TradesList } from "@/components/trades/TradesList";
import { TradeGraph } from "@/components/trades/TradeGraph";
import { PlusCircle } from "lucide-react";

export default function Trades() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-3xl font-bold tracking-tight">Trades</h2>
        <Button className="flex items-center gap-1">
          <PlusCircle className="h-4 w-4" />
          <span>New Trade</span>
        </Button>
      </div>
      
      <Tabs defaultValue="active">
        <TabsList>
          <TabsTrigger value="active">Active Trades</TabsTrigger>
          <TabsTrigger value="history">Trade History</TabsTrigger>
          <TabsTrigger value="pending">Pending</TabsTrigger>
        </TabsList>
        <TabsContent value="active" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Active Trades</CardTitle>
              <CardDescription>
                View and manage your current active trades.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <TradeGraph />
              <TradesList />
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="history" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Trade History</CardTitle>
              <CardDescription>
                View your past and completed trades.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <TradesList type="history" />
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="pending" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Pending Trades</CardTitle>
              <CardDescription>
                View trades awaiting execution or approval.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <TradesList type="pending" />
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}
