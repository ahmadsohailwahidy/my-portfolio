import type {
  FeaturedProject,
  ProjectAccent,
  ProjectAlignment,
  ProjectTier,
} from "@/types/projects";

import { ProjectEvidence } from "./ProjectEvidence";
import { ProjectMedia } from "./ProjectMedia";
import styles from "./FeaturedProjectsSection.module.css";

interface ProjectCaseStudyProps {
  readonly project: FeaturedProject;
}

const tierClasses: Record<ProjectTier, string> = {
  flagship: styles.flagshipChapter,
  major: styles.majorChapter,
  compact: styles.compactChapter,
};

const accentClasses: Record<ProjectAccent, string> = {
  cyan: styles.accentCyan,
  emerald: styles.accentEmerald,
  violet: styles.accentViolet,
  amber: styles.accentAmber,
};

const alignmentClasses: Record<ProjectAlignment, string> = {
  "copy-first": styles.copyFirst,
  "media-first": styles.mediaFirst,
};

export function ProjectCaseStudy({ project }: ProjectCaseStudyProps) {
  const className = [
    styles.projectChapter,
    tierClasses[project.tier],
    accentClasses[project.accent],
    alignmentClasses[project.alignment],
  ].join(" ");

  return (
    <article
      id={`project-${project.id}`}
      className={className}
      aria-labelledby={`${project.id}-title`}
      data-project-reveal
    >
      <span className={styles.projectNumber} aria-hidden="true">
        {project.number}
      </span>

      <div className={styles.projectCopy} data-grid-ignore>
        <div className={styles.projectIdentity}>
          <p className={styles.projectEyebrow}>
            {project.number} / {project.category}
          </p>

          {project.context ? (
            <p className={styles.projectContext}>{project.context}</p>
          ) : null}
        </div>

        <h3 id={`${project.id}-title`}>{project.title}</h3>

        <p className={styles.projectSummary}>{project.summary}</p>

        <div className={styles.projectNarrative}>
          <div>
            <p className={styles.blockLabel}>WORKFLOW</p>
            <p>{project.workflow}</p>
          </div>

          {project.role ? (
            <div>
              <p className={styles.blockLabel}>MY ROLE</p>
              <p>{project.role}</p>
            </div>
          ) : null}

          <div>
            <p className={styles.blockLabel}>ARCHITECTURE SIGNAL</p>
            <p>{project.architecture}</p>
          </div>
        </div>
      </div>

      <ProjectMedia project={project} />
      <ProjectEvidence project={project} />
    </article>
  );
}
