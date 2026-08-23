import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo/metadata";

export const metadata: Metadata = buildMetadata({
  title: "Work — Eonx Portfolio & Case Studies",
  description:
    "Explore selected case studies, brand systems, web experiences and creative engineering by Eonx.",
  path: "/work",
});

export default function WorkLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
