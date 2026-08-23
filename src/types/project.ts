export interface ProjectMedia {
  type: "image" | "video";
  src: string;
  alt: string;
  width?: number;
  height?: number;
  poster?: string;
}

export interface ProjectSection {
  eyebrow?: string;
  title: string;
  body: string;
  media?: ProjectMedia[];
}

export interface ProjectTestimonial {
  quote: string;
  name: string;
  role?: string;
  company?: string;
}

export interface Project {
  title: string;
  slug: string;

  client?: string;
  industry?: string;
  year?: number;

  services: string[];
  technologies: string[];

  summary: string;

  challenge: ProjectSection;
  strategy: ProjectSection;
  creativeDirection: ProjectSection;
  execution: ProjectSection;

  outcome: {
    title: string;
    description: string;
    metrics?: Array<{
      value: string;
      label: string;
    }>;
  };

  media: ProjectMedia[];

  testimonial?: ProjectTestimonial;

  relatedServices: string[];
  relatedProjects: string[];

  featured?: boolean;

  category:
    | "branding"
    | "web"
    | "development"
    | "content"
    | "marketing"
    | "video"
    | "graphic";

  seo: {
    title: string;
    description: string;
  };
}