// app/portfolio/wellness-homeo-clinic/about-dr-sharma/page.js
// Doctor biography page for Dr. Rakesh Sharma (Wellness Homeo Clinic).
// Displays qualifications, background, philosophy, and credentials.
// Props: none

import { HomeoDisplay, Sprig, homeoBlob } from "../layout";

export const metadata = {
  title: "About Dr. Rakesh Sharma — Wellness Homeo Clinic",
  description: "18+ years of classical homeopathy in Pune. Meet Dr. Rakesh Sharma — his training, philosophy and approach to care.",
  openGraph: {
    title: "About Dr. Rakesh Sharma",
    description: "Classical homeopath, 18+ years, Pune.",
  },
};

/**
 * Doctor profile page component.
 */
export default function AboutDrSharma() {
  return (
    <div className="mx-auto max-w-6xl px-5 py-20 sm:px-8 sm:py-28">
      <Sprig className="mb-6 h-9 w-9 text-[#B8735A]" />
      <h1 className="max-w-3xl text-4xl leading-tight text-[#2F4A3D] sm:text-5xl">
        <HomeoDisplay>Dr. Rakesh Sharma, BHMS, MD (Hom).</HomeoDisplay>
      </h1>
      <p className="mt-4 max-w-2xl text-[15px] leading-relaxed text-[#26312B]/75">
        Eighteen years of listening carefully and prescribing gently.
      </p>
      
      <div className="mt-14 grid gap-14 md:grid-cols-[0.9fr_1.3fr]">
        <div style={{ borderRadius: homeoBlob }} className="aspect-[4/5] w-full bg-gradient-to-br from-[#2F4A3D] to-[#B8735A]/50" />
        <div className="space-y-6 text-[15.5px] leading-[1.85] text-[#26312B]/85">
          <p>Dr. Sharma began practising in 2006, after completing his BHMS at Bharati Vidyapeeth and his MD in Homeopathy from the Mumbai Homoeopathic Medical College. In the years since, more than ten thousand patients — many of them entire families across three generations — have made this small clinic on FC Road their family homeopath.</p>
          <p>His approach is classical: one carefully-chosen remedy at a time, followed patiently. First consultations run for an hour because he asks about everything — sleep, appetite, temperament, childhood illnesses, family history. The remedy that follows is chosen for the person, not the diagnosis label alone.</p>
          <div className="border-l-2 border-[#B8735A]/50 pl-5 italic text-[#2F4A3D]">"A good homeopath is first a good listener. The remedy comes second."</div>
          <div className="pt-4">
            <div className="text-[11px] uppercase tracking-[0.24em] text-[#B8735A]">Credentials</div>
            <ul className="mt-3 space-y-2 text-[14.5px]">
              <li>BHMS · Bharati Vidyapeeth, Pune (2004)</li>
              <li>MD (Hom.) · Mumbai Homoeopathic Medical College (2008)</li>
              <li>Life Member · Homoeopathic Medical Association of India</li>
              <li>Certified in Repertorisation & Case-Taking</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
