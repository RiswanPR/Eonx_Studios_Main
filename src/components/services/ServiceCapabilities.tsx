import type { Service } from "@/types/service";
import { Container } from "@/components/ui/Container";
import { Label } from "@/components/ui/Label";
import { Section } from "@/components/ui/Section";

interface ServiceCapabilitiesProps {
  service: Service;
}

export function ServiceCapabilities({ service }: ServiceCapabilitiesProps) {
  return (
    <Section
      id="capabilities"
      spacing="large"
      className="bg-[var(--color-surface-01)]"
    >
      <Container>
        <div className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <Label>01 / Capabilities</Label>

            <h2 className="mt-6 max-w-[8ch] font-[var(--font-display)] text-[clamp(3.5rem,6vw,6rem)] leading-[0.9] tracking-[-0.05em]">
              WHAT WE DO.
            </h2>
          </div>

          <div className="lg:col-span-7">
            <div className="grid gap-6 sm:grid-cols-2">
              {service.capabilities.map((cap, index) => (
                <div
                  key={cap.title}
                  className="rounded-[var(--radius-xl)] border border-[var(--color-border-subtle)] bg-[var(--color-eonx-black)] p-8 transition-colors duration-[var(--duration-standard)] hover:border-[var(--color-border-default)]"
                >
                  <span className="font-mono text-xs text-[var(--color-periwinkle)]">
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  <h3 className="mt-6 font-[var(--font-display)] text-2xl tracking-[-0.02em] md:text-3xl">
                    {cap.title}
                  </h3>

                  <p className="mt-3 text-sm leading-6 text-[var(--foreground-muted)]">
                    {cap.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}
