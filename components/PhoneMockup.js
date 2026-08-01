// components/PhoneMockup.js
// Interactive mobile phone mockup showing a simulated WhatsApp booking chat.
// Used on the Hero section to demonstrate instant patient booking.
// Props: none

import { Check } from "lucide-react";

/**
 * Mobile phone UI mockup illustrating instant patient appointment confirmation via WhatsApp chat.
 */
export function PhoneMockup() {
  return (
    <div className="relative mx-auto w-full max-w-[300px]">
      <div className="rounded-[2.5rem] border border-navy/15 bg-navy p-3 navy-shadow">
        <div className="rounded-[2rem] bg-[oklch(0.96_0.008_180)] p-4">
          <div className="flex items-center justify-between text-[10px] font-mono-tabular text-navy/60">
            <span>9:41</span>
            <span>WhatsApp</span>
            <span>◉◉◉</span>
          </div>

          <div className="mt-4 flex items-center gap-2 border-b border-navy/10 pb-3">
            <div className="grid h-9 w-9 place-items-center rounded-full bg-teal text-white text-xs font-semibold">Dr</div>
            <div className="leading-tight">
              <div className="text-xs font-semibold text-navy">Dr. Priya's Clinic</div>
              <div className="text-[10px] text-teal">online</div>
            </div>
          </div>

          <div className="mt-4 space-y-2.5">
            <ChatBubble mine>Hi doctor, can I get an appointment for tomorrow evening?</ChatBubble>
            <ChatBubble>Sure! 6:30 PM works. Please share your name.</ChatBubble>
            <ChatBubble mine>Anita Rao. Thank you!</ChatBubble>
            
            <div className="rounded-2xl rounded-tl-sm bg-mint/95 p-3 text-navy shadow-sm">
              <div className="flex items-center gap-1.5 text-[11px] font-semibold">
                <Check className="h-3.5 w-3.5" /> Appointment Confirmed
              </div>
              <div className="mt-1 font-mono-tabular text-[11px] text-navy/80">Tomorrow, 6:30 PM · Dr. Priya's Clinic</div>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute -right-4 -top-4 hidden rotate-6 rounded-2xl border border-hairline bg-white px-3 py-2 shadow-lg sm:block">
        <div className="font-mono-tabular text-[10px] uppercase tracking-widest text-teal">+12 leads</div>
        <div className="text-xs font-semibold text-navy">this week</div>
      </div>
    </div>
  );
}

// Inner chat message bubble component
function ChatBubble({ children, mine }) {
  return (
    <div className={`flex ${mine ? "justify-end" : "justify-start"}`}>
      <div
        className={`max-w-[85%] rounded-2xl px-3 py-2 text-[11px] leading-snug shadow-sm ${
          mine ? "rounded-tr-sm bg-white text-navy" : "rounded-tl-sm bg-teal text-white"
        }`}
      >
        {children}
      </div>
    </div>
  );
}
