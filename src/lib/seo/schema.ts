import { siteConfig } from "@/config/site";
import type { Project } from "@/types/project";
import type { Service } from "@/types/service";

export function getOrganizationSchema() {
  const baseUrl = siteConfig.url.replace(/\/$/, "");

  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: siteConfig.name,
    url: baseUrl,
    logo: `${baseUrl}${siteConfig.logo}`,
  };
}

export function getWebsiteSchema() {
  const baseUrl = siteConfig.url.replace(/\/$/, "");

  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: siteConfig.name,
    url: baseUrl,
  };
}

export function getServiceSchema(service: Service) {
  const baseUrl = siteConfig.url.replace(/\/$/, "");

  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: service.name,
    description: service.description,
    provider: {
      "@type": "Organization",
      name: siteConfig.name,
      url: baseUrl,
    },
    url: `${baseUrl}/services/${service.slug}`,
  };
}

export function getProjectSchema(project: Project) {
  const baseUrl = siteConfig.url.replace(/\/$/, "");

  return {
    "@context": "https://schema.org",
    "@type": "CreativeWork",
    name: project.title,
    description: project.summary,
    url: `${baseUrl}/work/${project.slug}`,
    creator: {
      "@type": "Organization",
      name: siteConfig.name,
      url: baseUrl,
    },
    dateCreated: project.year ? `${project.year}-01-01` : undefined,
  };
}

export function getBreadcrumbSchema(
  items: Array<{
    name: string;
    href: string;
  }>,
) {
  const baseUrl = siteConfig.url.replace(/\/$/, "");

  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: `${baseUrl}${item.href}`,
    })),
  };
}
