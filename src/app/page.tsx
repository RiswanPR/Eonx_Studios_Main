import { HomeAbout } from "@/components/sections/home/HomeAbout";
import { HomeDifference } from "@/components/sections/home/HomeDifference";
import { HomeFinalCTA } from "@/components/sections/home/HomeFinalCTA";
import { HomeHero } from "@/components/sections/home/HomeHero";
import { HomeIntro } from "@/components/sections/home/HomeIntro";
import { HomeProcess } from "@/components/sections/home/HomeProcess";
import { HomeServices } from "@/components/sections/home/HomeServices";
import { HomeSocialProof } from "@/components/sections/home/HomeSocialProof";
import { HomeWork } from "@/components/sections/home/HomeWork";

export default function HomePage() {
  return (
    <main>
      <HomeHero />
      <HomeIntro />
      <HomeServices />
      <HomeWork />
      <HomeDifference />
      <HomeProcess />
      <HomeAbout />
      <HomeSocialProof />
      <HomeFinalCTA />
    </main>
  );
}