export default function SealMark({ className = "h-9 w-9", animate = false }) {
  return (
    <svg
      viewBox="0 0 64 64"
      className={`${className} ${animate ? "seal-spin" : ""}`}
      aria-hidden="true"
    >
      <circle cx="32" cy="32" r="30" fill="none" stroke="#C9A227" strokeWidth="1.5" />
      <circle cx="32" cy="32" r="24" fill="none" stroke="#C9A227" strokeWidth="1" strokeDasharray="2 4" />
      <path
        d="M32 14 L38 26 L51 28 L41.5 37 L44 50 L32 43.5 L20 50 L22.5 37 L13 28 L26 26 Z"
        fill="none"
        stroke="#C9A227"
        strokeWidth="1.4"
        strokeLinejoin="round"
      />
      <circle cx="32" cy="32" r="4.5" fill="#C9A227" />
    </svg>
  );
}
