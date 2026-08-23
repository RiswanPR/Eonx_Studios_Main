import Link from "next/link";

import { EonxExperience } from "@/components/shared/experience/EonxExperience";
import { Magnetic } from "@/components/shared/motion/Magnetic";
import { RevealText } from "@/components/shared/motion/RevealText";
import { ButtonLink } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Label } from "@/components/ui/Label";
import { Stack } from "@/components/ui/Stack";
import { Text } from "@/components/ui/Text";
import { homeContent } from "@/content/site/home";

export function HomeHero() {
  const { hero } = homeContent;

  return (
    <section className="relative min-h-[100svh] overflow-hidden">
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-[radial-gradient(circle_at_70%_40%,rgba(73,40,194,0.18),transparent_34%),radial-gradient(circle_at_80%_70%,rgba(191,64,250,0.08),transparent_30%)]"
      />

      <Container className="relative z-10 flex min-h-[100svh] items-center pt-28 pb-16 lg:pt-32">
        <div className="grid w-full items-center gap-12 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <Stack gap="lg">
              <Label>{hero.eyebrow}</Label>

              <div className="max-w-[900px]">
                {hero.title.map((line, index) => (
                  <RevealText
                    key={line}
                    delay={index * 0.08}
                  >
                    <h1 className="font-[var(--font-display)] text-[clamp(4rem,9vw,9rem)] leading-[0.88] tracking-[-0.05em]">
                      {line}
                    </h1>
                  </RevealText>
                ))}
              </div>

              <Text
                size="lg"
                muted
                className="max-w-xl"
              >
                {hero.description}
              </Text>

              <div className="flex flex-wrap items-center gap-3">
                <Magnetic>
                  <ButtonLink
                    href="/book-a-call"
                    size="lg"
                    data-analytics="hero-book-call"
                  >
                    Book a Call
                  </ButtonLink>
                </Magnetic>

                <ButtonLink
                  href="/work"
                  variant="secondary"
                  size="lg"
                >
                  View Work
                </ButtonLink>
              </div>
            </Stack>
          </div>

          <div className="lg:col-span-5">
            <div
              aria-hidden="true"
              className="relative mx-auto w-full max-w-[620px]"
            >
              <EonxExperience />
            </div>
          </div>
        </div>
      </Container>

      <Link
        href="#intro"
        className="absolute bottom-8 left-1/2 z-10 hidden -translate-x-1/2 items-center gap-3 text-[10px] uppercase tracking-[0.2em] text-[var(--foreground-muted)] md:flex"
      >
        <span>Scroll to explore</span>
        <span aria-hidden="true">↓</span>
      </Link>
    </section>
  );
}
