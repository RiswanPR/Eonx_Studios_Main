"use client";

import Link from "next/link";
import { useState } from "react";

import { Container } from "@/components/ui/Container";
import { Label } from "@/components/ui/Label";
import { Section } from "@/components/ui/Section";
import { Text } from "@/components/ui/Text";
import { services } from "@/content/services/services";
import { cn } from "@/lib/utils/cn";

export function HomeServices() {
  const [activeSlug, setActiveSlug] = useState(
    services[0]?.slug ?? "",
  );

  const activeService =
    services.find((service) => service.slug === activeSlug) ?? services[0];

  if (!activeService) {
    return null;
  }

  return (
    <Section
      id="services"
      spacing="large"
      className="bg-[var(--color-surface-01)]"
    >
      <Container>
        <div className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <Label>02 / Services</Label>

            <h2 className="mt-6 font-[var(--font-display)] text-[clamp(3.5rem,6vw,6rem)] leading-[0.9] tracking-[-0.05em]">
              WHAT
              <br />
              WE
              <br />
              CREATE.
            </h2>
          </div>

          <div className="lg:col-span-8">
            <div className="grid gap-8 lg:grid-cols-[1fr_0.8fr]">
              <div>
                {services.map((service, index) => {
                  const active = activeSlug === service.slug;

                  return (
                    <Link
                      key={service.slug}
                      href={`/services/${service.slug}`}
                      onMouseEnter={() => setActiveSlug(service.slug)}
                      onFocus={() => setActiveSlug(service.slug)}
                      className={cn(
                        "group flex items-center gap-4 border-t border-[var(--color-border-subtle)] py-5",
                        "transition-colors duration-[var(--duration-standard)]",
                        active && "text-[var(--color-periwinkle)]",
                      )}
                    >
                      <span className="font-mono text-xs text-[var(--foreground-muted)]">
                        {String(index + 1).padStart(2, "0")}
                      </span>

                      <span className="font-[var(--font-display)] text-3xl md:text-4xl">
                        {service.name}
                      </span>

                      <span
                        aria-hidden="true"
                        className="ml-auto opacity-40 transition-transform duration-[var(--duration-standard)] group-hover:translate-x-1 group-hover:opacity-100"
                      >
                        →
                      </span>
                    </Link>
                  );
                })}
              </div>

              <div className="hidden lg:block">
                <div className="sticky top-28 overflow-hidden rounded-[var(--radius-xl)] border border-[var(--color-border-default)] bg-[var(--color-eonx-black)] p-8">
                  <div
                    aria-hidden="true"
                    className="absolute right-0 top-0 size-72 translate-x-1/4 -translate-y-1/4 rounded-full bg-[radial-gradient(circle,rgba(73,40,194,0.26),transparent_65%)] blur-2xl"
                  />

                  <div className="relative flex min-h-[360px] flex-col justify-between">
                    <div>
                      <Label>{activeService.name}</Label>

                      <h3 className="mt-6 font-[var(--font-display)] text-5xl leading-[0.95] tracking-[-0.04em]">
                        {activeService.name}
                      </h3>
                    </div>

                    <div>
                      <Text size="md" muted>
                        {activeService.shortDescription}
                      </Text>

                      <Link
                        href={`/services/${activeService.slug}`}
                        className="mt-6 inline-flex text-sm font-medium text-[var(--color-periwinkle)]"
                      >
                        Explore service →
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}
