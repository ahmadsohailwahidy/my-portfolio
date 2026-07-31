import type { MouseEvent } from "react";

import { ArrowUpRightIcon, GithubIcon } from "./NavbarIcons";
import styles from "./Navbar.module.css";

interface NavbarActionsProps {
  onContactClick: (
    event: MouseEvent<HTMLAnchorElement>,
    sectionId: string,
  ) => void;
}

export function NavbarActions({ onContactClick }: NavbarActionsProps) {
  return (
    <div className={styles.actions}>
      <a
        href="https://github.com/ahmadsohailwahidy/"
        className={styles.iconAction}
        target="_blank"
        rel="noreferrer"
        aria-label="Open Ahmad Sohail Wahidy on GitHub"
      >
        <GithubIcon />
      </a>

      <a
        href="#contact"
        className={styles.contactAction}
        onClick={(event: MouseEvent<HTMLAnchorElement>) =>
          onContactClick(event, "contact")
        }
      >
        <span>Let&apos;s talk</span>
        <ArrowUpRightIcon />
      </a>
    </div>
  );
}
