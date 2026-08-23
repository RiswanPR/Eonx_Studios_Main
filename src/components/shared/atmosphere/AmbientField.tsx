"use client";

import { useEffect, useRef } from "react";
import { useAtmosphereIntensity } from "@/lib/atmosphere/useAtmosphereIntensity";

export function AmbientField() {
  const ref = useRef<HTMLDivElement>(null);
  const intensity = useAtmosphereIntensity();

  useEffect(() => {
    const element = ref.current;
    if (!element) {
      return;
    }

    let frame = 0;

    const animate = () => {
      const time = performance.now() * 0.00008;
      const x = Math.sin(time) * 8 + 72;
      const y = Math.cos(time * 0.8) * 6 + 38;

      element.style.background = `
        radial-gradient(
          circle at ${x}% ${y}%,
          rgba(
            73,
            40,
            194,
            ${0.2 * intensity.ambientOpacity}
          ),
          transparent 34%
        ),
        radial-gradient(
          circle at 18% 72%,
          rgba(
            91,
            42,
            98,
            ${0.13 * intensity.ambientOpacity}
          ),
          transparent 32%
        ),
        radial-gradient(
          circle at 82% 82%,
          rgba(
            191,
            64,
            250,
            ${0.06 * intensity.ambientOpacity}
          ),
          transparent 28%
        )
      `;

      frame = requestAnimationFrame(animate);
    };

    frame = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(frame);
  }, [intensity.ambientOpacity]);

  return (
    <div
      ref={ref}
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 z-[var(--z-base)]"
    />
  );
}
