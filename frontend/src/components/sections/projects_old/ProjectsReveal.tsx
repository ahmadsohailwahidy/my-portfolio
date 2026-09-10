"use client";

import { useEffect, useRef } from "react";

import styles from "./FeaturedProjectsSection.module.css";

export function ProjectsReveal() {
  const markerRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const marker = markerRef.current;
    const section = marker?.closest<HTMLElement>("[data-projects-root]");

    if (!section) {
      return;
    }

    const chapters = Array.from(
      section.querySelectorAll<HTMLElement>("[data-project-reveal]"),
    );

    if (chapters.length === 0) {
      return;
    }

    const reducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    if (reducedMotion || !("IntersectionObserver" in window)) {
      chapters.forEach((chapter) => {
        chapter.dataset.projectVisible = "true";
      });

      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) {
            return;
          }

          const chapter = entry.target as HTMLElement;
          chapter.dataset.projectVisible = "true";
          observer.unobserve(chapter);
        });
      },
      {
        rootMargin: "0px 0px -10% 0px",
        threshold: 0.16,
      },
    );

    chapters.forEach((chapter) => observer.observe(chapter));

    return () => observer.disconnect();
  }, []);

  return <span ref={markerRef} className={styles.revealMarker} />;
}
