import type { Metadata } from "next";
import { AboutCTA } from "@/components/sections/about/AboutCTA";
import { AboutCapabilities } from "@/components/sections/about/AboutCapabilities";
import { AboutCulture } from "@/components/sections/about/AboutCulture";
import { AboutEvolution } from "@/components/sections/about/AboutEvolution";
import { AboutHero } from "@/components/sections/about/AboutHero";
import { AboutIntro } from "@/components/sections/about/AboutIntro";
import { AboutPhilosophy } from "@/components/sections/about/AboutPhilosophy";
import { AboutProcess } from "@/components/sections/about/AboutProcess";
import { AboutStory } from "@/components/sections/about/AboutStory";
import { AboutTeam } from "@/components/sections/about/AboutTeam";
import { AboutValues } from "@/components/sections/about/AboutValues";

export const metadata: Metadata = {
  title: "About Eonx — Creative Technology Studio",
  description:
    "Meet Eonx, the creative technology studio combining strategy, design, content and engineering.",
};

export default function AboutPage() {
  return (
    <main>
      <AboutHero />
      <AboutIntro />
      <AboutStory />
      <AboutPhilosophy />
      <AboutValues />
      <AboutProcess />
      <AboutTeam />
      <AboutCulture />
      <AboutCapabilities />
      <AboutEvolution />
      <AboutCTA />
    </main>
  );
}
