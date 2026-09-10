import { featuredProjectsContent } from "@/content/projects";

import { ProjectCaseStudy } from "./ProjectCaseStudy";
import { ProjectsIntro } from "./ProjectsIntro";
import { ProjectsReveal } from "./ProjectsReveal";
import styles from "./FeaturedProjectsSection.module.css";

export function FeaturedProjectsSection() {
  const projects = [
    featuredProjectsContent.flagship,
    ...featuredProjectsContent.major,
    ...featuredProjectsContent.compact,
  ];

  const [flagship, project02, project03, project04, project05] = projects;

  return (
    <section
      id="projects"
      className={styles.section}
      aria-labelledby="projects-title"
      data-projects-root
    >
      <div className={styles.container}>
        <ProjectsReveal />
        <ProjectsIntro content={featuredProjectsContent} projects={projects} />

        <ProjectCaseStudy project={flagship} />

        <div className={styles.middleGrid}>
          <ProjectCaseStudy project={project02} />
          <ProjectCaseStudy project={project03} />
        </div>

        <div className={styles.bottomGrid}>
          <ProjectCaseStudy project={project04} />
          <ProjectCaseStudy project={project05} />

          <div
            className={styles.decorativeRail}
            data-project-decorative-reveal
            aria-hidden="true"
          >
            <span className={styles.railLineOne} />
            <span className={styles.railLineTwo} />
            <span className={styles.railTicks} />
            <span className={styles.railMeta}>{featuredProjectsContent.meta}</span>
          </div>
        </div>
      </div>
    </section>
  );
}
