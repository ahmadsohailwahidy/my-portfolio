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
      .map((stage) => ({
        stage,
        element: document.getElementById(stage.id),
      }))
      .filter(
        (item): item is { stage: HeroStage; element: HTMLElement } =>
          item.element !== null,
      );

    if (availableStages.length === 0) {
      return;
    }

    let initialFrameId = 0;

    const synchronizeFromLocation = () => {
      const hash = window.location.hash.slice(1);
      const matchedStage = availableStages.find(
        ({ stage }) => stage.id === hash,
      );

      if (matchedStage) {
        setActiveStageId(matchedStage.stage.id);
      }
    };

    initialFrameId = window.requestAnimationFrame(synchronizeFromLocation);
    window.addEventListener("hashchange", synchronizeFromLocation);

    const observer = new IntersectionObserver(
      (entries) => {
        const visibleEntry = entries
          .filter((entry) => entry.isIntersecting)
          .sort((first, second) => {
            if (second.intersectionRatio !== first.intersectionRatio) {
              return second.intersectionRatio - first.intersectionRatio;
            }

            return (
              Math.abs(first.boundingClientRect.top) -
              Math.abs(second.boundingClientRect.top)
            );
          })[0];

        if (visibleEntry?.target.id) {
          setActiveStageId(visibleEntry.target.id);
        }
      },
      {
        root: null,
        rootMargin: "-18% 0px -64% 0px",
        threshold: [0, 0.12, 0.28, 0.5, 0.75],
      },
    );

    availableStages.forEach(({ element }) => observer.observe(element));

    return () => {
      if (initialFrameId !== 0) {
        window.cancelAnimationFrame(initialFrameId);
      }

      window.removeEventListener("hashchange", synchronizeFromLocation);
      observer.disconnect();
    };
  }, [stages]);

  const activeStage =
    stages.find((stage) => stage.id === activeStageId) ?? stages[0];

  return (
    <nav
      className={styles.stageRail}
      aria-label="Portfolio sections"
      data-grid-ignore
    >
      <div className={styles.stageDesktop}>
        <span className={styles.stageTrack} aria-hidden="true" />

        {stages.map((stage) => {
          const isActive = stage.id === activeStageId;

          return (
            <a
              key={stage.id}
              className={`${styles.stageItem} ${
                isActive ? styles.stageItemActive : ""
              }`}
              href={`#${stage.id}`}
              aria-current={isActive ? "location" : undefined}
              aria-label={`Go to ${stage.label}`}
              title={stage.label}
            >
              <span className={styles.stageNode} aria-hidden="true">
                <span className={styles.stageNodeCore} />
              </span>

              <span className={styles.stageLabel}>
                <strong>{stage.number}</strong>
                <span>{stage.label}</span>
              </span>
            </a>
          );
        })}
      </div>

      {activeStage ? (
        <a
          className={styles.stageMobile}
          href={`#${activeStage.id}`}
          aria-label={`Current section: ${activeStage.label}`}
        >
          <span className={styles.stageMobileSignal} aria-hidden="true" />
          <strong>{activeStage.number}</strong>
          <span>{activeStage.label}</span>
        </a>
      ) : null}
    </nav>
  );
}
