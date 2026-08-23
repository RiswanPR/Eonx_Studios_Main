"use client";

import type { ExperienceQuality } from "@/experience/types/quality";
import { OrbitalGroup } from "@/experience/orbital/OrbitalGroup";
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
      <OrbitalGroup quality={quality} />
      <OrbitalParticles quality={quality} />
    </>
  );
}
