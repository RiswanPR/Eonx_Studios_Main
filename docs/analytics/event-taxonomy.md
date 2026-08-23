# Eonx Analytics Event Taxonomy

## Overview
This document defines the canonical event taxonomy, trigger semantics, property dictionaries, data privacy standards, and growth question mappings for Eonx Studios.

---

## 1. Event Vocabulary

### Page & Navigation
- **`page_view`**
  - Trigger: Fired upon initial page load and every client-side route transition (`usePathname`).
  - Properties: `path: string`

- **`navigation_click`**
  - Trigger: Fired when primary navigation elements are activated.
  - Properties: `location: string`, `label: string`

### Calls to Action (CTA)
- **`cta_click`**
  - Trigger: Fired when primary business conversion buttons or links are clicked.
  - Properties:
    - `location: string` (`hero` | `navbar` | `services` | `work` | `about` | `footer` | `service-page` | `project-page`)
    - `label: string` (`Book a Call` | `Start a Project` | `View Work`)

### Services
- **`service_view`**
  - Trigger: Fired when a dedicated service detail page (`/services/[slug]`) is viewed.
  - Properties: `service: string` (canonical service slug)

- **`service_click`**
  - Trigger: Fired when a service card or service directory item is clicked.
  - Properties: `service: string`, `location: string`

### Work / Portfolio
- **`project_view`**
  - Trigger: Fired when a case study detail page (`/work/[slug]`) is viewed.
  - Properties: `project: string` (canonical project slug)

- **`project_click`**
  - Trigger: Fired when a project card is clicked.
  - Properties: `project: string`, `location: string`

### Booking Funnel
- **`form_start`**
  - Trigger: Fired on the first meaningful interaction with any booking form input.
  - Properties: `form: "booking"`

- **`form_step_complete`**
  - Trigger: Fired when a multi-step form section passes validation and advances.
  - Properties: `form: "booking"`, `step: number` (1 | 2 | 3 | 4)

- **`form_error`**
  - Trigger: Fired when client-side validation fails or server submission encounters an error.
  - Properties: `form: "booking"`, `step: number`

- **`form_submit`**
  - Trigger: Fired immediately when the user clicks to submit the completed booking form.
  - Properties: `form: "booking"`

- **`lead_created`**
  - Trigger: Fired ONLY after the server confirms successful lead persistence.
  - Properties: `form: "booking"`

- **`scheduler_open`**
  - Trigger: Fired when the post-inquiry calendar scheduler is presented/opened.
  - Properties: `source: "booking"`

- **`booking_complete`**
  - Trigger: Fired when an appointment is confirmed through the integrated scheduler.
  - Properties: `source: "booking"`

---

## 2. Attribution Data Model
Stored in `sessionStorage` (`eonx-attribution`) and transmitted exclusively to the secure lead endpoint (never to behavioral analytics):
- `utmSource`: UTM source parameter (max 200 chars)
- `utmMedium`: UTM medium parameter (max 200 chars)
- `utmCampaign`: UTM campaign parameter (max 200 chars)
- `utmTerm`: UTM keyword term parameter (max 200 chars)
- `utmContent`: UTM ad content parameter (max 200 chars)
- `referrer`: Initial HTTP document referrer (max 2000 chars)
- `landingPage`: First URL loaded in session (max 4000 chars)

---

## 3. Privacy & Data Minimization Guardrails
1. **Zero PII**: No email, telephone number, individual name, company name, project budget, or sensitive message content is EVER transmitted to behavioral analytics providers.
2. **Provider Isolation**: Analytics exceptions are wrapped in `try/catch` and promise error handlers so provider downtime never blocks user interaction, navigation, or lead creation.
3. **Storage Resilience**: If `sessionStorage` or `localStorage` is blocked or throwing errors, attribution and consent fall back silently.
4. **Consent Synchronization**: Single source of truth derived from the global `eonx_cookie_consent` storage key.
