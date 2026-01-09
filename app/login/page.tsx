"use client";

import { useState } from "react";
import Link from "next/link";

export default function LoginPage() {
  const [isLoading, setIsLoading] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleDemoLogin = () => {
    setIsLoading(true);
    window.localStorage.setItem("osce-auth", "true");
    window.location.href = "/";
  };

  return (
    <div className="mx-auto max-w-3xl px-6 py-16">
      <div className="rounded-3xl border border-slate-100 bg-white p-10 shadow-sm">
        <h1 className="font-display text-3xl text-slate-900">Login</h1>
        <p className="mt-3 text-slate-600">
          Connect your AWS Amplify account to continue. For now, you can start a demo session.
        </p>
        <form
          className="mt-8 space-y-4"
          onSubmit={(event) => {
            event.preventDefault();
            handleDemoLogin();
          }}
        >
          <div>
            <label className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">
              Email
            </label>
            <input
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              type="email"
              placeholder="student@university.edu"
              className="mt-2 w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-700 shadow-sm focus:outline-none focus:ring-2 focus:ring-teal-200"
              required
            />
          </div>
          <div>
            <label className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">
              Password
            </label>
            <input
              value={password}
              onChange={(event) => setPassword(event.target.value)}
              type="password"
              placeholder="••••••••"
              className="mt-2 w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-700 shadow-sm focus:outline-none focus:ring-2 focus:ring-teal-200"
              required
            />
          </div>
          <div className="flex flex-col gap-3 sm:flex-row">
            <button
              type="submit"
              className="rounded-2xl bg-slate-900 px-6 py-3 text-sm font-semibold text-white"
              disabled={isLoading}
            >
              {isLoading ? "Starting demo..." : "Login / Start Demo"}
            </button>
            <Link
              href="/scenarios"
              className="rounded-2xl border border-slate-200 px-6 py-3 text-center text-sm font-semibold text-slate-700"
            >
              Browse scenarios
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
}
