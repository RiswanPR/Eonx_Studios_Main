import { RevealText } from "@/components/shared/motion/RevealText";
import { Container } from "@/components/ui/Container";
import { Label } from "@/components/ui/Label";
import { Section } from "@/components/ui/Section";
import { Stack } from "@/components/ui/Stack";
import { Text } from "@/components/ui/Text";

export function ServicesHero() {
  return (
    <Section
      spacing="large"
      className="relative overflow-hidden pt-28 pb-16 lg:pt-32"
    >
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-[radial-gradient(circle_at_70%_40%,rgba(73,40,194,0.18),transparent_34%),radial-gradient(circle_at_80%_70%,rgba(191,64,250,0.08),transparent_30%)]"
      />

      <Container className="relative z-10">
        <Stack gap="lg" className="max-w-4xl">
          <Label>02 / Services</Label>

          <RevealText>
            <h1 className="font-[var(--font-display)] text-[clamp(3.5rem,7vw,7rem)] leading-[0.9] tracking-[-0.05em]">
              WE CREATE
              <br />
              BRANDS,
              <br />
              EXPERIENCES
              <br />
              & DIGITAL
              <br />
              WORLDS.
            </h1>
          </RevealText>

          <Text size="lg" muted className="max-w-2xl">
            Strategy, design, development, content and technology — connected
            through one creative system.
          </Text>
        </Stack>
      </Container>
    </Section>
  );
}
