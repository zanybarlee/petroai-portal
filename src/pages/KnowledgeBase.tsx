
import { AppLayout } from "@/components/layout/AppLayout";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { BookOpen, Search, Star, Clock, Tag, BookOpenText, Calendar, User, MessageCircle, ThumbsUp, Eye } from "lucide-react";

export default function KnowledgeBase() {
  const articles = [
    {
      id: "KB-001",
      title: "Understanding Crude Oil Price Factors",
      category: "Market Insights",
      author: { name: "John Doe", avatar: "" },
      date: "May 15, 2023",
      views: 234,
      likes: 42,
      isFeatured: true,
    },
    {
      id: "KB-002",
      title: "Natural Gas Trading Fundamentals",
      category: "Trading Guide",
      author: { name: "Sarah Kim", avatar: "" },
      date: "May 10, 2023",
      views: 187,
      likes: 31,
    },
    {
      id: "KB-003",
      title: "Hedging Strategies for Petroleum Products",
      category: "Risk Management",
      author: { name: "Robert Chen", avatar: "" },
      date: "May 5, 2023",
      views: 156,
      likes: 28,
      isFeatured: true,
    },
    {
      id: "KB-004",
      title: "Trading Documentation Best Practices",
      category: "Compliance",
      author: { name: "Maria Lopez", avatar: "" },
      date: "May 1, 2023",
      views: 143,
      likes: 26,
    },
    {
      id: "KB-005",
      title: "Regulatory Requirements for Energy Trading",
      category: "Compliance",
      author: { name: "James Wilson", avatar: "" },
      date: "April 25, 2023",
      views: 129,
      likes: 24,
    },
    {
      id: "KB-006",
      title: "Pipeline Transportation Basics",
      category: "Operations",
      author: { name: "Linda Chen", avatar: "" },
      date: "April 20, 2023",
      views: 112,
      likes: 19,
    },
  ];

  const categories = [
    { name: "Market Insights", count: 24 },
    { name: "Trading Guide", count: 18 },
    { name: "Risk Management", count: 15 },
    { name: "Compliance", count: 12 },
    { name: "Operations", count: 10 },
    { name: "Analytics", count: 8 },
  ];

  return (
    <AppLayout title="Knowledge Base" subtitle="Explore articles, guides, and resources">
      <div className="flex flex-col lg:flex-row gap-8">
        <div className="lg:w-3/4">
          <div className="mb-8">
            <div className="relative mb-8">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
              <Input 
                placeholder="Search the knowledge base..." 
                className="pl-10 py-6 text-lg rounded-xl bg-background border-muted" 
              />
            </div>

            <div className="flex flex-wrap gap-2 mb-6">
              <Button variant="outline" className="rounded-full" size="sm">All</Button>
              {categories.map((category) => (
                <Button key={category.name} variant="outline" className="rounded-full" size="sm">
                  {category.name}
                </Button>
              ))}
            </div>

            <h2 className="text-xl font-semibold mb-4">Featured Articles</h2>
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              {articles.filter(a => a.isFeatured).map((article) => (
                <Card key={article.id} className="hover-scale overflow-hidden">
                  <CardHeader className="pb-3">
                    <div className="flex justify-between items-start">
                      <Badge className="mb-2">{article.category}</Badge>
                      <Button variant="ghost" size="icon">
                        <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                      </Button>
                    </div>
                    <CardTitle>{article.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="pb-3">
                    <div className="flex items-center gap-4 text-sm text-muted-foreground mb-3">
                      <div className="flex items-center gap-1">
                        <Calendar className="h-4 w-4" />
                        <span>{article.date}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Eye className="h-4 w-4" />
                        <span>{article.views}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <ThumbsUp className="h-4 w-4" />
                        <span>{article.likes}</span>
                      </div>
                    </div>
                  </CardContent>
                  <CardFooter className="pt-0 flex justify-between">
                    <div className="flex items-center gap-2">
                      <Avatar className="h-6 w-6">
                        <AvatarFallback>{article.author.name.substring(0, 2)}</AvatarFallback>
                      </Avatar>
                      <span className="text-sm">{article.author.name}</span>
                    </div>
                    <Button variant="ghost" size="sm">Read More</Button>
                  </CardFooter>
                </Card>
              ))}
            </div>

            <h2 className="text-xl font-semibold mb-4">Recent Articles</h2>
            <div className="space-y-4">
              {articles.filter(a => !a.isFeatured).map((article) => (
                <Card key={article.id} className="hover-scale overflow-hidden">
                  <div className="flex flex-col md:flex-row">
                    <CardHeader className="pb-3 flex-1">
                      <div className="flex justify-between items-start">
                        <Badge className="mb-2">{article.category}</Badge>
                      </div>
                      <CardTitle className="text-lg">{article.title}</CardTitle>
                    </CardHeader>
                    <CardFooter className="pt-3 md:pt-0 flex md:flex-col justify-between items-end md:w-48 md:border-l md:p-4">
                      <div className="flex items-center gap-2">
                        <Avatar className="h-6 w-6">
                          <AvatarFallback>{article.author.name.substring(0, 2)}</AvatarFallback>
                        </Avatar>
                        <span className="text-sm">{article.author.name}</span>
                      </div>
                      <div className="flex gap-3 text-sm text-muted-foreground">
                        <div className="flex items-center gap-1">
                          <Eye className="h-3 w-3" />
                          <span>{article.views}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <ThumbsUp className="h-3 w-3" />
                          <span>{article.likes}</span>
                        </div>
                      </div>
                      <Button variant="ghost" size="sm" className="ml-auto md:mt-2">
                        Read More
                      </Button>
                    </CardFooter>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </div>

        <div className="lg:w-1/4 space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Categories</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                {categories.map((category) => (
                  <div key={category.name} className="flex justify-between items-center group cursor-pointer hover:text-primary transition-colors">
                    <div className="flex items-center gap-2">
                      <Tag className="h-4 w-4" />
                      <span>{category.name}</span>
                    </div>
                    <Badge variant="outline">{category.count}</Badge>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Popular Articles</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {articles.slice(0, 3).map((article) => (
                  <div key={article.id} className="flex gap-3 group cursor-pointer">
                    <div className="flex-shrink-0 rounded-md bg-primary/10 p-2">
                      <BookOpenText className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-medium group-hover:text-primary transition-colors line-clamp-2">
                        {article.title}
                      </h4>
                      <div className="flex items-center gap-2 text-xs text-muted-foreground mt-1">
                        <div className="flex items-center gap-1">
                          <Eye className="h-3 w-3" />
                          <span>{article.views}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <ThumbsUp className="h-3 w-3" />
                          <span>{article.likes}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
            <CardFooter>
              <Button variant="ghost" size="sm" className="w-full">View All</Button>
            </CardFooter>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Top Contributors</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {Array.from({ length: 4 }).map((_, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <Avatar>
                      <AvatarFallback>{`C${i + 1}`}</AvatarFallback>
                    </Avatar>
                    <div>
                      <h4 className="font-medium">Contributor {i + 1}</h4>
                      <p className="text-xs text-muted-foreground">{10 - i} articles</p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </AppLayout>
  );
}
