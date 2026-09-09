import type { SkillIconName } from "@/types/skills";

interface SkillIconProps {
  readonly name:
    | SkillIconName
    | "frontend"
    | "backend"
    | "database"
    | "intelligence";
  readonly className?: string;
}

interface SymbolIconProps {
  readonly symbol: string;
  readonly className?: string;
  readonly compact?: boolean;
}

function SymbolIcon({ symbol, className, compact = false }: SymbolIconProps) {
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
        rx="3.2"
        stroke="currentColor"
        strokeWidth="1.5"
      />
      <text
        x="12"
        y="12.35"
        fill="currentColor"
        fontFamily="Arial, Helvetica, sans-serif"
        fontSize={compact ? "5.9" : "7.4"}
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
    strokeWidth: 1.7,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
    "aria-hidden": true,
    focusable: false,
  };

  switch (name) {
    case "frontend":
      return (
        <svg {...commonProps}>
          <rect x="3" y="4" width="18" height="15.8" rx="2.2" />
          <path d="M3 8.5h18M8.5 13.2 6.2 15.5l2.3 2.3M15.5 13.2l2.3 2.3-2.3 2.3M13.5 11.3l-3 8" />
        </svg>
      );

    case "backend":
      return (
        <svg {...commonProps}>
          <rect x="4" y="4" width="16" height="5.2" rx="1.7" />
          <rect x="4" y="14.8" width="16" height="5.2" rx="1.7" />
          <path d="M7.8 6.6h.01M11.2 6.6h5.2M7.8 17.4h.01M11.2 17.4h5.2M12 9.2v5.6" />
        </svg>
      );

    case "database":
      return (
        <svg {...commonProps}>
          <ellipse cx="12" cy="5.8" rx="7" ry="3" />
          <path d="M5 5.8v6.1c0 1.66 3.13 3 7 3s7-1.34 7-3V5.8M5 11.9v6.1c0 1.66 3.13 3 7 3s7-1.34 7-3v-6.1" />
        </svg>
      );

    case "intelligence":
      return (
        <svg {...commonProps}>
          <path d="M9.1 5.1A3.4 3.4 0 0 0 5.8 8.5c0 .6.14 1.16.4 1.67A3.55 3.55 0 0 0 7.4 17h1.7M14.9 5.1a3.4 3.4 0 0 1 3.3 3.4c0 .6-.14 1.16-.4 1.67A3.55 3.55 0 0 1 16.6 17h-1.7M9.1 5.1A3.1 3.1 0 0 1 12 3.7a3.1 3.1 0 0 1 2.9 1.4M9.1 5.1v13.8M14.9 5.1v13.8" />
          <path d="M7.5 9.2h1.6M14.9 9.2h1.6M7.8 13h1.3M14.9 13h1.3M12 7.1v9.8M10.2 20.3h3.6" />
        </svg>
      );

    case "react":
      return (
        <svg {...commonProps}>
          <circle cx="12" cy="12" r="1.9" fill="currentColor" stroke="none" />
          <ellipse cx="12" cy="12" rx="8.6" ry="3.4" />
          <ellipse
            cx="12"
            cy="12"
            rx="8.6"
            ry="3.4"
            transform="rotate(60 12 12)"
          />
          <ellipse
            cx="12"
            cy="12"
            rx="8.6"
            ry="3.4"
            transform="rotate(120 12 12)"
          />
        </svg>
      );

    case "nextjs":
      return (
        <svg {...commonProps}>
          <circle cx="12" cy="12" r="8.4" />
          <path d="M8.4 16V8.2l7.25 8.2V8.2" />
          <path d="m14.8 14.9 3.2 3.2" opacity="0.55" />
        </svg>
      );

    case "typescript":
      return <SymbolIcon symbol="TS" className={className} compact />;

    case "tailwind":
      return (
        <svg {...commonProps}>
          <path d="M4 9.2c1.95-2.7 3.9-2.7 5.85 0s3.9 2.7 5.85 0 3.9-2.7 5.85 0" />
          <path d="M4 14.8c1.95-2.7 3.9-2.7 5.85 0s3.9 2.7 5.85 0 3.9-2.7 5.85 0" />
        </svg>
      );

    case "nodejs":
      return (
        <svg {...commonProps}>
          <path d="m12 3.5 7.2 4.15v8.7L12 20.5l-7.2-4.15v-8.7L12 3.5Z" />
          <path d="M8.4 13.8c.65.75 1.55 1.15 2.7 1.15 1.3 0 2.1-.52 2.1-1.4 0-.78-.55-1.2-1.85-1.48l-.8-.18c-1.36-.3-2.05-.94-2.05-1.93 0-1.17.98-1.95 2.55-1.95 1.02 0 1.9.32 2.55.9" />
        </svg>
      );

    case "express":
      return (
        <svg {...commonProps}>
          <path d="M4.2 7.2h8M4.2 12h7.1M4.2 16.8h8.8" />
          <path d="M14.8 8.2h4.5l-4.5 7.6h4.8" />
        </svg>
      );

    case "java":
      return (
        <svg {...commonProps}>
          <path d="M8 16.8h8.5a2.5 2.5 0 0 0 0-5H16" />
          <path d="M7 10.8h9v4.25A4.25 4.25 0 0 1 11.75 19h-.5A4.25 4.25 0 0 1 7 15.05v-4.25Z" />
          <path d="M10 8.1c2-1.2-1-2.2 1-3.5M13 8.1c2-1.2-1-2.2 1-3.5M6 21h12" />
        </svg>
      );

    case "dotnet":
      return <SymbolIcon symbol=".NET" className={className} compact />;

    case "postgresql":
      return (
        <svg {...commonProps}>
          <path d="M7.1 7.7c0-2.5 1.85-4.2 4.9-4.2s4.9 1.7 4.9 4.2v4.5c0 2.1-1.5 3.7-3.9 4.05" />
          <path d="M9.05 16.2c-1.2-.7-1.95-1.92-1.95-3.5v-5M10.1 8.2c.35-1.15 1.05-1.75 2.05-1.75 1.45 0 2.2 1.05 2.2 2.55v4.2c0 2.45-.95 4.6-2.35 6.1-.55.58-1.2.45-1.3-.32l-.22-2.06" />
          <path d="M10.5 13.5c-1.15.25-2.05.92-2.05 1.72 0 1 1.35 1.78 3.1 1.78.55 0 1.05-.08 1.5-.22" />
        </svg>
      );

    case "mongodb":
      return (
        <svg {...commonProps}>
          <path d="M12 3.2c3.35 3.15 5.1 6.05 5.1 8.72 0 3.2-2.05 5.85-5.1 7.55-3.05-1.7-5.1-4.35-5.1-7.55C6.9 9.25 8.65 6.35 12 3.2Z" />
          <path d="M12 5.2v14.9M12 19.45l-1.45 1.35" />
        </svg>
      );

    case "mysql":
      return (
        <svg {...commonProps}>
          <ellipse cx="10.3" cy="8.2" rx="5.8" ry="2.7" />
          <path d="M4.5 8.2v5.6c0 1.5 2.6 2.7 5.8 2.7 1.5 0 2.85-.27 3.85-.72M15.95 8.15v2.6" />
          <path d="M14.2 14.1c1.5-1.6 3.15-1.65 5.3-.35-1.1.1-1.82.55-2.2 1.35.75.05 1.35.33 1.8.82-1.85.25-3.5-.35-4.9-1.82Z" />
        </svg>
      );

    case "sqlserver":
      return (
        <svg {...commonProps}>
          <ellipse cx="12" cy="5.8" rx="7" ry="3" />
          <path d="M5 5.8v5.4c0 1.66 3.13 3 7 3s7-1.34 7-3V5.8M5 11.2v5.4c0 1.66 3.13 3 7 3s7-1.34 7-3v-5.4" />
          <path d="M8.5 9.4h7" />
        </svg>
      );

    case "warehouse":
      return (
        <svg {...commonProps}>
          <path d="M3.5 10 12 4.5 20.5 10v10h-17V10Z" />
          <path d="M7.5 20v-5.8h9V20M8 10.2h8M12 4.5v5.7" />
        </svg>
      );

    case "powerbi":
      return (
        <svg {...commonProps}>
          <path d="M6 19V9.5c0-.9.73-1.5 1.62-1.5H10v11H6ZM10 19V6.5c0-.9.73-1.5 1.62-1.5H14v14H10ZM14 19v-8.2c0-.9.73-1.5 1.62-1.5H18v9.7h-4Z" />
        </svg>
      );

    case "tableau":
      return (
        <svg {...commonProps}>
          <path d="M12 4v6M12 14v6M4 12h6M14 12h6M7 7l2.2 2.2M14.8 14.8 17 17M17 7l-2.2 2.2M9.2 14.8 7 17" />
        </svg>
      );

    case "chartjs":
      return (
        <svg {...commonProps}>
          <path d="M4 19.5V5M4 19.5h16" />
          <path d="m7 15 3-4 3 2 4-5" />
          <circle cx="7" cy="15" r="1" fill="currentColor" stroke="none" />
          <circle cx="10" cy="11" r="1" fill="currentColor" stroke="none" />
          <circle cx="13" cy="13" r="1" fill="currentColor" stroke="none" />
          <circle cx="17" cy="8" r="1" fill="currentColor" stroke="none" />
        </svg>
      );
  }
}
