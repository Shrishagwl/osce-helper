import { notFound } from "next/navigation";
import Breadcrumbs from "../../../components/ui/Breadcrumbs";
import Button from "../../../components/ui/Button";
import Card from "../../../components/ui/Card";
import ProgressBar from "../../../components/ui/ProgressBar";
import { reports } from "@/src/data/reports";

export default function EducatorReportPage({
  params,
}: {
  params: { reportId: string };
}) {
  const report = reports.find((item) => item.id === params.reportId);
  if (!report) {
    notFound();
  }

  return (
    <div className="space-y-6">
      <Breadcrumbs />
      <div className="flex flex-wrap items-center justify-between gap-3">
        <div>
          <h1 className="text-2xl font-semibold text-slate-900 dark:text-white">
            {report.title}
          </h1>
          <p className="text-sm text-slate-500 dark:text-slate-400">Formative report</p>
        </div>
        <Button variant="secondary">Export report</Button>
      </div>
      <Card className="space-y-6">
        <div>
          <h2 className="text-lg font-semibold text-slate-900 dark:text-white">Summary</h2>
          <p className="text-sm text-slate-500 dark:text-slate-400">{report.summary}</p>
        </div>
        <div className="grid gap-6 md:grid-cols-2">
          <div>
            <h3 className="text-base font-semibold text-slate-900 dark:text-white">Strengths</h3>
            <ul className="mt-3 list-disc space-y-1 pl-5 text-sm text-slate-500 dark:text-slate-400">
              {report.strengths.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-base font-semibold text-slate-900 dark:text-white">
              Opportunities to improve
            </h3>
            <ul className="mt-3 list-disc space-y-1 pl-5 text-sm text-slate-500 dark:text-slate-400">
              {report.improvements.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
        <div className="space-y-3">
          <h3 className="text-base font-semibold text-slate-900 dark:text-white">Rubric</h3>
          {report.rubric.map((row) => (
            <div key={row.label} className="space-y-2">
              <div className="flex items-center justify-between text-sm">
                <span className="text-slate-600 dark:text-slate-300">{row.label}</span>
                <span className="font-semibold text-slate-900 dark:text-white">{row.score}/5</span>
              </div>
              <ProgressBar value={row.score * 20} />
            </div>
          ))}
        </div>
      </Card>
    </div>
  );
}
