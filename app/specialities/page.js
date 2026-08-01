// app/specialities/page.js
// Specialities index page displaying all supported medical specialities.
// Props: none

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { SPECIALITIES } from "@/lib/siteData";
import { SectionHeading } from "@/components/VitalLine";

export const metadata = {
  title: "Every Speciality — Websites for Doctors | Digisarthi Info Tech",
  description: "We build websites for every medical speciality — homeopathy, dentists, general physicians, dermatologists, pediatricians, gynecologists, orthopedics and ayurveda.",
  openGraph: {
    title: "Websites for Every Medical Speciality — Digisarthi Info Tech",
    description: "One studio, every speciality. See our approach to each type of practice.",
    url: "/specialities",
  },
};

/**
 * Specialities catalogue list page component.
 */
export default function SpecialitiesIndex() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6 sm:py-24">
      <SectionHeading
        eyebrow="Every Speciality"
        title="One studio, every speciality of medicine."
        subtitle="Pick your speciality. We'll show you how we think about websites for practices like yours — the search behaviour, the design tone, the features that matter."
      />
      <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {SPECIALITIES.map(({ slug, label, icon: Icon, tagline }) => (
          <Link
            key={slug}
            href={`/specialities/${slug}`}
            className="group flex flex-col rounded-2xl border border-hairline bg-white p-6 transition-all hover:border-teal hover:-translate-y-0.5 hover:navy-shadow"
          >
            <div className="grid h-12 w-12 place-items-center rounded-xl bg-navy/6 text-teal">
              <Icon className="h-5 w-5" />
            </div>
            <div className="font-display mt-5 text-xl font-semibold text-navy">{label}</div>
            <p className="mt-2 text-sm text-ink/70 flex-1">{tagline}</p>
            <div className="mt-4 inline-flex items-center gap-1 text-xs font-semibold text-teal">
              See approach <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
