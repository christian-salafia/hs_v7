/*
 * The Human Signal mark, for dark surfaces (source: public/brand/hs-mark-on-dark.svg).
 * Decorative by default: pair it with the visible brand name.
 */
export function HsMark({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 100 100"
      className={className}
      aria-hidden="true"
    >
      <rect x="0" y="0" width="100" height="100" rx="22" fill="#191919" />
      <g
        transform="translate(0 2)"
        fill="none"
        strokeLinejoin="round"
        strokeLinecap="round"
      >
        <path
          d="M6 56 L11 55 L16 57 L21 55.5 L26 56.5 L34 56 L41 56"
          stroke="#fafafa"
          strokeOpacity="0.32"
          strokeWidth="3"
        />
        <path
          d="M64 56 L72 57 L78 55 L84 56.5 L89 55.5 L94 56"
          stroke="#fafafa"
          strokeOpacity="0.32"
          strokeWidth="3"
        />
        <path d="M41 56 L50 16 L59 80 L64 56" stroke="#ffc627" strokeWidth="6" />
      </g>
    </svg>
  );
}
