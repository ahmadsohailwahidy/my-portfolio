"use client";

import { useEffect, useRef } from "react";

import styles from "./EducationSection.module.css";

export function EducationReveal() {
  const markerRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const marker = markerRef.current;
    const section = marker?.closest<HTMLElement>("[data-education-root]");

    if (!section) {
      return;
    }

    const items = Array.from(
      section.querySelectorAll<HTMLElement>("[data-education-reveal]"),
    );
    const reducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    if (reducedMotion || !("IntersectionObserver" in window)) {
      items.forEach((item) => {
        item.dataset.educationVisible = "true";
      });
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) {
            return;
          }

          const item = entry.target as HTMLElement;
          item.dataset.educationVisible = "true";
          observer.unobserve(item);
        });
      },
      {
        rootMargin: "0px 0px -9% 0px",
        threshold: 0.13,
      },
    );

    items.forEach((item) => observer.observe(item));

    return () => {
      observer.disconnect();
    };
  }, []);

  return <span ref={markerRef} className={styles.revealMarker} />;
}
