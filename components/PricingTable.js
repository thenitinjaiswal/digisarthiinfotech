// components/PricingTable.js
// Grid layout comparing Silver, Gold, and Platinum packages for doctor practices.
// Props: compact (boolean flag to show condensed version)

import Link from "next/link";
import { CheckCircle2, MessageCircle } from "lucide-react";
import { PRICING, getWaUrl, WA_URL } from "@/lib/siteData";

/**
 * Three-tier pricing comparison table component with pre-filled WhatsApp action buttons.
 */
export function PricingTable({ compact = false }) {
  return (
    <div className="grid gap-6 md:grid-cols-3">
      {PRICING.map(tier => {
        const targetWaUrl = tier.waMsg ? getWaUrl(tier.waMsg) : WA_URL;

        return (
          <div
            key={tier.name}
            className={`relative flex flex-col rounded-2xl border p-7 ${
              tier.popular
                ? "border-navy bg-white navy-shadow"
                : "border-hairline bg-white"
            }`}
          >
            {tier.popular && (
              <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-[oklch(0.75_0.14_75)] px-3 py-1 font-mono-tabular text-[10px] font-semibold uppercase tracking-[0.18em] text-navy">
                Most Popular
              </span>
            )}
            
            <div className="font-mono-tabular text-[11px] uppercase tracking-[0.2em] text-teal">
              {tier.name}
            </div>
            
            <div className="mt-3 font-display text-4xl font-semibold text-navy font-mono-tabular">
              {tier.price}
            </div>
            
            <p className="mt-2 text-sm text-muted-foreground">{tier.tagline}</p>
            
            {!compact && (
              <ul className="mt-6 flex-1 space-y-2.5 text-sm">
                {tier.features.map(f => (
                  <li key={f} className="flex items-start gap-2 text-ink/85">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-teal" />
                    <span>{f}</span>
                  </li>
                ))}
              </ul>
            )}

            <div className="mt-7 flex flex-col gap-2">
              <a
                href={targetWaUrl} target="_blank" rel="noreferrer"
                className={`inline-flex items-center justify-center gap-2 rounded-full px-4 py-2.5 text-sm font-semibold transition-colors ${
                  tier.popular ? "bg-navy text-white hover:bg-navy/90" : "border border-navy text-navy hover:bg-navy hover:text-white"
                }`}
              >
                <MessageCircle className="h-4 w-4" /> Choose {tier.name} on WhatsApp
              </a>
              <Link href="/contact" className="text-center text-xs text-teal hover:underline">
                Or contact us directly →
              </Link>
            </div>
          </div>
        );
      })}
    </div>
  );
}
