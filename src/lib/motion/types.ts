export type MotionDirection =
  | "up"
  | "down"
  | "left"
  | "right";

export type MotionIntensity =
  | "subtle"
  | "normal"
  | "strong";

export interface MotionOptions {
  duration?: number;
  delay?: number;
  ease?: string;
}
