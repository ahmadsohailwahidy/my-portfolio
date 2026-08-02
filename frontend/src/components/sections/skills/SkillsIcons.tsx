import type { SkillIconName } from "@/types/skills";

interface SkillIconProps {
  readonly name: SkillIconName;
  readonly className?: string;
}

interface SymbolIconProps {
  readonly symbol: string;
  readonly className?: string;
  readonly compact?: boolean;
}

function SymbolIcon({ symbol, className, compact = false, }: SymbolIconProps) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden={true}
      focusable={false}
    >
      <rect
        x="3.25"
        y="3.25"
        width="17.5"
        height="17.5"
        rx="4.25"
        stroke="currentColor"
        strokeWidth="1.5"
      />
      <text
        x="12"
        y="12.35"
        fill="currentColor"
        fontFamily="Arial, Helvetica, sans-serif"
        fontSize={compact ? "6.3" : "7.4"}
        fontWeight="700"
        textAnchor="middle"
        dominantBaseline="middle"
      >
        {symbol}
      </text>
    </svg>
  );
}

export function SkillIcon({ name, className }: SkillIconProps) {
  const commonProps = {
    className,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.65,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
    "aria-hidden": true,
    focusable: false,
  };

  switch (name) {
    case "foundation":
      return (
        <svg {...commonProps}>
          <path d="M4 18.5h16M6.5 18.5v-9l5.5-4 5.5 4v9" />
          <path d="M9.5 18.5v-5h5v5M8 9.5h8" />
        </svg>
      );

    case "frontend":
      return (
        <svg {...commonProps}>
          <rect x="3" y="4" width="18" height="16" rx="2.5" />
          <path d="M3 8.5h18M7 6.25h.01M10 6.25h.01" />
          <path d="m8.5 13-2 2 2 2M15.5 13l2 2-2 2M13.5 11.5l-3 7" />
        </svg>
      );

    case "backend":
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

    case "intelligence":
      return (
        <svg {...commonProps}>
          <path d="M9 4.5a3 3 0 0 1 5.55-1.58A3.5 3.5 0 0 1 19 6.3a3.75 3.75 0 0 1 .45 6.95A3.5 3.5 0 0 1 15.5 19 3.5 3.5 0 0 1 9 20.5a3.5 3.5 0 0 1-4.45-4.75A3.75 3.75 0 0 1 5 8.8 3.5 3.5 0 0 1 9 4.5Z" />
          <path d="M9 4.5v16M9 8h3M9 13h4M15 6.5v3M15 14v5" />
        </svg>
      );

    case "delivery":
      return (
        <svg {...commonProps}>
          <path d="M4 7.5h10v9H4zM14 10h3l3 3v3.5h-6z" />
          <circle cx="8" cy="18.5" r="1.7" />
          <circle cx="17" cy="18.5" r="1.7" />
          <path d="M7 4h9M5 2.5h6" />
        </svg>
      );

    case "react":
      return (
        <svg {...commonProps}>
          <circle cx="12" cy="12" r="1.8" fill="currentColor" stroke="none" />
          <ellipse cx="12" cy="12" rx="9" ry="3.6" />
          <ellipse
            cx="12"
            cy="12"
            rx="9"
            ry="3.6"
            transform="rotate(60 12 12)"
          />
          <ellipse
            cx="12"
            cy="12"
            rx="9"
            ry="3.6"
            transform="rotate(120 12 12)"
          />
        </svg>
      );

    case "nextjs":
      return <SymbolIcon symbol="N" className={className} />;

    case "typescript":
      return <SymbolIcon symbol="TS" className={className} compact />;

    case "tailwind":
      return (
        <svg {...commonProps}>
          <path d="M3 9.5c2.25-3 4.5-3 6.75 0s4.5 3 6.75 0c1.5-2 3-2 4.5 0" />
          <path d="M3 14.5c2.25-3 4.5-3 6.75 0s4.5 3 6.75 0c1.5-2 3-2 4.5 0" />
        </svg>
      );

    case "java":
      return (
        <svg {...commonProps}>
          <path d="M8 16.5h8.5a2.5 2.5 0 0 0 0-5H16" />
          <path d="M7 10.5h9v4.25A4.25 4.25 0 0 1 11.75 19h-.5A4.25 4.25 0 0 1 7 14.75v-4.25Z" />
          <path d="M10 8c2-1.2-1-2.2 1-3.5M13 8c2-1.2-1-2.2 1-3.5M6 21h12" />
        </svg>
      );

    case "csharp":
      return <SymbolIcon symbol="C#" className={className} compact />;

    case "dotnet":
      return <SymbolIcon symbol=".NET" className={className} compact />;

    case "api":
      return (
        <svg {...commonProps}>
          <path d="M8 8.5 4.5 12 8 15.5M16 8.5l3.5 3.5-3.5 3.5M14 5l-4 14" />
        </svg>
      );

    case "python":
      return (
        <svg {...commonProps}>
          <path d="M12 3.5H8.5A3.5 3.5 0 0 0 5 7v3h7.5A2.5 2.5 0 0 1 15 12.5V15" />
          <path d="M12 20.5h3.5A3.5 3.5 0 0 0 19 17v-3h-7.5A2.5 2.5 0 0 1 9 11.5V9" />
          <path d="M9 6.5h.01M15 17.5h.01" />
        </svg>
      );

    case "fastapi":
      return (
        <svg {...commonProps}>
          <path d="M13.5 2.75 5.25 13h6l-1 8.25L18.75 11h-6l.75-8.25Z" />
        </svg>
      );

    case "database-design":
      return (
        <svg {...commonProps}>
          <ellipse cx="8" cy="6" rx="4.5" ry="2" />
          <path d="M3.5 6v7c0 1.1 2 2 4.5 2 1.1 0 2.1-.18 2.88-.48M12.5 6v4" />
          <circle cx="16.5" cy="15.5" r="3.5" />
          <path d="M16.5 10.5v1.5M16.5 19v1.5M11.5 15.5H13M20 15.5h1.5" />
        </svg>
      );

    case "postgresql":
      return <SymbolIcon symbol="PG" className={className} compact />;

    case "sqlserver":
      return (
        <svg {...commonProps}>
          <ellipse cx="12" cy="5.5" rx="7" ry="3" />
          <path d="M5 5.5v5c0 1.66 3.13 3 7 3s7-1.34 7-3v-5" />
          <path d="M5 10.5v5c0 1.66 3.13 3 7 3s7-1.34 7-3v-5" />
          <path d="M9 9.5h6" />
        </svg>
      );

    case "data-model":
      return (
        <svg {...commonProps}>
          <rect x="3" y="4" width="6" height="5" rx="1.2" />
          <rect x="15" y="4" width="6" height="5" rx="1.2" />
          <rect x="9" y="15" width="6" height="5" rx="1.2" />
          <path d="M6 9v2.5h12V9M12 11.5V15" />
        </svg>
      );

    case "warehouse":
      return (
        <svg {...commonProps}>
          <path d="M3 9.5 12 4l9 5.5V20H3V9.5Z" />
          <path d="M7 20v-6h10v6M8 10h8M12 4v6" />
        </svg>
      );

    case "bi":
      return (
        <svg {...commonProps}>
          <path d="M4 20V10M10 20V4M16 20v-7M22 20H2" />
          <path d="m4 8 6-5 6 7 5-4" />
        </svg>
      );

    case "ai":
      return (
        <svg {...commonProps}>
          <path d="m12 3 1.35 4.15L17.5 8.5l-4.15 1.35L12 14l-1.35-4.15L6.5 8.5l4.15-1.35L12 3Z" />
          <path d="m18.5 14 .75 2.25L21.5 17l-2.25.75L18.5 20l-.75-2.25L15.5 17l2.25-.75.75-2.25ZM5.5 14l.55 1.45L7.5 16l-1.45.55L5.5 18l-.55-1.45L3.5 16l1.45-.55L5.5 14Z" />
        </svg>
      );

    case "prompt":
      return (
        <svg {...commonProps}>
          <path d="M4 5.5h16v11H9l-5 4v-15Z" />
          <path d="m8 9 2 2-2 2M12.5 13H16" />
        </svg>
      );

    case "git":
      return (
        <svg {...commonProps}>
          <circle cx="7" cy="5" r="2" />
          <circle cx="17" cy="8" r="2" />
          <circle cx="7" cy="19" r="2" />
          <path d="M7 7v10M9 8h4a4 4 0 0 1 4 4v-2" />
        </svg>
      );

    case "docker":
      return (
        <svg {...commonProps}>
          <path d="M4 12h13.5c1.75 0 2.75-.5 3.5-1.5-.25 4.75-3.4 8-8.5 8H9c-3.3 0-5-2.2-5-6.5Z" />
          <path d="M6 9h3v3H6zM9 9h3v3H9zM12 9h3v3h-3zM9 6h3v3H9zM12 6h3v3h-3z" />
          <path d="M18 8.5c.8-.8 1.8-1 3-.6" />
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
        </svg>
      );

    case "kubernetes":
      return (
        <svg {...commonProps}>
          <circle cx="12" cy="12" r="8.5" />
          <circle cx="12" cy="12" r="2.2" />
          <path d="M12 3.5V8M12 16v4.5M3.5 12H8M16 12h4.5M6 6l3.2 3.2M14.8 14.8 18 18M18 6l-3.2 3.2M9.2 14.8 6 18" />
        </svg>
      );
  }
}
