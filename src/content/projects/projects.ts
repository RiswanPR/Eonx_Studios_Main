import type { Project } from "@/types/project";

export const projects: Project[] = [
  {
    title: "Eonx Internal",
    slug: "eonx-internal",

    client: "Eonx",
    industry: "Creative Technology",
    year: 2026,

    services: [
      "Branding",
      "Web Design",
      "Web Development",
    ],

    technologies: [
      "Next.js",
      "React",
      "TypeScript",
      "Three.js",
    ],

    summary:
      "An internal Eonx project exploring how brand identity, digital design and interactive technology can exist as one experience.",

    challenge: {
      eyebrow: "01 / Challenge",
      title: "ONE IDENTITY. MANY DIMENSIONS.",
      body:
        "The challenge was to create a digital expression that could carry Eonx's visual identity across brand, interface and interactive experience.",
    },

    strategy: {
      eyebrow: "02 / Strategy",
      title: "BUILD THE SYSTEM FIRST.",
      body:
        "The experience was approached as a system rather than a collection of pages, connecting brand language, design tokens, motion and interaction.",
    },

    creativeDirection: {
      eyebrow: "03 / Creative Direction",
      title: "VISION IN MOTION.",
      body:
        "The Eonx visual language is expressed through orbital forms, restrained color, editorial typography and controlled movement.",
    },

    execution: {
      eyebrow: "04 / Execution",
      title: "DESIGN MEETS TECHNOLOGY.",
      body:
        "The experience combines a reusable UI architecture with motion and WebGL enhancement while preserving a functional content layer.",
    },

    outcome: {
      title: "A SYSTEM BUILT TO EVOLVE.",
      description:
        "The result is an extensible website foundation designed to support future services, projects, content and interactive experiences.",
    },

    media: [],

    relatedServices: [
      "branding",
      "web-design",
      "web-development",
    ],

    relatedProjects: [],

    category: "development",

    featured: true,

    seo: {
      title: "Eonx Internal — Eonx",
      description:
        "An internal Eonx exploration combining branding, web design and interactive technology.",
    },
  },
];

export function getProject(slug: string): Project | undefined {
  return projects.find((project) => project.slug === slug);
}
