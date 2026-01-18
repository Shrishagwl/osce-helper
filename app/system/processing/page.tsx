import Breadcrumbs from "../../components/ui/Breadcrumbs";
import Button from "../../components/ui/Button";
import Card from "../../components/ui/Card";
import ProgressBar from "../../components/ui/ProgressBar";

const steps = ["Queued", "Analyzing", "Feedback", "Complete"];

export default function SystemProcessingPage() {
  return (
    <div className="space-y-6">
      <Breadcrumbs />
      <Card className="space-y-4">
        <h2 className="text-lg font-semibold text-slate-900 dark:text-white">
          Processing pipeline
        </h2>
        <div className="flex flex-wrap gap-3">
          {steps.map((step, index) => (
            <div
              key={step}
              className={`rounded-full border px-4 py-2 text-xs font-semibold ${
                index === 1
                  ? "border-blue-600 bg-blue-600 text-white"
                  : "border-slate-200 bg-white text-slate-500 dark:border-slate-800 dark:bg-slate-900 dark:text-slate-300"
              }`}
            >
              {step}
            </div>
          ))}
        </div>
        <div className="space-y-2">
          <div className="flex items-center justify-between text-sm text-slate-500 dark:text-slate-400">
            <span>Analyzing clinical competencies...</span>
            <span className="font-semibold text-slate-900 dark:text-white">65%</span>
          </div>
          <ProgressBar value={65} />
        </div>
        <Button variant="secondary">Retry processing</Button>
      </Card>
    </div>
  );
}
