"use client";

import Image from "next/image";
import { ScrollReveal } from "./ScrollReveal";
import { motion } from "framer-motion";

const skills = [
  "Communication",
  "Photography",
  "Video Production",
  "Campaign Design",
  "Graphic Design",
  "Communication & Knowledge Products",
  "Gender Mainstreaming",
  "Adobe Creative Suite",
  "Canva",
  "Editorial",
];

const tools = [
  "Adobe Photoshop",
  "Adobe InDesign",
  "Adobe Illustrator",
  "Adobe Premiere Pro",
  "Adobe After Effects",
  "DaVinci Resolve",
  "Canva",
];

const focusAreas = [
  "Strategic Communication",
  "Content Development & Storytelling",
  "Brand Governance",
  "Media & Public Relations",
  "Digital & Social Media Communication",
  "Campaign & Advocacy Communication",
  "Knowledge & Impact Communication",
  "Stakeholder Engagement",
];

export function AboutContent() {
  return (
    <div className="pt-28 pb-section">
      <div className="editorial-container">
        {/* Header */}
        <ScrollReveal>
          <p className="text-accent text-sm uppercase tracking-[0.2em] mb-3">
            About Me
          </p>
        </ScrollReveal>
        <ScrollReveal delay={0.1}>
          <h1
            className="font-serif text-heading max-w-3xl"
            style={{ fontSize: "var(--text-h1)" }}
          >
            Strategic communications and storytelling for organisations that
            create change.
          </h1>
        </ScrollReveal>

        {/* Bio */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-16">
          {/* Portrait */}
          <ScrollReveal className="md:col-span-4">
            <div className="relative aspect-[3/4] overflow-hidden bg-surface">
              <Image
                src="/images/sadia-karim.jpg"
                alt="Sadia Karim"
                fill
                className="object-cover object-top"
                sizes="(max-width: 768px) 100vw, 33vw"
              />
            </div>
          </ScrollReveal>

          {/* Bio text */}
          <ScrollReveal className="md:col-span-8" delay={0.15}>
            <div className="space-y-6">
              <p
                className="text-body leading-relaxed"
                style={{ fontSize: "var(--text-body-lg)" }}
              >
                I&apos;m Sadia Karim — a Strategic Brand &amp; Communications
                professional with over 13 years of experience shaping narratives,
                strengthening brand identities, and leading creative content across
                global development and corporate environments.
              </p>
              <p className="text-body leading-relaxed">
                Throughout my career, I&apos;ve led brand strategy, digital engagement,
                and multichannel content creation, partnering with teams to build
                campaigns, visual stories, and communication systems that drive
                clarity and impact. With a background spanning brand governance,
                creative direction, photography, video editing, and digital
                optimisation, I bring both analytical thinking and artistic intuition
                to every project.
              </p>
              <p className="text-body leading-relaxed">
                Originally from Bangladesh and now based in the UK, I&apos;m focused on
                applying my experience to brands that value purpose, creativity, and
                meaningful audience engagement. Whether I&apos;m developing a brand
                narrative, designing visual content, or shaping a digital strategy,
                my goal is always the same: to create work that feels intentional,
                human-centred, and memorable.
              </p>
            </div>
          </ScrollReveal>
        </div>

        {/* Skills, Tools, Focus Areas */}
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
