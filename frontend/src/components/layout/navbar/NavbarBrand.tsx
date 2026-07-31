import type { MouseEvent } from "react";

import styles from "./Navbar.module.css";

interface NavbarBrandProps {
  onNavigate: (event: MouseEvent<HTMLAnchorElement>, sectionId: string) => void;
}

export function NavbarBrand({ onNavigate }: NavbarBrandProps) {
  return (
    <a
      href="#home"
      className={styles.brand}
      aria-label="Ahmad Sohail Wahidy — Home"
      onClick={(event: MouseEvent<HTMLAnchorElement>) =>
        onNavigate(event, "home")
      }
    >
      <span className={styles.brandMark} aria-hidden="true">
        <span>&lt;</span>
        <strong>AS</strong>
        <span>/&gt;</span>
      </span>

      <span className={styles.brandText}>
        <strong>Ahmad Sohail Wahidy</strong>
        <span>
          <i aria-hidden="true" />
          Full-Stack Developer
        </span>
      </span>
    </a>
  );
}
