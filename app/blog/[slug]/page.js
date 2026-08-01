// app/blog/[slug]/page.js
// Dynamic blog post article page.
// Renders article content body with formatted bold text and schema markup.
// Props: params { slug }

import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, Clock } from "lucide-react";
import { BLOG_POSTS } from "@/lib/siteData";

const BODIES = {
  "why-doctors-need-a-website-2026": [
    "For decades, doctors grew their practices through word-of-mouth and neighbourhood familiarity. In 2026, that first recommendation still matters — but the second thing every patient does is search your name on Google.",
    "**1. Patients decide before they call.** A patient with a stubborn skin condition, a child's fever, or a persistent backache reads for hours before picking up the phone. If your website isn't there — or looks unprofessional — they call someone else.",
    "**2. Your clinic doesn't sleep on the internet.** Even at 11pm on a Sunday, a patient can visit your website, read your credentials, and book an appointment via WhatsApp. That's twenty extra 'appointments' a month for many clinics.",
    "**3. Google is your new signboard.** More patients search 'dentist near me' than walk past your clinic. Without a website and a Google Business Profile, you're invisible in the very moment patients are ready to book.",
    "**4. Trust is visual.** A polished, honest website — with your photo, credentials, timings and a clear map — tells patients you take your practice seriously. That's not marketing, that's respect for their decision.",
    "**5. Insurance, corporate tie-ups and referrals ask for it.** Empanelment forms, referral portals and even other doctors increasingly expect a link. \"Please share your website\" is not a question you want to fumble.",
    "If you're a doctor in independent practice or running a small clinic in 2026, a website is no longer optional. It's the least-expensive receptionist you'll ever hire.",
  ],
  "how-patients-search-for-clinics-near-them": [
    "Type 'dentist' into Google from your phone right now. Watch what happens: a map appears, three clinics show up with photos and star ratings, and only then do the blue links begin. That map is where new patients are choosing.",
    "**How Google decides who to show.** Three factors matter most: how close the clinic is to the patient, how relevant its listing is to what they searched, and how prominent it is (reviews, website quality, mentions on other sites).",
    "**The three things every doctor should do.** First, claim and fully complete your Google Business Profile — photos, hours, services, phone. Second, build a website that clearly states your speciality, location and services on the home page. Third, ask satisfied patients for honest Google reviews.",
    "**What most doctors get wrong.** They set up a Google listing once and forget it. They use a generic website that doesn't mention their neighbourhood. And they never ask for reviews — leaving all the visible ratings to a few angry patients.",
    "Show up where patients search, and half your marketing is done. The other half is a website that finishes the job.",
  ],
  "whatsapp-booking-for-small-clinics": [
    "Ask any small clinic what fills its appointment book on a slow week, and the honest answer is: WhatsApp. Not the website form, not the phone line — WhatsApp.",
    "**Why patients prefer chat.** A form feels like paperwork. A phone call feels like commitment. A WhatsApp message feels like asking a friend. For nervous, first-time patients, that difference is enormous.",
    "**What a good WhatsApp flow looks like.** A single button on every page of your website — 'Book on WhatsApp'. It opens a chat pre-filled with a friendly line: 'Hello, I'd like to book an appointment.' Your receptionist replies with two or three slot options. Done in ninety seconds.",
    "**Automation for busier clinics.** Platinum-tier setups add an auto-reply for after hours — 'Thanks for messaging Wellness Homeo Clinic. We're closed right now. Please send your name, age, and concern, and Dr. Sharma's team will confirm your appointment first thing tomorrow.'",
    "For small clinics, WhatsApp isn't a gimmick — it's the front desk. Build your website to feed it, and watch your appointment book fill up.",
  ],
};

export async function generateMetadata({ params }) {
  const p = BLOG_POSTS.find(item => item.slug === params.slug);
  if (!p) return { title: "Article Not Found" };

  return {
    title: `${p.title} | Digisarthi Info Tech`,
    description: p.excerpt,
    openGraph: {
      title: p.title,
      description: p.excerpt,
      type: "article",
      url: `/blog/${params.slug}`,
    },
  };
}

/**
 * Single blog post component.
 */
export default function BlogPost({ params }) {
  const p = BLOG_POSTS.find(item => item.slug === params.slug);
  if (!p) notFound();

  const body = BODIES[p.slug] ?? [p.excerpt];

  return (
    <article className="mx-auto max-w-3xl px-4 py-20 sm:px-6 sm:py-24">
      <Link href="/blog" className="inline-flex items-center gap-1.5 text-xs font-semibold text-teal hover:underline">
        <ArrowLeft className="h-3.5 w-3.5" /> All articles
      </Link>
      
      <div className="mt-8 flex items-center gap-3 font-mono-tabular text-[11px] uppercase tracking-[0.18em] text-teal">
        <span>{p.date}</span><span>·</span><Clock className="h-3 w-3" /><span>{p.minutes} min read</span>
      </div>

      <h1 className="font-display mt-4 text-4xl font-semibold leading-[1.1] text-navy sm:text-5xl">{p.title}</h1>
      <p className="mt-5 text-lg text-ink/75">{p.excerpt}</p>

      <div className="mt-10 space-y-5 text-base text-ink/85 leading-relaxed">
        {body.map((para, i) => {
          const parts = para.split(/(\*\*[^*]+\*\*)/g);
          return (
            <p key={i}>
              {parts.map((part, j) =>
                part.startsWith("**") && part.endsWith("**")
                  ? <strong key={j} className="text-navy">{part.slice(2, -2)}</strong>
                  : <span key={j}>{part}</span>
              )}
            </p>
          );
        })}
      </div>
    </article>
  );
}
