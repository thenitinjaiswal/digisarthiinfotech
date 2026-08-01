// app/portfolio/multi-speciality-clinic/layout.js
// Demo layout for Genre 3: Kalpana Multi-Speciality Clinic (Meridian Health - Institutional Trust aesthetic).
// Uses Source Serif 4 for authoritative headings, IBM Plex Sans for structured body, deep navy (#0F2340) & gold (#8A6D3B).
// Props: children (React subpage components)

'use client';

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Menu, Phone } from "lucide-react";
import { DemoBadge } from "@/components/DemoBadge";

const NAV = [
  { href: "/portfolio/multi-speciality-clinic", label: "Home" },
  { href: "/portfolio/multi-speciality-clinic/our-doctors", label: "Our Doctors" },
  { href: "/portfolio/multi-speciality-clinic/departments", label: "Departments" },
  { href: "/portfolio/multi-speciality-clinic/health-articles", label: "Health Articles" },
  { href: "/portfolio/multi-speciality-clinic/book-appointment", label: "Book Appointment" },
  { href: "/portfolio/multi-speciality-clinic/contact", label: "Contact" },
];

/**
 * Divider line rule component for Institutional Trust layout
 */
export function IndexRule({ className = "" }) {
  return <div className={`h-px w-full bg-[#0F2340]/15 ${className}`} />;
}

/**
 * Display font helper for Source Serif 4 headings
 */
export function MscDisplay({ children, className = "" }) {
  return <span style={{ fontFamily: '"Source Serif 4", "Source Serif Pro", Georgia, serif' }} className={className}>{children}</span>;
}

/**
 * Institutional Trust genre layout for Meridian Health Multi-Speciality Clinic.
 */
export default function MSCLayout({ children }) {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  return (
    <div style={{ fontFamily: '"IBM Plex Sans", system-ui, sans-serif' }} className="min-h-screen bg-[#F5F1EA] text-[#0F2340]">
      <DemoBadge />
      <div className="bg-[#0F2340] py-1.5 text-white/85">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-5 text-[11.5px] sm:px-8">
          <div className="flex items-center gap-2"><Phone className="h-3 w-3" /> 24×7 Emergency · +91 8765610216</div>
          <div className="hidden opacity-80 sm:block">NABH-Accredited · Multi-speciality</div>
        </div>
      </div>

      <header className="border-b border-[#0F2340]/12 bg-[#F5F1EA]">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-5 sm:px-8">
          <Link href="/portfolio/multi-speciality-clinic" className="flex items-center gap-3">
            <div className="h-11 w-11 rounded-sm bg-[#0F2340]" />
            <div className="leading-tight">
              <div style={{ fontFamily: '"Source Serif 4", Georgia, serif' }} className="text-[22px] font-semibold tracking-tight text-[#0F2340]">Meridian Health</div>
              <div className="text-[10px] uppercase tracking-[0.28em] text-[#8A6D3B]">Multi-Speciality Clinic · Est. 1998</div>
            </div>
          </Link>

          <nav className="hidden items-center gap-6 text-[13.5px] text-[#0F2340]/85 lg:flex">
            {NAV.map((n) => {
              const isActive = pathname === n.href;
              return (
                <Link
                  key={n.href}
                  href={n.href}
                  className={`hover:text-[#8A6D3B] ${isActive ? "text-[#8A6D3B] font-semibold" : ""}`}
                >
                  {n.label}
                </Link>
              );
            })}
          </nav>

          <button onClick={() => setOpen((v) => !v)} className="lg:hidden" aria-label="Menu"><Menu className="h-5 w-5" /></button>
        </div>

        {open && (
          <div className="border-t border-[#0F2340]/12 bg-[#F5F1EA] px-5 py-3 lg:hidden">
            {NAV.map((n) => <Link key={n.href} href={n.href} onClick={() => setOpen(false)} className="block py-1.5 text-sm">{n.label}</Link>)}
          </div>
        )}
      </header>

      <main>{children}</main>

      <footer className="mt-24 border-t border-[#0F2340]/12 bg-[#F5F1EA] py-14">
        <div className="mx-auto grid max-w-7xl gap-10 px-5 sm:px-8 md:grid-cols-4">
          <div>
            <div style={{ fontFamily: '"Source Serif 4", Georgia, serif' }} className="text-xl font-semibold">Meridian Health</div>
            <p className="mt-3 text-sm text-[#0F2340]/70">A multi-speciality clinic caring for Pune families across three generations.</p>
          </div>
          <div>
            <div className="text-[10px] font-bold uppercase tracking-[0.24em] text-[#8A6D3B]">Departments</div>
            <ul className="mt-4 space-y-1.5 text-sm">
              <li>Internal Medicine</li><li>Cardiology</li><li>Paediatrics</li><li>Gynaecology</li><li>Orthopaedics</li>
            </ul>
          </div>
          <div>
            <div className="text-[10px] font-bold uppercase tracking-[0.24em] text-[#8A6D3B]">Contact</div>
            <ul className="mt-4 space-y-1.5 text-sm text-[#0F2340]/80">
              <li>Reception: +91 8765610216</li><li>Emergency: 24×7</li><li>hello@meridianhealth.in</li>
            </ul>
          </div>
          <div>
            <div className="text-[10px] font-bold uppercase tracking-[0.24em] text-[#8A6D3B]">Accreditations</div>
            <ul className="mt-4 space-y-1.5 text-sm text-[#0F2340]/80"><li>NABH Certified</li><li>MCI Registered</li><li>ISO 9001:2015</li></ul>
          </div>
        </div>
        <div className="mx-auto mt-10 max-w-7xl border-t border-[#0F2340]/10 px-5 pt-6 text-xs text-[#0F2340]/60 sm:px-8">© 2026 Meridian Health Multi-Speciality Clinic · Website by Digisarthi Info Tech</div>
      </footer>
    </div>
  );
}
