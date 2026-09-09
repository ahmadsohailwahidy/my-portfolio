import { skillsContent } from "@/content/skills";

import { SkillsCluster } from "./SkillsCluster";
import { SkillsFlowController } from "./SkillsFlowController";
import { SkillsRail } from "./SkillsRail";
import styles from "./SkillsSection.module.css";

export function SkillsSection() {
  return (
    <section
      id="skills"
      className={styles.section}
      aria-labelledby="skills-title"
    >
      <div className={styles.container}>
        <div className={styles.topology} data-skills-topology>
          <SkillsFlowController />

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

          <div className={styles.skillsMap} data-skills-map>
            <SkillsRail />

            {skillsContent.clusters.map((cluster) => (
              <SkillsCluster key={cluster.id} cluster={cluster} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
