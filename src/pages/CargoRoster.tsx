
import { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import CargoRosterForm from "@/components/cargo-roster/CargoRosterForm";
import CargoTransactionsList from "@/components/cargo-roster/CargoTransactionsList";
import CargoRosterSearch from "@/components/cargo-roster/CargoRosterSearch";

export default function CargoRoster() {
  const [activeTab, setActiveTab] = useState("create");
  
  return (
    <div className="space-y-6">
      <Tabs defaultValue="create" onValueChange={setActiveTab} value={activeTab} className="w-full">
        <TabsList className="grid w-full grid-cols-3 mb-8">
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
    </div>
  );
}
