import Breadcrumbs from "../../../components/ui/Breadcrumbs";
import Button from "../../../components/ui/Button";
import Card from "../../../components/ui/Card";
import Table from "../../../components/ui/Table";

const exportHistory = [
  { id: "exp-001", date: "2024-11-08", type: "Cohort report", status: "Completed" },
  { id: "exp-002", date: "2024-11-05", type: "Audit log", status: "Completed" },
  { id: "exp-003", date: "2024-11-02", type: "Usage summary", status: "Processing" },
];

export default function AdminExportPage() {
  return (
    <div className="space-y-6">
      <Breadcrumbs />
      <Card className="space-y-4">
        <h1 className="text-2xl font-semibold text-slate-900 dark:text-white">
          Export reports
        </h1>
        <div className="grid gap-4 md:grid-cols-3">
          <label className="text-sm text-slate-500">
            Date range
            <input
              className="mt-2 w-full rounded-lg border border-slate-200 bg-white px-3 py-2 text-sm dark:border-slate-800 dark:bg-slate-900"
              defaultValue="Oct 1, 2024 - Oct 31, 2024"
            />
          </label>
          <label className="text-sm text-slate-500">
            Export type
            <select className="mt-2 w-full rounded-lg border border-slate-200 bg-white px-3 py-2 text-sm dark:border-slate-800 dark:bg-slate-900">
              <option>Cohort summary</option>
              <option>Audit log</option>
              <option>Scenario analytics</option>
            </select>
          </label>
          <div className="flex items-end">
            <Button className="w-full">Start export</Button>
          </div>
        </div>
      </Card>
      <Table>
        <thead className="bg-slate-50 text-xs uppercase text-slate-400 dark:bg-slate-900/60">
          <tr>
            <th className="px-4 py-3">Export ID</th>
            <th className="px-4 py-3">Date</th>
            <th className="px-4 py-3">Type</th>
            <th className="px-4 py-3">Status</th>
          </tr>
        </thead>
        <tbody>
          {exportHistory.map((item) => (
            <tr key={item.id} className="border-t border-slate-100 dark:border-slate-800">
              <td className="px-4 py-3 text-sm font-semibold text-slate-900 dark:text-white">
                {item.id}
              </td>
              <td className="px-4 py-3 text-sm text-slate-500 dark:text-slate-400">
                {item.date}
              </td>
              <td className="px-4 py-3 text-sm text-slate-500 dark:text-slate-400">
                {item.type}
              </td>
              <td className="px-4 py-3 text-sm font-semibold text-slate-900 dark:text-white">
                {item.status}
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
}
