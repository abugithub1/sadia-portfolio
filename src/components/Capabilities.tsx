"use client";

import { ScrollReveal } from "./ScrollReveal";

const capabilities = [
  {
    title: "Strategic Communication",
    description: "Designing and implementing communication initiatives that translate complex ideas into measurable, impactful results.",
  },
  {
    title: "Brand Governance",
    description: "Defining how organisations show up — brand identity, narrative frameworks, and consistent visual language across channels.",
  },
  {
    title: "Knowledge Resources",
    description: "Contributing to high-quality publications by editing, coordinating, and managing content from draft to final production.",
  },
  {
    title: "Photography",
    description: "Documentary and editorial photography that captures moments of resilience, joy, and transformation.",
  },
  {
    title: "Graphic Design",
    description: "Publications, annual reports, campaigns, infographics, and branded materials that inform and inspire action.",
  },
  {
    title: "Video & Motion",
    description: "Logo animations, short films, and documentary video production using Adobe Premiere Pro and DaVinci Resolve.",
  },
];

export function Capabilities() {
  return (
    <section className="py-section">
      <div className="editorial-container">
        <ScrollReveal>
          <p className="text-accent text-sm uppercase tracking-[0.2em] mb-3">
            What I Do
          </p>
        </ScrollReveal>
        <ScrollReveal delay={0.1}>
          <h2
            className="font-serif text-heading max-w-2xl"
            style={{ fontSize: "var(--text-h2)" }}
          >
            Work that communicates, educates, and inspires action
          </h2>
        </ScrollReveal>

        <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">
          {capabilities.map((cap, i) => (
            <ScrollReveal key={cap.title} delay={i * 0.08}>
              <div className="group">
                <div className="w-8 h-px bg-accent mb-4 group-hover:w-12 transition-all duration-300" />
                <h3 className="font-serif text-heading text-lg mb-2">
                  {cap.title}
                </h3>
                <p className="text-muted text-sm leading-relaxed">
                  {cap.description}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
