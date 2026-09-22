import Link from "next/link";
import type { ReactNode } from "react";

type Variant = "primary" | "outline" | "ghost";

const variants: Record<Variant, string> = {
  primary:
    "bg-maroon text-ivory hover:bg-maroon-dark border border-maroon hover:border-maroon-dark",
  outline:
    "bg-transparent text-charcoal border border-charcoal/30 hover:border-maroon hover:text-maroon",
  ghost:
    "bg-transparent text-ivory border border-ivory/40 hover:bg-ivory/10",
};

export default function ButtonLink({
  href,
  children,
  variant = "primary",
  className = "",
  external = false,
}: {
  href: string;
  children: ReactNode;
  variant?: Variant;
  className?: string;
  external?: boolean;
}) {
  const classes = `inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-semibold tracking-wide transition-colors duration-200 ${variants[variant]} ${className}`;

  if (external) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className={classes}>
        {children}
      </a>
    );
  }

  return (
    <Link href={href} className={classes}>
      {children}
    </Link>
  );
}