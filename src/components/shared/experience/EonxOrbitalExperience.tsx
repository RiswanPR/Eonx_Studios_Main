"use client";

import dynamic from "next/dynamic";
import { EonxStaticOrbital } from "@/components/shared/experience/EonxStaticOrbital";
import { useExperience } from "@/experience/ExperienceProvider";
import type { OrbitalQuality } from "@/experience/orbital/orbitalQuality";

const EonxOrbital = dynamic(
  () =>
    import("@/experience/orbital/EonxOrbital").then(
      (module) => module.EonxOrbital,
    ),
  {
    ssr: false,
    loading: () => null,
  },
);

interface EonxOrbitalExperienceProps {
  forcedQuality?: OrbitalQuality;
}

export function EonxOrbitalExperience({ forcedQuality }: EonxOrbitalExperienceProps) {
  const { quality: systemQuality, webGLAvailable } = useExperience();

  const quality = forcedQuality ?? (systemQuality as OrbitalQuality);
  const show3D = webGLAvailable && quality !== "static";

  return (
    <div className="relative aspect-square w-full max-w-[560px]">
      {/* Background Radial Glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-[-15%] rounded-full bg-[radial-gradient(circle,rgba(73,40,194,0.18),transparent_65%)] blur-3xl"
      />

      <div aria-hidden="true" className="absolute inset-0">
        {show3D ? (
          <EonxOrbital quality={quality} />
        ) : (
          <div className="flex h-full items-center justify-center">
            <EonxStaticOrbital />
          </div>
        )}
      </div>
    </div>
  );
}
