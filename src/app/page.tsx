import { Container } from "@/components/ui/Container";
import { Heading } from "@/components/ui/Heading";
import { Section } from "@/components/ui/Section";
import { Stack } from "@/components/ui/Stack";
import { Text } from "@/components/ui/Text";

export default function HomePage() {
  return (
    <main>
      <Section spacing="large">
        <Container>
          <Stack gap="md">
            <span className="type-label">
              EONX / CREATIVE TECHNOLOGY STUDIO
            </span>

            <Heading level={1} size="display">
              WE BUILD
              <br />
              WHAT PEOPLE
              <br />
              REMEMBER.
            </Heading>

            <Text size="lg" muted>
              Eonx combines creativity, design and technology
              to create memorable digital experiences.
            </Text>
          </Stack>
        </Container>
      </Section>
    </main>
  );
}