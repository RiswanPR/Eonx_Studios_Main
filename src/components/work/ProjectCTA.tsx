"use client";

import { TrackedCTA } from "@/components/analytics/TrackedCTA";
import { Magnetic } from "@/components/shared/motion/Magnetic";
import { Container } from "@/components/ui/Container";
import { Label } from "@/components/ui/Label";
import { Section } from "@/components/ui/Section";
import { Text } from "@/components/ui/Text";

export function ProjectCTA() {
  return (
    <Section
      id="cta"
      spacing="large"
      className="relative overflow-hidden bg-[var(--color-surface-01)]"
    >
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-[radial-gradient(circle_at_70%_50%,rgba(73,40,194,0.24),transparent_40%),radial-gradient(circle_at_80%_70%,rgba(191,64,250,0.1),transparent_35%)]"
      />

      <Container className="relative z-10">
        <div className="max-w-4xl">
          <Label>Start Something</Label>

          <h2 className="mt-6 font-[var(--font-display)] text-[clamp(3.5rem,7vw,7rem)] leading-[0.9] tracking-[-0.05em]">
            HAVE A PROJECT IN MIND?
          </h2>

          <Text size="lg" muted className="mt-6 max-w-xl">
            Let&apos;s talk about what you&apos;re building and explore how Eonx can
            help bring it to life.
          </Text>

          <div className="mt-10">
            <Magnetic className="w-fit">
              <TrackedCTA
                href="/book-a-call"
                size="lg"
                location="project-page"
                label="Book a Call"
              >
                Book a Call
              </TrackedCTA>
            </Magnetic>
          </div>
        </div>
      </Container>
    </Section>
  );
}
