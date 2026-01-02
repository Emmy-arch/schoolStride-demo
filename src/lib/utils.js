/**
 * cn (classNames)
 * ----------------
 * A small helper function for joining CSS class names together.
 * 
 * Why this exists:
 * - Makes JSX cleaner
 * - Avoids messy string concatenation
 * - Safely ignores falsy values (false, null, undefined, "")
 *
 * Example:
 * cn("text-sm", isActive && "bg-blue-500", className)
 * 
 * Result:
 * - Only valid class names are joined into a single string
 */

export function cn(...classes) {
  return classes
    .filter(Boolean)   // Remove falsy values
    .join(" ");        // Join remaining classes with space
}
