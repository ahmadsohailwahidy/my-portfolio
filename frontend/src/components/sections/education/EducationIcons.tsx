import type { EducationIconName} from "@/types/education";

interface EducationIconProps {
  readonly name: EducationIconName;
  readonly className?: string;
}

export function EducationIcon({ name, className }: EducationIconProps) {
  const commonProps = {
    className,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.7,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
    "aria-hidden": true,
    focusable: false,
  };

  switch (name) {
    case "campus":
      return (
        <svg {...commonProps}>
          <path d="m3 9 9-5 9 5-9 5-9-5Z" />
          <path d="M6 11.5V17l6 3 6-3v-5.5M21 9v6" />
        </svg>
      );

    case "systems":
      return (
        <svg {...commonProps}>
          <rect x="3" y="4" width="7" height="6" rx="1.5" />
          <rect x="14" y="4" width="7" height="6" rx="1.5" />
          <rect x="8.5" y="15" width="7" height="5" rx="1.5" />
          <path d="M6.5 10v2.5H12M17.5 10v2.5H12M12 12.5V15" />
        </svg>
      );

    case "database":
      return (
        <svg {...commonProps}>
          <ellipse cx="12" cy="5.5" rx="7" ry="3" />
          <path d="M5 5.5v6c0 1.66 3.13 3 7 3s7-1.34 7-3v-6" />
          <path d="M5 11.5v6c0 1.66 3.13 3 7 3s7-1.34 7-3v-6" />
        </svg>
      );

    case "software":
      return (
        <svg {...commonProps}>
          <path d="m8.5 8-4 4 4 4M15.5 8l4 4-4 4M13.5 5l-3 14" />
        </svg>
      );

    case "web":
      return (
        <svg {...commonProps}>
          <rect x="3" y="4" width="18" height="16" rx="2" />
          <path d="M3 8h18M7 6h.01M10 6h.01M7 12h4M7 16h10M14 12h3" />
        </svg>
      );

    case "learning":
      return (
        <svg {...commonProps}>
          <path d="M4 5.5A2.5 2.5 0 0 1 6.5 3H11v16H6.5A2.5 2.5 0 0 0 4 21.5v-16Z" />
          <path d="M20 5.5A2.5 2.5 0 0 0 17.5 3H13v16h4.5a2.5 2.5 0 0 1 2.5 2.5v-16Z" />
        </svg>
      );

    case "diploma":
      return (
        <svg {...commonProps}>
          <rect x="4" y="3" width="16" height="14" rx="2" />
          <path d="M8 7h8M8 11h5" />
          <path d="m14.5 17 1.5 4 2-1 2 1-1.5-4" />
        </svg>
      );
  }
}
