import type { MouseEvent } from "react";

import type { NavigationItem } from "@/types/navigation";

import styles from "./Navbar.module.css";

interface DesktopNavigationProps {
  items: readonly NavigationItem[];
  activeSection: string;
  onNavigate: (event: MouseEvent<HTMLAnchorElement>, sectionId: string) => void;
}

export function DesktopNavigation({
  items,
  activeSection,
  onNavigate,
}: DesktopNavigationProps) {
  return (
    <nav className={styles.desktopNavigation} aria-label="Primary navigation">
      {items.map((item) => {
        const isActive = activeSection === item.id;

        return (
          <a
            key={item.id}
            href={item.href}
            className={`${styles.navLink} ${
              isActive ? styles.navLinkActive : ""
            }`}
            aria-current={isActive ? "page" : undefined}
            onClick={(event: MouseEvent<HTMLAnchorElement>) =>
              onNavigate(event, item.id)
            }
          >
            <span>{item.shortLabel}</span>
          </a>
        );
      })}
    </nav>
  );
}
