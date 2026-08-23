export type OrbitalQuality = "ultra" | "high" | "standard" | "reduced" | "static";

export const orbitalQualityConfig = {
  ultra: {
    ringSegments: 160,
    particleCount: 180,
    nodeCount: 12,
    dpr: 1.5,
    enableGlow: true,
    enableParticles: true,
  },

  high: {
    ringSegments: 160,
    particleCount: 180,
    nodeCount: 12,
    dpr: 1.5,
    enableGlow: true,
    enableParticles: true,
  },

  standard: {
    ringSegments: 96,
    particleCount: 100,
    nodeCount: 8,
    dpr: 1.25,
    enableGlow: true,
    enableParticles: true,
  },

  reduced: {
    ringSegments: 64,
    particleCount: 0,
    nodeCount: 4,
    dpr: 1,
    enableGlow: false,
    enableParticles: false,
  },

  static: {
    ringSegments: 0,
    particleCount: 0,
    nodeCount: 0,
    dpr: 1,
    enableGlow: false,
    enableParticles: false,
  },
} as const;
