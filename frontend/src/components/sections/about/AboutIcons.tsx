import type { AboutIconName, AboutTechnologyIconName } from "@/types/about";

interface AboutIconProps {
  name: AboutIconName;
  className?: string;
}

export function AboutIcon({ name, className }: AboutIconProps) {
  const commonProps = {
    className,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.6,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
    focusable: false,
    "aria-hidden": true,
  };

  switch (name) {
    case "intelligent-systems":
      return (
        <svg {...commonProps}>
          <path d="M9 3h6" />
          <path d="M10 3v3.25" />
          <path d="M14 3v3.25" />
          <rect x="5" y="6.25" width="14" height="12.75" rx="3" />
          <path d="M8.5 11.25h.01" />
          <path d="M15.5 11.25h.01" />
          <path d="M9 15h6" />
          <path d="M3 11h2" />
          <path d="M19 11h2" />
        </svg>
      );

    case "scalable-software":
      return (
        <svg {...commonProps}>
          <path d="M4 7.5 12 3l8 4.5-8 4.5-8-4.5Z" />
          <path d="m4 12 8 4.5 8-4.5" />
          <path d="m4 16.5 8 4.5 8-4.5" />
        </svg>
      );

    case "data-platforms":
      return (
        <svg {...commonProps}>
          <ellipse cx="12" cy="5.5" rx="7" ry="3" />
          <path d="M5 5.5v6c0 1.66 3.13 3 7 3s7-1.34 7-3v-6" />
          <path d="M5 11.5v6c0 1.66 3.13 3 7 3s7-1.34 7-3v-6" />
        </svg>
      );

    case "product-innovation":
      return (
        <svg {...commonProps}>
          <path d="M9 18h6" />
          <path d="M10 22h4" />
          <path d="M8.1 14.5A7 7 0 1 1 15.9 14.5c-.96.72-1.4 1.55-1.4 2.5h-5c0-.95-.44-1.78-1.4-2.5Z" />
          <path d="M12 2v2" />
          <path d="m4.93 4.93 1.41 1.41" />
          <path d="M2 12h2" />
          <path d="m19.07 4.93-1.41 1.41" />
          <path d="M20 12h2" />
        </svg>
      );

    case "knowledge-community":
      return (
        <svg {...commonProps}>
          <path d="M4 5.5A2.5 2.5 0 0 1 6.5 3H11v16H6.5A2.5 2.5 0 0 0 4 21.5v-16Z" />
          <path d="M20 5.5A2.5 2.5 0 0 0 17.5 3H13v16h4.5a2.5 2.5 0 0 1 2.5 2.5v-16Z" />
        </svg>
      );
  }
}

interface ArrowIconProps {
  className?: string;
}

export function ArrowIcon({ className }: ArrowIconProps) {
  return (
    <svg
      className={className}
      viewBox="0 0 20 20"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
      focusable="false"
      aria-hidden="true"
    >
      <path d="M4 10h12" />
      <path d="m11 5 5 5-5 5" />
    </svg>
  );
}

interface TechnologyIconProps {
  name: AboutTechnologyIconName;
  className?: string;
}

export function TechnologyIcon({ name, className }: TechnologyIconProps) {
  const commonProps = {
    className,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.7,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
    focusable: false,
    "aria-hidden": true,
  };

  switch (name) {
    case "nextjs":
      return (
        <svg {...commonProps}>
          <circle cx="12" cy="12" r="9" />
          <path d="M9 16V8l6 8V8" />
        </svg>
      );

    case "typescript":
      return (
        <svg {...commonProps}>
          <rect x="4" y="4" width="16" height="16" rx="3" />
          <path d="M9 9h6" />
          <path d="M12 9v7" />
          <path d="M15.8 12.8c.2-.3.6-.5 1-.5.8 0 1.4.5 1.4 1.2 0 1.4-2.4 1.1-2.4 2.6 0 .7.6 1.2 1.5 1.2.5 0 1-.2 1.3-.5" />
        </svg>
      );

    case "react":
      return (
        <svg {...commonProps}>
          <circle cx="12" cy="12" r="1.3" />
          <ellipse cx="12" cy="12" rx="8" ry="3.2" />
          <ellipse
            cx="12"
            cy="12"
            rx="8"
            ry="3.2"
            transform="rotate(60 12 12)"
          />
          <ellipse
            cx="12"
            cy="12"
            rx="8"
            ry="3.2"
            transform="rotate(120 12 12)"
          />
        </svg>
      );

    case "fastapi":
      return (
        <svg {...commonProps}>
          <path d="M12 3 5 10h4v11l7-8h-4V3Z" />
        </svg>
      );

    case "postgresql":
      return (
        <svg {...commonProps}>
          <path d="M8.8 18.8c-.8 0-1.3-.6-1.3-1.5v-5.4c0-4.2 2.2-6.9 4.9-6.9 2.4 0 4.1 2.1 4.1 5.2 0 3.8-1.8 7.3-4.2 7.3-.3 0-.6 0-.9-.1" />
          <path d="M8.1 9.2c.9 1 2.2 1.6 3.7 1.6 1.2 0 2.3-.4 3.2-1" />
          <path d="M11.8 17.4v2.8" />
          <path d="M10.1 20.2h3.4" />
          <path d="M8.3 13.7c-.7.2-1.6 1-2.2 2" />
        </svg>
      );

    case "docker":
      return (
        <svg {...commonProps}>
          <rect x="5" y="9" width="3" height="3" />
          <rect x="8.5" y="9" width="3" height="3" />
          <rect x="12" y="9" width="3" height="3" />
          <rect x="8.5" y="5.5" width="3" height="3" />
          <rect x="12" y="5.5" width="3" height="3" />
          <path d="M4 12.5h11.5c-.2 2.8-2.4 4.5-5.3 4.5H8.8c-2.2 0-4-1.7-4.8-4.5Z" />
          <path d="M17.4 10.6c.6-.8 1.5-1 2.2-.9.2.9 0 1.8-.6 2.5-.6.8-1.5 1.2-2.6 1.3" />
        </svg>
      );
  }
}
