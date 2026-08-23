import type { ReactNode } from "react";

interface LegalSectionProps {
  title: string;
  children: ReactNode;
}

export function LegalSection({ title, children }: LegalSectionProps) {
  return (
    <section className="border-t border-[var(--color-border-subtle)] py-8 first:border-t-0 first:pt-0">
      <h2 className="font-[var(--font-display)] text-2xl tracking-[-0.02em] md:text-3xl text-white">
        {title}
      </h2>

      <div className="mt-4 space-y-4 text-base leading-relaxed text-[var(--foreground-muted)] md:text-lg">
        {children}
      </div>
    </section>
  );
}
