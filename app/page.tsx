import Link from "next/link";

export default function Home() {
  const features = [
    {
      title: "Evidence-based scenarios",
      description:
        "Cases are structured around OSCE station formats and reviewed for clinical realism.",
    },
    {
      title: "Guided communication cues",
      description:
        "Prompted questioning helps you build rapport and avoid missing key red flags.",
    },
    {
      title: "Progress that feels motivating",
      description:
        "Track completion by module so you can keep momentum without guesswork.",
    },
  ];

  const steps = [
    {
      title: "Sign in and choose a focus",
      detail: "Pick a system, complaint, or communication skill to practice.",
    },
    {
      title: "Run the simulated station",
      detail:
        "Ask questions, explain your plan, and see realistic patient responses.",
    },
    {
      title: "Review your performance",
      detail:
        "Reflect on what went well and lock in your next practice block.",
    },
  ];

  const trustSignals = [
    {
      label: "Clinician-reviewed",
      detail: "Designed with medical educators.",
    },
    {
      label: "Privacy-first",
      detail: "Secure by default, ready for AWS Amplify.",
    },
    {
      label: "Mobile-friendly",
      detail: "Smooth practice between classes.",
    },
  ];

  return (
    <div className="text-slate-900">
      <section className="relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute -top-40 right-0 h-80 w-80 rounded-full bg-sky-100 opacity-60 blur-3xl" />
          <div className="absolute -bottom-32 left-0 h-80 w-80 rounded-full bg-teal-100 opacity-60 blur-3xl" />
        </div>

        <div className="relative mx-auto max-w-6xl px-6 py-16 sm:py-20 lg:py-24">
          <div className="rounded-[32px] border border-slate-100 bg-white/90 p-8 shadow-2xl shadow-slate-200/70 backdrop-blur-sm sm:p-10 lg:p-12">
            <div className="grid items-center gap-12 lg:grid-cols-[1.1fr_0.9fr]">
              <div>
                <div className="inline-flex items-center gap-2 rounded-full border border-teal-100 bg-white px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-teal-700">
                  Trusted OSCE practice
                </div>
                <h1 className="font-display mt-6 text-4xl leading-tight text-slate-900 sm:text-5xl">
                  Simulated patients that build confidence, calm, and clinical clarity.
                </h1>
                <p className="mt-5 max-w-xl text-lg text-slate-600">
                  OSCE Helper gives medical students a clear, structured way to practice patient
                  communication with realistic cases and a modern study experience.
                </p>

                <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                  <div className="flex w-full flex-1 items-center gap-3 rounded-2xl border border-slate-200 bg-white px-4 py-3 shadow-sm">
                    <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-teal-50 text-teal-700">
                      <svg
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        className="h-5 w-5"
                        aria-hidden="true"
                      >
                        <circle cx="11" cy="11" r="7" />
                        <path d="M20 20l-3.5-3.5" />
                      </svg>
                    </span>
                    <input
                      type="text"
                      placeholder="Search by symptom, system, or exam"
                      className="w-full bg-transparent text-sm text-slate-700 placeholder:text-slate-400 focus:outline-none"
                      aria-label="Search scenarios"
                    />
                  </div>
                <Link
                  href="/scenarios"
                  className="rounded-2xl bg-gradient-to-r from-teal-600 to-sky-500 px-6 py-3 text-center text-sm font-semibold text-white shadow-lg shadow-teal-500/30 transition hover:from-teal-700 hover:to-sky-600"
                >
                  Find a scenario
                </Link>
              </div>

                <div className="mt-10 grid gap-3 sm:grid-cols-3">
                  {trustSignals.map((item) => (
                    <div
                      key={item.label}
                      className="rounded-2xl border border-slate-100 bg-white px-4 py-3 text-sm shadow-sm"
                    >
                      <p className="font-semibold text-slate-900">{item.label}</p>
                      <p className="text-slate-500">{item.detail}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-2xl shadow-sky-100/60">
                <div className="flex items-center justify-between text-xs text-slate-500">
                  <span className="font-semibold text-slate-700">Your dashboard</span>
                  <span>Week 6 of 12</span>
                </div>
                <div className="mt-6 rounded-2xl border border-slate-100 bg-slate-50 p-4">
                  <div className="flex items-center justify-between text-sm">
                    <span className="font-semibold text-slate-900">Cardiology station</span>
                    <span className="rounded-full bg-emerald-50 px-2 py-0.5 text-xs font-semibold text-emerald-700">
                      On track
                    </span>
                  </div>
                  <p className="mt-2 text-sm text-slate-500">
                    Focus: chest pain, differential, shared decision-making.
                  </p>
                  <div className="mt-4 h-2 rounded-full bg-slate-200">
                    <div className="h-2 w-[70%] rounded-full bg-gradient-to-r from-teal-500 to-sky-500" />
                  </div>
                  <div className="mt-2 text-xs text-slate-500">70% complete</div>
                </div>

                <div className="mt-5 space-y-3">
                  {["Mental health intake", "Diabetes review", "Breaking bad news"].map(
                    (item) => (
                      <div
                        key={item}
                        className="flex items-center justify-between rounded-2xl border border-slate-100 bg-white px-4 py-3 text-sm"
                      >
                        <span className="font-medium text-slate-700">{item}</span>
                        <span className="rounded-full bg-slate-100 px-2 py-0.5 text-xs text-slate-500">
                          20 min
                        </span>
                      </div>
                    )
                  )}
                </div>

                <div className="mt-6 rounded-2xl border border-slate-100 bg-gradient-to-br from-sky-50 to-teal-50 p-4">
                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">
                    Next milestone
                  </p>
                  <p className="mt-2 text-sm font-semibold text-slate-900">
                    10 weeks to exams - you are on pace.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 pb-16">
        <div className="grid gap-6 md:grid-cols-3">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="rounded-3xl border border-slate-100 bg-white p-6 shadow-sm"
            >
              <div className="h-12 w-12 rounded-2xl bg-teal-50 text-teal-700 flex items-center justify-center">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  className="h-6 w-6"
                  aria-hidden="true"
                >
                  <path d="M4 12h16" />
                  <path d="M12 4v16" />
                </svg>
              </div>
              <h3 className="mt-4 text-lg font-semibold text-slate-900">
                {feature.title}
              </h3>
              <p className="mt-2 text-sm text-slate-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-16">
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-teal-600">
              How it works
            </p>
            <h2 className="font-display mt-4 text-3xl text-slate-900">
              A structured workflow that feels familiar and fast.
            </h2>
            <p className="mt-4 text-base text-slate-600">
              Designed for busy rotations, each step keeps you focused on the next best question and
              builds a habit of concise, patient-first communication.
            </p>
          </div>
          <div className="grid gap-4">
            {steps.map((step, index) => (
              <div
                key={step.title}
                className="flex gap-4 rounded-3xl border border-slate-100 bg-white p-6 shadow-sm"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-sky-50 text-sky-700 text-lg font-semibold">
                  {index + 1}
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-slate-900">{step.title}</h3>
                  <p className="mt-1 text-sm text-slate-600">{step.detail}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 pb-16">
        <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="rounded-3xl border border-slate-100 bg-white p-8 shadow-sm">
            <h2 className="font-display text-3xl text-slate-900">
              See the experience before you start.
            </h2>
            <p className="mt-3 text-slate-600">
              A short walkthrough helps first-time users understand the flow in minutes. Add your
              own demo video or GIFs to orient students quickly.
            </p>
            <div className="mt-6 rounded-2xl border border-dashed border-slate-200 bg-slate-50 p-6">
              <div className="flex items-center gap-4">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white text-teal-600 shadow-sm">
                  <svg
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="h-6 w-6"
                    aria-hidden="true"
                  >
                    <path d="M8 5l11 7-11 7V5z" />
                  </svg>
                </div>
                <div>
                  <p className="text-sm font-semibold text-slate-900">2-minute walkthrough</p>
                  <p className="text-xs text-slate-500">Captions recommended for quiet study spaces.</p>
                </div>
              </div>
            </div>
          </div>
          <div className="rounded-3xl border border-slate-100 bg-gradient-to-br from-sky-50 to-teal-50 p-8">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">
              Study momentum
            </p>
            <h3 className="font-display mt-4 text-2xl text-slate-900">
              Your progress is always visible.
            </h3>
            <p className="mt-3 text-sm text-slate-600">
              Completion stats and clear next steps help students stay motivated without extra
              stress.
            </p>
            <div className="mt-6 space-y-4">
              <div className="rounded-2xl bg-white p-4 shadow-sm">
                <div className="flex items-center justify-between text-sm">
                  <span className="font-semibold text-slate-700">Respiratory module</span>
                  <span className="text-slate-500">12/18 completed</span>
                </div>
                <div className="mt-3 h-2 rounded-full bg-slate-200">
                  <div className="h-2 w-[65%] rounded-full bg-gradient-to-r from-sky-500 to-teal-500" />
                </div>
              </div>
              <div className="rounded-2xl bg-white p-4 shadow-sm">
                <div className="flex items-center justify-between text-sm">
                  <span className="font-semibold text-slate-700">Communication skills</span>
                  <span className="text-slate-500">9/12 completed</span>
                </div>
                <div className="mt-3 h-2 rounded-full bg-slate-200">
                  <div className="h-2 w-[75%] rounded-full bg-gradient-to-r from-teal-500 to-sky-500" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 pb-20">
        <div className="rounded-3xl bg-slate-900 px-8 py-12 text-white lg:px-12">
          <div className="grid gap-6 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
            <div>
              <h2 className="font-display text-3xl">Ready to start your next station?</h2>
              <p className="mt-3 text-base text-slate-200">
                Keep your OSCE prep focused, calming, and efficient with a platform built for medical
                students.
              </p>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row">
              <Link
                href="/scenarios"
                className="rounded-2xl bg-gradient-to-r from-teal-500 to-sky-500 px-6 py-3 text-center text-sm font-semibold text-white shadow-lg shadow-teal-500/30"
              >
                Start practicing
              </Link>
              <Link
                href="/scenarios"
                className="rounded-2xl border border-white/30 px-6 py-3 text-center text-sm font-semibold text-white"
              >
                View scenarios
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
