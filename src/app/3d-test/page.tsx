import type { Metadata } from "next";
import { EonxExperience } from "@/components/shared/experience/EonxExperience";
import { Container } from "@/components/ui/Container";
import { Heading } from "@/components/ui/Heading";
import { Section } from "@/components/ui/Section";
import { Stack } from "@/components/ui/Stack";
import { Text } from "@/components/ui/Text";
import { ExperienceDebug } from "@/experience/performance/ExperienceDebug";
import { noIndexMetadata } from "@/lib/seo/noIndex";

export const metadata: Metadata = noIndexMetadata;

export default function ThreeDTestPage() {
  return (
    <main className="pt-20">
      <Section spacing="large">
        <Container>
          <Stack gap="lg">
            <div>
              <span className="type-label">EONX / EXPERIENCE ENGINE</span>

              <Heading level={1} size="display">
                ORBITAL
                <br />
                ENGINE.
              </Heading>
            </div>

            <Text size="lg" muted>
              Initial prototype of the Eonx 3D visual system.
            </Text>

            <EonxExperience />

            <div className="h-[200vh]" />
          </Stack>
        </Container>
      </Section>
      <ExperienceDebug />
    </main>
  );
}
