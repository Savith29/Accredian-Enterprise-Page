import Section from "./Section";

const STEPS = [
  {
    num: "I",
    title: "Map Skill Gaps",
    text: "Our consultants audit your teams' current baseline against your business goals and industry context.",
  },
  {
    num: "II",
    title: "Co-Create the Curriculum",
    text: "Academic partners and Accredian's program designers build a learning journey unique to your org.",
  },
  {
    num: "III",
    title: "Onboard & Mentor",
    text: "Teams get platform access, orientation, and are matched with mentors within their domain.",
  },
  {
    num: "IV",
    title: "Track & Optimize",
    text: "Monthly business reviews and live dashboards keep completion and ROI visible end-to-end.",
  },
];

export default function HowItWorks() {
  return (
    <Section
      id="how-it-works"
      eyebrow="How It Works"
      title="Read like a transcript, run like a program"
      description="Four entries, one ledger — the same sequence every enterprise cohort moves through, start to certification."
    >
      <div className="ledger-rule rounded-lg border border-ink-border">
        {STEPS.map((step, i) => (
          <div
            key={step.num}
            className={`flex flex-col gap-4 px-6 py-8 sm:flex-row sm:items-start sm:gap-8 sm:px-10 ${
              i !== STEPS.length - 1 ? "border-b border-ink-border/70" : ""
            }`}
          >
            <span className="font-display text-3xl italic text-brass sm:w-16 sm:shrink-0">
              {step.num}
            </span>
            <div>
              <h3 className="font-display text-xl">{step.title}</h3>
              <p className="mt-2 max-w-xl text-sm leading-relaxed text-ash">{step.text}</p>
            </div>
            <span className="eyebrow ml-auto hidden shrink-0 text-ash/70 sm:block">
              Entry {i + 1} / {STEPS.length}
            </span>
          </div>
        ))}
      </div>
    </Section>
  );
}
