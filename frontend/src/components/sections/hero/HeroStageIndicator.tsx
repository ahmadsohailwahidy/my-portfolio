"use client";

import { useEffect, useState } from "react";

import type { HeroStage } from "@/types/hero";

import styles from "./HeroSection.module.css";

interface HeroStageIndicatorProps {
  stages: readonly HeroStage[];
}

export function HeroStageIndicator({ stages }: HeroStageIndicatorProps) {
  const [activeStageId, setActiveStageId] = useState(stages[0]?.id ?? "home");

  useEffect(() => {
    const availableStages = stages
      .map((stage) => ({ stage, element: document.getElementById(stage.id) }))
      .filter(
        (item): item is { stage: HeroStage; element: HTMLElement } =>
          item.element !== null,
      );

    if (availableStages.length === 0) {
      return;
    }

    const syncFromHash = () => {
      const hash = window.location.hash.slice(1);
      const matched = availableStages.find(({ stage }) => stage.id === hash);
      if (matched) setActiveStageId(matched.stage.id);
    };

    syncFromHash();
    window.addEventListener("hashchange", syncFromHash);

    const observer = new IntersectionObserver(
      (entries) => {
        const visibleEntry = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

        if (visibleEntry?.target.id) {
          setActiveStageId(visibleEntry.target.id);
        }
      },
      {
        rootMargin: "-18% 0px -64% 0px",
        threshold: [0, 0.12, 0.3, 0.55, 0.8],
      },
    );

    availableStages.forEach(({ element }) => observer.observe(element));

    return () => {
      window.removeEventListener("hashchange", syncFromHash);
      observer.disconnect();
    };
  }, [stages]);

  return (
    <nav className={styles.stageRail} aria-label="Portfolio sections">
      {stages.map((stage, index) => {
        const isActive = stage.id === activeStageId;

        return (
          <a
            key={stage.id}
            className={`${styles.stageItem} ${isActive ? styles.stageItemActive : ""}`}
            href={`#${stage.id}`}
            aria-current={isActive ? "location" : undefined}
            aria-label={`Go to ${stage.label}`}
          >
            <span className={styles.stageNode} aria-hidden="true">
              <span className={styles.stageNodeCore} />
            </span>

            {index === 0 ? (
              <span className={styles.stageLabel}>
                <strong>{stage.number}</strong>
                <span>{stage.label}</span>
              </span>
            ) : null}
          </a>
        );
      })}
    </nav>
  );
}
