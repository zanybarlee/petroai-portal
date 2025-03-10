
import React from "react";
import { useLocation } from "react-router-dom";
import {
  Sidebar as ShadcnSidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarGroup,
  SidebarGroupLabel,
  SidebarGroupContent,
} from "@/components/ui/sidebar";
import { SidebarLogo } from "./SidebarLogo";
import { NavigationItems, AdminItems } from "./SidebarNavigation";
import { SidebarUserFooter } from "./SidebarUserFooter";

export function KcSidebar() {
  const location = useLocation();
  const isActive = (path: string) => location.pathname === path;

  return (
    <ShadcnSidebar className="border-r">
      <SidebarHeader className="flex h-14 items-center border-b px-4">
        <SidebarLogo />
      </SidebarHeader>
      <SidebarContent className="flex flex-col h-full">
        <SidebarGroup>
          <SidebarGroupLabel>Navigation</SidebarGroupLabel>
          <SidebarGroupContent>
            <NavigationItems isActive={isActive} />
          </SidebarGroupContent>
        </SidebarGroup>
        
        <SidebarGroup>
          <SidebarGroupLabel>Administration</SidebarGroupLabel>
          <SidebarGroupContent>
            <AdminItems isActive={isActive} />
          </SidebarGroupContent>
        </SidebarGroup>

        <div className="mt-auto">
          <SidebarFooter className="border-t p-4">
            <SidebarUserFooter />
          </SidebarFooter>
        </div>
      </SidebarContent>
    </ShadcnSidebar>
  );
}
