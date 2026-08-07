export type EducationIconName =
  | "campus"
  | "systems"
  | "database"
  | "software"
  | "web"
  | "learning"
  | "diploma";

export interface EducationVisualStatus {
  eyebrow: string;
  phase: string;
  caption: string;
  coreValue: string;
  coreLabel: string;
  coreMeta: string;
  orbitLabels: readonly [string, string, string];
  description: string;
  pathLabels: readonly [string, string, string];
}

export interface EducationTimelineItem {
  id: string;
  period: string;
  status: string;
  title: string;
  institution: string;
  department?: string;
  description: string;
  details: readonly string[];
  icon: EducationIconName;
  current?: boolean;
}

export interface EducationFocusArea {
  id: string;
  number: string;
  title: string;
  description: string;
  icon: EducationIconName;
}

export interface EducationLearningResource {
  provider: string;
  path: string;
  note: string;
}

export interface EducationContentData {
  label: string;
  meta: string;
  heading: string;
  introduction: string;
  visualStatus: EducationVisualStatus;
  currentStatusLabel: string;
  currentStatus: string;
  timelineLabel: string;
  timelineHeading: string;
  timeline: readonly EducationTimelineItem[];
  focusLabel: string;
  focusHeading: string;
  focusDescription: string;
  focusAreas: readonly EducationFocusArea[];
  learningLabel: string;
  learningHeading: string;
  learningDescription: string;
  learningResources: readonly EducationLearningResource[];
  learningNote: string;
}
