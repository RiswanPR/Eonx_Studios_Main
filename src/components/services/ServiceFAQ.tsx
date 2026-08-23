"use client";

import { useState } from "react";
import type { Service } from "@/types/service";
import { Container } from "@/components/ui/Container";
import { Label } from "@/components/ui/Label";
import { Section } from "@/components/ui/Section";
import { cn } from "@/lib/utils/cn";

interface ServiceFAQProps {
  service: Service;
}

export function ServiceFAQ({ service }: ServiceFAQProps) {
  const [active, setActive] = useState<number | null>(null);

  if (service.faq.length === 0) {
    return null;
  }

  const toggle = (index: number) => {
    setActive((current) => (current === index ? null : index));
  };

  return (
    <Section id="faq" spacing="large">
      <Container>
        <div className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <Label>06 / FAQ</Label>

            <h2 className="mt-6 max-w-[8ch] font-[var(--font-display)] text-[clamp(3.5rem,6vw,6rem)] leading-[0.9] tracking-[-0.05em]">
              QUESTIONS & ANSWERS.
            </h2>
          </div>

          <div className="lg:col-span-7">
            <div className="flex flex-col">
              {service.faq.map((item, index) => {
                const isOpen = active === index;

                return (
                  <div
                    key={item.question}
                    className="border-t border-[var(--color-border-subtle)]"
                  >
                    <button
                      type="button"
                      aria-expanded={isOpen}
                      onClick={() => toggle(index)}
                      className={cn(
                        "flex w-full items-center justify-between gap-6 py-6 text-left",
                        "transition-colors duration-[var(--duration-fast)]",
                        "hover:text-[var(--color-periwinkle)]",
                        "focus-visible:outline-2",
                        "focus-visible:outline-offset-4",
                        "focus-visible:outline-[var(--color-periwinkle)]",
                      )}
                    >
                      <span className="font-[var(--font-display)] text-2xl tracking-[-0.02em] md:text-3xl">
                        {item.question}
                      </span>

                      <span
                        aria-hidden="true"
                        className={cn(
                          "font-mono text-xl text-[var(--color-periwinkle)] transition-transform duration-[var(--duration-standard)]",
                          isOpen && "rotate-45",
                        )}
                      >
                        +
                      </span>
                    </button>

                    <div
                      className={cn(
                        "grid transition-[grid-template-rows,opacity] duration-[var(--duration-standard)]",
                        isOpen
                          ? "grid-rows-[1fr] opacity-100"
                          : "grid-rows-[0fr] opacity-0",
                      )}
                    >
                      <div className="overflow-hidden">
                        <p className="pb-6 text-base leading-7 text-[var(--foreground-muted)]">
                          {item.answer}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}
