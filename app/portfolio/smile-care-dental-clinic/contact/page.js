// app/portfolio/smile-care-dental-clinic/contact/page.js
// Contact page for Smile Care Dental Clinic demo site.
// Displays clinic location in Kothrud, phone, WhatsApp CTA, timings, and map.
// Props: none

import { DentalDisplay } from "../layout";
import { Phone, MessageCircle, Mail, MapPin, Clock } from "lucide-react";

export const metadata = {
  title: "Contact — Smile Care Dental Clinic, Kothrud Pune",
  description: "Visit Smile Care Dental Clinic in Kothrud, Pune — timings, address, phone and WhatsApp.",
  openGraph: {
    title: "Contact Smile Care",
    description: "Kothrud, Pune. WhatsApp us anytime.",
  },
};

/**
 * Contact page component.
 */
export default function ContactPage() {
  return (
    <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8 sm:py-28">
      <div className="text-[11px] font-bold uppercase tracking-wider text-[#3AB0FF]">Contact</div>
      <h1 className="mt-4 text-5xl font-bold tracking-tight text-[#0B2A4A] sm:text-6xl"><DentalDisplay>Come say hi. We're the friendly dentists.</DentalDisplay></h1>
      <div className="mt-14 grid gap-8 md:grid-cols-2">
        <div className="space-y-6">
          <Card icon={MapPin} title="Visit us">Ground Floor, Karve Statue,<br />Kothrud, Pune 411029</Card>
          <Card icon={Phone} title="Call us"><a href="tel:+918765610216" className="hover:text-[#3AB0FF]">+91 8765610216</a></Card>
          <Card icon={MessageCircle} title="WhatsApp"><a href="https://wa.me/918765610216" target="_blank" rel="noreferrer" className="hover:text-[#3AB0FF]">+91 8765610216</a></Card>
          <Card icon={Mail} title="Email"><a href="mailto:hello@smilecare.in" className="hover:text-[#3AB0FF]">hello@smilecare.in</a></Card>
          <Card icon={Clock} title="Hours">Mon – Sat · 10 AM – 8 PM<br />Sunday · 10 AM – 2 PM</Card>
        </div>
        <div className="overflow-hidden rounded-3xl ring-1 ring-[#0B2A4A]/10">
          <iframe title="Smile Care Location" src="https://www.google.com/maps?q=Karve+Statue+Kothrud+Pune&output=embed" className="h-full min-h-[520px] w-full" />
        </div>
      </div>
    </div>
  );
}

// Contact detail card wrapper component
function Card({ icon: Icon, title, children }) {
  return (
    <div className="flex items-start gap-4 rounded-2xl bg-gradient-to-[#EAF6FF] to-white p-5 ring-1 ring-[#0B2A4A]/6">
      <div className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-[#3AB0FF] text-white"><Icon className="h-5 w-5" /></div>
      <div>
        <div className="text-[11px] font-bold uppercase tracking-wider text-[#3AB0FF]">{title}</div>
        <div style={{ fontFamily: '"Space Grotesk", sans-serif' }} className="mt-1 text-lg font-bold text-[#0B2A4A]">{children}</div>
      </div>
    </div>
  );
}
