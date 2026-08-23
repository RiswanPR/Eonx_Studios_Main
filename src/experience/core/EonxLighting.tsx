"use client";

import { EONX_PALETTE } from "@/experience/materials/eonxMaterials";

export function EonxLighting() {
  return (
    <group name="eonx-lighting">
      {/* Soft Ambient Light */}
      <ambientLight intensity={0.45} color="#ffffff" />

      {/* Primary Cool Key Light */}
      <directionalLight
        position={[4, 5, 4]}
        intensity={1.2}
        color={EONX_PALETTE.offWhite}
      />

      {/* Ultrasonic Blue Fill Light */}
      <pointLight
        position={[-5, -2, -3]}
        intensity={2.0}
        color={EONX_PALETTE.ultrasonicBlue}
        distance={18}
      />

      {/* Hyper Magenta Rim / Accent Light */}
      <pointLight
        position={[0, -4, -4]}
        intensity={1.5}
        color={EONX_PALETTE.hyperMagenta}
        distance={15}
      />
    </group>
  );
}
