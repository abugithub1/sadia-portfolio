"use client";

import Link from "next/link";
import { ScrollReveal } from "./ScrollReveal";
import { PhotoStrip } from "./PhotoStrip";

export function PhotoStripSection() {
  return (
    <section className="py-section bg-surface overflow-hidden">
      <div className="editorial-container mb-10">
        <ScrollReveal>
          <p className="text-accent text-sm uppercase tracking-[0.2em] mb-3">
            Documentary Photography
          </p>
        </ScrollReveal>
        <ScrollReveal delay={0.1}>
          <div className="flex items-end justify-between">
            <h2
              className="font-serif text-heading"
              style={{ fontSize: "var(--text-h2)" }}
            >
              Through the lens
            </h2>
            <Link
              href="/photography"
              className="hidden md:inline-flex items-center gap-2 text-accent hover:text-accent-dark text-sm uppercase tracking-[0.15em] transition-colors"
            >
              View Gallery
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </Link>
          </div>
        </ScrollReveal>
      </div>

      <ScrollReveal direction="none">
        <PhotoStrip />
      </ScrollReveal>

      <div className="editorial-container mt-8 md:hidden">
        <Link
          href="/photography"
          className="inline-flex items-center gap-2 text-accent hover:text-accent-dark text-sm uppercase tracking-[0.15em] transition-colors"
        >
          View Gallery
          <svg
            className="w-4 h-4"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M17 8l4 4m0 0l-4 4m4-4H3"
            />
          </svg>
        </Link>
      </div>
    </section>
  );
}
