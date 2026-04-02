"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { ScrollReveal } from "@/components/ScrollReveal";
import { Lightbox } from "@/components/Lightbox";
import {
  workItems,
  type WorkCategory,
  type WorkSubcategory,
  type WorkItem,
  subcategoryLabels,
} from "@/data/work";

const creativeSubcategories: WorkSubcategory[] = [
  "photography",
  "graphic-design",
  "animations",
  "moving-lens",
];

const commsSubcategories: WorkSubcategory[] = [
  "planning-strategy",
  "knowledge-resources",
];

// ─── Card components ──────────────────────────────────────────────────────────

function PdfCard({ item }: { item: WorkItem }) {
  return (
    <motion.a
      href={item.src}
      target="_blank"
      rel="noopener noreferrer"
      className="group block"
      layout
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 8 }}
      transition={{ duration: 0.3 }}
    >
      <div className="relative aspect-[3/4] bg-surface border border-border flex flex-col items-center justify-center gap-4 group-hover:border-accent/40 transition-colors duration-300 overflow-hidden">
        <div className="absolute top-0 left-0 w-1 h-full bg-accent/0 group-hover:bg-accent/30 transition-colors duration-300" />
        <svg
          className="w-10 h-10 text-accent/40 group-hover:text-accent transition-colors duration-300"
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
        <p className="text-muted text-xs uppercase tracking-widest px-6 text-center group-hover:text-heading transition-colors duration-300 leading-relaxed">
          {item.title}
        </p>
        <span className="text-xs text-accent/50 group-hover:text-accent transition-colors duration-300">
          Open PDF →
        </span>
      </div>
      <div className="mt-3 px-1">
        <p className="font-serif text-heading text-sm leading-snug">{item.title}</p>
        {item.client && (
          <p className="text-muted text-xs mt-0.5">{item.client}</p>
        )}
        {item.year && (
          <p className="text-muted text-xs">{item.year}</p>
        )}
      </div>
    </motion.a>
  );
}

function photoThumb(src: string) {
  return src
    .replace("/photography/", "/photography-thumbs/")
    .replace(/\.jpg$/i, ".webp");
}

function PhotoCard({ item, onClick }: { item: WorkItem; onClick: () => void }) {
  return (
    <motion.button
      onClick={onClick}
      className="group block w-full text-left"
      layout
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 8 }}
      transition={{ duration: 0.3 }}
    >
      <div className="relative aspect-[3/2] overflow-hidden bg-surface">
        <Image
          src={photoThumb(item.src)}
          alt={item.title}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-105"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
        />
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-500" />
        <div className="absolute bottom-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <span className="bg-black/60 text-white text-xs px-2 py-1">View</span>
        </div>
      </div>
    </motion.button>
  );
}

function VideoCard({ item }: { item: WorkItem }) {
  const isAnimation = item.subcategory === "animations";
  return (
    <motion.div
      className="group"
      layout
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 8 }}
      transition={{ duration: 0.3 }}
    >
      <div className="relative aspect-video overflow-hidden bg-heading">
        <video
          src={item.src}
          controls
          preload="metadata"
          className="w-full h-full object-contain"
          playsInline
        />
      </div>
      <div className="mt-3 px-1">
        <p className="text-xs text-accent uppercase tracking-wider">
          {isAnimation ? "Animation" : "Film"}
        </p>
        <p className="font-serif text-heading text-sm mt-1">{item.title}</p>
        {item.client && (
          <p className="text-muted text-xs mt-0.5">{item.client}</p>
        )}
      </div>
    </motion.div>
  );
}

// ─── Main page ────────────────────────────────────────────────────────────────

export default function WorkPage() {
  const [activeCategory, setActiveCategory] = useState<WorkCategory>("creative");
  const [activeSubcategory, setActiveSubcategory] = useState<WorkSubcategory>("photography");
  const [lightboxIndex, setLightboxIndex] = useState<number>(-1);
  const isLightboxOpen = lightboxIndex >= 0;

  const subcategories =
    activeCategory === "creative" ? creativeSubcategories : commsSubcategories;

  const filtered = workItems.filter(
    (item) =>
      item.category === activeCategory &&
      item.subcategory === activeSubcategory
  );

  const photoItems = filtered.filter((i) => i.type === "image");
  const lightboxPhotos = photoItems.map((i) => ({ src: i.src, alt: i.title }));

  function switchCategory(cat: WorkCategory) {
    setActiveCategory(cat);
    const defaults: Record<WorkCategory, WorkSubcategory> = {
      creative: "photography",
      communications: "planning-strategy",
    };
    setActiveSubcategory(defaults[cat]);
  }

  return (
    <div className="pt-28 pb-section">
      <div className="editorial-container">
        {/* Header */}
        <ScrollReveal>
          <p className="text-accent text-sm uppercase tracking-[0.2em] mb-3">Portfolio</p>
        </ScrollReveal>
        <ScrollReveal delay={0.1}>
          <h1 className="font-serif text-heading" style={{ fontSize: "var(--text-h1)" }}>
            Work
          </h1>
        </ScrollReveal>
        <ScrollReveal delay={0.2}>
          <p className="mt-4 text-muted max-w-2xl" style={{ fontSize: "var(--text-body-lg)" }}>
            A curated selection of works that demonstrate my effort in communication
            strategy, branding, publications, media engagement, and visual
            storytelling — designed to inform, engage, and inspire action.
          </p>
        </ScrollReveal>

        {/* Top-level category tabs */}
        <div className="mt-12 flex border-b border-border">
          {(["creative", "communications"] as WorkCategory[]).map((cat) => {
            const labels: Record<WorkCategory, string> = {
              creative: "Creative Work",
              communications: "Communications & Brand Work",
            };
            return (
              <button
                key={cat}
                onClick={() => switchCategory(cat)}
                className={`relative pb-4 mr-8 text-sm font-medium tracking-wide transition-colors ${
                  activeCategory === cat ? "text-heading" : "text-muted hover:text-body"
                }`}
              >
                {labels[cat]}
                {activeCategory === cat && (
                  <motion.div
                    layoutId="category-underline"
                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-accent"
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  />
                )}
              </button>
            );
          })}
        </div>

        {/* Subcategory pills */}
        <div className="mt-6 flex flex-wrap gap-2 mb-12">
          {subcategories.map((sub) => (
            <button
              key={sub}
              onClick={() => setActiveSubcategory(sub)}
              className={`px-4 py-2 text-xs uppercase tracking-wider border transition-colors duration-200 ${
                activeSubcategory === sub
                  ? "bg-heading text-cream border-heading"
                  : "border-border text-muted hover:border-accent/40 hover:text-heading"
              }`}
            >
              {subcategoryLabels[sub]}
            </button>
          ))}
        </div>

        {/* Content grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeSubcategory}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            {activeSubcategory === "photography" ? (
              /* Photography: 3-col image grid */
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {filtered.map((item, i) => (
                  <PhotoCard
                    key={item.id}
                    item={item}
                    onClick={() => setLightboxIndex(i)}
                  />

                ))}
              </div>
            ) : activeSubcategory === "moving-lens" || activeSubcategory === "animations" ? (
              /* Videos: wider cards */
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {filtered.map((item) => (
                  <VideoCard key={item.id} item={item} />
                ))}
              </div>
            ) : (
              /* PDFs: 3-col card grid */
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
                {filtered.map((item) => (
                  <PdfCard key={item.id} item={item} />
                ))}
              </div>
            )}

            {filtered.length === 0 && (
              <div className="text-center py-20">
                <p className="text-muted">No items in this category.</p>
              </div>
            )}
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Lightbox for photography */}
      <Lightbox
        photos={lightboxPhotos}
        currentIndex={isLightboxOpen ? lightboxIndex : 0}
        isOpen={isLightboxOpen}
        onClose={() => setLightboxIndex(-1)}
        onPrev={() => setLightboxIndex((i) => (i - 1 + lightboxPhotos.length) % lightboxPhotos.length)}
        onNext={() => setLightboxIndex((i) => (i + 1) % lightboxPhotos.length)}
      />
    </div>
  );
}
