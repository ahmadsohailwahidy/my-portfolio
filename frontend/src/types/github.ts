export type GitHubToolStatus = "applied" | "growth";
export type GitHubRepositorySource = "live" | "fallback";

export interface GitHubDomain {
  index: string;
  title: string;
  description: string;
  signal: string;
}

export interface GitHubToolItem {
  name: string;
  status: GitHubToolStatus;
}

export interface GitHubToolGroup {
  label: string;
  items: readonly GitHubToolItem[];
}

export interface GitHubDevelopmentStep {
  index: string;
  title: string;
  description: string;
}

export interface GitHubInterest {
  index: string;
  title: string;
  description: string;
}

export interface GitHubRepositoryPreference {
  label: string;
  aliases: readonly string[];
}

export interface GitHubContentData {
  label: string;
  meta: string;
  heading: string;
  introduction: string;
  profileUrl: string;
  username: string;
  profileSummary: string;
  profileAction: string;
  repositoriesLabel: string;
  repositoriesHeading: string;
  repositoriesDescription: string;
  repositoryPreferences: readonly GitHubRepositoryPreference[];
  domainsLabel: string;
  domainsHeading: string;
  domainsDescription: string;
  domains: readonly GitHubDomain[];
  toolchainLabel: string;
  toolchainHeading: string;
  toolchainDescription: string;
  toolGroups: readonly GitHubToolGroup[];
  loopLabel: string;
  loopHeading: string;
  loopDescription: string;
  developmentLoop: readonly GitHubDevelopmentStep[];
  interestsLabel: string;
  interestsHeading: string;
  interestsDescription: string;
  interests: readonly GitHubInterest[];
  openSourceLabel: string;
  openSourceHeading: string;
  openSourceDescription: string;
}

export interface GitHubRepositoryViewModel {
  id: number;
  name: string;
  url: string;
  description: string;
  language: string | null;
  stars: number | null;
  pushedAt: string | null;
  isPriority: boolean;
}

export interface GitHubSnapshot {
  source: GitHubRepositorySource;
  repositories: readonly GitHubRepositoryViewModel[];
  publicRepositoryCount: number;
  languageCount: number;
  latestPush: string | null;
}
