export interface AnalyticsEventPayload {
  event: string;

  properties?: Record<
    string,
    string | number | boolean | null | undefined
  >;

  timestamp?: string;
}

export interface AnalyticsProvider {
  track(payload: AnalyticsEventPayload): void | Promise<void>;

  page(path: string): void | Promise<void>;
}
