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
              Let&apos;s create something meaningful
            </h1>
          </ScrollReveal>
          <ScrollReveal delay={0.2}>
            <p
              className="mt-6 text-muted leading-relaxed"
              style={{ fontSize: "var(--text-body-lg)" }}
            >
              Whether you need publication design, branding, editorial work, or
              photography for your organization — I&apos;d love to hear about your
              project and explore how we can work together.
            </p>
          </ScrollReveal>

          {/* Contact info */}
          <ScrollReveal delay={0.3}>
            <div className="mt-16 space-y-8">
              <div>
                <h2 className="font-serif text-heading text-xl mb-4">
                  Email
                </h2>
                <a
                  href="mailto:hello@sadiakarim.com"
                  className="text-accent hover:text-accent-dark text-lg transition-colors"
                >
                  hello@sadiakarim.com
                </a>
              </div>

              <div>
                <h2 className="font-serif text-heading text-xl mb-4">
                  Location
                </h2>
                <p className="text-body">Dhaka, Bangladesh</p>
              </div>

              <div>
                <h2 className="font-serif text-heading text-xl mb-4">
                  Social
                </h2>
                <div className="flex gap-6">
                  <a
                    href="#"
                    className="text-body hover:text-accent transition-colors"
                  >
                    LinkedIn
                  </a>
                  <a
                    href="#"
                    className="text-body hover:text-accent transition-colors"
                  >
                    Behance
                  </a>
                  <a
                    href="#"
                    className="text-body hover:text-accent transition-colors"
                  >
                    Instagram
                  </a>
                </div>
              </div>
            </div>
          </ScrollReveal>

          {/* Contact form */}
          <ScrollReveal delay={0.4}>
            <div className="mt-16 pt-16 border-t border-border">
              <h2
                className="font-serif text-heading mb-8"
                style={{ fontSize: "var(--text-h3)" }}
              >
                Send a message
              </h2>
              <form className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm text-muted mb-2"
                    >
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      className="w-full px-4 py-3 bg-surface border border-border text-heading text-sm focus:outline-none focus:border-accent transition-colors"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm text-muted mb-2"
                    >
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      className="w-full px-4 py-3 bg-surface border border-border text-heading text-sm focus:outline-none focus:border-accent transition-colors"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>
                <div>
                  <label
                    htmlFor="subject"
                    className="block text-sm text-muted mb-2"
                  >
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    className="w-full px-4 py-3 bg-surface border border-border text-heading text-sm focus:outline-none focus:border-accent transition-colors"
                    placeholder="Project inquiry"
                  />
                </div>
                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm text-muted mb-2"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={6}
                    className="w-full px-4 py-3 bg-surface border border-border text-heading text-sm focus:outline-none focus:border-accent transition-colors resize-none"
                    placeholder="Tell me about your project..."
                  />
                </div>
                <button
                  type="submit"
                  className="inline-flex items-center gap-2 px-8 py-3 bg-accent text-white text-sm font-medium tracking-wide hover:bg-accent-dark transition-colors"
                >
                  Send Message
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
                </button>
              </form>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </div>
  );
}
