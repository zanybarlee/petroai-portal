
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ErrorBoundary } from "./components/ErrorBoundary";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import Dashboard from "./pages/Dashboard";
import Trades from "./pages/Trades";
import Documents from "./pages/Documents";
import Analytics from "./pages/Analytics";
import KnowledgeBase from "./pages/KnowledgeBase";
import Users from "./pages/Users";
import Settings from "./pages/Settings";
import Bunkering from "./pages/Bunkering";
import Fleet from "./pages/Fleet";
import { AppLayout } from "./components/layout/AppLayout";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <ErrorBoundary>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route 
              path="/dashboard" 
              element={
                <AppLayout title="Dashboard" subtitle="Welcome back, your dashboard overview">
                  <Dashboard />
                </AppLayout>
              } 
            />
            <Route 
              path="/trades" 
              element={
                <AppLayout title="Trades" subtitle="Manage and track your trading activity">
                  <Trades />
                </AppLayout>
              } 
            />
            <Route 
              path="/documents" 
              element={
                <AppLayout title="Documents" subtitle="Access important documents and reports">
                  <Documents />
                </AppLayout>
              } 
            />
            <Route 
              path="/analytics" 
              element={
                <AppLayout title="Analytics" subtitle="Advanced analytics and performance metrics">
                  <Analytics />
                </AppLayout>
              } 
            />
            <Route 
              path="/knowledge-base" 
              element={
                <AppLayout title="Knowledge Base" subtitle="Guides, tutorials and resources">
                  <KnowledgeBase />
                </AppLayout>
              } 
            />
            <Route 
              path="/users" 
              element={
                <AppLayout title="Users" subtitle="Manage system users and permissions">
                  <Users />
                </AppLayout>
              } 
            />
            <Route 
              path="/settings" 
              element={
                <AppLayout title="Settings" subtitle="Configure your account and preferences">
                  <Settings />
                </AppLayout>
              } 
            />
            <Route 
              path="/bunkering" 
              element={
                <AppLayout title="Bunkering AI Automation" subtitle="Intelligent optimization of ship-to-ship refueling operations">
                  <Bunkering />
                </AppLayout>
              } 
            />
            <Route 
              path="/fleet" 
              element={
                <AppLayout title="Fleet & Logistics Optimization" subtitle="AI-driven fleet management and logistics coordination">
                  <Fleet />
                </AppLayout>
              } 
            />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </ErrorBoundary>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
