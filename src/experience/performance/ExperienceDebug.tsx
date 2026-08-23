"use client";

import { useExperience } from "@/experience/ExperienceProvider";

export function ExperienceDebug() {
  const { quality, webGLAvailable } = useExperience();

  if (process.env.NODE_ENV !== "development") {
    return null;
  }

  return (
    <div className="fixed bottom-4 left-4 z-[100] rounded-md border border-white/10 bg-black/80 px-3 py-2 font-mono text-[10px] text-white">
      <div>quality: {quality}</div>
      <div>webgl: {webGLAvailable ? "yes" : "no"}</div>
    </div>
  );
}
