// components/Footer.js
// Main footer component for Digisarthi Info Tech website.
// Includes brand information, navigation links, legal links, and direct contact options.
// Props: none

import Link from "next/link";
import { MessageCircle, Phone, Mail } from "lucide-react";
import { WA_URL, PHONE, PHONE_TEL, EMAIL } from "@/lib/siteData";

/**
 * Main website footer component.
 */
export function Footer() {
  return (
    <footer className="mt-24 border-t border-navy/10 bg-navy text-white/85">
      <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6">
        <div className="grid gap-10 md:grid-cols-4">
          <div>
            <div className="flex items-center gap-2.5">
              <div className="grid h-9 w-9 place-items-center rounded-xl bg-white/10 text-white">
                <span className="font-display text-lg font-semibold">D</span>
              </div>
              <div className="leading-tight">
                <div className="font-display text-base font-semibold text-white">Digisarthi</div>
                <div className="font-mono-tabular text-[9px] uppercase tracking-[0.22em] text-mint">Info Tech</div>
              </div>
            </div>
            <p className="mt-4 max-w-xs text-sm text-white/70">
              We build websites exclusively for doctors and clinics — one speciality-focused team you can trust with your online presence.
            </p>
          </div>

          <FooterCol title="Explore">
            <FLink href="/specialities">All specialities</FLink>
            <FLink href="/portfolio">Portfolio</FLink>
            <FLink href="/pricing">Pricing</FLink>
            <FLink href="/process">Our process</FLink>
            <FLink href="/blog">Blog</FLink>
          </FooterCol>

          <FooterCol title="Company">
            <FLink href="/about">About us</FLink>
            <FLink href="/testimonials">Testimonials</FLink>
            <FLink href="/faq">FAQ</FLink>
            <FLink href="/contact">Contact</FLink>
            <FLink href="/privacy-policy">Privacy Policy</FLink>
            <FLink href="/terms">Terms</FLink>
          </FooterCol>

          <FooterCol title="Talk to us">
            <a href={WA_URL} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 text-sm text-white/85 hover:text-white">
              <MessageCircle className="h-4 w-4 text-mint" /> WhatsApp us
            </a>
            <a href={PHONE_TEL} className="inline-flex items-center gap-2 font-mono-tabular text-sm text-white/85 hover:text-white">
              <Phone className="h-4 w-4 text-mint" /> {PHONE}
            </a>
            <a href={`mailto:${EMAIL}`} className="inline-flex items-center gap-2 text-sm text-white/85 hover:text-white">
              <Mail className="h-4 w-4 text-mint" /> {EMAIL}
            </a>
          </FooterCol>
        </div>

        <div className="mt-12 flex flex-wrap items-center justify-between gap-3 border-t border-white/10 pt-6 text-xs text-white/55">
          <div>© 2026 Digisarthi Info Tech. All rights reserved.</div>
          <div>Built exclusively for doctors and clinics.</div>
        </div>
      </div>
    </footer>
  );
}

// Helper component for footer column layout
function FooterCol({ title, children }) {
  return (
    <div>
      <div className="font-mono-tabular text-[11px] uppercase tracking-[0.2em] text-mint">{title}</div>
      <div className="mt-4 flex flex-col gap-2.5">{children}</div>
    </div>
  );
}

// Helper component for styled footer navigation links
function FLink({ href, children }) {
  return (
    <Link href={href} className="text-sm text-white/75 hover:text-white transition-colors">{children}</Link>
  );
}
