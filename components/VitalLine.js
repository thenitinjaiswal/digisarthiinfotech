// components/VitalLine.js
// Signature ECG vital line motif and section heading component for Digisarthi Info Tech.
// Used across section headers to reinforce medical focus.
// Props: VitalLine (className, color, strokeWidth, animated), SectionHeading (eyebrow, title, subtitle, align, color)

/**
 * Animated SVG heartbeat/vital line motif.
 */
export function VitalLine({
  className = "",
  color = "currentColor",
  strokeWidth = 1.5,
  animated = true,
}) {
  return (
    <svg
      viewBox="0 0 400 40"
      fill="none"
      preserveAspectRatio="none"
      aria-hidden="true"
      className={className}
    >
      <path
        d="M0 20 L 90 20 L 105 20 L 115 10 L 125 30 L 135 5 L 145 35 L 160 20 L 250 20 L 265 20 L 275 10 L 285 30 L 295 8 L 305 32 L 320 20 L 400 20"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
        className={animated ? "vital-line-draw" : undefined}
      />
    </svg>
  );
}

/**
 * Reusable section heading wrapper component with vital line accent underneath.
 */
export function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = "left",
  color = "var(--teal)",
}) {
  return (
    <div className={align === "center" ? "text-center" : ""}>
      {eyebrow && (
        <div className="font-mono-tabular text-[11px] uppercase tracking-[0.18em] text-teal">
          {eyebrow}
        </div>
      )}
      <h2 className="font-display mt-3 text-3xl font-semibold leading-tight text-navy sm:text-4xl">
        {title}
      </h2>
      <div
        className={`mt-3 h-2 w-40 ${align === "center" ? "mx-auto" : ""}`}
        aria-hidden="true"
      >
        <VitalLine color={color} strokeWidth={1.25} />
      </div>
      {subtitle && (
        <p className={`mt-4 max-w-2xl text-base text-muted-foreground ${align === "center" ? "mx-auto" : ""}`}>
          {subtitle}
        </p>
      )}
    </div>
  );
}
