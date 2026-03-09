"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import type { Project } from "@/data/projects";
import { ScrollReveal } from "./ScrollReveal";

interface ProjectDetailProps {
  project: Project;
  prevProject: Project | null;
  nextProject: Project | null;
}

export function ProjectDetail({
  project,
  prevProject,
  nextProject,
}: ProjectDetailProps) {
  return (
    <article>
      {/* Hero */}
      <div className="relative h-[50vh] md:h-[60vh] overflow-hidden">
        <Image
          src={project.thumbnail}
          alt={project.title}
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 editorial-container pb-12">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="inline-block px-3 py-1 bg-accent text-white text-xs uppercase tracking-wider mb-4"
          >
            {project.categoryLabel}
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="font-serif text-white"
            style={{ fontSize: "var(--text-h1)" }}
          >
            {project.title}
          </motion.h1>
        </div>
      </div>

      {/* Content */}
      <div className="editorial-container py-16 md:py-24">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-16">
          {/* Sidebar */}
          <ScrollReveal className="md:col-span-4 lg:col-span-3">
            <div className="space-y-6 md:sticky md:top-28">
              <div>
                <p className="text-xs uppercase tracking-widest text-muted mb-1">
                  Client
                </p>
                <p className="text-heading font-medium">{project.client}</p>
              </div>
              <div>
                <p className="text-xs uppercase tracking-widest text-muted mb-1">
                  Year
                </p>
                <p className="text-heading font-medium">{project.year}</p>
              </div>
              <div>
                <p className="text-xs uppercase tracking-widest text-muted mb-1">
                  Type
                </p>
                <p className="text-heading font-medium">
                  {project.categoryLabel}
                </p>
              </div>
              <div>
                <p className="text-xs uppercase tracking-widest text-muted mb-1">
                  Role
                </p>
                <p className="text-heading font-medium">{project.role}</p>
              </div>

              {project.pdfUrl && (
                <a
                  href={project.pdfUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-3 bg-accent text-white text-sm tracking-wide hover:bg-accent-dark transition-colors"
                >
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
                      d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                    />
                  </svg>
                  View Full Document
                </a>
              )}
            </div>
          </ScrollReveal>

          {/* Main content */}
          <ScrollReveal className="md:col-span-8 lg:col-span-9" delay={0.15}>
            <div className="prose prose-lg max-w-none">
              <p
                className="text-body leading-relaxed"
                style={{ fontSize: "var(--text-body-lg)" }}
              >
                {project.description}
              </p>
            </div>

            {/* Video embed */}
            {project.videoUrl && (
              <div className="mt-12">
                <video
                  controls
                  className="w-full rounded-sm"
                  preload="metadata"
                >
                  <source src={project.videoUrl} type="video/mp4" />
                </video>
              </div>
            )}

            {/* Image gallery */}
            {project.images.length > 0 && (
              <div className="mt-12 space-y-6">
                {project.images.map((img, i) => (
                  <ScrollReveal key={i} delay={i * 0.1}>
                    <div className="relative aspect-[4/3] overflow-hidden bg-surface">
                      <Image
                        src={img}
                        alt={`${project.title} — Image ${i + 1}`}
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 100vw, 60vw"
                      />
                    </div>
                  </ScrollReveal>
                ))}
              </div>
            )}
          </ScrollReveal>
        </div>
      </div>

      {/* Navigation */}
      <div className="border-t border-border">
        <div className="editorial-container">
          <div className="grid grid-cols-2 divide-x divide-border">
            {prevProject ? (
              <Link
                href={`/work/${prevProject.slug}`}
                className="group py-8 pr-6 hover:bg-surface/50 transition-colors"
              >
                <p className="text-xs uppercase tracking-widest text-muted mb-2">
                  Previous
                </p>
                <p className="font-serif text-heading group-hover:text-accent transition-colors">
                  {prevProject.title}
                </p>
              </Link>
            ) : (
              <div />
            )}
            {nextProject ? (
              <Link
                href={`/work/${nextProject.slug}`}
                className="group py-8 pl-6 text-right hover:bg-surface/50 transition-colors"
              >
                <p className="text-xs uppercase tracking-widest text-muted mb-2">
                  Next
                </p>
                <p className="font-serif text-heading group-hover:text-accent transition-colors">
                  {nextProject.title}
                </p>
              </Link>
            ) : (
              <div />
            )}
          </div>
        </div>
      </div>
    </article>
  );
}
