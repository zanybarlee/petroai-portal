
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";

export function NotificationSettings() {
  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle>Notification Preferences</CardTitle>
          <CardDescription>
            Choose what notifications you want to receive.
          </CardDescription>
        </CardHeader>
        <CardContent className="grid gap-6">
          <div className="flex items-center justify-between space-x-2">
            <Label htmlFor="email-notifs" className="flex flex-col space-y-1">
              <span>Email notifications</span>
              <span className="text-xs font-normal text-muted-foreground">
                Receive email notifications for important updates
              </span>
            </Label>
            <Switch id="email-notifs" defaultChecked />
          </div>
          
          <div className="flex items-center justify-between space-x-2">
            <Label htmlFor="trade-notifs" className="flex flex-col space-y-1">
              <span>Trade alerts</span>
              <span className="text-xs font-normal text-muted-foreground">
                Get notified when trades are executed
              </span>
            </Label>
            <Switch id="trade-notifs" defaultChecked />
          </div>
          
          <div className="flex items-center justify-between space-x-2">
            <Label htmlFor="market-notifs" className="flex flex-col space-y-1">
              <span>Market updates</span>
              <span className="text-xs font-normal text-muted-foreground">
                Receive notifications about market changes
              </span>
            </Label>
            <Switch id="market-notifs" />
          </div>
          
          <div className="flex items-center justify-between space-x-2">
            <Label htmlFor="newsletter" className="flex flex-col space-y-1">
              <span>Newsletter</span>
              <span className="text-xs font-normal text-muted-foreground">
                Receive weekly newsletter with trading insights
              </span>
            </Label>
            <Switch id="newsletter" />
          </div>
        </CardContent>
        <CardFooter className="flex justify-end">
          <Button>Save preferences</Button>
        </CardFooter>
      </Card>
    </div>
  );
}
