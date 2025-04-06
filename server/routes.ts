import type { Express, Request, Response } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import axios from "axios";

export async function registerRoutes(app: Express): Promise<Server> {
  // GitHub API endpoints
  const GITHUB_API_BASE = "https://api.github.com";
  // Use GitHub token from environment variables if available
  const GITHUB_TOKEN = process.env.GITHUB_TOKEN;

  // Common headers for GitHub API requests
  const githubHeaders = {
    Accept: "application/vnd.github.v3+json",
    "User-Agent": "GitHub-Metrics-App",
    ...(GITHUB_TOKEN && { Authorization: `token ${GITHUB_TOKEN}` })
  };

  // GitHub User endpoint
  app.get("/api/github/user/:username", async (req: Request, res: Response) => {
    try {
      const { username } = req.params;
      
      if (!username) {
        return res.status(400).json({ message: "Username is required" });
      }
      
      const response = await axios.get(`${GITHUB_API_BASE}/users/${username}`, {
        headers: githubHeaders
      });
      
      res.json(response.data);
    } catch (error) {
      if (axios.isAxiosError(error) && error.response) {
        return res.status(error.response.status).json({
          message: error.response.data.message || "Error fetching GitHub user"
        });
      }
      
      res.status(500).json({ message: "Internal server error" });
    }
  });

  // GitHub Repositories endpoint
  app.get("/api/github/repos/:username", async (req: Request, res: Response) => {
    try {
      const { username } = req.params;
      
      if (!username) {
        return res.status(400).json({ message: "Username is required" });
      }
      
      // Fetch up to 300 repositories using pagination
      // (GitHub API has a per_page limit of 100)
      const allRepos = [];
      let page = 1;
      let hasMorePages = true;
      const maxPages = 3; // Limit to 3 pages (300 repos) to avoid excessive API calls
      
      while (hasMorePages && page <= maxPages) {
        const response = await axios.get(`${GITHUB_API_BASE}/users/${username}/repos`, {
          params: {
            sort: "updated",
            per_page: 100,
            page: page
          },
          headers: githubHeaders
        });
        
        if (response.data.length > 0) {
          allRepos.push(...response.data);
          page++;
        } else {
          hasMorePages = false;
        }
      }
      
      res.json(allRepos);
    } catch (error) {
      if (axios.isAxiosError(error) && error.response) {
        return res.status(error.response.status).json({
          message: error.response.data.message || "Error fetching repositories"
        });
      }
      
      res.status(500).json({ message: "Internal server error" });
    }
  });

  // GitHub Commits endpoint (for top repos)
  app.get("/api/github/commits/:username", async (req: Request, res: Response) => {
    try {
      const { username } = req.params;
      
      if (!username) {
        return res.status(400).json({ message: "Username is required" });
      }
      
      // First get user's repos
      const reposResponse = await axios.get(`${GITHUB_API_BASE}/users/${username}/repos`, {
        params: {
          sort: "updated",
          per_page: 5 // Get top 5 most recently updated repos
        },
        headers: githubHeaders
      });
      
      const repos = reposResponse.data;
      
      // Get commits for each repo (last year)
      const oneYearAgo = new Date();
      oneYearAgo.setFullYear(oneYearAgo.getFullYear() - 1);
      
      const commitPromises = repos.map(async (repo: any) => {
        try {
          const commitsResponse = await axios.get(
            `${GITHUB_API_BASE}/repos/${username}/${repo.name}/commits`,
            {
              params: {
                since: oneYearAgo.toISOString(),
                per_page: 100
              },
              headers: githubHeaders
            }
          );
          
          return commitsResponse.data;
        } catch (error) {
          // Skip if we can't get commits for a repo
          return [];
        }
      });
      
      const commitsArrays = await Promise.all(commitPromises);
      const allCommits = commitsArrays.flat();
      
      res.json(allCommits);
    } catch (error) {
      if (axios.isAxiosError(error) && error.response) {
        return res.status(error.response.status).json({
          message: error.response.data.message || "Error fetching commits"
        });
      }
      
      res.status(500).json({ message: "Internal server error" });
    }
  });

  const httpServer = createServer(app);

  return httpServer;
}
