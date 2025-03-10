
import React from "react";
import { SidebarTrigger } from "@/components/ui/sidebar";
import { Button } from "@/components/ui/button";
import { MenuIcon } from "./icons";

export function SidebarMobileMenu() {
  return (
    <SidebarTrigger>
      <Button variant="outline" size="icon" className="lg:hidden">
        <MenuIcon className="h-5 w-5" />
      </Button>
    </SidebarTrigger>
  );
}
