import { Container } from "@/components/ui/Container";
import { Label } from "@/components/ui/Label";
import { Section } from "@/components/ui/Section";
import { TextLink } from "@/components/ui/TextLink";

export function AboutCulture() {
  return (
    <Section
      id="culture"
      spacing="large"
      className="bg-[var(--color-surface-01)]"
    >
      <Container>
        <div className="mb-12 flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div>
            <Label>06 / Culture</Label>

            <h2 className="mt-6 max-w-[8ch] font-[var(--font-display)] text-[clamp(3.5rem,6vw,6rem)] leading-[0.9] tracking-[-0.05em]">
              HOW WE MAKE.
            </h2>
          </div>

          <TextLink href="/work">See the work</TextLink>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <div className="overflow-hidden rounded-[var(--radius-xl)] border border-[var(--color-border-subtle)] bg-[var(--color-eonx-black)] p-8">
            <span className="font-mono text-xs text-[var(--color-periwinkle)]">
              01
            </span>
            <h3 className="mt-6 font-[var(--font-display)] text-3xl tracking-[-0.02em]">
              EXPERIMENTATION
            </h3>
            <p className="mt-3 text-sm leading-6 text-[var(--foreground-muted)]">
              We test new ideas, techniques and technologies constantly to find
              what creates real distinction.
            </p>
          </div>

          <div className="overflow-hidden rounded-[var(--radius-xl)] border border-[var(--color-border-subtle)] bg-[var(--color-eonx-black)] p-8">
            <span className="font-mono text-xs text-[var(--color-periwinkle)]">
              02
            </span>
            <h3 className="mt-6 font-[var(--font-display)] text-3xl tracking-[-0.02em]">
              COLLABORATION
            </h3>
            <p className="mt-3 text-sm leading-6 text-[var(--foreground-muted)]">
              Strategy, design and code work in parallel from day one to ensure
              execution matches ambition.
            </p>
          </div>

          <div className="overflow-hidden rounded-[var(--radius-xl)] border border-[var(--color-border-subtle)] bg-[var(--color-eonx-black)] p-8 sm:col-span-2 lg:col-span-1">
            <span className="font-mono text-xs text-[var(--color-periwinkle)]">
              03
            </span>
            <h3 className="mt-6 font-[var(--font-display)] text-3xl tracking-[-0.02em]">
              CRAFT & CARE
            </h3>
            <p className="mt-3 text-sm leading-6 text-[var(--foreground-muted)]">
              Every detail matters — from the typography hierarchy to interaction
              easing and performance budgets.
            </p>
          </div>
        </div>
      </Container>
    </Section>
  );
}
