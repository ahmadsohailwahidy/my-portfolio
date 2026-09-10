import Image from "next/image";

import type { FeaturedProject, ProjectMediaAsset } from "@/types/projects";

import styles from "./FeaturedProjectsSection.module.css";

interface ProjectMediaProps {
  readonly project: FeaturedProject;
}

function getImageSizes(project: FeaturedProject, asset: ProjectMediaAsset) {
  if (asset.role === "mobile") {
    return "(max-width: 56rem) 30vw, 7.5rem";
  }

  switch (project.mediaLayout) {
    case "flagship":
      return "(max-width: 56rem) calc(100vw - 4rem), 34.75rem";
    case "dashboard":
    case "diagram":
      return "(max-width: 56rem) calc(100vw - 4rem), 28.5rem";
    case "responsive":
      return "(max-width: 56rem) calc(100vw - 4rem), 27rem";
    case "desktop":
      return asset.role === "supporting"
        ? "(max-width: 56rem) 64vw, 17rem"
        : "(max-width: 56rem) calc(100vw - 4rem), 23rem";
  }
}

function ProjectImage({
  project,
  asset,
}: {
  readonly project: FeaturedProject;
  readonly asset: ProjectMediaAsset;
}) {
  return (
    <Image
      src={asset.src}
      alt={asset.alt}
      fill
      sizes={getImageSizes(project, asset)}
      className={styles.projectImage}
    />
  );
}

function WindowChrome() {
  return (
    <span className={styles.windowChrome} aria-hidden="true">
      <i />
      <i />
      <i />
      <b />
    </span>
  );
}

export function ProjectMedia({ project }: ProjectMediaProps) {
  const primary = project.media.find((asset) => asset.role === "primary");

  if (!primary) {
    return null;
  }

  if (project.mediaLayout === "responsive") {
    const mobile = project.media.find((asset) => asset.role === "mobile");

    return (
      <figure className={[styles.projectMedia, styles.mediaResponsive].join(" ")}>
        <div className={styles.mediaReveal}>
          <div className={styles.laptopFrame}>
            <div className={styles.laptopScreen}>
              <ProjectImage project={project} asset={primary} />
            </div>
            <span className={styles.laptopBase} aria-hidden="true" />
          </div>

          {mobile ? (
            <div className={styles.phoneFrame}>
              <span className={styles.phoneNotch} aria-hidden="true" />
              <div className={styles.phoneScreen}>
                <ProjectImage project={project} asset={mobile} />
              </div>
            </div>
          ) : null}
        </div>
      </figure>
    );
  }

  if (project.mediaLayout === "desktop") {
    const supporting = project.media.find((asset) => asset.role === "supporting");

    return (
      <figure className={[styles.projectMedia, styles.mediaDesktop].join(" ")}>
        <div className={styles.mediaReveal}>
          <div className={[styles.desktopWindow, styles.desktopWindowMain].join(" ")}>
            <WindowChrome />
            <div className={styles.desktopWindowViewport}>
              <ProjectImage project={project} asset={primary} />
            </div>
          </div>

          {supporting ? (
            <div
              className={[styles.desktopWindow, styles.desktopWindowSupporting].join(
                " ",
              )}
            >
              <WindowChrome />
              <div className={styles.desktopWindowViewport}>
                <ProjectImage project={project} asset={supporting} />
              </div>
            </div>
          ) : null}
        </div>
      </figure>
    );
  }

  const layoutClass =
    project.mediaLayout === "flagship"
      ? styles.mediaFlagship
      : project.mediaLayout === "dashboard"
        ? styles.mediaDashboard
        : styles.mediaDiagram;

  return (
    <figure className={[styles.projectMedia, layoutClass].join(" ")}>
      <div className={styles.mediaReveal}>
        <div className={styles.flatMediaFrame}>
          {project.mediaLayout === "flagship" ? <WindowChrome /> : null}
          <div className={styles.flatMediaViewport}>
            <ProjectImage project={project} asset={primary} />
          </div>
        </div>
      </div>
    </figure>
  );
}
