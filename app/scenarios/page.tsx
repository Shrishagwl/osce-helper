import Link from "next/link";
import { scenarios } from "../lib/scenarios";

export default function ScenariosPage() {
  return (
    <div className="mx-auto max-w-6xl px-6 py-16">
      <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-teal-600">
            Practice scenarios
          </p>
          <h1 className="font-display mt-4 text-3xl text-slate-900 sm:text-4xl">
            Choose a patient scenario.
          </h1>
          <p className="mt-3 max-w-xl text-slate-600">
            Select a station to begin. Each case is designed to reinforce calm, structured
            communication.
          </p>
        </div>
        <div className="flex w-full max-w-md items-center gap-3 rounded-2xl border border-slate-200 bg-white px-4 py-3 shadow-sm">
          <input
            type="text"
            placeholder="Search by symptom or topic"
            className="w-full bg-transparent text-sm text-slate-700 placeholder:text-slate-400 focus:outline-none"
            aria-label="Search scenarios"
          />
          <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold text-slate-600">
            Filter
          </span>
        </div>
      </div>

      <div className="mt-10 grid gap-6 md:grid-cols-2">
        {scenarios.map((scenario) => (
          <div
            key={scenario.id}
            className="rounded-3xl border border-slate-100 bg-white p-6 shadow-sm"
          >
            <div className="flex items-center justify-between text-xs text-slate-500">
              <span className="font-semibold text-teal-600">{scenario.category}</span>
              <span className="rounded-full bg-slate-100 px-2 py-0.5 text-slate-500">
                {scenario.difficulty}
              </span>
            </div>
            <h2 className="mt-4 text-xl font-semibold text-slate-900">
              {scenario.title}
            </h2>
            <p className="mt-2 text-sm text-slate-600">{scenario.description}</p>
            <div className="mt-4 text-sm text-slate-500">
              Patient: {scenario.patientName} • {scenario.patientAge} years old
            </div>
            <div className="mt-4 flex flex-wrap gap-2">
              {scenario.learningObjectives.map((item) => (
                <span
                  key={item}
                  className="rounded-full bg-slate-100 px-3 py-1 text-xs text-slate-600"
                >
                  {item}
                </span>
              ))}
            </div>
            <div className="mt-6 flex flex-col gap-3 sm:flex-row">
              <Link
                href={`/simulation?scenario=${scenario.id}`}
                className="flex-1 rounded-2xl bg-gradient-to-r from-teal-600 to-sky-500 px-4 py-2 text-center text-sm font-semibold text-white shadow-md shadow-teal-500/20"
              >
                Start simulation
              </Link>
              <Link
                href={`/simulation?scenario=${scenario.id}`}
                className="flex-1 rounded-2xl border border-slate-200 px-4 py-2 text-center text-sm font-semibold text-slate-700"
              >
                Preview prompts
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
