import type { Service } from "@/types/service";
import { Container } from "@/components/ui/Container";
import { Label } from "@/components/ui/Label";
import { Section } from "@/components/ui/Section";

interface ServiceDeliverablesProps {
  service: Service;
}

export function ServiceDeliverables({ service }: ServiceDeliverablesProps) {
  return (
    <Section id="deliverables" spacing="large">
      <Container>
        <div className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <Label>02 / Deliverables</Label>

            <h2 className="mt-6 max-w-[8ch] font-[var(--font-display)] text-[clamp(3.5rem,6vw,6rem)] leading-[0.9] tracking-[-0.05em]">
              WHAT YOU RECEIVE.
            </h2>
          </div>

          <div className="lg:col-span-7">
            <div className="flex flex-col">
              {service.deliverables.map((del, index) => (
                <div
                  key={del.title}
                  className="flex items-start gap-6 border-t border-[var(--color-border-subtle)] py-8"
                >
                  <span className="font-mono text-xs text-[var(--foreground-muted)]">
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  <div>
                    <h3 className="font-[var(--font-display)] text-3xl tracking-[-0.02em]">
                      {del.title}
                    </h3>

                    <p className="mt-3 max-w-xl text-sm leading-6 text-[var(--foreground-muted)]">
                      {del.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}
