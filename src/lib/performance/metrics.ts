export interface PerformanceMetric {
  name: string;
  value: number;
}

export function reportPerformanceMetric(metric: PerformanceMetric) {
  if (process.env.NODE_ENV === "development") {
    console.debug("[EONX PERFORMANCE]", metric);
  }
}
