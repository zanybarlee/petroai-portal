
import { StatCards } from "@/components/dashboard/StatCards";
import { TradingPerformance } from "@/components/dashboard/TradingPerformance";
import { RecentActivity } from "@/components/dashboard/RecentActivity";
import { RecentTrades } from "@/components/dashboard/RecentTrades";
import { MarketAlerts } from "@/components/dashboard/MarketAlerts";
import { AIAssistant } from "@/components/dashboard/AIAssistant";
import { Ship, Truck, MessageSquare, Handshake, Package } from "lucide-react";
import { DashboardCard } from "@/components/ui/dashboard/DashboardCard";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

export default function Dashboard() {
  const moduleCards = [
    {
      title: "Bunkering AI",
      description: "Ship-to-ship refueling automation",
      icon: <Ship className="h-5 w-5" />,
      metric: "85%",
      metricLabel: "Optimization rate",
      link: "/bunkering",
      decorationColor: "#0ea5e9"
    },
    {
      title: "Fleet & Logistics",
      description: "Fleet management and coordination",
      icon: <Truck className="h-5 w-5" />,
      metric: "143",
      metricLabel: "Active vehicles",
      link: "/fleet",
      decorationColor: "#8b5cf6"
    },
    {
      title: "Cargo Roster",
      description: "Cargo transaction management",
      icon: <Package className="h-5 w-5" />,
      metric: "56",
      metricLabel: "Active transactions",
      link: "/cargo-roster",
      decorationColor: "#f59e0b"
    },
    {
      title: "Customer Engagement",
      description: "AI-powered customer support",
      icon: <MessageSquare className="h-5 w-5" />,
      metric: "98%",
      metricLabel: "Response rate",
      link: "/customer-engagement",
      decorationColor: "#f43f5e"
    },
    {
      title: "Supplier Relationship",
      description: "Contract and relationship management",
      icon: <Handshake className="h-5 w-5" />,
      metric: "24",
      metricLabel: "Active suppliers",
      link: "/supplier-relationship",
      decorationColor: "#10b981"
    }
  ];

  return (
    <div className="grid gap-6">
      <StatCards />

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-5">
        {moduleCards.map((card, index) => (
          <DashboardCard
            key={index}
            title={
              <div className="flex items-center gap-2">
                <div className="p-2 rounded-full bg-primary/10 text-primary">
                  {card.icon}
                </div>
                <span>{card.title}</span>
              </div>
            }
            description={card.description}
            decorationColor={card.decorationColor}
            isGlass
          >
            <div className="mt-2 mb-4">
              <div className="text-2xl font-bold">{card.metric}</div>
              <p className="text-sm text-muted-foreground">{card.metricLabel}</p>
            </div>
            <Button asChild>
              <Link to={card.link}>View Details</Link>
            </Button>
          </DashboardCard>
        ))}
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-7">
        <TradingPerformance />
        <RecentActivity />
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-7">
        <RecentTrades />
        <div className="space-y-6 lg:col-span-3">
          <MarketAlerts />
          <AIAssistant />
        </div>
      </div>
    </div>
  );
}
