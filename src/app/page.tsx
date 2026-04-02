import { Hero } from "@/components/Hero";
import { Capabilities } from "@/components/Capabilities";
import { WorkCarousel } from "@/components/WorkCarousel";
import { CallToAction } from "@/components/CallToAction";

export default function HomePage() {
  return (
    <>
      <Hero />
      <Capabilities />
      <WorkCarousel />
      <CallToAction />
    </>
  );
}
