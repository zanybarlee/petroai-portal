
import React from "react";
import { Link } from "react-router-dom";
import {
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
} from "@/components/ui/sidebar";
import {
  AreaChart,
  BarChartBig,
  Book,
  FileText,
  Home,
  Repeat,
  Users,
  Settings,
  Ship,
  Truck,
  MessageSquare,
  Handshake,
  Package,
} from "lucide-react";

interface SidebarNavigationProps {
  isActive: (path: string) => boolean;
}

export function NavigationItems({ isActive }: SidebarNavigationProps) {
  return (
    <SidebarMenu>
      <SidebarMenuItem>
        <SidebarMenuButton 
          asChild 
          isActive={isActive("/dashboard")}
        >
          <Link to="/dashboard" className="flex items-center gap-2">
            <Home className="h-5 w-5" /> 
            <span>Dashboard</span>
          </Link>
        </SidebarMenuButton>
      </SidebarMenuItem>
      <SidebarMenuItem>
        <SidebarMenuButton 
          asChild 
          isActive={isActive("/bunkering")}
        >
          <Link to="/bunkering" className="flex items-center gap-2">
            <Ship className="h-5 w-5" /> 
            <span>Bunkering AI</span>
          </Link>
        </SidebarMenuButton>
      </SidebarMenuItem>
      <SidebarMenuItem>
        <SidebarMenuButton 
          asChild 
          isActive={isActive("/fleet")}
        >
          <Link to="/fleet" className="flex items-center gap-2">
            <Truck className="h-5 w-5" /> 
            <span>Fleet & Logistics</span>
          </Link>
        </SidebarMenuButton>
      </SidebarMenuItem>
      <SidebarMenuItem>
        <SidebarMenuButton 
          asChild 
          isActive={isActive("/cargo-roster")}
        >
          <Link to="/cargo-roster" className="flex items-center gap-2">
            <Package className="h-5 w-5" /> 
            <span>Cargo Roster</span>
          </Link>
        </SidebarMenuButton>
      </SidebarMenuItem>
      <SidebarMenuItem>
        <SidebarMenuButton 
          asChild 
          isActive={isActive("/customer-engagement")}
        >
          <Link to="/customer-engagement" className="flex items-center gap-2">
            <MessageSquare className="h-5 w-5" /> 
            <span>Customer Engagement AI</span>
          </Link>
        </SidebarMenuButton>
      </SidebarMenuItem>
      <SidebarMenuItem>
        <SidebarMenuButton 
          asChild 
          isActive={isActive("/supplier-relationship")}
        >
          <Link to="/supplier-relationship" className="flex items-center gap-2">
            <Handshake className="h-5 w-5" /> 
            <span>Supplier Relationship AI</span>
          </Link>
        </SidebarMenuButton>
      </SidebarMenuItem>
      <SidebarMenuItem>
        <SidebarMenuButton 
          asChild 
          isActive={isActive("/trades")}
        >
          <Link to="/trades" className="flex items-center gap-2">
            <Repeat className="h-5 w-5" /> 
            <span>Trades</span>
          </Link>
        </SidebarMenuButton>
      </SidebarMenuItem>
      <SidebarMenuItem>
        <SidebarMenuButton 
          asChild 
          isActive={isActive("/documents")}
        >
          <Link to="/documents" className="flex items-center gap-2">
            <FileText className="h-5 w-5" /> 
            <span>Documents</span>
          </Link>
        </SidebarMenuButton>
      </SidebarMenuItem>
      <SidebarMenuItem>
        <SidebarMenuButton 
          asChild 
          isActive={isActive("/analytics")}
        >
          <Link to="/analytics" className="flex items-center gap-2">
            <BarChartBig className="h-5 w-5" /> 
            <span>Analytics</span>
          </Link>
        </SidebarMenuButton>
      </SidebarMenuItem>
      <SidebarMenuItem>
        <SidebarMenuButton 
          asChild 
          isActive={isActive("/knowledge-base")}
        >
          <Link to="/knowledge-base" className="flex items-center gap-2">
            <Book className="h-5 w-5" /> 
            <span>Knowledge Base</span>
          </Link>
        </SidebarMenuButton>
      </SidebarMenuItem>
    </SidebarMenu>
  );
}

export function AdminItems({ isActive }: SidebarNavigationProps) {
  return (
    <SidebarMenu>
      <SidebarMenuItem>
        <SidebarMenuButton 
          asChild 
          isActive={isActive("/users")}
        >
          <Link to="/users" className="flex items-center gap-2">
            <Users className="h-5 w-5" /> 
            <span>Users</span>
          </Link>
        </SidebarMenuButton>
      </SidebarMenuItem>
      <SidebarMenuItem>
        <SidebarMenuButton 
          asChild 
          isActive={isActive("/settings")}
        >
          <Link to="/settings" className="flex items-center gap-2">
            <Settings className="h-5 w-5" /> 
            <span>Settings</span>
          </Link>
        </SidebarMenuButton>
      </SidebarMenuItem>
    </SidebarMenu>
  );
}
