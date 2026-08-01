// app/portfolio/smile-care-dental-clinic/page.js
// Home page for Smile Care Dental Clinic demo site (Bright Confidence genre).
// Features painless dentistry branding, services cards, smile transformations preview, and stats.
// Props: none

import Link from "next/link";
import { Sparkles, ShieldCheck, Clock, Award, Star } from "lucide-react";
import { DentalDisplay, SmileCurve } from "./layout";

export const metadata = {
  title: "Smile Care Dental Clinic — Modern dentistry in Kothrud, Pune",
  description: "Painless dentistry, sparkling smiles. Book online in 30 seconds — implants, aligners, whitening and family dental care.",
  openGraph: {
    title: "Smile Care Dental Clinic",
    description: "Modern, painless dentistry in Pune.",
    type: "website",
  },
};

const SERVICES = [
  { i: Sparkles, t: "Teeth Whitening", d: "Zoom!® in-office whitening — six shades brighter in one visit." },
  { i: ShieldCheck, t: "Dental Implants", d: "Titanium implants with lifetime warranty." },
  { i: Award, t: "Invisible Aligners", d: "Clear aligners for adults and teens." },
  { i: Sparkles, t: "Cosmetic Dentistry", d: "Veneers, smile design and gum contouring." },
  { i: ShieldCheck, t: "Root Canals", d: "Single-sitting RCT with rotary endodontics." },
  { i: Clock, t: "Family Dentistry", d: "Cleanings, fillings and preventive care for all ages." },
];

/**
 * Smile Care Dental Clinic homepage component.
 */
export default function DentalHome() {
  return (
    <>
      <section className="relative overflow-hidden bg-gradient-to-b from-[#EAF6FF] via-white to-white">
        <div className="mx-auto grid max-w-7xl gap-12 px-5 py-20 sm:px-8 md:grid-cols-[1.1fr_1fr] md:items-center md:py-28">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full bg-white px-3.5 py-1.5 text-[11px] font-semibold uppercase tracking-wider text-[#3AB0FF] shadow-sm ring-1 ring-[#3AB0FF]/25">✦ Painless · Modern · Trusted since 2015</span>
            <h1 className="mt-6 text-5xl font-bold leading-[1.05] tracking-tight text-[#0B2A4A] sm:text-6xl"><DentalDisplay>Sparkling smiles.<br /><span className="text-[#3AB0FF]">Zero anxiety.</span></DentalDisplay></h1>
            <p className="mt-6 max-w-lg text-[15.5px] leading-relaxed text-[#0B2A4A]/70">Modern dentistry that feels less like a clinic and more like a spa. Same-day appointments, transparent pricing, and dentists who actually listen.</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link href="/portfolio/smile-care-dental-clinic/book-appointment" className="rounded-full bg-[#3AB0FF] px-6 py-3.5 text-sm font-bold text-white shadow-lg shadow-[#3AB0FF]/30 transition hover:-translate-y-0.5">Book online in 30 seconds →</Link>
              <Link href="/portfolio/smile-care-dental-clinic/smile-gallery" className="rounded-full border-2 border-[#0B2A4A]/15 bg-white px-6 py-3.5 text-sm font-bold text-[#0B2A4A] hover:border-[#3AB0FF]">See smile transformations</Link>
            </div>
            <div className="mt-10 flex items-center gap-6 text-sm text-[#0B2A4A]/70">
              <div className="flex gap-0.5 text-[#F5B301]">{[0,1,2,3,4].map(i => <Star key={i} className="h-4 w-4 fill-current" />)}</div>
              <div><span className="font-bold text-[#0B2A4A]">4.9</span> · 480+ Google reviews</div>
            </div>
          </div>
          <div className="relative">
            <div className="relative overflow-hidden rounded-[2.5rem] bg-gradient-to-br from-[#3AB0FF] via-[#5CC8FF] to-[#EAF6FF] p-8 shadow-2xl shadow-[#3AB0FF]/20">
              <div className="aspect-[4/5] rounded-3xl bg-white/40 backdrop-blur" />
              <SmileCurve className="absolute inset-x-8 bottom-16 text-white" />
            </div>
            <div className="absolute -bottom-6 -left-6 rounded-2xl bg-white p-4 shadow-xl ring-1 ring-black/5">
              <div className="text-[10px] font-bold uppercase tracking-wider text-[#3AB0FF]">Same-day</div>
              <div style={{ fontFamily: '"Space Grotesk", sans-serif' }} className="text-2xl font-bold">Appointments</div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="flex items-end justify-between gap-6">
            <h2 className="max-w-xl text-4xl font-bold tracking-tight text-[#0B2A4A] sm:text-5xl"><DentalDisplay>Everything your smile needs.<span className="text-[#3AB0FF]">.</span></DentalDisplay></h2>
            <Link href="/portfolio/smile-care-dental-clinic/services" className="hidden text-sm font-bold text-[#3AB0FF] sm:inline">All services →</Link>
          </div>
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {SERVICES.map(({ i: Icon, t, d }) => (
              <div key={t} className="group rounded-3xl bg-gradient-to-br from-[#EAF6FF] to-white p-7 ring-1 ring-[#0B2A4A]/5 transition hover:-translate-y-1 hover:shadow-xl">
                <div className="grid h-12 w-12 place-items-center rounded-2xl bg-[#3AB0FF] text-white shadow-md shadow-[#3AB0FF]/30"><Icon className="h-6 w-6" /></div>
                <div style={{ fontFamily: '"Space Grotesk", sans-serif' }} className="mt-5 text-xl font-bold text-[#0B2A4A]">{t}</div>
                <p className="mt-2 text-[14px] text-[#0B2A4A]/70">{d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#0B2A4A] py-20 text-white">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="grid gap-10 md:grid-cols-4">
            {[["15,000+","Smiles restored"],["12","Specialist dentists"],["4.9★","Google rating"],["2015","Serving Pune since"]].map(([n,l]) => (
              <div key={l}>
                <div style={{ fontFamily: '"Space Grotesk", sans-serif' }} className="text-5xl font-bold text-[#3AB0FF]">{n}</div>
                <div className="mt-2 text-sm opacity-80">{l}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <h2 className="text-center text-4xl font-bold tracking-tight text-[#0B2A4A] sm:text-5xl"><DentalDisplay>Real smiles. Real transformations.</DentalDisplay></h2>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {[["Aditi, 28","Aligners · 14 months"],["Rohan, 35","Implants · 3 sessions"],["Meera, 42","Whitening + Veneers"]].map(([n,tx]) => (
              <div key={n} className="overflow-hidden rounded-3xl bg-white ring-1 ring-[#0B2A4A]/8">
                <div className="grid grid-cols-2">
                  <div className="aspect-square bg-gradient-to-br from-[#0B2A4A]/40 to-[#0B2A4A]/70" />
                  <div className="aspect-square bg-gradient-to-br from-[#3AB0FF] to-[#5CC8FF]" />
                </div>
                <div className="p-5">
                  <div style={{ fontFamily: '"Space Grotesk", sans-serif' }} className="text-lg font-bold">{n}</div>
                  <div className="text-sm text-[#0B2A4A]/70">{tx}</div>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-10 text-center"><Link href="/portfolio/smile-care-dental-clinic/smile-gallery" className="inline-flex rounded-full bg-[#3AB0FF] px-6 py-3.5 text-sm font-bold text-white">See the full gallery →</Link></div>
        </div>
      </section>
    </>
  );
}
