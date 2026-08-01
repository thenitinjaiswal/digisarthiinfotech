// components/DemoBadge.js
// Floating badge component for live portfolio demo pages indicating demo status.
// Links back to /portfolio overview.
// Props: none

import Link from "next/link";

/**
 * Floating indicator badge component for live demo sites.
 */
export function DemoBadge() {
  return (
    <Link
      href="/portfolio"
      className="fixed left-4 top-4 z-50 inline-flex items-center gap-2 rounded-full bg-[#1E3A5F] px-3.5 py-1.5 text-[11px] font-semibold uppercase tracking-wider text-white shadow-lg shadow-black/20 transition-transform hover:-translate-y-0.5"
      aria-label="Live demo built by Digisarthi Info Tech — back to portfolio"
    >
      <span className="h-1.5 w-1.5 rounded-full bg-[#6FCF97]" />
      Live Demo · Built by Digisarthi
    </Link>
  );
}
