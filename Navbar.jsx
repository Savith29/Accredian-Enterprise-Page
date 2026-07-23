"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import SealMark from "./SealMark";

const NAV_LINKS = [
  { href: "#platform", label: "Platform" },
  { href: "#programs", label: "Programs" },
  { href: "#how-it-works", label: "How It Works" },
  { href: "#success-stories", label: "Success Stories" },
  { href: "#contact", label: "Contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        scrolled ? "bg-ink/95 backdrop-blur border-b border-ink-border" : "bg-transparent"
      }`}
    >
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4 lg:px-8">
        <Link href="#top" className="flex items-center gap-3 focus-ring rounded-sm">
          <SealMark className="h-8 w-8" />
          <span className="font-display text-lg tracking-tight text-parchment">
            Accredian <span className="text-brass italic">Enterprise</span>
          </span>
        </Link>

        <ul className="hidden items-center gap-8 md:flex">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="eyebrow text-ash transition-colors hover:text-brass focus-ring rounded-sm"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <a
          href="#contact"
          className="hidden rounded-full border border-brass px-5 py-2.5 text-sm font-medium text-brass transition-colors hover:bg-brass hover:text-ink focus-ring md:inline-block"
        >
          Book a Demo
        </a>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-label="Toggle menu"
          className="focus-ring rounded-sm p-2 text-parchment md:hidden"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
            {open ? (
              <path d="M6 6l12 12M18 6L6 18" strokeLinecap="round" />
            ) : (
              <path d="M4 7h16M4 12h16M4 17h16" strokeLinecap="round" />
            )}
          </svg>
        </button>
      </nav>

      {open && (
        <div className="border-t border-ink-border bg-ink px-6 pb-6 md:hidden">
          <ul className="flex flex-col gap-1 pt-4">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="block rounded-md px-2 py-3 text-parchment/90 hover:bg-ink-light hover:text-brass"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
          <a
            href="#contact"
            onClick={() => setOpen(false)}
            className="mt-4 block rounded-full border border-brass px-5 py-3 text-center text-sm font-medium text-brass"
          >
            Book a Demo
          </a>
        </div>
      )}
    </header>
  );
}
