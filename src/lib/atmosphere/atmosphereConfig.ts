export const atmosphereConfig = {
  desktop: {
    gridOpacity: 0.035,
    ambientOpacity: 0.8,
    streakOpacity: 0.55,
    noiseOpacity: 0.025,
    vignetteOpacity: 0.7,
  },

  tablet: {
    gridOpacity: 0.028,
    ambientOpacity: 0.65,
    streakOpacity: 0.4,
    noiseOpacity: 0.02,
    vignetteOpacity: 0.65,
  },

  mobile: {
    gridOpacity: 0.018,
    ambientOpacity: 0.5,
    streakOpacity: 0.25,
    noiseOpacity: 0.012,
    vignetteOpacity: 0.6,
  },

  reducedMotion: {
    gridOpacity: 0.02,
    ambientOpacity: 0.4,
    streakOpacity: 0,
    noiseOpacity: 0.01,
    vignetteOpacity: 0.55,
  },
} as const;

export type AtmosphereProfile =
  | "desktop"
  | "tablet"
  | "mobile"
  | "reducedMotion";

export type AtmosphereIntensity = (typeof atmosphereConfig)[AtmosphereProfile];
