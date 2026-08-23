export interface ServiceCapability {
  title: string;
  description: string;
}

export interface ServiceDeliverable {
  title: string;
  description: string;
}

export interface ServiceProcessStep {
  number: string;
  title: string;
  description: string;
}

export interface ServiceFAQItem {
  question: string;
  answer: string;
}

export interface Service {
  name: string;
  slug: string;
  number: string;
  shortDescription: string;
  description: string;

  positioning: string;

  capabilities: ServiceCapability[];
  deliverables: ServiceDeliverable[];
  process: ServiceProcessStep[];
  faq: ServiceFAQItem[];

  visualTheme:
    | "purple"
    | "blue"
    | "dark"
    | "magenta"
    | "periwinkle";

  relatedServices: string[];
  relatedProjects: string[];

  featured?: boolean;

  seo: {
    title: string;
    description: string;
  };
}