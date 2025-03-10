
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { DashboardCard } from "@/components/ui/dashboard/DashboardCard";

export function AIAssistant() {
  return (
    <DashboardCard
      title="AI Assistant"
      isGlass
    >
      <div className="flex items-center gap-4 mb-4">
        <Avatar>
          <AvatarImage src="/ai-assistant.png" />
          <AvatarFallback className="bg-primary text-primary-foreground">AI</AvatarFallback>
        </Avatar>
        <div>
          <h4 className="font-medium">Trading Assistant</h4>
          <p className="text-sm text-muted-foreground">AI-powered insights</p>
        </div>
      </div>
      <div className="text-sm text-muted-foreground mb-4">
        I've analyzed your recent trades and noticed a pattern in natural gas pricing that could present an opportunity. Would you like me to prepare a detailed report?
      </div>
      <div className="flex gap-2">
        <Button size="sm">Generate Report</Button>
        <Button size="sm" variant="outline">Ask a Question</Button>
      </div>
    </DashboardCard>
  );
}
