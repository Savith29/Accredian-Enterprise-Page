import SealMark from "./SealMark";

const STATS = [
  { value: "500+", label: "Live mentors" },
  { value: "94%", label: "Avg. completion rate" },
  { value: "12", label: "IIT / IIM partner faculties" },
  { value: "40%", label: "Reported team velocity gain" },
];

export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden bg-ink pt-32 pb-20 sm:pt-40 sm:pb-28">
      <div className="pointer-events-none absolute inset-0 grain-overlay" />
      <div
        className="pointer-events-none absolute -right-24 -top-24 h-[420px] w-[420px] rounded-full opacity-20 blur-3xl"
        style={{ background: "radial-gradient(circle, #C9A227 0%, transparent 70%)" }}
      />
      <div
        className="pointer-events-none absolute -left-32 bottom-0 h-[360px] w-[360px] rounded-full opacity-10 blur-3xl"
        style={{ background: "radial-gradient(circle, #1F6F5C 0%, transparent 70%)" }}
      />

      <div className="relative mx-auto grid max-w-6xl gap-14 px-6 lg:grid-cols-[1.15fr_0.85fr] lg:items-center lg:px-8">
        <div>
          <p className="eyebrow mb-6 flex items-center gap-3 text-brass">
            <span className="h-px w-8 bg-brass" />
            Enterprise Learning, Accredited
          </p>
          <h1 className="font-display text-4xl leading-[1.08] sm:text-5xl lg:text-[3.4rem]">
            Upskill your workforce with the rigor of{" "}
            <span className="italic text-brass">IIT & IIM</span> curricula.
          </h1>
          <p className="mt-6 max-w-xl text-lg text-ash">
            Accredian Enterprise partners with your L&amp;D team to design, deliver,
            and measure workforce upskilling programs &mdash; co-built with premier
            academic institutions and backed by live mentorship at scale.
          </p>

          <div className="mt-9 flex flex-col gap-4 sm:flex-row">
            <a
              href="#contact"
              className="rounded-full bg-brass px-7 py-3.5 text-center font-medium text-ink transition-transform hover:scale-[1.02] focus-ring"
            >
              Get a Custom Proposal
            </a>
            <a
              href="#how-it-works"
              className="rounded-full border border-parchment/25 px-7 py-3.5 text-center font-medium text-parchment transition-colors hover:border-brass hover:text-brass focus-ring"
            >
              See How It Works
            </a>
          </div>

          <dl className="mt-14 grid grid-cols-2 gap-x-8 gap-y-8 border-t border-ink-border pt-10 sm:grid-cols-4">
            {STATS.map((stat) => (
              <div key={stat.label}>
                <dt className="sr-only">{stat.label}</dt>
                <dd className="font-display text-2xl text-brass sm:text-3xl">{stat.value}</dd>
                <p className="mt-1 text-xs text-ash">{stat.label}</p>
              </div>
            ))}
          </dl>
        </div>

        <div className="relative mx-auto hidden aspect-square w-full max-w-sm items-center justify-center lg:flex">
          <div className="absolute inset-0 rounded-full border border-brass/20" />
          <div className="absolute inset-8 rounded-full border border-dashed border-brass/25" />
          <SealMark className="h-40 w-40" animate />
          <div className="absolute -bottom-2 left-1/2 w-max -translate-x-1/2 rounded-full border border-ink-border bg-ink-light px-4 py-2 shadow-seal">
            <p className="eyebrow text-brass">Certified &amp; Verifiable</p>
          </div>
        </div>
      </div>
    </section>
  );
}
