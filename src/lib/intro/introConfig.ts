export const introConfig = {
  minDuration: 2400,
  maxDuration: 3200,

  showOncePerSession: true,

  mobileDuration: 1800,

  reducedMotionDuration: 0,

  failsafeDuration: 6000,

  stages: {
    black: 0,
    light: 250,
    orbital: 650,
    logo: 1200,
    atmosphere: 1900,
    reveal: 2500,
    done: 3200,
  },

  mobileStages: {
    black: 0,
    light: 150,
    orbital: 400,
    logo: 800,
    atmosphere: 1200,
    reveal: 1500,
    done: 1800,
  },
} as const;
