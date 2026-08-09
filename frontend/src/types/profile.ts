export type ProfessionalStrengthIconName =
  | "problem-solving"
  | "continuous-learning"
  | "implementation-detail"
  | "collaboration";

export interface ProfessionalStrength {
  index: string;
  title: string;
  description: string;
  icon: ProfessionalStrengthIconName;
}

export interface SpokenLanguage {
  name: string;
  context: string;
  proficiency: "Native" | "Fluent" | "Professional Working Proficiency";
}

export interface OpportunityPreference {
  label: string;
  value: string;
  description: string;
}

export interface ResumeDetails {
  href: `/resume/${string}.pdf`;
  fileName: string;
  description: string;
  downloadLabel: string;
  openPrintLabel: string;
  lastUpdatedLabel: string;
  lastUpdatedDateTime: string | null;
}

export interface ProfessionalProfileContentData {
  label: string;
  meta: string;
  headingLead: string;
  headingAccent: string;
  introduction: string;
  snapshotLabel: string;
  snapshot: string;
  directionLabel: string;
  directionHeading: string;
  direction: string;
  strengthsLabel: string;
  strengthsHeading: string;
  strengthsDescription: string;
  strengths: readonly ProfessionalStrength[];
  languagesLabel: string;
  languagesHeading: string;
  languagesDescription: string;
  languages: readonly SpokenLanguage[];
  opportunityLabel: string;
  opportunityHeading: string;
  opportunityStatement: string;
  opportunityPreferences: readonly OpportunityPreference[];
  resumeLabel: string;
  resumeHeading: string;
  resume: ResumeDetails;
}
