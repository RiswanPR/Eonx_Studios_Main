export type LightQuality = "high" | "standard" | "reduced" | "static";

export const lightConfig = {
  high: {
    intensity: 1,
    speed: 1,
    glow: 1,
    density: 1,
  },

  standard: {
    intensity: 0.75,
    speed: 0.85,
    glow: 0.7,
    density: 0.7,
  },

  reduced: {
    intensity: 0.42,
    speed: 0,
    glow: 0.35,
    density: 0.35,
  },

  static: {
    intensity: 0.25,
    speed: 0,
    glow: 0.2,
    density: 0.15,
  },
} as const;
