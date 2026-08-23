import { EonxStaticOrbital } from "@/components/shared/experience/EonxStaticOrbital";
import { Magnetic } from "@/components/shared/motion/Magnetic";
import { ButtonLink } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Label } from "@/components/ui/Label";
import { Section } from "@/components/ui/Section";

export function HomeFinalCTA() {
  return (
    <Section
      id="contact"
      spacing="large"
      className="relative overflow-hidden bg-[var(--color-surface-01)]"
    >
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-[radial-gradient(circle_at_70%_50%,rgba(73,40,194,0.2),transparent_35%),radial-gradient(circle_at_80%_70%,rgba(191,64,250,0.08),transparent_30%)]"
      />

      <Container className="relative z-10">
        <div className="grid items-center gap-12 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <Label>{"08 / Let's Work Together"}</Label>

            <h2 className="mt-6 max-w-[8ch] font-[var(--font-display)] text-[clamp(4rem,8vw,8rem)] leading-[0.88] tracking-[-0.05em]">
              {"LET'S BUILD SOMETHING UNFORGETTABLE."}
            </h2>

            <Magnetic className="mt-10 w-fit">
              <ButtonLink
                href="/book-a-call"
                size="lg"
                data-analytics="footer-book-call"
              >
                Book a Call
              </ButtonLink>
            </Magnetic>
          </div>

          <div className="hidden lg:block lg:col-span-5">
            <div
              aria-hidden="true"
              className="mx-auto max-w-[480px]"
            >
              <EonxStaticOrbital />
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}
