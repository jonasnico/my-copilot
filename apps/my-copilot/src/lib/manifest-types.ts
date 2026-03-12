export type Domain = "platform" | "frontend" | "backend" | "auth" | "observability" | "general" | "testing" | "design";

export const VALID_DOMAINS: readonly Domain[] = [
  "platform",
  "frontend",
  "backend",
  "auth",
  "observability",
  "general",
  "testing",
  "design",
] as const;

export interface UsageExample {
  prompt: string;
  scenario: string;
}
