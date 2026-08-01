// app/portfolio/multi-speciality-clinic/contact/page.js
// Contact and location details page for Meridian Health Multi-Speciality Clinic.
// Displays address in Baner Pune, reception telephone, 24x7 emergency line, hours, and map.
// Props: none

import { MscDisplay, IndexRule } from "../layout";
import { Phone, MessageCircle, Mail, MapPin } from "lucide-react";

export const metadata = {
  title: "Contact & Location — Meridian Health Clinic, Pune",
  description: "Visit Meridian Health Multi-Speciality Clinic in Baner, Pune. Timings, contact numbers and directions.",
  openGraph: {
    title: "Contact Meridian Health",
    description: "Baner, Pune. 24×7 Emergency.",
  },
};

/**
 * Contact and location info page component.
 */
export default function ContactPage() {
  return (
    <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8 sm:py-28">
      <div className="text-[11px] font-semibold uppercase tracking-[0.24em] text-[#8A6D3B]">Contact · Location</div>
      <h1 className="mt-4 text-5xl tracking-tight text-[#0F2340] sm:text-6xl"><MscDisplay>Come see us in Baner.</MscDisplay></h1>
      <IndexRule className="mt-14" />
      
      <div className="grid gap-12 py-12 md:grid-cols-[1fr_1.3fr]">
        <div className="space-y-8">
          <Row icon={MapPin} label="Address">Meridian Health Building,<br />Baner Road, Pune 411045</Row>
          <Row icon={Phone} label="Reception"><a href="tel:+918765610216">+91 8765610216</a></Row>
          <Row icon={MessageCircle} label="WhatsApp"><a href="https://wa.me/918765610216" target="_blank" rel="noreferrer">+91 8765610216</a></Row>
          <Row icon={Mail} label="Email"><a href="mailto:hello@meridianhealth.in">hello@meridianhealth.in</a></Row>
          
          <div>
            <div className="text-[10px] font-semibold uppercase tracking-[0.24em] text-[#8A6D3B]">Clinic Hours</div>
            <div style={{ fontFamily: '"Source Serif 4", Georgia, serif' }} className="mt-3 space-y-1 text-lg text-[#0F2340]">
              <div>Mon – Sat · 8 AM – 9 PM</div>
              <div>Sunday · 9 AM – 2 PM</div>
              <div className="text-[#8A6D3B]">Emergency: 24 × 7</div>
            </div>
          </div>
        </div>

        <div className="overflow-hidden ring-1 ring-[#0F2340]/12">
          <iframe title="Meridian Health Location" src="https://www.google.com/maps?q=Baner+Road+Pune&output=embed" className="h-full min-h-[520px] w-full" />
        </div>
      </div>
      <IndexRule />
    </div>
  );
}

// Row layout helper for contact information entries
function Row({ icon: Icon, label, children }) {
  return (
    <div className="flex items-start gap-5">
      <div className="grid h-11 w-11 shrink-0 place-items-center rounded-sm bg-[#0F2340] text-white"><Icon className="h-5 w-5" /></div>
      <div>
        <div className="text-[10px] font-semibold uppercase tracking-[0.24em] text-[#8A6D3B]">{label}</div>
        <div style={{ fontFamily: '"Source Serif 4", Georgia, serif' }} className="mt-1 text-lg text-[#0F2340]">{children}</div>
      </div>
    </div>
  );
}
