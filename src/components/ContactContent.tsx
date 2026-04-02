"use client";

import { ScrollReveal } from "./ScrollReveal";

export function ContactContent() {
  return (
    <div className="pt-28 pb-section">
      <div className="editorial-container">
        <div className="max-w-2xl">
          <ScrollReveal>
            <p className="text-accent text-sm uppercase tracking-[0.2em] mb-3">
              Contact
            </p>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <h1
              className="font-serif text-heading"
              style={{ fontSize: "var(--text-h1)" }}
            >
              Let&apos;s work together
            </h1>
          </ScrollReveal>
          <ScrollReveal delay={0.2}>
            <p
              className="mt-6 text-muted leading-relaxed"
              style={{ fontSize: "var(--text-body-lg)" }}
            >
              Interested in working together to elevate your brand and message?
              Let&apos;s turn ideas, programmes, and initiatives into stories that
              inform, inspire, and create lasting impact.
            </p>
          </ScrollReveal>

          {/* Contact info */}
          <ScrollReveal delay={0.3}>
            <div className="mt-16 space-y-8">
              <div>
                <h2 className="font-serif text-heading text-xl mb-4">Email</h2>
                <a
                  href="mailto:mssadiakarim@hotmail.com"
                  className="text-accent hover:text-accent-dark text-lg transition-colors"
                >
                  mssadiakarim@hotmail.com
                </a>
              </div>

              <div>
                <h2 className="font-serif text-heading text-xl mb-4">
                  Location
                </h2>
                <p className="text-body">Walsall, United Kingdom</p>
              </div>

              <div>
                <h2 className="font-serif text-heading text-xl mb-4">
                  Connect
                </h2>
                <div className="flex gap-6">
                  <a
                    href="https://www.linkedin.com/in/sadia-karim"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-body hover:text-accent transition-colors"
                  >
                    LinkedIn
                  </a>
                </div>
              </div>
            </div>
          </ScrollReveal>

        </div>
      </div>
    </div>
  );
}
