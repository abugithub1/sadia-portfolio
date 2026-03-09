"use client";

import Link from "next/link";
import { ScrollReveal } from "./ScrollReveal";

export function CallToAction() {
  return (
    <section className="py-section bg-heading">
      <div className="editorial-container text-center">
        <ScrollReveal>
          <h2
            className="font-serif text-cream"
            style={{ fontSize: "var(--text-h1)" }}
          >
            Let&apos;s work together
          </h2>
        </ScrollReveal>
        <ScrollReveal delay={0.15}>
          <p className="mt-4 text-cream/60 max-w-lg mx-auto" style={{ fontSize: "var(--text-body-lg)" }}>
            Looking for a designer who understands the social sector? I&apos;d
            love to hear about your project.
          </p>
        </ScrollReveal>
        <ScrollReveal delay={0.3}>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 mt-8 px-8 py-4 bg-accent text-white text-sm font-medium tracking-wide hover:bg-accent-dark transition-colors duration-300"
          >
            Get in Touch
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </ScrollReveal>
      </div>
    </section>
  );
}
