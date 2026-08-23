import type { AnalyticsEventPayload, AnalyticsProvider } from "../provider";

export const productionAnalyticsProvider: AnalyticsProvider = {
  track(_payload: AnalyticsEventPayload) {
    // Adapter placeholder for approved production analytics vendor
  },

  page(_path: string) {
    // Adapter placeholder for approved production analytics vendor
  },
};
