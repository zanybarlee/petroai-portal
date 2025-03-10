
import { AlertCircle } from "lucide-react";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { DashboardCard } from "@/components/ui/dashboard/DashboardCard";

export function MarketAlerts() {
  return (
    <DashboardCard
      title="Market Alerts"
      isGlass
    >
      <Alert className="mb-4">
        <AlertCircle className="h-4 w-4" />
        <AlertTitle>Price Volatility Alert</AlertTitle>
        <AlertDescription>
          Crude oil prices showing unusual volatility. Consider adjusting trading strategy.
        </AlertDescription>
      </Alert>
      <Alert>
        <AlertCircle className="h-4 w-4" />
        <AlertTitle>Contract Expiry</AlertTitle>
        <AlertDescription>
          3 contracts expiring in the next 48 hours. Review and take action.
        </AlertDescription>
      </Alert>
    </DashboardCard>
  );
}
