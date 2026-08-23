export const motionConfig = {
  duration: {
    fast: 0.2,
    standard: 0.35,
    smooth: 0.7,
    cinematic: 1.1,
  },

  ease: {
    eonx: "power4.out",
    eonxIn: "power2.in",
    eonxInOut: "power3.inOut",
    cinematic: "power4.inOut",
  },

  reveal: {
    y: 32,
    blur: 8,
  },

  magnetic: {
    strength: 0.18,
    maxDistance: 80,
  },
} as const;
