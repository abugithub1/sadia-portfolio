import type { Metadata } from "next";
import { AboutContent } from "@/components/AboutContent";

export const metadata: Metadata = {
  title: "About",
  description:
    "Sadia Karim is a Graphic Designer based in Bangladesh with 10+ years of experience in publication design, branding, and documentary photography for social impact organizations.",
};

export default function AboutPage() {
  return <AboutContent />;
}
