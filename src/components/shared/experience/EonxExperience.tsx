"use client";

import dynamic from "next/dynamic";
import { EonxStaticOrbital } from "@/components/shared/experience/EonxStaticOrbital";
import { useExperience } from "@/experience/ExperienceProvider";

const EonxCanvas = dynamic(
  () => import("@/experience/scene/EonxCanvas").then((module) => module.EonxCanvas),
  {
    ssr: false,
    loading: () => null,
  },
);

export function EonxExperience() {
  const { quality, webGLAvailable } = useExperience();

  const show3D = webGLAvailable && quality !== "static";

  return (
    <div className="relative aspect-square w-full">
      <div
        aria-hidden="true"
        className="absolute inset-[-10%] rounded-full bg-[radial-gradient(circle,rgba(73,40,194,0.16),transparent_60%)] blur-3xl"
      />

      <div aria-hidden="true" className="absolute inset-0">
        {show3D ? (
          <EonxCanvas />
        ) : (
          <div className="flex h-full items-center justify-center">
            <EonxStaticOrbital />
          </div>
        )}
      </div>
    </div>
  );
}
