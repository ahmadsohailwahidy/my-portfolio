"use client";

import { useEffect, useState } from "react";

interface NavbarState {
  activeSection: string;
  isScrolled: boolean;
  scrollProgress: number;
}

export function useNavbarState(sectionIds: readonly string[]): NavbarState {
  const [activeSection, setActiveSection] = useState(sectionIds[0] ?? "home");

  const [isScrolled, setIsScrolled] = useState(false);

  const [scrollProgress, setScrollProgress] = useState(0);

  /*
    Observe page scrolling and calculate
    navbar state inside animation frames.
  */
  useEffect(() => {
    let frameId = 0;

    const updateScrollState = () => {
      frameId = 0;

      const scrollTop = window.scrollY;

      const scrollableHeight =
        document.documentElement.scrollHeight - window.innerHeight;

      const nextIsScrolled = scrollTop > 18;

      const nextProgress =
        scrollableHeight > 0
          ? Math.min(100, (scrollTop / scrollableHeight) * 100)
          : 0;

      setIsScrolled(nextIsScrolled);
      setScrollProgress(nextProgress);
    };

    const requestScrollUpdate = () => {
      if (frameId !== 0) {
        return;
      }

      frameId = window.requestAnimationFrame(updateScrollState);
    };

    /*
      Schedule initial calculation instead of
      updating state synchronously in Effect.
    */
    requestScrollUpdate();

    window.addEventListener("scroll", requestScrollUpdate, { passive: true });

    window.addEventListener("resize", requestScrollUpdate, { passive: true });

    return () => {
      if (frameId !== 0) {
        window.cancelAnimationFrame(frameId);
      }

      window.removeEventListener("scroll", requestScrollUpdate);

      window.removeEventListener("resize", requestScrollUpdate);
    };
  }, []);

  /*
    Observe visible portfolio sections.
  */
  useEffect(() => {
    const sections = sectionIds
      .map((id) => document.getElementById(id))
      .filter((section): section is HTMLElement => section !== null);

    if (sections.length === 0) {
      return;
    }

    let initialHashFrameId = 0;

    const synchronizeHash = () => {
      const hash = window.location.hash.slice(1);

      if (hash && sectionIds.includes(hash)) {
        setActiveSection(hash);
      }
    };

    /*
      Synchronize the initial URL hash through
      a browser callback instead of setting
      state directly in the Effect body.
    */
    initialHashFrameId = window.requestAnimationFrame(synchronizeHash);

    window.addEventListener("hashchange", synchronizeHash);

    const observer = new IntersectionObserver(
      (entries) => {
        const visibleEntry = entries
          .filter((entry) => entry.isIntersecting)
          .sort(
            (first, second) =>
              second.intersectionRatio - first.intersectionRatio,
          )[0];

        const nextSectionId = visibleEntry?.target.id;

        if (nextSectionId) {
          setActiveSection(nextSectionId);
        }
      },
      {
        root: null,
        rootMargin: "-18% 0px -68% 0px",
        threshold: [0, 0.15, 0.35, 0.6, 1],
      },
    );

    sections.forEach((section) => {
      observer.observe(section);
    });

    return () => {
      if (initialHashFrameId !== 0) {
        window.cancelAnimationFrame(initialHashFrameId);
      }

      window.removeEventListener("hashchange", synchronizeHash);

      observer.disconnect();
    };
  }, [sectionIds]);

  return {
    activeSection,
    isScrolled,
    scrollProgress,
  };
}
