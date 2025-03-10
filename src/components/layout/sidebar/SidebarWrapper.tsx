
import { SidebarProvider } from "@/components/ui/sidebar";
import { KcSidebar } from "./KcSidebar";
import { SidebarMobileMenu } from "./SidebarMobileMenu";

export function SidebarWrapper({ children }: { children: React.ReactNode }) {
  return (
    <SidebarProvider>
      <div className="grid min-h-screen w-full lg:grid-cols-[280px_1fr] lg:grid-rows-[1fr]">
        <KcSidebar />
        <div className="flex flex-col">
          <div className="p-4 lg:hidden">
            <SidebarMobileMenu />
          </div>
          <div className="flex-1 overflow-auto">{children}</div>
        </div>
      </div>
    </SidebarProvider>
  );
}
