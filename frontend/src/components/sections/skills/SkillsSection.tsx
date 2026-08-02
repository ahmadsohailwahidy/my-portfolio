import { skillsContent } from "@/content/skills";
import type { SkillStatus } from "@/types/skills";

import { SkillsCluster } from "./SkillsCluster";
import { SkillsRail } from "./SkillsRail";
import styles from "./SkillsSection.module.css";

const legendClasses: Record<SkillStatus, string> = {
  primary: styles.legendPrimary,
  applied: styles.legendApplied,
  supporting: styles.legendSupporting,
  foundation: styles.legendFoundation,
  growth: styles.legendGrowth,
};

export function SkillsSection() {
  return (
    <section
      id="skills"
      className={styles.section}
      aria-labelledby="skills-title"
    >
      <div className={styles.ambientOne} aria-hidden="true" />
      <div className={styles.ambientTwo} aria-hidden="true" />
      <div className={styles.coordinateField} aria-hidden="true" />

      <div className={styles.container}>
        <header className={styles.sectionHeader} data-grid-ignore>
          <div className={styles.headerMeta}>
            <span className={styles.headerAxis} aria-hidden="true" />
            <p className={styles.sectionLabel}>{skillsContent.label}</p>
            <p className={styles.sectionMeta}>{skillsContent.meta}</p>
          </div>

          <div className={styles.headerCopy}>
            <h2 id="skills-title">{skillsContent.heading}</h2>
            <p>{skillsContent.introduction}</p>
          </div>
        </header>

        <ul
          className={styles.legend}
          aria-label="Skill classification key"
          data-grid-ignore
        >
          {skillsContent.legend.map((item) => (
            <li key={item.status} className={legendClasses[item.status]}>
              <span className={styles.legendMarker} aria-hidden="true" />
              <span>
                <strong>{item.label}</strong>
                <small>{item.description}</small>
              </span>
            </li>
          ))}
        </ul>

        <SkillsRail content={skillsContent.foundation} variant="foundation" />

        <div className={styles.topology}>
          <svg
            className={styles.connectorMap}
            viewBox="0 0 1200 940"
            preserveAspectRatio="none"
            aria-hidden="true"
            focusable="false"
          >
            <defs>
              <linearGradient id="skills-path-cyan" x1="0" y1="0" x2="1" y2="1">
                <stop offset="0" stopColor="#22d3ee" stopOpacity="0.08" />
                <stop offset="0.48" stopColor="#67e8f9" stopOpacity="0.72" />
                <stop offset="1" stopColor="#34d399" stopOpacity="0.2" />
              </linearGradient>

              <linearGradient
                id="skills-path-emerald"
                x1="0"
                y1="1"
                x2="1"
                y2="0"
              >
                <stop offset="0" stopColor="#34d399" stopOpacity="0.12" />
                <stop offset="0.52" stopColor="#5ee7b5" stopOpacity="0.68" />
                <stop offset="1" stopColor="#22d3ee" stopOpacity="0.12" />
              </linearGradient>
            </defs>

            <path
              className={styles.connectorBase}
              d="M600 70V870M600 190H430M600 190H770M600 665H430M600 665H770"
            />

            <path
              className={styles.connectorActive}
              d="M600 70V870M600 190H430M600 190H770"
              stroke="url(#skills-path-cyan)"
            />

            <path
              className={styles.connectorActiveSecondary}
              d="M600 430V870M600 665H430M600 665H770"
              stroke="url(#skills-path-emerald)"
            />
          </svg>

          <div className={styles.stackSpine} aria-hidden="true">
            <span className={styles.spineLine} />

            <span className={styles.spineNode} data-node="01">
              Interface
            </span>

            <span className={styles.spineNode} data-node="02">
              Application
            </span>

            <span className={styles.spineNode} data-node="03">
              Data
            </span>

            <span className={styles.spineNode} data-node="04">
              Insight
            </span>
          </div>

          {skillsContent.clusters.map((cluster) => (
            <SkillsCluster key={cluster.id} cluster={cluster} />
          ))}
        </div>

        <SkillsRail content={skillsContent.delivery} variant="delivery" />
      </div>
    </section>
  );
}
