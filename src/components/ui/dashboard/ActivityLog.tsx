
import { cn } from "@/lib/utils";
import { DashboardCard } from "./DashboardCard";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Skeleton } from "@/components/ui/skeleton";

export interface ActivityItem {
  id: string;
  user: {
    name: string;
    avatar?: string;
    email?: string;
  };
  action: string;
  target: string;
  date: string;
  status?: "pending" | "completed" | "failed";
}

interface ActivityLogProps {
  activities: ActivityItem[];
  isLoading?: boolean;
  className?: string;
  maxItems?: number;
}

export function ActivityLog({ activities, isLoading, className, maxItems = 5 }: ActivityLogProps) {
  return (
    <DashboardCard
      title="Recent Activity"
      isGlass
      className={className}
    >
      <div className="space-y-4">
        {isLoading ? (
          Array.from({ length: maxItems }).map((_, i) => (
            <div key={i} className="flex items-start gap-4">
              <Skeleton className="h-10 w-10 rounded-full" />
              <div className="space-y-2 flex-1">
                <Skeleton className="h-4 w-full" />
                <Skeleton className="h-4 w-3/4" />
              </div>
            </div>
          ))
        ) : (
          activities.slice(0, maxItems).map((activity) => (
            <div key={activity.id} className="flex items-start gap-4 group">
              <Avatar className="h-10 w-10">
                <AvatarImage src={activity.user.avatar} alt={activity.user.name} />
                <AvatarFallback>{activity.user.name.substring(0, 2).toUpperCase()}</AvatarFallback>
              </Avatar>
              <div className="space-y-1 flex-1">
                <p className="text-sm font-medium leading-none">
                  <span className="font-semibold">{activity.user.name}</span>{" "}
                  <span className="text-muted-foreground">{activity.action}</span>{" "}
                  <span className="font-medium">{activity.target}</span>
                </p>
                <div className="flex items-center justify-between">
                  <p className="text-xs text-muted-foreground">{activity.date}</p>
                  {activity.status && (
                    <Badge
                      variant={
                        activity.status === "completed" ? "outline" : 
                        activity.status === "failed" ? "destructive" : "secondary"
                      }
                      className="opacity-0 group-hover:opacity-100 transition-opacity"
                    >
                      {activity.status}
                    </Badge>
                  )}
                </div>
              </div>
            </div>
          ))
        )}
      </div>
    </DashboardCard>
  );
}
