// app/not-found.js
// Custom 404 page for missing or broken routes in Next.js App Router.
// Props: none

import Link from "next/link";
import { WA_URL } from "@/lib/siteData";

export const metadata = {
  title: "Page Not Found — Digisarthi Info Tech",
  description: "The requested page took a sick leave and could not be found.",
};

/**
 * 404 Not Found error page component.
 */
export default function NotFound() {
  return (
    <div className="flex min-h-[70dvh] items-center justify-center bg-background px-4 py-24">
      <div className="max-w-md text-center">
        <div className="font-mono-tabular text-xs uppercase tracking-[0.22em] text-teal">404 · Not found</div>
        <h1 className="font-display mt-4 text-4xl font-semibold text-navy sm:text-5xl">
          This page took a sick leave.
        </h1>
        <p className="mt-4 text-sm text-muted-foreground">
          The link you followed doesn't lead anywhere — the page may have moved or never existed. Let's get you back to somewhere useful.
        </p>
        <div className="mt-7 flex flex-wrap justify-center gap-2">
          <Link
            href="/"
            className="inline-flex items-center justify-center rounded-full bg-navy px-5 py-2.5 text-sm font-semibold text-white hover:bg-navy/90 transition-colors"
          >
            Back to home
          </Link>
          <a
            href={WA_URL} target="_blank" rel="noreferrer"
            className="inline-flex items-center justify-center rounded-full border border-navy px-5 py-2.5 text-sm font-semibold text-navy hover:bg-navy hover:text-white transition-colors"
          >
            WhatsApp us
          </a>
        </div>
      </div>
    </div>
  );
}
