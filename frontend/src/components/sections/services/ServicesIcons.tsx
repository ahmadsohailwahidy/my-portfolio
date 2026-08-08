import type { SVGProps } from "react";

import type { ServiceIconName } from "@/types/services";

interface ServicesIconProps extends SVGProps<SVGSVGElement> {
  name: ServiceIconName;
}

export function ServicesIcon({ name, ...props }: ServicesIconProps) {
  const commonProps = {
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.7,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
    "aria-hidden": true,
    ...props,
  };

  switch (name) {
    case "frontend":
      return (
        <svg {...commonProps}>
          <rect x="3" y="4" width="18" height="16" rx="2.2" />
          <path d="M3 8h18" />
          <path d="m8 12-2 2 2 2" />
          <path d="m16 12 2 2-2 2" />
          <path d="m13.5 11-3 6" />
        </svg>
      );
    case "react":
      return (
        <svg {...commonProps}>
          <circle cx="12" cy="12" r="1.7" />
          <ellipse cx="12" cy="12" rx="8.8" ry="3.5" />
          <ellipse
            cx="12"
            cy="12"
            rx="8.8"
            ry="3.5"
            transform="rotate(60 12 12)"
          />
          <ellipse
            cx="12"
            cy="12"
            rx="8.8"
            ry="3.5"
            transform="rotate(120 12 12)"
          />
        </svg>
      );
    case "api":
      return (
        <svg {...commonProps}>
          <path d="M8.5 8.5 5 12l3.5 3.5" />
          <path d="m15.5 8.5 3.5 3.5-3.5 3.5" />
          <path d="m13.5 5-3 14" />
          <circle cx="4" cy="5" r="1.5" />
          <circle cx="20" cy="19" r="1.5" />
          <path d="M5.4 5.6 8 7" />
          <path d="m16 17 2.6 1.4" />
        </svg>
      );
    case "dashboard":
      return (
        <svg {...commonProps}>
          <rect x="3" y="3" width="18" height="18" rx="2.4" />
          <path d="M9 3v18" />
          <path d="M9 10h12" />
          <path d="M13 15h4" />
          <path d="M13 18h2" />
          <circle cx="6" cy="7" r="1" />
          <circle cx="6" cy="12" r="1" />
        </svg>
      );
    case "collaboration":
      return (
        <svg {...commonProps}>
          <circle cx="8" cy="9" r="3" />
          <circle cx="17" cy="8" r="2.3" />
          <path d="M3.5 19c.6-3 2.4-4.7 4.5-4.7s3.9 1.7 4.5 4.7" />
          <path d="M14.2 13.5c2.7-.6 5.3 1 6.3 3.9" />
        </svg>
      );
    case "workflow":
      return (
        <svg {...commonProps}>
          <circle cx="5" cy="12" r="2" />
          <circle cx="19" cy="6" r="2" />
          <circle cx="19" cy="18" r="2" />
          <path d="M7 12h4.5a3 3 0 0 0 3-3V8" />
          <path d="M11.5 12a3 3 0 0 1 3 3v1" />
          <path d="m17 4 2-2 2 2" />
        </svg>
      );
    case "check":
      return (
        <svg {...commonProps}>
          <path d="m5 12.5 4 4L19 7" />
        </svg>
      );
    case "arrow":
      return (
        <svg {...commonProps}>
          <path d="M5 12h14" />
          <path d="m14 7 5 5-5 5" />
        </svg>
      );
  }
}
