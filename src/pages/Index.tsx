
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { 
  Shield, 
  UserCircle, 
  ChartBarIcon, 
  Truck, 
  ScrollText, 
  HeadphonesIcon,
  LogIn,
  UserPlus,
  ArrowRight
} from "lucide-react";
import { useToast } from "@/hooks/use-toast";

// Define role types to match what's in the columns.tsx
type UserRole = 
  | "Marketing"
  | "Operations"
  | "Financial"
  | "Executive"
  | "Administrator"
  | "Customer Support"
  | "IT Development"
  | "Compliance";

// Example users with roles to showcase in the landing page
const exampleUsers = [
  {
    name: "Sarah Chen",
    role: "Administrator",
    avatarUrl: "https://api.dicebear.com/7.x/personas/svg?seed=sarah"
  },
  {
    name: "James Rodriguez",
    role: "Marketing",
    avatarUrl: "https://api.dicebear.com/7.x/personas/svg?seed=james"
  },
  {
    name: "Aisha Patel",
    role: "Financial",
    avatarUrl: "https://api.dicebear.com/7.x/personas/svg?seed=aisha"
  },
  {
    name: "Michael Chang",
    role: "Executive",
    avatarUrl: "https://api.dicebear.com/7.x/personas/svg?seed=michael"
  },
  {
    name: "Linda Kumar",
    role: "Operations",
    avatarUrl: "https://api.dicebear.com/7.x/personas/svg?seed=linda"
  }
];

// Function to get appropriate icon based on role
const getRoleIcon = (role: string) => {
  switch(role) {
    case "Administrator": 
      return <Shield className="h-4 w-4 text-red-500" />;
    case "Executive": 
      return <UserCircle className="h-4 w-4 text-purple-500" />;
    case "Marketing": 
      return <ChartBarIcon className="h-4 w-4 text-blue-500" />;
    case "Operations": 
      return <Truck className="h-4 w-4 text-green-500" />;
    case "Financial": 
      return <ScrollText className="h-4 w-4 text-yellow-500" />;
    case "Customer Support": 
      return <HeadphonesIcon className="h-4 w-4 text-pink-500" />;
    default:
      return <UserCircle className="h-4 w-4 text-blue-500" />;
  }
};

export default function Index() {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [selectedRole, setSelectedRole] = useState<UserRole>("Administrator");
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Simulate auth delay
    setTimeout(() => {
      setIsLoading(false);
      toast({
        title: "Welcome back!",
        description: `You've signed in as a ${selectedRole}.`,
      });
      navigate("/dashboard");
    }, 1500);
  };

  return (
    <div className="min-h-screen flex flex-col relative overflow-hidden bg-gradient-to-b from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-950">
      {/* Background effect */}
      <motion.div 
        className="absolute inset-0 -z-10 opacity-30 dark:opacity-20"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.3 }}
        transition={{ duration: 1.5 }}
      >
        <svg className="absolute inset-0 h-full w-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="smallGrid" width="20" height="20" patternUnits="userSpaceOnUse">
              <path d="M 20 0 L 0 0 0 20" fill="none" stroke="currentColor" strokeWidth="0.5" className="text-gray-300 dark:text-gray-700" />
            </pattern>
            <pattern id="grid" width="100" height="100" patternUnits="userSpaceOnUse">
              <rect width="100" height="100" fill="url(#smallGrid)" />
              <path d="M 100 0 L 0 0 0 100" fill="none" stroke="currentColor" strokeWidth="1" className="text-gray-400 dark:text-gray-600" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </motion.div>

      <header className="relative z-10 px-6 py-8">
        <div className="container mx-auto flex justify-between items-center">
          <div className="flex items-center gap-2">
            <div className="flex items-center justify-center w-8 h-8 rounded bg-primary">
              <span className="font-bold text-white">KC</span>
            </div>
            <span className="font-semibold">KC-TIP</span>
          </div>
        </div>
      </header>

      <main className="flex-1 flex items-center justify-center px-6 py-6 relative z-10">
        <div className="container max-w-6xl grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-center lg:text-left"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
              KC Trading <span className="text-primary">Intelligent</span> Portal
            </h1>
            <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-lg mx-auto lg:mx-0">
              An AI-enhanced trading platform designed to automate and optimize petroleum trading operations.
            </p>
            
            {/* Role-based user showcase */}
            <div className="mt-8 mb-10">
              <h3 className="text-xl font-medium mb-4 text-center lg:text-left">Role-Based Access for Your Team</h3>
              <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
                {exampleUsers.map((user, index) => (
                  <motion.div 
                    key={index}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3, delay: 0.3 + (index * 0.1) }}
                    whileHover={{ y: -5 }}
                    className="flex flex-col items-center"
                  >
                    <div className="relative">
                      <Avatar className="h-14 w-14 border-2 border-white shadow-md">
                        <AvatarImage src={user.avatarUrl} />
                        <AvatarFallback className="bg-primary/10">
                          {user.name.split(' ').map(n => n[0]).join('')}
                        </AvatarFallback>
                      </Avatar>
                      <div className="absolute -bottom-1 -right-1 bg-white dark:bg-gray-800 rounded-full p-1 shadow-sm">
                        {getRoleIcon(user.role)}
                      </div>
                    </div>
                    <span className="text-sm font-medium mt-2">{user.role}</span>
                  </motion.div>
                ))}
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button size="lg" className="rounded-full">
                Learn More
              </Button>
              <Button size="lg" variant="outline" className="rounded-full">
                Contact Sales
              </Button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="w-full max-w-md mx-auto"
          >
            <Card className="glass-card border border-gray-200 dark:border-gray-800 shadow-xl">
              <CardHeader>
                <CardTitle>Welcome Back</CardTitle>
                <CardDescription>
                  Sign in to your account to continue
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Tabs defaultValue="login" className="w-full">
                  <TabsList className="grid w-full grid-cols-2 mb-6">
                    <TabsTrigger value="login" className="flex items-center gap-1.5">
                      <LogIn className="h-4 w-4" />
                      Login
                    </TabsTrigger>
                    <TabsTrigger value="register" className="flex items-center gap-1.5">
                      <UserPlus className="h-4 w-4" />
                      Register
                    </TabsTrigger>
                  </TabsList>
                  <TabsContent value="login">
                    <form onSubmit={handleSubmit} className="space-y-4">
                      <div className="space-y-2">
                        <Label htmlFor="email">Email</Label>
                        <Input id="email" placeholder="name@company.com" required type="email" />
                      </div>
                      <div className="space-y-2">
                        <div className="flex justify-between items-center">
                          <Label htmlFor="password">Password</Label>
                          <Button variant="link" size="sm" className="p-0 h-auto font-normal">
                            Forgot Password?
                          </Button>
                        </div>
                        <Input id="password" required type="password" />
                      </div>
                      
                      {/* Role selection */}
                      <div className="space-y-2">
                        <Label htmlFor="role">Sign in as</Label>
                        <select 
                          id="role" 
                          className="w-full h-10 rounded-md border border-input bg-background px-3 py-2"
                          value={selectedRole}
                          onChange={(e) => setSelectedRole(e.target.value as UserRole)}
                        >
                          <option value="Administrator">Administrator</option>
                          <option value="Executive">Executive</option>
                          <option value="Marketing">Marketing</option>
                          <option value="Operations">Operations</option>
                          <option value="Financial">Financial</option>
                          <option value="Customer Support">Customer Support</option>
                          <option value="Compliance">Compliance</option>
                        </select>
                      </div>
                      
                      <div className="flex items-center space-x-2">
                        <Checkbox id="remember" />
                        <label
                          htmlFor="remember"
                          className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                        >
                          Remember me
                        </label>
                      </div>
                      <Button type="submit" className="w-full flex items-center justify-center gap-2" disabled={isLoading}>
                        {isLoading ? "Signing in..." : "Sign In"}
                        {!isLoading && <ArrowRight className="h-4 w-4" />}
                      </Button>
                    </form>
                  </TabsContent>
                  <TabsContent value="register">
                    <div className="space-y-4">
                      <div className="grid grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="firstName">First name</Label>
                          <Input id="firstName" required />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="lastName">Last name</Label>
                          <Input id="lastName" required />
                        </div>
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="registerEmail">Email</Label>
                        <Input id="registerEmail" required type="email" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="registerPassword">Password</Label>
                        <Input id="registerPassword" required type="password" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="confirmPassword">Confirm Password</Label>
                        <Input id="confirmPassword" required type="password" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="registerRole">Register as</Label>
                        <select 
                          id="registerRole" 
                          className="w-full h-10 rounded-md border border-input bg-background px-3 py-2"
                        >
                          <option value="Operations">Operations</option>
                          <option value="Marketing">Marketing</option>
                          <option value="Financial">Financial</option>
                          <option value="Customer Support">Customer Support</option>
                          <option value="Compliance">Compliance</option>
                        </select>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Checkbox id="terms" />
                        <label
                          htmlFor="terms"
                          className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                        >
                          I agree to the terms and conditions
                        </label>
                      </div>
                      <Button className="w-full flex items-center justify-center gap-2">
                        Create Account
                        <ArrowRight className="h-4 w-4" />
                      </Button>
                    </div>
                  </TabsContent>
                </Tabs>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </main>

      <footer className="relative z-10 mt-auto px-6 py-6 border-t bg-white/50 dark:bg-black/20 backdrop-blur-sm">
        <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-muted-foreground">
            © 2023 KC Trading. All rights reserved.
          </p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <Button variant="link" size="sm" className="text-muted-foreground p-0 h-auto">
              Privacy Policy
            </Button>
            <Button variant="link" size="sm" className="text-muted-foreground p-0 h-auto">
              Terms of Service
            </Button>
            <Button variant="link" size="sm" className="text-muted-foreground p-0 h-auto">
              Contact
            </Button>
          </div>
        </div>
      </footer>
    </div>
  );
}
