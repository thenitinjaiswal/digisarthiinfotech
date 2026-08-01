// app/portfolio/page.js
// Portfolio overview page listing all 3 interactive live demo websites.
// Displays clickable preview cards with portfolio screenshot images.
// Props: none

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { PORTFOLIO } from "@/lib/siteData";
import { SectionHeading } from "@/components/VitalLine";

export const metadata = {
  title: "Portfolio — Doctor & Clinic Websites | Digisarthi Info Tech",
  description: "Browse live demo websites we've built for doctors — a solo homeopath, a modern dental clinic and a multi-speciality clinic.",
  openGraph: {
    title: "Portfolio — Doctor & Clinic Websites",
    description: "Three real, click-through demo sites — not screenshots.",
    url: "/portfolio",
  },
};

/**
 * Portfolio page component displaying live demo websites across 3 genres.
 * Each card shows the actual portfolio screenshot image with a hover zoom effect.
 */
export default function PortfolioIndex() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6 sm:py-24">
      <SectionHeading
        eyebrow="Portfolio"
        title="Three fully-clickable demos — not screenshots."
        subtitle="Every site here is real. Click through, scroll, tap the WhatsApp button, submit the forms. This is the quality your patients will experience."
      />
      <div className="mt-14 space-y-8">
        {PORTFOLIO.map((p, i) => (
          <Link
            key={p.slug}
            href={`/portfolio/${p.slug}`}
            className="group grid gap-8 overflow-hidden rounded-3xl border border-hairline bg-white p-6 transition-all hover:navy-shadow sm:p-8 md:grid-cols-[1fr_1fr] md:items-center"
          >
            <div className={i % 2 === 1 ? "md:order-2" : ""}>
              {/* Portfolio screenshot with hover zoom */}
              <div
                className={`relative aspect-[4/3] w-full overflow-hidden rounded-2xl ${
                  p.accent === "terracotta"
                    ? "bg-gradient-to-br from-[oklch(0.75_0.09_45)] via-[oklch(0.82_0.07_50)] to-[oklch(0.9_0.05_60)]"
                    : p.accent === "mint"
                      ? "bg-gradient-to-br from-mint via-teal/60 to-navy/30"
                      : "bg-gradient-to-br from-navy via-navy/80 to-teal/70"
                }`}
              >
                {p.image && (
                  <>
                    <img
                      src={p.image}
                      alt={`${p.name} website preview`}
                      className="absolute inset-0 h-full w-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />
                  </>
                )}
              </div>
            </div>
            <div>
              <div className="font-mono-tabular text-[11px] uppercase tracking-[0.2em] text-teal">{p.speciality}</div>
              <h2 className="font-display mt-3 text-3xl font-semibold text-navy">{p.name}</h2>
              <p className="mt-3 text-base text-ink/75">{p.tagline}</p>
              <div className="mt-5 inline-flex items-center gap-1.5 rounded-full bg-navy px-5 py-2.5 text-sm font-semibold text-white group-hover:bg-navy/90">
                View live demo <ArrowRight className="h-4 w-4" />
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
