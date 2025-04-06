import { Card } from "@/components/ui/card";
import { Star, GitFork, ArrowRight } from "lucide-react";
import { GitHubRepo } from "@/types/github";
import { Button } from "@/components/ui/button";
import { formatDistanceToNow } from "date-fns";

interface RepositoryCardProps {
  repository: GitHubRepo;
}

// Map of languages to their typical colors on GitHub
const languageColors: Record<string, string> = {
  JavaScript: "#f1e05a",
  TypeScript: "#3178c6",
  HTML: "#e34c26",
  CSS: "#563d7c",
  Python: "#3572A5",
  Java: "#b07219",
  Ruby: "#701516",
  PHP: "#4F5D95",
  Go: "#00ADD8",
  Swift: "#F05138",
  Rust: "#dea584",
  C: "#555555",
  "C++": "#f34b7d",
  "C#": "#178600",
  Shell: "#89e051",
  Vue: "#41b883",
  Kotlin: "#A97BFF",
  Dart: "#00B4AB",
  Scala: "#c22d40",
  Elixir: "#6e4a7e",
  Clojure: "#db5855",
  Haskell: "#5e5086",
  R: "#198CE7",
  Perl: "#0298c3",
  Lua: "#000080",
  CoffeeScript: "#244776",
  Groovy: "#e69f56",
  "Objective-C": "#438eff",
  Assembly: "#6E4C13",
};

// Get a color for a language, with fallback
const getLanguageColor = (language: string | null) => {
  if (!language) return "#6c757d";
  return languageColors[language] || "#6c757d";
};

export default function RepositoryCard({ repository }: RepositoryCardProps) {
  const formatUpdatedTime = (dateString: string) => {
    return `Updated ${formatDistanceToNow(new Date(dateString), { addSuffix: true })}`;
  };

  return (
    <div className="border border-border rounded-lg p-4 hover:border-primary transition-all">
      <div className="flex justify-between items-start">
        <div>
          <h5 className="text-primary font-medium">{repository.name}</h5>
          <p className="text-sm text-foreground mt-1 line-clamp-2">
            {repository.description || "No description provided"}
          </p>
        </div>
        <div className="flex items-center space-x-3 text-sm">
          <div className="flex items-center">
            <Star className="h-4 w-4 text-[#F1E05A] mr-1" />
            <span className="text-foreground">{repository.stargazers_count.toLocaleString()}</span>
          </div>
          <div className="flex items-center">
            <GitFork className="h-4 w-4 text-foreground mr-1" />
            <span className="text-foreground">{repository.forks_count.toLocaleString()}</span>
          </div>
        </div>
      </div>
      <div className="mt-3 flex items-center justify-between">
        <div className="flex items-center space-x-2">
          {repository.language && (
            <span 
              className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium"
              style={{ 
                backgroundColor: `${getLanguageColor(repository.language)}20`, 
                color: getLanguageColor(repository.language) 
              }}
            >
              <span 
                className="w-2 h-2 rounded-full mr-1"
                style={{ backgroundColor: getLanguageColor(repository.language) }}
              ></span>
              {repository.language}
            </span>
          )}
          <span className="text-xs text-foreground">{formatUpdatedTime(repository.updated_at)}</span>
        </div>
        <a 
          href={repository.html_url} 
          target="_blank" 
          rel="noopener noreferrer"
          className="text-xs text-primary hover:underline transition-all inline-flex items-center"
        >
          View details
          <ArrowRight className="ml-1 h-3 w-3" />
        </a>
      </div>
    </div>
  );
}
