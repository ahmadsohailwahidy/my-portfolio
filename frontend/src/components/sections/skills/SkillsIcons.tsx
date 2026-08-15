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
        rx="4.4"
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
          <rect x="3" y="4" width="18" height="15.8" rx="2.6" />
          <path d="M3 8.5h18M8.5 13.2 6.2 15.5l2.3 2.3M15.5 13.2l2.3 2.3-2.3 2.3M13.5 11.3l-3 8" />
        </svg>
      );

    case "backend":
      return (
        <svg {...commonProps}>
          <rect x="4" y="4" width="16" height="5.2" rx="2" />
          <rect x="4" y="14.8" width="16" height="5.2" rx="2" />
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
          <path d="M12 4.5a4.5 4.5 0 0 0-4.5 4.5v1.5A3 3 0 0 1 6 13v1.5A3.5 3.5 0 0 0 9.5 18h5A3.5 3.5 0 0 0 18 14.5V13a3 3 0 0 1-1.5-2.5V9A4.5 4.5 0 0 0 12 4.5Z" />
          <path d="M9.8 20h4.4M10.5 8.8h3M10.5 12h3M12 4.5V3" />
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
      return <SymbolIcon symbol="N" className={className} />;

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
      return <SymbolIcon symbol="JS" className={className} compact />;

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
      return <SymbolIcon symbol="PG" className={className} compact />;

    case "mongodb":
      return <SymbolIcon symbol="MDB" className={className} compact />;

    case "mysql":
      return <SymbolIcon symbol="SQL" className={className} compact />;

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
