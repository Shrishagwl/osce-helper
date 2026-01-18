import Breadcrumbs from "../../../components/ui/Breadcrumbs";
import Button from "../../../components/ui/Button";
import Card from "../../../components/ui/Card";
import SearchInput from "../../../components/ui/SearchInput";

export default function EducatorReviewPage() {
  return (
    <div className="space-y-6">
      <Breadcrumbs />
      <div className="grid gap-6 lg:grid-cols-[2fr_1fr]">
        <Card className="space-y-4">
          <div className="flex flex-wrap items-center justify-between gap-3">
            <h2 className="text-lg font-semibold text-slate-900 dark:text-white">
              Transcript review
            </h2>
            <SearchInput placeholder="Search transcript" />
          </div>
          <div className="space-y-3 text-sm text-slate-600 dark:text-slate-300">
            <p className="rounded-lg border border-blue-200 bg-blue-50 p-3 text-blue-900 dark:border-blue-500/30 dark:bg-blue-500/10">
              Highlighted: "Describe the pain in your chest" (match)
            </p>
            <p>
              <span className="font-semibold">Student:</span> Can you describe the pain in your
              chest?
            </p>
            <p>
              <span className="font-semibold">Patient:</span> It feels heavy, like pressure.
            </p>
          </div>
        </Card>
        <Card className="space-y-4">
          <h3 className="text-base font-semibold text-slate-900 dark:text-white">Comments</h3>
          <textarea
            className="min-h-[180px] w-full rounded-lg border border-slate-200 bg-white p-3 text-sm dark:border-slate-800 dark:bg-slate-900"
            placeholder="Leave feedback for the student..."
          />
          <div className="flex gap-3">
            <Button variant="secondary">Save draft</Button>
            <Button>Submit feedback</Button>
          </div>
        </Card>
      </div>
    </div>
  );
}
