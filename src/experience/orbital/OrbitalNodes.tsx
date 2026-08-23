"use client";

import { useMemo } from "react";
import * as THREE from "three";
import { createNodeMaterial, EONX_PALETTE } from "@/experience/materials/eonxMaterials";
import type { OrbitalQuality } from "./orbitalQuality";
import { orbitalQualityConfig } from "./orbitalQuality";

interface OrbitalNodesProps {
  quality: OrbitalQuality;
}

interface NodeData {
  position: [number, number, number];
  color: string;
  size: number;
}

export function OrbitalNodes({ quality }: OrbitalNodesProps) {
  const config = orbitalQualityConfig[quality];
  const count = config.nodeCount;

  const nodeGeometry = useMemo(() => new THREE.SphereGeometry(1, 12, 12), []);
  const periwinkleMat = useMemo(() => createNodeMaterial(EONX_PALETTE.periwinkle), []);
  const magentaMat = useMemo(() => createNodeMaterial(EONX_PALETTE.hyperMagenta), []);

  const nodes = useMemo<NodeData[]>(() => {
    if (count === 0) return [];
    const list: NodeData[] = [];

    for (let i = 0; i < count; i++) {
      const angle = (i / count) * Math.PI * 2 + (i * 0.4);
      const ringIndex = i % 3;
      const radius = ringIndex === 0 ? 1.5 : ringIndex === 1 ? 1.82 : 2.1;
      const yOffset = Math.sin(angle * 2) * 0.25;

      const x = Math.cos(angle) * radius;
      const z = Math.sin(angle) * (radius * 0.88);

      list.push({
        position: [x, yOffset, z],
        color: i % 2 === 0 ? EONX_PALETTE.periwinkle : EONX_PALETTE.hyperMagenta,
        size: i % 3 === 0 ? 0.045 : 0.03,
      });
    }

    return list;
  }, [count]);

  if (count === 0) return null;

  return (
    <group name="orbital-nodes">
      {nodes.map((node, idx) => (
        <mesh
          key={idx}
          geometry={nodeGeometry}
          material={node.color === EONX_PALETTE.periwinkle ? periwinkleMat : magentaMat}
          position={node.position}
          scale={node.size}
        />
      ))}
    </group>
  );
}
