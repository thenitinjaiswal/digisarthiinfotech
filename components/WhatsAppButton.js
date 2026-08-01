// components/WhatsAppButton.js
// Floating WhatsApp action button (FAB) positioned at bottom-right corner.
// Provides immediate access to WhatsApp booking (wa.me/918765610216).
// Props: none

import { MessageCircle } from "lucide-react";
import { WA_URL } from "@/lib/siteData";

/**
 * Floating WhatsApp action button component.
 */
export function WhatsAppButton() {
  return (
    <a
      href={WA_URL}
      target="_blank"
      rel="noreferrer"
      aria-label="Chat on WhatsApp"
      className="fixed bottom-5 right-5 z-40 flex h-13 w-13 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg transition-transform hover:scale-105 sm:bottom-6 sm:right-6"
    >
      <MessageCircle className="h-6 w-6" />
    </a>
  );
}
