export const SERVICE_SLUGS = [
    "branding",
    "web-design",
    "web-development",
    "logo-design",
    "content-creation",
    "digital-marketing",
    "video-editing",
    "poster-design",
    "branding-materials",
] as const;

export type ServiceSlug = (typeof SERVICE_SLUGS)[number];