
import { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import CargoRosterForm from "@/components/cargo-roster/CargoRosterForm";
import CargoTransactionsList from "@/components/cargo-roster/CargoTransactionsList";
import CargoRosterSearch from "@/components/cargo-roster/CargoRosterSearch";
import OperationalCargoRosterForm from "@/components/cargo-roster/OperationalCargoRosterForm";
import OperationalCargoTransactionsList from "@/components/cargo-roster/OperationalCargoTransactionsList";
import OperationalCargoRosterSearch from "@/components/cargo-roster/OperationalCargoRosterSearch";

export default function CargoRoster() {
  const [activeTab, setActiveTab] = useState("market");
  const [activeMarketTab, setActiveMarketTab] = useState("create");
  const [activeOperationalTab, setActiveOperationalTab] = useState("create");
  
  return (
    <div className="space-y-6">
      <Tabs defaultValue="market" onValueChange={setActiveTab} value={activeTab} className="w-full">
        <TabsList className="grid w-full grid-cols-3 mb-8">
          <TabsTrigger value="market">Market Cargo Roster</TabsTrigger>
          <TabsTrigger value="operational">Operational Cargo Roster</TabsTrigger>
          <TabsTrigger value="finance" disabled>Finance Cargo Roster</TabsTrigger>
        </TabsList>
        
        <TabsContent value="market" className="space-y-6">
          <Tabs defaultValue="create" onValueChange={setActiveMarketTab} value={activeMarketTab} className="w-full">
            <TabsList className="grid w-full grid-cols-3 mb-6">
              <TabsTrigger value="create">Create Transaction</TabsTrigger>
              <TabsTrigger value="transactions">View Transactions</TabsTrigger>
              <TabsTrigger value="search">Search Transactions</TabsTrigger>
            </TabsList>
            
            <TabsContent value="create" className="space-y-4">
              <CargoRosterForm />
            </TabsContent>
            
            <TabsContent value="transactions" className="space-y-4">
              <CargoTransactionsList />
            </TabsContent>
            
            <TabsContent value="search" className="space-y-4">
              <CargoRosterSearch />
            </TabsContent>
          </Tabs>
        </TabsContent>
        
        <TabsContent value="operational" className="space-y-6">
          <Tabs defaultValue="create" onValueChange={setActiveOperationalTab} value={activeOperationalTab} className="w-full">
            <TabsList className="grid w-full grid-cols-3 mb-6">
              <TabsTrigger value="create">Create Transaction</TabsTrigger>
              <TabsTrigger value="transactions">View Transactions</TabsTrigger>
              <TabsTrigger value="search">Search Transactions</TabsTrigger>
            </TabsList>
            
            <TabsContent value="create" className="space-y-4">
              <OperationalCargoRosterForm />
            </TabsContent>
            
            <TabsContent value="transactions" className="space-y-4">
              <OperationalCargoTransactionsList />
            </TabsContent>
            
            <TabsContent value="search" className="space-y-4">
              <OperationalCargoRosterSearch />
            </TabsContent>
          </Tabs>
        </TabsContent>
        
        <TabsContent value="finance" className="space-y-4">
          <div className="p-8 text-center border rounded-md bg-muted/20">
            <p className="text-muted-foreground">Finance Cargo Roster functionality will be available soon.</p>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
}
