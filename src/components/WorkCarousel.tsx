"use client";

import { useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ScrollReveal } from "./ScrollReveal";
import { getFeaturedItems, type WorkItem } from "@/data/work";

function CarouselCard({ item }: { item: WorkItem }) {
  if (item.type === "image") {
    const thumb = item.src
      .replace("/photography/", "/photography-thumbs/")
      .replace(/\.jpg$/i, ".webp");
    return (
      <Link href="/work" className="group block flex-none w-72 md:w-80">
        <div className="relative h-52 md:h-60 overflow-hidden bg-surface">
          <Image
            src={thumb}
            alt={item.title}
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-105"
            sizes="320px"
          />
          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-500" />
        </div>
        <div className="mt-3">
          <p className="text-xs text-accent uppercase tracking-wider">Photography</p>
          <p className="font-serif text-heading text-sm mt-1">{item.title}</p>
        </div>
      </Link>
    );
  }

  if (item.type === "video") {
    const isAnimation = item.subcategory === "animations";
    const label = isAnimation ? "Animation" : "Film";
    return (
      <Link href="/work" className="group block flex-none w-72 md:w-80">
        <div className="relative h-52 md:h-60 overflow-hidden bg-heading flex items-center justify-center">
          <div className="text-center">
            <svg
              className="w-12 h-12 text-white/40 mx-auto mb-2 group-hover:text-accent/60 transition-colors duration-300"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M8 5v14l11-7z" />
            </svg>
            <p className="text-white/40 text-xs uppercase tracking-wider group-hover:text-white/60 transition-colors">{item.title}</p>
          </div>
        </div>
        <div className="mt-3">
          <p className="text-xs text-accent uppercase tracking-wider">{label}</p>
          <p className="font-serif text-heading text-sm mt-1">{item.title}</p>
        </div>
      </Link>
    );
  }

  // PDF
  const subcategoryDisplay: Record<string, string> = {
    'planning-strategy': 'Planning & Strategy',
    'knowledge-resources': 'Knowledge Resources',
    'graphic-design': 'Graphic Design',
  };
  const label = subcategoryDisplay[item.subcategory] ?? 'Publication';

  return (
    <a
      href={item.src}
      target="_blank"
      rel="noopener noreferrer"
      className="group block flex-none w-72 md:w-80"
    >
      <div className="relative h-52 md:h-60 overflow-hidden bg-surface border border-border flex flex-col items-center justify-center gap-4 group-hover:border-accent/30 transition-colors duration-300">
        <svg
          className="w-10 h-10 text-accent/50 group-hover:text-accent transition-colors duration-300"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
          />
        </svg>
        <p className="text-muted text-xs uppercase tracking-widest px-4 text-center group-hover:text-heading transition-colors">
          {item.title}
        </p>
        <span className="text-xs text-accent/60 group-hover:text-accent transition-colors">
          View PDF →
        </span>
      </div>
      <div className="mt-3">
        <p className="text-xs text-accent uppercase tracking-wider">{label}</p>
        <p className="font-serif text-heading text-sm mt-1">{item.title}</p>
        {item.client && (
          <p className="text-muted text-xs mt-0.5">{item.client}</p>
        )}
      </div>
    </a>
  );
}

export function WorkCarousel() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const featured = getFeaturedItems();

  return (
    <section className="py-section overflow-hidden">
      <div className="editorial-container mb-10">
        <ScrollReveal>
          <p className="text-accent text-sm uppercase tracking-[0.2em] mb-3">
            My Work
          </p>
        </ScrollReveal>
        <ScrollReveal delay={0.1}>
          <div className="flex items-end justify-between gap-4">
            <h2
              className="font-serif text-heading max-w-xl"
              style={{ fontSize: "var(--text-h2)" }}
            >
              A curated selection of work
            </h2>
            <Link
              href="/work"
              className="hidden sm:inline-flex items-center gap-2 text-accent hover:text-accent-dark text-sm uppercase tracking-[0.15em] transition-colors flex-none"
            >
              View All
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </ScrollReveal>
      </div>

      {/* Scrollable carousel */}
      <ScrollReveal delay={0.2}>
        <div
          ref={scrollRef}
          className="flex gap-6 overflow-x-auto pb-4 pl-[max(1rem,calc((100vw-1400px)/2+1rem))] pr-8 scroll-smooth"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          {featured.map((item, i) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.07 }}
            >
              <CarouselCard item={item} />
            </motion.div>
          ))}
        </div>
      </ScrollReveal>

      <div className="editorial-container mt-6 sm:hidden">
        <Link
          href="/work"
          className="inline-flex items-center gap-2 text-accent text-sm uppercase tracking-[0.15em] transition-colors"
        >
          View All Work
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </Link>
      </div>
    </section>
  );
}
