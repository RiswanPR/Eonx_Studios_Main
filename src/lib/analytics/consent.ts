export type AnalyticsConsent = "unknown" | "granted" | "denied";

const COOKIE_CONSENT_KEY = "eonx_cookie_consent";

export function getAnalyticsConsent(): AnalyticsConsent {
  if (typeof window === "undefined") {
    return "unknown";
  }

  try {
    const value = localStorage.getItem(COOKIE_CONSENT_KEY);
    if (value === "accepted") {
      return "granted";
    }
    if (value === "declined") {
      return "denied";
    }
    return "unknown";
  } catch {
    return "unknown";
  }
}

export function setAnalyticsConsent(value: "granted" | "denied"): void {
  if (typeof window === "undefined") {
    return;
  }

  try {
    localStorage.setItem(
      COOKIE_CONSENT_KEY,
      value === "granted" ? "accepted" : "declined",
    );
    window.dispatchEvent(new Event("storage"));
  } catch {
    // Storage failure must not break the site
  }
}
