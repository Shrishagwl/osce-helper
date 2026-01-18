"use client";

import { useToast } from "../../../components/providers/ToastProvider";
import Breadcrumbs from "../../../components/ui/Breadcrumbs";
import Button from "../../../components/ui/Button";
import Card from "../../../components/ui/Card";
import ProgressBar from "../../../components/ui/ProgressBar";
import Badge from "../../../components/ui/Badge";

const transcript = [
  {
    role: "Student",
    message: "Good morning, I'm Sarah. Can you tell me what brought you in today?",
  },
  {
    role: "Patient",
    message: "I've had a sharp pain in my chest for about three days now.",
  },
  {
    role: "AI",
    message: "Patient appears anxious. Consider asking about onset, radiation, and severity.",
  },
  {
    role: "Student",
    message: "When did the pain start and does it move anywhere else?",
  },
];

const rubric = [
  { label: "Patient identification", score: "1.0/1.0" },
  { label: "Pain characterization", score: "0.8/1.0" },
  { label: "Empathy & tone", score: "0.6/1.0" },
  { label: "Safety netting", score: "0.7/1.0" },
];

export default function StudentReflectionPage() {
  const { pushToast } = useToast();

  return (
    <div className="space-y-6">
      <Breadcrumbs />
      <div className="grid gap-6 lg:grid-cols-[2fr_1fr]">
        <Card className="space-y-4">
          <h2 className="text-lg font-semibold text-slate-900 dark:text-white">
            Transcript viewer
          </h2>
          <div className="space-y-4">
            {transcript.map((entry, index) => (
              <div
                key={`${entry.role}-${index}`}
                className="rounded-xl border border-slate-200 bg-slate-50 p-4 text-sm text-slate-700 dark:border-slate-800 dark:bg-slate-950 dark:text-slate-200"
              >
                <div className="mb-2 flex items-center gap-2 text-xs text-slate-400">
                  <Badge variant="info">{entry.role}</Badge>
                  <span>00:{index + 12}</span>
                </div>
                {entry.message}
              </div>
            ))}
          </div>
        </Card>
        <div className="space-y-6">
          <Card className="space-y-4">
            <h3 className="text-base font-semibold text-slate-900 dark:text-white">
              Score summary
            </h3>
            <div className="text-3xl font-semibold text-slate-900 dark:text-white">82%</div>
            <ProgressBar value={82} />
            <p className="text-sm text-slate-500 dark:text-slate-400">
              Overall performance is trending upward compared to last attempt.
            </p>
          </Card>
          <Card className="space-y-3">
            <h3 className="text-base font-semibold text-slate-900 dark:text-white">
              Rubric highlights
            </h3>
            {rubric.map((item) => (
              <div key={item.label} className="flex items-center justify-between text-sm">
                <span className="text-slate-600 dark:text-slate-300">{item.label}</span>
                <span className="font-semibold text-slate-900 dark:text-white">{item.score}</span>
              </div>
            ))}
          </Card>
          <Card className="space-y-4">
            <h3 className="text-base font-semibold text-slate-900 dark:text-white">
              Reflection form
            </h3>
            <label className="text-sm text-slate-500">
              What went well?
              <textarea
                className="mt-2 min-h-[90px] w-full rounded-lg border border-slate-200 bg-white p-3 text-sm text-slate-700 dark:border-slate-800 dark:bg-slate-900 dark:text-slate-200"
                placeholder="Describe the moments you felt confident..."
              />
            </label>
            <label className="text-sm text-slate-500">
              What would you improve?
              <textarea
                className="mt-2 min-h-[90px] w-full rounded-lg border border-slate-200 bg-white p-3 text-sm text-slate-700 dark:border-slate-800 dark:bg-slate-900 dark:text-slate-200"
                placeholder="Identify areas to focus on next time..."
              />
            </label>
            <div className="flex flex-wrap gap-3">
              <Button variant="secondary">Save draft</Button>
              <Button
                onClick={() =>
                  pushToast({
                    title: "Reflection submitted",
                    description: "Your reflection was sent to your educator.",
                    variant: "success",
                  })
                }
              >
                Submit reflection
              </Button>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
}
