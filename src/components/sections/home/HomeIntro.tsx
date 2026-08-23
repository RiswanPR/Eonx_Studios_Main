import { FadeIn } from "@/components/shared/motion/FadeIn";
import { RevealText } from "@/components/shared/motion/RevealText";
import { Container } from "@/components/ui/Container";
import { Label } from "@/components/ui/Label";
import { Section } from "@/components/ui/Section";
import { Text } from "@/components/ui/Text";
import { homeContent } from "@/content/site/home";

export function HomeIntro() {
  const { intro } = homeContent;

  return (
    <Section
      id="intro"
      spacing="large"
      className="border-t border-[var(--color-border-subtle)]"
    >
      <Container>
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-8">
          <div className="lg:col-span-3">
            <Label>{intro.eyebrow}</Label>
          </div>

          <div className="lg:col-span-6">
            <RevealText>
              <h2 className="font-[var(--font-display)] text-[clamp(3rem,6vw,6rem)] leading-[0.92] tracking-[-0.05em]">
                {intro.title}
              </h2>
            </RevealText>
          </div>

          <div className="lg:col-span-3 lg:pt-3">
            <FadeIn delay={0.15}>
              <Text size="lg" muted>
                {intro.description}
              </Text>
            </FadeIn>
          </div>
        </div>
      </Container>
    </Section>
  );
}
