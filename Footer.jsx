import Link from "next/link";
import SealMark from "./SealMark";

const COLUMNS = [
  {
    heading: "Platform",
    links: [
      { label: "Curriculum", href: "#platform" },
      { label: "Program Tracks", href: "#programs" },
      { label: "How It Works", href: "#how-it-works" },
    ],
  },
  {
    heading: "Company",
    links: [
      { label: "Success Stories", href: "#success-stories" },
      { label: "Contact", href: "#contact" },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="border-t border-ink-border bg-ink">
      <div className="mx-auto max-w-6xl px-6 py-16 lg:px-8">
        <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-4">
          <div className="lg:col-span-2">
            <Link href="#top" className="flex items-center gap-3">
              <SealMark className="h-8 w-8" />
              <span className="font-display text-lg">
                Accredian <span className="italic text-brass">Enterprise</span>
              </span>
            </Link>
            <p className="mt-4 max-w-sm text-sm text-ash">
              A student portfolio recreation of the Accredian Enterprise landing
              page, built with Next.js and Tailwind CSS. Not affiliated with
              Accredian.
            </p>
          </div>

          {COLUMNS.map((col) => (
            <div key={col.heading}>
              <p className="eyebrow mb-4 text-ash">{col.heading}</p>
              <ul className="space-y-3">
                {col.links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-sm text-parchment/80 transition-colors hover:text-brass"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-14 flex flex-col items-start justify-between gap-4 border-t border-ink-border pt-8 text-xs text-ash sm:flex-row sm:items-center">
          <p>© {new Date().getFullYear()} Accredian Enterprise Clone — built for internship assignment purposes.</p>
          <p>Made with Next.js &amp; Tailwind CSS</p>
        </div>
      </div>
    </footer>
  );
}
