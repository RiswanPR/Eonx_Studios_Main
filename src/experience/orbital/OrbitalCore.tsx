"use client";

import { useFrame } from "@react-three/fiber";
import { useRef } from "react";
import * as THREE from "three";

interface OrbitalCoreProps {
  color?: string;
}

export function OrbitalCore({
  color = "#E3D9FC",
}: OrbitalCoreProps) {
  const ref = useRef<THREE.Mesh>(null);

  useFrame((_, delta) => {
    if (!ref.current) {
      return;
    }

    ref.current.rotation.y += delta * 0.2;
    ref.current.rotation.x += delta * 0.1;
  });

  return (
    <mesh ref={ref}>
      <sphereGeometry args={[0.35, 32, 32]} />
      <meshStandardMaterial
        color={color}
        metalness={0.45}
        roughness={0.2}
      />
    </mesh>
  );
}
