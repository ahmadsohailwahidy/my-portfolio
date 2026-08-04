import Image from "next/image";

import type {
  FeaturedProject,
  ProjectMediaLayout,
  ProjectMediaRole,
} from "@/types/projects";

import styles from "./FeaturedProjectsSection.module.css";

interface ProjectMediaProps {
  readonly project: FeaturedProject;
}

const layoutClasses: Record<ProjectMediaLayout, string> = {
  flagship: styles.mediaFlagship,
  dashboard: styles.mediaDashboard,
  diagram: styles.mediaDiagram,
  responsive: styles.mediaResponsive,
  desktop: styles.mediaDesktop,
};

const roleClasses: Record<ProjectMediaRole, string> = {
  primary: styles.assetPrimary,
  supporting: styles.assetSupporting,
  mobile: styles.assetMobile,
};

function getImageSizes(project: FeaturedProject, role: ProjectMediaRole) {
  if (role === "mobile") {
    return "(max-width: 48rem) 38vw, 13rem";
  }

  if (project.tier === "flagship") {
    return role === "primary"
      ? "(max-width: 68rem) 100vw, 78rem"
      : "(max-width: 48rem) 100vw, 39rem";
  }

  if (project.tier === "major") {
    return "(max-width: 68rem) 100vw, 43rem";
  }

  return "(max-width: 48rem) 100vw, 39rem";
}

export function ProjectMedia({ project }: ProjectMediaProps) {
  const mediaClassName = [
    styles.projectMedia,
    layoutClasses[project.mediaLayout],
  ].join(" ");

  return (
    <figure className={mediaClassName} data-grid-ignore>
      <div className={styles.mediaCanvas}>
        {project.media.map((asset, index) => (
          <div
            key={asset.src}
            className={[styles.mediaAsset, roleClasses[asset.role]].join(" ")}
          >
            <Image
              src={asset.src}
              alt={asset.alt}
              fill
              sizes={getImageSizes(project, asset.role)}
              className={styles.projectImage}
            />

            <span className={styles.mediaIndex} aria-hidden="true">
              {String(index + 1).padStart(2, "0")}
            </span>
          </div>
        ))}

        <span className={styles.mediaSweep} aria-hidden="true" />
      </div>

      <figcaption>{project.caption}</figcaption>
    </figure>
  );
}
