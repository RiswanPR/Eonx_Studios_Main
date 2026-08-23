import { Container } from "@/components/ui/Container";
import { Heading } from "@/components/ui/Heading";
import { Section } from "@/components/ui/Section";
import { Stack } from "@/components/ui/Stack";
import { Text } from "@/components/ui/Text";

export default function NavigationTestPage() {
  return (
    <main className="pt-20">
      <Section spacing="large">
        <Container>
          <Stack gap="lg">
            <Heading level={1} size="display">
              Navigation Test
            </Heading>

            <Text size="lg" muted>
              Test desktop navigation, mega menu, scrolling, mobile navigation
              and keyboard interaction.
            </Text>

            <div className="h-[200vh]" />
          </Stack>
        </Container>
      </Section>
    </main>
  );
}
