import type { ExperienceQuality } from "@/experience/types/quality";

export interface QualityConfig {
  pixelRatio: [number, number];
  particles: number;
  enableBloom: boolean;
  enableDistortion: boolean;
  enableShadows: boolean;
  orbitalSegments: number;
}

export const QUALITY_CONFIG: Record<
  ExperienceQuality,
  QualityConfig
> = {
  ultra: {
    pixelRatio: [1, 2],
    particles: 120,
    enableBloom: true,
    enableDistortion: true,
    enableShadows: true,
    orbitalSegments: 256,
  },

  high: {
    pixelRatio: [1, 1.75],
    particles: 80,
    enableBloom: true,
    enableDistortion: true,
    enableShadows: true,
    orbitalSegments: 192,
  },

  standard: {
    pixelRatio: [1, 1.5],
    particles: 40,
    enableBloom: false,
    enableDistortion: true,
    enableShadows: false,
    orbitalSegments: 128,
  },

  reduced: {
    pixelRatio: [1, 1.25],
    particles: 12,
    enableBloom: false,
    enableDistortion: false,
    enableShadows: false,
    orbitalSegments: 64,
  },

  static: {
    pixelRatio: [1, 1],
    particles: 0,
    enableBloom: false,
    enableDistortion: false,
    enableShadows: false,
    orbitalSegments: 32,
  },
};
