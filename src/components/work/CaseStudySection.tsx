import type { ProjectMedia } from "@/types/project";
import { Container } from "@/components/ui/Container";
import { Label } from "@/components/ui/Label";
import { Section } from "@/components/ui/Section";
import { cn } from "@/lib/utils/cn";

interface CaseStudySectionProps {
  eyebrow?: string;
  title: string;
  body: string;
  media?: ProjectMedia[];
  reversed?: boolean;
  surface?: boolean;
}

export function CaseStudySection({
  eyebrow,
  title,
  body,
  media,
  reversed = false,
  surface = false,
}: CaseStudySectionProps) {
  return (
    <Section
      spacing="large"
      className={cn(surface && "bg-[var(--color-surface-01)]")}
    >
      <Container>
        <div
          className={cn(
            "grid gap-12 lg:grid-cols-12 lg:items-center",
            reversed && "lg:[&>*:first-child]:order-2",
          )}
        >
          <div className="lg:col-span-5">
            {eyebrow && <Label>{eyebrow}</Label>}

            <h2 className="mt-6 max-w-[8ch] font-[var(--font-display)] text-[clamp(3.5rem,6vw,6rem)] leading-[0.9] tracking-[-0.05em]">
              {title}
            </h2>

            <p className="mt-8 text-base leading-7 text-[var(--foreground-muted)] md:text-lg md:leading-8">
              {body}
            </p>
          </div>

          <div className="lg:col-span-7">
            {media && media[0]?.type === "image" ? (
              <div className="overflow-hidden rounded-[var(--radius-xl)] border border-[var(--color-border-subtle)] bg-[var(--color-eonx-black)]">
                <img
                  src={media[0].src}
                  alt={media[0].alt}
                  className="aspect-[16/10] w-full object-cover"
                />
              </div>
            ) : (
              <div
                aria-hidden="true"
                className="aspect-[16/10] w-full rounded-[var(--radius-xl)] border border-[var(--color-border-subtle)] bg-[radial-gradient(circle_at_50%_50%,rgba(73,40,194,0.18),transparent_60%),var(--color-eonx-black)]"
              />
            )}
          </div>
        </div>
      </Container>
    </Section>
  );
}
