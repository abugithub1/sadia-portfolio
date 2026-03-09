import Link from "next/link";

const footerLinks = [
  { href: "/work", label: "Work" },
  { href: "/photography", label: "Photography" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export function Footer() {
  return (
    <footer className="border-t border-border bg-cream-dark">
      <div className="editorial-container py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Brand */}
          <div>
            <Link
              href="/"
              className="font-serif text-2xl text-heading hover:text-accent transition-colors"
            >
              Sadia Karim
            </Link>
            <p className="mt-3 text-muted text-sm leading-relaxed max-w-xs">
              Graphic Designer based in Bangladesh. 10+ years crafting visual
              narratives for social impact.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="font-sans text-xs uppercase tracking-widest text-muted mb-4">
              Navigation
            </h4>
            <ul className="space-y-2">
              {footerLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-body text-sm hover:text-accent transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-sans text-xs uppercase tracking-widest text-muted mb-4">
              Get in Touch
            </h4>
            <a
              href="mailto:hello@sadiakarim.com"
              className="text-body text-sm hover:text-accent transition-colors"
            >
              hello@sadiakarim.com
            </a>
            <div className="flex gap-4 mt-4">
              <a
                href="#"
                className="text-muted hover:text-accent transition-colors text-sm"
                aria-label="LinkedIn"
              >
                LinkedIn
              </a>
              <a
                href="#"
                className="text-muted hover:text-accent transition-colors text-sm"
                aria-label="Behance"
              >
                Behance
              </a>
            </div>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-border flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-muted text-xs">
            &copy; {new Date().getFullYear()} Sadia Karim. All rights reserved.
          </p>
          <p className="text-muted text-xs">
            Designed with care in Bangladesh
          </p>
        </div>
      </div>
    </footer>
  );
}
