"use client";

import { motion } from "framer-motion";
import { categories, type ProjectCategory } from "@/data/projects";

interface CategoryFilterProps {
  active: ProjectCategory | "all";
  onChange: (category: ProjectCategory | "all") => void;
}

export function CategoryFilter({ active, onChange }: CategoryFilterProps) {
  return (
    <div className="flex flex-wrap gap-2">
      {categories.map((cat) => (
        <button
          key={cat.value}
          onClick={() => onChange(cat.value)}
          className={`relative px-4 py-2 text-sm uppercase tracking-wider transition-colors ${
            active === cat.value
              ? "text-white"
              : "text-muted hover:text-heading"
          }`}
        >
          {active === cat.value && (
            <motion.div
              layoutId="category-pill"
              className="absolute inset-0 bg-accent rounded-sm"
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
            />
          )}
          <span className="relative z-10">{cat.label}</span>
        </button>
      ))}
    </div>
  );
}
