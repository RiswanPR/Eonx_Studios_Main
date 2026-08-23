import type { Metadata } from "next";
import { noIndexMetadata } from "@/lib/seo/noIndex";

export const metadata: Metadata = noIndexMetadata;

export default function DesignSystemLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
