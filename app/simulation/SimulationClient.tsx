"use client";

import { useMemo, useState, useEffect } from "react";
import Link from "next/link";
import type { Scenario } from "../lib/scenarios";

type SimulationClientProps = {
  scenarioId?: string;
  scenarios: Scenario[];
};

type Message = {
  role: "student" | "patient";
  content: string;
  timestamp: string;
};

export default function SimulationClient({ scenarioId, scenarios }: SimulationClientProps) {
  const scenario = useMemo(
    () => scenarios.find((item) => item.id === scenarioId),
    [scenarioId, scenarios]
  );
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState("");

  useEffect(() => {
    if (!scenario) return;
    setMessages([
      {
        role: "patient",
        content: `Hello, I'm ${scenario.patientName}. I'm here about ${scenario.presentingComplaint}.`,
        timestamp: new Date().toISOString(),
      },
    ]);
  }, [scenario]);

  const handleSend = () => {
    if (!input.trim() || !scenario) return;
    const now = new Date().toISOString();
    const studentMessage: Message = { role: "student", content: input.trim(), timestamp: now };
    const patientReply: Message = {
      role: "patient",
      content: "Thanks for explaining. Could you ask me a few more questions?",
      timestamp: new Date().toISOString(),
    };
    setMessages((prev) => [...prev, studentMessage, patientReply]);
    setInput("");
  };

  if (!scenario) {
    return (
      <div className="mx-auto max-w-4xl px-6 py-16">
        <div className="rounded-3xl border border-slate-100 bg-white p-10 text-center shadow-sm">
          <h1 className="font-display text-3xl text-slate-900">No scenario selected</h1>
          <p className="mt-3 text-slate-600">
            Choose a scenario to begin your simulated patient conversation.
          </p>
          <Link
            href="/scenarios"
            className="mt-6 inline-flex rounded-2xl bg-slate-900 px-6 py-3 text-sm font-semibold text-white"
          >
            Browse scenarios
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-5xl px-6 py-12">
      <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
        <div>
          <Link href="/scenarios" className="text-xs font-semibold uppercase text-teal-600">
            Back to scenarios
          </Link>
          <h1 className="font-display mt-3 text-3xl text-slate-900">{scenario.title}</h1>
          <p className="mt-2 text-sm text-slate-600">
            Patient: {scenario.patientName} • {scenario.patientAge} years old
          </p>
        </div>
        <button
          type="button"
          onClick={() =>
            setMessages([
              {
                role: "patient",
                content: `Hello, I'm ${scenario.patientName}. I'm here about ${scenario.presentingComplaint}.`,
                timestamp: new Date().toISOString(),
              },
            ])
          }
          className="rounded-2xl border border-slate-200 px-4 py-2 text-sm font-semibold text-slate-700"
        >
          Restart conversation
        </button>
      </div>

      <div className="mt-8 rounded-3xl border border-slate-100 bg-white p-6 shadow-sm">
        <div className="h-[380px] overflow-y-auto rounded-2xl bg-slate-50 p-6">
          <div className="space-y-6">
            {messages.map((message, index) => (
              <div
                key={`${message.timestamp}-${index}`}
                className={`flex ${message.role === "student" ? "justify-end" : "justify-start"}`}
              >
                <div
                  className={`max-w-[75%] rounded-2xl px-4 py-3 text-sm ${
                    message.role === "student"
                      ? "bg-slate-900 text-white"
                      : "bg-white text-slate-700 shadow-sm"
                  }`}
                >
                  <p className="leading-relaxed">{message.content}</p>
                  <p className="mt-2 text-[10px] opacity-60">
                    {new Date(message.timestamp).toLocaleTimeString([], {
                      hour: "2-digit",
                      minute: "2-digit",
                    })}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-4 flex gap-3 rounded-2xl border border-slate-200 bg-white px-4 py-3 shadow-sm">
          <input
            value={input}
            onChange={(event) => setInput(event.target.value)}
            placeholder="Type what you would say to the patient..."
            className="w-full bg-transparent text-sm text-slate-700 placeholder:text-slate-400 focus:outline-none"
          />
          <button
            type="button"
            onClick={handleSend}
            className="rounded-2xl bg-gradient-to-r from-teal-600 to-sky-500 px-4 py-2 text-sm font-semibold text-white"
          >
            Send
          </button>
        </div>
      </div>
    </div>
  );
}
