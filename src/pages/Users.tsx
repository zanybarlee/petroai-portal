
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { DataTable } from "@/components/users/DataTable";
import { columns, User } from "@/components/users/columns";
import { useState } from "react";

// Sample user data
const initialUsers: User[] = [
  {
    id: "1",
    name: "Sarah Chen",
    email: "sarah.chen@kc-tip.com",
    role: "Administrator",
    department: "IT & Development",
    status: "Active",
    lastActive: "Just now",
    avatarUrl: "https://api.dicebear.com/7.x/personas/svg?seed=sarah"
  },
  {
    id: "2",
    name: "James Rodriguez",
    email: "j.rodriguez@kc-tip.com",
    role: "Marketing",
    department: "Trading & Marketing",
    status: "Active",
    lastActive: "1 hour ago",
    avatarUrl: "https://api.dicebear.com/7.x/personas/svg?seed=james"
  },
  {
    id: "3",
    name: "Aisha Patel",
    email: "a.patel@kc-tip.com",
    role: "Financial",
    department: "Financial Teams",
    status: "Active",
    lastActive: "30 minutes ago",
    avatarUrl: "https://api.dicebear.com/7.x/personas/svg?seed=aisha"
  },
  {
    id: "4",
    name: "Michael Chang",
    email: "m.chang@kc-tip.com",
    role: "Executive",
    department: "Senior Management",
    status: "Active",
    lastActive: "2 hours ago",
    avatarUrl: "https://api.dicebear.com/7.x/personas/svg?seed=michael"
  },
  {
    id: "5",
    name: "Linda Kumar",
    email: "l.kumar@kc-tip.com",
    role: "Operations",
    department: "Fleet Management",
    status: "Active",
    lastActive: "15 minutes ago",
    avatarUrl: "https://api.dicebear.com/7.x/personas/svg?seed=linda"
  },
  {
    id: "6",
    name: "David Wilson",
    email: "d.wilson@kc-tip.com",
    role: "Compliance",
    department: "Compliance & Regulatory",
    status: "Active",
    lastActive: "1 day ago",
    avatarUrl: "https://api.dicebear.com/7.x/personas/svg?seed=david"
  },
  {
    id: "7",
    name: "Sofia Martinez",
    email: "s.martinez@kc-tip.com",
    role: "Customer Support",
    department: "Customer Support",
    status: "Active",
    lastActive: "5 minutes ago",
    avatarUrl: "https://api.dicebear.com/7.x/personas/svg?seed=sofia"
  }
];

export default function Users() {
  const [users] = useState<User[]>(initialUsers);

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle>Users</CardTitle>
          <CardDescription>
            Manage system users, their roles, and permissions across different departments.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <DataTable columns={columns} data={users} />
        </CardContent>
      </Card>
    </div>
  );
}
