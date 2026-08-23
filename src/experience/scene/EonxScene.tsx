"use client";

import type { ExperienceQuality } from "@/experience/types/quality";
import { EonxOrbital } from "@/experience/orbital/EonxOrbital";
import { EonxLights } from "@/experience/scene/EonxLights";
import { EonxAtmosphere } from "@/experience/atmosphere/EonxAtmosphere";
import { OrbitalParticles } from "@/experience/atmosphere/OrbitalParticles";
import { CameraRig } from "@/experience/scene/CameraRig";

interface EonxSceneProps {
  quality: ExperienceQuality;
}

export function EonxScene({ quality }: EonxSceneProps) {
  return (
    <>
      <EonxAtmosphere />
      <EonxLights />
      <CameraRig />
      <EonxOrbital quality={quality} />
      <OrbitalParticles quality={quality} />
    </>
  );
}
