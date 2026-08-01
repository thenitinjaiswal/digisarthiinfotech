// components/Navbar.js
// Sticky top navigation bar for Digisarthi Info Tech.
// Highlights active route using next/navigation and provides responsive mobile menu toggle.
// Props: none (reads current pathname internally)

'use client';

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Menu, X, MessageCircle } from "lucide-react";
import { WA_URL } from "@/lib/siteData";

const LINKS = [
  { href: "/specialities", label: "Specialities" },
  { href: "/portfolio", label: "Portfolio" },
  { href: "/pricing", label: "Pricing" },
  { href: "/process", label: "Process" },
  { href: "/about", label: "About" },
  { href: "/blog", label: "Blog" },
  { href: "/contact", label: "Contact" },
];

/**
 * Main navigation header component for the main marketing site.
 */
export function Navbar() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 border-b border-hairline bg-background/85 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 sm:px-6">
        <Link href="/" className="flex items-center gap-2.5 group">
          <div className="grid h-9 w-9 place-items-center rounded-xl bg-navy text-white">
            <span className="font-display text-lg font-semibold">D</span>
          </div>
          <div className="leading-tight">
            <div className="font-display text-base font-semibold text-navy">Digisarthi</div>
            <div className="font-mono-tabular text-[9px] uppercase tracking-[0.22em] text-teal">Info Tech</div>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-6 text-sm text-ink/80 lg:flex">
          {LINKS.map(l => {
            const isActive = pathname === l.href;
            return (
              <Link
                key={l.href}
                href={l.href}
                className={`transition-colors ${isActive ? "text-navy font-semibold" : "hover:text-navy"}`}
              >
                {l.label}
              </Link>
            );
          })}
        </nav>

        {/* Call to action button */}
        <div className="hidden lg:flex items-center gap-3">
          <a
            href={WA_URL} target="_blank" rel="noreferrer"
            className="inline-flex items-center gap-1.5 rounded-full bg-navy px-4 py-2 text-xs font-semibold text-white hover:bg-navy/90 transition-colors"
          >
            <MessageCircle className="h-3.5 w-3.5" /> Free consultation
          </a>
        </div>

        {/* Mobile menu button */}
        <button
          onClick={() => setOpen(o => !o)}
          aria-label="Toggle menu"
          aria-expanded={open}
          className="lg:hidden grid h-10 w-10 place-items-center rounded-lg border border-hairline text-navy"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {open && (
        <div className="lg:hidden border-t border-hairline bg-background">
          <nav className="mx-auto flex max-w-6xl flex-col gap-1 px-4 py-3 sm:px-6">
            {LINKS.map(l => {
              const isActive = pathname === l.href;
              return (
                <Link
                  key={l.href}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className={`rounded-lg px-3 py-2 text-sm text-ink/85 hover:bg-muted ${isActive ? "text-navy font-semibold" : ""}`}
                >
                  {l.label}
                </Link>
              );
            })}
            <a
              href={WA_URL} target="_blank" rel="noreferrer"
              className="mt-2 inline-flex items-center justify-center gap-1.5 rounded-full bg-navy px-4 py-2.5 text-sm font-semibold text-white"
            >
              <MessageCircle className="h-4 w-4" /> Book on WhatsApp
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
