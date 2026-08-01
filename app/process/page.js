// app/process/page.js
// Process timeline page expanding on the six-step website creation workflow.
// Props: none

import { PROCESS_STEPS } from "@/lib/siteData";
import { SectionHeading } from "@/components/VitalLine";

export const metadata = {
  title: "Our Process — How We Build Doctor Websites | Digisarthi Info Tech",
  description: "From first call to launch in six calm steps. See exactly how we design and build websites for doctors and clinics.",
  openGraph: {
    title: "How We Build — Six Calm Steps",
    description: "No jargon, no surprise invoices. A transparent process built for doctors.",
    url: "/process",
  },
};

/**
 * Six-step website build process page component.
 */
export default function ProcessPage() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-20 sm:px-6 sm:py-24">
      <SectionHeading
        eyebrow="How we build"
        title="From first call to live site — in six calm steps."
        subtitle="Building a website shouldn't feel like a surgery you're not prepared for. Here's exactly what to expect."
      />
      <ol className="mt-14 space-y-8 border-l-2 border-teal/25 pl-8">
        {PROCESS_STEPS.map((s, i) => (
          <li key={s.title} className="relative">
            <div className="absolute -left-[41px] grid h-8 w-8 place-items-center rounded-full bg-navy text-white font-mono-tabular text-xs">
              {String(i + 1).padStart(2, "0")}
            </div>
            <h3 className="font-display text-2xl font-semibold text-navy">{s.title}</h3>
            <p className="mt-3 text-base text-ink/75">{s.body}</p>
          </li>
        ))}
      </ol>
    </div>
  );
}
