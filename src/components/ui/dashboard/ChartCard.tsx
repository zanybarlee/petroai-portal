
import { useState } from "react";
import { DashboardCard, DashboardCardProps } from "./DashboardCard";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { cn } from "@/lib/utils";

export interface ChartCardProps extends DashboardCardProps {
  title: React.ReactNode;
  chart: React.ReactNode;
  timeRanges?: string[];
  defaultTimeRange?: string;
  onTimeRangeChange?: (value: string) => void;
  isLoading?: boolean;
}

export function ChartCard({
  title,
  chart,
  timeRanges = ["24h", "7d", "30d", "90d", "1y", "All"],
  defaultTimeRange = "7d",
  onTimeRangeChange,
  isLoading,
  className,
  ...props
}: ChartCardProps) {
  const [timeRange, setTimeRange] = useState(defaultTimeRange);

  const handleTimeRangeChange = (value: string) => {
    setTimeRange(value);
    onTimeRangeChange?.(value);
  };

  return (
    <DashboardCard
      className={className}
      title={
        <div className="flex items-center justify-between">
          <span>{title}</span>
          {timeRanges && timeRanges.length > 0 && (
            <Select defaultValue={timeRange} onValueChange={handleTimeRangeChange}>
              <SelectTrigger className="w-[80px] h-8">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                {timeRanges.map((range) => (
                  <SelectItem key={range} value={range}>
                    {range}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          )}
        </div>
      }
      isGlass
      {...props}
    >
      <div className={cn("h-[240px] w-full", isLoading && "animate-pulse bg-muted/50 rounded-md")}>
        {!isLoading && chart}
      </div>
    </DashboardCard>
  );
}
