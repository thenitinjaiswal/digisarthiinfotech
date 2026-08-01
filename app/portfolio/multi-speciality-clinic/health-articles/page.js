// app/portfolio/multi-speciality-clinic/health-articles/page.js
// Physician-authored medical journal articles page for Meridian Health.
// Props: none

import { MscDisplay, IndexRule } from "../layout";

const ARTICLES = [
  { t: "Understanding hypertension in your 40s: what the numbers actually mean", a: "Dr. Amit Deshpande", dept: "Cardiology", date: "18 March 2026", read: "8 min read", ex: "Blood-pressure ranges have changed. Here's what your latest reading really tells you — and when to worry." },
  { t: "When should your child see an allergist?", a: "Dr. Neha Kulkarni", dept: "Paediatrics", date: "02 March 2026", read: "6 min read", ex: "Recurring rashes, unexplained tummy aches, or reactions after meals? A practical guide for parents." },
  { t: "Managing chronic knee pain without surgery", a: "Dr. Sanjay Kapoor", dept: "Orthopaedics", date: "14 February 2026", read: "10 min read", ex: "Physiotherapy, PRP, and cartilage-preserving procedures — a decade of evidence, one honest overview." },
  { t: "PCOS and pregnancy: what we tell our patients", a: "Dr. Priya Menon", dept: "Gynaecology", date: "28 January 2026", read: "9 min read", ex: "Fertility conversations often begin with fear. They needn't. A calm, evidence-first walk-through." },
  { t: "The 24-hour blood-sugar rhythm nobody explains", a: "Dr. Ananya Sen", dept: "Endocrinology", date: "12 January 2026", read: "7 min read", ex: "Why your fasting number can look fine while afternoons feel awful — and what to actually do about it." },
  { t: "Sleep apnoea: the silent condition behind fatigue", a: "Dr. Farhan Sheikh", dept: "Pulmonology", date: "05 January 2026", read: "8 min read", ex: "One in every five middle-aged adults has it. Most don't know. A short primer on screening and treatment." },
];

export const metadata = {
  title: "Health Articles — Meridian Health Journal",
  description: "Physician-authored health articles from Meridian Health consultants. Peer-reviewed, no AI, no sponsored content.",
  openGraph: {
    title: "The Meridian Health Journal",
    description: "Physician-authored health articles.",
  },
};

/**
 * Physician-authored health articles journal page component.
 */
export default function HealthArticles() {
  return (
    <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8 sm:py-28">
      <div className="text-[11px] font-semibold uppercase tracking-[0.24em] text-[#8A6D3B]">The Meridian Journal · Vol. VII</div>
      <h1 className="mt-4 max-w-3xl text-5xl tracking-tight text-[#0F2340] sm:text-6xl"><MscDisplay>Written by physicians. Peer-reviewed by two more.</MscDisplay></h1>
      <IndexRule className="mt-14" />
      <div className="divide-y divide-[#0F2340]/10">
        {ARTICLES.map((a, i) => (
          <article key={a.t} className="grid gap-6 py-10 md:grid-cols-[80px_1fr_180px]">
            <div className="text-[11px] font-semibold uppercase tracking-[0.22em] text-[#8A6D3B]">Art · {String(i+1).padStart(2,"0")}</div>
            <div>
              <h2 style={{ fontFamily: '"Source Serif 4", Georgia, serif' }} className="text-2xl leading-tight text-[#0F2340] hover:text-[#8A6D3B] sm:text-3xl">{a.t}</h2>
              <p className="mt-3 text-[14.5px] text-[#0F2340]/72">{a.ex}</p>
              <div className="mt-4 text-[12.5px] text-[#0F2340]/60">By {a.a} · {a.dept}</div>
            </div>
            <div className="text-right text-[11.5px] uppercase tracking-[0.2em] text-[#0F2340]/60">
              <div>{a.date}</div>
              <div className="mt-1">{a.read}</div>
            </div>
          </article>
        ))}
      </div>
      <IndexRule />
    </div>
  );
}
