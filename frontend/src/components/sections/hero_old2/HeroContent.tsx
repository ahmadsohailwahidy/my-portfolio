import { heroContent } from "@/content/hero";

import styles from "./HeroSection.module.css";

export function HeroContent() {
  return (
    <div className={styles.heroContent} data-grid-ignore>
      <div className={styles.topMeta}>
        <span>{heroContent.eyebrow}</span>
        <span>{heroContent.contextLabel}</span>
      </div>

      <div className={styles.centerIdentity}>
        <div className={styles.greetingRow}>
          <span className={styles.greetingRule} aria-hidden="true" />
          <span className={styles.greeting}>{heroContent.greeting}</span>
        </div>

        <span className={styles.identityName}>{heroContent.name}</span>

        <h1 id="hero-title" className={styles.headline}>
          <span className={styles.headlineLine}>
            <span className={styles.headlinePrimary}>
              {heroContent.primaryTitle[0]}
            </span>
          </span>
          <span className={styles.headlineLine}>
            <span className={styles.headlineAccent}>
              {heroContent.primaryTitle[1]}
            </span>
          </span>
        </h1>
      </div>

      <div className={styles.horizon} aria-hidden="true">
        <span className={styles.horizonBeam} />
        <span className={styles.horizonDash} />
        <svg
          className={styles.floorGrid}
          viewBox="0 0 748 82"
          preserveAspectRatio="none"
          focusable="false"
        >
          <defs>
            <linearGradient id="heroFloorVertical" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0" stopColor="#00dff1" stopOpacity="0.28" />
              <stop offset="1" stopColor="#00a1c4" stopOpacity="0.05" />
            </linearGradient>
            <linearGradient id="heroFloorHorizontal" x1="0" y1="0" x2="1" y2="0">
              <stop offset="0" stopColor="#00b8d4" stopOpacity="0" />
              <stop offset="0.5" stopColor="#00dff1" stopOpacity="0.29" />
              <stop offset="1" stopColor="#00b8d4" stopOpacity="0" />
            </linearGradient>
          </defs>
          <g stroke="url(#heroFloorVertical)" strokeWidth="1">
            {[0, 76, 152, 228, 304, 444, 520, 596, 672, 748].map((x) => (
              <line key={x} x1="374" y1="0" x2={x} y2="82" />
            ))}
          </g>
          <g stroke="url(#heroFloorHorizontal)" strokeWidth="1">
            {[10, 18, 29, 42, 57, 75].map((y) => (
              <line key={y} x1="0" y1={y} x2="748" y2={y} />
            ))}
          </g>
        </svg>
      </div>
    </div>
  );
}
