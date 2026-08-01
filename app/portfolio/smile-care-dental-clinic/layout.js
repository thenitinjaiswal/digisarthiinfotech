// app/portfolio/smile-care-dental-clinic/layout.js
// Demo layout for Genre 2: Smile Care Dental Clinic (Bright Confidence aesthetic).
// Uses Space Grotesk for bold headers, Inter for crisp body, bright cyan blue (#3AB0FF) & deep navy (#0B2A4A).
// Props: children (React subpage components)

'use client';

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Menu } from "lucide-react";
import { DemoBadge } from "@/components/DemoBadge";

const NAV = [
  { href: "/portfolio/smile-care-dental-clinic", label: "Home" },
  { href: "/portfolio/smile-care-dental-clinic/services", label: "Services" },
  { href: "/portfolio/smile-care-dental-clinic/smile-gallery", label: "Smile Gallery" },
  { href: "/portfolio/smile-care-dental-clinic/book-appointment", label: "Book" },
  { href: "/portfolio/smile-care-dental-clinic/contact", label: "Contact" },
];

/**
 * Signature curve SVG motif for Bright Confidence dental genre
 */
export function SmileCurve({ className = "" }) {
  return (
    <svg viewBox="0 0 200 40" fill="none" aria-hidden className={className}>
      <path d="M4 10 Q 100 46 196 10" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
    </svg>
  );
}

/**
 * Display font helper for Space Grotesk headings
 */
export function DentalDisplay({ children, className = "" }) {
  return <span style={{ fontFamily: '"Space Grotesk", sans-serif' }} className={className}>{children}</span>;
}

/**
 * Bright Confidence genre layout for Smile Care Dental Clinic.
 */
export default function DentalLayout({ children }) {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  return (
    <div style={{ fontFamily: '"Inter", system-ui, sans-serif' }} className="min-h-screen bg-white text-[#0B2A4A]">
      <DemoBadge />
      <header className="sticky top-0 z-30 border-b border-[#0B2A4A]/8 bg-white/95 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 sm:px-8">
          <Link href="/portfolio/smile-care-dental-clinic" className="flex items-center gap-2.5">
            <div className="relative">
              <div className="h-9 w-9 rounded-2xl bg-gradient-to-br from-[#3AB0FF] to-[#0B2A4A]" />
              <SmileCurve className="absolute -bottom-1 left-0 w-9 text-white" />
            </div>
            <div style={{ fontFamily: '"Space Grotesk", sans-serif' }} className="text-xl font-bold tracking-tight">Smile Care</div>
          </Link>

          <nav className="hidden items-center gap-7 text-[13.5px] font-medium text-[#0B2A4A]/80 md:flex">
            {NAV.map((n) => {
              const isActive = pathname === n.href;
              return (
                <Link
                  key={n.href}
                  href={n.href}
                  className={`hover:text-[#3AB0FF] ${isActive ? "text-[#3AB0FF] font-semibold" : ""}`}
                >
                  {n.label}
                </Link>
              );
            })}
          </nav>

          <Link href="/portfolio/smile-care-dental-clinic/book-appointment" className="hidden rounded-full bg-[#3AB0FF] px-5 py-2.5 text-sm font-semibold text-white shadow-md shadow-[#3AB0FF]/30 md:inline-flex">Book online</Link>
          <button onClick={() => setOpen((v) => !v)} className="md:hidden" aria-label="Menu"><Menu className="h-5 w-5" /></button>
        </div>

        {open && (
          <div className="border-t border-[#0B2A4A]/10 bg-white px-5 py-3 md:hidden">
            {NAV.map((n) => (
              <Link key={n.href} href={n.href} onClick={() => setOpen(false)} className="block py-1.5 text-sm">{n.label}</Link>
            ))}
          </div>
        )}
      </header>

      <main>{children}</main>

      <footer className="mt-24 bg-[#0B2A4A] py-12 text-white/85">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 px-5 text-sm sm:flex-row sm:items-center sm:justify-between sm:px-8">
          <div style={{ fontFamily: '"Space Grotesk", sans-serif' }} className="text-xl font-bold">Smile Care Dental Clinic</div>
          <div className="text-xs opacity-80">© 2026 · Website by Digisarthi Info Tech</div>
          <a href="https://wa.me/918765610216" target="_blank" rel="noreferrer" className="text-xs font-semibold">WhatsApp: +91 8765610216</a>
        </div>
      </footer>
    </div>
  );
}
