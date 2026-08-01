// components/ProcessStep.js
// Process step item component displaying step index, title, and detailed description.
// Props: step object (title, body), index number

/**
 * Step item component for website creation process timeline.
 */
export function ProcessStep({ step, index }) {
  const { title, body } = step;

  return (
    <li className="relative rounded-2xl border border-hairline bg-white p-6">
      <div className="font-mono-tabular text-xs text-teal">Step {String(index + 1).padStart(2, "0")}</div>
      <h3 className="font-display mt-2 text-lg font-semibold text-navy">{title}</h3>
      <p className="mt-2 text-sm text-ink/75">{body}</p>
    </li>
  );
}
