import type { HeroContentData } from "@/types/hero";

import { ArrowUpRightIcon, DownloadIcon } from "./HeroIcons";
import styles from "./HeroSection.module.css";

interface HeroActionsProps {
  actions: HeroContentData["actions"];
}

export function HeroActions({ actions }: HeroActionsProps) {
  return (
    <div className={styles.actions}>
      <a
        className={styles.primaryAction}
        href={actions.projects.href}
        aria-label={actions.projects.ariaLabel}
      >
        <span>{actions.projects.label}</span>
        <ArrowUpRightIcon className={styles.actionIcon} />
      </a>

      <a
        className={styles.secondaryAction}
        href={actions.resume.href}
        aria-label={actions.resume.ariaLabel}
        download={actions.resume.download}
      >
        <DownloadIcon className={styles.actionIcon} />
        <span>{actions.resume.label}</span>
      </a>
    </div>
  );
}
