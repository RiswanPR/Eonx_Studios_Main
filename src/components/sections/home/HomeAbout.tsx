import Link from "next/link";

import { FadeIn } from "@/components/shared/motion/FadeIn";
import { Container } from "@/components/ui/Container";
import { Label } from "@/components/ui/Label";
import { Section } from "@/components/ui/Section";

export function HomeAbout() {
  return (
    <Section
      id="about"
      spacing="large"
      className="bg-[var(--color-surface-01)]"
    >
      <Container>
        <div className="grid gap-12 lg:grid-cols-12 lg:items-center">
          <div className="lg:col-span-7">
            <Label>06 / About Eonx</Label>

            <h2 className="mt-6 max-w-[8ch] font-[var(--font-display)] text-[clamp(3.5rem,6vw,6rem)] leading-[0.9] tracking-[-0.05em]">
              BUILT BY PEOPLE WHO CARE.
            </h2>
          </div>

          <div className="lg:col-span-5">
            <FadeIn>
              <div className="rounded-[var(--radius-xl)] border border-[var(--color-border-default)] bg-[var(--color-eonx-black)] p-8">
                <p className="type-body-lg text-[var(--foreground-muted)]">
                  Eonx brings creative thinking, design and technology together
                  to build experiences that feel considered from the first detail
                  to the final interaction.
                </p>

                <Link
                  href="/about"
                  className="mt-8 inline-flex text-sm font-medium text-[var(--color-periwinkle)]"
                >
                  Meet Eonx →
                </Link>
              </div>
            </FadeIn>
          </div>
        </div>
      </Container>
    </Section>
  );
}
