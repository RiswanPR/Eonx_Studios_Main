import { FadeIn } from "@/components/shared/motion/FadeIn";
import { Container } from "@/components/ui/Container";
import { Label } from "@/components/ui/Label";
import { Section } from "@/components/ui/Section";
import { aboutContent } from "@/content/about/about";

export function AboutIntro() {
  const { introduction } = aboutContent;

  return (
    <Section
      id="who-we-are"
      spacing="large"
      className="bg-[var(--color-surface-01)]"
    >
      <Container>
        <div className="grid gap-12 lg:grid-cols-12 lg:items-start">
          <div className="lg:col-span-3">
            <Label>{introduction.eyebrow}</Label>
          </div>

          <div className="lg:col-span-6">
            <h2 className="font-[var(--font-display)] text-3xl leading-[1.1] tracking-[-0.03em] md:text-4xl lg:text-5xl">
              {introduction.title}
            </h2>
          </div>

          <div className="lg:col-span-3">
            <FadeIn>
              <p className="text-base leading-7 text-[var(--foreground-muted)]">
                {introduction.body}
              </p>
            </FadeIn>
          </div>
        </div>
      </Container>
    </Section>
  );
}
