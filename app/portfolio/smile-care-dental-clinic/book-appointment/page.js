// app/portfolio/smile-care-dental-clinic/book-appointment/page.js
// 3-step online appointment booking flow component for Smile Care Dental Clinic.
// Props: none

'use client';

import { useState } from "react";
import { CheckCircle2 } from "lucide-react";
import { DentalDisplay } from "../layout";

const SERVICES = ["Checkup & Cleaning", "Teeth Whitening", "Consultation for Aligners", "Consultation for Implants", "Root Canal", "Other"];
const SLOTS = ["10:00 AM", "11:30 AM", "1:00 PM", "3:00 PM", "4:30 PM", "6:00 PM", "7:30 PM"];

/**
 * Interactive appointment booking wizard component.
 */
export default function Book() {
  const [step, setStep] = useState(1);
  const [svc, setSvc] = useState("");
  const [slot, setSlot] = useState("");
  const [done, setDone] = useState(false);

  return (
    <div className="mx-auto max-w-4xl px-5 py-20 sm:px-8 sm:py-24">
      <div className="text-[11px] font-bold uppercase tracking-wider text-[#3AB0FF]">Book Online</div>
      <h1 className="mt-4 text-5xl font-bold tracking-tight text-[#0B2A4A] sm:text-6xl"><DentalDisplay>Three steps. Thirty seconds.</DentalDisplay></h1>
      
      <div className="mt-10 flex items-center gap-3 text-xs font-bold uppercase tracking-wider">
        {[1, 2, 3].map(n => (
          <div key={n} className={`flex items-center gap-3 ${step >= n ? "text-[#3AB0FF]" : "text-[#0B2A4A]/40"}`}>
            <span className={`grid h-8 w-8 place-items-center rounded-full ${step >= n ? "bg-[#3AB0FF] text-white" : "bg-[#EAF6FF]"}`}>{n}</span>
            {n === 1 ? "Service" : n === 2 ? "Time" : "Details"}
            {n < 3 && <span className="h-px w-8 bg-current opacity-30" />}
          </div>
        ))}
      </div>

      <div className="mt-10 rounded-3xl bg-gradient-to-br from-[#EAF6FF] to-white p-8 ring-1 ring-[#0B2A4A]/6 sm:p-10">
        {done ? (
          <div className="py-8 text-center">
            <CheckCircle2 className="mx-auto h-16 w-16 text-[#3AB0FF]" />
            <h2 style={{ fontFamily: '"Space Grotesk", sans-serif' }} className="mt-5 text-3xl font-bold text-[#0B2A4A]">Request received!</h2>
            <p className="mt-3 text-[#0B2A4A]/70">We'll confirm on WhatsApp within 10 minutes.</p>
          </div>
        ) : step === 1 ? (
          <>
            <h2 style={{ fontFamily: '"Space Grotesk", sans-serif' }} className="text-2xl font-bold">Choose a service</h2>
            <div className="mt-5 grid gap-3 sm:grid-cols-2">
              {SERVICES.map(s => (
                <button key={s} onClick={() => { setSvc(s); setStep(2); }} className={`rounded-2xl border-2 p-4 text-left font-semibold transition ${svc === s ? "border-[#3AB0FF] bg-white" : "border-[#0B2A4A]/10 bg-white hover:border-[#3AB0FF]/40"}`}>{s}</button>
              ))}
            </div>
          </>
        ) : step === 2 ? (
          <>
            <h2 style={{ fontFamily: '"Space Grotesk", sans-serif' }} className="text-2xl font-bold">Pick a time slot (tomorrow)</h2>
            <div className="mt-5 grid grid-cols-3 gap-3 sm:grid-cols-4">
              {SLOTS.map(s => (
                <button key={s} onClick={() => { setSlot(s); setStep(3); }} className={`rounded-xl border-2 p-3 text-sm font-bold transition ${slot === s ? "border-[#3AB0FF] bg-[#3AB0FF] text-white" : "border-[#0B2A4A]/10 bg-white hover:border-[#3AB0FF]/40"}`}>{s}</button>
              ))}
            </div>
            <button onClick={() => setStep(1)} className="mt-6 text-sm font-semibold text-[#0B2A4A]/60">← Back</button>
          </>
        ) : (
          <form onSubmit={(e) => { e.preventDefault(); setDone(true); }}>
            <div className="text-sm text-[#0B2A4A]/70">{svc} · Tomorrow at {slot}</div>
            <div className="mt-5 grid gap-4 sm:grid-cols-2">
              <label className="block"><span className="text-xs font-bold uppercase tracking-wider text-[#0B2A4A]/70">Full name</span><input required className="mt-1.5 w-full rounded-xl border-2 border-[#0B2A4A]/10 bg-white px-4 py-3 text-sm outline-none focus:border-[#3AB0FF]" /></label>
              <label className="block"><span className="text-xs font-bold uppercase tracking-wider text-[#0B2A4A]/70">Phone / WhatsApp</span><input required inputMode="tel" className="mt-1.5 w-full rounded-xl border-2 border-[#0B2A4A]/10 bg-white px-4 py-3 text-sm outline-none focus:border-[#3AB0FF]" /></label>
              <label className="block sm:col-span-2"><span className="text-xs font-bold uppercase tracking-wider text-[#0B2A4A]/70">Any concerns to mention? (optional)</span><textarea rows={3} className="mt-1.5 w-full rounded-xl border-2 border-[#0B2A4A]/10 bg-white px-4 py-3 text-sm outline-none focus:border-[#3AB0FF]" /></label>
            </div>
            <div className="mt-6 flex items-center justify-between">
              <button type="button" onClick={() => setStep(2)} className="text-sm font-semibold text-[#0B2A4A]/60">← Back</button>
              <button className="rounded-full bg-[#3AB0FF] px-7 py-3.5 text-sm font-bold text-white shadow-md">Confirm booking →</button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
}
