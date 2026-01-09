"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

type AuthActionsProps = {
  defaultScenarioId?: string;
};

export default function AuthActions({ defaultScenarioId }: AuthActionsProps) {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const stored = window.localStorage.getItem("osce-auth") === "true";
    setIsLoggedIn(stored);
  }, []);

  if (!isLoggedIn) {
    return (
      <div className="flex items-center gap-3">
        <Link
          href="/login"
          className="rounded-full bg-slate-900 px-4 py-2 text-xs font-semibold text-white"
        >
          Login / Start Demo
        </Link>
      </div>
    );
  }

  return (
    <div className="flex items-center gap-3">
      <Link
        href={`/simulation?scenario=${defaultScenarioId ?? ""}`}
        className="rounded-full border border-slate-200 px-4 py-2 text-xs font-semibold text-slate-700"
      >
        Continue
      </Link>
      <Link
        href="/progress"
        className="rounded-full border border-slate-200 px-4 py-2 text-xs font-semibold text-slate-700"
      >
        My Progress
      </Link>
      <Link
        href="/scenarios"
        className="rounded-full bg-slate-900 px-4 py-2 text-xs font-semibold text-white"
      >
        Start New Scenario
      </Link>
    </div>
  );
}
