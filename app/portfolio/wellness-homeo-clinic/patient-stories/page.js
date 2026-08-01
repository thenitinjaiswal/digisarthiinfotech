// app/portfolio/wellness-homeo-clinic/patient-stories/page.js
// Patient testimonials & long-form stories page for Wellness Homeo Clinic.
// Props: none

import { HomeoDisplay, homeoBlob } from "../layout";

const STORIES = [
  { name: "Priya S.", city: "Kothrud, Pune", years: "Patient since 2019", body: "My daughter Aanya had eczema from the age of two. We had tried three dermatologists and countless steroid creams before a friend recommended Dr. Sharma. It took six months of patient work — no dramatic promises, no quick fixes — and her skin is finally clear. She's eight now, and she hasn't had a flare in over a year." },
  { name: "Mahesh V.", city: "Aundh, Pune", years: "Patient since 2021", body: "I've had migraines for fifteen years. Painkillers stopped working, and the neurologist wanted to start me on daily preventives. Dr. Sharma took an hour on the first visit — asked me about my childhood, my sleep, my temper. The remedy he chose reduced my attacks from three a week to maybe one a month. I still can't quite explain it, but I don't need to." },
  { name: "Anita & Ramesh R.", city: "FC Road, Pune", years: "Family patients since 2010", body: "We were his patients first, then our children, and now our grandchildren. Three generations under one gentle, honest, unhurried practitioner. He'll tell you when homeopathy isn't the right route — that honesty is what has kept our whole family loyal for over a decade." },
];

export const metadata = {
  title: "Patient Stories — Wellness Homeo Clinic",
  description: "Long-form stories from families we've walked with — skin, chronic, and multi-generational care.",
  openGraph: {
    title: "Patient Stories — Wellness Homeo",
    description: "Three real families, decades of care.",
  },
};

/**
 * Patient stories page component.
 */
export default function PatientStories() {
  return (
    <div className="mx-auto max-w-4xl px-5 py-20 sm:px-8 sm:py-28">
      <h1 className="text-4xl leading-tight text-[#2F4A3D] sm:text-5xl"><HomeoDisplay>Stories from our patients.</HomeoDisplay></h1>
      <p className="mt-5 max-w-2xl text-[15px] leading-relaxed text-[#26312B]/75">Names used with permission. Every story is in a family's own words — lightly edited for clarity, never for effect.</p>
      <div className="mt-16 space-y-16">
        {STORIES.map((s) => (
          <article key={s.name} className="grid gap-8 md:grid-cols-[0.4fr_1fr]">
            <div>
              <div style={{ borderRadius: homeoBlob }} className="aspect-square w-full bg-gradient-to-br from-[#B8735A]/40 to-[#2F4A3D]/70" />
              <div style={{ fontFamily: '"Domine", Georgia, serif' }} className="mt-5 text-xl text-[#2F4A3D]">{s.name}</div>
              <div className="text-[13px] text-[#26312B]/70">{s.city}</div>
              <div className="mt-1 text-[11px] uppercase tracking-[0.2em] text-[#B8735A]">{s.years}</div>
            </div>
            <div className="text-[16px] leading-[1.85] text-[#26312B]/88">
              <span style={{ fontFamily: '"Domine", Georgia, serif' }} className="mr-2 text-4xl text-[#B8735A]/60">"</span>
              {s.body}
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
