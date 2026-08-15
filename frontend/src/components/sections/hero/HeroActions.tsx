import type { HeroContentData } from "@/types/hero";

import { ArrowUpRightIcon, DownloadIcon } from "./HeroIcons";
import styles from "./HeroSection.module.css";

interface HeroActionsProps {
  actions: HeroContentData["actions"];
}

export function HeroActions({ actions }: HeroActionsProps) {
  return (
    <div className={styles.actionPanel} aria-label="Hero actions" data-grid-ignore>
      <div className={styles.actionDecoration} aria-hidden="true">
        {Array.from({ length: 12 }).map((_, index) => (
          <span key={index} />
        ))}
      </div>

      <div className={styles.actions}>
        <a
          className={styles.primaryAction}
          href={actions.resume.href}
          aria-label={actions.resume.ariaLabel}
          download={actions.resume.download}
        >
          <span className={styles.actionText}>{actions.resume.label}</span>
          <span className={styles.actionIconBox} aria-hidden="true">
            <DownloadIcon className={styles.actionIcon} />
          </span>
        </a>

        <a
          className={styles.secondaryAction}
          href={actions.projects.href}
          aria-label={actions.projects.ariaLabel}
        >
          <span className={styles.actionText}>{actions.projects.label}</span>
          <span className={styles.actionIconBox} aria-hidden="true">
            <ArrowUpRightIcon className={styles.actionIcon} />
          </span>
        </a>
      </div>
    </div>
  );
}
