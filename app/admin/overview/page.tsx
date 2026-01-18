import Breadcrumbs from "../../components/ui/Breadcrumbs";
import Card from "../../components/ui/Card";
import ProgressBar from "../../components/ui/ProgressBar";
import StatCard from "../../components/ui/StatCard";
import Table from "../../components/ui/Table";
import { auditLogs } from "@/src/data/auditLogs";

export default function AdminOverviewPage() {
  return (
    <div className="space-y-6">
      <Breadcrumbs />
      <div className="grid gap-4 md:grid-cols-3">
        <StatCard label="Total users" value="4,203" change="+12%" helper="vs last month" />
        <StatCard label="Active educators" value="85" helper="12 online now" />
        <StatCard label="Student attempts (30d)" value="12,450" change="+5%" />
      </div>
      <div className="grid gap-6 lg:grid-cols-[2fr_1fr]">
        <Card className="space-y-4">
          <h3 className="text-lg font-semibold text-slate-900 dark:text-white">Seat usage</h3>
          <div className="flex items-center justify-between text-sm text-slate-500 dark:text-slate-400">
            <span>650 / 1000 seats utilized</span>
            <span className="font-semibold text-slate-900 dark:text-white">65%</span>
          </div>
          <ProgressBar value={65} />
          <div className="grid grid-cols-3 gap-3 text-xs text-slate-500 dark:text-slate-400">
            <div className="rounded-lg border border-slate-200 p-3 dark:border-slate-800">
              Success rate
              <p className="mt-1 text-base font-semibold text-slate-900 dark:text-white">92%</p>
            </div>
            <div className="rounded-lg border border-slate-200 p-3 dark:border-slate-800">
              Avg score
              <p className="mt-1 text-base font-semibold text-slate-900 dark:text-white">81%</p>
            </div>
            <div className="rounded-lg border border-slate-200 p-3 dark:border-slate-800">
              Alerts
              <p className="mt-1 text-base font-semibold text-slate-900 dark:text-white">5 open</p>
            </div>
          </div>
        </Card>
        <Card className="space-y-3">
          <h3 className="text-lg font-semibold text-slate-900 dark:text-white">Recent logs</h3>
          <ul className="space-y-3 text-sm text-slate-500 dark:text-slate-400">
            {auditLogs.slice(0, 3).map((log) => (
              <li key={log.id}>
                {log.time} · {log.actor} · {log.action}
              </li>
            ))}
          </ul>
        </Card>
      </div>
      <Table>
        <thead className="bg-slate-50 text-xs uppercase text-slate-400 dark:bg-slate-900/60">
          <tr>
            <th className="px-4 py-3">Time</th>
            <th className="px-4 py-3">Actor</th>
            <th className="px-4 py-3">Action</th>
            <th className="px-4 py-3">Outcome</th>
          </tr>
        </thead>
        <tbody>
          {auditLogs.map((log) => (
            <tr key={log.id} className="border-t border-slate-100 dark:border-slate-800">
              <td className="px-4 py-3 text-sm text-slate-500 dark:text-slate-400">{log.time}</td>
              <td className="px-4 py-3 text-sm text-slate-700 dark:text-slate-200">{log.actor}</td>
              <td className="px-4 py-3 text-sm text-slate-500 dark:text-slate-400">{log.action}</td>
              <td className="px-4 py-3 text-sm font-semibold text-slate-900 dark:text-white">
                {log.outcome}
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
}
