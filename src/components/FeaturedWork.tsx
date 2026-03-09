"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { getFeaturedProjects } from "@/data/projects";
import { ScrollReveal } from "./ScrollReveal";
import { AnimatedText } from "./AnimatedText";

export function FeaturedWork() {
  const featured = getFeaturedProjects();

  return (
    <section className="py-section">
      <div className="editorial-container">
        <ScrollReveal>
          <p className="text-accent text-sm uppercase tracking-[0.2em] mb-3">
            Selected Work
          </p>
        </ScrollReveal>
        <AnimatedText
          text="Projects that tell stories"
          as="h2"
          className="font-serif text-heading"
          style-override={{ fontSize: "var(--text-h2)" }}
        />

        {/* Asymmetric editorial grid */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-8">
          {featured.map((project, i) => {
            // Asymmetric layout: alternating large/small
            const isLarge = i % 3 === 0;
            const colSpan = isLarge ? "md:col-span-7" : "md:col-span-5";
            const height = isLarge ? "h-[400px] md:h-[500px]" : "h-[300px] md:h-[400px]";
            const marginTop = i === 1 ? "md:mt-16" : i === 3 ? "md:mt-12" : "";

            return (
              <ScrollReveal
                key={project.slug}
                className={`${colSpan} ${marginTop}`}
                delay={i * 0.1}
              >
                <Link href={`/work/${project.slug}`} className="group block">
                  <motion.div
                    className={`relative ${height} overflow-hidden bg-surface`}
                    whileHover={{ y: -4 }}
                    transition={{ duration: 0.3 }}
                  >
                    <Image
                      src={project.thumbnail}
                      alt={project.title}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                      sizes={isLarge ? "(max-width: 768px) 100vw, 58vw" : "(max-width: 768px) 100vw, 42vw"}
                    />
                    {/* Hover overlay */}
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors duration-500" />
                    <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                      <span className="inline-block px-2 py-1 bg-accent text-white text-xs uppercase tracking-wider mb-2">
                        {project.categoryLabel}
                      </span>
                      <h3 className="font-serif text-white text-xl">
                        {project.title}
                      </h3>
                      <p className="text-white/70 text-sm mt-1">
                        {project.client} &middot; {project.year}
                      </p>
                    </div>
                  </motion.div>
                </Link>
              </ScrollReveal>
            );
          })}
        </div>

        <ScrollReveal className="mt-12 text-center">
          <Link
            href="/work"
            className="inline-flex items-center gap-2 text-accent hover:text-accent-dark text-sm uppercase tracking-[0.15em] transition-colors"
          >
            View All Projects
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </ScrollReveal>
      </div>
    </section>
  );
}
