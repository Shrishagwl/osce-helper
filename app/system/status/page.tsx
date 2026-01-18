import Breadcrumbs from "../../components/ui/Breadcrumbs";
import Card from "../../components/ui/Card";
import ProgressBar from "../../components/ui/ProgressBar";
import Table from "../../components/ui/Table";
import Badge from "../../components/ui/Badge";

const incidents = [
  { id: "inc-101", service: "Model API", status: "Investigating", time: "09:12" },
  { id: "inc-102", service: "Data pipeline", status: "Resolved", time: "08:45" },
];

export default function SystemStatusPage() {
  return (
    <div className="space-y-6">
      <Breadcrumbs />
      <div className="grid gap-4 md:grid-cols-3">
        {[
          { label: "API uptime", value: 99, status: "Operational" },
          { label: "Model latency", value: 72, status: "Degraded" },
          { label: "Database health", value: 94, status: "Operational" },
        ].map((card) => (
          <Card key={card.label} className="space-y-3">
            <p className="text-sm text-slate-500 dark:text-slate-400">{card.label}</p>
            <div className="flex items-center justify-between">
              <p className="text-2xl font-semibold text-slate-900 dark:text-white">{card.value}%</p>
              <Badge variant={card.status === "Operational" ? "success" : "warning"}>
                {card.status}
              </Badge>
            </div>
            <ProgressBar value={card.value} />
          </Card>
        ))}
      </div>
      <Table>
        <thead className="bg-slate-50 text-xs uppercase text-slate-400 dark:bg-slate-900/60">
          <tr>
            <th className="px-4 py-3">Incident</th>
            <th className="px-4 py-3">Service</th>
            <th className="px-4 py-3">Status</th>
            <th className="px-4 py-3">Time</th>
          </tr>
        </thead>
        <tbody>
          {incidents.map((incident) => (
            <tr key={incident.id} className="border-t border-slate-100 dark:border-slate-800">
              <td className="px-4 py-3 text-sm font-semibold text-slate-900 dark:text-white">
                {incident.id}
              </td>
              <td className="px-4 py-3 text-sm text-slate-500 dark:text-slate-400">
                {incident.service}
              </td>
              <td className="px-4 py-3">
                <Badge variant={incident.status === "Resolved" ? "success" : "warning"}>
                  {incident.status}
                </Badge>
              </td>
              <td className="px-4 py-3 text-sm text-slate-500 dark:text-slate-400">
                {incident.time}
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
      <div className="grid gap-6 lg:grid-cols-3">
        <Card className="space-y-3">
          <h3 className="text-base font-semibold text-slate-900 dark:text-white">
            Error state gallery
          </h3>
          <div className="rounded-lg border border-rose-200 bg-rose-50 p-4 text-sm text-rose-800 dark:border-rose-500/40 dark:bg-rose-500/10">
            Connection interrupted. Retry in 60 seconds.
          </div>
          <div className="rounded-lg border border-amber-200 bg-amber-50 p-4 text-sm text-amber-800 dark:border-amber-500/40 dark:bg-amber-500/10">
            Processing delayed. We are investigating.
          </div>
        </Card>
      </div>
    </div>
  );
}
