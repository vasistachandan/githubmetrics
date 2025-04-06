import { useMemo } from "react";

interface Language {
  name: string;
  percentage: number;
}

interface LanguageBarProps {
  languages: Language[];
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
const getLanguageColor = (language: string) => {
  return languageColors[language] || "#6c757d";
};

export default function LanguageBar({ languages }: LanguageBarProps) {
  // Sort languages by percentage (descending)
  const sortedLanguages = useMemo(() => {
    return [...languages].sort((a, b) => b.percentage - a.percentage);
  }, [languages]);

  if (languages.length === 0) {
    return (
      <div className="w-full h-4 bg-muted rounded-full overflow-hidden">
        <div className="bg-muted-foreground h-full w-full opacity-20"></div>
      </div>
    );
  }

  return (
    <div className="w-full h-4 bg-muted rounded-full overflow-hidden flex">
      {sortedLanguages.map((lang, index) => (
        <div
          key={index}
          className="h-full"
          style={{
            width: `${lang.percentage}%`,
            backgroundColor: getLanguageColor(lang.name),
          }}
          title={`${lang.name}: ${lang.percentage}%`}
        ></div>
      ))}
    </div>
  );
}
