import type { Metadata } from "next";
import { LegalLayout } from "@/components/legal/LegalLayout";
import { LegalSection } from "@/components/legal/LegalSection";
import { privacyContent } from "@/content/legal/privacy";
import { buildMetadata } from "@/lib/seo/metadata";

export const metadata: Metadata = buildMetadata({
  title: "Privacy Policy — Eonx",
  description: "Eonx privacy policy and information handling practices.",
  path: "/privacy",
});

export default function PrivacyPage() {
  return (
    <LegalLayout
      eyebrow="LEGAL / PRIVACY"
      title="PRIVACY POLICY"
      updatedAt={privacyContent.updatedAt}
    >
      <p className="mb-8 text-base leading-relaxed text-[var(--foreground)] md:text-lg">
        {privacyContent.introduction}
      </p>

      {privacyContent.sections.map((sec) => (
        <LegalSection key={sec.title} title={sec.title}>
          {sec.paragraphs.map((p, idx) => (
            <p key={idx}>{p}</p>
          ))}
        </LegalSection>
      ))}
    </LegalLayout>
  );
}
