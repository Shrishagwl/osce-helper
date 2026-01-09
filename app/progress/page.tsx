"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

const progressRows = [
  { label: "Cardiology", complete: "7/10 completed", percent: "70%" },
  { label: "Mental health", complete: "5/8 completed", percent: "62%" },
  { label: "Communication skills", complete: "9/12 completed", percent: "75%" },
];

export default function ProgressPage() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const stored = window.localStorage.getItem("osce-auth") === "true";
    setIsLoggedIn(stored);
  }, []);

  if (!isLoggedIn) {
    return (
      <div className="mx-auto max-w-4xl px-6 py-16">
        <div className="rounded-3xl border border-slate-100 bg-white p-10 text-center shadow-sm">
          <h1 className="font-display text-3xl text-slate-900">
            Login to view progress
          </h1>
          <p className="mt-3 text-slate-600">
            Your progress is saved to your account. Sign in to continue.
          </p>
          <Link
            href="/login"
            className="mt-6 inline-flex rounded-2xl bg-slate-900 px-6 py-3 text-sm font-semibold text-white"
          >
            Login / Start Demo
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-5xl px-6 py-16">
      <div className="rounded-3xl border border-slate-100 bg-white p-10 shadow-sm">
        <h1 className="font-display text-3xl text-slate-900">My Progress</h1>
        <p className="mt-3 text-slate-600">
          Track completed stations and keep momentum with clear milestones.
        </p>

        <div className="mt-8 space-y-4">
          {progressRows.map((row) => (
            <div
              key={row.label}
              className="rounded-2xl border border-slate-100 bg-slate-50 p-4"
            >
              <div className="flex items-center justify-between text-sm">
                <span className="font-semibold text-slate-700">{row.label}</span>
                <span className="text-slate-500">{row.complete}</span>
              </div>
              <div className="mt-3 h-2 rounded-full bg-slate-200">
                <div
                  className="h-2 rounded-full bg-gradient-to-r from-teal-500 to-sky-500"
                  style={{ width: row.percent }}
                />
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8 flex flex-wrap gap-3">
          <Link
            href="/scenarios"
            className="rounded-2xl bg-slate-900 px-5 py-3 text-sm font-semibold text-white"
          >
            Start New Scenario
          </Link>
          <Link
            href="/scenarios"
            className="rounded-2xl border border-slate-200 px-5 py-3 text-sm font-semibold text-slate-700"
          >
            Browse all scenarios
          </Link>
        </div>
      </div>
    </div>
  );
}
