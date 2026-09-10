import type { FeaturedProject, FeaturedProjectsContent } from "@/types/projects";

import styles from "./FeaturedProjectsSection.module.css";

interface ProjectsIntroProps {
  readonly content: FeaturedProjectsContent;
  readonly projects: readonly FeaturedProject[];
}

function formatProjectCount(count: number) {
  return String(count).padStart(2, "0");
}

export function ProjectsIntro({ content, projects }: ProjectsIntroProps) {
  const projectCount = formatProjectCount(projects.length);
  const signalProjects = projects.slice(0, 4);

  return (
    <header
      className={styles.projectsIntro}
      data-project-intro-reveal
      data-grid-ignore
    >
      <div className={styles.introLeft}>
        <span className={styles.introRail} aria-hidden="true" />
        <span className={styles.constructionMarks} aria-hidden="true">
          <i />
          <i />
        </span>

        <div className={styles.introLeftCopy}>
          <p className={styles.introEyebrow}>{content.label}</p>
          <h2 id="projects-title" className={styles.projectsTitle}>
            Projects
          </h2>

          <div className={styles.projectCount} aria-label={`${projects.length} projects`}>
            <span className={styles.projectCountSlash} aria-hidden="true">
              /
            </span>
            <span className={styles.projectCountNumber}>{projectCount}</span>
          </div>

          <div className={styles.projectBreakdown} aria-hidden="true">
            <span>{content.flagship.tier}</span>
            <span>{content.major.length} major</span>
            <span>{content.compact.length} compact</span>
          </div>

          <p className={styles.introMeta}>{content.meta}</p>
        </div>
      </div>

      <div className={styles.introRight}>
        <span className={styles.introRightRail} aria-hidden="true" />

        <div className={styles.introRightCopy}>
          <p className={styles.introEyebrow}>{content.meta.split(" / ")[0]}</p>
          <p className={styles.introHeadline}>
            {content.heading}
            <span aria-hidden="true">_</span>
          </p>
          <p className={styles.introDescription}>{content.introduction}</p>
        </div>
      </div>

      <div className={styles.projectSignalStrip} aria-label="Selected project domains">
        {signalProjects.map((project) => (
          <div className={styles.projectSignal} key={project.id}>
            <span className={styles.signalNumber} aria-hidden="true">
              {project.number}
            </span>
            <span className={styles.signalCopy}>
              <strong>{project.category}</strong>
              <small>{project.technologies.slice(0, 2).join(" · ")}</small>
            </span>
          </div>
        ))}
      </div>
    </header>
  );
}
