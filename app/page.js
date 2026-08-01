// app/page.js
// Home page component for Digisarthi Info Tech website.
// Includes Hero section, Specialities grid, Why Doctors Need a Website, Included Features,
// Portfolio preview, Pricing overview, Process timeline, Testimonials, and WhatsApp Contact CTA.
// Props: none

import Link from "next/link";
import { ArrowRight, CheckCircle2, Star, MessageCircle, Phone } from "lucide-react";
import {
  SPECIALITIES, WHY_CARDS, INCLUDED, TESTIMONIALS, PROCESS_STEPS,
  PORTFOLIO, WA_URL, PHONE, PHONE_TEL, getWaUrl,
} from "@/lib/siteData";
import { PhoneMockup } from "@/components/PhoneMockup";
import { PricingTable } from "@/components/PricingTable";
import { SectionHeading, VitalLine } from "@/components/VitalLine";

export const metadata = {
  title: "Digisarthi Info Tech — Websites Built Exclusively for Doctors & Clinics",
  description: "We design mobile-first websites for doctors and clinics across every speciality — homeopathy, dentistry, dermatology, pediatrics and more. Turn patient searches into booked appointments.",
  openGraph: {
    title: "Websites Built Exclusively for Doctors & Clinics — Digisarthi Info Tech",
    description: "The web design team built specifically for doctors. Mobile-first websites, WhatsApp booking, local SEO for every speciality.",
    url: "/",
  },
};

/**
 * Main Home page component.
 */
export default function Home() {
  return (
    <>
      <Hero />
      <SpecialitiesStrip />
      <WhyDoctorsNeed />
      <IncludedSection />
      <PortfolioPreview />
      <PricingPreview />
      <ProcessPreview />
      <TestimonialsPreview />
      <ContactCTA />
    </>
  );
}

// Hero banner component highlighting value proposition for doctors
function Hero() {
  return (
    <section className="relative overflow-hidden pt-14 pb-20 sm:pt-20 sm:pb-24">
      <div className="pointer-events-none absolute inset-x-0 top-16 h-40 opacity-[0.09]" aria-hidden="true">
        <VitalLine color="var(--navy)" strokeWidth={1.5} />
      </div>
      <div className="relative mx-auto grid max-w-6xl gap-14 px-4 sm:px-6 md:grid-cols-[1.15fr_0.85fr] md:items-center">
        <div>
          <span className="inline-flex items-center gap-2 rounded-full border border-teal/30 bg-teal/8 px-3 py-1 font-mono-tabular text-[11px] font-medium uppercase tracking-[0.18em] text-teal">
            <span className="h-1.5 w-1.5 rounded-full bg-teal" /> For doctors, only
          </span>
          <h1 className="font-display mt-6 text-4xl font-semibold leading-[1.08] text-navy sm:text-5xl md:text-6xl">
            Websites Built <span className="italic text-teal">Exclusively</span> for Doctors & Clinics.
          </h1>
          <p className="mt-5 max-w-xl text-base text-ink/75 sm:text-lg">
            We turn patient searches into booked appointments — for homeopaths, dentists, dermatologists, pediatricians and every other independent doctor. Mobile-first, WhatsApp-ready, and made for the way patients actually decide today.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a
              href={WA_URL} target="_blank" rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-navy px-6 py-3.5 text-sm font-semibold text-white shadow-lg shadow-navy/15 hover:bg-navy/90 transition-colors"
            >
              <MessageCircle className="h-4 w-4" /> Get Free Consultation
            </a>
            <Link
              href="/portfolio"
              className="inline-flex items-center gap-2 rounded-full border border-navy/25 bg-white px-6 py-3.5 text-sm font-semibold text-navy hover:border-navy transition-colors"
            >
              View our work <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
          <a href={PHONE_TEL} className="mt-6 inline-flex items-center gap-2 font-mono-tabular text-sm text-ink/70 hover:text-navy">
            <Phone className="h-4 w-4 text-teal" /> {PHONE}
          </a>
        </div>
        <div className="relative">
          <PhoneMockup />
        </div>
      </div>
    </section>
  );
}

// Specialities overview grid section
function SpecialitiesStrip() {
  return (
    <section id="specialities" className="border-y border-hairline bg-white/60 py-16">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading
          eyebrow="Every Speciality"
          title="One team. Every speciality of medicine."
          subtitle="We've built for solo homeopaths, five-chair dental clinics and thirty-doctor multi-speciality hospitals. Pick your speciality to see how we approach it."
        />
        <div className="mt-10 grid grid-cols-2 gap-3 sm:grid-cols-4">
          {SPECIALITIES.map(({ slug, label, icon: Icon }) => (
            <Link
              key={slug}
              href={`/specialities/${slug}`}
              className="group rounded-2xl border border-hairline bg-white p-5 text-left transition-all hover:border-teal hover:-translate-y-0.5"
            >
              <div className="grid h-11 w-11 place-items-center rounded-xl bg-navy/6 text-teal group-hover:bg-teal group-hover:text-white transition-colors">
                <Icon className="h-5 w-5" />
              </div>
              <div className="mt-4 font-display text-lg font-semibold text-navy">{label}</div>
              <div className="mt-2 inline-flex items-center gap-1 text-xs text-teal opacity-0 group-hover:opacity-100 transition-opacity">
                See approach <ArrowRight className="h-3 w-3" />
              </div>
            </Link>
          ))}
        </div>
        <div className="mt-8 text-center">
          <Link href="/specialities" className="inline-flex items-center gap-1.5 text-sm font-semibold text-teal hover:underline">
            All specialities <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}

// Section highlighting 4 key benefits of a doctor website
function WhyDoctorsNeed() {
  return (
    <section id="why" className="py-20 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading
          eyebrow="Why a website"
          title="Your best receptionist works 24 hours a day."
          subtitle="Patients decide who to visit long before they call. Here's what a purpose-built website actually does for your practice."
        />
        <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {WHY_CARDS.map((c, i) => (
            <div key={c.title} className="rounded-2xl border border-hairline bg-white p-6">
              <div className="font-mono-tabular text-[11px] text-teal">0{i + 1}</div>
              <h3 className="font-display mt-2 text-xl font-semibold text-navy">{c.title}</h3>
              <p className="mt-3 text-sm text-ink/75">{c.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// Standard inclusions list section
function IncludedSection() {
  return (
    <section id="included" className="border-y border-hairline bg-white py-20 sm:py-24">
      <div className="mx-auto grid max-w-6xl gap-12 px-4 sm:px-6 md:grid-cols-[1fr_1.1fr] md:items-start">
        <div>
          <SectionHeading
            eyebrow="What you get"
            title="Everything a doctor's website should include — nothing you'll never use."
            subtitle="One transparent scope, tuned specifically for medical practices. Every build ships with these as standard."
          />
          <div className="mt-8">
            <Link href="/pricing" className="inline-flex items-center gap-1.5 text-sm font-semibold text-teal hover:underline">
              See what's in each plan <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
        <ul className="grid gap-3 sm:grid-cols-2">
          {INCLUDED.map(item => (
            <li key={item} className="flex items-start gap-3 rounded-xl border border-hairline bg-background/60 p-4 text-sm text-ink/85">
              <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-teal" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

// Portfolio preview card grid section
function PortfolioPreview() {
  return (
    <section id="portfolio" className="py-20 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading
          eyebrow="Portfolio"
          title="Real, click-through demos — not screenshots."
          subtitle="Every one of these is a working website. Click through and browse them the way a patient would."
        />
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {PORTFOLIO.map(p => (
            <Link
              key={p.slug}
              href={`/portfolio/${p.slug}`}
              className="group flex flex-col overflow-hidden rounded-2xl border border-hairline bg-white transition-all hover:navy-shadow hover:-translate-y-0.5"
            >
              <div className={`relative aspect-[4/3] w-full overflow-hidden ${
                p.accent === "terracotta"
                  ? "bg-gradient-to-br from-[oklch(0.75_0.09_45)] via-[oklch(0.82_0.07_50)] to-[oklch(0.9_0.05_60)]"
                  : p.accent === "mint"
                    ? "bg-gradient-to-br from-mint via-teal/60 to-navy/30"
                    : "bg-gradient-to-br from-navy via-navy/80 to-teal/70"
              }`}>
                {p.image && (
                  <>
                    <img
                      src={p.image}
                      alt={`${p.name} website preview`}
                      className="absolute inset-0 h-full w-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />
                  </>
                )}
              </div>
              <div className="p-6">
                <div className="font-mono-tabular text-[10px] uppercase tracking-[0.18em] text-teal">{p.speciality}</div>
                <div className="font-display mt-2 text-xl font-semibold text-navy">{p.name}</div>
                <p className="mt-2 text-sm text-ink/70">{p.tagline}</p>
                <div className="mt-4 inline-flex items-center gap-1 text-xs font-semibold text-teal">
                  View live demo <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
                </div>
              </div>
            </Link>
          ))}

        </div>
      </div>
    </section>
  );
}

// Pricing table overview section
function PricingPreview() {
  return (
    <section id="pricing" className="border-y border-hairline bg-white py-20 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading
          eyebrow="Pricing"
          title="Same trusted process. Any speciality."
          subtitle="Three transparent plans built for how doctors' practices grow — start small, scale when you're ready."
          align="center"
        />
        <div className="mt-12">
          <PricingTable />
        </div>
      </div>
    </section>
  );
}

// Process steps overview section
function ProcessPreview() {
  return (
    <section id="process" className="py-20 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading
          eyebrow="How we build"
          title="From first call to live site — in six calm steps."
          subtitle="No jargon, no surprise invoices. You'll know exactly where your website is on any given day."
        />
        <ol className="mt-12 grid gap-5 md:grid-cols-3">
          {PROCESS_STEPS.map((s, i) => (
            <li key={s.title} className="relative rounded-2xl border border-hairline bg-white p-6">
              <div className="font-mono-tabular text-xs text-teal">Step 0{i + 1}</div>
              <h3 className="font-display mt-2 text-lg font-semibold text-navy">{s.title}</h3>
              <p className="mt-2 text-sm text-ink/75">{s.body}</p>
            </li>
          ))}
        </ol>
        <div className="mt-10 text-center">
          <Link href="/process" className="inline-flex items-center gap-1.5 text-sm font-semibold text-teal hover:underline">
            The full process, expanded <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}

// Doctor testimonials section
function TestimonialsPreview() {
  return (
    <section className="bg-navy py-20 text-white sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="font-mono-tabular text-[11px] uppercase tracking-[0.2em] text-mint">In doctors' own words</div>
        <h2 className="font-display mt-3 max-w-3xl text-3xl font-semibold sm:text-4xl">
          A few of the doctors we've helped bring online.
        </h2>
        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {TESTIMONIALS.map(t => (
            <blockquote key={t.name} className="rounded-2xl bg-white/6 p-6 backdrop-blur">
              <div className="flex gap-0.5 text-mint">
                {[0,1,2,3,4].map(i => <Star key={i} className="h-4 w-4 fill-current" />)}
              </div>
              <p className="mt-4 text-sm leading-relaxed text-white/85">"{t.quote}"</p>
              <footer className="mt-5 text-xs">
                <div className="font-semibold text-white">{t.name}</div>
                <div className="text-mint/90">{t.role}</div>
              </footer>
            </blockquote>
          ))}
        </div>
        <div className="mt-10">
          <Link href="/testimonials" className="inline-flex items-center gap-1.5 text-sm font-semibold text-mint hover:underline">
            Read every review <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}

// Direct WhatsApp CTA section replacing manual form
function ContactCTA() {
  return (
    <section id="contact" className="py-20 sm:py-24">
      <div className="mx-auto max-w-4xl px-4 text-center sm:px-6">
        <SectionHeading
          eyebrow="Direct Consultation"
          title="Chat directly with our website team on WhatsApp."
          subtitle="Skip forms and waiting. Tap below to open a direct WhatsApp conversation pre-filled with your enquiry."
          align="center"
        />

        <div className="mt-10 rounded-3xl border border-teal/20 bg-gradient-to-br from-white via-background to-teal/5 p-8 shadow-xl navy-shadow sm:p-12">
          <div className="mx-auto grid h-16 w-16 place-items-center rounded-2xl bg-[#25D366] text-white shadow-lg shadow-[#25D366]/30">
            <MessageCircle className="h-8 w-8" />
          </div>
          <h3 className="font-display mt-6 text-2xl font-semibold text-navy sm:text-3xl">
            Ready to bring your practice online?
          </h3>
          <p className="mx-auto mt-3 max-w-lg text-sm text-ink/75 sm:text-base">
            Clicking below opens WhatsApp with a pre-formatted message. We usually reply within an hour during working days.
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <a
              href={WA_URL}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2.5 rounded-full bg-[#25D366] px-8 py-4 text-base font-semibold text-white shadow-lg shadow-[#25D366]/25 hover:bg-[#22bf5b] transition-all hover:scale-[1.02]"
            >
              <MessageCircle className="h-5 w-5" /> Chat on WhatsApp now
            </a>
            <a
              href={PHONE_TEL}
              className="inline-flex items-center gap-2.5 rounded-full border border-navy/25 bg-white px-8 py-4 text-base font-semibold text-navy hover:border-navy transition-colors"
            >
              <Phone className="h-5 w-5 text-teal" /> Call {PHONE}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
