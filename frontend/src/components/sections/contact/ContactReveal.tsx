"use client";

import { useEffect, useRef } from "react";

import styles from "./ContactSection.module.css";

export function ContactReveal() {
  const markerRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const marker = markerRef.current;
    const section = marker?.closest<HTMLElement>("[data-contact-root]");

    if (!section) {
      return;
    }

    const items = Array.from(
      section.querySelectorAll<HTMLElement>("[data-contact-reveal]"),
    );

    if (items.length === 0) {
      return;
    }

    const reducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    if (reducedMotion || !("IntersectionObserver" in window)) {
      items.forEach((item) => {
        item.dataset.contactVisible = "true";
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
          item.dataset.contactVisible = "true";
          observer.unobserve(item);
        });
      },
      {
        rootMargin: "0px 0px -8% 0px",
        threshold: 0.12,
      },
    );

    items.forEach((item) => observer.observe(item));

    return () => observer.disconnect();
  }, []);

  return <span ref={markerRef} className={styles.revealMarker} />;
}
