import { useQuery } from "@tanstack/react-query";
import { GitHubUser } from "@/types/github";

export function useGitHubUser(username?: string) {
  return useQuery<GitHubUser>({
    queryKey: [`/api/github/user/${username}`],
    enabled: !!username,
  });
}
