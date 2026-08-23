import { RevealText } from "@/components/shared/motion/RevealText";
import { Container } from "@/components/ui/Container";
import { Label } from "@/components/ui/Label";
import { Section } from "@/components/ui/Section";
import { Text } from "@/components/ui/Text";
import { aboutContent } from "@/content/about/about";

export function AboutHero() {
  const { hero } = aboutContent;

  return (
    <Section
      spacing="large"
      className="relative overflow-hidden pt-28 pb-16 lg:pt-32"
    >
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-[radial-gradient(circle_at_70%_35%,rgba(91,42,98,0.28),transparent_38%)]"
      />

      <Container className="relative z-10">
        <Label>{hero.eyebrow}</Label>

        <div className="mt-7">
          {hero.title.map((line, index) => (
            <RevealText key={line} delay={index * 0.1}>
              <h1 className="font-[var(--font-display)] text-[clamp(4rem,9vw,9rem)] leading-[0.86] tracking-[-0.05em]">
                {line}
              </h1>
            </RevealText>
          ))}
        </div>

        <Text size="lg" muted className="mt-10 max-w-2xl">
          {hero.description}
        </Text>
      </Container>
    </Section>
  );
}
