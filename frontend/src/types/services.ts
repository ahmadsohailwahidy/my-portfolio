export type ServiceIconName =
  | "interface"
  | "integration"
  | "analytics"
  | "build"
  | "improve"
  | "integrate"
  | "deliver"
  | "collaboration"
  | "team"
  | "launch"
  | "define"
  | "implement"
  | "review"
  | "handoff"
  | "checkCircle"
  | "arrow";

export type ServiceCapabilityStatus = "applied" | "growth";

export interface ServiceCapability {
  label: string;
  status?: ServiceCapabilityStatus;
}

export interface PortfolioService {
  id: string;
  index: string;
  title: string;
  description: string;
  bestFor: string;
  icon: ServiceIconName;
  capabilities: readonly ServiceCapability[];
}

export interface CollaborationType {
  title: string;
  description: string;
  icon: ServiceIconName;
}

export interface ServiceWorkflowStep {
  index: string;
  title: string;
  description: string;
  icon: ServiceIconName;
}

export interface ServicesContentData {
  label: string;
  meta: string;
  heading: string;
  introduction: string;
  servicesLabel: string;
  servicesHeading: string;
  servicesDescription: string;
  services: readonly PortfolioService[];
  collaborationLabel: string;
  collaborationHeading: string;
  collaborationDescription: string;
  collaborationTypes: readonly CollaborationType[];
  workflowLabel: string;
  workflowHeading: string;
  workflowDescription: string;
  workflow: readonly ServiceWorkflowStep[];
  ctaEyebrow: string;
  ctaHeading: string;
  ctaDescription: string;
  ctaLabel: string;
  ctaHref: `#${string}`;
}
