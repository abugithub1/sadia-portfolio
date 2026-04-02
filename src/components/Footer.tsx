import Link from "next/link";

const footerLinks = [
  { href: "/work", label: "Work" },
  { href: "/about", label: "About Me" },
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
              Brand Strategist &amp; Creative Storyteller. 13+ years shaping
              narratives and brand identities for global impact.
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
              href="mailto:mssadiakarim@hotmail.com"
              className="text-body text-sm hover:text-accent transition-colors"
            >
              mssadiakarim@hotmail.com
            </a>
            <div className="flex gap-4 mt-4">
              <a
                href="https://www.linkedin.com/in/sadia-karim"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted hover:text-accent transition-colors text-sm"
              >
                LinkedIn
              </a>
            </div>
            <p className="text-muted text-xs mt-4">Walsall, United Kingdom</p>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-border flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-muted text-xs">
            &copy; {new Date().getFullYear()} Sadia Karim. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
