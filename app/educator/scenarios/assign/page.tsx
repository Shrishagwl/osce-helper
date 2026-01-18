import Breadcrumbs from "../../../components/ui/Breadcrumbs";
import Button from "../../../components/ui/Button";
import Card from "../../../components/ui/Card";
import Badge from "../../../components/ui/Badge";
import { cohorts } from "@/src/data/cohorts";
import { scenarios } from "@/src/data/scenarios";

export default function EducatorAssignScenariosPage() {
  return (
    <div className="space-y-6">
      <Breadcrumbs />
      <div className="grid gap-6 lg:grid-cols-[2fr_1fr]">
        <Card className="space-y-4">
          <h2 className="text-lg font-semibold text-slate-900 dark:text-white">
            Assign clinical scenarios
          </h2>
          <div className="space-y-4">
            {scenarios.map((scenario) => (
              <label
                key={scenario.id}
                className="flex items-start gap-3 rounded-xl border border-slate-200 p-4 text-sm dark:border-slate-800"
              >
                <input type="checkbox" className="mt-1" />
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <h3 className="font-semibold text-slate-900 dark:text-white">
                      {scenario.title}
                    </h3>
                    <Badge variant="info">{scenario.specialty}</Badge>
                    <Badge variant="default">{scenario.difficulty}</Badge>
                  </div>
                  <p className="text-sm text-slate-500 dark:text-slate-400">
                    {scenario.description}
                  </p>
                </div>
              </label>
            ))}
          </div>
        </Card>
        <Card className="space-y-4">
          <h3 className="text-base font-semibold text-slate-900 dark:text-white">Assignment</h3>
          <label className="text-sm text-slate-500">
            Cohort
            <select className="mt-2 w-full rounded-lg border border-slate-200 bg-white px-3 py-2 text-sm dark:border-slate-800 dark:bg-slate-900">
              {cohorts.map((cohort) => (
                <option key={cohort.id}>
                  {cohort.name} ({cohort.students} students)
                </option>
              ))}
            </select>
          </label>
          <label className="text-sm text-slate-500">
            Specific student (optional)
            <select className="mt-2 w-full rounded-lg border border-slate-200 bg-white px-3 py-2 text-sm dark:border-slate-800 dark:bg-slate-900">
              <option>All students</option>
              <option>Sarah Jenkins</option>
              <option>Marcus Johnson</option>
              <option>Emily Chen</option>
            </select>
          </label>
          <label className="text-sm text-slate-500">
            Availability window
            <input
              className="mt-2 w-full rounded-lg border border-slate-200 bg-white px-3 py-2 text-sm dark:border-slate-800 dark:bg-slate-900"
              defaultValue="Oct 24, 2024 - Oct 31, 2024"
            />
          </label>
          <Button className="w-full">Assign scenarios</Button>
        </Card>
      </div>
    </div>
  );
}
