import { skillsContent } from "@/content/skills";
import type { SkillStatus } from "@/types/skills";

import { SkillsCluster } from "./SkillsCluster";
import { SkillsFlowController } from "./SkillsFlowController";
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

        <div className={styles.topology} data-skills-topology>
          <SkillsFlowController />

          <svg
            className={styles.connectorMap}
            data-flow-map
            viewBox="0 0 1 1"
            preserveAspectRatio="none"
            aria-hidden="true"
            focusable={false}
          >
            <defs>
              <linearGradient id="skills-flow-cyan" x1="0" y1="0" x2="1" y2="1">
                <stop offset="0" stopColor="#22d3ee" stopOpacity="0.2" />
                <stop offset="0.48" stopColor="#d8fbff" stopOpacity="0.96" />
                <stop offset="1" stopColor="#34d399" stopOpacity="0.62" />
              </linearGradient>

              <linearGradient
                id="skills-flow-emerald"
                x1="0"
                y1="1"
                x2="1"
                y2="0"
              >
                <stop offset="0" stopColor="#34d399" stopOpacity="0.28" />
                <stop offset="0.52" stopColor="#bafbe2" stopOpacity="0.95" />
                <stop offset="1" stopColor="#22d3ee" stopOpacity="0.55" />
              </linearGradient>
            </defs>

            <path
              className={styles.connectorBase}
              data-flow-base="1"
              d="M 0 0"
            />
            <path
              className={styles.connectorBase}
              data-flow-base="2"
              d="M 0 0"
            />
            <path
              className={styles.connectorBase}
              data-flow-base="3"
              d="M 0 0"
            />

            <path
              className={styles.flowSegment}
              data-flow-segment="1"
              pathLength="1"
              d="M 0 0"
              stroke="url(#skills-flow-cyan)"
            />
            <path
              className={styles.flowSegment}
              data-flow-segment="2"
              pathLength="1"
              d="M 0 0"
              stroke="url(#skills-flow-emerald)"
            />
            <path
              className={styles.flowSegment}
              data-flow-segment="3"
              pathLength="1"
              d="M 0 0"
              stroke="url(#skills-flow-cyan)"
            />
          </svg>

          <div className={styles.stackSpine} aria-hidden="true">
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
