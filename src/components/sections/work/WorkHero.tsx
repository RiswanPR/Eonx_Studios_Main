import { RevealText } from "@/components/shared/motion/RevealText";
import { Container } from "@/components/ui/Container";
import { Label } from "@/components/ui/Label";
import { Section } from "@/components/ui/Section";
import { Text } from "@/components/ui/Text";

export function WorkHero() {
  return (
    <Section
      spacing="large"
      className="relative overflow-hidden pt-28 pb-16 lg:pt-32"
    >
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,rgba(73,40,194,0.18),transparent_36%),radial-gradient(circle_at_80%_70%,rgba(191,64,250,0.08),transparent_30%)]"
      />

      <Container className="relative z-10">
        <Label>03 / Selected Work</Label>

        <RevealText>
          <h1 className="mt-6 max-w-[8ch] font-[var(--font-display)] text-[clamp(4rem,9vw,9rem)] leading-[0.86] tracking-[-0.05em]">
            WE MAKE IDEAS VISIBLE.
          </h1>
        </RevealText>

        <Text
          size="lg"
          muted
          className="mt-10 max-w-2xl"
        >
          A curated collection of identities,
          digital experiences and creative work.
        </Text>
      </Container>
    </Section>
  );
}
