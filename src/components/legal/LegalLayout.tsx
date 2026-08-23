import type { ReactNode } from "react";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Label } from "@/components/ui/Label";
import { Section } from "@/components/ui/Section";

interface LegalLayoutProps {
  eyebrow: string;
  title: string;
  updatedAt: string;
  children: ReactNode;
}

export function LegalLayout({
  eyebrow,
  title,
  updatedAt,
  children,
}: LegalLayoutProps) {
  return (
    <main>
      <Section
        spacing="large"
        className="relative overflow-hidden pt-28 pb-12 lg:pt-32"
      >
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-[radial-gradient(circle_at_50%_20%,rgba(73,40,194,0.18),transparent_40%)]"
        />

        <Container className="relative z-10 max-w-4xl">
          <Label>{eyebrow}</Label>

          <h1 className="mt-6 font-[var(--font-display)] text-[clamp(2.5rem,6vw,5rem)] leading-[0.92] tracking-[-0.04em]">
            {title}
          </h1>

          <p className="mt-4 font-mono text-xs uppercase tracking-[0.12em] text-[var(--color-periwinkle)]">
            Last Updated: {updatedAt}
          </p>

          {/* Cross-legal navigation tabs */}
          <div className="mt-8 flex flex-wrap gap-4 border-b border-[var(--color-border-subtle)] pb-6 text-xs uppercase tracking-[0.14em]">
            <Link
              href="/privacy"
              className="text-[var(--foreground-muted)] transition-colors hover:text-white"
            >
              Privacy Policy
            </Link>
            <span className="text-[var(--color-border-default)]">&bull;</span>
            <Link
              href="/terms"
              className="text-[var(--foreground-muted)] transition-colors hover:text-white"
            >
              Terms of Service
            </Link>
            <span className="text-[var(--color-border-default)]">&bull;</span>
            <Link
              href="/cookies"
              className="text-[var(--foreground-muted)] transition-colors hover:text-white"
            >
              Cookie Policy
            </Link>
          </div>
        </Container>
      </Section>

      <Section spacing="default" className="pt-0 pb-24">
        <Container className="max-w-4xl">
          <div className="rounded-[var(--radius-xl)] border border-[var(--color-border-subtle)] bg-[var(--color-surface-01)] p-8 md:p-12">
            {children}
          </div>
        </Container>
      </Section>
    </main>
  );
}
