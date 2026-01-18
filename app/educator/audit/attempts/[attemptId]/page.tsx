import Breadcrumbs from "../../../../components/ui/Breadcrumbs";
import Badge from "../../../../components/ui/Badge";
import Button from "../../../../components/ui/Button";
import Card from "../../../../components/ui/Card";
import ProgressBar from "../../../../components/ui/ProgressBar";

const flags = ["Late escalation", "Missing allergy check", "Interrupted patient twice"];

export default function EducatorAuditAttemptPage() {
  return (
    <div className="space-y-6">
      <Breadcrumbs />
      <div className="flex flex-wrap items-center justify-between gap-3">
        <div>
          <h1 className="text-2xl font-semibold text-slate-900 dark:text-white">
            Attempt audit
          </h1>
          <p className="text-sm text-slate-500 dark:text-slate-400">
            Attempt #1003 · Scenario: Acute Chest Pain
          </p>
        </div>
        <Button variant="secondary">Flag for review</Button>
      </div>
      <div className="grid gap-6 lg:grid-cols-[2fr_1fr]">
        <Card className="space-y-4">
          <h2 className="text-lg font-semibold text-slate-900 dark:text-white">Transcript</h2>
          <div className="space-y-3 text-sm text-slate-600 dark:text-slate-300">
            <p>
              <span className="font-semibold">Student:</span> Can you describe the pain location?
            </p>
            <p>
              <span className="font-semibold">Patient:</span> It feels like pressure in the center of
              my chest.
            </p>
            <p>
              <span className="font-semibold">Student:</span> Have you taken any medication today?
            </p>
          </div>
        </Card>
        <div className="space-y-6">
          <Card className="space-y-3">
            <h3 className="text-base font-semibold text-slate-900 dark:text-white">
              Scoring breakdown
            </h3>
            {[{ label: "Information", value: 70 }, { label: "Reasoning", value: 62 }].map((item) => (
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
          <Card className="space-y-3">
            <h3 className="text-base font-semibold text-slate-900 dark:text-white">Flags</h3>
            {flags.map((flag) => (
              <Badge key={flag} variant="warning">
                {flag}
              </Badge>
            ))}
          </Card>
          <Card className="space-y-3">
            <h3 className="text-base font-semibold text-slate-900 dark:text-white">Reviewer notes</h3>
            <textarea
              className="min-h-[120px] w-full rounded-lg border border-slate-200 bg-white p-3 text-sm dark:border-slate-800 dark:bg-slate-900"
              placeholder="Add reviewer notes..."
            />
            <Button size="sm">Save note</Button>
          </Card>
        </div>
      </div>
    </div>
  );
}
