"use client";

import { useEffect, useState } from "react";
import type { AnalyticsEventPayload } from "@/lib/analytics/provider";

interface AnalyticsDebugProps {
  enabled?: boolean;
}

export function AnalyticsDebug({
  enabled = process.env.NODE_ENV === "development",
}: AnalyticsDebugProps) {
  const [events, setEvents] = useState<AnalyticsEventPayload[]>([]);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (!enabled || typeof window === "undefined") {
      return;
    }

    const handler = (e: Event) => {
      const customEvent = e as CustomEvent<AnalyticsEventPayload>;
      if (customEvent.detail) {
        setEvents((prev) => [customEvent.detail, ...prev].slice(0, 15));
      }
    };

    window.addEventListener("eonx:analytics", handler);
    return () => window.removeEventListener("eonx:analytics", handler);
  }, [enabled]);

  // Never render in production
  if (!enabled || process.env.NODE_ENV === "production") {
    return null;
  }

  return (
    <div className="fixed bottom-4 left-4 z-50 font-mono text-xs">
      <button
        type="button"
        onClick={() => setIsOpen((prev) => !prev)}
        className="rounded bg-[var(--color-surface-01)] px-3 py-1.5 text-xs text-[var(--color-periwinkle)] border border-[var(--color-border-default)] shadow-lg hover:border-[var(--color-periwinkle)]"
      >
        ANALYTICS DEBUG ({events.length})
      </button>

      {isOpen && (
        <div className="mt-2 max-h-80 w-80 overflow-y-auto rounded-lg border border-[var(--color-border-default)] bg-[var(--color-eonx-black)] p-4 shadow-2xl backdrop-blur-md">
          <div className="flex items-center justify-between border-b border-[var(--color-border-subtle)] pb-2">
            <span className="font-semibold text-white">Recent Events</span>
            <button
              type="button"
              onClick={() => setEvents([])}
              className="text-[10px] text-[var(--foreground-muted)] hover:text-white"
            >
              Clear
            </button>
          </div>

          <div className="mt-3 space-y-2">
            {events.length === 0 ? (
              <p className="text-[10px] text-[var(--foreground-muted)]">
                No events recorded yet.
              </p>
            ) : (
              events.map((evt, idx) => (
                <div
                  key={`${evt.event}-${idx}`}
                  className="rounded border border-[var(--color-border-subtle)] bg-[var(--color-surface-01)] p-2 text-[10px]"
                >
                  <div className="font-semibold text-[var(--color-periwinkle)]">
                    {evt.event}
                  </div>
                  {evt.properties && Object.keys(evt.properties).length > 0 && (
                    <pre className="mt-1 overflow-x-auto text-[var(--foreground-muted)]">
                      {JSON.stringify(evt.properties, null, 1)}
                    </pre>
                  )}
                </div>
              ))
            )}
          </div>
        </div>
      )}
    </div>
  );
}
