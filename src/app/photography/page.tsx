"use client";

import { useState, useCallback } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { educoPhotos, personalPhotos, type Photo } from "@/data/photography";
import { Lightbox } from "@/components/Lightbox";
import { ScrollReveal } from "@/components/ScrollReveal";

type Tab = "educo" | "personal";

export default function PhotographyPage() {
  const [activeTab, setActiveTab] = useState<Tab>("educo");
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const photos = activeTab === "educo" ? educoPhotos : personalPhotos;

  const openLightbox = useCallback((index: number) => {
    setCurrentIndex(index);
    setLightboxOpen(true);
  }, []);

  const handlePrev = useCallback(() => {
    setCurrentIndex((prev) => (prev > 0 ? prev - 1 : photos.length - 1));
  }, [photos.length]);

  const handleNext = useCallback(() => {
    setCurrentIndex((prev) => (prev < photos.length - 1 ? prev + 1 : 0));
  }, [photos.length]);

  return (
    <div className="pt-28 pb-section">
      <div className="editorial-container">
        {/* Header */}
        <ScrollReveal>
          <p className="text-accent text-sm uppercase tracking-[0.2em] mb-3">
            Gallery
          </p>
        </ScrollReveal>
        <ScrollReveal delay={0.1}>
          <h1
            className="font-serif text-heading"
            style={{ fontSize: "var(--text-h1)" }}
          >
            Photography
          </h1>
        </ScrollReveal>
        <ScrollReveal delay={0.2}>
          <p
            className="mt-4 text-muted max-w-2xl"
            style={{ fontSize: "var(--text-body-lg)" }}
          >
            Documentary photography capturing stories of education, resilience,
            and community across Bangladesh.
          </p>
        </ScrollReveal>

        {/* Tabs */}
        <div className="mt-10 mb-12 flex gap-1">
          {(["educo", "personal"] as Tab[]).map((tab) => (
            <button
              key={tab}
              onClick={() => {
                setActiveTab(tab);
                setCurrentIndex(0);
              }}
              className={`relative px-5 py-2.5 text-sm uppercase tracking-wider transition-colors ${
                activeTab === tab ? "text-white" : "text-muted hover:text-heading"
              }`}
            >
              {activeTab === tab && (
                <motion.div
                  layoutId="photo-tab"
                  className="absolute inset-0 bg-accent rounded-sm"
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                />
              )}
              <span className="relative z-10">
                {tab === "educo" ? "Educo Bangladesh" : "Personal"}
              </span>
            </button>
          ))}
        </div>

        {/* Masonry Grid */}
        <div className="columns-2 md:columns-3 lg:columns-4 gap-4 space-y-4">
          {photos.map((photo: Photo, i: number) => (
            <motion.div
              key={photo.src}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: Math.min(i * 0.03, 0.5) }}
              className="break-inside-avoid cursor-pointer group"
              onClick={() => openLightbox(i)}
            >
              <div className="relative overflow-hidden bg-surface">
                <Image
                  src={photo.thumb}
                  alt={photo.alt}
                  width={600}
                  height={400}
                  className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                  loading={i < 8 ? "eager" : "lazy"}
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      <Lightbox
        photos={photos}
        currentIndex={currentIndex}
        isOpen={lightboxOpen}
        onClose={() => setLightboxOpen(false)}
        onPrev={handlePrev}
        onNext={handleNext}
      />
    </div>
  );
}
