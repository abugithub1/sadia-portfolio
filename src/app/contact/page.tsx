import type { Metadata } from "next";
import { ContactContent } from "@/components/ContactContent";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with Sadia Karim for graphic design, publication design, branding, and photography projects.",
};

export default function ContactPage() {
  return <ContactContent />;
}
