// app/portfolio/smile-care-dental-clinic/smile-gallery/page.js
// Interactive before/after smile gallery for Smile Care Dental Clinic demo site.
// Features category filter buttons and unretouched treatment cases.
// Props: none

'use client';

import { useState } from "react";
import { DentalDisplay } from "../layout";

const CASES = [
  { n: "Aditi, 28", tx: "Invisible aligners · 14 months", note: "Mild crowding on lower front teeth, corrected without extractions." },
  { n: "Rohan, 35", tx: "Single-tooth implant · 3 sessions", note: "Lost upper premolar to trauma. Straumann implant, zirconia crown." },
  { n: "Meera, 42", tx: "Whitening + 6 veneers", note: "Old composites replaced with porcelain veneers, full whitening protocol." },
  { n: "Karan, 30", tx: "Full smile makeover", note: "Gum contouring, 8 veneers and whitening — completed in 5 visits." },
  { n: "Priya, 45", tx: "All-on-4 upper", note: "Full upper arch replaced with implant-supported bridge." },
  { n: "Amit, 22", tx: "Aligners · 10 months", note: "Spacing between upper incisors closed with Invisalign®." },
];

/**
 * Filterable smile transformation gallery component.
 */
export default function Gallery() {
  const [filter, setFilter] = useState("All");
  const filters = ["All", "Aligners", "Implants", "Veneers", "Whitening"];
  const shown = filter === "All" ? CASES : CASES.filter(c => c.tx.toLowerCase().includes(filter.toLowerCase()));

  return (
    <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8 sm:py-28">
      <div className="text-[11px] font-bold uppercase tracking-wider text-[#3AB0FF]">Smile Gallery</div>
      <h1 className="mt-4 max-w-3xl text-5xl font-bold tracking-tight text-[#0B2A4A] sm:text-6xl"><DentalDisplay>Real people. Real transformations.</DentalDisplay></h1>
      <p className="mt-5 max-w-xl text-[15.5px] text-[#0B2A4A]/70">Shared with our patients' permission. Every photo is unretouched.</p>
      
      <div className="mt-10 flex flex-wrap gap-2">
        {filters.map(f => (
          <button key={f} onClick={() => setFilter(f)} className={`rounded-full px-4 py-2 text-xs font-bold transition ${filter === f ? "bg-[#3AB0FF] text-white" : "bg-[#EAF6FF] text-[#0B2A4A] hover:bg-[#DDECFA]"}`}>{f}</button>
        ))}
      </div>

      <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {shown.map(c => (
          <figure key={c.n} className="overflow-hidden rounded-3xl bg-white ring-1 ring-[#0B2A4A]/8">
            <div className="grid grid-cols-2">
              <div className="relative aspect-square bg-gradient-to-br from-[#0B2A4A]/50 to-[#0B2A4A]/80">
                <span className="absolute left-3 top-3 rounded-full bg-white/90 px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wider text-[#0B2A4A]">Before</span>
              </div>
              <div className="relative aspect-square bg-gradient-to-br from-[#3AB0FF] to-[#5CC8FF]">
                <span className="absolute right-3 top-3 rounded-full bg-white/95 px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wider text-[#3AB0FF]">After</span>
              </div>
            </div>
            <figcaption className="p-5">
              <div style={{ fontFamily: '"Space Grotesk", sans-serif' }} className="text-lg font-bold">{c.n}</div>
              <div className="text-xs font-semibold uppercase tracking-wider text-[#3AB0FF]">{c.tx}</div>
              <p className="mt-2 text-sm text-[#0B2A4A]/75">{c.note}</p>
            </figcaption>
          </figure>
        ))}
      </div>
    </div>
  );
}
