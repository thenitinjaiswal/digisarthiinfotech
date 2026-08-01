// components/TestimonialCard.js
// Testimonial card displaying doctor quotes, ratings, and practice details.
// Props: testimonial object (name, role, quote), dark (boolean flag for dark backgrounds)

import { Star } from "lucide-react";

/**
 * Doctor testimonial card component.
 */
export function TestimonialCard({ testimonial, dark = false }) {
  const { name, role, quote } = testimonial;

  return (
    <blockquote className={`rounded-2xl p-6 ${
      dark
        ? "bg-white/6 text-white backdrop-blur"
        : "border border-hairline bg-white text-ink/85"
    }`}>
      <div className={`flex gap-0.5 ${dark ? "text-mint" : "text-teal"}`}>
        {[0, 1, 2, 3, 4].map(i => (
          <Star key={i} className="h-4 w-4 fill-current" />
        ))}
      </div>
      <p className="mt-4 text-sm leading-relaxed">"{quote}"</p>
      <footer className="mt-5 text-xs">
        <div className={`font-semibold ${dark ? "text-white" : "text-navy"}`}>{name}</div>
        <div className={dark ? "text-mint/90" : "text-teal"}>{role}</div>
      </footer>
    </blockquote>
  );
}
