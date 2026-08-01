import type { AboutHighlight } from "@/types/about";

import styles from "./AboutSection.module.css";

interface AboutHighlightsProps {
  highlights: readonly AboutHighlight[];
}

export function AboutHighlights({ highlights }: AboutHighlightsProps) {
  return (
    <dl
      className={styles.highlights}
      aria-label="Professional profile highlights"
    >
      {highlights.map((highlight, index) => (
        <div className={styles.highlight} key={highlight.label}>
          <div className={styles.highlightIndex} aria-hidden="true">
            {String(index + 1).padStart(2, "0")}
          </div>
          <div>
            <dt>{highlight.label}</dt>
            <dd className={styles.highlightValue}>{highlight.value}</dd>
            <dd className={styles.highlightDetail}>{highlight.detail}</dd>
          </div>
        </div>
      ))}
    </dl>
  );
}
