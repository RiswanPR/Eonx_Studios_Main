"use client";

import { EonxCanvas } from "@/experience/scene/EonxCanvas";
import { EonxStaticOrbital } from "@/components/shared/experience/EonxStaticOrbital";
import { useExperience } from "@/experience/ExperienceProvider";

export function EonxExperience() {
  const { quality, webGLAvailable } = useExperience();

  const show3D = webGLAvailable && quality !== "static";

  return (
    <div
      aria-hidden="true"
      className="relative flex min-h-[500px] items-center justify-center overflow-hidden rounded-[var(--radius-xl)]"
    >
      {show3D ? (
        <div className="absolute inset-0">
          <EonxCanvas />
        </div>
      ) : (
        <EonxStaticOrbital />
      )}

      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(73,40,194,0.12),transparent_55%)]" />
    </div>
  );
}
