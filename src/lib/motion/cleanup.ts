export type KillableAnimation =
  | {
      kill: () => void;
    }
  | null
  | undefined;

export function killAnimations(
  animation: KillableAnimation,
) {
  animation?.kill();
}
