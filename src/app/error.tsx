"use client";

import { useEffect } from "react";
import { Button, ButtonLink } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Label } from "@/components/ui/Label";
import { Section } from "@/components/ui/Section";

interface ErrorProps {
  error: Error & { digest?: string };
  reset: () => void;
}

export default function Error({ error, reset }: ErrorProps) {
  useEffect(() => {
    // Log client-side error to internal logger
    console.error("Global application error:", error);
  }, [error]);

  return (
    <main>
      <Section
        spacing="large"
        className="relative flex min-h-[70vh] items-center justify-center overflow-hidden pt-28 pb-16 text-center lg:pt-32"
      >
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-[radial-gradient(circle_at_50%_40%,rgba(255,42,109,0.15),transparent_50%)]"
        />

        <Container className="relative z-10 max-w-2xl">
          <Label>SYSTEM ERROR</Label>

          <h1 className="mt-6 font-[var(--font-display)] text-[clamp(3.5rem,8vw,7rem)] leading-[0.9] tracking-[-0.04em] text-white">
            SOMETHING BROKE.
          </h1>

          <p className="mx-auto mt-6 max-w-md text-base leading-7 text-[var(--foreground-muted)] md:text-lg">
            The experience encountered an unexpected problem.
          </p>

          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <Button type="button" onClick={() => reset()} size="lg">
              Try Again
            </Button>

            <ButtonLink href="/" variant="secondary" size="lg">
              Return Home
            </ButtonLink>
          </div>
        </Container>
      </Section>
    </main>
  );
}
