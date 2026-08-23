import type { MetadataRoute } from "next";
import { siteConfig } from "@/config/site";
import { projects } from "@/content/projects/projects";
import { services } from "@/content/services/services";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = siteConfig.url.replace(/\/$/, "");

  const staticRoutes = [
    "",
    "/about",
    "/services",
    "/work",
    "/book-a-call",
    "/privacy",
    "/terms",
    "/cookies",
  ];

  const serviceRoutes = services.map((service) => ({
    url: `${baseUrl}/services/${service.slug}`,
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));

  const projectRoutes = projects.map((project) => ({
    url: `${baseUrl}/work/${project.slug}`,
    changeFrequency: "monthly" as const,
    priority: project.featured ? 0.8 : 0.6,
  }));

  return [
    ...staticRoutes.map((route) => ({
      url: `${baseUrl}${route}`,
      changeFrequency:
        route === "" ? ("weekly" as const) : ("monthly" as const),
      priority: route === "" ? 1 : 0.7,
    })),
    ...serviceRoutes,
    ...projectRoutes,
  ];
}