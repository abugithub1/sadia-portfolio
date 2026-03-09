import { Hero } from "@/components/Hero";
import { FeaturedWork } from "@/components/FeaturedWork";
import { PhotoStripSection } from "@/components/PhotoStripSection";
import { Capabilities } from "@/components/Capabilities";
import { CallToAction } from "@/components/CallToAction";

export default function HomePage() {
  return (
    <>
      <Hero />
      <FeaturedWork />
      <PhotoStripSection />
      <Capabilities />
      <CallToAction />
    </>
  );
}
