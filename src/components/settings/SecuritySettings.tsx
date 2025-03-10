
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export function SecuritySettings() {
  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle>Change Password</CardTitle>
          <CardDescription>
            Update your password to keep your account secure.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="current">Current password</Label>
            <Input id="current" type="password" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="new">New password</Label>
            <Input id="new" type="password" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="confirm">Confirm password</Label>
            <Input id="confirm" type="password" />
          </div>
        </CardContent>
        <CardFooter className="flex justify-end">
          <Button>Update password</Button>
        </CardFooter>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Two-Factor Authentication</CardTitle>
          <CardDescription>
            Add an extra layer of security to your account.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Button variant="outline">Enable 2FA</Button>
        </CardContent>
      </Card>
      
      <Card>
        <CardHeader>
          <CardTitle>Device History</CardTitle>
          <CardDescription>
            Manage devices that have logged into your account.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="flex justify-between items-center">
              <div>
                <p className="font-medium">Current device</p>
                <p className="text-sm text-muted-foreground">Windows 11 • Chrome • New York, USA</p>
              </div>
              <span className="text-sm text-green-500">Active now</span>
            </div>
            <div className="flex justify-between items-center">
              <div>
                <p className="font-medium">MacBook Pro</p>
                <p className="text-sm text-muted-foreground">macOS • Safari • New York, USA</p>
              </div>
              <span className="text-sm text-muted-foreground">2 days ago</span>
            </div>
          </div>
        </CardContent>
        <CardFooter className="flex justify-end">
          <Button variant="outline">Sign out all devices</Button>
        </CardFooter>
      </Card>
    </div>
  );
}
