// components/PricingCard.js
// Individual pricing card component for displaying Silver, Gold, or Platinum plan tiers.
// Props: tier object (name, price, tagline, features, popular, waMsg)

import { CheckCircle2, MessageCircle } from "lucide-react";
import { getWaUrl, WA_URL } from "@/lib/siteData";

/**
 * Pricing card component displaying plan features, pricing figure, and pre-filled WhatsApp CTA.
 */
export function PricingCard({ tier }) {
  const { name, price, tagline, features, popular, waMsg } = tier;
  const targetWaUrl = waMsg ? getWaUrl(waMsg) : WA_URL;

  return (
    <div className={`relative flex flex-col rounded-3xl border bg-white p-7 transition-all ${
      popular ? "border-teal shadow-xl navy-shadow ring-1 ring-teal" : "border-hairline"
    }`}>
      {popular && (
        <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 rounded-full bg-teal px-3.5 py-1 font-mono-tabular text-[10px] font-semibold uppercase tracking-[0.18em] text-white">
          Most Popular
        </div>
      )}
      <div className="font-mono-tabular text-xs uppercase tracking-[0.2em] text-teal">{name}</div>
      <div className="mt-2 font-display text-4xl font-semibold text-navy">{price}</div>
      <p className="mt-2 text-xs text-ink/65">{tagline}</p>
      
      <div className="my-6 h-px w-full bg-hairline" />

      <ul className="flex-1 space-y-3 text-sm text-ink/85">
        {features.map(f => (
          <li key={f} className="flex items-start gap-2.5">
            <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-teal" />
            <span>{f}</span>
          </li>
        ))}
      </ul>

      <a
        href={targetWaUrl} target="_blank" rel="noreferrer"
        className={`mt-8 inline-flex w-full items-center justify-center gap-2 rounded-full py-3 text-sm font-semibold transition-colors ${
          popular
            ? "bg-navy text-white hover:bg-navy/90"
            : "border border-navy/25 bg-white text-navy hover:border-navy"
        }`}
      >
        <MessageCircle className="h-4 w-4" /> Get started on WhatsApp
      </a>
    </div>
  );
}
