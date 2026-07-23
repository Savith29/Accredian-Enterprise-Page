import Section from "./Section";

const PILLARS = [
  {
    code: "CUR",
    title: "Curriculum, Co-Designed",
    text: "Every program is structured with faculty from IITs, IIMs, and global universities, then stress-tested for real workplace applicability.",
  },
  {
    code: "MEN",
    title: "Live Mentorship",
    text: "1:1 sessions with 500+ practitioners across AI/ML, Data Science, Product, and Leadership — not pre-recorded lectures.",
  },
  {
    code: "ANL",
    title: "Real-Time Analytics",
    text: "A command center for learner progress, engagement, and ROI reporting your L&D team can bring straight into a board review.",
  },
  {
    code: "COH",
    title: "Structured Cohorts",
    text: "Peer accountability and collaborative pacing drive completion rates that routinely clear 94%.",
  },
  {
    code: "CST",
    title: "Custom-Fit Programs",
    text: "Curriculum tailored to your organization's skill gaps, tech stack, and strategic goals. No one-size-fits-all tracks.",
  },
  {
    code: "CRT",
    title: "Verifiable Certification",
    text: "Globally recognized, shareable credentials from partner institutions that hold weight on a resume.",
  },
];

export default function Pillars() {
  return (
    <Section
      id="platform"
      tone="light"
      eyebrow="The Platform"
      title="The operating system for enterprise learning"
      description="From curriculum design to analytics — six pillars keep every cohort on track and every outcome measurable."
    >
      <div className="grid gap-px overflow-hidden rounded-2xl border border-ink/10 bg-ink/10 sm:grid-cols-2 lg:grid-cols-3">
        {PILLARS.map((pillar) => (
          <article
            key={pillar.code}
            className="group flex flex-col bg-parchment p-8 transition-colors hover:bg-white"
          >
            <span className="eyebrow mb-6 inline-flex w-fit rounded-full border border-seal/30 px-3 py-1 text-seal-dark">
              {pillar.code}
            </span>
            <h3 className="font-display text-xl text-ink">{pillar.title}</h3>
            <p className="mt-3 text-sm leading-relaxed text-ink/65">{pillar.text}</p>
          </article>
        ))}
      </div>
    </Section>
  );
}
