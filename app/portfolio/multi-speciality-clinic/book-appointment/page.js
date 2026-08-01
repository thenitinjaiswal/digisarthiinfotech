// app/portfolio/multi-speciality-clinic/book-appointment/page.js
// Interactive appointment request form component for Meridian Health Multi-Speciality Clinic.
// Props: none

'use client';

import { useForm } from "react-hook-form";
import { useState } from "react";
import { MscDisplay, IndexRule } from "../layout";

const DEPTS = ["Internal Medicine", "Cardiology", "Paediatrics", "Gynaecology", "Orthopaedics", "Dermatology", "Neurology", "Endocrinology", "Pulmonology", "Gastroenterology"];
const SLOTS = ["9:00 AM", "10:30 AM", "12:00 PM", "3:30 PM", "5:00 PM", "6:30 PM"];

/**
 * Multi-speciality appointment booking form component.
 */
export default function Book() {
  const { register, handleSubmit, formState: { errors, isSubmitting }, reset } = useForm();
  const [done, setDone] = useState(false);

  const onSubmit = async (d) => {
    await new Promise(r => setTimeout(r, 500));
    setDone(true);
    reset();
  };

  const cls = "mt-1.5 w-full rounded-sm border border-[#0F2340]/20 bg-white px-3.5 py-2.5 text-sm outline-none focus:border-[#0F2340]";

  return (
    <div className="mx-auto max-w-5xl px-5 py-20 sm:px-8 sm:py-28">
      <div className="text-[11px] font-semibold uppercase tracking-[0.24em] text-[#8A6D3B]">Book · Appointment</div>
      <h1 className="mt-4 text-5xl tracking-tight text-[#0F2340] sm:text-6xl"><MscDisplay>Book a consultation.</MscDisplay></h1>
      <p className="mt-4 max-w-xl text-[15px] text-[#0F2340]/72">We'll confirm your appointment on WhatsApp within 15 minutes during clinic hours.</p>
      <IndexRule className="mt-10" />

      {done ? (
        <div className="py-16 text-center">
          <div style={{ fontFamily: '"Source Serif 4", Georgia, serif' }} className="text-4xl text-[#0F2340]">Thank you.</div>
          <p className="mt-4 text-[#0F2340]/72">Your appointment request has been received. Reception will confirm on WhatsApp shortly.</p>
        </div>
      ) : (
        <form onSubmit={handleSubmit(onSubmit)} className="grid gap-6 py-10 md:grid-cols-2">
          <Field label="Full name" error={errors.name?.message}><input {...register("name", { required: "Required" })} className={cls} /></Field>
          <Field label="Phone / WhatsApp" error={errors.phone?.message}><input {...register("phone", { required: "Required", pattern: { value: /^[+0-9\s-]{7,15}$/, message: "Enter a valid number" } })} inputMode="tel" className={cls} /></Field>
          <Field label="Email" error={errors.email?.message} className="md:col-span-2"><input type="email" {...register("email", { required: "Required" })} className={cls} /></Field>
          
          <Field label="Department" error={errors.dept?.message}>
            <select {...register("dept", { required: "Required" })} defaultValue="" className={cls}>
              <option value="" disabled>Select department…</option>
              {DEPTS.map(d => <option key={d} value={d}>{d}</option>)}
            </select>
          </Field>
          
          <Field label="Preferred doctor (optional)"><input {...register("doctor")} className={cls} placeholder="e.g. Dr. Amit Deshpande" /></Field>
          <Field label="Preferred date" error={errors.date?.message}><input type="date" {...register("date", { required: "Required" })} className={cls} /></Field>
          
          <Field label="Preferred slot" error={errors.slot?.message}>
            <select {...register("slot", { required: "Required" })} defaultValue="" className={cls}>
              <option value="" disabled>Choose a slot…</option>
              {SLOTS.map(s => <option key={s} value={s}>{s}</option>)}
            </select>
          </Field>
          
          <Field label="Reason for visit (optional)" className="md:col-span-2"><textarea rows={4} {...register("notes")} className={cls} /></Field>

          <div className="md:col-span-2">
            <button disabled={isSubmitting} className="inline-flex items-center gap-2 rounded-sm bg-[#0F2340] px-8 py-3.5 text-sm font-semibold text-white disabled:opacity-60">{isSubmitting ? "Sending…" : "Request appointment →"}</button>
          </div>
        </form>
      )}
    </div>
  );
}

// Form field component
function Field({ label, error, className = "", children }) {
  return (
    <label className={`block ${className}`}>
      <span className="text-[10.5px] font-semibold uppercase tracking-[0.24em] text-[#8A6D3B]">{label}</span>
      {children}
      {error && <span className="mt-1 block text-xs text-red-700">{error}</span>}
    </label>
  );
}
