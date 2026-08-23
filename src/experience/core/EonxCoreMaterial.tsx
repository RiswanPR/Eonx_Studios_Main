import { useMemo } from "react";
import * as THREE from "three";
import { EONX_PALETTE } from "@/experience/materials/eonxMaterials";

export function useEonxCoreMaterial() {
  return useMemo(() => {
    return new THREE.MeshPhysicalMaterial({
      color: new THREE.Color(EONX_PALETTE.offWhite),
      emissive: new THREE.Color(EONX_PALETTE.ultrasonicBlue),
      emissiveIntensity: 0.18,
      metalness: 0.55,
      roughness: 0.2,
      clearcoat: 0.9,
      clearcoatRoughness: 0.14,
      reflectivity: 0.8,
    });
  }, []);
}
