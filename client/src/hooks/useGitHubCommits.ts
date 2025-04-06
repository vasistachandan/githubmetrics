import { useQuery } from "@tanstack/react-query";
import { GitCommit } from "@/types/github";

export function useGitHubCommits(username?: string) {
  return useQuery<GitCommit[]>({
    queryKey: [`/api/github/commits/${username}`],
    enabled: !!username,
  });
}
