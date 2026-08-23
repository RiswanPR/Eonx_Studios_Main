import type { Service } from "@/types/service";
import { Magnetic } from "@/components/shared/motion/Magnetic";
import { ButtonLink } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Label } from "@/components/ui/Label";
import { Section } from "@/components/ui/Section";
import { Text } from "@/components/ui/Text";

interface ServiceCTAProps {
  service: Service;
}

export function ServiceCTA({ service }: ServiceCTAProps) {
  return (
    <Section
      id="cta"
      spacing="large"
      className="relative overflow-hidden bg-[var(--color-surface-01)]"
    >
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-[radial-gradient(circle_at_70%_50%,rgba(73,40,194,0.24),transparent_40%),radial-gradient(circle_at_80%_70%,rgba(191,64,250,0.1),transparent_35%)]"
      />

      <Container className="relative z-10">
        <div className="max-w-4xl">
          <Label>08 / Start a Project</Label>

          <h2 className="mt-6 font-[var(--font-display)] text-[clamp(3.5rem,7vw,7rem)] leading-[0.9] tracking-[-0.05em]">
            READY TO BUILD YOUR NEXT {service.name.toUpperCase()} EXPERIENCE?
          </h2>

          <Text size="lg" muted className="mt-6 max-w-xl">
            Let&apos;s discuss your ambition, timeline, and how Eonx can bring
            clarity and craft to your digital presence.
          </Text>

          <div className="mt-10">
            <Magnetic className="w-fit">
              <ButtonLink
                href="/book-a-call"
                size="lg"
                data-analytics={`service-cta-${service.slug}`}
              >
                Book a Call
              </ButtonLink>
            </Magnetic>
          </div>
        </div>
      </Container>
    </Section>
  );
}
