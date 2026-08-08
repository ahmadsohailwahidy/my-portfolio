export type ServiceIconName =
  | "frontend"
  | "react"
  | "api"
  | "dashboard"
  | "arrow"
  | "collaboration"
  | "workflow"
  | "check";

export type ServiceAccent = "coral" | "sky" | "mint" | "amber";
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
  accent: ServiceAccent;
  capabilities: readonly ServiceCapability[];
}

export interface CollaborationType {
  title: string;
  description: string;
}

export interface ServiceWorkflowStep {
  index: string;
  title: string;
  description: string;
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
