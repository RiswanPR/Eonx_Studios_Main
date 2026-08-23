import type { NavigationItem } from "@/types/navigation";

export const mainNavigation: NavigationItem[] = [
  {
    label: "Home",
    href: "/",
  },
  {
    label: "About",
    href: "/about",
  },
  {
    label: "Services",
    href: "/services",
    children: [
      {
        label: "Branding",
        href: "/services/branding",
        description:
          "Strategy, identity and visual direction.",
      },
      {
        label: "Web Design",
        href: "/services/web-design",
        description:
          "Digital experiences designed around people.",
      },
      {
        label: "Web Development",
        href: "/services/web-development",
        description:
          "Fast, scalable and technically refined websites.",
      },
      {
        label: "Logo Design",
        href: "/services/logo-design",
        description:
          "Distinctive identities built from meaning.",
      },
      {
        label: "Content Creation",
        href: "/services/content-creation",
        description:
          "Ideas shaped into content people notice.",
      },
      {
        label: "Digital Marketing",
        href: "/services/digital-marketing",
        description:
          "Creative campaigns designed to grow.",
      },
      {
        label: "Video Editing",
        href: "/services/video-editing",
        description:
          "Cinematic editing and motion storytelling.",
      },
      {
        label: "Poster Design",
        href: "/services/poster-design",
        description:
          "Visual communication with impact.",
      },
      {
        label: "Branding Materials",
        href: "/services/branding-materials",
        description:
          "Brand identity across physical and digital touchpoints.",
      },
    ],
  },
  {
    label: "Work",
    href: "/work",
  },
];

export const primaryCta = {
  label: "Book a Call",
  href: "/book-a-call",
};