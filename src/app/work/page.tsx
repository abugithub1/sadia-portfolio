"use client";

import { useState } from "react";
import { AnimatePresence } from "framer-motion";
import { projects, type ProjectCategory } from "@/data/projects";
import { CategoryFilter } from "@/components/CategoryFilter";
import { ProjectCard } from "@/components/ProjectCard";
import { ScrollReveal } from "@/components/ScrollReveal";

export default function WorkPage() {
  const [activeCategory, setActiveCategory] = useState<ProjectCategory | "all">("all");

  const filtered =
    activeCategory === "all"
      ? projects
      : projects.filter((p) => p.category === activeCategory);

  return (
    <div className="pt-28 pb-section">
      <div className="editorial-container">
        {/* Header */}
        <ScrollReveal>
          <p className="text-accent text-sm uppercase tracking-[0.2em] mb-3">
            Portfolio
          </p>
        </ScrollReveal>
        <ScrollReveal delay={0.1}>
          <h1
            className="font-serif text-heading"
            style={{ fontSize: "var(--text-h1)" }}
          >
            Work
          </h1>
        </ScrollReveal>
        <ScrollReveal delay={0.2}>
          <p className="mt-4 text-muted max-w-2xl" style={{ fontSize: "var(--text-body-lg)" }}>
            A decade of design for social impact — from annual reports and
            publications to branding, campaigns, and documentary photography.
          </p>
        </ScrollReveal>

        {/* Filters */}
        <div className="mt-12 mb-12">
          <CategoryFilter active={activeCategory} onChange={setActiveCategory} />
        </div>

        {/* Project Grid - Asymmetric 3-column */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          <AnimatePresence mode="popLayout">
            {filtered.map((project, i) => (
              <ProjectCard key={project.slug} project={project} index={i} />
            ))}
          </AnimatePresence>
        </div>

        {filtered.length === 0 && (
          <div className="text-center py-20">
            <p className="text-muted">No projects in this category yet.</p>
          </div>
        )}
      </div>
    </div>
  );
}
