export function getDeviceTier(): "high" | "standard" | "low" {
  if (typeof window === "undefined") {
    return "standard";
  }

  const cores = navigator.hardwareConcurrency ?? 4;
  const memory =
    (navigator as Navigator & { deviceMemory?: number }).deviceMemory ?? 4;

  if (cores >= 8 && memory >= 8 && window.innerWidth >= 1280) {
    return "high";
  }

  if (cores >= 4 && memory >= 4) {
    return "standard";
  }

  return "low";
}
