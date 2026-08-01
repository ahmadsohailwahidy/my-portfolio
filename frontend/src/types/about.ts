export type AboutIconName =
  | "intelligent-systems"
  | "scalable-software"
  | "data-platforms"
  | "product-innovation"
  | "knowledge-community";

export type AboutTechnologyIconName =
  | "nextjs"
  | "typescript"
  | "react"
  | "fastapi"
  | "postgresql"
  | "docker";

export interface AboutPhoto {
  src: string;
  alt: string;
}

export interface AboutProfile {
  initials: string;
  name: string;
  academicStatus: string;
  professionalIdentity: string;
  availabilityLabel: string;
  placeholderLabel: string;
  photo?: AboutPhoto;
}

export interface AboutHighlight {
  label: string;
  value: string;
  detail: string;
}

export interface AboutInterestGroup {
  id: string;
  title: string;
  icon: AboutIconName;
  items: readonly string[];
}

export interface AboutLink {
  label: string;
  href: string;
  ariaLabel: string;
}

export interface AboutTechnology {
  name: string;
  icon: AboutTechnologyIconName;
}

export interface AboutContentData {
  eyebrow: string;
  heading: string;
  introduction: string;
  projectStory: string;
  careerObjectiveLabel: string;
  careerObjective: string;
  opportunityLabel: string;
  opportunityStatement: string;
  opportunityLinks: readonly AboutLink[];
  profile: AboutProfile;
  highlights: readonly AboutHighlight[];
  selectedTechnologiesLabel: string;
  selectedTechnologies: readonly AboutTechnology[];
  interestsLabel: string;
  interestsHeading: string;
  interestsDescription: string;
  interestGroups: readonly AboutInterestGroup[];
}
