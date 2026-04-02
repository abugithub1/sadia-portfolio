import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-serif",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Sadia Karim — Brand Strategist & Creative Storyteller",
    template: "%s | Sadia Karim",
  },
  description:
    "Portfolio of Sadia Karim — Brand Strategist and Creative Storyteller based in Walsall, UK. 13+ years shaping brand identities, campaigns, and digital experiences for global development and corporate environments.",
  keywords: [
    "brand strategist",
    "creative storyteller",
    "communication strategy",
    "brand governance",
    "campaign design",
    "documentary photography",
    "publication design",
    "UK",
  ],
  authors: [{ name: "Sadia Karim" }],
  openGraph: {
    title: "Sadia Karim — Brand Strategist & Creative Storyteller",
    description:
      "13+ years shaping brand identities, campaigns, and digital experiences. Human-centred storytelling for organisations that create change.",
    type: "website",
    locale: "en_GB",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${playfair.variable} ${inter.variable}`}>
      <body className="film-grain">
        <Navigation />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
