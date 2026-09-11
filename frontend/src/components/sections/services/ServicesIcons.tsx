import type { SVGProps } from "react";

import type { ServiceIconName } from "@/types/services";

interface ServicesIconProps extends SVGProps<SVGSVGElement> {
  name: ServiceIconName;
}

export function ServicesIcon({ name, ...props }: ServicesIconProps) {
  const commonProps = {
    viewBox: "0 0 32 32",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.7,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
    "aria-hidden": true,
    focusable: false,
    ...props,
  };

  switch (name) {
    case "interface":
      return (
        <svg {...commonProps}>
          <rect x="5.5" y="6.5" width="21" height="15" rx="1.5" />
          <path d="M12 26h8M16 21.5V26M9 10h8M9 13h5" />
        </svg>
      );
    case "integration":
      return (
        <svg {...commonProps}>
          <circle cx="8" cy="16" r="3" />
          <circle cx="23" cy="8" r="3" />
          <circle cx="23" cy="24" r="3" />
          <path d="m10.7 14.6 9.5-5M10.7 17.4l9.5 5" />
        </svg>
      );
    case "analytics":
      return (
        <svg {...commonProps}>
          <path d="M7 25V17M15 25V11M23 25V5" />
        </svg>
      );
    case "build":
      return (
        <svg {...commonProps}>
          <path d="m10 8-6 8 6 8M22 8l6 8-6 8M20 4 12 28" />
        </svg>
      );
    case "improve":
      return (
        <svg {...commonProps}>
          <path d="M7 25v-7M15 25V12M23 25V5" />
        </svg>
      );
    case "integrate":
      return (
        <svg {...commonProps}>
          <circle cx="8" cy="16" r="3" />
          <circle cx="23" cy="8" r="3" />
          <circle cx="23" cy="24" r="3" />
          <path d="m10.7 14.6 9.5-5M10.7 17.4l9.5 5" />
        </svg>
      );
    case "deliver":
      return (
        <svg {...commonProps}>
          <circle cx="16" cy="16" r="7" />
          <circle cx="16" cy="16" r="2" />
          <path d="M16 3v4M16 25v4M3 16h4M25 16h4M6.8 6.8l2.8 2.8M22.4 22.4l2.8 2.8M25.2 6.8l-2.8 2.8M9.6 22.4l-2.8 2.8" />
        </svg>
      );
    case "collaboration":
      return (
        <svg {...commonProps}>
          <circle cx="11" cy="11" r="4" />
          <circle cx="22" cy="12" r="3.5" />
          <path d="M4 26c0-5 3-8 7-8s7 3 7 8M17 26c0-4 2-6.5 5-6.5s5 2.5 5 6.5" />
        </svg>
      );
    case "team":
      return (
        <svg {...commonProps}>
          <rect x="6" y="7" width="20" height="15" rx="1.5" />
          <path d="M3 26h26M11 22l-2 4M21 22l2 4" />
        </svg>
      );
    case "launch":
      return (
        <svg {...commonProps}>
          <path d="M18 5c5 1 8 4 9 9l-7 7-7-7zM13 14l-5 1-3 5 7 1M20 21l-1 7-5-3-1-4M18 9l-5 5" />
          <circle cx="20" cy="12" r="2" />
        </svg>
      );
    case "define":
      return (
        <svg {...commonProps}>
          <path d="M8 3h11l5 5v21H8zM19 3v7h5M12 16h8M12 21h8" />
        </svg>
      );
    case "implement":
      return (
        <svg {...commonProps}>
          <path d="m11 8-7 8 7 8M21 8l7 8-7 8M20 4 12 28" />
        </svg>
      );
    case "review":
      return (
        <svg {...commonProps}>
          <circle cx="14" cy="14" r="8" />
          <path d="m20 20 8 8" />
        </svg>
      );
    case "handoff":
      return (
        <svg {...commonProps}>
          <path d="m6 16 7 7L27 8" />
        </svg>
      );
    case "checkCircle":
      return (
        <svg {...commonProps}>
          <circle cx="16" cy="16" r="10" />
          <path d="m10 16 4 4 8-9" />
        </svg>
      );
    case "arrow":
      return (
        <svg {...commonProps}>
          <path d="M6 16h20M20 10l6 6-6 6" />
        </svg>
      );
  }
}
