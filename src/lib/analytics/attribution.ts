export interface AttributionData {
  utmSource?: string;
  utmMedium?: string;
  utmCampaign?: string;
  utmTerm?: string;
  utmContent?: string;
  referrer?: string;
  landingPage?: string;
}

const STORAGE_KEY = "eonx-attribution";

export function readAttributionFromUrl(): AttributionData {
  if (typeof window === "undefined") {
    return {};
  }

  try {
    const params = new URLSearchParams(window.location.search);

    const utmSource = params.get("utm_source")?.slice(0, 200) || undefined;
    const utmMedium = params.get("utm_medium")?.slice(0, 200) || undefined;
    const utmCampaign = params.get("utm_campaign")?.slice(0, 200) || undefined;
    const utmTerm = params.get("utm_term")?.slice(0, 200) || undefined;
    const utmContent = params.get("utm_content")?.slice(0, 200) || undefined;

    const data: AttributionData = {};
    if (utmSource) data.utmSource = utmSource;
    if (utmMedium) data.utmMedium = utmMedium;
    if (utmCampaign) data.utmCampaign = utmCampaign;
    if (utmTerm) data.utmTerm = utmTerm;
    if (utmContent) data.utmContent = utmContent;

    return data;
  } catch {
    return {};
  }
}

export function readStoredAttribution(): AttributionData {
  if (typeof window === "undefined") {
    return {};
  }

  try {
    const raw = sessionStorage.getItem(STORAGE_KEY);
    if (!raw) {
      return {};
    }
    return JSON.parse(raw);
  } catch {
    return {};
  }
}

export function captureAttribution(): void {
  if (typeof window === "undefined") {
    return;
  }

  try {
    const existing = readStoredAttribution();
    const current = readAttributionFromUrl();

    const data: AttributionData = {
      ...existing,
      ...current,
      referrer:
        existing.referrer ??
        (document.referrer ? document.referrer.slice(0, 2000) : undefined),
      landingPage:
        existing.landingPage ??
        window.location.href.slice(0, 4000),
    };

    sessionStorage.setItem(STORAGE_KEY, JSON.stringify(data));
  } catch {
    // Storage failure must not break the site
  }
}

// Backward-compatibility export
export function getAttributionParams() {
  const current = readAttributionFromUrl();
  const stored = readStoredAttribution();
  return {
    source: current.utmSource || stored.utmSource || undefined,
    medium: current.utmMedium || stored.utmMedium || undefined,
    campaign: current.utmCampaign || stored.utmCampaign || undefined,
  };
}
