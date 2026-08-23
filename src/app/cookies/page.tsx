import type { Metadata } from "next";
import { LegalLayout } from "@/components/legal/LegalLayout";
import { LegalSection } from "@/components/legal/LegalSection";
import { cookiesContent } from "@/content/legal/cookies";

export const metadata: Metadata = {
  title: "Cookie Policy — Eonx",
  description: "Information about cookies and similar technologies used by Eonx.",
};

export default function CookiesPage() {
  return (
    <LegalLayout
      eyebrow="LEGAL / COOKIES"
      title="COOKIE POLICY"
      updatedAt={cookiesContent.updatedAt}
    >
      {cookiesContent.sections.map((sec) => (
        <LegalSection key={sec.title} title={sec.title}>
          {sec.paragraphs.map((p, idx) => (
            <p key={idx}>{p}</p>
          ))}
        </LegalSection>
      ))}
    </LegalLayout>
  );
}
