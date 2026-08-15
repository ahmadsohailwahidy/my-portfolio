"use client";

import { useEffect, useRef } from "react";

import styles from "./SkillsSection.module.css";

const REDUCED_MOTION = "(prefers-reduced-motion: reduce)";

export function SkillsFlowController() {
  const markerRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const marker = markerRef.current;
    const topology = marker?.closest<HTMLElement>("[data-skills-topology]");

    if (!topology) return;

    const reduced = window.matchMedia(REDUCED_MOTION);

    const activate = () => {
      topology.dataset.skillsVisible = "true";
    };

    const deactivate = () => {
      if (!reduced.matches) topology.removeAttribute("data-skills-visible");
    };

    if (reduced.matches) {
      activate();
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) activate();
        else deactivate();
      },
      { threshold: 0.16, rootMargin: "8% 0px 8% 0px" },
    );

    observer.observe(topology);

    return () => observer.disconnect();
  }, []);

  return (
    <span
      ref={markerRef}
      className={styles.flowController}
      aria-hidden="true"
    />
  );
}
