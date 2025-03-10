
import React from "react";
import { useNavigate } from "react-router-dom";
import { LogOut } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";

export function SidebarUserFooter() {
  const navigate = useNavigate();
  const { toast } = useToast();

  const handleSignOut = () => {
    toast({
      title: "Signing out...",
      description: "You have been signed out successfully.",
    });
    navigate("/");
  };

  return (
    <div className="flex items-center gap-3">
      <Avatar>
        <AvatarImage src="/avatar.png" />
        <AvatarFallback>JD</AvatarFallback>
      </Avatar>
      <div className="flex flex-col">
        <span className="text-sm font-medium">John Doe</span>
        <span className="text-xs text-muted-foreground">Trading Analyst</span>
      </div>
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger asChild>
            <Button 
              variant="ghost" 
              size="icon" 
              className="ml-auto"
              onClick={handleSignOut}
            >
              <LogOut className="h-4 w-4" />
              <span className="sr-only">Sign out</span>
            </Button>
          </TooltipTrigger>
          <TooltipContent>
            <p>Sign out</p>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
    </div>
  );
}
