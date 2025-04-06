import { pgTable, text, serial, integer, boolean, jsonb } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";

// User model
export const users = pgTable("users", {
  id: serial("id").primaryKey(),
  username: text("username").notNull().unique(),
  password: text("password").notNull(),
});

export const insertUserSchema = createInsertSchema(users).pick({
  username: true,
  password: true,
});

// GitHub API cache
export const githubCache = pgTable("github_cache", {
  id: serial("id").primaryKey(),
  githubUsername: text("github_username").notNull().unique(),
  userInfo: jsonb("user_info"),
  repositories: jsonb("repositories"),
  commits: jsonb("commits"),
  lastUpdated: integer("last_updated").notNull()
});

export const insertGithubCacheSchema = createInsertSchema(githubCache);

export type InsertUser = z.infer<typeof insertUserSchema>;
export type User = typeof users.$inferSelect;
export type GithubCache = typeof githubCache.$inferSelect;
export type InsertGithubCache = z.infer<typeof insertGithubCacheSchema>;
