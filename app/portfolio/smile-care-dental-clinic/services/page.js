// app/portfolio/smile-care-dental-clinic/services/page.js
// Services & Pricing list page for Smile Care Dental Clinic demo site.
// Props: none

import Link from "next/link";
import { DentalDisplay } from "../layout";

const SERVICES = [
  { t: "General Dentistry", price: "from ₹500", d: "Checkups, cleanings, fillings, extractions. The foundation of every healthy smile.", items: ["Comprehensive dental examination", "Professional scaling & polishing", "Tooth-coloured fillings", "Painless extractions"] },
  { t: "Cosmetic Dentistry", price: "from ₹8,000", d: "Design the smile you've always wanted — with modern porcelain veneers and gum contouring.", items: ["Porcelain veneers (per tooth)", "Full smile makeover", "Gum contouring", "Composite bonding"] },
  { t: "Teeth Whitening", price: "₹6,500", d: "Zoom!® in-office whitening — up to 6 shades brighter in a single 90-minute visit.", items: ["In-office Zoom!® whitening", "Take-home custom trays", "Combination protocol"] },
  { t: "Dental Implants", price: "from ₹35,000", d: "Straumann and Nobel Biocare implants placed by an experienced oral surgeon.", items: ["Single-tooth implant", "Full-arch implants", "All-on-4 restoration", "Bone grafting when needed"] },
  { t: "Invisible Aligners", price: "from ₹1,50,000", d: "Clear aligners for adults and teens — Invisalign® and ClearPath.", items: ["3D digital smile scan", "Full treatment plan", "Retainers included"] },
  { t: "Root Canal Treatment", price: "from ₹6,000", d: "Single-sitting rotary endodontics under magnification. Truly painless.", items: ["Rotary RCT", "Retreatment", "Post & core with crown"] },
];

export const metadata = {
  title: "Dental Services & Prices — Smile Care Clinic Pune",
  description: "Transparent pricing for whitening, implants, aligners, root canals and family dentistry at Smile Care Clinic, Pune.",
  openGraph: {
    title: "Smile Care · Services & Pricing",
    description: "Modern dentistry with transparent pricing.",
  },
};

/**
 * Dental services and pricing page component.
 */
export default function ServicesPage() {
  return (
    <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8 sm:py-28">
      <div className="max-w-3xl">
        <div className="text-[11px] font-bold uppercase tracking-wider text-[#3AB0FF]">SERVICES · TRANSPARENT PRICING</div>
        <h1 className="mt-4 text-5xl font-bold tracking-tight text-[#0B2A4A] sm:text-6xl"><DentalDisplay>Everything for your smile, one honest price list.</DentalDisplay></h1>
      </div>
      <div className="mt-14 grid gap-6 md:grid-cols-2">
        {SERVICES.map((s) => (
          <div key={s.t} className="rounded-3xl bg-gradient-to-br from-[#EAF6FF] to-white p-8 ring-1 ring-[#0B2A4A]/6">
            <div className="flex items-start justify-between gap-4">
              <div style={{ fontFamily: '"Space Grotesk", sans-serif' }} className="text-2xl font-bold text-[#0B2A4A]">{s.t}</div>
              <div className="rounded-full bg-[#3AB0FF] px-3 py-1 text-xs font-bold text-white">{s.price}</div>
            </div>
            <p className="mt-3 text-[14.5px] text-[#0B2A4A]/75">{s.d}</p>
            <ul className="mt-5 space-y-2 text-[14px] text-[#0B2A4A]/85">
              {s.items.map(i => <li key={i} className="flex items-start gap-2"><span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[#3AB0FF]" />{i}</li>)}
            </ul>
          </div>
        ))}
      </div>
      <div className="mt-14 rounded-3xl bg-[#0B2A4A] p-10 text-center text-white">
        <h2 style={{ fontFamily: '"Space Grotesk", sans-serif' }} className="text-3xl font-bold">Not sure what you need? Book a free consultation.</h2>
        <Link href="/portfolio/smile-care-dental-clinic/book-appointment" className="mt-6 inline-flex rounded-full bg-[#3AB0FF] px-7 py-3.5 text-sm font-bold text-white">Book a free 15-min consult →</Link>
      </div>
    </div>
  );
}
