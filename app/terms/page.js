// app/terms/page.js
// Terms of Service page outlining project scope, payment terms, code ownership, and liability.
// Props: none

export const metadata = {
  title: "Terms of Service | Digisarthi Info Tech",
  description: "Terms governing your engagement with Digisarthi Info Tech.",
  openGraph: {
    title: "Terms of Service",
    description: "Terms of engagement.",
    url: "/terms",
  },
};

/**
 * Terms of service page component.
 */
export default function Terms() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-20 sm:px-6 sm:py-24">
      <h1 className="font-display text-4xl font-semibold text-navy">Terms of Service</h1>
      <p className="mt-2 text-xs text-ink/60">Last updated: March 2026</p>
      
      <div className="mt-10 space-y-6 text-sm text-ink/80 leading-relaxed">
        <p>These terms describe how we work with clients who engage Digisarthi Info Tech to design and build a website. A separate, signed proposal governs each individual project — these terms apply alongside it.</p>
        
        <h2 className="font-display text-xl font-semibold text-navy pt-4">Scope of work</h2>
        <p>Every project scope is agreed in writing before work begins. Changes beyond the signed scope are quoted and approved before we start on them — no surprise invoices.</p>
        
        <h2 className="font-display text-xl font-semibold text-navy pt-4">Payments</h2>
        <p>Projects begin with a 50% advance and complete on the balance 50% at launch. All prices exclude GST where applicable. Domain and hosting are billed at cost or optionally managed by us for a small annual fee.</p>
        
        <h2 className="font-display text-xl font-semibold text-navy pt-4">Ownership</h2>
        <p>Once the balance is paid, you own the website, the source code, and every asset produced for you. We retain the right to feature the completed work in our portfolio unless you request otherwise.</p>
        
        <h2 className="font-display text-xl font-semibold text-navy pt-4">Medical accuracy</h2>
        <p>Medical content on your website is your professional responsibility. We help draft, structure and edit — but you review and approve everything before it goes live.</p>
        
        <h2 className="font-display text-xl font-semibold text-navy pt-4">Support & liability</h2>
        <p>Post-launch support is included per the plan you select. Beyond that, optional monthly care plans are available. Our maximum liability for any claim is limited to the fees paid for that project.</p>
        
        <h2 className="font-display text-xl font-semibold text-navy pt-4">Questions</h2>
        <p>Talk to us any time: hello@digisarthi.in or +91 8765610216.</p>
      </div>
    </div>
  );
}
