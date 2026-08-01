// app/pricing/page.js
// Pricing page displaying three transparent doctor website packages (Silver, Gold, Platinum).
// Includes feature breakdown and WhatsApp direct consultation CTA.
// Props: none

import { MessageCircle, Phone } from "lucide-react";
import { PricingTable } from "@/components/PricingTable";
import { SectionHeading } from "@/components/VitalLine";
import { WA_URL, PHONE, PHONE_TEL } from "@/lib/siteData";

export const metadata = {
  title: "Pricing — Doctor Website Packages | Digisarthi Info Tech",
  description: "Transparent pricing for doctor and clinic websites — Silver ₹12,999, Gold ₹24,999, Platinum ₹44,999. Same trusted process, any speciality.",
  openGraph: {
    title: "Pricing — Doctor Website Packages",
    description: "Three transparent plans for solo doctors, growing clinics and multi-speciality practices.",
    url: "/pricing",
  },
};

/**
 * Main pricing page component.
 */
export default function PricingPage() {
  return (
    <>
      <section className="border-b border-hairline bg-white py-16 sm:py-20">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 text-center">
          <SectionHeading
            eyebrow="Pricing"
            title="Same trusted process. Any speciality."
            subtitle="No hidden fees, no vague quotes. Pick a plan, sign one clear proposal, and know exactly what you're getting."
            align="center"
          />
        </div>
      </section>

      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <PricingTable />
          <p className="mx-auto mt-10 max-w-2xl text-center text-sm text-ink/65">
            All plans include hosting guidance, one-year domain purchase support and a walkthrough call after launch. GST extra where applicable.
          </p>
        </div>
      </section>

      <section className="border-t border-hairline bg-white py-20">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 text-center">
          <SectionHeading
            eyebrow="Need Advice?"
            title="Not sure which plan fits your practice?"
            subtitle="Chat directly on WhatsApp. We'll ask about your clinic requirements and recommend honestly — even if that means the smaller plan."
            align="center"
          />

          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <a
              href={WA_URL}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-[#25D366] px-8 py-3.5 text-sm font-semibold text-white hover:bg-[#22bf5b] transition-colors"
            >
              <MessageCircle className="h-4 w-4" /> Discuss on WhatsApp
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
