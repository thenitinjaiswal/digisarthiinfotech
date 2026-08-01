// components/SpecialityCard.js
// Interactive speciality card component linking to specific speciality landing page.
// Props: speciality object containing slug, label, icon, tagline

import Link from "next/link";
import { ArrowRight } from "lucide-react";

/**
 * Card component representing a medical speciality.
 */
export function SpecialityCard({ speciality }) {
  const { slug, label, icon: Icon, tagline } = speciality;

  return (
    <Link
      href={`/specialities/${slug}`}
      className="group flex flex-col rounded-2xl border border-hairline bg-white p-6 transition-all hover:border-teal hover:-translate-y-0.5 hover:navy-shadow"
    >
      <div className="grid h-12 w-12 place-items-center rounded-xl bg-navy/6 text-teal group-hover:bg-teal group-hover:text-white transition-colors">
        <Icon className="h-5 w-5" />
      </div>
      <div className="font-display mt-5 text-xl font-semibold text-navy">{label}</div>
      <p className="mt-2 text-sm text-ink/70 flex-1">{tagline}</p>
      <div className="mt-4 inline-flex items-center gap-1 text-xs font-semibold text-teal">
        See approach <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
      </div>
    </Link>
  );
}
