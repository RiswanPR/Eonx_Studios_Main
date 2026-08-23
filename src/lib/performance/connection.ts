interface NetworkInformation {
  saveData?: boolean;
  effectiveType?: "slow-2g" | "2g" | "3g" | "4g";
}

export function getSaveData(): boolean {
  if (typeof window === "undefined") {
    return false;
  }
  const connection = (navigator as Navigator & { connection?: NetworkInformation }).connection;
  return Boolean(connection?.saveData);
}

export function getEffectiveConnectionType(): string {
  if (typeof window === "undefined") {
    return "4g";
  }
  const connection = (navigator as Navigator & { connection?: NetworkInformation }).connection;
  return connection?.effectiveType ?? "4g";
}
