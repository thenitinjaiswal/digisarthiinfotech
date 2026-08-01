// app/faq/page.js
// Frequently Asked Questions page for Digisarthi Info Tech.
// Answers common doctor concerns about timelines, content writing, SEO, hosting, and support.
// Props: none

import { SectionHeading } from "@/components/VitalLine";

const FAQS = [
  { q: "How long does it take to build a doctor website?", a: "Most projects go live in 2 to 4 weeks depending on plan and how quickly we receive your content, photos and doctor bios." },
  { q: "Do you write the content, or do I have to?", a: "We write it. Every plan includes medical copywriting — you review, tweak and approve. Nothing goes live without your sign-off." },
  { q: "Can you rebuild my existing website?", a: "Yes. Many of our clients come with older sites they've outgrown. We migrate what's worth keeping and rebuild the rest." },
  { q: "Will my website appear on Google?", a: "All plans include on-page SEO. Gold and Platinum add Google Business Profile setup and, in Platinum, advanced local SEO to help you rank in your neighbourhood." },
  { q: "Do you host the website too?", a: "We guide you through choosing hosting and a domain, or we can manage it on your behalf for a small annual fee. You always own everything." },
  { q: "Can patients book appointments through the website?", a: "Yes — every site includes a WhatsApp booking button, and Gold/Platinum add a full appointment booking form with lead notifications." },
  { q: "What happens after launch?", a: "You get post-launch support (15/30/90 days depending on plan) for edits and bug fixes. Beyond that, we offer optional monthly care plans." },
  { q: "Do you work with clinics outside India?", a: "Yes. Most of our work is in India, but we've built for doctors in the UAE, Singapore and the UK too." },
];

export const metadata = {
  title: "FAQ — Doctor Website Questions Answered | Digisarthi Info Tech",
  description: "Common questions from doctors about building a clinic website — timelines, content, SEO, hosting, appointment booking and more.",
  openGraph: {
    title: "Frequently Asked Questions",
    description: "Common questions doctors ask us before starting a website project.",
    url: "/faq",
  },
};

/**
 * FAQ page component.
 */
export default function FAQ() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-20 sm:px-6 sm:py-24">
      <SectionHeading eyebrow="FAQ" title="Questions we're asked before every project." />
      <div className="mt-12 divide-y divide-hairline rounded-2xl border border-hairline bg-white">
        {FAQS.map(f => (
          <details key={f.q} className="group p-6">
            <summary className="flex cursor-pointer items-center justify-between gap-4 font-display text-lg font-semibold text-navy list-none">
              {f.q}
              <span className="text-2xl leading-none text-teal group-open:rotate-45 transition-transform">+</span>
            </summary>
            <p className="mt-4 text-sm text-ink/75 leading-relaxed">{f.a}</p>
          </details>
        ))}
      </div>
    </div>
  );
}
