import Breadcrumbs from "../../components/ui/Breadcrumbs";
import Button from "../../components/ui/Button";
import Card from "../../components/ui/Card";
import SearchInput from "../../components/ui/SearchInput";
import Table from "../../components/ui/Table";
import { auditLogs } from "@/src/data/auditLogs";

export default function AdminAuditPage() {
  return (
    <div className="space-y-6">
      <Breadcrumbs />
      <div className="flex flex-wrap items-center justify-between gap-3">
        <h1 className="text-2xl font-semibold text-slate-900 dark:text-white">Audit log</h1>
        <Button variant="secondary">Export CSV</Button>
      </div>
      <Card className="space-y-4">
        <div className="flex flex-wrap items-center gap-3">
          <SearchInput placeholder="Search audit logs" />
          <select className="rounded-lg border border-slate-200 bg-white px-3 py-2 text-sm dark:border-slate-800 dark:bg-slate-900">
            <option>All outcomes</option>
            <option>Success</option>
            <option>Denied</option>
          </select>
          <select className="rounded-lg border border-slate-200 bg-white px-3 py-2 text-sm dark:border-slate-800 dark:bg-slate-900">
            <option>Last 7 days</option>
            <option>Last 30 days</option>
          </select>
        </div>
        <Table>
          <thead className="bg-slate-50 text-xs uppercase text-slate-400 dark:bg-slate-900/60">
            <tr>
              <th className="px-4 py-3">Time</th>
              <th className="px-4 py-3">Actor</th>
              <th className="px-4 py-3">Action</th>
              <th className="px-4 py-3">Resource</th>
              <th className="px-4 py-3">Outcome</th>
            </tr>
          </thead>
          <tbody>
            {auditLogs.map((log) => (
              <tr key={log.id} className="border-t border-slate-100 dark:border-slate-800">
                <td className="px-4 py-3 text-sm text-slate-500 dark:text-slate-400">
                  {log.time}
                </td>
                <td className="px-4 py-3 text-sm text-slate-700 dark:text-slate-200">
                  {log.actor}
                </td>
                <td className="px-4 py-3 text-sm text-slate-500 dark:text-slate-400">
                  {log.action}
                </td>
                <td className="px-4 py-3 text-sm text-slate-500 dark:text-slate-400">
                  {log.resource}
                </td>
                <td className="px-4 py-3 text-sm font-semibold text-slate-900 dark:text-white">
                  {log.outcome}
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </Card>
    </div>
  );
}
