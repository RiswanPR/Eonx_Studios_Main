import type { Service } from "@/types/service";

export const services: Service[] = [
  {
    name: "Branding",
    slug: "branding",
    number: "01",
    shortDescription: "Strategy, identity and visual direction.",
    description:
      "We build distinctive brand identities that give businesses clarity, character and a visual language they can own.",
    positioning:
      "Build a brand people can recognize, understand and remember.",
    visualTheme: "purple",
    capabilities: [
      {
        title: "Brand Strategy",
        description:
          "Define positioning, audience, direction and the thinking behind the brand.",
      },
      {
        title: "Visual Identity",
        description:
          "Create a coherent visual system across typography, color, graphics and expression.",
      },
      {
        title: "Art Direction",
        description:
          "Establish the visual language for campaigns, content and future brand work.",
      },
      {
        title: "Brand Guidelines",
        description:
          "Document the system so the identity remains consistent as it grows.",
      },
    ],
    deliverables: [
      {
        title: "Brand Strategy",
        description: "A clear strategic foundation for the identity.",
      },
      {
        title: "Visual Identity",
        description: "Core brand assets and visual direction.",
      },
      {
        title: "Brand Guidelines",
        description:
          "A practical system for using the identity consistently.",
      },
    ],
    process: [
      {
        number: "01",
        title: "DISCOVER",
        description: "Understand the business, audience and ambition.",
      },
      {
        number: "02",
        title: "DEFINE",
        description: "Establish positioning and creative direction.",
      },
      {
        number: "03",
        title: "CREATE",
        description: "Build the visual identity and core system.",
      },
      {
        number: "04",
        title: "REFINE",
        description: "Test, refine and prepare the brand for use.",
      },
      {
        number: "05",
        title: "DELIVER",
        description: "Package the system and guide its implementation.",
      },
    ],
    faq: [
      {
        question: "Can you work with an existing brand?",
        answer:
          "Yes. We can evolve an existing identity when the underlying brand has value but the current expression needs improvement.",
      },
      {
        question: "What does a branding project include?",
        answer:
          "The scope depends on the project, but can include strategy, visual identity, guidelines and brand applications.",
      },
      {
        question: "Can branding include a website?",
        answer:
          "Yes. Branding can be connected directly to web design and development when the project requires a complete digital experience.",
      },
    ],
    relatedServices: [
      "web-design",
      "logo-design",
      "branding-materials",
    ],
    relatedProjects: [],
    seo: {
      title: "Branding Services — Eonx",
      description:
        "Eonx creates strategic brand identities, visual systems and memorable brand experiences.",
    },
    featured: true,
  },
  {
    name: "Web Design",
    slug: "web-design",
    number: "02",
    shortDescription: "Digital experiences designed around people.",
    description:
      "We design digital experiences that balance clarity, personality, interaction and conversion.",
    positioning:
      "Design digital experiences that feel as good as they function.",
    visualTheme: "blue",
    capabilities: [
      {
        title: "UX Strategy",
        description:
          "Structure journeys and information around real user needs.",
      },
      {
        title: "UI Design",
        description:
          "Create distinctive interfaces grounded in the Eonx visual system.",
      },
      {
        title: "Design Systems",
        description:
          "Build reusable interface systems that scale.",
      },
      {
        title: "Interaction Design",
        description:
          "Design meaningful motion and interaction states.",
      },
      {
        title: "Responsive Design",
        description:
          "Create experiences that work across devices and screen sizes.",
      },
    ],
    deliverables: [
      {
        title: "UX Direction",
        description:
          "Information architecture and experience structure.",
      },
      {
        title: "Visual Design",
        description: "High-fidelity responsive interface design.",
      },
      {
        title: "Design System",
        description: "Reusable UI components and visual rules.",
      },
    ],
    process: [
      {
        number: "01",
        title: "DISCOVER",
        description: "Understand users, goals and business context.",
      },
      {
        number: "02",
        title: "STRUCTURE",
        description: "Define information architecture and flows.",
      },
      {
        number: "03",
        title: "DESIGN",
        description:
          "Create the visual interface and interaction system.",
      },
      {
        number: "04",
        title: "REFINE",
        description: "Prototype, test and improve the experience.",
      },
      {
        number: "05",
        title: "HANDOFF",
        description: "Prepare the system for production.",
      },
    ],
    faq: [
      {
        question: "Do you only design websites?",
        answer:
          "No. We can design websites, digital products and broader digital experiences depending on the project.",
      },
      {
        question: "Can you design and develop the website?",
        answer:
          "Yes. Web design and development can be handled together.",
      },
      {
        question: "Do you provide a design system?",
        answer:
          "For appropriate projects, we can create a reusable design system that supports future growth.",
      },
    ],
    relatedServices: [
      "branding",
      "web-development",
      "content-creation",
    ],
    relatedProjects: [],
    seo: {
      title: "Web Design Services — Eonx",
      description:
        "Eonx designs premium digital experiences, responsive interfaces and interaction systems.",
    },
    featured: true,
  },
  {
    name: "Web Development",
    slug: "web-development",
    number: "03",
    shortDescription: "Fast, scalable and technically refined websites.",
    description:
      "We build production-ready websites and digital systems with modern engineering, performance and experience in mind.",
    positioning:
      "Turn ambitious digital designs into reliable, high-performance experiences.",
    visualTheme: "dark",
    capabilities: [
      {
        title: "Frontend Development",
        description:
          "Build responsive interfaces using modern web technologies.",
      },
      {
        title: "Full-Stack Development",
        description:
          "Build the application logic and systems behind the experience.",
      },
      {
        title: "CMS Integration",
        description:
          "Connect content systems where teams need to manage content independently.",
      },
      {
        title: "API Integration",
        description: "Connect external systems and services securely.",
      },
      {
        title: "Performance Engineering",
        description:
          "Optimize loading, rendering and interaction performance.",
      },
      {
        title: "Security",
        description:
          "Build with validation, secure configuration and production safeguards.",
      },
    ],
    deliverables: [
      {
        title: "Production Website",
        description:
          "A working, tested website ready for deployment.",
      },
      {
        title: "Technical Architecture",
        description:
          "A maintainable structure appropriate to project complexity.",
      },
      {
        title: "Deployment",
        description: "Production deployment and launch support.",
      },
    ],
    process: [
      {
        number: "01",
        title: "ARCHITECT",
        description:
          "Define the technology and content architecture.",
      },
      {
        number: "02",
        title: "BUILD",
        description: "Implement the interface and application.",
      },
      {
        number: "03",
        title: "INTEGRATE",
        description: "Connect content, APIs and required services.",
      },
      {
        number: "04",
        title: "TEST",
        description:
          "Verify functionality, performance and accessibility.",
      },
      {
        number: "05",
        title: "LAUNCH",
        description: "Deploy and monitor the production experience.",
      },
    ],
    faq: [
      {
        question: "What technologies do you use?",
        answer:
          "The technology depends on the project. The stack is selected around performance, maintainability, content needs and the required experience.",
      },
      {
        question: "Can you work from an existing design?",
        answer:
          "Yes. We can implement an existing design system or collaborate from the beginning with the design team.",
      },
      {
        question: "Do you optimize performance?",
        answer:
          "Performance is considered throughout implementation rather than added only at the end.",
      },
    ],
    relatedServices: [
      "web-design",
      "branding",
      "digital-marketing",
    ],
    relatedProjects: [],
    seo: {
      title: "Web Development Services — Eonx",
      description:
        "Eonx builds fast, scalable and technically refined websites and digital experiences.",
    },
    featured: true,
  },
  {
    name: "Logo Design",
    slug: "logo-design",
    number: "04",
    shortDescription: "Distinctive identities built from meaning.",
    description:
      "We create logos that are designed to be recognizable, adaptable and connected to the brand behind them.",
    positioning: "Turn an idea into a symbol people can recognize.",
    visualTheme: "periwinkle",
    capabilities: [
      {
        title: "Logo Concepts",
        description: "Develop meaningful visual directions.",
      },
      {
        title: "Symbol Design",
        description: "Create distinctive symbols and marks.",
      },
      {
        title: "Wordmarks",
        description: "Design typography-based identities.",
      },
      {
        title: "Logo Systems",
        description: "Build flexible variations for real-world use.",
      },
    ],
    deliverables: [
      {
        title: "Primary Logo",
        description: "The core brand mark.",
      },
      {
        title: "Logo Variations",
        description: "Versions appropriate to different applications.",
      },
      {
        title: "Usage Guidance",
        description: "Practical guidance for consistent use.",
      },
    ],
    process: [
      {
        number: "01",
        title: "UNDERSTAND",
        description:
          "Understand the brand and what the mark needs to communicate.",
      },
      {
        number: "02",
        title: "EXPLORE",
        description: "Develop multiple visual directions.",
      },
      {
        number: "03",
        title: "REFINE",
        description: "Strengthen the chosen concept.",
      },
      {
        number: "04",
        title: "SYSTEMIZE",
        description: "Prepare the logo for real-world use.",
      },
    ],
    faq: [
      {
        question: "Do you provide multiple concepts?",
        answer:
          "The number and depth of concepts depend on the agreed project scope.",
      },
      {
        question: "Can a logo project become a full branding project?",
        answer:
          "Yes. Logo design can be expanded into a broader visual identity.",
      },
    ],
    relatedServices: [
      "branding",
      "branding-materials",
      "web-design",
    ],
    relatedProjects: [],
    seo: {
      title: "Logo Design Services — Eonx",
      description:
        "Eonx creates distinctive, meaningful and adaptable logo identities.",
    },
  },
  {
    name: "Content Creation",
    slug: "content-creation",
    number: "05",
    shortDescription: "Ideas shaped into content people notice.",
    description:
      "We create visual content designed to communicate ideas clearly and give brands something worth sharing.",
    positioning: "Turn ideas into content that earns attention.",
    visualTheme: "magenta",
    capabilities: [
      {
        title: "Content Strategy",
        description:
          "Define themes, formats and creative direction.",
      },
      {
        title: "Social Content",
        description: "Create content designed for social platforms.",
      },
      {
        title: "Creative Campaigns",
        description: "Develop campaign concepts and visual systems.",
      },
      {
        title: "Short-form Video",
        description: "Create concise, engaging vertical content.",
      },
    ],
    deliverables: [
      {
        title: "Content Concepts",
        description: "Creative directions connected to the brand.",
      },
      {
        title: "Content Assets",
        description: "Finished visual and motion content.",
      },
      {
        title: "Content System",
        description:
          "Reusable creative direction for ongoing work.",
      },
    ],
    process: [
      {
        number: "01",
        title: "RESEARCH",
        description:
          "Understand the audience, platform and subject.",
      },
      {
        number: "02",
        title: "CONCEPT",
        description: "Develop creative directions and formats.",
      },
      {
        number: "03",
        title: "CREATE",
        description: "Produce the selected content.",
      },
      {
        number: "04",
        title: "REFINE",
        description: "Review and improve the final assets.",
      },
    ],
    faq: [
      {
        question: "Can you handle ongoing content?",
        answer:
          "Yes. The scope can be structured around recurring content requirements.",
      },
      {
        question: "Do you create short-form video?",
        answer: "Yes. Short-form video can be part of the content system.",
      },
    ],
    relatedServices: [
      "video-editing",
      "digital-marketing",
      "branding",
    ],
    relatedProjects: [],
    seo: {
      title: "Content Creation Services — Eonx",
      description:
        "Eonx creates strategic visual content, social content and creative campaigns.",
    },
  },
  {
    name: "Digital Marketing",
    slug: "digital-marketing",
    number: "06",
    shortDescription: "Creative campaigns designed to grow.",
    description:
      "We combine creative thinking, audience understanding and measurement to build digital marketing systems that support growth.",
    positioning: "Connect creative work with measurable growth.",
    visualTheme: "blue",
    capabilities: [
      {
        title: "Marketing Strategy",
        description:
          "Define channels, audiences and campaign direction.",
      },
      {
        title: "Social Media",
        description:
          "Build content and communication strategies for social platforms.",
      },
      {
        title: "Campaigns",
        description: "Create focused campaign concepts and assets.",
      },
      {
        title: "SEO",
        description:
          "Improve the discoverability and content structure of the website.",
      },
      {
        title: "Analytics",
        description:
          "Measure meaningful engagement and conversion behavior.",
      },
    ],
    deliverables: [
      {
        title: "Growth Strategy",
        description: "A practical marketing direction.",
      },
      {
        title: "Campaign Assets",
        description: "Creative assets designed for the campaign.",
      },
      {
        title: "Measurement",
        description: "Useful performance and conversion signals.",
      },
    ],
    process: [
      {
        number: "01",
        title: "AUDIT",
        description: "Understand the current position and opportunity.",
      },
      {
        number: "02",
        title: "STRATEGY",
        description: "Define the audience, message and channels.",
      },
      {
        number: "03",
        title: "CREATE",
        description: "Build the campaign and creative assets.",
      },
      {
        number: "04",
        title: "LAUNCH",
        description: "Release the work and begin measurement.",
      },
      {
        number: "05",
        title: "OPTIMIZE",
        description: "Use real performance data to improve.",
      },
    ],
    faq: [
      {
        question: "Can digital marketing start with an existing brand?",
        answer:
          "Yes. We can work within an existing identity while improving the communication and campaign system.",
      },
      {
        question: "Do you provide reporting?",
        answer:
          "Reporting can be included when measurement is part of the agreed scope.",
      },
    ],
    relatedServices: [
      "content-creation",
      "branding",
      "web-development",
    ],
    relatedProjects: [],
    seo: {
      title: "Digital Marketing Services — Eonx",
      description:
        "Eonx builds creative digital marketing strategies, campaigns and measurement systems.",
    },
  },
  {
    name: "Video Editing",
    slug: "video-editing",
    number: "07",
    shortDescription: "Cinematic editing and motion storytelling.",
    description:
      "We transform footage and ideas into sharp, expressive video content for brands, campaigns and digital platforms.",
    positioning:
      "Turn footage into something people want to keep watching.",
    visualTheme: "magenta",
    capabilities: [
      {
        title: "Reels",
        description: "Short-form edits built for social platforms.",
      },
      {
        title: "Commercials",
        description: "Polished campaign and promotional videos.",
      },
      {
        title: "Brand Videos",
        description: "Video stories that communicate the brand.",
      },
      {
        title: "Motion Graphics",
        description: "Graphic movement that strengthens the message.",
      },
      {
        title: "Color Grading",
        description: "Visual consistency and cinematic tone.",
      },
    ],
    deliverables: [
      {
        title: "Edited Video",
        description:
          "Final video optimized for the intended platform.",
      },
      {
        title: "Motion Assets",
        description:
          "Supporting graphics and animation where required.",
      },
    ],
    process: [
      {
        number: "01",
        title: "REVIEW",
        description:
          "Understand the footage and communication goal.",
      },
      {
        number: "02",
        title: "EDIT",
        description: "Create the structure, pacing and story.",
      },
      {
        number: "03",
        title: "MOTION",
        description: "Add graphics and motion where useful.",
      },
      {
        number: "04",
        title: "GRADE",
        description: "Refine the visual tone.",
      },
      {
        number: "05",
        title: "DELIVER",
        description:
          "Export the final assets for the required platforms.",
      },
    ],
    faq: [
      {
        question: "Can you edit short-form content?",
        answer:
          "Yes. Short-form social content is one of the supported formats.",
      },
      {
        question: "Can you work with footage we already have?",
        answer:
          "Yes. We can work from existing footage when it is suitable for the requested result.",
      },
    ],
    relatedServices: [
      "content-creation",
      "digital-marketing",
      "branding",
    ],
    relatedProjects: [],
    seo: {
      title: "Video Editing Services — Eonx",
      description:
        "Eonx creates cinematic video edits, social videos and motion-driven brand content.",
    },
  },
  {
    name: "Poster Design",
    slug: "poster-design",
    number: "08",
    shortDescription: "Visual communication with impact.",
    description:
      "We design posters and campaign graphics that balance strong typography, composition and clear communication.",
    positioning: "Make one frame impossible to ignore.",
    visualTheme: "periwinkle",
    capabilities: [
      {
        title: "Event Posters",
        description:
          "Design promotional visuals for events and programs.",
      },
      {
        title: "Campaign Posters",
        description: "Create strong visual systems for campaigns.",
      },
      {
        title: "Social Graphics",
        description: "Adapt poster concepts to digital platforms.",
      },
      {
        title: "Print Design",
        description: "Prepare artwork for physical production.",
      },
    ],
    deliverables: [
      {
        title: "Poster Artwork",
        description: "Final digital or print-ready design.",
      },
      {
        title: "Campaign Variations",
        description:
          "Adaptations for related placements where required.",
      },
    ],
    process: [
      {
        number: "01",
        title: "BRIEF",
        description: "Understand the audience, message and context.",
      },
      {
        number: "02",
        title: "CONCEPT",
        description: "Develop strong visual directions.",
      },
      {
        number: "03",
        title: "DESIGN",
        description: "Build the final composition.",
      },
      {
        number: "04",
        title: "DELIVER",
        description:
          "Prepare the final assets for their intended use.",
      },
    ],
    faq: [
      {
        question: "Can you design for print and digital?",
        answer:
          "Yes. The final specifications can be prepared around the intended use.",
      },
      {
        question: "Can poster work become a larger campaign?",
        answer:
          "Yes. Poster design can connect to broader campaign and content work.",
      },
    ],
    relatedServices: [
      "content-creation",
      "branding",
      "digital-marketing",
    ],
    relatedProjects: [],
    seo: {
      title: "Poster Design Services — Eonx",
      description:
        "Eonx creates distinctive poster and graphic design for campaigns, events and digital communication.",
    },
  },
  {
    name: "Branding Materials",
    slug: "branding-materials",
    number: "09",
    shortDescription:
      "Brand identity across physical and digital touchpoints.",
    description:
      "We extend the brand into practical assets that make the identity consistent across everyday business touchpoints.",
    positioning:
      "Make the brand feel consistent everywhere it appears.",
    visualTheme: "purple",
    capabilities: [
      {
        title: "Business Cards",
        description: "Professional business card systems.",
      },
      {
        title: "Stationery",
        description:
          "Consistent branded documents and materials.",
      },
      {
        title: "Packaging",
        description:
          "Branded physical presentation where required.",
      },
      {
        title: "Brochures",
        description: "Clear, brand-aligned printed communication.",
      },
      {
        title: "Presentations",
        description:
          "Professional presentations built around the brand.",
      },
    ],
    deliverables: [
      {
        title: "Brand Materials",
        description: "Finished assets for the agreed applications.",
      },
      {
        title: "Print-Ready Files",
        description: "Production-ready files where applicable.",
      },
      {
        title: "Digital Assets",
        description: "Digital versions for online use.",
      },
    ],
    process: [
      {
        number: "01",
        title: "AUDIT",
        description:
          "Understand the current brand system and touchpoints.",
      },
      {
        number: "02",
        title: "DIRECTION",
        description:
          "Define how the identity should translate into each medium.",
      },
      {
        number: "03",
        title: "DESIGN",
        description: "Create the required branded materials.",
      },
      {
        number: "04",
        title: "REFINE",
        description: "Review details and prepare final files.",
      },
      {
        number: "05",
        title: "DELIVER",
        description: "Provide the assets in the required formats.",
      },
    ],
    faq: [
      {
        question: "Do I need a full branding project first?",
        answer:
          "Not necessarily. We can work with an existing brand if the identity is sufficiently defined.",
      },
      {
        question: "Can you handle both digital and print materials?",
        answer: "Yes. The scope can cover both physical and digital touchpoints.",
      },
    ],
    relatedServices: [
      "branding",
      "logo-design",
      "poster-design",
    ],
    relatedProjects: [],
    seo: {
      title: "Branding Materials Design — Eonx",
      description:
        "Eonx creates branded business materials, stationery, presentations, packaging and related assets.",
    },
  },
];

export function getService(slug: string): Service | undefined {
  return services.find((service) => service.slug === slug);
}
