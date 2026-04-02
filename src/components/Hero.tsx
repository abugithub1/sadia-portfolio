"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

export function Hero() {
  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Background image with Ken Burns */}
      <motion.div
        className="absolute inset-0"
        animate={{
          scale: [1, 1.08],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          repeatType: "reverse",
          ease: "linear",
        }}
      >
        <Image
          src="/images/hero/hero-main.jpg"
          alt="Sadia Karim — Brand Strategist & Creative Storyteller"
          fill
          priority
          className="object-cover object-top"
          sizes="100vw"
        />
      </motion.div>

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/20 to-black/80" />

      {/* Content */}
      <div className="relative h-full flex flex-col justify-end pb-20 md:pb-28 editorial-container">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
        >
          <motion.p
            className="text-white/80 text-sm md:text-base uppercase tracking-[0.3em] mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            Brand Strategist &middot; Creative Storyteller &middot; Walsall, UK
          </motion.p>

          <motion.h1
            className="font-serif text-white leading-[1.1] tracking-tight"
            style={{ fontSize: "var(--text-display)" }}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7, ease: [0.16, 1, 0.3, 1] }}
          >
            Sadia Karim
          </motion.h1>

          <motion.p
            className="mt-6 text-white/80 max-w-xl leading-relaxed"
            style={{ fontSize: "var(--text-body-lg)" }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
          >
            Elevating brands through insight, creativity, and human‑centred
            storytelling. 13+ years shaping brand identities, campaigns, and
            digital experiences for global development and corporate environments.
          </motion.p>

          <motion.div
            className="mt-8 flex gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.2 }}
          >
            <Link
              href="/work"
              className="inline-flex items-center gap-2 px-6 py-3 bg-white text-heading text-sm font-medium tracking-wide hover:bg-accent hover:text-white transition-colors duration-300"
            >
              View Work
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
            <Link
              href="/contact"
              className="inline-flex items-center px-6 py-3 border border-white/40 text-white text-sm font-medium tracking-wide hover:bg-white/10 transition-colors duration-300"
            >
              Get in Touch
            </Link>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-6 left-1/2 -translate-x-1/2"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <div className="w-5 h-8 border-2 border-white/40 rounded-full flex justify-center pt-1.5">
          <div className="w-1 h-2 bg-white/60 rounded-full" />
        </div>
      </motion.div>
    </section>
  );
}
