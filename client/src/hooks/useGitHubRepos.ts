import { useQuery } from "@tanstack/react-query";
import { GitHubRepo } from "@/types/github";

export function useGitHubRepos(username?: string) {
  return useQuery<GitHubRepo[]>({
    queryKey: [`/api/github/repos/${username}`],
    enabled: !!username,
  });
}
