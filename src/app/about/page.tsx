import type { Metadata } from "next";
import { AboutHero } from "@/components/sections/about/AboutHero";
import { AboutIntro } from "@/components/sections/about/AboutIntro";
import { AboutStory } from "@/components/sections/about/AboutStory";
import { AboutPhilosophy } from "@/components/sections/about/AboutPhilosophy";
import { AboutValues } from "@/components/sections/about/AboutValues";
import { AboutProcess } from "@/components/sections/about/AboutProcess";
import { AboutTeam } from "@/components/sections/about/AboutTeam";
import { AboutCulture } from "@/components/sections/about/AboutCulture";
import { AboutCapabilities } from "@/components/sections/about/AboutCapabilities";
import { AboutEvolution } from "@/components/sections/about/AboutEvolution";
import { AboutCTA } from "@/components/sections/about/AboutCTA";
import { SimpleFooter } from "@/components/shared/SimpleFooter";

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
      <SimpleFooter />
    </main>
  );
}
