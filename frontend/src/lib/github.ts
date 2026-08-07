import { githubContent } from "@/content/github";
import type {
  GitHubRepositoryViewModel,
  GitHubSnapshot,
} from "@/types/github";

const GITHUB_REPOSITORIES_ENDPOINT =
  "https://api.github.com/users/ahmadsohailwahidy/repos?per_page=100&sort=updated";
const GITHUB_REVALIDATE_SECONDS = 6 * 60 * 60;
const MAX_REPOSITORIES = 4;

type NextFetchInit = RequestInit & {
  next?: {
    revalidate: number;
  };
};

type GitHubApiRepository = {
  id: number;
  name: string;
  html_url: string;
  description: string | null;
  fork: boolean;
  archived: boolean;
  disabled: boolean;
  language: string | null;
  stargazers_count: number;
  pushed_at: string | null;
};

const fallbackRepository: GitHubRepositoryViewModel = {
  id: 1306039819,
  name: "my-portfolio",
  url: "https://github.com/ahmadsohailwahidy/my-portfolio",
  description:
    "Source code for my personal portfolio and its evolving Next.js frontend architecture.",
  language: "CSS",
  stars: 0,
  pushedAt: "2026-08-07T18:34:49Z",
  isPriority: false,
};

function normalizeRepositoryName(value: string): string {
  return value
    .trim()
    .toLowerCase()
    .replace(/[_\s]+/g, "-")
    .replace(/[^a-z0-9-]/g, "")
    .replace(/-+/g, "-");
}

function getPriorityIndex(repositoryName: string): number {
  const normalizedName = normalizeRepositoryName(repositoryName);

  return githubContent.repositoryPreferences.findIndex((preference) =>
    preference.aliases.some((alias) => {
      const normalizedAlias = normalizeRepositoryName(alias);
      return (
        normalizedName === normalizedAlias ||
        normalizedName.includes(normalizedAlias) ||
        normalizedAlias.includes(normalizedName)
      );
    }),
  );
}

function toViewModel(repository: GitHubApiRepository): GitHubRepositoryViewModel {
  const priorityIndex = getPriorityIndex(repository.name);

  return {
    id: repository.id,
    name: repository.name,
    url: repository.html_url,
    description:
      repository.description?.trim() ||
      (repository.name === "my-portfolio"
        ? "Source code for my personal portfolio and its evolving Next.js frontend architecture."
        : "Public repository from my ongoing software-development work."),
    language: repository.language,
    stars: repository.stargazers_count,
    pushedAt: repository.pushed_at,
    isPriority: priorityIndex >= 0,
  };
}

function selectRepositories(
  repositories: readonly GitHubApiRepository[],
): GitHubRepositoryViewModel[] {
  const candidates = repositories.filter(
    (repository) =>
      !repository.fork && !repository.archived && !repository.disabled,
  );

  const priorityRepositories = candidates
    .filter((repository) => getPriorityIndex(repository.name) >= 0)
    .sort(
      (first, second) =>
        getPriorityIndex(first.name) - getPriorityIndex(second.name),
    );

  const priorityIds = new Set(priorityRepositories.map((repository) => repository.id));
  const recentRepositories = candidates
    .filter((repository) => !priorityIds.has(repository.id))
    .sort((first, second) => {
      const firstTime = first.pushed_at ? Date.parse(first.pushed_at) : 0;
      const secondTime = second.pushed_at ? Date.parse(second.pushed_at) : 0;
      return secondTime - firstTime;
    });

  return [...priorityRepositories, ...recentRepositories]
    .slice(0, MAX_REPOSITORIES)
    .map(toViewModel);
}

function createFallbackSnapshot(): GitHubSnapshot {
  return {
    source: "fallback",
    repositories: [fallbackRepository],
    publicRepositoryCount: 1,
    languageCount: 1,
    latestPush: fallbackRepository.pushedAt,
  };
}

export async function getGitHubSnapshot(): Promise<GitHubSnapshot> {
  try {
    const requestInit: NextFetchInit = {
      headers: {
        Accept: "application/vnd.github+json",
        "User-Agent": "Ahmad-Sohail-Wahidy-Portfolio",
        "X-GitHub-Api-Version": "2022-11-28",
      },
      next: {
        revalidate: GITHUB_REVALIDATE_SECONDS,
      },
      signal: AbortSignal.timeout(2500),
    };

    const response = await fetch(GITHUB_REPOSITORIES_ENDPOINT, requestInit);

    if (!response.ok) {
      return createFallbackSnapshot();
    }

    const repositories = (await response.json()) as GitHubApiRepository[];

    if (!Array.isArray(repositories)) {
      return createFallbackSnapshot();
    }

    const activeRepositories = repositories.filter(
      (repository) =>
        !repository.fork && !repository.archived && !repository.disabled,
    );
    const selectedRepositories = selectRepositories(repositories);
    const languages = new Set(
      activeRepositories
        .map((repository) => repository.language)
        .filter((language): language is string => Boolean(language)),
    );
    const latestPush = activeRepositories.reduce<string | null>(
      (latest, repository) => {
        if (!repository.pushed_at) {
          return latest;
        }

        if (!latest || Date.parse(repository.pushed_at) > Date.parse(latest)) {
          return repository.pushed_at;
        }

        return latest;
      },
      null,
    );

    return {
      source: "live",
      repositories:
        selectedRepositories.length > 0
          ? selectedRepositories
          : createFallbackSnapshot().repositories,
      publicRepositoryCount: activeRepositories.length,
      languageCount: languages.size,
      latestPush,
    };
  } catch {
    return createFallbackSnapshot();
  }
}
