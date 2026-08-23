import {
  FadeIn,
  Magnetic,
  RevealImage,
  RevealText,
  ScrollReveal,
} from "@/components/shared/motion";

import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { Heading } from "@/components/ui/Heading";
import { Section } from "@/components/ui/Section";
import { Stack } from "@/components/ui/Stack";

export default function MotionTestPage() {
  return (
    <main className="pt-20">
      <Section spacing="large">
        <Container>
          <Stack gap="lg">
            <RevealText>
              <Heading level={1} size="display">
                MOTION
                <br />
                SYSTEM.
              </Heading>
            </RevealText>

            <FadeIn delay={0.2}>
              <p className="type-body-lg max-w-xl text-[var(--foreground-muted)]">
                Eonx movement follows a controlled language of reveal, sweep and
                transformation.
              </p>
            </FadeIn>

            <Magnetic className="w-fit">
              <Button>Book a Call</Button>
            </Magnetic>
          </Stack>
        </Container>
      </Section>

      <Section spacing="large">
        <Container>
          <Stack gap="lg">
            {Array.from({ length: 5 }).map((_, index) => (
              <ScrollReveal key={index}>
                <div className="rounded-[var(--radius-lg)] border border-[var(--color-border-default)] bg-[var(--color-surface-01)] p-12">
                  <h2 className="type-heading-lg">Section {index + 1}</h2>
                </div>
              </ScrollReveal>
            ))}
          </Stack>
        </Container>
      </Section>

      <Section spacing="large">
        <Container>
          <RevealImage>
            <div className="aspect-[16/9] rounded-[var(--radius-lg)] bg-[var(--gradient-atmospheric)]" />
          </RevealImage>
        </Container>
      </Section>
    </main>
  );
}
