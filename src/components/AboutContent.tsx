"use client";

import { ScrollReveal } from "./ScrollReveal";
import { motion } from "framer-motion";

const timeline = [
  {
    year: "2025",
    title: "Senior Graphic Designer",
    org: "Educo Bangladesh",
    detail: "Leading visual communications, publications, and brand strategy",
  },
  {
    year: "2022",
    title: "Graphic Designer & Communications",
    org: "Educo Bangladesh",
    detail: "Annual reports, case studies, campaigns, and documentary photography",
  },
  {
    year: "2019",
    title: "Publications & Campaign Design",
    org: "Educo Bangladesh",
    detail: "Gender equality campaigns, newsletters, and training modules",
  },
  {
    year: "2016",
    title: "Graphic Designer",
    org: "Intervida / Educo",
    detail: "Publication design, branding, migration advocacy materials",
  },
  {
    year: "2014",
    title: "Career Start",
    org: "Social Sector Design",
    detail: "Began designing for development organizations in Bangladesh",
  },
];

const clients = [
  "Educo Bangladesh",
  "ODHIKAR",
  "KOICA",
  "Ecotex",
  "Echotex",
  "Intervida",
];

const skills = [
  "Publication Design",
  "Annual Reports",
  "Branding & Identity",
  "Editorial Design",
  "Infographic Design",
  "Documentary Photography",
  "Motion Graphics",
  "Campaign Design",
  "Video Production",
  "Print Design",
];

const tools = [
  "Adobe InDesign",
  "Adobe Photoshop",
  "Adobe Illustrator",
  "Adobe Premiere Pro",
  "Adobe After Effects",
  "Figma",
];

const focusAreas = [
  "Gender Equality",
  "Education",
  "Youth Development",
  "Migration",
  "Climate Change",
  "Child Rights",
  "Community Development",
];

export function AboutContent() {
  return (
    <div className="pt-28 pb-section">
      <div className="editorial-container">
        {/* Header */}
        <ScrollReveal>
          <p className="text-accent text-sm uppercase tracking-[0.2em] mb-3">
            About
          </p>
        </ScrollReveal>
        <ScrollReveal delay={0.1}>
          <h1
            className="font-serif text-heading max-w-3xl"
            style={{ fontSize: "var(--text-h1)" }}
          >
            Designing for social impact since 2014
          </h1>
        </ScrollReveal>

        {/* Bio */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-16">
          {/* Portrait placeholder */}
          <ScrollReveal className="md:col-span-5">
            <div className="aspect-[3/4] bg-surface flex items-center justify-center">
              <div className="text-center p-8">
                <p className="text-muted text-sm">Portrait photo</p>
                <p className="text-muted/60 text-xs mt-1">coming soon</p>
              </div>
            </div>
          </ScrollReveal>

          {/* Bio text */}
          <ScrollReveal className="md:col-span-7" delay={0.15}>
            <div className="space-y-6">
              <p
                className="text-body leading-relaxed"
                style={{ fontSize: "var(--text-body-lg)" }}
              >
                I&apos;m Sadia Karim, a graphic designer based in Bangladesh
                with over a decade of experience creating visual communications
                for the social development sector. My work bridges the gap
                between complex social narratives and compelling visual
                storytelling.
              </p>
              <p className="text-body leading-relaxed">
                Since 2014, I&apos;ve partnered with leading international
                development organizations to design publications, campaigns, and
                branded materials that amplify voices for change. From annual
                reports and editorial publications to documentary photography
                and motion graphics, I bring a holistic approach to visual
                communication.
              </p>
              <p className="text-body leading-relaxed">
                My focus areas include gender equality, education, youth
                development, migration, and climate change — themes that drive
                meaningful social progress. I believe in the power of design to
                not just inform, but to inspire action and create lasting
                impact.
              </p>
              <p className="text-body leading-relaxed">
                Through my lens and my design work, I strive to honor the
                stories of the communities I document — capturing moments of
                resilience, joy, and transformation that deserve to be seen and
                shared with the world.
              </p>
            </div>
          </ScrollReveal>
        </div>

        {/* Timeline */}
        <div className="mt-section">
          <ScrollReveal>
            <h2
              className="font-serif text-heading mb-12"
              style={{ fontSize: "var(--text-h2)" }}
            >
              Experience
            </h2>
          </ScrollReveal>

          <div className="space-y-0">
            {timeline.map((item, i) => (
              <ScrollReveal key={item.year} delay={i * 0.08}>
                <div className="grid grid-cols-12 gap-4 py-6 border-b border-border group">
                  <div className="col-span-2 md:col-span-1">
                    <span className="text-accent font-medium">{item.year}</span>
                  </div>
                  <div className="col-span-10 md:col-span-11">
                    <h3 className="font-serif text-heading text-lg group-hover:text-accent transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-muted text-sm mt-0.5">{item.org}</p>
                    <p className="text-body text-sm mt-1">{item.detail}</p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>

        {/* Clients */}
        <div className="mt-section">
          <ScrollReveal>
            <h2
              className="font-serif text-heading mb-10"
              style={{ fontSize: "var(--text-h2)" }}
            >
              Clients
            </h2>
          </ScrollReveal>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {clients.map((client, i) => (
              <ScrollReveal key={client} delay={i * 0.05}>
                <div className="py-6 px-4 border border-border text-center hover:border-accent/30 transition-colors">
                  <span className="text-heading text-sm font-medium">
                    {client}
                  </span>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>

        {/* Skills & Tools */}
        <div className="mt-section grid grid-cols-1 md:grid-cols-3 gap-12">
          <ScrollReveal>
            <h3 className="font-serif text-heading text-lg mb-6">Skills</h3>
            <div className="flex flex-wrap gap-2">
              {skills.map((skill) => (
                <span
                  key={skill}
                  className="px-3 py-1.5 bg-surface text-body text-sm"
                >
                  {skill}
                </span>
              ))}
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.1}>
            <h3 className="font-serif text-heading text-lg mb-6">Tools</h3>
            <div className="flex flex-wrap gap-2">
              {tools.map((tool) => (
                <span
                  key={tool}
                  className="px-3 py-1.5 bg-surface text-body text-sm"
                >
                  {tool}
                </span>
              ))}
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.2}>
            <h3 className="font-serif text-heading text-lg mb-6">
              Focus Areas
            </h3>
            <div className="flex flex-wrap gap-2">
              {focusAreas.map((area) => (
                <motion.span
                  key={area}
                  className="px-3 py-1.5 bg-surface text-body text-sm hover:bg-accent hover:text-white transition-colors cursor-default"
                  whileHover={{ scale: 1.05 }}
                >
                  {area}
                </motion.span>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </div>
    </div>
  );
}
