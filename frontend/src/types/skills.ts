export type SkillStatus =
  | "primary"
  | "applied"
  | "supporting"
  | "foundation"
  | "growth";

export type SkillAccent = "cyan" | "emerald" | "mixed" | "violet";

export type SkillClusterLayout =
  | "frontend"
  | "backend"
  | "database"
  | "intelligence";

export type SkillIconName =
  | "foundation"
  | "frontend"
  | "backend"
  | "database"
  | "intelligence"
  | "delivery"
  | "react"
  | "nextjs"
  | "typescript"
  | "tailwind"
  | "java"
  | "csharp"
  | "dotnet"
  | "api"
  | "python"
  | "fastapi"
  | "database-design"
  | "postgresql"
  | "sqlserver"
  | "data-model"
  | "warehouse"
  | "bi"
  | "ai"
  | "prompt"
  | "git"
  | "docker"
  | "automation"
  | "cloud"
  | "kubernetes";

export interface SkillTechnology {
  readonly name: string;
  readonly status: SkillStatus;
  readonly icon?: SkillIconName;
  readonly note?: string;
}

export interface SkillEvidence {
  readonly label: string;
  readonly project: string;
}

export interface SkillCluster {
  readonly id: string;
  readonly index: string;
  readonly eyebrow: string;
  readonly title: string;
  readonly description: string;
  readonly icon: SkillIconName;
  readonly accent: SkillAccent;
  readonly layout: SkillClusterLayout;
  readonly featured: readonly SkillTechnology[];
  readonly supporting: readonly string[];
  readonly evidence?: SkillEvidence;
}

export interface SkillRail {
  readonly label: string;
  readonly title: string;
  readonly description: string;
  readonly icon: SkillIconName;
  readonly items: readonly SkillTechnology[];
}

export interface SkillLegendItem {
  readonly status: SkillStatus;
  readonly label: string;
  readonly description: string;
}

export interface SkillsContent {
  readonly label: string;
  readonly meta: string;
  readonly heading: string;
  readonly introduction: string;
  readonly legend: readonly SkillLegendItem[];
  readonly foundation: SkillRail;
  readonly clusters: readonly SkillCluster[];
  readonly delivery: SkillRail;
}
