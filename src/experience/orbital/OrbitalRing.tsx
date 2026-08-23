"use client";

import { useFrame } from "@react-three/fiber";
import { useMemo, useRef, useEffect } from "react";
import * as THREE from "three";

interface OrbitalRingProps {
  radius?: number;
  color?: string;
  speed?: number;
  tilt?: number;
  segments?: number;
}

export function OrbitalRing({
  radius = 1.6,
  color = "#4928C2",
  speed = 0.12,
  tilt = 0,
  segments = 128,
}: OrbitalRingProps) {
  const ref = useRef<THREE.LineLoop>(null);

  const geometry = useMemo(() => {
    const points = Array.from({ length: segments }, (_, index) => {
      const theta = (index / segments) * Math.PI * 2;

      return new THREE.Vector3(
        Math.cos(theta) * radius,
        Math.sin(theta) * radius * 0.32,
        0,
      );
    });

    return new THREE.BufferGeometry().setFromPoints(points);
  }, [radius, segments]);

  useEffect(() => {
    return () => {
      geometry.dispose();
    };
  }, [geometry]);

  useFrame((_, delta) => {
    if (!ref.current) {
      return;
    }

    ref.current.rotation.z += delta * speed;
  });

  return (
    <lineLoop ref={ref} rotation={[0, 0, tilt]} geometry={geometry}>
      <lineBasicMaterial color={color} transparent opacity={0.6} />
    </lineLoop>
  );
}
