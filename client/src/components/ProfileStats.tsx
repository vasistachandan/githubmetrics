import { Users, Star, GitFork } from "lucide-react";

interface ProfileStatsProps {
  followers: number;
  repositories: number;
  stars: number;
}

export default function ProfileStats({ followers, repositories, stars }: ProfileStatsProps) {
  const formatNumber = (num: number): string => {
    if (num >= 1000000) {
      return (num / 1000000).toFixed(1) + 'M';
    } else if (num >= 1000) {
      return (num / 1000).toFixed(1) + 'k';
    }
    return num.toString();
  };

  return (
    <div className="flex items-center mt-4 space-x-3">
      <div className="flex items-center">
        <Users className="text-muted-foreground mr-2 h-4 w-4" />
        <span className="text-muted-foreground">{formatNumber(followers)}</span>
      </div>
      <div className="flex items-center">
        <Star className="text-muted-foreground mr-2 h-4 w-4" />
        <span className="text-muted-foreground">{formatNumber(stars)}</span>
      </div>
      <div className="flex items-center">
        <GitFork className="text-muted-foreground mr-2 h-4 w-4" />
        <span className="text-muted-foreground">{formatNumber(repositories)}</span>
      </div>
    </div>
  );
}
