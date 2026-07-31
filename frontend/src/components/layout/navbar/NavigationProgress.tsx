import type { CSSProperties } from "react";

import styles from "./Navbar.module.css";

interface NavigationProgressProps {
  progress: number;
}

export function NavigationProgress({ progress }: NavigationProgressProps) {
  const style = {
    "--scroll-progress": `${progress}%`,
  } as CSSProperties;

  return (
    <div className={styles.progressTrack} aria-hidden="true">
      <span className={styles.progressBar} style={style} />
    </div>
  );
}
