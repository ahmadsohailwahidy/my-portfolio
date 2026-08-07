import { githubContent } from "@/content/github";
import { getGitHubSnapshot } from "@/lib/github";

import { GitHubIcon } from "./GitHubIcons";
import { GitHubRepositoryCard } from "./GitHubRepositoryCard";
import { GitHubReveal } from "./GitHubReveal";
import styles from "./GitHubSection.module.css";

const dateFormatter = new Intl.DateTimeFormat("en", {
  month: "short",
  day: "numeric",
  year: "numeric",
  timeZone: "UTC",
});

function formatDate(value: string | null): string {
  if (!value) {
    return "Awaiting public activity";
  }

  const date = new Date(value);

  if (Number.isNaN(date.getTime())) {
    return "Awaiting public activity";
  }

  return dateFormatter.format(date);
}

export async function GitHubSection() {
  const snapshot = await getGitHubSnapshot();
  const isLive = snapshot.source === "live";

  return (
    <section
      id="github"
      className={styles.section}
      aria-labelledby="github-heading"
      data-github-root
    >
      <GitHubReveal />

      <div className={styles.container}>
        <div className={styles.sectionBreak} aria-hidden="true">
          <span>06 / education complete</span>
          <i />
          <span>07 / development signal</span>
        </div>

        <header className={styles.sectionHeader} data-github-reveal>
          <div className={styles.phaseRail} aria-hidden="true">
            <span>PHASE</span>
            <strong>07</strong>
            <i />
            <small>CODE SIGNAL</small>
          </div>

          <div className={styles.headerMain}>
            <div className={styles.headerMeta}>
              <p>{githubContent.label}</p>
              <span aria-hidden="true">{"//"}</span>
              <p>{githubContent.meta}</p>
            </div>

            <h2 id="github-heading">{githubContent.heading}</h2>
            <p className={styles.introduction}>{githubContent.introduction}</p>

            <div className={styles.profileConsole}>
              <div className={styles.consoleBar}>
                <div className={styles.consoleDots} aria-hidden="true">
                  <i />
                  <i />
                  <i />
                </div>

                <span>github.profile</span>

                <span className={styles.liveState}>
                  <i aria-hidden="true" />
                  {isLive ? "live metadata" : "verified fallback"}
                </span>
              </div>

              <div className={styles.consoleBody}>
                <div className={styles.consoleCommand}>
                  <span aria-hidden="true">$</span>
                  <code>open github.com/{githubContent.username}</code>
                  <i aria-hidden="true" />
                </div>

                <p>{githubContent.profileSummary}</p>

                <div className={styles.profileMetrics}>
                  <div>
                    <span>Repository feed</span>
                    <strong>Verified public</strong>
                  </div>
                  <div>
                    <span>Refresh window</span>
                    <strong>6 hours</strong>
                  </div>
                  <div>
                    <span>Latest public push</span>
                    <strong>{formatDate(snapshot.latestPush)}</strong>
                  </div>
                </div>

                <a
                  className={styles.primaryAction}
                  href={githubContent.profileUrl}
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  <span>{githubContent.profileAction}</span>
                  <GitHubIcon name="arrow" />
                </a>
              </div>
            </div>
          </div>
        </header>

        <div className={styles.repositorySection} data-github-reveal>
          <div className={styles.subsectionHeader}>
            <div>
              <p>{githubContent.repositoriesLabel}</p>
              <h3>{githubContent.repositoriesHeading}</h3>
            </div>

            <p>{githubContent.repositoriesDescription}</p>
          </div>

          <div className={styles.repositorySignalLine}>
            <span>
              <i aria-hidden="true" />
              {isLive
                ? "GitHub API snapshot · refreshed every 6 hours"
                : "GitHub API unavailable · showing last verified fallback"}
            </span>
            <span>MAX / 04</span>
          </div>

          <div className={styles.repositoryGrid}>
            {snapshot.repositories.map((repository, index) => (
              <GitHubRepositoryCard
                key={repository.id}
                repository={repository}
                index={index}
              />
            ))}
          </div>

          <p className={styles.repositoryIntegrityNote}>
            <span aria-hidden="true">{"//"}</span>
            Only public repositories are displayed. Private, local, or
            unpublished projects are intentionally excluded until GitHub can
            verify their metadata.
          </p>
        </div>

        <div className={styles.architectureGrid}>
          <section className={styles.domainsPanel} data-github-reveal>
            <div className={styles.panelHeader}>
              <div className={styles.panelIcon} aria-hidden="true">
                <GitHubIcon name="layers" />
              </div>
              <div>
                <p>{githubContent.domainsLabel}</p>
                <h3>{githubContent.domainsHeading}</h3>
              </div>
            </div>

            <p className={styles.panelDescription}>
              {githubContent.domainsDescription}
            </p>

            <ol className={styles.domainList}>
              {githubContent.domains.map((domain) => (
                <li key={domain.index}>
                  <span className={styles.domainIndex}>{domain.index}</span>
                  <div>
                    <h4>{domain.title}</h4>
                    <p>{domain.description}</p>
                    <code>{domain.signal}</code>
                  </div>
                </li>
              ))}
            </ol>
          </section>

          <section className={styles.toolchainPanel} data-github-reveal>
            <div className={styles.panelHeader}>
              <div className={styles.panelIcon} aria-hidden="true">
                <GitHubIcon name="terminal" />
              </div>
              <div>
                <p>{githubContent.toolchainLabel}</p>
                <h3>{githubContent.toolchainHeading}</h3>
              </div>
            </div>

            <p className={styles.panelDescription}>
              {githubContent.toolchainDescription}
            </p>

            <div className={styles.toolLegend}>
              <span>
                <i className={styles.appliedDot} aria-hidden="true" />
                Applied
              </span>
              <span>
                <i className={styles.growthDot} aria-hidden="true" />
                Growth
              </span>
            </div>

            <div className={styles.toolLedger}>
              {githubContent.toolGroups.map((group) => (
                <div key={group.label} className={styles.toolRow}>
                  <span>{group.label}</span>
                  <div>
                    {group.items.map((item) => (
                      <span
                        key={item.name}
                        className={
                          item.status === "growth"
                            ? styles.growthTool
                            : styles.appliedTool
                        }
                      >
                        {item.name}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </section>
        </div>

        <section className={styles.loopSection} data-github-reveal>
          <div className={styles.loopHeadingBlock}>
            <p>{githubContent.loopLabel}</p>
            <h3>{githubContent.loopHeading}</h3>
            <span>{githubContent.loopDescription}</span>
          </div>

          <ol className={styles.developmentLoop}>
            {githubContent.developmentLoop.map((step) => (
              <li key={step.index}>
                <div className={styles.loopNode}>
                  <span>{step.index}</span>
                  <i aria-hidden="true" />
                </div>
                <h4>{step.title}</h4>
                <p>{step.description}</p>
              </li>
            ))}
          </ol>
        </section>

        <div className={styles.directionGrid}>
          <section className={styles.interestsSection} data-github-reveal>
            <div className={styles.directionHeading}>
              <p>{githubContent.interestsLabel}</p>
              <h3>{githubContent.interestsHeading}</h3>
              <span>{githubContent.interestsDescription}</span>
            </div>

            <ol className={styles.interestList}>
              {githubContent.interests.map((interest) => (
                <li key={interest.index}>
                  <span>{interest.index}</span>
                  <div>
                    <h4>{interest.title}</h4>
                    <p>{interest.description}</p>
                  </div>
                  <GitHubIcon name="arrow" aria-hidden="true" />
                </li>
              ))}
            </ol>
          </section>

          <aside className={styles.openSourceNote} data-github-reveal>
            <div className={styles.openSourceIcon} aria-hidden="true">
              <GitHubIcon name="spark" />
            </div>
            <p>{githubContent.openSourceLabel}</p>
            <h3>{githubContent.openSourceHeading}</h3>
            <span>{githubContent.openSourceDescription}</span>
            <div className={styles.openSourceFooter}>
              <span>next checkpoint</span>
              <i aria-hidden="true" />
              <span>contribute with context</span>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}
