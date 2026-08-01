// app/blog/page.js
// Blog index page listing practical marketing and website insights for doctors.
// Props: none

import Link from "next/link";
import { ArrowRight, Clock } from "lucide-react";
import { BLOG_POSTS } from "@/lib/siteData";
import { SectionHeading } from "@/components/VitalLine";

export const metadata = {
  title: "Blog — Marketing Insights for Doctors | Digisarthi Info Tech",
  description: "Straightforward articles for doctors and clinic owners — websites, local SEO, WhatsApp booking and building patient trust online.",
  openGraph: {
    title: "Blog — Marketing Insights for Doctors",
    description: "Practical, jargon-free articles for independent doctors and small clinics.",
    url: "/blog",
  },
};

/**
 * Blog article catalog list page.
 */
export default function BlogIndex() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-20 sm:px-6 sm:py-24">
      <SectionHeading eyebrow="Journal" title="Notes for doctors going digital." subtitle="Short, practical reads — no marketing jargon, no fluff." />
      <div className="mt-14 space-y-4">
        {BLOG_POSTS.map(p => (
          <Link
            key={p.slug}
            href={`/blog/${p.slug}`}
            className="group block rounded-2xl border border-hairline bg-white p-7 transition-all hover:border-teal hover:navy-shadow"
          >
            <div className="flex items-center gap-3 font-mono-tabular text-[11px] uppercase tracking-[0.18em] text-teal">
              <span>{p.date}</span><span>·</span><Clock className="h-3 w-3" /><span>{p.minutes} min read</span>
            </div>
            <h2 className="font-display mt-3 text-2xl font-semibold text-navy sm:text-3xl">{p.title}</h2>
            <p className="mt-3 text-sm text-ink/70">{p.excerpt}</p>
            <div className="mt-4 inline-flex items-center gap-1.5 text-xs font-semibold text-teal">
              Read the article <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
