/**
 * Brand primitives built from the Dimension logo: the geometric "D" with two
 * supporting hands inside it, and the "Dimension Line" (●────●────●).
 * Pure SVG / server components — no client JS.
 */

type MarkProps = {
  className?: string;
  /** 'color' = brand blues, 'outline' = single-colour line art (inherits currentColor) */
  variant?: 'color' | 'outline';
  title?: string;
};

/** Geometric D + support hands, redrawn as clean vector line art. */
export function DimensionMark({ className = '', variant = 'color', title }: MarkProps) {
  const outline = variant === 'outline';
  return (
    <svg
      viewBox="0 0 120 120"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      role={title ? 'img' : undefined}
      aria-hidden={title ? undefined : true}
    >
      {title ? <title>{title}</title> : null}
      {/* The D */}
      <path
        d="M22 12h36a48 48 0 0 1 0 96H22z"
        stroke={outline ? 'currentColor' : '#1687C9'}
        strokeWidth={outline ? 1.5 : 9}
        strokeLinejoin="round"
      />
      {/* Upper hand — reaching down (deep navy) */}
      <path
        d="M92 30c-16 2-30 12-38 26-3 5-7 8-12 9"
        stroke={outline ? 'currentColor' : '#063B70'}
        strokeWidth={outline ? 1.5 : 7}
        strokeLinecap="round"
      />
      {/* Lower hand — lifting up (light blue) */}
      <path
        d="M30 90c16-2 30-12 38-26 3-5 7-8 12-9"
        stroke={outline ? 'currentColor' : '#35A9E0'}
        strokeWidth={outline ? 1.5 : 7}
        strokeLinecap="round"
      />
    </svg>
  );
}

/** Thin blue rule with evenly spaced nodes. */
export function DimensionLine({
  nodes = 4,
  className = '',
  tone = 'blue'
}: {
  nodes?: number;
  className?: string;
  tone?: 'blue' | 'light';
}) {
  return (
    <div aria-hidden className={`dimension-line ${className}`}>
      {Array.from({ length: nodes }).map((_, i) => (
        <span
          key={i}
          className={`dimension-node ${tone === 'light' ? '!border-aqua !bg-navy' : ''}`}
        />
      ))}
    </div>
  );
}
