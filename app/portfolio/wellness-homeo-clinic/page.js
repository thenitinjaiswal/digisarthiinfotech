// app/portfolio/wellness-homeo-clinic/page.js
// Home page for Wellness Homeo Clinic demo site (Botanical Calm genre).
// Features unhurried consultation values, conditions grid, clinic timings, and location map.
// Props: none

import Link from "next/link";
import { MessageCircle, Clock, MapPin } from "lucide-react";
import { Sprig, HomeoDisplay, homeoBlob } from "./layout";

export const metadata = {
  title: "Wellness Homeo Clinic — Gentle homeopathy for the whole family",
  description: "Classical homeopathy in Pune. 18+ years of practice, families welcome. Book a consultation on WhatsApp.",
  openGraph: {
    title: "Wellness Homeo Clinic",
    description: "Gentle, individualised homeopathy for the whole family.",
    type: "website",
  },
};

/**
 * Wellness Homeo Clinic demo homepage.
 */
export default function HomeoHome() {
  return (
    <>
      <section className="relative overflow-hidden">
        <Sprig className="pointer-events-none absolute -right-4 top-0 h-72 w-72 text-[#2F4A3D]/12 sm:right-12 sm:h-96 sm:w-96" />
        <div className="mx-auto grid max-w-6xl gap-12 px-5 py-20 sm:px-8 sm:py-28 md:grid-cols-[1.1fr_1fr] md:items-center">
          <div>
            <div className="text-[11px] uppercase tracking-[0.28em] text-[#B8735A]">Classical Homeopathy · Since 2006</div>
            <h1 className="mt-5 text-4xl leading-[1.1] text-[#2F4A3D] sm:text-6xl"><HomeoDisplay>Healing that treats the whole person, not just the symptom.</HomeoDisplay></h1>
            <p className="mt-6 max-w-lg text-[15px] leading-relaxed text-[#26312B]/78">Dr. Rakesh Sharma has spent eighteen years listening carefully, prescribing gently, and walking with families through their most stubborn conditions.</p>
            <div className="mt-9 flex flex-wrap gap-3">
              <a href="https://wa.me/918765610216" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full bg-[#2F4A3D] px-6 py-3 text-sm font-semibold text-[#F7F2EA]"><MessageCircle className="h-4 w-4" /> Book a consultation</a>
              <Link href="/portfolio/wellness-homeo-clinic/conditions-we-treat" className="inline-flex items-center rounded-full border border-[#2F4A3D]/25 bg-transparent px-6 py-3 text-sm font-semibold text-[#2F4A3D] hover:bg-[#2F4A3D]/5">See what we treat →</Link>
            </div>
          </div>
          <div className="relative">
            <div style={{ borderRadius: homeoBlob }} className="aspect-[4/5] w-full bg-gradient-to-br from-[#2F4A3D] via-[#3d5c4d] to-[#B8735A]/40" />
            <div style={{ borderRadius: "60% 40% 55% 45% / 45% 55% 45% 55%" }} className="absolute -bottom-8 -left-6 h-40 w-40 bg-[#B8735A]/25" />
          </div>
        </div>
      </section>

      <section className="border-t border-[#2F4A3D]/10 py-20">
        <div className="mx-auto grid max-w-6xl gap-14 px-5 sm:px-8 md:grid-cols-[1fr_1.4fr] md:items-start">
          <div>
            <Sprig className="mb-5 h-10 w-10 text-[#B8735A]" />
            <h2 className="text-3xl text-[#2F4A3D] sm:text-4xl"><HomeoDisplay>A quiet practice, an unhurried consultation.</HomeoDisplay></h2>
          </div>
          <div className="space-y-5 text-[15px] leading-[1.75] text-[#26312B]/85">
            <p>Every first visit takes an hour. We ask about your sleep, your worries, your childhood illnesses — everything that a fifteen-minute appointment simply cannot cover. Because in classical homeopathy, the remedy fits the person, not just the diagnosis.</p>
            <p>Over ten thousand patients have walked through these doors — some for a stubborn skin rash, others for their grandchild's recurring cough. Many stay for decades.</p>
            <Link href="/portfolio/wellness-homeo-clinic/about-dr-sharma" className="inline-block border-b border-[#B8735A]/60 pb-0.5 text-sm font-semibold text-[#2F4A3D] hover:border-[#B8735A]">Read about Dr. Sharma →</Link>
          </div>
        </div>
      </section>

      <section className="bg-[#EDE4D3] py-20">
        <div className="mx-auto max-w-6xl px-5 sm:px-8">
          <h2 className="max-w-2xl text-3xl text-[#2F4A3D] sm:text-4xl"><HomeoDisplay>Gentle care for the conditions families bring to us.</HomeoDisplay></h2>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 md:grid-cols-3">
            {[
              ["Skin & Allergies", "Eczema, urticaria, chronic sinusitis and seasonal allergies."],
              ["Chronic Illness", "Persistent conditions that respond well to a slower, deeper approach."],
              ["Child Care", "Recurring colds, colic, sleep and behavioural concerns."],
              ["Women's Health", "Hormonal balance, menstrual concerns, menopause."],
              ["Stress-Related", "Anxiety, sleeplessness and physical symptoms of stress."],
              ["Lifestyle Disorders", "Migraines, digestive imbalance, low immunity."],
            ].map(([t, d]) => (
              <div key={t} className="border-t border-[#2F4A3D]/20 pt-5">
                <div style={{ fontFamily: '"Domine", Georgia, serif' }} className="text-lg text-[#2F4A3D]">{t}</div>
                <p className="mt-2 text-sm leading-relaxed text-[#26312B]/75">{d}</p>
              </div>
            ))}
          </div>
          <Link href="/portfolio/wellness-homeo-clinic/conditions-we-treat" className="mt-10 inline-block border-b border-[#B8735A] pb-0.5 text-sm font-semibold text-[#2F4A3D]">Full list of conditions →</Link>
        </div>
      </section>

      <section className="py-20">
        <div className="mx-auto grid max-w-6xl gap-10 px-5 sm:px-8 md:grid-cols-2">
          <div className="border border-[#2F4A3D]/15 bg-white p-8">
            <div className="flex items-center gap-2 text-[11px] uppercase tracking-[0.24em] text-[#B8735A]"><Clock className="h-3.5 w-3.5" /> Clinic Timings</div>
            <ul className="mt-6 space-y-3 text-[15px] text-[#26312B]/85">
              <li className="flex justify-between border-b border-[#2F4A3D]/10 pb-3"><span>Mon – Fri</span><span>10 AM – 1 PM · 5 – 8:30 PM</span></li>
              <li className="flex justify-between border-b border-[#2F4A3D]/10 pb-3"><span>Saturday</span><span>10 AM – 2 PM</span></li>
              <li className="flex justify-between pb-1"><span>Sunday</span><span>By appointment</span></li>
            </ul>
          </div>
          <div className="border border-[#2F4A3D]/15 bg-white p-8">
            <div className="flex items-center gap-2 text-[11px] uppercase tracking-[0.24em] text-[#B8735A]"><MapPin className="h-3.5 w-3.5" /> Find the Clinic</div>
            <div className="mt-6 text-[15px] leading-relaxed text-[#26312B]/85">2nd Floor, Sarthak Plaza,<br />FC Road, Pune 411004</div>
            <Link href="/portfolio/wellness-homeo-clinic/visit-contact" className="mt-6 inline-block text-sm font-semibold text-[#2F4A3D] underline decoration-[#B8735A] underline-offset-4">Get directions & map →</Link>
          </div>
        </div>
      </section>
    </>
  );
}
