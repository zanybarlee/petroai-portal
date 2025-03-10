
import { ActivityLog } from "@/components/ui/dashboard/ActivityLog";

const activityData = [
  {
    id: "1",
    user: { name: "John Doe", avatar: "" },
    action: "created trade",
    target: "#12387",
    date: "2 minutes ago",
    status: "completed" as const,
  },
  {
    id: "2",
    user: { name: "Sarah Kim", avatar: "" },
    action: "approved document",
    target: "Contract #985",
    date: "1 hour ago",
    status: "completed" as const,
  },
  {
    id: "3",
    user: { name: "Robert Chen", avatar: "" },
    action: "requested review on",
    target: "Risk Assessment #445",
    date: "3 hours ago",
    status: "pending" as const,
  },
  {
    id: "4",
    user: { name: "Maria Lopez", avatar: "" },
    action: "rejected trade",
    target: "#12265",
    date: "Yesterday",
    status: "failed" as const,
  },
  {
    id: "5",
    user: { name: "James Wilson", avatar: "" },
    action: "updated price on",
    target: "Contract #673",
    date: "Yesterday",
    status: "completed" as const,
  },
];

export function RecentActivity() {
  return (
    <ActivityLog
      activities={activityData}
      className="lg:col-span-3"
    />
  );
}
