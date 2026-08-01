// app/portfolio/wellness-homeo-clinic/conditions-we-treat/page.js
// Conditions page for Wellness Homeo Clinic demo site.
// Categorizes treatments by Skin, Chronic, Children, Women's Health, and Emotional health.
// Props: none

import { HomeoDisplay, Sprig } from "../layout";

const CONDITIONS = [
  { group: "Skin", items: [["Eczema & Atopic Dermatitis", "Deep, constitutional treatment for recurring flare-ups."], ["Urticaria (Hives)", "Both acute and chronic forms respond well over 3–6 months."], ["Psoriasis", "Slow, patient work — but many patients see lasting relief."], ["Acne & Pigmentation", "Gentle remedies without steroids or harsh creams."]] },
  { group: "Chronic", items: [["Migraines & Headaches", "Constitutional treatment rather than symptom suppression."], ["Sinusitis & Asthma", "Long-term reduction in flare frequency and severity."], ["Hypothyroidism", "Support alongside conventional care when needed."], ["Digestive Disorders", "IBS, gastritis, chronic acidity."]] },
  { group: "Children", items: [["Recurring Colds & Coughs", "Building immunity rather than repeatedly suppressing symptoms."], ["Colic & Feeding Issues", "Gentle care for infants."], ["Behavioural Concerns", "Anxiety, sleep issues, difficulty focusing."], ["Adolescent Skin", "Acne, puberty-related concerns."]] },
  { group: "Women's Health", items: [["Menstrual Irregularities", "PCOS, painful periods, irregular cycles."], ["Menopause", "Hormonal balance during transition years."], ["Chronic Fatigue", "Deep constitutional work."], ["Fertility Support", "Alongside gynaecological care where indicated."]] },
  { group: "Emotional", items: [["Anxiety & Sleeplessness", "Working with the person, not just the symptom."], ["Grief & Life Transitions", "Support during difficult periods."], ["Stress-Related Symptoms", "Physical manifestations of prolonged stress."]] },
];

export const metadata = {
  title: "Conditions We Treat — Wellness Homeo Clinic",
  description: "From stubborn skin conditions and chronic illness to child care and women's health — the conditions we see most often.",
  openGraph: {
    title: "Conditions We Treat",
    description: "Classical homeopathy for skin, chronic, children, women's health and stress-related concerns.",
  },
};

/**
 * Conditions list page component.
 */
export default function ConditionsWeTreat() {
  return (
    <div className="mx-auto max-w-6xl px-5 py-20 sm:px-8 sm:py-28">
      <div className="max-w-2xl">
        <Sprig className="mb-6 h-9 w-9 text-[#B8735A]" />
        <h1 className="text-4xl leading-tight text-[#2F4A3D] sm:text-5xl"><HomeoDisplay>Conditions we treat.</HomeoDisplay></h1>
        <p className="mt-5 text-[15px] leading-relaxed text-[#26312B]/75">Homeopathy works alongside your regular medical care. If you're unsure whether your concern is suitable, WhatsApp us — we'll tell you honestly.</p>
      </div>
      <div className="mt-16 space-y-14">
        {CONDITIONS.map(({ group, items }) => (
          <section key={group}>
            <div className="flex items-baseline gap-4 border-b border-[#2F4A3D]/15 pb-3">
              <span className="text-[11px] uppercase tracking-[0.24em] text-[#B8735A]">Group</span>
              <h2 style={{ fontFamily: '"Domine", Georgia, serif' }} className="text-2xl text-[#2F4A3D]">{group}</h2>
            </div>
            <div className="mt-6 grid gap-6 sm:grid-cols-2">
              {items.map(([t, d]) => (
                <div key={t} className="text-[15px]">
                  <div className="font-semibold text-[#2F4A3D]">{t}</div>
                  <p className="mt-1 text-[#26312B]/75">{d}</p>
                </div>
              ))}
            </div>
          </section>
        ))}
      </div>
    </div>
  );
}
