"use client";

import { useSyncExternalStore } from "react";
import { getAnalyticsConsent, type AnalyticsConsent } from "@/lib/analytics/consent";

function subscribe(callback: () => void) {
  window.addEventListener("storage", callback);
  return () => window.removeEventListener("storage", callback);
}

function getSnapshot(): AnalyticsConsent {
  return getAnalyticsConsent();
}

function getServerSnapshot(): AnalyticsConsent {
  return "unknown";
}

export function AnalyticsConsentProvider() {
  useSyncExternalStore(
    subscribe,
    getSnapshot,
    getServerSnapshot,
  );

  return null;
}
