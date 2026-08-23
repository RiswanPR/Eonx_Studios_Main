import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/seo/Breadcrumbs";
import { StructuredData } from "@/components/seo/StructuredData";
import { Container } from "@/components/ui/Container";
import { Heading } from "@/components/ui/Heading";
import { Section } from "@/components/ui/Section";
import { Stack } from "@/components/ui/Stack";
import { Text } from "@/components/ui/Text";
import { noIndexMetadata } from "@/lib/seo/noIndex";
import {
  getBreadcrumbSchema,
  getOrganizationSchema,
  getWebsiteSchema,
} from "@/lib/seo/schema";

export const metadata: Metadata = noIndexMetadata;

export default function SEOTestPage() {
  const sampleBreadcrumbs = [
    { name: "Services", href: "/services" },
    { name: "Web Development", href: "/services/web-development" },
  ];

  return (
    <main className="pt-28 pb-20">
      <StructuredData data={getOrganizationSchema()} />
      <StructuredData data={getWebsiteSchema()} />
      <StructuredData data={getBreadcrumbSchema(sampleBreadcrumbs)} />

      <Section spacing="large">
        <Container>
          <Stack gap="lg">
            <Breadcrumbs items={sampleBreadcrumbs} />

            <Heading level={1} size="display">
              SEO ARCHITECTURE TEST
            </Heading>

            <Text size="lg" muted>
              Internal laboratory page for validating SEO metadata,
              BreadcrumbList, Organization and WebSite JSON-LD schemas. This
              page is isolated with noindex/nofollow and excluded from
              sitemap.xml.
            </Text>

            <div className="rounded-[var(--radius-lg)] border border-[var(--color-border-default)] bg-[var(--color-surface-01)] p-8">
              <h2 className="text-xl font-bold text-white">
                Schemas Configured On This Page:
              </h2>
              <ul className="mt-4 list-disc space-y-2 pl-6 text-sm text-[var(--foreground-muted)]">
                <li>Schema.org / Organization</li>
                <li>Schema.org / WebSite</li>
                <li>Schema.org / BreadcrumbList</li>
              </ul>
            </div>
          </Stack>
        </Container>
      </Section>
    </main>
  );
}
