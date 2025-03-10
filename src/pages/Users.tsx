
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { DataTable } from "@/components/users/DataTable";
import { columns } from "@/components/users/columns";
import { useState } from "react";

// Sample user data
const initialUsers = [
  {
    id: "1",
    name: "John Doe",
    email: "john.doe@kc-tip.com",
    role: "Admin",
    status: "Active",
    lastActive: "2 hours ago"
  },
  {
    id: "2",
    name: "Jane Smith",
    email: "jane.smith@kc-tip.com",
    role: "Analyst",
    status: "Active", 
    lastActive: "1 day ago"
  },
  {
    id: "3",
    name: "Robert Johnson",
    email: "robert.johnson@kc-tip.com",
    role: "Trader",
    status: "Inactive",
    lastActive: "5 days ago"
  },
  {
    id: "4",
    name: "Emily Williams",
    email: "emily.williams@kc-tip.com",
    role: "Manager",
    status: "Active",
    lastActive: "3 hours ago"
  },
  {
    id: "5",
    name: "Michael Brown",
    email: "michael.brown@kc-tip.com", 
    role: "Trader",
    status: "Active",
    lastActive: "Just now"
  }
];

export default function Users() {
  const [users] = useState(initialUsers);

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle>Users</CardTitle>
          <CardDescription>
            Manage user accounts and permissions.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <DataTable columns={columns} data={users} />
        </CardContent>
      </Card>
    </div>
  );
}
