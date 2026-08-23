import { ScrollTrigger } from "gsap/ScrollTrigger";
import { gsap } from "@/lib/motion/gsap";
import { prefersReducedMotion } from "@/lib/motion/reducedMotion";

let registered = false;

export function registerScrollTrigger() {
  if (registered || typeof window === "undefined") {
    return;
  }

  gsap.registerPlugin(ScrollTrigger);
  registered = true;
}

export function createScrollReveal(element: Element) {
  registerScrollTrigger();

  if (prefersReducedMotion()) {
    return () => undefined;
  }

  const animation = gsap.fromTo(
    element,
    {
      opacity: 0,
      y: 40,
    },
    {
      opacity: 1,
      y: 0,
      duration: 0.7,
      ease: "power4.out",
      scrollTrigger: {
        trigger: element,
        start: "top 85%",
        once: true,
      },
    },
  );

  return () => {
    animation.scrollTrigger?.kill();
    animation.kill();
  };
}
