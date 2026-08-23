import { RevealText } from "@/components/shared/motion/RevealText";
import { Container } from "@/components/ui/Container";
import { Label } from "@/components/ui/Label";
import { Section } from "@/components/ui/Section";
import { aboutContent } from "@/content/about/about";

export function AboutPhilosophy() {
  const { philosophy } = aboutContent;

  return (
    <Section
      id="philosophy"
      spacing="large"
      className="bg-[var(--color-surface-01)]"
    >
      <Container>
        <div className="mx-auto max-w-5xl">
          <Label>{philosophy.eyebrow}</Label>

          <RevealText>
            <h2 className="mt-8 font-[var(--font-display)] text-[clamp(2.5rem,5.5vw,5.5rem)] leading-[0.95] tracking-[-0.04em]">
              {philosophy.title}
            </h2>
          </RevealText>

          <p className="mt-10 max-w-2xl text-lg leading-8 text-[var(--foreground-muted)] md:text-xl">
            {philosophy.body}
          </p>
        </div>
      </Container>
    </Section>
  );
}
