export const analyticsEvents = {
  pageView: "page_view",

  navigationClick: "navigation_click",

  ctaClick: "cta_click",

  serviceView: "service_view",

  serviceClick: "service_click",

  projectView: "project_view",

  projectClick: "project_click",

  formStart: "form_start",

  formStepComplete: "form_step_complete",

  formError: "form_error",

  formSubmit: "form_submit",

  leadCreated: "lead_created",

  schedulerOpen: "scheduler_open",

  bookingComplete: "booking_complete",
} as const;

export type AnalyticsEvent =
  (typeof analyticsEvents)[keyof typeof analyticsEvents];
