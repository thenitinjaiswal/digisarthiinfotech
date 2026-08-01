// app/portfolio/wellness-homeo-clinic/visit-contact/page.js
// Visit & Contact page for Wellness Homeo Clinic demo site.
// Renders location details, phone, WhatsApp CTA, timings, and Google Maps embed.
// Props: none

import { HomeoDisplay, Sprig } from "../layout";
import { MessageCircle, MapPin, Phone, Mail } from "lucide-react";

export const metadata = {
  title: "Visit & Contact — Wellness Homeo Clinic, FC Road Pune",
  description: "Clinic timings, address, phone and WhatsApp for Wellness Homeo Clinic on FC Road, Pune.",
  openGraph: {
    title: "Visit Wellness Homeo Clinic",
    description: "FC Road, Pune. Book by WhatsApp.",
  },
};

/**
 * Visit and contact page component.
 */
export default function VisitContact() {
  return (
    <div className="mx-auto max-w-6xl px-5 py-20 sm:px-8 sm:py-28">
      <Sprig className="mb-6 h-9 w-9 text-[#B8735A]" />
      <h1 className="text-4xl leading-tight text-[#2F4A3D] sm:text-5xl"><HomeoDisplay>Come and sit with us.</HomeoDisplay></h1>
      <p className="mt-5 max-w-xl text-[15px] leading-relaxed text-[#26312B]/75">First consultations run for an hour. Please bring any recent reports and a list of current medications.</p>
      <div className="mt-14 grid gap-10 md:grid-cols-[1fr_1.2fr]">
        <div className="space-y-8">
          <div>
            <div className="text-[11px] uppercase tracking-[0.24em] text-[#B8735A]">Address</div>
            <div className="mt-3 flex items-start gap-3 text-[15px] leading-relaxed text-[#26312B]/85"><MapPin className="mt-1 h-4 w-4 shrink-0 text-[#2F4A3D]" /> 2nd Floor, Sarthak Plaza,<br />FC Road, Pune 411004</div>
          </div>
          <div>
            <div className="text-[11px] uppercase tracking-[0.24em] text-[#B8735A]">Speak with us</div>
            <div className="mt-3 flex items-center gap-3 text-[15px] text-[#26312B]/85"><Phone className="h-4 w-4 text-[#2F4A3D]" /> +91 8765610216</div>
            <div className="mt-2 flex items-center gap-3 text-[15px] text-[#26312B]/85"><Mail className="h-4 w-4 text-[#2F4A3D]" /> care@wellnesshomeo.in</div>
          </div>
          <div>
            <div className="text-[11px] uppercase tracking-[0.24em] text-[#B8735A]">Timings</div>
            <ul className="mt-3 space-y-2 text-[15px] text-[#26312B]/85">
              <li>Mon – Fri · 10 AM – 1 PM, 5 – 8:30 PM</li>
              <li>Saturday · 10 AM – 2 PM</li>
              <li>Sunday · By appointment</li>
            </ul>
          </div>
          <a href="https://wa.me/918765610216" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full bg-[#2F4A3D] px-6 py-3 text-sm font-semibold text-[#F7F2EA]"><MessageCircle className="h-4 w-4" /> Book on WhatsApp</a>
        </div>
        <div className="overflow-hidden border border-[#2F4A3D]/15 bg-white">
          <iframe title="Wellness Homeo Clinic Map" src="https://www.google.com/maps?q=FC+Road+Pune&output=embed" className="h-full min-h-[420px] w-full" />
        </div>
      </div>
    </div>
  );
}
