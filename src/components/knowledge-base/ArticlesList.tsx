
import { ChevronRight } from "lucide-react";

type ArticleCategory = "getting-started" | "strategies" | "features" | "risk" | "analysis" | "faq";

interface ArticlesListProps {
  category: ArticleCategory;
}

export function ArticlesList({ category }: ArticlesListProps) {
  // Get articles based on category
  const articles = getSampleArticles(category);

  return (
    <ul className="space-y-2">
      {articles.map((article) => (
        <li key={article.id}>
          <a 
            href="#" 
            className="flex items-center justify-between text-sm hover:underline"
          >
            <span>{article.title}</span>
            <ChevronRight className="h-4 w-4" />
          </a>
        </li>
      ))}
      <li className="pt-2">
        <a 
          href="#" 
          className="text-sm font-medium text-primary hover:underline"
        >
          View all
        </a>
      </li>
    </ul>
  );
}

function getSampleArticles(category: ArticleCategory) {
  switch (category) {
    case "getting-started":
      return [
        { id: "gs1", title: "Creating your first account" },
        { id: "gs2", title: "Platform navigation guide" },
        { id: "gs3", title: "Setting up your profile" },
        { id: "gs4", title: "Understanding the dashboard" }
      ];
    case "strategies":
      return [
        { id: "st1", title: "Momentum trading basics" },
        { id: "st2", title: "Position sizing strategies" },
        { id: "st3", title: "Technical analysis patterns" },
        { id: "st4", title: "Fundamental analysis guide" }
      ];
    case "features":
      return [
        { id: "ft1", title: "Using the trading simulator" },
        { id: "ft2", title: "Advanced charting tools" },
        { id: "ft3", title: "Setting up alerts and notifications" },
        { id: "ft4", title: "Portfolio tracking features" }
      ];
    case "risk":
      return [
        { id: "rk1", title: "Risk management principles" },
        { id: "rk2", title: "Stop-loss strategies" },
        { id: "rk3", title: "Diversification techniques" },
        { id: "rk4", title: "Risk-reward ratio explained" }
      ];
    case "analysis":
      return [
        { id: "an1", title: "Reading market data" },
        { id: "an2", title: "Economic indicators explained" },
        { id: "an3", title: "Trend analysis fundamentals" },
        { id: "an4", title: "Volatility assessment" }
      ];
    case "faq":
      return [
        { id: "fq1", title: "Account security questions" },
        { id: "fq2", title: "Payment and withdrawals" },
        { id: "fq3", title: "Trading hours and limitations" },
        { id: "fq4", title: "Technical support assistance" }
      ];
    default:
      return [];
  }
}
