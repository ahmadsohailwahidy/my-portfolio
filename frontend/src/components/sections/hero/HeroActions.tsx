import type { HeroContentData } from "@/types/hero";

import { ArrowUpRightIcon, DownloadIcon } from "./HeroIcons";
import styles from "./HeroSection.module.css";

interface HeroActionsProps {
  actions: HeroContentData["actions"];
}

export function HeroActions({ actions }: HeroActionsProps) {
  return (
    <div className={styles.actions} aria-label="Hero actions">
      <a
        className={styles.primaryAction}
        href={actions.projects.href}
        aria-label={actions.projects.ariaLabel}
      >
        <span className={styles.actionText}>{actions.projects.label}</span>
        <span className={styles.actionIconBox} aria-hidden="true">
          <ArrowUpRightIcon className={styles.actionIcon} />
        </span>
      </a>

      <a
        className={styles.secondaryAction}
        href={actions.resume.href}
        aria-label={actions.resume.ariaLabel}
        download={actions.resume.download}
      >
        <span className={styles.actionIconBox} aria-hidden="true">
          <DownloadIcon className={styles.actionIcon} />
        </span>
        <span className={styles.actionText}>{actions.resume.label}</span>
      </a>
    </div>
  );
}
