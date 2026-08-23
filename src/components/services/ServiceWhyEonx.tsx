import type { Service } from "@/types/service";
import { Container } from "@/components/ui/Container";
import { Label } from "@/components/ui/Label";
import { Section } from "@/components/ui/Section";
import { Text } from "@/components/ui/Text";

interface ServiceWhyEonxProps {
  service: Service;
}

export function ServiceWhyEonx({ service }: ServiceWhyEonxProps) {
  return (
    <Section
      id="why-eonx"
      spacing="large"
      className="bg-[var(--color-surface-01)]"
    >
      <Container>
        <div className="grid gap-12 lg:grid-cols-12 lg:items-center">
          <div className="lg:col-span-6">
            <Label>05 / Why Eonx</Label>

            <h2 className="mt-6 max-w-[8ch] font-[var(--font-display)] text-[clamp(3.5rem,6vw,6rem)] leading-[0.9] tracking-[-0.05em]">
              STRATEGY BEFORE EXECUTION.
            </h2>
          </div>

          <div className="lg:col-span-6">
            <div className="rounded-[var(--radius-xl)] border border-[var(--color-border-default)] bg-[var(--color-eonx-black)] p-8 md:p-10">
              <p className="font-[var(--font-display)] text-2xl tracking-[-0.02em] text-[var(--color-periwinkle)] md:text-3xl">
                Every {service.name.toLowerCase()} decision is grounded in purpose.
              </p>

              <Text size="lg" muted className="mt-6">
                At Eonx, we do not view {service.name.toLowerCase()} as an isolated task.
                We connect creative direction, engineering standards, and long-term brand equity
                so that every touchpoint performs seamlessly and leaves a lasting impression.
              </Text>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}
