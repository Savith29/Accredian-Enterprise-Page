const PARTNERS = [
  "IIT Guwahati",
  "IIM Lucknow",
  "IIM Kozhikode",
  "XLRI Jamshedpur",
  "SP Jain",
  "IIT Delhi",
];

export default function TrustBar() {
  return (
    <div className="border-y border-ink-border bg-ink-light py-8">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <p className="eyebrow mb-6 text-center text-ash">
          Academic &amp; Delivery Partners
        </p>
        <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-4">
          {PARTNERS.map((name) => (
            <span
              key={name}
              className="font-display text-sm tracking-wide text-parchment/50 sm:text-base"
            >
              {name}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
