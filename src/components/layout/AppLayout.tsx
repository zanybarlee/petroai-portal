
import { ReactNode } from "react";
import { SidebarWrapper } from "./Sidebar";
import { Header } from "./Header";
import { PageTransition } from "../ui/transitions/PageTransition";

interface AppLayoutProps {
  children: ReactNode;
  title: string;
  subtitle?: string;
}

export function AppLayout({ children, title, subtitle }: AppLayoutProps) {
  return (
    <SidebarWrapper>
      <div className="flex flex-col min-h-screen">
        <Header title={title} subtitle={subtitle} />
        <main className="flex-1 p-6 lg:p-10">
          <PageTransition>{children}</PageTransition>
        </main>
      </div>
    </SidebarWrapper>
  );
}
