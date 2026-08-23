"use client";

import { useState } from "react";

import { Container } from "@/components/ui/Container";
import { Label } from "@/components/ui/Label";
import { Section } from "@/components/ui/Section";
import { homeContent } from "@/content/site/home";
import { cn } from "@/lib/utils/cn";

export function HomeDifference() {
  const [active, setActive] = useState(0);

  return (
    <Section
      id="difference"
      spacing="large"
      className="bg-[var(--color-surface-01)]"
    >
      <Container>
        <div className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <Label>04 / The Eonx Difference</Label>

            <h2 className="mt-6 max-w-[7ch] font-[var(--font-display)] text-[clamp(3.5rem,6vw,6rem)] leading-[0.9] tracking-[-0.05em]">
              NOT JUST ANOTHER AGENCY.
            </h2>
          </div>

          <div className="lg:col-span-7">
            <div>
              {homeContent.difference.map((item, index) => (
                <button
                  key={item.number}
                  type="button"
                  onMouseEnter={() => setActive(index)}
                  onFocus={() => setActive(index)}
                  className={cn(
                    "flex w-full items-start gap-5 border-t border-[var(--color-border-subtle)] py-6 text-left",
                    "transition-opacity duration-[var(--duration-standard)]",
                    active !== index && "opacity-45",
                    "focus-visible:outline-2",
                    "focus-visible:outline-offset-4",
                    "focus-visible:outline-[var(--color-periwinkle)]",
                  )}
                >
                  <span className="font-mono text-xs text-[var(--foreground-muted)]">
                    {item.number}
                  </span>

                  <div>
                    <h3 className="font-[var(--font-display)] text-4xl tracking-[-0.03em]">
                      {item.title}
                    </h3>

                    <p className="mt-3 max-w-xl text-sm leading-6 text-[var(--foreground-muted)]">
                      {item.description}
                    </p>
                  </div>
                </button>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}
