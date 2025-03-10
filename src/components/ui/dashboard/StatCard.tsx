
import { cn } from "@/lib/utils";
import { DashboardCard, DashboardCardProps } from "./DashboardCard";
import { cva, type VariantProps } from "class-variance-authority";
import { ArrowDownIcon, ArrowUpIcon } from "lucide-react";

const badgeVariants = cva(
  "inline-flex items-center rounded-md px-2 py-1 text-xs font-medium ring-1 ring-inset",
  {
    variants: {
      variant: {
        default: "bg-gray-50 text-gray-700 ring-gray-600/10",
        success: "bg-green-50 text-green-700 ring-green-600/10",
        warning: "bg-yellow-50 text-yellow-700 ring-yellow-600/10",
        danger: "bg-red-50 text-red-700 ring-red-600/10",
        info: "bg-blue-50 text-blue-700 ring-blue-600/10",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
);

export interface StatCardProps extends DashboardCardProps, VariantProps<typeof badgeVariants> {
  value: string | number;
  label: string;
  trend?: number;
  trendLabel?: string;
  icon?: React.ReactNode;
  metric?: string;
  isLoading?: boolean;
}

export function StatCard({ 
  value, 
  label, 
  trend, 
  trendLabel, 
  icon, 
  metric,
  variant,
  isLoading, 
  className,
  ...props 
}: StatCardProps) {
  const formattedTrend = trend ? Math.abs(trend) : undefined;
  const isTrendPositive = trend ? trend > 0 : undefined;
  const trendVariant = isTrendPositive ? "success" : "danger";
  
  return (
    <DashboardCard 
      className={cn("", className)} 
      isCompact 
      {...props}
    >
      <div className="flex items-start justify-between">
        <div>
          <p className="text-sm font-medium text-muted-foreground mb-1">{label}</p>
          {isLoading ? (
            <div className="h-8 w-24 animate-pulse bg-muted rounded"></div>
          ) : (
            <div className="flex items-baseline space-x-1">
              <h3 className="text-2xl font-semibold tracking-tight">
                {value}
              </h3>
              {metric && <span className="text-sm text-muted-foreground">{metric}</span>}
            </div>
          )}
          
          {typeof trend !== 'undefined' && (
            <div className="mt-2">
              <span className={cn(
                badgeVariants({ variant: trendVariant }),
                "flex items-center gap-1"
              )}>
                {isTrendPositive ? <ArrowUpIcon className="h-3 w-3" /> : <ArrowDownIcon className="h-3 w-3" />}
                {formattedTrend}% {trendLabel}
              </span>
            </div>
          )}
        </div>
        
        {icon && (
          <div className="p-2 rounded-full bg-primary/10 text-primary">
            {icon}
          </div>
        )}
      </div>
    </DashboardCard>
  );
}
