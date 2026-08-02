export type ExpertiseIconName =
  | "layers"
  | "server"
  | "database"
  | "analytics"
  | "automation"
  | "cloud"
  | "intelligence"
  | "product";

export type ExpertiseAccent = "cyan" | "emerald" | "mixed";

export type ExpertiseLayout = "anchor" | "backend" | "database" | "data";

export interface ExpertiseCapability {
  readonly id: string;
  readonly number: string;
  readonly eyebrow: string;
  readonly title: string;
  readonly description: string;
  readonly valueStatement: string;
  readonly icon: ExpertiseIconName;
  readonly accent: ExpertiseAccent;
  readonly layout: ExpertiseLayout;
  readonly systemFlow?: readonly string[];
  readonly evidence: readonly string[];
  readonly technologies: readonly string[];
}

export interface ExpertiseGrowthTrack {
  readonly title: string;
  readonly description: string;
  readonly icon: ExpertiseIconName;
}

export interface ExpertiseGrowthContent {
  readonly label: string;
  readonly title: string;
  readonly description: string;
  readonly tracks: readonly ExpertiseGrowthTrack[];
}

export interface ExpertiseContent {
  readonly label: string;
  readonly meta: string;
  readonly heading: string;
  readonly introduction: string;
  readonly architectureLabel: string;
  readonly capabilities: readonly ExpertiseCapability[];
  readonly growth: ExpertiseGrowthContent;
}
