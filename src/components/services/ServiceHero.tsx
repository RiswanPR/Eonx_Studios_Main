import Link from "next/link";
import type { Service } from "@/types/service";
import { ServiceVisual } from "@/components/services/ServiceVisual";
import { RevealText } from "@/components/shared/motion/RevealText";
import { ButtonLink } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Label } from "@/components/ui/Label";
import { Section } from "@/components/ui/Section";
import { Stack } from "@/components/ui/Stack";
import { Text } from "@/components/ui/Text";

interface ServiceHeroProps {
  service: Service;
}

const themeBackgrounds: Record<Service["visualTheme"], string> = {
  purple:
    "bg-[radial-gradient(circle_at_70%_30%,rgba(91,42,98,0.48),transparent_48%)]",
  blue:
    "bg-[radial-gradient(circle_at_70%_30%,rgba(73,40,194,0.32),transparent_48%)]",
  dark:
    "bg-[radial-gradient(circle_at_70%_30%,rgba(73,40,194,0.16),transparent_48%)]",
  magenta:
    "bg-[radial-gradient(circle_at_70%_30%,rgba(191,64,250,0.22),transparent_48%)]",
  periwinkle:
    "bg-[radial-gradient(circle_at_70%_30%,rgba(227,217,252,0.14),transparent_48%)]",
};

export function ServiceHero({ service }: ServiceHeroProps) {
  return (
    <Section
      spacing="large"
      className="relative overflow-hidden pt-28 pb-16 lg:pt-32"
    >
      <div
        aria-hidden="true"
        className={`absolute inset-0 ${themeBackgrounds[service.visualTheme]}`}
      />

      <Container className="relative z-10">
        <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-8">
          <div className="lg:col-span-8">
            <Stack gap="lg">
              <nav
                aria-label="Breadcrumb"
                className="flex items-center gap-2 text-xs uppercase tracking-[0.14em]"
              >
                <Link
                  href="/services"
                  className="text-[var(--foreground-muted)] transition-colors hover:text-[var(--foreground)]"
                >
                  Services
                </Link>
                <span className="text-[var(--foreground-muted)]">/</span>
                <span className="text-[var(--color-periwinkle)]">
                  {service.name}
                </span>
              </nav>

              <Label>
                {service.number} / {service.name}
              </Label>

              <RevealText>
                <h1 className="font-[var(--font-display)] text-[clamp(3.5rem,7vw,7rem)] leading-[0.9] tracking-[-0.05em]">
                  {service.name.toUpperCase()}
                </h1>
              </RevealText>

              <p className="max-w-2xl font-[var(--font-display)] text-2xl tracking-[-0.02em] text-[var(--color-periwinkle)] md:text-3xl">
                {service.positioning}
              </p>

              <Text size="lg" muted className="max-w-2xl">
                {service.description}
              </Text>

              <div className="pt-2">
                <ButtonLink href="/book-a-call" size="lg">
                  Start a Project
                </ButtonLink>
              </div>
            </Stack>
          </div>

          <div className="lg:col-span-4">
            <div className="mx-auto max-w-[420px]">
              <ServiceVisual service={service} />
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}
