import type { Metadata } from "next";
import { siteConfig } from "@/config/site";
import { seoConfig } from "@/content/seo/site";

interface SEOInput {
  title?: string;
  description?: string;
  path?: string;
  image?: string;
  noIndex?: boolean;
}

export function buildMetadata({
  title,
  description,
  path = "/",
  image,
  noIndex = false,
}: SEOInput = {}): Metadata {
  const finalTitle = title ?? seoConfig.title;

  const finalDescription = description ?? seoConfig.description;

  const baseUrl = siteConfig.url.replace(/\/$/, "");

  const canonical = `${baseUrl}${path}`.replace(/([^:]\/)\/+/g, "$1");

  const socialImage = image ?? `${baseUrl}${seoConfig.socialImage}`;

  return {
    title: finalTitle,

    description: finalDescription,

    metadataBase: new URL(baseUrl),

    alternates: {
      canonical,
    },

    robots: noIndex
      ? {
          index: false,
          follow: false,
        }
      : {
          index: true,
          follow: true,
        },

    openGraph: {
      type: "website",
      siteName: seoConfig.siteName,
      locale: seoConfig.locale,
      title: finalTitle,
      description: finalDescription,
      url: canonical,

      images: [
        {
          url: socialImage,
          width: 1200,
          height: 630,
          alt: finalTitle,
        },
      ],
    },

    twitter: {
      card: "summary_large_image",
      title: finalTitle,
      description: finalDescription,
      images: [socialImage],
    },
  };
}
