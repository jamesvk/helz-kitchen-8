import { Link } from "react-router";
import { site } from "../data/site";

// Call-to-action button. Links to the contact page by default.
// On gradient backgrounds, pass onGradient for an ivory button with navy text.
export function CtaButton({
  to = "/contact",
  onGradient = false,
}: {
  to?: string;
  onGradient?: boolean;
}) {
  const colors = onGradient ? "bg-ivory text-navy" : "bg-teal text-ivory";
  return (
    <Link
      to={to}
      className={`inline-block rounded-full px-6 py-3 font-medium ${colors}`}
    >
      {site.mainButtonText}
    </Link>
  );
}

// Labeled empty box standing in for a photo we do not have yet.
export function ImageSlot({
  label,
  className = "",
}: {
  label: string;
  className?: string;
}) {
  return (
    <div
      className={`flex items-center justify-center rounded-2xl border-2 border-dashed border-current p-8 text-center text-sm opacity-60 ${className}`}
    >
      {label}
    </div>
  );
}
