import type { MouseEvent } from "react";

const NAVBAR_OFFSET = 104;

export function scrollToSection(
  event: MouseEvent<HTMLAnchorElement>,
  sectionId: string,
): void {
  event.preventDefault();

  const target = document.getElementById(sectionId);

  if (!target) {
    return;
  }

  const reducedMotion = window.matchMedia(
    "(prefers-reduced-motion: reduce)",
  ).matches;

  const targetTop =
    target.getBoundingClientRect().top + window.scrollY - NAVBAR_OFFSET;

  window.scrollTo({
    top: Math.max(0, targetTop),
    behavior: reducedMotion ? "auto" : "smooth",
  });

  window.history.replaceState(null, "", `#${sectionId}`);
}
