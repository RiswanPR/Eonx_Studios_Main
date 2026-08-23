import { siteConfig } from "@/config/site";

export function getCanonicalUrl(path: string = "/"): string {
  const baseUrl = siteConfig.url.replace(/\/$/, "");
  const cleanPath = path.split("?")[0].split("#")[0];
  const formattedPath = cleanPath.startsWith("/") ? cleanPath : `/${cleanPath}`;
  return `${baseUrl}${formattedPath === "/" ? "" : formattedPath}`;
}
