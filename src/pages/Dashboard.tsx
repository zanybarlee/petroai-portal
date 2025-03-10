
import { StatCards } from "@/components/dashboard/StatCards";
import { TradingPerformance } from "@/components/dashboard/TradingPerformance";
import { RecentActivity } from "@/components/dashboard/RecentActivity";
import { RecentTrades } from "@/components/dashboard/RecentTrades";
import { MarketAlerts } from "@/components/dashboard/MarketAlerts";
import { AIAssistant } from "@/components/dashboard/AIAssistant";

export default function Dashboard() {
  return (
    <div className="grid gap-6">
      <StatCards />

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
