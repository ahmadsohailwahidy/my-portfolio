"use client";

import { useEffect, useRef } from "react";

import styles from "./SkillsSection.module.css";

const REDUCED_MOTION = "(prefers-reduced-motion: reduce)";
const ACTIVATION_LINE_RATIO = 0.58;

function clamp(value: number, minimum: number, maximum: number) {
  return Math.min(Math.max(value, minimum), maximum);
}

export function SkillsFlowController() {
  const markerRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const marker = markerRef.current;
    const topology = marker?.closest<HTMLElement>("[data-skills-topology]");
    const railTrack = topology?.querySelector<HTMLElement>(
      "[data-skills-rail-track]",
    );

    if (!topology || !railTrack) return;

    const steps = Array.from(
      topology.querySelectorAll<HTMLElement>("[data-flow-step]"),
    )
      .map((step) => ({
        step,
        node: step.querySelector<HTMLElement>("[data-skills-node]"),
      }))
      .filter(
        (entry): entry is { step: HTMLElement; node: HTMLElement } =>
          entry.node !== null,
      );

    const reducedMotion = window.matchMedia(REDUCED_MOTION);
    let animationFrameId = 0;
    let isNearViewport = false;
    let listenersAttached = false;

    const setReachedState = (step: HTMLElement, reached: boolean) => {
      if (reached) {
        step.dataset.skillsReached = "true";
      } else {
        step.removeAttribute("data-skills-reached");
      }
    };

    const showCompleteTimeline = () => {
      topology.style.setProperty("--skills-progress", "1");
      topology.dataset.skillsComplete = "true";
      steps.forEach(({ step }) => setReachedState(step, true));
    };

    const updateTimeline = () => {
      animationFrameId = 0;

      if (reducedMotion.matches) {
        showCompleteTimeline();
        return;
      }

      const railRect = railTrack.getBoundingClientRect();

      if (railRect.height <= 0) return;

      const activationLine = window.innerHeight * ACTIVATION_LINE_RATIO;
      const progress = clamp(
        (activationLine - railRect.top) / railRect.height,
        0,
        1,
      );

      topology.style.setProperty("--skills-progress", progress.toFixed(4));

      if (progress >= 0.995) {
        topology.dataset.skillsComplete = "true";
      } else {
        topology.removeAttribute("data-skills-complete");
      }

      steps.forEach(({ step, node }) => {
        const nodeRect = node.getBoundingClientRect();
        const nodeCenter = nodeRect.top + nodeRect.height / 2;
        const reached = progress > 0 && nodeCenter <= activationLine;

        setReachedState(step, reached);
      });
    };

    const scheduleUpdate = () => {
      if (animationFrameId !== 0) return;

      animationFrameId = window.requestAnimationFrame(updateTimeline);
    };

    const attachListeners = () => {
      if (listenersAttached || reducedMotion.matches) return;

      listenersAttached = true;
      window.addEventListener("scroll", scheduleUpdate, { passive: true });
      window.addEventListener("resize", scheduleUpdate, { passive: true });
    };

    const detachListeners = () => {
      if (!listenersAttached) return;

      listenersAttached = false;
      window.removeEventListener("scroll", scheduleUpdate);
      window.removeEventListener("resize", scheduleUpdate);
    };

    const handleMotionPreference = () => {
      if (reducedMotion.matches) {
        detachListeners();
        showCompleteTimeline();
        return;
      }

      topology.removeAttribute("data-skills-complete");

      if (isNearViewport) {
        attachListeners();
      }

      scheduleUpdate();
    };

    const intersectionObserver = new IntersectionObserver(
      ([entry]) => {
        isNearViewport = entry.isIntersecting;

        if (entry.isIntersecting) {
          topology.dataset.skillsActive = "true";
          attachListeners();
          scheduleUpdate();
        } else {
          topology.removeAttribute("data-skills-active");
          scheduleUpdate();
          detachListeners();
        }
      },
      { threshold: 0, rootMargin: "35% 0px 35% 0px" },
    );

    const resizeObserver = new ResizeObserver(scheduleUpdate);

    intersectionObserver.observe(topology);
    resizeObserver.observe(topology);
    reducedMotion.addEventListener("change", handleMotionPreference);

    if (reducedMotion.matches) {
      showCompleteTimeline();
    } else {
      scheduleUpdate();
    }

    return () => {
      intersectionObserver.disconnect();
      resizeObserver.disconnect();
      reducedMotion.removeEventListener("change", handleMotionPreference);
      detachListeners();

      if (animationFrameId !== 0) {
        window.cancelAnimationFrame(animationFrameId);
      }
    };
  }, []);

  return (
    <span
      ref={markerRef}
      className={styles.flowController}
      aria-hidden="true"
    />
  );
}
