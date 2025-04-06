import { Fragment } from "react";
import { useParams, useLocation } from "wouter";
import { useToast } from "@/hooks/use-toast";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import RepositoryCard from "@/components/RepositoryCard";
import ProfileStats from "@/components/ProfileStats";
import LanguageBar from "@/components/LanguageBar";
import CommitActivityChart from "@/components/CommitActivityChart";
import LoadingSpinner from "@/components/LoadingSpinner";
import ErrorDisplay from "@/components/ErrorDisplay";
import { useGitHubUser } from "@/hooks/useGitHubUser";
import { useGitHubRepos } from "@/hooks/useGitHubRepos";
import { useGitHubCommits } from "@/hooks/useGitHubCommits";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useState } from "react";

export default function UserProfile() {
  const { username } = useParams<{ username: string }>();
  const [, navigate] = useLocation();
  const { toast } = useToast();
  const [sortBy, setSortBy] = useState<"stars" | "updated" | "name">("stars");

  // Fetch GitHub user data
  const {
    data: userData,
    isLoading: userLoading,
    error: userError,
  } = useGitHubUser(username);

  // Fetch GitHub repositories
  const {
    data: repoData,
    isLoading: reposLoading,
    error: reposError,
  } = useGitHubRepos(username);

  // Fetch GitHub commits
  const {
    data: commitData,
    isLoading: commitsLoading,
    error: commitsError,
  } = useGitHubCommits(username);

  const isLoading = userLoading || reposLoading || commitsLoading;
  const hasError = userError || reposError || commitsError;

  // Calculate language stats
  const languages = repoData?.reduce((acc: Record<string, number>, repo) => {
    if (repo.language) {
      acc[repo.language] = (acc[repo.language] || 0) + 1;
    }
    return acc;
  }, {});

  const totalLanguages = Object.values(languages || {}).reduce(
    (sum, count) => sum + count,
    0
  );

  const languagePercentages = Object.entries(languages || {}).map(
    ([name, count]) => ({
      name,
      percentage: Math.round((count / totalLanguages) * 100),
    })
  );

  // Sort repositories
  const sortedRepos = [...(repoData || [])].sort((a, b) => {
    if (sortBy === "stars") {
      return b.stargazers_count - a.stargazers_count;
    } else if (sortBy === "updated") {
      return new Date(b.updated_at).getTime() - new Date(a.updated_at).getTime();
    } else {
      return a.name.localeCompare(b.name);
    }
  });

  if (hasError) {
    return (
      <Fragment>
        <Header />
        <main className="container mx-auto px-4 py-16 min-h-screen">
          <ErrorDisplay 
            message={
              (userError?.message || reposError?.message || commitsError?.message) || 
              "Failed to fetch GitHub data. Please try again."
            } 
            onRetry={() => navigate("/")}
          />
        </main>
        <Footer />
      </Fragment>
    );
  }

  return (
    <Fragment>
      <Header />
      <main className="container mx-auto px-4 py-16 min-h-screen">
        {isLoading ? (
          <LoadingSpinner />
        ) : (
          <div className="max-w-5xl mx-auto">
            <Card className="bg-secondary border border-border overflow-hidden shadow-xl">
              <div className="flex flex-col md:flex-row">
                {/* User Profile Section */}
                <div className="md:w-1/3 p-6 border-b md:border-b-0 md:border-r border-border">
                  <div className="flex flex-col items-center text-center">
                    <img
                      src={userData?.avatar_url}
                      alt={`${username}'s profile picture`}
                      className="w-32 h-32 rounded-full border-4 border-primary"
                    />
                    <h3 className="mt-4 text-xl font-bold text-white">{username}</h3>
                    <p className="text-muted-foreground mt-1">{userData?.name || ""}</p>
                    <p className="text-muted-foreground mt-1">{userData?.bio || ""}</p>
                    
                    <ProfileStats
                      followers={userData?.followers || 0}
                      repositories={userData?.public_repos || 0}
                      stars={
                        repoData?.reduce(
                          (sum, repo) => sum + repo.stargazers_count,
                          0
                        ) || 0
                      }
                    />
                    
                    <div className="mt-6 w-full">
                      <h4 className="text-sm font-medium text-muted-foreground uppercase tracking-wider mb-2">
                        Top Languages
                      </h4>
                      <LanguageBar languages={languagePercentages.slice(0, 5)} />
                      <div className="flex justify-between mt-2 text-xs text-muted-foreground">
                        {languagePercentages.slice(0, 3).map(lang => (
                          <span key={lang.name}>
                            {lang.name} {lang.percentage}%
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Repository List Section */}
                <div className="md:w-2/3 p-6">
                  <div className="flex justify-between items-center mb-4">
                    <h4 className="text-white font-semibold">Popular Repositories</h4>
                    <div className="flex space-x-2">
                      <Select value={sortBy} onValueChange={(value) => setSortBy(value as any)}>
                        <SelectTrigger className="w-[120px] h-8 text-xs bg-muted text-muted-foreground">
                          <SelectValue placeholder="Sort: Stars" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="stars">Sort: Stars</SelectItem>
                          <SelectItem value="updated">Sort: Updated</SelectItem>
                          <SelectItem value="name">Sort: Name</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                  
                  <div className="space-y-3 max-h-[400px] overflow-y-auto custom-scrollbar pr-2">
                    {sortedRepos?.slice(0, 10).map((repo) => (
                      <RepositoryCard key={repo.id} repository={repo} />
                    ))}
                  </div>
                  
                  {sortedRepos && sortedRepos.length > 10 && (
                    <div className="mt-4 text-center">
                      <Button variant="link" className="text-primary">
                        View all repositories
                      </Button>
                    </div>
                  )}
                </div>
              </div>
              
              <div className="p-6 border-t border-border">
                <h4 className="text-white font-semibold mb-4">Commit Activity</h4>
                <CommitActivityChart commitData={commitData || []} />
              </div>
            </Card>
          </div>
        )}
      </main>
      <Footer />
    </Fragment>
  );
}
