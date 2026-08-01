// lib/utils.js
// Utility functions for class name merging and Tailwind class handling.
// Uses clsx and tailwind-merge to combine dynamic class names safely.

import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

/**
 * Combines multiple CSS class names and merges overlapping Tailwind classes.
 * @param {...any} inputs - Class names, objects, or arrays
 * @returns {string} Merged class names string
 */
export function cn(...inputs) {
  return twMerge(clsx(inputs));
}
