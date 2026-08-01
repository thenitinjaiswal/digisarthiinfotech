// app/about/page.js
// About page detailing Digisarthi Info Tech's background, team focus, and client stats.
// Props: none

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { SectionHeading } from "@/components/VitalLine";

export const metadata = {
  title: "About — The Team Built for Doctors | Digisarthi Info Tech",
  description: "Digisarthi Info Tech is a small studio that builds websites only for doctors and clinics. Meet the team and read our story.",
  openGraph: {
    title: "About Digisarthi Info Tech",
    description: "A small studio building websites exclusively for doctors and clinics.",
    url: "/about",
  },
};

/**
 * About page component.
 */
export default function About() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-20 sm:px-6 sm:py-24">
      <SectionHeading
        eyebrow="About"
        title="A small studio that builds websites for one kind of client — doctors."
      />
      <div className="mt-10 space-y-5 text-base text-ink/80 leading-relaxed">
        <p>Digisarthi Info Tech started in 2022 with a simple observation: doctors were being sold the same generic website templates as restaurants, gyms and real-estate brokers. What patients actually need to see — credentials, timings, a WhatsApp button, a map — was buried under stock photography and marketing jargon.</p>
        <p>So we built a studio that does one thing well: websites for medical practices. Whether you're a solo homeopath in your first clinic or a multi-speciality hospital with thirty doctors, our process, our tone and our decisions are shaped around how patients actually choose a doctor.</p>
        <p>We are a small, deliberately un-scaled team of designers, developers and medical copywriters. Every project has direct access to the people building it — no account managers, no forwarded emails.</p>
      </div>

      <div className="mt-16 grid gap-5 sm:grid-cols-3">
        {[
          { n: "120+", l: "Doctor websites launched" },
          { n: "8", l: "Specialities we've built for" },
          { n: "4.9/5", l: "Average client rating" },
        ].map(s => (
          <div key={s.l} className="rounded-2xl border border-hairline bg-white p-6 text-center">
            <div className="font-display text-4xl font-semibold text-navy">{s.n}</div>
            <div className="mt-2 text-xs uppercase tracking-[0.15em] text-ink/60">{s.l}</div>
          </div>
        ))}
      </div>

      <div className="mt-16">
        <Link href="/contact" className="inline-flex items-center gap-1.5 rounded-full bg-navy px-6 py-3 text-sm font-semibold text-white hover:bg-navy/90">
          Say hello <ArrowRight className="h-4 w-4" />
        </Link>
      </div>
    </div>
  );
}
