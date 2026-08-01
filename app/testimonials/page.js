// app/testimonials/page.js
// Client reviews and testimonials page from doctors across multiple specialities.
// Props: none

import { Star } from "lucide-react";
import { TESTIMONIALS } from "@/lib/siteData";
import { SectionHeading } from "@/components/VitalLine";

export const metadata = {
  title: "Testimonials — What Doctors Say About Us | Digisarthi Info Tech",
  description: "Read what doctors across homeopathy, dentistry, general practice and other specialities say about working with Digisarthi Info Tech.",
  openGraph: {
    title: "Testimonials from doctors we've worked with",
    description: "Real feedback from real practices — homeopaths, dentists, general physicians and more.",
    url: "/testimonials",
  },
};

/**
 * Extended doctor testimonials page component.
 */
export default function Testimonials() {
  const extended = [
    ...TESTIMONIALS,
    { name: "Dr. Suman Nair", role: "Dermatologist, Kochi", quote: "The team took the time to understand what a skin clinic actually needs on its website. Booking enquiries have tripled since we went live." },
    { name: "Dr. Farhan Qureshi", role: "Pediatrician, Hyderabad", quote: "Warm, patient, and clearly experienced with medical clients. Parents tell me the website made them feel comfortable even before their first visit." },
    { name: "Dr. Neha Kulkarni", role: "Gynecologist, Nashik", quote: "Discreet, calm, and thoughtfully designed. I've had many patients say they chose me over other clinics because the website felt professional." },
  ];

  return (
    <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6 sm:py-24">
      <SectionHeading eyebrow="Testimonials" title="In their own words." subtitle="Doctors we've had the privilege to build for, and what they say afterwards." />
      <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {extended.map(t => (
          <blockquote key={t.name} className="rounded-2xl border border-hairline bg-white p-6">
            <div className="flex gap-0.5 text-teal">{[0,1,2,3,4].map(i => <Star key={i} className="h-4 w-4 fill-current" />)}</div>
            <p className="mt-4 text-sm leading-relaxed text-ink/85">"{t.quote}"</p>
            <footer className="mt-5 text-xs">
              <div className="font-semibold text-navy">{t.name}</div>
              <div className="text-teal">{t.role}</div>
            </footer>
          </blockquote>
        ))}
      </div>
    </div>
  );
}
