import Section from "./Section";

const TRACKS = [
  { title: "Data Science & AI/ML", weeks: "24 wks", level: "Intermediate → Advanced" },
  { title: "Product Management", weeks: "16 wks", level: "Foundation → Intermediate" },
  { title: "People & Org Leadership", weeks: "12 wks", level: "Manager → Director" },
  { title: "Generative AI for Teams", weeks: "8 wks", level: "Foundation" },
];

export default function ProgramTracks() {
  return (
    <Section
      id="programs"
      eyebrow="Program Tracks"
      title="Pick a track, or let us build one"
      description="A starting catalog — every track above is a base that gets customized to your org's tooling and goals during onboarding."
    >
      <div className="overflow-hidden rounded-xl border border-ink-border">
        <table className="w-full text-left">
          <thead>
            <tr className="eyebrow border-b border-ink-border bg-ink-light text-ash">
              <th className="px-6 py-4 font-normal">Track</th>
              <th className="hidden px-6 py-4 font-normal sm:table-cell">Duration</th>
              <th className="px-6 py-4 font-normal">Level</th>
            </tr>
          </thead>
          <tbody>
            {TRACKS.map((track, i) => (
              <tr
                key={track.title}
                className={i !== TRACKS.length - 1 ? "border-b border-ink-border/70" : ""}
              >
                <td className="px-6 py-5 font-display text-base">{track.title}</td>
                <td className="hidden px-6 py-5 text-sm text-ash sm:table-cell">{track.weeks}</td>
                <td className="px-6 py-5 text-sm text-ash">{track.level}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </Section>
  );
}
