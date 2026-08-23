import * as THREE from "three";

export const EONX_PALETTE = {
  black: "#040607",
  ultrasonicBlue: "#4928C2",
  velvetPurple: "#20124D",
  hyperMagenta: "#BF40FA",
  periwinkle: "#A4B4F5",
  offWhite: "#E3D9FC",
} as const;

export function createRingMaterial(color: string, opacity: number): THREE.LineBasicMaterial {
  return new THREE.LineBasicMaterial({
    color,
    transparent: true,
    opacity,
    blending: THREE.AdditiveBlending,
    depthWrite: false,
  });
}

export function createNodeMaterial(color: string): THREE.MeshStandardMaterial {
  return new THREE.MeshStandardMaterial({
    color,
    emissive: color,
    emissiveIntensity: 0.6,
    roughness: 0.3,
    metalness: 0.5,
  });
}

export function createParticleMaterial(): THREE.PointsMaterial {
  return new THREE.PointsMaterial({
    color: EONX_PALETTE.periwinkle,
    size: 0.035,
    transparent: true,
    opacity: 0.45,
    blending: THREE.AdditiveBlending,
    depthWrite: false,
  });
}
