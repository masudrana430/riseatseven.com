import { ReportBanner } from "@/components/header/RiseHeader";
// import { HomeHero } from "@/components/home/Hero";
import { LogoMarquee } from "@/components/home/LogoMarquee";
import { DemandDiscoverySection } from "@/components/home/DemandDiscoverySection";
import { HomeHero } from "@/components/home/Hero";
import { FeaturedWorkSection } from "@/components/home/FeaturedWorkSection";

export default function Home() {
  return (
    <main className="bg-[#f5f3f0] pt-[1px]">
      <HomeHero />
      <LogoMarquee />
      <DemandDiscoverySection />
      <FeaturedWorkSection />
    </main>
  );
}
