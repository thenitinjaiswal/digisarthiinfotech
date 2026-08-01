// app/portfolio/multi-speciality-clinic/page.js
// Home page for Meridian Health Multi-Speciality Clinic demo site (Institutional Trust genre).
// Features departments overview, key clinic stats, physician-authored health articles, and appointment CTA.
// Props: none

import Link from "next/link";
import { HeartPulse, Baby, Stethoscope, Bone, Brain, Users, ArrowRight } from "lucide-react";
import { MscDisplay, IndexRule } from "./layout";

export const metadata = {
  title: "Meridian Health — Multi-Speciality Clinic in Pune since 1998",
  description: "18 specialities under one roof, 42 consultants, NABH-accredited care for Pune families since 1998.",
  openGraph: {
    title: "Meridian Health · Multi-Speciality Clinic",
    description: "Trusted multi-speciality care since 1998.",
    type: "website",
  },
};

const DEPTS = [
  { i: Stethoscope, t: "Internal Medicine", d: "Comprehensive adult care" },
  { i: HeartPulse, t: "Cardiology", d: "ECG · 2D Echo · Stress test" },
  { i: Baby, t: "Paediatrics", d: "Newborn to adolescent care" },
  { i: Bone, t: "Orthopaedics", d: "Joint & spine specialists" },
  { i: Users, t: "Gynaecology", d: "Women's health across life stages" },
  { i: Brain, t: "Neurology", d: "Headache clinic & consultation" },
];

/**
 * Meridian Health Multi-Speciality Clinic homepage component.
 */
export default function MSCHome() {
  return (
    <>
      <section className="border-b border-[#0F2340]/10 bg-[#F5F1EA]">
        <div className="mx-auto grid max-w-7xl gap-14 px-5 py-20 sm:px-8 md:grid-cols-[1.4fr_1fr] md:py-28">
          <div>
            <div className="text-[11px] font-semibold uppercase tracking-[0.24em] text-[#8A6D3B]">01 / Established 1998 · Pune</div>
            <h1 className="mt-6 text-5xl leading-[1.02] tracking-tight text-[#0F2340] sm:text-7xl"><MscDisplay>Three generations of Pune families have trusted us with their health.</MscDisplay></h1>
            <p className="mt-8 max-w-xl text-[16px] leading-relaxed text-[#0F2340]/72">Eighteen specialities under one roof. Forty-two consultants. NABH-accredited care delivered with the calm attentiveness of a family doctor.</p>
            <div className="mt-10 flex flex-wrap gap-3">
              <Link href="/portfolio/multi-speciality-clinic/book-appointment" className="inline-flex items-center gap-2 rounded-sm bg-[#0F2340] px-7 py-3.5 text-sm font-semibold text-white">Book an appointment <ArrowRight className="h-4 w-4" /></Link>
              <Link href="/portfolio/multi-speciality-clinic/our-doctors" className="inline-flex items-center gap-2 rounded-sm border border-[#0F2340]/25 px-7 py-3.5 text-sm font-semibold text-[#0F2340] hover:bg-[#0F2340]/5">Meet our doctors</Link>
            </div>
          </div>
          <div className="relative">
            <div className="aspect-[3/4] w-full bg-gradient-to-br from-[#0F2340] via-[#1a3556] to-[#8A6D3B]/40" />
            <div className="absolute -bottom-6 -left-6 bg-[#F5F1EA] p-6 shadow-lg ring-1 ring-[#0F2340]/10">
              <div style={{ fontFamily: '"Source Serif 4", Georgia, serif' }} className="text-4xl font-semibold text-[#0F2340]">28 years</div>
              <div className="mt-1 text-xs uppercase tracking-[0.22em] text-[#8A6D3B]">of unbroken care</div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="flex items-baseline justify-between gap-6"><div className="text-[11px] font-semibold uppercase tracking-[0.24em] text-[#8A6D3B]">02 / Our departments</div><Link href="/portfolio/multi-speciality-clinic/departments" className="text-sm font-semibold text-[#0F2340] hover:text-[#8A6D3B]">All 18 departments →</Link></div>
          <h2 className="mt-6 max-w-3xl text-4xl tracking-tight text-[#0F2340] sm:text-5xl"><MscDisplay>Whatever the concern, we have a specialist who has seen it before.</MscDisplay></h2>
          <IndexRule className="mt-12" />
          <div className="grid divide-y divide-[#0F2340]/10 md:grid-cols-2 md:divide-x md:divide-y-0">
            {DEPTS.map(({ i: Icon, t, d }, i) => (
              <Link key={t} href="/portfolio/multi-speciality-clinic/departments" className={`group flex items-start gap-6 py-8 md:px-8 ${i >= 2 ? "md:border-t md:border-[#0F2340]/10" : ""}`}>
                <div className="grid h-14 w-14 shrink-0 place-items-center rounded-sm bg-[#0F2340] text-white"><Icon className="h-6 w-6" /></div>
                <div className="flex-1">
                  <div className="text-[10px] font-semibold uppercase tracking-[0.24em] text-[#8A6D3B]">Department 0{i+1}</div>
                  <div style={{ fontFamily: '"Source Serif 4", Georgia, serif' }} className="mt-1 text-2xl text-[#0F2340] group-hover:text-[#8A6D3B]">{t}</div>
                  <p className="mt-1 text-sm text-[#0F2340]/70">{d}</p>
                </div>
                <ArrowRight className="mt-2 h-5 w-5 text-[#0F2340]/40 transition group-hover:translate-x-1 group-hover:text-[#8A6D3B]" />
              </Link>
            ))}
          </div>
          <IndexRule />
        </div>
      </section>

      <section className="bg-[#0F2340] py-20 text-white">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="text-[11px] font-semibold uppercase tracking-[0.24em] text-[#8A6D3B]">03 / By the numbers</div>
          <IndexRule className="mt-6 bg-white/20" />
          <div className="mt-10 grid gap-10 md:grid-cols-4">
            {[["1,20,000+","Patient consultations"],["42","Specialist consultants"],["18","Medical specialities"],["24×7","Emergency response"]].map(([n,l]) => (
              <div key={l}>
                <div style={{ fontFamily: '"Source Serif 4", Georgia, serif' }} className="text-6xl font-semibold">{n}</div>
                <div className="mt-2 text-xs uppercase tracking-[0.22em] text-white/70">{l}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="mx-auto grid max-w-7xl gap-14 px-5 sm:px-8 md:grid-cols-[0.9fr_1.2fr]">
          <div>
            <div className="text-[11px] font-semibold uppercase tracking-[0.24em] text-[#8A6D3B]">04 / From our journal</div>
            <h2 className="mt-6 text-4xl tracking-tight text-[#0F2340] sm:text-5xl"><MscDisplay>Physician-authored health articles.</MscDisplay></h2>
            <p className="mt-5 max-w-md text-[15px] text-[#0F2340]/70">Every article is written by one of our consultants and peer-reviewed by two others. No AI, no sponsored content.</p>
            <Link href="/portfolio/multi-speciality-clinic/health-articles" className="mt-6 inline-flex text-sm font-semibold text-[#0F2340] hover:text-[#8A6D3B]">Read all articles →</Link>
          </div>
          <div className="space-y-6">
            {[
              { t: "Understanding hypertension in your 40s", a: "Dr. Amit Deshpande, Cardiology" },
              { t: "When should your child see an allergist?", a: "Dr. Neha Kulkarni, Paediatrics" },
              { t: "Managing chronic knee pain without surgery", a: "Dr. Sanjay Kapoor, Orthopaedics" },
            ].map((p) => (
              <article key={p.t} className="group border-t border-[#0F2340]/12 pt-6">
                <div className="text-[10px] font-semibold uppercase tracking-[0.22em] text-[#8A6D3B]">{p.a}</div>
                <h3 style={{ fontFamily: '"Source Serif 4", Georgia, serif' }} className="mt-2 text-2xl text-[#0F2340] group-hover:text-[#8A6D3B]">{p.t}</h3>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
