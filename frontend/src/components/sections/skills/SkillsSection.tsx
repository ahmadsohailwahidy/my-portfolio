import { skillsContent } from "@/content/skills";

import { SkillsCluster } from "./SkillsCluster";
import { SkillsFlowController } from "./SkillsFlowController";
import styles from "./SkillsSection.module.css";

export function SkillsSection() {
  return (
    <section
      id="skills"
      className={styles.section}
      aria-labelledby="skills-title"
    >
      <div className={styles.ambientOne} aria-hidden="true" />
      <div className={styles.ambientTwo} aria-hidden="true" />

      <div className={styles.container}>
        <div className={styles.topology} data-skills-topology>
          <SkillsFlowController />

          <div className={styles.worldGrid} aria-hidden="true" />
          <div className={styles.hudLeft} aria-hidden="true" />
          <div className={styles.hudRight} aria-hidden="true" />
          <div className={styles.hudBottomLeft} aria-hidden="true" />
          <div className={styles.hudBottomRight} aria-hidden="true" />

          <header className={styles.introPanel} data-grid-ignore>
            <div className={styles.headerMeta}>
              <span className={styles.headerAxis} aria-hidden="true" />
              <p className={styles.sectionLabel}>{skillsContent.label}</p>
              <p className={styles.sectionMeta}>{skillsContent.meta}</p>
            </div>

            <div className={styles.headerCopy}>
              <h2 id="skills-title">
                {skillsContent.heading} <span>{skillsContent.accentWord}</span>
              </h2>
              <p>{skillsContent.introduction}</p>
            </div>
          </header>

          <div className={styles.stackSpine} aria-hidden="true">
            <div className={styles.spineTopRings} />
            <div className={styles.spineTriangle} />
            <div className={styles.spineBeam} />

            {skillsContent.clusters.map((cluster) => (
              <span
                key={cluster.id}
                className={`${styles.spineNode} ${styles[`spineNode${cluster.index}`]}`}
              >
                <span className={styles.spineNodeOuter} />
                <span className={styles.spineNodeMiddle} />
                <span className={styles.spineNodeInner}>
                  <strong>{cluster.index}</strong>
                  <small>LAYER</small>
                </span>
              </span>
            ))}

            <div className={styles.spinePedestal} />
          </div>

          <div className={styles.connectorLayer} aria-hidden="true">
            <span className={`${styles.connector} ${styles.connector01}`} />
            <span className={`${styles.connector} ${styles.connector02}`} />
            <span className={`${styles.connector} ${styles.connector03}`} />
            <span className={`${styles.connector} ${styles.connector04}`} />
          </div>

          {skillsContent.clusters.map((cluster) => (
            <SkillsCluster key={cluster.id} cluster={cluster} />
          ))}
        </div>
      </div>
    </section>
  );
}
