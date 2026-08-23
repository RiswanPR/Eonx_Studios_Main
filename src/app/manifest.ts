import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Eonx",
    short_name: "Eonx",
    description: "Eonx — Creative Technology Studio",
    start_url: "/",
    display: "standalone",
    background_color: "#040607",
    theme_color: "#040607",
    icons: [
      {
        src: "/icon.svg",
        sizes: "any",
        type: "image/svg+xml",
      },
    ],
  };
}
