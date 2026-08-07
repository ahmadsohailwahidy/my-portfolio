import type { CSSProperties } from "react";

import { GitHubIcon } from "./GitHubIcons";
import styles from "./GitHubSection.module.css";
import type { GitHubRepositoryViewModel } from "@/types/github";

interface GitHubRepositoryCardProps {
  repository: GitHubRepositoryViewModel;
  index: number;
}

const dateFormatter = new Intl.DateTimeFormat("en", {
  month: "short",
  day: "numeric",
  year: "numeric",
  timeZone: "UTC",
});

function formatDate(value: string | null): string {
  if (!value) {
    return "Metadata pending";
  }

  const date = new Date(value);

  if (Number.isNaN(date.getTime())) {
    return "Metadata pending";
  }

  return dateFormatter.format(date);
}

export function GitHubRepositoryCard({
  repository,
  index,
}: GitHubRepositoryCardProps) {
  return (
    <article
      className={styles.repositoryCard}
      data-github-reveal
      style={{ "--repo-order": index } as CSSProperties}
    >
      <div className={styles.repositoryCardTopline}>
        <span className={styles.repositoryIndex}>
          {String(index + 1).padStart(2, "0")}
        </span>

        <span className={styles.repositoryState}>
          <i aria-hidden="true" />
          {repository.isPriority ? "Priority match" : "Public repository"}
        </span>
      </div>

      <div className={styles.repositoryTitleRow}>
        <div className={styles.repositoryIcon} aria-hidden="true">
          <GitHubIcon name="branch" />
        </div>

        <h3>{repository.name}</h3>
      </div>

      <p className={styles.repositoryDescription}>{repository.description}</p>

      <dl className={styles.repositoryMetadata}>
        <div>
          <dt>Language</dt>
          <dd>
            <span className={styles.languageDot} aria-hidden="true" />
            {repository.language ?? "Not detected"}
          </dd>
        </div>

        <div>
          <dt>Stars</dt>
          <dd>
            <GitHubIcon name="star" />
            {repository.stars ?? "—"}
          </dd>
        </div>

        <div>
          <dt>Last push</dt>
          <dd>{formatDate(repository.pushedAt)}</dd>
        </div>
      </dl>

      <a
        className={styles.repositoryLink}
        href={repository.url}
        target="_blank"
        rel="noreferrer noopener"
        aria-label={`Open ${repository.name} repository on GitHub`}
      >
        <span>Open repository</span>
        <GitHubIcon name="external" />
      </a>
    </article>
  );
}
