import type { ExpertiseIconName } from "@/types/expertise";

interface ExpertiseIconProps {
  readonly name: ExpertiseIconName;
  readonly className?: string;
}

export function ExpertiseIcon({ name, className }: ExpertiseIconProps) {
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
    case "layers":
      return (
        <svg {...commonProps}>
          <path d="m12 3-8 4.5 8 4.5 8-4.5L12 3Z" />
          <path d="m4 12 8 4.5 8-4.5" />
          <path d="m4 16.5 8 4.5 8-4.5" />
        </svg>
      );

    case "server":
      return (
        <svg {...commonProps}>
          <rect x="4" y="3.5" width="16" height="6" rx="2" />
          <rect x="4" y="14.5" width="16" height="6" rx="2" />
          <path d="M8 6.5h.01M8 17.5h.01M12 6.5h5M12 17.5h5" />
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

    case "analytics":
      return (
        <svg {...commonProps}>
          <path d="M4 20V10M10 20V4M16 20v-7M22 20H2" />
          <path d="m4 8 6-5 6 7 5-4" />
        </svg>
      );

    case "automation":
      return (
        <svg {...commonProps}>
          <path d="M8.5 3.5h7l.7 2.2 2.1.9 2.1-1.1 1.6 1.6-1.1 2.1.9 2.1 2.2.7v2l-2.2.7-.9 2.1 1.1 2.1-1.6 1.6-2.1-1.1-2.1.9-.7 2.2h-2l-.7-2.2-2.1-.9-2.1 1.1-1.6-1.6 1.1-2.1-.9-2.1L3.5 14v-2l2.2-.7.9-2.1-1.1-2.1 1.6-1.6 2.1 1.1 2.1-.9.7-2.2Z" />
          <circle cx="12.5" cy="13" r="3" />
        </svg>
      );

    case "cloud":
      return (
        <svg {...commonProps}>
          <path d="M7.5 18.5h10a4 4 0 0 0 .7-7.94A6.25 6.25 0 0 0 6.24 8.7 4.75 4.75 0 0 0 7.5 18.5Z" />
          <path d="M9 14.5h6M12 11.5v6" />
        </svg>
      );

    case "intelligence":
      return (
        <svg {...commonProps}>
          <path d="M9 4.5a3 3 0 0 1 5.55-1.58A3.5 3.5 0 0 1 19 6.3a3.75 3.75 0 0 1 .45 6.95A3.5 3.5 0 0 1 15.5 19 3.5 3.5 0 0 1 9 20.5a3.5 3.5 0 0 1-4.45-4.75A3.75 3.75 0 0 1 5 8.8 3.5 3.5 0 0 1 9 4.5Z" />
          <path d="M9 4.5v16M9 8h3M9 13h4M15 6.5v3M15 14v5" />
        </svg>
      );

    case "product":
      return (
        <svg {...commonProps}>
          <path d="m12 3 8 4.5v9L12 21l-8-4.5v-9L12 3Z" />
          <path d="m4.5 7.75 7.5 4.2 7.5-4.2M12 12v9" />
          <path d="m8 5.25 8 4.5" />
        </svg>
      );
  }
}
