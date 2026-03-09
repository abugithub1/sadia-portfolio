"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import type { Project } from "@/data/projects";

interface ProjectCardProps {
  project: Project;
  index: number;
}

export function ProjectCard({ project, index }: ProjectCardProps) {
  // Create asymmetric height pattern
  const heights = ["h-[320px]", "h-[380px]", "h-[280px]", "h-[350px]", "h-[300px]"];
  const height = heights[index % heights.length];

  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 20 }}
      transition={{ duration: 0.5, delay: index * 0.05 }}
    >
      <Link href={`/work/${project.slug}`} className="group block">
        <div className={`relative ${height} overflow-hidden bg-surface`}>
          <Image
            src={project.thumbnail}
            alt={project.title}
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-105"
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          />
          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-colors duration-500" />

          {/* Category badge */}
          <div className="absolute top-4 left-4">
            <span className="px-2 py-1 bg-white/90 backdrop-blur-sm text-heading text-xs uppercase tracking-wider">
              {project.categoryLabel}
            </span>
          </div>

          {/* Hover content */}
          <div className="absolute bottom-0 left-0 right-0 p-5 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
            <h3 className="font-serif text-white text-lg leading-tight">
              {project.title}
            </h3>
            <p className="text-white/70 text-sm mt-1">
              {project.client} &middot; {project.year}
            </p>
          </div>
        </div>

        {/* Below-card info (always visible) */}
        <div className="mt-3">
          <h3 className="font-serif text-heading text-base group-hover:text-accent transition-colors">
            {project.title}
          </h3>
          <p className="text-muted text-sm mt-0.5">
            {project.client} &middot; {project.year}
          </p>
        </div>
      </Link>
    </motion.div>
  );
}
