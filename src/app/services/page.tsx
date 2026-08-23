"use client";

import Link from "next/link";
import { useState } from "react";

import { ServicesHero } from "@/components/sections/services/ServicesHero";
import { ServiceCard } from "@/components/services/ServiceCard";
import { SimpleFooter } from "@/components/shared/SimpleFooter";
import { Container } from "@/components/ui/Container";
import { Label } from "@/components/ui/Label";
import { Section } from "@/components/ui/Section";
import { Text } from "@/components/ui/Text";
import { services } from "@/content/services/services";

export default function ServicesPage() {
  const [activeSlug, setActiveSlug] = useState(
    services[0]?.slug ?? "",
  );

  const activeService =
    services.find((service) => service.slug === activeSlug) ?? services[0];

  return (
    <main>
      <ServicesHero />

      <Section spacing="large" className="bg-[var(--color-surface-01)]">
        <Container>
          <div className="grid gap-12 lg:grid-cols-12 lg:gap-8">
            <div className="lg:col-span-7">
              <div className="flex flex-col">
                {services.map((service, index) => (
                  <ServiceCard
                    key={service.slug}
                    service={service}
                    index={index}
                    active={activeSlug === service.slug}
                    onHover={() => setActiveSlug(service.slug)}
                  />
                ))}
              </div>
            </div>

            {activeService ? (
              <div className="hidden lg:col-span-5 lg:block">
                <div className="sticky top-28 overflow-hidden rounded-[var(--radius-xl)] border border-[var(--color-border-default)] bg-[var(--color-eonx-black)] p-8">
                  <div
                    aria-hidden="true"
                    className="absolute right-0 top-0 size-72 translate-x-1/4 -translate-y-1/4 rounded-full bg-[radial-gradient(circle,rgba(73,40,194,0.26),transparent_65%)] blur-2xl"
                  />

                  <div className="relative flex min-h-[380px] flex-col justify-between">
                    <div>
                      <Label>
                        {activeService.number} / {activeService.name}
                      </Label>

                      <h3 className="mt-6 font-[var(--font-display)] text-4xl leading-[0.95] tracking-[-0.04em]">
                        {activeService.name}
                      </h3>

                      <p className="mt-4 text-xs uppercase tracking-[0.14em] text-[var(--color-periwinkle)]">
                        {activeService.positioning}
                      </p>
                    </div>

                    <div>
                      <Text size="md" muted>
                        {activeService.description}
                      </Text>

                      <Link
                        href={`/services/${activeService.slug}`}
                        className="mt-6 inline-flex text-sm font-medium text-[var(--color-periwinkle)] transition-transform duration-[var(--duration-fast)] hover:translate-x-1"
                      >
                        Explore service →
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            ) : null}
          </div>
        </Container>
      </Section>

      <SimpleFooter />
    </main>
  );
}
