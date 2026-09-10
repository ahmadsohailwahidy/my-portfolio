import { featuredProjectsContent } from "@/content/projects";

import { ProjectCaseStudy } from "./ProjectCaseStudy";
import { ProjectsReveal } from "./ProjectsReveal";
import styles from "./FeaturedProjectsSection.module.css";

export function FeaturedProjectsSection() {
  return (
    <section
      id="projects"
      className={styles.section}
      aria-labelledby="projects-title"
      data-projects-root
    >
      <div className={styles.ambientOne} aria-hidden="true" />
      <div className={styles.ambientTwo} aria-hidden="true" />
      <div className={styles.signalField} aria-hidden="true" />

      <div className={styles.container}>
        <ProjectsReveal />

        <header className={styles.sectionHeader} data-grid-ignore>
          <div className={styles.headerMeta}>
            <span className={styles.headerAxis} aria-hidden="true" />
            <p className={styles.sectionLabel}>
              {featuredProjectsContent.label}
            </p>
            <p className={styles.sectionMeta}>{featuredProjectsContent.meta}</p>
          </div>

          <div className={styles.headerCopy}>
            <h2 id="projects-title">{featuredProjectsContent.heading}</h2>
            <p>{featuredProjectsContent.introduction}</p>
          </div>
        </header>

        <div className={styles.chapterMarker} aria-hidden="true">
          <span>FLAGSHIP</span>
          <span className={styles.chapterRule} />
          <span>DEEP WORKFLOW EVIDENCE</span>
        </div>

        <ProjectCaseStudy project={featuredProjectsContent.flagship} />

        <div
          className={styles.majorChapters}
          aria-label="Major project case studies"
        >
          <div className={styles.chapterMarker} aria-hidden="true">
            <span>MAJOR CASE STUDIES</span>
            <span className={styles.chapterRule} />
            <span>DATA + DATABASE SYSTEMS</span>
          </div>

          {featuredProjectsContent.major.map((project) => (
            <ProjectCaseStudy key={project.id} project={project} />
          ))}
        </div>

        <div
          className={styles.compactChapters}
          aria-label="Focused supporting project evidence"
        >
          <div className={styles.chapterMarker} aria-hidden="true">
            <span>FOCUSED EVIDENCE</span>
            <span className={styles.chapterRule} />
            <span>FRONTEND + DESKTOP SOFTWARE</span>
          </div>

          <div className={styles.compactGrid}>
            {featuredProjectsContent.compact.map((project) => (
              <ProjectCaseStudy key={project.id} project={project} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
