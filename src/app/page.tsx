import { HomeHero } from "@/components/sections/home/HomeHero";
import { HomeIntro } from "@/components/sections/home/HomeIntro";
import { HomeServices } from "@/components/sections/home/HomeServices";
import { HomeWork } from "@/components/sections/home/HomeWork";
import { HomeDifference } from "@/components/sections/home/HomeDifference";
import { HomeProcess } from "@/components/sections/home/HomeProcess";
import { HomeAbout } from "@/components/sections/home/HomeAbout";
import { HomeSocialProof } from "@/components/sections/home/HomeSocialProof";
import { HomeFinalCTA } from "@/components/sections/home/HomeFinalCTA";
import { SimpleFooter } from "@/components/shared/SimpleFooter";

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
      <SimpleFooter />
    </main>
  );
}