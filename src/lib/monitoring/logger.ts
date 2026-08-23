export function logError(
  error: unknown,
  context?: Record<string, unknown>,
) {
  // Strip any accidental PII fields from context
  const safeContext: Record<string, unknown> = {};
  if (context) {
    for (const [key, value] of Object.entries(context)) {
      if (
        ![
          "name",
          "email",
          "phone",
          "projectGoal",
          "additionalInformation",
          "budget",
          "company",
        ].includes(key)
      ) {
        safeContext[key] = value;
      }
    }
  }

  if (process.env.NODE_ENV === "development") {
    console.error("[EONX ERROR]", error, safeContext);
  }

  /*
   * Production:
   * Route sanitized error events to approved monitoring service (e.g. Sentry / Datadog).
   */
}
