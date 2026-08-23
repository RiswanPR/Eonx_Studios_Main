const ANONYMOUS_ID_KEY = "eonx_anon_id";

export function getAnonymousId(): string {
  if (typeof window === "undefined") {
    return "";
  }

  try {
    let id = localStorage.getItem(ANONYMOUS_ID_KEY);
    if (!id) {
      id = crypto.randomUUID();
      localStorage.setItem(ANONYMOUS_ID_KEY, id);
    }
    return id;
  } catch {
    return "";
  }
}
