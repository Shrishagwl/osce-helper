"use client";

import { useState } from "react";
import Badge from "../ui/Badge";
import Card from "../ui/Card";
import ProgressBar from "../ui/ProgressBar";
import Table from "../ui/Table";
import Tabs from "../ui/Tabs";
import { attempts } from "@/src/data/attempts";
import { scenarios } from "@/src/data/scenarios";

const competency = [
  { label: "Communication", value: 82 },
  { label: "Clinical reasoning", value: 74 },
  { label: "Safety & escalation", value: 68 },
  { label: "Professionalism", value: 90 },
];

export default function ProgressHistoryPanel({ defaultTab }: { defaultTab: string }) {
  const [activeTab, setActiveTab] = useState(defaultTab);

  return (
    <div className="space-y-6">
      <Tabs
        tabs={[
          { id: "progress", label: "Progress" },
          { id: "history", label: "History" },
        ]}
        activeId={activeTab}
        onChange={setActiveTab}
      />
      {activeTab === "progress" ? (
        <div className="grid gap-6 lg:grid-cols-[2fr_1fr]">
          <Card>
            <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
              Weekly trend (placeholder)
            </h3>
            <div className="mt-6 grid grid-cols-7 gap-3 text-xs text-slate-400">
              {[32, 48, 56, 70, 64, 78, 88].map((value, index) => (
                <div key={value} className="flex flex-col items-center gap-2">
                  <div className="h-32 w-5 rounded-full bg-slate-100 dark:bg-slate-800">
                    <div
                      className="w-full rounded-full bg-blue-500"
                      style={{ height: `${value}%` }}
                    />
                  </div>
                  <span>W{index + 1}</span>
                </div>
              ))}
            </div>
          </Card>
          <Card className="space-y-4">
            <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
              Competency breakdown
            </h3>
            {competency.map((item) => (
              <div key={item.label} className="space-y-2">
                <div className="flex items-center justify-between text-sm">
                  <span className="text-slate-600 dark:text-slate-300">{item.label}</span>
                  <span className="font-semibold text-slate-900 dark:text-white">
                    {item.value}%
                  </span>
                </div>
                <ProgressBar value={item.value} />
              </div>
            ))}
          </Card>
        </div>
      ) : (
        <Card className="space-y-4">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div>
              <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
                Attempt history
              </h3>
              <p className="text-sm text-slate-500 dark:text-slate-400">
                Filter attempts by date range.
              </p>
            </div>
            <select className="rounded-lg border border-slate-200 bg-white px-3 py-2 text-sm text-slate-600 dark:border-slate-800 dark:bg-slate-900 dark:text-slate-200">
              <option>Last 30 days</option>
              <option>Last 90 days</option>
              <option>Year to date</option>
            </select>
          </div>
          <Table>
            <thead className="bg-slate-50 text-xs uppercase text-slate-400 dark:bg-slate-900/60">
              <tr>
                <th className="px-4 py-3">Scenario</th>
                <th className="px-4 py-3">Date</th>
                <th className="px-4 py-3">Score</th>
                <th className="px-4 py-3">Status</th>
              </tr>
            </thead>
            <tbody>
              {attempts.map((attempt) => {
                const scenario = scenarios.find((item) => item.id === attempt.scenarioId);
                return (
                  <tr key={attempt.id} className="border-t border-slate-100 dark:border-slate-800">
                    <td className="px-4 py-3 text-sm font-semibold text-slate-900 dark:text-white">
                      {scenario?.title}
                    </td>
                    <td className="px-4 py-3 text-sm text-slate-500 dark:text-slate-400">
                      {attempt.date}
                    </td>
                    <td className="px-4 py-3 text-sm font-semibold text-slate-900 dark:text-white">
                      {attempt.score}%
                    </td>
                    <td className="px-4 py-3">
                      <Badge variant={attempt.outcome === "Remediation" ? "danger" : "info"}>
                        {attempt.outcome}
                      </Badge>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </Table>
        </Card>
      )}
    </div>
  );
}
