
import { BarChart2, Clock, DollarSign, TrendingUp } from "lucide-react";
import { StatCard } from "@/components/ui/dashboard/StatCard";

export function StatCards() {
  return (
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
      <StatCard
        title="Today's Trading Volume"
        value="75,431"
        label="Trading Volume"
        trend={12.5}
        trendLabel="from yesterday"
        icon={<BarChart2 className="h-5 w-5" />}
        metric="bbl"
        isGlass
      />
      <StatCard
        title="Active Trades"
        value="143"
        label="Active Trades"
        trend={-4.3}
        trendLabel="from last week"
        icon={<Clock className="h-5 w-5" />}
        isGlass
      />
      <StatCard
        title="Revenue"
        value="$1.2M"
        label="Monthly Revenue"
        trend={8.1}
        trendLabel="from last month"
        icon={<DollarSign className="h-5 w-5" />}
        isGlass
      />
      <StatCard
        title="Market Opportunities"
        value="24"
        label="AI-identified Opportunities"
        trend={15}
        trendLabel="from last week"
        icon={<TrendingUp className="h-5 w-5" />}
        isGlass
      />
    </div>
  );
}
