import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="editorial-container text-center">
        <h1
          className="font-serif text-heading"
          style={{ fontSize: "var(--text-display)" }}
        >
          404
        </h1>
        <p className="mt-4 text-muted text-lg">
          The page you&apos;re looking for doesn&apos;t exist.
        </p>
        <Link
          href="/"
          className="inline-flex items-center gap-2 mt-8 px-6 py-3 bg-accent text-white text-sm font-medium tracking-wide hover:bg-accent-dark transition-colors"
        >
          Back to Home
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
        </Link>
      </div>
    </div>
  );
}
