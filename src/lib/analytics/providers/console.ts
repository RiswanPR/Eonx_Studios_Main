import type { AnalyticsEventPayload, AnalyticsProvider } from "../provider";

export const consoleAnalyticsProvider: AnalyticsProvider = {
  track(payload: AnalyticsEventPayload) {
    if (process.env.NODE_ENV === "development") {
      console.debug("[EONX ANALYTICS]", payload);
    }
  },

  page(path: string) {
    if (process.env.NODE_ENV === "development") {
      console.debug("[EONX ANALYTICS] page", path);
    }
  },
};
