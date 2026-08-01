// app/privacy-policy/page.js
// Privacy Policy page detailing data collection, cookie usage, and privacy rights.
// Props: none

export const metadata = {
  title: "Privacy Policy | Digisarthi Info Tech",
  description: "How Digisarthi Info Tech collects, uses and protects your information.",
  openGraph: {
    title: "Privacy Policy",
    description: "How we handle your data.",
    url: "/privacy-policy",
  },
};

/**
 * Privacy policy page component.
 */
export default function Privacy() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-20 sm:px-6 sm:py-24 prose-content">
      <h1 className="font-display text-4xl font-semibold text-navy">Privacy Policy</h1>
      <p className="mt-2 text-xs text-ink/60">Last updated: March 2026</p>
      
      <div className="mt-10 space-y-6 text-sm text-ink/80 leading-relaxed">
        <p>This page explains what information we collect when you contact Digisarthi Info Tech through our website, how we use it, and the choices you have.</p>
        
        <h2 className="font-display text-xl font-semibold text-navy pt-4">Information we collect</h2>
        <p>When you submit our contact form or WhatsApp us, we collect the name, clinic name, speciality, phone number and any message you share. We also collect basic analytics via Google Analytics — pages viewed, device type, referring source — none of which personally identifies you.</p>
        
        <h2 className="font-display text-xl font-semibold text-navy pt-4">How we use your information</h2>
        <p>We use your details only to respond to your enquiry, prepare a proposal, and (with your permission) share occasional updates about our work. We never sell or share your data with third parties.</p>
        
        <h2 className="font-display text-xl font-semibold text-navy pt-4">Cookies</h2>
        <p>Our website uses essential cookies to function correctly, and analytics cookies to understand how visitors use the site. You can disable cookies in your browser settings at any time.</p>
        
        <h2 className="font-display text-xl font-semibold text-navy pt-4">Your rights</h2>
        <p>You can ask us to delete any information we hold about you by emailing hello@digisarthi.in. We'll confirm removal within 30 days.</p>
        
        <h2 className="font-display text-xl font-semibold text-navy pt-4">Contact</h2>
        <p>Questions about this policy? Reach us at hello@digisarthi.in or +91 8765610216.</p>
      </div>
    </div>
  );
}
