import type { AnalyticsEventPayload, AnalyticsProvider } from "./provider";

let provider: AnalyticsProvider | null = null;

export function configureAnalytics(analyticsProvider: AnalyticsProvider) {
  provider = analyticsProvider;
}

export function track(
  event: string,
  properties?: Record<
    string,
    string | number | boolean | null | undefined
  >,
) {
  const payload: AnalyticsEventPayload = {
    event,
    properties,
    timestamp: new Date().toISOString(),
  };

  // Broadcast to dev event inspector
  if (
    typeof window !== "undefined" &&
    process.env.NODE_ENV === "development"
  ) {
    try {
      window.dispatchEvent(
        new CustomEvent("eonx:analytics", {
          detail: payload,
        }),
      );
    } catch {
      // Ignore broadcast errors
    }
  }

  if (!provider) {
    return;
  }

  try {
    const result = provider.track(payload);
    if (result && typeof (result as Promise<void>).then === "function") {
      (result as Promise<void>).catch(() => {
        // Silent isolation
      });
    }
  } catch {
    // Analytics failure must never affect UX
  }
}

export function trackPage(path: string) {
  // Broadcast to dev event inspector
  if (
    typeof window !== "undefined" &&
    process.env.NODE_ENV === "development"
  ) {
    try {
      window.dispatchEvent(
        new CustomEvent("eonx:analytics", {
          detail: {
            event: "page_view",
            properties: { path },
            timestamp: new Date().toISOString(),
          },
        }),
      );
    } catch {
      // Ignore broadcast errors
    }
  }

  if (!provider) {
    return;
  }

  try {
    const result = provider.page(path);
    if (result && typeof (result as Promise<void>).then === "function") {
      (result as Promise<void>).catch(() => {
        // Silent isolation
      });
    }
  } catch {
    // Analytics failure must never affect UX
  }
}
