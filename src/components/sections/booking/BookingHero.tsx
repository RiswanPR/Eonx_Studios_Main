import { RevealText } from "@/components/shared/motion/RevealText";
import { Container } from "@/components/ui/Container";
import { Label } from "@/components/ui/Label";
import { Section } from "@/components/ui/Section";
import { Text } from "@/components/ui/Text";

export function BookingHero() {
  return (
    <Section
      spacing="large"
      className="relative overflow-hidden pt-28 pb-12 lg:pt-32"
    >
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-[radial-gradient(circle_at_50%_30%,rgba(73,40,194,0.22),transparent_45%)]"
      />

      <Container className="relative z-10 text-center">
        <div className="mx-auto max-w-3xl">
          <Label>08 / START A PROJECT</Label>

          <div className="mt-6">
            <RevealText>
              <h1 className="font-[var(--font-display)] text-[clamp(2.75rem,6vw,5.5rem)] leading-[0.92] tracking-[-0.04em]">
                LET&apos;S BUILD SOMETHING WORTH REMEMBERING.
              </h1>
            </RevealText>
          </div>

          <Text size="lg" muted className="mx-auto mt-6 max-w-xl">
            Tell us what you&apos;re building, changing or launching. We&apos;ll take it
            from there.
          </Text>
        </div>
      </Container>
    </Section>
  );
}
