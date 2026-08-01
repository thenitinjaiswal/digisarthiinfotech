// components/Button.js
// Reusable styled button component supporting primary, secondary, outline, and text variants.
// Props: variant ('navy' | 'teal' | 'outline' | 'ghost'), size ('sm' | 'md' | 'lg'), href, onClick, children, className

import Link from "next/link";
import { cn } from "@/lib/utils";

/**
 * Standard button component supporting both button element and link element semantics.
 */
export function Button({
  children,
  variant = "navy",
  size = "md",
  href,
  onClick,
  className = "",
  type = "button",
  ...props
}) {
  const baseStyles = "inline-flex items-center justify-center font-semibold rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-teal focus:ring-offset-2";
  
  const variants = {
    navy: "bg-navy text-white hover:bg-navy/90 shadow-md shadow-navy/10",
    teal: "bg-teal text-white hover:bg-teal/90 shadow-md shadow-teal/10",
    outline: "border border-navy/25 bg-white text-navy hover:border-navy hover:bg-navy/5",
    ghost: "text-navy hover:bg-navy/5",
  };

  const sizes = {
    sm: "px-4 py-2 text-xs",
    md: "px-6 py-3 text-sm",
    lg: "px-8 py-4 text-base",
  };

  const combinedClasses = cn(baseStyles, variants[variant] || variants.navy, sizes[size] || sizes.md, className);

  if (href) {
    if (href.startsWith("http") || href.startsWith("tel:") || href.startsWith("mailto:")) {
      return (
        <a href={href} target="_blank" rel="noreferrer" className={combinedClasses} {...props}>
          {children}
        </a>
      );
    }
    return (
      <Link href={href} className={combinedClasses} {...props}>
        {children}
      </Link>
    );
  }

  return (
    <button type={type} onClick={onClick} className={combinedClasses} {...props}>
      {children}
    </button>
  );
}
