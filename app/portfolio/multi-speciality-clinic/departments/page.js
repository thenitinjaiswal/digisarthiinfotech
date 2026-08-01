// app/portfolio/multi-speciality-clinic/departments/page.js
// Departments directory page for Meridian Health Multi-Speciality Clinic.
// Props: none

import { MscDisplay, IndexRule } from "../layout";

const DEPARTMENTS = [
  { n: "Internal Medicine", d: "Adult primary care, chronic disease management, preventive check-ups." },
  { n: "Cardiology", d: "ECG, 2D Echo, stress test, holter monitoring, interventional consultation." },
  { n: "Paediatrics", d: "Newborn through adolescent care, vaccinations, growth monitoring." },
  { n: "Gynaecology & Obstetrics", d: "Antenatal care, high-risk obstetrics, laparoscopic surgery." },
  { n: "Orthopaedics", d: "Joint replacement, sports injuries, spine, paediatric orthopaedics." },
  { n: "Dermatology", d: "Medical dermatology, cosmetology, hair and paediatric skin." },
  { n: "Neurology", d: "Headache clinic, stroke rehabilitation, epilepsy, movement disorders." },
  { n: "Endocrinology", d: "Diabetes, thyroid, PCOS, paediatric and reproductive endocrinology." },
  { n: "Pulmonology", d: "Asthma, COPD, sleep apnoea, interstitial lung disease, PFT." },
  { n: "Gastroenterology", d: "Endoscopy, colonoscopy, liver clinic, IBS and inflammatory bowel disease." },
  { n: "Nephrology", d: "Chronic kidney disease, hypertension, and dialysis consultation." },
  { n: "Psychiatry", d: "Adult and adolescent mental health, therapy referrals." },
];

export const metadata = {
  title: "Departments & Specialities — Meridian Health Clinic",
  description: "18 medical specialities under one roof at Meridian Health — internal medicine, cardiology, paediatrics, orthopaedics and more.",
  openGraph: {
    title: "Departments · Meridian Health",
    description: "18 specialities, one clinic.",
  },
};

/**
 * Departments list page component.
 */
export default function DepartmentsPage() {
  return (
    <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8 sm:py-28">
      <div className="text-[11px] font-semibold uppercase tracking-[0.24em] text-[#8A6D3B]">Departments · Index</div>
      <h1 className="mt-4 max-w-3xl text-5xl tracking-tight text-[#0F2340] sm:text-6xl"><MscDisplay>Every speciality, working in one coordinated clinic.</MscDisplay></h1>
      <p className="mt-6 max-w-2xl text-[15.5px] text-[#0F2340]/72">Our consultants share notes across departments. If your paediatrician needs an endocrinologist's opinion on your child, that consultation happens in the same building — often the same day.</p>
      <IndexRule className="mt-14" />
      <div className="grid divide-y divide-[#0F2340]/10 md:grid-cols-2 md:divide-x md:divide-y-0">
        {DEPARTMENTS.map((dep, i) => (
          <div key={dep.n} className={`py-8 md:px-10 ${i >= 2 ? "md:border-t md:border-[#0F2340]/10" : ""}`}>
            <div className="text-[10px] font-semibold uppercase tracking-[0.22em] text-[#8A6D3B]">Dept · {String(i+1).padStart(2,"0")}</div>
            <h2 style={{ fontFamily: '"Source Serif 4", Georgia, serif' }} className="mt-2 text-3xl text-[#0F2340]">{dep.n}</h2>
            <p className="mt-3 text-[14.5px] leading-relaxed text-[#0F2340]/72">{dep.d}</p>
          </div>
        ))}
      </div>
      <IndexRule />
    </div>
  );
}
