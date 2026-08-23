import { Container } from "@/components/ui/Container";
import { Grid } from "@/components/ui/Grid";
import { Heading } from "@/components/ui/Heading";
import { Section } from "@/components/ui/Section";
import { Stack } from "@/components/ui/Stack";
import { Text } from "@/components/ui/Text";

const colors = [
  ["Eonx Black", "var(--color-eonx-black)"],
  ["Ultrasonic Blue", "var(--color-ultrasonic-blue)"],
  ["Hyper Magenta", "var(--color-hyper-magenta)"],
  ["Velvet Purple", "var(--color-velvet-purple)"],
  ["Periwinkle", "var(--color-periwinkle)"],
];

export default function DesignSystemPage() {
  return (
    <main>
      <Section spacing="large">
        <Container>
          <Stack gap="lg">
            <div>
              <span className="type-label">
                EONX DESIGN SYSTEM
              </span>

              <Heading level={1} size="display">
                Design System
              </Heading>
            </div>

            <Text size="lg" muted>
              Foundation for the Eonx digital experience.
            </Text>
          </Stack>
        </Container>
      </Section>

      <Section>
        <Container>
          <Stack gap="md">
            <Heading level={2} size="lg">
              Colors
            </Heading>

            <Grid>
              {colors.map(([name, color]) => (
                <div
                  key={name}
                  className="min-h-40 rounded-[var(--radius-lg)] border-[var(--border-width)] border-[var(--color-border-default)] p-[var(--space-6)]"
                  style={{ background: color }}
                >
                  <span
                    className="type-body-sm"
                    style={{
                      color:
                        name === "Periwinkle"
                          ? "var(--color-eonx-black)"
                          : "var(--color-white)",
                    }}
                  >
                    {name}
                  </span>
                </div>
              ))}
            </Grid>
          </Stack>
        </Container>
      </Section>

      <Section>
        <Container>
          <Stack gap="md">
            <Heading level={2} size="lg">
              Typography
            </Heading>

            <div className="type-display-xl">
              WE BUILD
              <br />
              EXPERIENCES.
            </div>

            <div className="type-heading-lg">
              Creative technology studio.
            </div>

            <Text size="lg">
              Eonx combines strategy, creativity, design,
              development and technology.
            </Text>

            <span className="type-label">
              01 / TYPOGRAPHY
            </span>
          </Stack>
        </Container>
      </Section>
    </main>
  );
}