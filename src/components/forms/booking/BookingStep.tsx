"use client";

import { useEffect, useRef } from "react";
import type { ReactNode } from "react";

interface BookingStepProps {
  stepNumber: number;
  title: string;
  description?: string;
  children: ReactNode;
}

export function BookingStep({
  stepNumber,
  title,
  description,
  children,
}: BookingStepProps) {
  const headingRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    headingRef.current?.focus();
  }, []);

  return (
    <section data-booking-step={stepNumber} className="w-full">
      <div className="mb-8">
        <h2
          ref={headingRef}
          tabIndex={-1}
          className="font-[var(--font-display)] text-3xl tracking-[-0.03em] outline-none md:text-4xl"
        >
          {title}
        </h2>

        {description && (
          <p className="mt-2 text-base text-[var(--foreground-muted)]">
            {description}
          </p>
        )}
      </div>

      {children}
    </section>
  );
}
