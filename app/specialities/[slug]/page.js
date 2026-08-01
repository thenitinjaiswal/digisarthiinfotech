// app/specialities/[slug]/page.js
// Dynamic speciality detail landing page (e.g. /specialities/homeopathy, /specialities/dentists).
// Renders specific patient search rationale, pricing, and live portfolio demo CTA with pre-filled WhatsApp link.
// Props: params { slug }

import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowRight, ArrowLeft, MessageCircle, CheckCircle2, Phone } from "lucide-react";
import { SPECIALITIES, WA_URL, INCLUDED, getWaUrl, PHONE, PHONE_TEL } from "@/lib/siteData";
import { PricingTable } from "@/components/PricingTable";
import { SectionHeading } from "@/components/VitalLine";

/**
 * Generate dynamic meta titles and descriptions for each speciality page.
 */
export async function generateMetadata({ params }) {
  const s = SPECIALITIES.find(item => item.slug === params.slug);
  if (!s) return { title: "Speciality Not Found" };

  return {
    title: `${s.tagline} | Digisarthi Info Tech`,
    description: s.copy,
    openGraph: {
      title: `${s.tagline} | Digisarthi Info Tech`,
      description: s.copy,
      url: `/specialities/${s.slug}`,
    },
  };
}

/**
 * Dynamic speciality page component.
 */
export default function SpecialityPage({ params }) {
  const s = SPECIALITIES.find(item => item.slug === params.slug);
  if (!s) notFound();

  const Icon = s.icon;
  const specialityWaUrl = getWaUrl(`Hello Digisarthi Info Tech, I would like to consult about a website for my ${s.label} practice.`);

  return (
    <>
      <section className="border-b border-hairline bg-white py-16 sm:py-20">
        <div className="mx-auto max-w-5xl px-4 sm:px-6">
          <Link href="/specialities" className="inline-flex items-center gap-1.5 text-xs font-semibold text-teal hover:underline">
            <ArrowLeft className="h-3.5 w-3.5" /> All specialities
          </Link>

          <div className="mt-6 flex items-center gap-4">
            <div className="grid h-14 w-14 place-items-center rounded-2xl bg-navy text-white">
              <Icon className="h-6 w-6" />
            </div>
            <div className="font-mono-tabular text-[11px] uppercase tracking-[0.2em] text-teal">Speciality · {s.label}</div>
          </div>

          <h1 className="font-display mt-6 max-w-3xl text-4xl font-semibold leading-[1.1] text-navy sm:text-5xl">
            {s.tagline}.
          </h1>
          <p className="mt-5 max-w-2xl text-base text-ink/75 sm:text-lg">{s.copy}</p>

          <div className="mt-8 flex flex-wrap gap-3">
            <a href={specialityWaUrl} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full bg-navy px-6 py-3 text-sm font-semibold text-white hover:bg-navy/90">
              <MessageCircle className="h-4 w-4" /> Talk to us on WhatsApp
            </a>
            <Link
              href={`/portfolio/${s.portfolioSlug}`}
              className="inline-flex items-center gap-2 rounded-full border border-navy/25 bg-white px-6 py-3 text-sm font-semibold text-navy hover:border-navy"
            >
              See a live example <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      <section className="py-20 sm:py-24">
        <div className="mx-auto max-w-5xl px-4 sm:px-6">
          <SectionHeading
            eyebrow="Why patients search online"
            title={`How ${s.label.toLowerCase()} patients actually find you.`}
            subtitle="Understanding the search — and the anxiety behind it — is half the design brief."
          />
          <div className="mt-10 grid gap-4 md:grid-cols-3">
            {s.patientReasons.map((r, i) => (
              <div key={r} className="rounded-2xl border border-hairline bg-white p-6">
                <div className="font-mono-tabular text-xs text-teal">0{i + 1}</div>
                <p className="mt-3 text-sm text-ink/85">{r}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-hairline bg-white py-20">
        <div className="mx-auto max-w-5xl px-4 sm:px-6">
          <SectionHeading eyebrow="What's included" title="Every build ships with this." />
          <ul className="mt-10 grid gap-3 sm:grid-cols-2">
            {INCLUDED.map(item => (
              <li key={item} className="flex items-start gap-3 rounded-xl border border-hairline bg-background/60 p-4 text-sm text-ink/85">
                <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-teal" /><span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <SectionHeading eyebrow="Pricing" title="Same trusted process. Any speciality." align="center" />
          <div className="mt-12"><PricingTable /></div>
        </div>
      </section>

      <section className="border-t border-hairline bg-white py-20">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 text-center">
          <SectionHeading
            eyebrow="Direct WhatsApp Consultation"
            title={`Ready to bring your ${s.label.toLowerCase()} practice online?`}
            subtitle="Chat directly on WhatsApp with our medical web team. Tap below to launch a chat pre-filled with your enquiry."
            align="center"
          />
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <a
              href={specialityWaUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-[#25D366] px-8 py-3.5 text-sm font-semibold text-white hover:bg-[#22bf5b] transition-colors"
            >
              <MessageCircle className="h-4 w-4" /> Start WhatsApp Chat ({s.label})
            </a>
            <a
              href={PHONE_TEL}
              className="inline-flex items-center gap-2 rounded-full border border-navy/25 bg-white px-8 py-3.5 text-sm font-semibold text-navy hover:border-navy"
            >
              <Phone className="h-4 w-4 text-teal" /> Call {PHONE}
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
