"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import AuthActions from "./AuthActions";

type TopNavProps = {
  defaultScenarioId?: string;
};

export default function TopNav({ defaultScenarioId }: TopNavProps) {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const stored = window.localStorage.getItem("osce-auth") === "true";
    setIsLoggedIn(stored);
  }, []);

  return (
    <header className="sticky top-0 z-50 border-b border-slate-100 bg-white/90 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
        <Link href="/" className="flex items-center gap-2 text-sm font-semibold">
          <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-teal-500 to-sky-500 text-white">
            OS
          </span>
          <span className="text-slate-900">OSCE Helper</span>
        </Link>
        <nav className="hidden items-center gap-6 text-sm font-medium text-slate-600 md:flex">
          <Link href="/" className="hover:text-slate-900">
            Home
          </Link>
          <Link href="/scenarios" className="hover:text-slate-900">
            Scenarios
          </Link>
          {isLoggedIn ? (
            <Link href="/progress" className="hover:text-slate-900">
              My Progress
            </Link>
          ) : null}
          <Link href="/about" className="hover:text-slate-900">
            About
          </Link>
        </nav>
        <AuthActions defaultScenarioId={defaultScenarioId} />
      </div>
    </header>
  );
}
