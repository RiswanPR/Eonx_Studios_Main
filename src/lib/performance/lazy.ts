export function observeElementIntersection(
  element: HTMLElement,
  callback: (isIntersecting: boolean) => void,
  options: IntersectionObserverInit = { rootMargin: "200px" },
): () => void {
  if (typeof window === "undefined" || !("IntersectionObserver" in window)) {
    callback(true);
    return () => {};
  }

  const observer = new IntersectionObserver(([entry]) => {
    if (entry) {
      callback(entry.isIntersecting);
    }
  }, options);

  observer.observe(element);
  return () => observer.disconnect();
}
