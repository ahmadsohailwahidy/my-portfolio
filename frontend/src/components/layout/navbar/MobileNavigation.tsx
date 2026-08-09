"use client";

import { useEffect, type MouseEvent } from "react";

import { resumeContent } from "@/content/resume";
import type { NavigationItem } from "@/types/navigation";

import { ArrowUpRightIcon, CloseIcon, GithubIcon } from "./NavbarIcons";
import styles from "./Navbar.module.css";

interface MobileNavigationProps {
  isOpen: boolean;
  items: readonly NavigationItem[];
  activeSection: string;
  onClose: () => void;
  onNavigate: (event: MouseEvent<HTMLAnchorElement>, sectionId: string) => void;
}

export function MobileNavigation({
  isOpen,
  items,
  activeSection,
  onClose,
  onNavigate,
}: MobileNavigationProps) {
  useEffect(() => {
    if (!isOpen) {
      return;
    }

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) {
    return null;
  }

  return (
    <div className={styles.mobileLayer} data-grid-ignore>
      <button
        type="button"
        className={styles.mobileBackdrop}
        aria-label="Close navigation menu"
        onClick={onClose}
      />

      <aside
        className={styles.mobilePanel}
        aria-label="Mobile navigation"
        aria-modal="true"
        role="dialog"
      >
        <div className={styles.mobileHeader}>
          <div>
            <span>Navigation</span>
            <strong>Explore the portfolio</strong>
          </div>

          <button
            type="button"
            className={styles.mobileCloseButton}
            aria-label="Close menu"
            onClick={onClose}
          >
            <CloseIcon />
          </button>
        </div>

        <nav className={styles.mobileLinks} aria-label="Portfolio sections">
          {items.map((item, index) => {
            const isActive = activeSection === item.id;

            return (
              <a
                key={item.id}
                href={item.href}
                className={`${styles.mobileLink} ${
                  isActive ? styles.mobileLinkActive : ""
                }`}
                aria-current={isActive ? "page" : undefined}
                onClick={(event: MouseEvent<HTMLAnchorElement>) => {
                  onNavigate(event, item.id);
                  onClose();
                }}
              >
                <span className={styles.mobileLinkIndex}>
                  {String(index + 1).padStart(2, "0")}
                </span>

                <span className={styles.mobileLinkContent}>
                  <strong>{item.label}</strong>
                  <small>{item.description}</small>
                </span>

                <ArrowUpRightIcon />
              </a>
            );
          })}
        </nav>

        <div className={styles.mobileFooter}>
          <a
            href="https://github.com/ahmadsohailwahidy/"
            target="_blank"
            rel="noreferrer"
          >
            <GithubIcon />
            GitHub profile
          </a>

          <a href={resumeContent.href} download={resumeContent.fileName}>
            {resumeContent.downloadLabel}
            <ArrowUpRightIcon />
          </a>
        </div>
      </aside>
    </div>
  );
}
