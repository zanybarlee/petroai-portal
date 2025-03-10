
import { LineChart, ResponsiveContainer } from 'recharts';
import { ChartCard } from "@/components/ui/dashboard/ChartCard";

// Generate sample data
const data = Array.from({ length: 20 }, (_, i) => ({
  name: `Day ${i + 1}`,
  value: Math.floor(Math.random() * 100) + 50,
  revenue: Math.floor(Math.random() * 10000) + 5000,
  cost: Math.floor(Math.random() * 5000) + 2000,
}));

export function TradingPerformance() {
  return (
    <ChartCard
      className="lg:col-span-4"
      title="Trading Performance"
      chart={
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={data}>
            {/* Chart implementation */}
          </LineChart>
        </ResponsiveContainer>
      }
    />
  );
}
