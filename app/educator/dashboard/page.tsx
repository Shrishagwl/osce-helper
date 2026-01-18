import Breadcrumbs from "../../components/ui/Breadcrumbs";
import Card from "../../components/ui/Card";
import StatCard from "../../components/ui/StatCard";
import Table from "../../components/ui/Table";
import Badge from "../../components/ui/Badge";
import { students } from "@/src/data/students";

export default function EducatorDashboardPage() {
  const atRisk = students.filter((student) => student.risk !== "Low");

  return (
    <div className="space-y-6">
      <Breadcrumbs />
      <div className="grid gap-4 md:grid-cols-3">
        <StatCard label="Active students" value="84%" change="+2.4%" helper="vs prior month" />
        <StatCard label="Attempts (7 days)" value="1,240" change="+12%" helper="Across cohorts" />
        <StatCard label="Common gaps" value="3" helper="Active listening, Safety" />
      </div>
      <div className="grid gap-6 lg:grid-cols-[2fr_1fr]">
        <Card className="space-y-4">
          <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
            Students requiring attention
          </h3>
          <Table>
            <thead className="bg-slate-50 text-xs uppercase text-slate-400 dark:bg-slate-900/60">
              <tr>
                <th className="px-4 py-3">Student</th>
                <th className="px-4 py-3">Program</th>
                <th className="px-4 py-3">Risk</th>
              </tr>
            </thead>
            <tbody>
              {atRisk.map((student) => (
                <tr key={student.id} className="border-t border-slate-100 dark:border-slate-800">
                  <td className="px-4 py-3 font-semibold text-slate-900 dark:text-white">
                    {student.name}
                  </td>
                  <td className="px-4 py-3 text-sm text-slate-500 dark:text-slate-400">
                    {student.program}
                  </td>
                  <td className="px-4 py-3">
                    <Badge variant={student.risk === "Critical" ? "danger" : "warning"}>
                      {student.risk}
                    </Badge>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        </Card>
        <Card className="space-y-4">
          <h3 className="text-lg font-semibold text-slate-900 dark:text-white">Recent activity</h3>
          <ul className="space-y-3 text-sm text-slate-500 dark:text-slate-400">
            <li>Dr. Smith updated rubric for Chest Pain Assessment.</li>
            <li>Sarah Jenkins completed Mental Health Crisis scenario.</li>
            <li>At-risk alert sent to Cohort B students.</li>
            <li>New cohort imported from LMS (125 students).</li>
          </ul>
        </Card>
      </div>
    </div>
  );
}
