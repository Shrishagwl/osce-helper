import Link from "next/link";
import Breadcrumbs from "../../components/ui/Breadcrumbs";
import Button from "../../components/ui/Button";
import Card from "../../components/ui/Card";
import StatCard from "../../components/ui/StatCard";
import Table from "../../components/ui/Table";
import Badge from "../../components/ui/Badge";
import { attempts } from "@/src/data/attempts";
import { scenarios } from "@/src/data/scenarios";

const recentAttempts = attempts.slice(0, 5);
const nextScenario = scenarios[0];

export default function StudentDashboardPage() {
  return (
    <div className="space-y-8">
      <Breadcrumbs />
      <div className="grid gap-4 md:grid-cols-4">
        <StatCard label="Assigned" value="6" change="+2" helper="Due this week" />
        <StatCard label="Completed" value="18" change="+4" helper="Last 30 days" />
        <StatCard label="Avg Score" value="82%" change="+3%" helper="Across 12 attempts" />
        <StatCard label="Streak" value="4" helper="Days active" />
      </div>
      <div className="grid gap-6 lg:grid-cols-[2fr_1fr]">
        <Card className="space-y-4">
          <div>
            <p className="text-xs uppercase tracking-widest text-slate-400">Next scenario</p>
            <h2 className="text-xl font-semibold text-slate-900 dark:text-white">
              {nextScenario.title}
            </h2>
            <p className="text-sm text-slate-500 dark:text-slate-400">
              {nextScenario.description}
            </p>
          </div>
          <div className="flex flex-wrap items-center gap-2 text-xs text-slate-500">
            <Badge variant="info">{nextScenario.specialty}</Badge>
            <Badge variant="default">{nextScenario.difficulty}</Badge>
            <Badge variant="default">{nextScenario.duration}</Badge>
          </div>
          <Link href="/student/scenarios">
            <Button>Start scenario</Button>
          </Link>
        </Card>
        <Card className="space-y-4">
          <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
            Weekly focus
          </h3>
          <ul className="space-y-3 text-sm text-slate-500 dark:text-slate-400">
            <li>✅ Complete reflection on recent attempts</li>
            <li>✅ Review empathy rubric</li>
            <li>⬜ Finish pediatric fever scenario</li>
          </ul>
          <Button variant="secondary">Open study plan</Button>
        </Card>
      </div>
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
            Recent attempts
          </h3>
          <Button variant="secondary" size="sm">
            View all
          </Button>
        </div>
        <Table>
          <thead className="bg-slate-50 text-xs uppercase text-slate-400 dark:bg-slate-900/60">
            <tr>
              <th className="px-4 py-3">Scenario</th>
              <th className="px-4 py-3">Date</th>
              <th className="px-4 py-3">Score</th>
              <th className="px-4 py-3">Status</th>
              <th className="px-4 py-3">Action</th>
            </tr>
          </thead>
          <tbody>
            {recentAttempts.map((attempt) => {
              const scenario = scenarios.find((item) => item.id === attempt.scenarioId);
              return (
                <tr key={attempt.id} className="border-t border-slate-100 dark:border-slate-800">
                  <td className="px-4 py-3">
                    <p className="font-semibold text-slate-900 dark:text-white">
                      {scenario?.title}
                    </p>
                    <p className="text-xs text-slate-500 dark:text-slate-400">
                      {scenario?.specialty}
                    </p>
                  </td>
                  <td className="px-4 py-3 text-sm text-slate-500 dark:text-slate-400">
                    {attempt.date}
                  </td>
                  <td className="px-4 py-3 font-semibold text-slate-900 dark:text-white">
                    {attempt.score}%
                  </td>
                  <td className="px-4 py-3">
                    <Badge variant={attempt.status === "Completed" ? "success" : "warning"}>
                      {attempt.status}
                    </Badge>
                  </td>
                  <td className="px-4 py-3">
                    <Link
                      href={`/student/reflection/${attempt.id}`}
                      className="text-sm font-semibold text-blue-600 hover:text-blue-700"
                    >
                      Review
                    </Link>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </Table>
      </div>
    </div>
  );
}
