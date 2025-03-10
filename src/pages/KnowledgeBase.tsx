
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { ArticlesList } from "@/components/knowledge-base/ArticlesList";
import { Button } from "@/components/ui/button";
import { Search } from "lucide-react";

export default function KnowledgeBase() {
  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle>Knowledge Base</CardTitle>
          <CardDescription>
            Access guides, tutorials, and helpful resources.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="relative mb-6">
            <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
            <Input 
              className="pl-10" 
              placeholder="Search for articles, guides, and more..." 
            />
          </div>
          
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-lg">Getting Started</CardTitle>
              </CardHeader>
              <CardContent>
                <ArticlesList category="getting-started" />
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-lg">Trading Strategies</CardTitle>
              </CardHeader>
              <CardContent>
                <ArticlesList category="strategies" />
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-lg">Platform Features</CardTitle>
              </CardHeader>
              <CardContent>
                <ArticlesList category="features" />
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-lg">Risk Management</CardTitle>
              </CardHeader>
              <CardContent>
                <ArticlesList category="risk" />
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-lg">Market Analysis</CardTitle>
              </CardHeader>
              <CardContent>
                <ArticlesList category="analysis" />
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-lg">Frequently Asked Questions</CardTitle>
              </CardHeader>
              <CardContent>
                <ArticlesList category="faq" />
              </CardContent>
            </Card>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
