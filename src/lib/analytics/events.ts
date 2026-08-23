import { track } from "./client";

export function trackCTA(location: string, label: string) {
  track("cta_click", {
    location,
    label,
  });
}

export function trackServiceView(slug: string) {
  track("service_view", {
    service: slug,
  });
}

export function trackServiceClick(slug: string, location: string = "services") {
  track("service_click", {
    service: slug,
    location,
  });
}

export function trackProjectView(slug: string) {
  track("project_view", {
    project: slug,
  });
}

export function trackProjectClick(slug: string, location: string = "work") {
  track("project_click", {
    project: slug,
    location,
  });
}

export function trackFormStart() {
  track("form_start", {
    form: "booking",
  });
}

export function trackFormStep(step: number) {
  track("form_step_complete", {
    form: "booking",
    step,
  });
}

export function trackFormError(step: number) {
  track("form_error", {
    form: "booking",
    step,
  });
}

export function trackFormSubmit() {
  track("form_submit", {
    form: "booking",
  });
}

export function trackLeadCreated() {
  track("lead_created", {
    form: "booking",
  });
}

export function trackSchedulerOpen() {
  track("scheduler_open", {
    source: "booking",
  });
}

export function trackBookingComplete() {
  track("booking_complete", {
    source: "booking",
  });
}
