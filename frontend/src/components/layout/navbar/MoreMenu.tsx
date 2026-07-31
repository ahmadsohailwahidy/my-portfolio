"use client";

import { useEffect, useRef, useState, type MouseEvent } from "react";

import type { NavigationItem } from "@/types/navigation";

import { ChevronDownIcon } from "./NavbarIcons";
import styles from "./Navbar.module.css";

interface MoreMenuProps {
  items: readonly NavigationItem[];
  activeSection: string;
  onNavigate: (event: MouseEvent<HTMLAnchorElement>, sectionId: string) => void;
}

export function MoreMenu({ items, activeSection, onNavigate }: MoreMenuProps) {
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement | null>(null);
  const hasActiveItem = items.some((item) => item.id === activeSection);

  useEffect(() => {
    if (!isOpen) {
      return;
    }

    const handlePointerDown = (event: PointerEvent) => {
      if (
        containerRef.current &&
        !containerRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsOpen(false);
      }
    };

    window.addEventListener("pointerdown", handlePointerDown);
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("pointerdown", handlePointerDown);
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen]);

  return (
    <div ref={containerRef} className={styles.moreMenuRoot}>
      <button
        type="button"
        className={`${styles.moreButton} ${
          hasActiveItem ? styles.moreButtonActive : ""
        }`}
        aria-expanded={isOpen}
        aria-haspopup="menu"
        aria-controls="portfolio-more-menu"
        onClick={() => setIsOpen((current) => !current)}
      >
        More
        <ChevronDownIcon className={isOpen ? styles.chevronOpen : undefined} />
      </button>

      {isOpen && (
        <div id="portfolio-more-menu" className={styles.morePanel} role="menu">
          <div className={styles.morePanelHeader}>
            <span>Explore portfolio</span>
            <small>{items.length} sections</small>
          </div>

          <div className={styles.moreGrid}>
            {items.map((item, index) => {
              const isActive = activeSection === item.id;

              return (
                <a
                  key={item.id}
                  href={item.href}
                  role="menuitem"
                  className={`${styles.moreItem} ${
                    isActive ? styles.moreItemActive : ""
                  }`}
                  aria-current={isActive ? "page" : undefined}
                  onClick={(event: MouseEvent<HTMLAnchorElement>) => {
                    onNavigate(event, item.id);
                    setIsOpen(false);
                  }}
                >
                  <span className={styles.moreIndex}>
                    {String(index + 6).padStart(2, "0")}
                  </span>

                  <span>
                    <strong>{item.label}</strong>
                    <small>{item.description}</small>
                  </span>
                </a>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
}
