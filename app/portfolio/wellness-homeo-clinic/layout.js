// app/portfolio/wellness-homeo-clinic/layout.js
// Demo layout for Genre 1: Wellness Homeo Clinic (Botanical Calm aesthetic).
// Uses Karla for body text, Domine for serif display headings, terracotta/forest green palette.
// Props: children (React subpage components)

'use client';

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { MessageCircle, Menu } from "lucide-react";
import { DemoBadge } from "@/components/DemoBadge";

const NAV = [
  { href: "/portfolio/wellness-homeo-clinic", label: "Home" },
  { href: "/portfolio/wellness-homeo-clinic/about-dr-sharma", label: "About Dr. Sharma" },
  { href: "/portfolio/wellness-homeo-clinic/conditions-we-treat", label: "Conditions" },
  { href: "/portfolio/wellness-homeo-clinic/patient-stories", label: "Patient Stories" },
  { href: "/portfolio/wellness-homeo-clinic/visit-contact", label: "Visit & Contact" },
];

/**
 * Botanical Calm genre layout for Wellness Homeo Clinic.
 */
export default function HomeoLayout({ children }) {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  return (
    <div style={{ fontFamily: '"Karla", system-ui, sans-serif' }} className="min-h-screen bg-[#F7F2EA] text-[#26312B]">
      <DemoBadge />
      <header className="sticky top-0 z-30 border-b border-[#2F4A3D]/10 bg-[#F7F2EA]/90 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4 sm:px-8">
          <Link href="/portfolio/wellness-homeo-clinic" className="flex items-center gap-2.5">
            <Sprig className="h-7 w-7 text-[#2F4A3D]" />
            <div className="leading-tight">
              <div style={{ fontFamily: '"Domine", Georgia, serif' }} className="text-lg font-semibold text-[#2F4A3D]">Wellness Homeo</div>
              <div className="text-[9px] uppercase tracking-[0.24em] text-[#B8735A]">est. 2006 · Pune</div>
            </div>
          </Link>

          <nav className="hidden items-center gap-7 text-sm text-[#26312B]/85 lg:flex">
            {NAV.map((n) => {
              const isActive = pathname === n.href;
              return (
                <Link
                  key={n.href}
                  href={n.href}
                  className={`hover:text-[#2F4A3D] ${isActive ? "text-[#2F4A3D] font-semibold" : ""}`}
                >
                  {n.label}
                </Link>
              );
            })}
          </nav>

          <a href="https://wa.me/918765610216" target="_blank" rel="noreferrer" className="hidden rounded-full bg-[#2F4A3D] px-4 py-2 text-xs font-semibold text-[#F7F2EA] sm:inline-flex">Book on WhatsApp</a>
          <button onClick={() => setOpen((v) => !v)} className="lg:hidden" aria-label="Menu"><Menu className="h-5 w-5 text-[#2F4A3D]" /></button>
        </div>

        {open && (
          <div className="border-t border-[#2F4A3D]/10 bg-[#F7F2EA] px-5 py-4 lg:hidden">
            {NAV.map((n) => (
              <Link key={n.href} href={n.href} onClick={() => setOpen(false)} className="block py-1.5 text-sm">{n.label}</Link>
            ))}
          </div>
        )}
      </header>

      <main>{children}</main>

      <footer className="mt-24 border-t border-[#2F4A3D]/15 bg-[#2F4A3D] py-10 text-[#F7F2EA]/85">
        <div className="mx-auto flex max-w-6xl flex-col gap-4 px-5 text-sm sm:flex-row sm:items-center sm:justify-between sm:px-8">
          <div style={{ fontFamily: '"Domine", Georgia, serif' }} className="text-lg text-[#F7F2EA]">Wellness Homeo Clinic</div>
          <div className="text-xs opacity-80">© 2026 · Website by Digisarthi Info Tech</div>
          <a href="https://wa.me/918765610216" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 text-xs font-semibold text-[#F7F2EA]"><MessageCircle className="h-4 w-4" /> +91 8765610216</a>
        </div>
      </footer>
    </div>
  );
}

// Signature SVG leaf graphic motif for Botanical Calm genre
export function Sprig({ className = "" }) {
  return (
    <svg viewBox="0 0 60 60" fill="none" aria-hidden className={className}>
      <path d="M30 55 C 30 40 30 25 30 8" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
      <path d="M30 45 C 22 42 17 38 15 32" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" fill="none" />
      <path d="M30 38 C 38 35 43 30 45 24" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" fill="none" />
      <path d="M30 30 C 23 27 19 23 17 17" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" fill="none" />
      <path d="M30 22 C 37 19 41 15 43 10" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" fill="none" />
      <ellipse cx="14" cy="30" rx="4" ry="2" transform="rotate(-30 14 30)" stroke="currentColor" strokeWidth="1.2" fill="none" />
      <ellipse cx="46" cy="22" rx="4" ry="2" transform="rotate(30 46 22)" stroke="currentColor" strokeWidth="1.2" fill="none" />
      <ellipse cx="16" cy="16" rx="4" ry="2" transform="rotate(-30 16 16)" stroke="currentColor" strokeWidth="1.2" fill="none" />
    </svg>
  );
}

// Display font inline helper for Domine serif headings
export function HomeoDisplay({ children, className = "" }) {
  return <span style={{ fontFamily: '"Domine", Georgia, serif' }} className={className}>{children}</span>;
}

// Organic border-radius blob value for organic image masks
export const homeoBlob = "45% 55% 60% 40% / 50% 45% 55% 50%";
