// components/ClientShell.js
// Client wrapper component that conditionally displays Navbar, Footer, and WhatsApp FAB
// based on current pathname (hiding them on live demo portfolio routes).
// Props: children (React nodes)

'use client';

import { usePathname } from "next/navigation";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { WhatsAppButton } from "@/components/WhatsAppButton";

/**
 * Client shell layout component managing main navigation vs demo mode layouts.
 */
export function ClientShell({ children }) {
  const pathname = usePathname();
  const isDemo = /^\/portfolio\/(wellness-homeo-clinic|smile-care-dental-clinic|multi-speciality-clinic)(\/|$)/.test(pathname);

  return (
    <div className="flex min-h-dvh flex-col bg-background text-foreground">
      {!isDemo && <Navbar />}
      <main className="flex-1">{children}</main>
      {!isDemo && <Footer />}
      {!isDemo && <WhatsAppButton />}
    </div>
  );
}
