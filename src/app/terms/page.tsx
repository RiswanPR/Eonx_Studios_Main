import type { Metadata } from "next";
import { LegalLayout } from "@/components/legal/LegalLayout";
import { LegalSection } from "@/components/legal/LegalSection";
import { termsContent } from "@/content/legal/terms";
import { buildMetadata } from "@/lib/seo/metadata";

export const metadata: Metadata = buildMetadata({
  title: "Terms of Service — Eonx",
  description: "Terms governing use of the Eonx website.",
  path: "/terms",
});

export default function TermsPage() {
  return (
    <LegalLayout
      eyebrow="LEGAL / TERMS"
      title="TERMS OF SERVICE"
      updatedAt={termsContent.updatedAt}
    >
      {termsContent.sections.map((sec) => (
        <LegalSection key={sec.title} title={sec.title}>
          {sec.paragraphs.map((p, idx) => (
            <p key={idx}>{p}</p>
          ))}
        </LegalSection>
      ))}
    </LegalLayout>
  );
}
