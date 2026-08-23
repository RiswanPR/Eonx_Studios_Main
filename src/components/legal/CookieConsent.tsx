"use client";

import { useSyncExternalStore } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/Button";

const COOKIE_CONSENT_KEY = "eonx_cookie_consent";

function subscribe(callback: () => void) {
  window.addEventListener("storage", callback);
  return () => window.removeEventListener("storage", callback);
}

function getSnapshot() {
  try {
    return localStorage.getItem(COOKIE_CONSENT_KEY) ?? "";
  } catch {
    return "error";
  }
}

function getServerSnapshot() {
  return "loading";
}

export function CookieConsent() {
  const consent = useSyncExternalStore(
    subscribe,
    getSnapshot,
    getServerSnapshot,
  );

  // If already consented/declined or running on server, do not display
  if (consent !== "") {
    return null;
  }

  const handleAccept = () => {
    try {
      localStorage.setItem(COOKIE_CONSENT_KEY, "accepted");
      window.dispatchEvent(new Event("storage"));
    } catch {
      // Storage unavailable
    }
  };

  const handleDecline = () => {
    try {
      localStorage.setItem(COOKIE_CONSENT_KEY, "declined");
      window.dispatchEvent(new Event("storage"));
    } catch {
      // Storage unavailable
    }
  };

  return (
    <div
      role="region"
      aria-label="Cookie consent banner"
      className="fixed bottom-6 right-6 z-50 max-w-md rounded-[var(--radius-xl)] border border-[var(--color-border-default)] bg-[var(--color-surface-01)] p-6 shadow-2xl backdrop-blur-md"
    >
      <h3 className="font-[var(--font-display)] text-lg tracking-[-0.02em] text-white">
        Cookie Preferences
      </h3>

      <p className="mt-2 text-xs leading-5 text-[var(--foreground-muted)]">
        We use essential storage to enhance navigation and remember preferences.
        See our{" "}
        <Link href="/cookies" className="text-[var(--color-periwinkle)] underline">
          Cookie Policy
        </Link>{" "}
        for details.
      </p>

      <div className="mt-4 flex items-center justify-end gap-3">
        <Button
          type="button"
          size="sm"
          variant="secondary"
          onClick={handleDecline}
        >
          Decline Optional
        </Button>

        <Button type="button" size="sm" onClick={handleAccept}>
          Accept
        </Button>
      </div>
    </div>
  );
}
