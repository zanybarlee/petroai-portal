
import { ColumnDef } from "@tanstack/react-table";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { MoreHorizontal, Shield, UserCircle, Users, Briefcase, ChartBarIcon, ScrollText, Truck, HeadphonesIcon } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export type UserRole = 
  | "Marketing"
  | "Operations"
  | "Financial"
  | "Executive"
  | "Administrator"
  | "Customer Support"
  | "IT Development"
  | "Compliance";

export type User = {
  id: string;
  name: string;
  email: string;
  role: UserRole;
  department: string;
  status: "Active" | "Inactive";
  lastActive: string;
  avatarUrl?: string;
}

export const columns: ColumnDef<User>[] = [
  {
    accessorKey: "name",
    header: "Name",
    cell: ({ row }) => {
      const user = row.original;
      return (
        <div className="flex items-center gap-3">
          <Avatar>
            <AvatarImage src={user.avatarUrl} />
            <AvatarFallback className="bg-primary/10">
              {user.name.split(' ').map(n => n[0]).join('')}
            </AvatarFallback>
          </Avatar>
          <div className="flex flex-col">
            <span className="font-medium">{user.name}</span>
            <span className="text-xs text-muted-foreground">{user.email}</span>
          </div>
        </div>
      );
    },
  },
  {
    accessorKey: "role",
    header: "Role",
    cell: ({ row }) => {
      const role = row.getValue("role") as UserRole;
      return (
        <div className="flex items-center gap-2">
          {role === "Administrator" ? <Shield className="h-4 w-4 text-red-500" /> :
           role === "Executive" ? <UserCircle className="h-4 w-4 text-purple-500" /> :
           role === "Marketing" ? <ChartBarIcon className="h-4 w-4 text-blue-500" /> :
           role === "Operations" ? <Truck className="h-4 w-4 text-green-500" /> :
           role === "Financial" ? <ScrollText className="h-4 w-4 text-yellow-500" /> :
           role === "Customer Support" ? <HeadphonesIcon className="h-4 w-4 text-pink-500" /> :
           <Users className="h-4 w-4 text-blue-500" />}
          <span>{role}</span>
        </div>
      );
    },
  },
  {
    accessorKey: "department",
    header: "Department",
  },
  {
    accessorKey: "status",
    header: "Status",
    cell: ({ row }) => {
      const status = row.getValue("status") as string;
      return (
        <Badge variant={status === "Active" ? "success" : "secondary"}>
          {status}
        </Badge>
      );
    },
  },
  {
    accessorKey: "lastActive",
    header: "Last Active",
  },
  {
    id: "actions",
    cell: ({ row }) => {
      const user = row.original;
      
      return (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="h-8 w-8 p-0">
              <span className="sr-only">Open menu</span>
              <MoreHorizontal className="h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuLabel>Actions</DropdownMenuLabel>
            <DropdownMenuItem onClick={() => navigator.clipboard.writeText(user.id)}>
              Copy user ID
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem>Edit user</DropdownMenuItem>
            <DropdownMenuItem>View activity</DropdownMenuItem>
            <DropdownMenuItem className="text-destructive">
              Suspend user
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      );
    },
  },
];
