// app/contact/page.js
// Dedicated contact page with direct WhatsApp chat and phone consultation.
// Props: none

import { MessageCircle, Phone, Mail } from "lucide-react";
import { WA_URL, PHONE, PHONE_TEL, EMAIL } from "@/lib/siteData";
import { SectionHeading } from "@/components/VitalLine";

export const metadata = {
  title: "Contact — Instant WhatsApp Consultation | Digisarthi Info Tech",
  description: "Chat directly on WhatsApp with Digisarthi Info Tech or call us directly. No long forms — fast responses for doctors and clinic owners.",
  openGraph: {
    title: "Contact Digisarthi Info Tech",
    description: "Instant WhatsApp consultation about your clinic website.",
    url: "/contact",
  },
};

/**
 * Contact page component.
 */
export default function Contact() {
  return (
    <div className="mx-auto max-w-5xl px-4 py-20 sm:px-6 sm:py-24">
      <SectionHeading
        eyebrow="Direct Contact"
        title="Chat directly on WhatsApp — no forms required."
        subtitle="Tell us about your practice and what you'd like your website to do. Tap below to launch a chat with a pre-filled message."
        align="center"
      />

      <div className="mt-12 grid gap-6 md:grid-cols-2">
        {/* Main WhatsApp Card */}
        <div className="flex flex-col justify-between rounded-3xl border border-[#25D366]/30 bg-gradient-to-br from-white to-[#25D366]/5 p-8 shadow-lg">
          <div>
            <div className="grid h-12 w-12 place-items-center rounded-2xl bg-[#25D366] text-white shadow-md shadow-[#25D366]/30">
              <MessageCircle className="h-6 w-6" />
            </div>
            <h3 className="font-display mt-5 text-2xl font-semibold text-navy">WhatsApp Consultation</h3>
            <p className="mt-2 text-sm text-ink/75">
              The fastest way to reach us. Clicking below opens a direct chat pre-filled with your enquiry.
            </p>
          </div>
          <a
            href={WA_URL}
            target="_blank"
            rel="noreferrer"
            className="mt-8 inline-flex items-center justify-center gap-2 rounded-full bg-[#25D366] px-6 py-3.5 text-sm font-semibold text-white hover:bg-[#22bf5b] transition-colors"
          >
            <MessageCircle className="h-4 w-4" /> Start WhatsApp Chat
          </a>
        </div>

        {/* Direct Call / Email Card */}
        <div className="flex flex-col justify-between rounded-3xl border border-hairline bg-white p-8 shadow-lg">
          <div>
            <div className="grid h-12 w-12 place-items-center rounded-2xl bg-navy text-white shadow-md">
              <Phone className="h-6 w-6" />
            </div>
            <h3 className="font-display mt-5 text-2xl font-semibold text-navy">Phone & Email</h3>
            <p className="mt-2 text-sm text-ink/75">
              Prefer speaking over the phone or sending a formal proposal brief? Reach out directly below.
            </p>
            <div className="mt-6 space-y-3">
              <a href={PHONE_TEL} className="flex items-center gap-3 font-mono-tabular text-sm font-semibold text-navy hover:text-teal">
                <Phone className="h-4 w-4 text-teal" /> {PHONE} (Mon–Sat, 10am–7pm IST)
              </a>
              <a href={`mailto:${EMAIL}`} className="flex items-center gap-3 text-sm font-semibold text-navy hover:text-teal">
                <Mail className="h-4 w-4 text-teal" /> {EMAIL}
              </a>
            </div>
          </div>
          <a
            href={PHONE_TEL}
            className="mt-8 inline-flex items-center justify-center gap-2 rounded-full border border-navy px-6 py-3.5 text-sm font-semibold text-navy hover:bg-navy hover:text-white transition-colors"
          >
            <Phone className="h-4 w-4" /> Call Us Directly
          </a>
        </div>
      </div>
    </div>
  );
}
