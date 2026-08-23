import { prefersReducedMotion } from "./reducedMotion";

export function getSafeDuration(duration: number): number {
  return prefersReducedMotion() ? 0.001 : duration;
}

export function clamp(value: number, min: number, max: number): number {
  return Math.min(Math.max(value, min), max);
}
