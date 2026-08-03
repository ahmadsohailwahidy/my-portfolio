"use client";

import { useEffect, useRef } from "react";

import styles from "./SkillsSection.module.css";

const DESKTOP_QUERY = "(min-width: 68.01rem)";
const REDUCED_MOTION_QUERY = "(prefers-reduced-motion: reduce)";
const INACTIVE_OPACITY = 0.3;
const STEP_IDS = ["01", "02", "03", "04"] as const;

type StepId = (typeof STEP_IDS)[number];

interface Point {
  readonly x: number;
  readonly y: number;
}

function clamp(value: number, minimum = 0, maximum = 1) {
  return Math.min(maximum, Math.max(minimum, value));
}

function range(value: number, start: number, end: number) {
  if (end <= start) {
    return value >= end ? 1 : 0;
  }

  return clamp((value - start) / (end - start));
}

function interpolate(from: number, to: number, amount: number) {
  return from + (to - from) * clamp(amount);
}

function buildWavePath(from: Point, to: Point) {
  const deltaX = to.x - from.x;
  const deltaY = to.y - from.y;
  const direction = deltaX >= 0 ? 1 : -1;
  const midpointX = (from.x + to.x) / 2;
  const midpointY = (from.y + to.y) / 2;
  const horizontalBend = clamp(Math.abs(deltaX) * 0.48, 72, 150);
  const waveHeight = clamp(Math.abs(deltaY) * 0.17, 54, 112);

  const firstControlX = from.x + direction * horizontalBend;
  const firstControlY = from.y - waveHeight;
  const secondControlX = midpointX - direction * horizontalBend * 0.42;
  const secondControlY = midpointY - waveHeight;
  const thirdControlX = midpointX + direction * horizontalBend * 0.42;
  const thirdControlY = midpointY + waveHeight;
  const fourthControlX = to.x - direction * horizontalBend;
  const fourthControlY = to.y + waveHeight;

  return [
    `M ${from.x.toFixed(2)} ${from.y.toFixed(2)}`,
    `C ${firstControlX.toFixed(2)} ${firstControlY.toFixed(2)},`,
    `${secondControlX.toFixed(2)} ${secondControlY.toFixed(2)},`,
    `${midpointX.toFixed(2)} ${midpointY.toFixed(2)}`,
    `C ${thirdControlX.toFixed(2)} ${thirdControlY.toFixed(2)},`,
    `${fourthControlX.toFixed(2)} ${fourthControlY.toFixed(2)},`,
    `${to.x.toFixed(2)} ${to.y.toFixed(2)}`,
  ].join(" ");
}

export function SkillsFlowController() {
  const markerRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const marker = markerRef.current;
    const topology = marker?.closest<HTMLElement>("[data-skills-topology]");

    if (!topology) {
      return;
    }

    const desktopMedia = window.matchMedia(DESKTOP_QUERY);
    const reducedMotionMedia = window.matchMedia(REDUCED_MOTION_QUERY);
    const connectorMap =
      topology.querySelector<SVGSVGElement>("[data-flow-map]");
    const basePaths = Array.from(
      topology.querySelectorAll<SVGPathElement>("[data-flow-base]"),
    );
    const segments = Array.from(
      topology.querySelectorAll<SVGPathElement>("[data-flow-segment]"),
    );
    const nodes = new Map<StepId, HTMLElement>();
    const clusters = new Map<StepId, HTMLElement>();

    STEP_IDS.forEach((step) => {
      const node = topology.querySelector<HTMLElement>(`[data-node="${step}"]`);
      const cluster = topology.querySelector<HTMLElement>(
        `[data-flow-step="${step}"]`,
      );

      if (node) {
        nodes.set(step, node);
      }

      if (cluster) {
        clusters.set(step, cluster);
      }
    });

    if (
      !connectorMap ||
      basePaths.length !== 3 ||
      segments.length !== 3 ||
      nodes.size !== STEP_IDS.length ||
      clusters.size !== STEP_IDS.length
    ) {
      return;
    }

    let animationFrame = 0;
    let resizeFrame = 0;
    let topologyTop = 0;
    let viewportHeight = window.innerHeight;
    let nodePoints: Point[] = [];
    let isObserved = false;
    let scrollListenerAttached = false;

    const setVariable = (name: string, value: number) => {
      topology.style.setProperty(name, value.toFixed(4));
    };

    const setSegment = (index: number, progress: number, opacity: number) => {
      const path = segments[index];

      if (!path) {
        return;
      }

      path.style.strokeDashoffset = `${1 - clamp(progress)}`;
      path.style.opacity = `${clamp(opacity)}`;
    };

    const setActiveStep = (focusY: number) => {
      if (nodePoints.length !== STEP_IDS.length) {
        return;
      }

      const boundaries = [
        (nodePoints[0].y + nodePoints[1].y) / 2,
        (nodePoints[1].y + nodePoints[2].y) / 2,
        (nodePoints[2].y + nodePoints[3].y) / 2,
      ];

      const activeStep =
        focusY < boundaries[0]
          ? "01"
          : focusY < boundaries[1]
            ? "02"
            : focusY < boundaries[2]
              ? "03"
              : "04";

      topology.dataset.activeStep = activeStep;
    };

    const render = () => {
      animationFrame = 0;

      if (nodePoints.length !== STEP_IDS.length) {
        return;
      }

      const focusY = window.scrollY - topologyTop + viewportHeight * 0.56;
      const [pointOne, pointTwo, pointThree, pointFour] = nodePoints;
      const segmentOne = range(focusY, pointOne.y, pointTwo.y);
      const segmentTwo = range(focusY, pointTwo.y, pointThree.y);
      const segmentThree = range(focusY, pointThree.y, pointFour.y);

      const stepOne = interpolate(
        1,
        INACTIVE_OPACITY,
        range(segmentOne, 0.56, 1),
      );

      const stepTwoEntry = interpolate(
        INACTIVE_OPACITY,
        1,
        range(segmentOne, 0.5, 1),
      );
      const stepTwo = interpolate(
        stepTwoEntry,
        INACTIVE_OPACITY,
        range(segmentTwo, 0.56, 1),
      );

      const stepThreeEntry = interpolate(
        INACTIVE_OPACITY,
        1,
        range(segmentTwo, 0.5, 1),
      );
      const stepThree = interpolate(
        stepThreeEntry,
        INACTIVE_OPACITY,
        range(segmentThree, 0.56, 1),
      );

      const stepFour = interpolate(
        INACTIVE_OPACITY,
        1,
        range(segmentThree, 0.5, 1),
      );

      setVariable("--flow-step-01", stepOne);
      setVariable("--flow-step-02", stepTwo);
      setVariable("--flow-step-03", stepThree);
      setVariable("--flow-step-04", stepFour);

      const firstOpacity = interpolate(1, 0.16, range(segmentTwo, 0.08, 0.34));
      const secondOpacity = interpolate(
        1,
        0.16,
        range(segmentThree, 0.08, 0.34),
      );

      setSegment(0, segmentOne, firstOpacity);
      setSegment(1, segmentTwo, secondOpacity);
      setSegment(2, segmentThree, 1);
      setActiveStep(focusY);
    };

    const scheduleRender = () => {
      if (animationFrame !== 0) {
        return;
      }

      animationFrame = window.requestAnimationFrame(render);
    };

    const measure = () => {
      resizeFrame = 0;

      const topologyRect = topology.getBoundingClientRect();
      const topologyWidth = Math.max(topologyRect.width, 1);
      const topologyHeight = Math.max(topologyRect.height, 1);

      topologyTop = topologyRect.top + window.scrollY;
      viewportHeight = window.innerHeight;
      connectorMap.setAttribute(
        "viewBox",
        `0 0 ${topologyWidth.toFixed(2)} ${topologyHeight.toFixed(2)}`,
      );

      nodePoints = STEP_IDS.map((step) => {
        const cluster = clusters.get(step);
        const node = nodes.get(step);

        if (!cluster || !node) {
          return { x: 0, y: 0 };
        }

        const clusterRect = cluster.getBoundingClientRect();
        const isLeftStep = step === "01" || step === "03";
        const x = isLeftStep
          ? clusterRect.right - topologyRect.left + 14
          : clusterRect.left - topologyRect.left - 14;
        const y = clusterRect.top - topologyRect.top + clusterRect.height * 0.5;

        node.style.left = `${x.toFixed(2)}px`;
        node.style.top = `${y.toFixed(2)}px`;

        return { x, y };
      });

      for (let index = 0; index < 3; index += 1) {
        const pathData = buildWavePath(
          nodePoints[index],
          nodePoints[index + 1],
        );

        basePaths[index]?.setAttribute("d", pathData);
        segments[index]?.setAttribute("d", pathData);
      }

      scheduleRender();
    };

    const scheduleMeasure = () => {
      if (resizeFrame !== 0) {
        return;
      }

      resizeFrame = window.requestAnimationFrame(measure);
    };

    const attachScrollListener = () => {
      if (scrollListenerAttached) {
        return;
      }

      window.addEventListener("scroll", scheduleRender, { passive: true });
      scrollListenerAttached = true;
    };

    const detachScrollListener = () => {
      if (!scrollListenerAttached) {
        return;
      }

      window.removeEventListener("scroll", scheduleRender);
      scrollListenerAttached = false;
    };

    const resetToStaticLayout = () => {
      topology.removeAttribute("data-flow-ready");
      topology.removeAttribute("data-flow-active");
      topology.removeAttribute("data-active-step");
      topology.style.removeProperty("--flow-step-01");
      topology.style.removeProperty("--flow-step-02");
      topology.style.removeProperty("--flow-step-03");
      topology.style.removeProperty("--flow-step-04");

      segments.forEach((path) => {
        path.style.removeProperty("stroke-dashoffset");
        path.style.removeProperty("opacity");
      });

      nodes.forEach((node) => {
        node.style.removeProperty("left");
        node.style.removeProperty("top");
      });

      detachScrollListener();
    };

    const configureMode = () => {
      const canAnimate = desktopMedia.matches && !reducedMotionMedia.matches;

      if (!canAnimate) {
        resetToStaticLayout();
        return;
      }

      topology.dataset.flowReady = "true";
      measure();

      if (isObserved) {
        topology.dataset.flowActive = "true";
        attachScrollListener();
      }
    };

    const intersectionObserver = new IntersectionObserver(
      ([entry]) => {
        isObserved = entry.isIntersecting;

        if (!desktopMedia.matches || reducedMotionMedia.matches) {
          return;
        }

        if (entry.isIntersecting) {
          topology.dataset.flowActive = "true";
          measure();
          attachScrollListener();
        } else {
          topology.removeAttribute("data-flow-active");
          detachScrollListener();
        }
      },
      {
        rootMargin: "34% 0px 34% 0px",
        threshold: 0,
      },
    );

    const resizeObserver =
      typeof ResizeObserver === "undefined"
        ? null
        : new ResizeObserver(scheduleMeasure);

    intersectionObserver.observe(topology);
    resizeObserver?.observe(topology);
    window.addEventListener("resize", scheduleMeasure, { passive: true });
    desktopMedia.addEventListener("change", configureMode);
    reducedMotionMedia.addEventListener("change", configureMode);

    const initialFrame = window.requestAnimationFrame(configureMode);

    return () => {
      window.cancelAnimationFrame(initialFrame);

      if (animationFrame !== 0) {
        window.cancelAnimationFrame(animationFrame);
      }

      if (resizeFrame !== 0) {
        window.cancelAnimationFrame(resizeFrame);
      }

      detachScrollListener();
      intersectionObserver.disconnect();
      resizeObserver?.disconnect();
      window.removeEventListener("resize", scheduleMeasure);
      desktopMedia.removeEventListener("change", configureMode);
      reducedMotionMedia.removeEventListener("change", configureMode);
      resetToStaticLayout();
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
