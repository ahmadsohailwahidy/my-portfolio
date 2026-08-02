import type { ExpertiseGrowthContent } from "@/types/expertise";

import { ExpertiseIcon } from "./ExpertiseIcons";
import styles from "./ExpertiseSection.module.css";

interface ExpertiseGrowthProps {
  readonly content: ExpertiseGrowthContent;
}

export function ExpertiseGrowth({ content }: ExpertiseGrowthProps) {
  return (
    <aside
      className={styles.growth}
      aria-labelledby="expertise-growth-title"
      data-grid-ignore
    >
      <div className={styles.growthIntro}>
        <p className={styles.growthLabel}>{content.label}</p>

        <h3 id="expertise-growth-title">{content.title}</h3>

        <p>{content.description}</p>
      </div>

      <ul className={styles.growthTracks}>
        {content.tracks.map((track, index) => (
          <li key={track.title}>
            <span className={styles.growthIndex} aria-hidden="true">
              {String(index + 1).padStart(2, "0")}
            </span>

            <span className={styles.growthIcon} aria-hidden="true">
              <ExpertiseIcon name={track.icon} />
            </span>

            <span className={styles.growthCopy}>
              <strong>{track.title}</strong>
              <span>{track.description}</span>
            </span>
          </li>
        ))}
      </ul>
    </aside>
  );
}
