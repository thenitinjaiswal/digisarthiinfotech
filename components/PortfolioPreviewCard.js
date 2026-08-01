// components/PortfolioPreviewCard.js
// Portfolio card linking to live demo sites (Wellness Homeo, Smile Care, Multi-Speciality).
// Props: portfolio object (slug, name, speciality, tagline, accent, image)

import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

/**
 * Card preview component for portfolio genre demos.
 * Shows an AI-generated screenshot of the demo site with a hover zoom effect.
 */
export function PortfolioPreviewCard({ portfolio }) {
  const { slug, name, speciality, tagline, accent, image } = portfolio;

  const gradientClass =
    accent === "terracotta"
      ? "bg-gradient-to-br from-[oklch(0.75_0.09_45)] via-[oklch(0.82_0.07_50)] to-[oklch(0.9_0.05_60)]"
      : accent === "mint"
      ? "bg-gradient-to-br from-mint via-teal/60 to-navy/30"
      : "bg-gradient-to-br from-navy via-navy/80 to-teal/70";

  return (
    <Link
      href={`/portfolio/${slug}`}
      className="group flex flex-col overflow-hidden rounded-2xl border border-hairline bg-white transition-all hover:navy-shadow hover:-translate-y-0.5"
    >
      {/* Image thumbnail with hover zoom */}
      <div className={`relative aspect-[4/3] w-full overflow-hidden ${gradientClass}`}>
        {image ? (
          <>
            <Image
              src={image}
              alt={`${name} website preview`}
              fill
              className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
              sizes="(max-width: 768px) 100vw, 33vw"
            />
            {/* Subtle gradient overlay at bottom for fade effect */}
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />
          </>
        ) : null}
      </div>

      <div className="p-6">
        <div className="font-mono-tabular text-[10px] uppercase tracking-[0.18em] text-teal">{speciality}</div>
        <div className="font-display mt-2 text-xl font-semibold text-navy">{name}</div>
        <p className="mt-2 text-sm text-ink/70">{tagline}</p>
        <div className="mt-4 inline-flex items-center gap-1 text-xs font-semibold text-teal">
          View live demo <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
        </div>
      </div>
    </Link>
  );
}
