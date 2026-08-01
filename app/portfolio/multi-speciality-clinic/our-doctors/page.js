// app/portfolio/multi-speciality-clinic/our-doctors/page.js
// Doctor directory page listing 42 consultants across 18 specialities.
// Props: none

import { MscDisplay, IndexRule } from "../layout";

const DOCTORS = [
  { name: "Dr. Amit Deshpande", dept: "Cardiology", qual: "MD, DM (Cardiology), FSCAI", years: 22, note: "Interventional cardiologist, formerly at Ruby Hall Clinic." },
  { name: "Dr. Neha Kulkarni", dept: "Paediatrics", qual: "MBBS, MD (Paediatrics)", years: 15, note: "Newborn and adolescent care specialist. Runs the allergy clinic." },
  { name: "Dr. Priya Menon", dept: "Gynaecology", qual: "MBBS, MS (OBGY), DGO", years: 18, note: "High-risk obstetrics and laparoscopic gynaecology." },
  { name: "Dr. Sanjay Kapoor", dept: "Orthopaedics", qual: "MS (Ortho), Fellowship Joint Replacement", years: 20, note: "Knee and hip arthroplasty. Sports injuries." },
  { name: "Dr. Rakesh Iyer", dept: "Internal Medicine", qual: "MD (Internal Medicine)", years: 25, note: "Chief of medicine. Managing diabetes and hypertension." },
  { name: "Dr. Shalini Rao", dept: "Dermatology", qual: "MD (Dermatology), MRCP", years: 12, note: "Medical dermatology and paediatric skin." },
  { name: "Dr. Vivek Bhatt", dept: "Neurology", qual: "DM (Neurology)", years: 17, note: "Headache clinic, stroke rehabilitation, epilepsy." },
  { name: "Dr. Ananya Sen", dept: "Endocrinology", qual: "DM (Endocrinology)", years: 14, note: "Thyroid, PCOS, and paediatric endocrinology." },
  { name: "Dr. Farhan Sheikh", dept: "Pulmonology", qual: "MD (Pulmonary Medicine)", years: 16, note: "Asthma, sleep apnoea, and interstitial lung disease." },
];

export const metadata = {
  title: "Our Doctors — Meridian Health Multi-Speciality Clinic, Pune",
  description: "Meet our 42 consultants across 18 specialities — cardiology, paediatrics, gynaecology, orthopaedics and more.",
  openGraph: {
    title: "Our Doctors · Meridian Health",
    description: "42 consultants, 18 specialities.",
  },
};

/**
 * Our doctors directory page component.
 */
export default function OurDoctors() {
  return (
    <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8 sm:py-28">
      <div className="text-[11px] font-semibold uppercase tracking-[0.24em] text-[#8A6D3B]">Our Consultants · Index</div>
      <h1 className="mt-4 max-w-3xl text-5xl tracking-tight text-[#0F2340] sm:text-6xl"><MscDisplay>A senior consultant for every concern.</MscDisplay></h1>
      <IndexRule className="mt-14" />
      <div className="divide-y divide-[#0F2340]/10">
        {DOCTORS.map((d, i) => (
          <div key={d.name} className="grid gap-6 py-10 md:grid-cols-[80px_1fr_1fr_140px]">
            <div className="text-[11px] font-semibold uppercase tracking-[0.22em] text-[#8A6D3B]">{String(i+1).padStart(2, "0")}</div>
            <div>
              <div style={{ fontFamily: '"Source Serif 4", Georgia, serif' }} className="text-2xl text-[#0F2340]">{d.name}</div>
              <div className="mt-1 text-[13px] font-semibold uppercase tracking-wider text-[#8A6D3B]">{d.dept}</div>
            </div>
            <div className="text-[14.5px] text-[#0F2340]/75">
              <div className="font-semibold text-[#0F2340]">{d.qual}</div>
              <p className="mt-2">{d.note}</p>
            </div>
            <div className="text-right">
              <div style={{ fontFamily: '"Source Serif 4", Georgia, serif' }} className="text-3xl font-semibold text-[#0F2340]">{d.years}<span className="text-lg">yrs</span></div>
              <div className="text-[10px] uppercase tracking-[0.22em] text-[#8A6D3B]">Experience</div>
            </div>
          </div>
        ))}
      </div>
      <IndexRule />
    </div>
  );
}
