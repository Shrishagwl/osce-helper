import Link from "next/link";

const highlights = [
  {
    title: "Clinically grounded",
    description: "Scenarios mirror OSCE station formats and common exam workflows.",
  },
  {
    title: "Calm, structured practice",
    description: "Guided cues help you stay focused and reduce cognitive overload.",
  },
  {
    title: "Progress you can touch",
    description: "Track modules completed and stay motivated through milestones.",
  },
];

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-6xl px-6 py-16">
      <div className="rounded-3xl border border-slate-100 bg-white p-10 shadow-sm">
        <p className="text-xs font-semibold uppercase tracking-[0.25em] text-teal-600">
          Our mission
        </p>
        <h1 className="font-display mt-4 text-3xl text-slate-900 sm:text-4xl">
          Supporting medical students with calm, credible OSCE practice.
        </h1>
        <p className="mt-4 max-w-2xl text-lg text-slate-600">
          OSCE Helper is built to feel like the clinical tools students already trust. We focus on
          clear structure, realistic scenarios, and a consistent workflow so you can practice without
          extra stress.
        </p>
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {highlights.map((item) => (
            <div
              key={item.title}
              className="rounded-3xl border border-slate-100 bg-slate-50 p-6"
            >
              <h2 className="text-lg font-semibold text-slate-900">{item.title}</h2>
              <p className="mt-2 text-sm text-slate-600">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
