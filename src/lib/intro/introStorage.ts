const INTRO_STORAGE_KEY = "eonx-intro-seen";

export function markIntroSeen() {
  if (typeof window === "undefined") {
    return;
  }

  try {
    sessionStorage.setItem(INTRO_STORAGE_KEY, "true");
  } catch {
    // Intro storage failure must never break the website.
  }
}

export function hasSeenIntro() {
  if (typeof window === "undefined") {
    return false;
  }

  try {
    return sessionStorage.getItem(INTRO_STORAGE_KEY) === "true";
  } catch {
    return false;
  }
}

export function resetIntroSeen() {
  if (typeof window === "undefined") {
    return;
  }

  try {
    sessionStorage.removeItem(INTRO_STORAGE_KEY);
  } catch {
    // Ignore error
  }
}
