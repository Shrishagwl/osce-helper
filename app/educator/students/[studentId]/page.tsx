import { notFound } from "next/navigation";
import Breadcrumbs from "../../../components/ui/Breadcrumbs";
import Badge from "../../../components/ui/Badge";
import Card from "../../../components/ui/Card";
import StatCard from "../../../components/ui/StatCard";
import Table from "../../../components/ui/Table";
import { attempts } from "@/src/data/attempts";
import { scenarios } from "@/src/data/scenarios";
import { students } from "@/src/data/students";

export default function EducatorStudentDetailPage({
  params,
}: {
  params: { studentId: string };
}) {
  const student = students.find((item) => item.id === params.studentId);
  if (!student) {
    notFound();
  }

  const studentAttempts = attempts.filter((attempt) => attempt.studentId === student.id);

  return (
    <div className="space-y-6">
      <Breadcrumbs />
      <Card className="space-y-4">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div>
            <h1 className="text-2xl font-semibold text-slate-900 dark:text-white">
              {student.name}
            </h1>
            <p className="text-sm text-slate-500 dark:text-slate-400">
              {student.program} · {student.id}
            </p>
          </div>
          <Badge variant={student.status === "Active" ? "success" : "warning"}>
            {student.status}
          </Badge>
        </div>
        <div className="grid gap-4 md:grid-cols-3">
          <StatCard label="Total attempts" value={`${studentAttempts.length}`} helper="This term" />
          <StatCard label="Competency rate" value="88%" helper="Last 30 days" />
          <StatCard label="Days since active" value="3" helper={student.lastActive} />
        </div>
      </Card>
      <Table>
        <thead className="bg-slate-50 text-xs uppercase text-slate-400 dark:bg-slate-900/60">
          <tr>
            <th className="px-4 py-3">Scenario</th>
            <th className="px-4 py-3">Date</th>
            <th className="px-4 py-3">Score</th>
            <th className="px-4 py-3">Outcome</th>
          </tr>
        </thead>
        <tbody>
          {studentAttempts.map((attempt) => {
            const scenario = scenarios.find((item) => item.id === attempt.scenarioId);
            return (
              <tr key={attempt.id} className="border-t border-slate-100 dark:border-slate-800">
                <td className="px-4 py-3 font-semibold text-slate-900 dark:text-white">
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
    </div>
  );
}
