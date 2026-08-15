export type SkillStatus = "applied" | "learning";

export type SkillAccent = "cyan" | "emerald" | "violet" | "teal";

export type SkillClusterLayout =
  | "frontend"
  | "backend"
  | "database"
  | "intelligence";

export type SkillIconName =
  | "frontend"
  | "backend"
  | "database"
  | "intelligence"
  | "react"
  | "nextjs"
  | "typescript"
  | "tailwind"
  | "nodejs"
  | "express"
  | "java"
  | "dotnet"
  | "postgresql"
  | "mongodb"
  | "mysql"
  | "sqlserver"
  | "warehouse"
  | "powerbi"
  | "tableau"
  | "chartjs";

export interface SkillTechnology {
  readonly name: string;
  readonly status: SkillStatus;
  readonly icon?: SkillIconName;
  readonly note?: string;
}

export interface SkillCluster {
  readonly id: string;
  readonly index: string;
  readonly eyebrow: string;
  readonly title: string;
  readonly description: string;
  readonly icon:
    | SkillIconName
    | "frontend"
    | "backend"
    | "database"
    | "intelligence";
  readonly accent: SkillAccent;
  readonly layout: SkillClusterLayout;
  readonly featured: readonly SkillTechnology[];
  readonly supportingLabel: string;
  readonly supporting: readonly string[];
  readonly footerLabel?: string;
  readonly footerText?: string;
}

export interface SkillsContent {
  readonly label: string;
  readonly meta: string;
  readonly heading: string;
  readonly accentWord: string;
  readonly introduction: string;
  readonly axis: string;
  readonly clusters: readonly SkillCluster[];
}
