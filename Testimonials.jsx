import Section from "./Section";

const TESTIMONIALS = [
  {
    quote:
      "Accredian Enterprise transformed how we think about talent development. Within six months, our data engineering team's velocity improved by forty percent.",
    name: "VP of Engineering",
    org: "Mid-Market SaaS Company",
  },
  {
    quote:
      "The combination of IIT-quality curriculum and live mentorship is unlike anything else in the market. Our engineers can now lead ML projects independently.",
    name: "Head of L&D",
    org: "Financial Services Firm",
  },
  {
    quote:
      "We onboarded three hundred managers across three geographies at once. The enterprise dashboard made tracking trivial — completion hit ninety-six percent.",
    name: "CHRO",
    org: "Global Manufacturing Group",
  },
];

export default function Testimonials() {
  return (
    <Section
      id="success-stories"
      tone="light"
      eyebrow="Success Stories"
      title="What L&D leaders say after a cohort ships"
    >
      <div className="grid gap-6 md:grid-cols-3">
        {TESTIMONIALS.map((t) => (
          <figure
            key={t.name}
            className="flex flex-col justify-between rounded-2xl border border-ink/10 bg-white p-8 shadow-sm"
          >
            <blockquote className="font-display text-lg italic leading-snug text-ink">
              &ldquo;{t.quote}&rdquo;
            </blockquote>
            <figcaption className="mt-6 border-t border-ink/10 pt-4">
              <p className="text-sm font-semibold text-ink">{t.name}</p>
              <p className="text-xs text-ink/55">{t.org}</p>
            </figcaption>
          </figure>
        ))}
      </div>
    </Section>
  );
}
