import { ButtonLink } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Label } from "@/components/ui/Label";
import { Section } from "@/components/ui/Section";

export default function NotFound() {
  return (
    <main>
      <Section
        spacing="large"
        className="relative flex min-h-[70vh] items-center justify-center overflow-hidden pt-28 pb-16 text-center lg:pt-32"
      >
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-[radial-gradient(circle_at_50%_40%,rgba(73,40,194,0.25),transparent_50%)]"
        />

        <Container className="relative z-10 max-w-2xl">
          <Label>ERROR / 404</Label>

          <h1 className="mt-6 font-[var(--font-display)] text-[clamp(3.5rem,8vw,7rem)] leading-[0.9] tracking-[-0.04em]">
            LOST IN THE ORBIT.
          </h1>

          <p className="mx-auto mt-6 max-w-md text-base leading-7 text-[var(--foreground-muted)] md:text-lg">
            The page you&apos;re looking for doesn&apos;t exist or may have moved.
          </p>

          <div className="mt-10 flex justify-center">
            <ButtonLink href="/" size="lg">
              Return Home
            </ButtonLink>
          </div>
        </Container>
      </Section>
    </main>
  );
}