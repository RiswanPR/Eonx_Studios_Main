import type { MetadataRoute } from "next";
import { siteConfig } from "@/config/site";

export default function sitemap(): MetadataRoute.Sitemap {
    const routes = [
        "",
        "/about",
        "/services",
        "/work",
        "/book-a-call",
        "/privacy",
        "/terms",
        "/cookies",
        "/services/branding",
        "/services/web-design",
        "/services/web-development",
        "/services/logo-design",
        "/services/content-creation",
        "/services/digital-marketing",
        "/services/video-editing",
        "/services/poster-design",
        "/services/branding-materials",
    ];

    return routes.map((route) => ({
        url: `${siteConfig.url}${route}`,
        lastModified: new Date(),
    }));
}