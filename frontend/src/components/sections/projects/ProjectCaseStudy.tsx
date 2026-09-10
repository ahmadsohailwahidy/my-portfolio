import type { FeaturedProject, ProjectMediaLayout } from "@/types/projects";

import { ProjectMedia } from "./ProjectMedia";
import styles from "./FeaturedProjectsSection.module.css";

interface ProjectCaseStudyProps {
  readonly project: FeaturedProject;
}

const variantClasses: Record<ProjectMediaLayout, string> = {
  flagship: styles.project01,
  dashboard: styles.project02,
  diagram: styles.project03,
  responsive: styles.project04,
  desktop: styles.project05,
};

function getContextLabel(project: FeaturedProject) {
  return project.context ?? "Flagship project";
}

function getVisibleTechnologies(project: FeaturedProject) {
  if (project.mediaLayout === "flagship") {
    const preferred = ["React", "Node.js", "MongoDB", "PostgreSQL"];
    return preferred.filter((technology) => project.technologies.includes(technology));
  }

  if (project.mediaLayout === "dashboard") {
    const preferred = ["PostgreSQL", "Python", "Flask", "Chart.js"];
    return preferred.filter((technology) => project.technologies.includes(technology));
  }

  if (project.mediaLayout === "diagram") {
    const preferred = ["MySQL 8.0+", "InnoDB", "SQL", "ERD"];
    return preferred.filter((technology) => project.technologies.includes(technology));
  }

  return project.technologies.slice(0, 4);
}

function HeroFacts({ project }: { readonly project: FeaturedProject }) {
  return (
    <dl className={styles.heroFacts}>
      <div>
        <dt>Category</dt>
        <dd>{project.category}</dd>
      </div>
      <div>
        <dt>Core stack</dt>
        <dd>{project.technologies.slice(0, 3).join(" · ")}</dd>
      </div>
      <div className={styles.heroFactWide}>
        <dt>Data + auth</dt>
        <dd>{project.technologies.slice(3).join(" · ")}</dd>
      </div>
    </dl>
  );
}

export function ProjectCaseStudy({ project }: ProjectCaseStudyProps) {
  const technologies = getVisibleTechnologies(project);
  const className = [styles.projectChapter, variantClasses[project.mediaLayout]].join(
    " ",
  );

  return (
    <article
      id={`project-${project.id}`}
      className={className}
      aria-labelledby={`${project.id}-title`}
      data-project-reveal
      data-grid-ignore
    >
      <span className={styles.cardGlow} aria-hidden="true" />
      <span className={styles.projectIndex} aria-hidden="true">
        {project.number}
      </span>

      {(project.mediaLayout === "flagship" || project.mediaLayout === "diagram") && (
        <span className={styles.statusDots} aria-hidden="true">
          <i />
          <i />
          <i />
        </span>
      )}

      <div className={styles.projectCopy}>
        <p className={styles.projectEyebrow}>
          <span>{getContextLabel(project)}</span>
          <span aria-hidden="true">/</span>
          <span>{project.category}</span>
        </p>

        <h3 id={`${project.id}-title`}>{project.title}</h3>
        <p className={styles.projectSummary}>{project.summary}</p>
      </div>

      {project.mediaLayout === "flagship" ? <HeroFacts project={project} /> : null}

      <ProjectMedia project={project} />

      <ul
        className={styles.projectTags}
        aria-label={`${project.title} selected technologies`}
      >
        {technologies.map((technology) => (
          <li key={technology}>{technology}</li>
        ))}
      </ul>

      <span className={styles.projectFooterSignal} aria-hidden="true">
        <span>{project.number}</span>
        <i />
      </span>
    </article>
  );
}
