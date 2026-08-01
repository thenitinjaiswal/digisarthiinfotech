// lib/siteData.js
// Shared data store for Digisarthi Info Tech website.
// Contains contact details, specialities data, pricing tiers, process steps, testimonials, blog articles, and portfolio demos.
// Used across main site pages, dynamic routes, and preview cards.

import {
  Leaf, Smile, Stethoscope, Sparkles, Baby, HeartPulse, Bone, FlaskConical,
} from "lucide-react";

// Helper function to build WhatsApp URL with pre-filled message
export const DEFAULT_WA_MSG = "Hello Digisarthi Info Tech, I would like to know more about a website for my medical practice.";

/**
 * Returns a formatted WhatsApp wa.me URL with a custom pre-filled message parameter.
 * @param {string} text - Message content to pre-fill in WhatsApp chat
 * @returns {string} Encoded WhatsApp URL
 */
export const getWaUrl = (text = DEFAULT_WA_MSG) => {
  return `https://wa.me/918765610216?text=${encodeURIComponent(text)}`;
};

// Official contact details and default pre-filled WhatsApp URL
export const WA_URL = getWaUrl(DEFAULT_WA_MSG);
export const PHONE = "+91 8765610216";
export const PHONE_TEL = "tel:+918765610216";
export const EMAIL = "hello@digisarthi.in";

// Medical specialities catalogue with search rationale and portfolio demo pairings
export const SPECIALITIES = [
  {
    slug: "homeopathy", label: "Homeopathy", icon: Leaf,
    tagline: "Websites Built for Homeopathy Practitioners",
    patientReasons: [
      "Parents searching for gentle, chronic-care options for their children",
      "Adults with stubborn skin, allergy or lifestyle conditions wanting a second opinion",
      "Families looking for a trusted, long-term family homeopath in their area",
    ],
    portfolioSlug: "wellness-homeo-clinic",
    copy: "Homeopathy patients spend weeks reading before they call. Your website is that reading — it decides whether they book with you or the next name in the search results.",
  },
  {
    slug: "dentists", label: "Dentists", icon: Smile,
    tagline: "Websites Built for Dentists & Dental Clinics",
    patientReasons: [
      "Patients in tooth pain searching \"dentist near me\" on their phone",
      "Families comparing braces, aligners and whitening prices before visiting",
      "Working professionals booking evening or weekend appointments online",
    ],
    portfolioSlug: "smile-care-dental-clinic",
    copy: "Dental patients almost always search on mobile, and almost always decide in under two minutes. Your website has to load fast, show your services clearly, and let them book without a phone call.",
  },
  {
    slug: "general-physicians", label: "General Physicians", icon: Stethoscope,
    tagline: "Websites Built for General Physicians & Family Doctors",
    patientReasons: [
      "New residents in the area looking for a regular family doctor",
      "Patients needing evening consultations after work",
      "Families with elderly parents who need a doctor they can call and trust",
    ],
    portfolioSlug: "multi-speciality-clinic",
    copy: "General physicians build practices on trust and neighbourhood presence. A well-built website makes you the first name that comes up when a family in your locality searches online.",
  },
  {
    slug: "dermatologists", label: "Dermatologists", icon: Sparkles,
    tagline: "Websites Built for Dermatologists & Skin Clinics",
    patientReasons: [
      "Young adults researching acne, hair loss and pigmentation treatments",
      "Patients comparing before/after results before choosing a clinic",
      "Brides and grooms looking for pre-wedding skin & hair packages",
    ],
    portfolioSlug: "multi-speciality-clinic",
    copy: "Skin patients want to see proof before they visit. A clean, credible website with a services page, gallery and clear pricing puts you a step ahead of every glossy competitor.",
  },
  {
    slug: "pediatricians", label: "Pediatricians", icon: Baby,
    tagline: "Websites Built for Pediatricians & Child Specialists",
    patientReasons: [
      "New parents searching for a paediatrician for vaccinations and check-ups",
      "Anxious parents trying to reach a doctor after clinic hours",
      "Families switching pediatricians after moving to a new city",
    ],
    portfolioSlug: "multi-speciality-clinic",
    copy: "Parents choose paediatricians the way they choose schools — carefully, and with plenty of reading. Your website should feel warm, safe and easy to reach out to on WhatsApp.",
  },
  {
    slug: "gynecologists", label: "Gynecologists", icon: HeartPulse,
    tagline: "Websites Built for Gynecologists & Women's Clinics",
    patientReasons: [
      "Women looking for a doctor they can talk to comfortably and privately",
      "First-time pregnancies searching for a nearby maternity specialist",
      "Patients comparing PCOS, infertility and menopause care options",
    ],
    portfolioSlug: "multi-speciality-clinic",
    copy: "For gynecology, trust and discretion are everything. A calm, professional website with a clear doctor profile and easy WhatsApp booking is often the deciding factor.",
  },
  {
    slug: "orthopedics", label: "Orthopedics", icon: Bone,
    tagline: "Websites Built for Orthopedic Surgeons & Bone Clinics",
    patientReasons: [
      "Patients with knee, back or joint pain searching for a specialist",
      "Sports injuries needing quick, credible consultation options",
      "Elderly patients and their children evaluating joint-replacement clinics",
    ],
    portfolioSlug: "multi-speciality-clinic",
    copy: "Ortho patients are usually in pain and short on patience. Your site must instantly show your credentials, treatments offered and how to book — no clutter.",
  },
  {
    slug: "ayurveda", label: "Ayurveda", icon: FlaskConical,
    tagline: "Websites Built for Ayurvedic Practitioners & Clinics",
    patientReasons: [
      "Patients looking for natural alternatives after years of allopathic treatment",
      "Wellness-focused adults searching for panchakarma and detox programmes",
      "Chronic-illness patients seeking constitution-based Ayurvedic care",
    ],
    portfolioSlug: "multi-speciality-clinic",
    copy: "Ayurveda buyers are among the most research-heavy patients online. A calm, credible website that explains your approach and shows results earns them long before the first call.",
  },
];

// Why doctors need a website feature points
export const WHY_CARDS = [
  { title: "Instant Credibility", body: "Patients Google you before they call. A polished website tells them you're serious about your practice." },
  { title: "Local Google Search Visibility", body: "Show up when someone in your neighbourhood searches for your speciality — that's where 70% of new patients start." },
  { title: "More Booked Appointments", body: "WhatsApp click-to-chat and enquiry links turn casual visitors into confirmed appointments, even at 11pm." },
  { title: "24×7 Digital Front Desk", body: "Answer your patients' most common questions, share timings, and take bookings — even when the clinic is closed." },
];

// Standard inclusions across all website packages
export const INCLUDED = [
  "Mobile-first responsive design",
  "Doctor profile section with photo, credentials & experience",
  "Treatment / conditions / services pages",
  "Clinic location with Google Maps embed",
  "WhatsApp click-to-chat button on every page with pre-filled messages",
  "Lead notification setup for instant WhatsApp enquiries",
  "On-page SEO (titles, meta, structured data)",
  "Google Analytics setup",
  "SSL-secure build",
];

// Transparent pricing plans for solo doctors and growing practices
// Gold is highlighted as popular because it fits 80% of independent doctor clinics
export const PRICING = [
  {
    name: "Silver", price: "₹12,999", tagline: "For solo doctors starting online.",
    waMsg: "Hello Digisarthi Info Tech, I am interested in the Silver plan (₹12,999) for my clinic website.",
    features: [
      "Up to 5 pages", "Mobile responsive", "Doctor profile section",
      "WhatsApp button with custom pre-filled message", "Basic SEO",
      "1 round of revisions", "15 days post-launch support",
    ],
  },
  {
    name: "Gold", price: "₹24,999", tagline: "Most doctors pick this plan.", popular: true,
    waMsg: "Hello Digisarthi Info Tech, I am interested in the Gold plan (₹24,999) for my clinic website.",
    features: [
      "Up to 8 pages", "Everything in Silver, plus:", "Google Business Profile setup",
      "Blog section", "Direct WhatsApp appointment setup", "Testimonials section",
      "2 rounds of revisions", "30 days post-launch support",
    ],
  },
  {
    name: "Platinum", price: "₹44,999", tagline: "For multi-doctor & multi-speciality clinics.",
    waMsg: "Hello Digisarthi Info Tech, I am interested in the Platinum plan (₹44,999) for my clinic website.",
    features: [
      "12+ pages", "Everything in Gold, plus:", "Advanced local SEO",
      "WhatsApp auto-reply setup", "Multi-doctor / department support",
      "3 rounds of revisions", "90 days post-launch support",
    ],
  },
];

// Six-step transparent design and development process
export const PROCESS_STEPS = [
  { title: "Discovery Call", body: "A 20-minute conversation to understand your practice, your patients and what \"success\" looks like for your website." },
  { title: "Content & Structure", body: "We map out your pages, write the copy in your voice, and gather your credentials, timings and photos." },
  { title: "Design", body: "You get a design mockup built specifically around your speciality — not a recycled template." },
  { title: "Development", body: "We build the site mobile-first, wire up pre-filled WhatsApp links, and set up SEO and analytics." },
  { title: "Review & Revisions", body: "You test it on your phone, share it with your team, and we polish it round by round until it's right." },
  { title: "Launch & Support", body: "We publish to your domain, submit to Google, and stay on call to help you with edits and questions." },
];

// Verified doctor client reviews
export const TESTIMONIALS = [
  {
    name: "Dr. Rakesh Sharma", role: "Homeopath, Pune",
    quote: "In the first month after launch I got twelve new patient enquiries through WhatsApp. They understood exactly what a homeopathy practice needs — I didn't have to explain it.",
  },
  {
    name: "Dr. Anjali Mehta", role: "Dentist, Mumbai",
    quote: "My old site was made by a generalist agency. This one was made for a dental clinic — services, before-afters, online booking. My chair is fuller on Mondays now.",
  },
  {
    name: "Dr. Vivek Rao", role: "General Physician, Bangalore",
    quote: "They handled everything — copy, design, Google listing. Patients now find me on Google before word-of-mouth reaches them. Best decision this year.",
  },
];

// Published blog articles for doctor digital marketing advice
export const BLOG_POSTS = [
  {
    slug: "why-doctors-need-a-website-2026",
    title: "5 Reasons Every Doctor Needs a Website in 2026",
    excerpt: "In 2026, patients don't ask their neighbours first — they Google. Here's why a website is no longer optional for any independent doctor or small clinic.",
    minutes: 6,
    date: "March 12, 2026",
  },
  {
    slug: "how-patients-search-for-clinics-near-them",
    title: "How Patients Search for Clinics Near Them (And How to Show Up)",
    excerpt: "The exact search phrases patients use, why Google ranks some clinics above others, and the three things every doctor should do to appear in local searches.",
    minutes: 7,
    date: "February 28, 2026",
  },
  {
    slug: "whatsapp-booking-for-small-clinics",
    title: "WhatsApp Booking: Why It's a Game-Changer for Small Clinics",
    excerpt: "Patients don't want to fill forms — they want to chat. Here's how a simple WhatsApp booking flow can double confirmed appointments in a small clinic.",
    minutes: 5,
    date: "February 10, 2026",
  },
];

// Portfolio demo websites representing 3 distinct aesthetic genres
export const PORTFOLIO = [
  {
    slug: "wellness-homeo-clinic",
    name: "Wellness Homeo Clinic",
    speciality: "Homeopathy",
    tagline: "Warm, credible website for a solo homeopath with 18+ years of practice.",
    accent: "terracotta",
    image: "/portfolio-homeo.png",
  },
  {
    slug: "smile-care-dental-clinic",
    name: "Smile Care Dental Clinic",
    speciality: "Dentistry",
    tagline: "Bright, modern site with online booking and a before/after smile gallery.",
    accent: "mint",
    image: "/portfolio-dental.png",
  },
  {
    slug: "multi-speciality-clinic",
    name: "Multi-Speciality Clinic",
    speciality: "Multi-Speciality",
    tagline: "Premium website for a multi-doctor clinic with departments and health articles.",
    accent: "navy",
    image: "/portfolio-multispeciality.png",
  },
];
