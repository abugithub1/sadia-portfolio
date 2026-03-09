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
    default: "Sadia Karim — Graphic Designer",
    template: "%s | Sadia Karim",
  },
  description:
    "Portfolio of Sadia Karim — Graphic Designer based in Bangladesh with 10+ years of experience in publication design, branding, editorial, and documentary photography for the social sector.",
  keywords: [
    "graphic designer",
    "Bangladesh",
    "publication design",
    "branding",
    "editorial design",
    "documentary photography",
    "NGO design",
    "social sector",
  ],
  authors: [{ name: "Sadia Karim" }],
  openGraph: {
    title: "Sadia Karim — Graphic Designer",
    description:
      "10+ years crafting visual narratives for social impact. Publication design, branding, editorial, and documentary photography.",
    type: "website",
    locale: "en_US",
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
