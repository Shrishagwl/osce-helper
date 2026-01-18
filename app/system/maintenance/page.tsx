import Breadcrumbs from "../../components/ui/Breadcrumbs";
import Button from "../../components/ui/Button";
import Card from "../../components/ui/Card";

export default function SystemMaintenancePage() {
  return (
    <div className="space-y-6">
      <Breadcrumbs />
      <Card className="space-y-4">
        <div className="rounded-xl border border-amber-200 bg-amber-50 p-4 text-sm text-amber-800 dark:border-amber-500/40 dark:bg-amber-500/10">
          Scheduled maintenance in progress. Estimated completion: 02:00 UTC.
        </div>
        <h2 className="text-lg font-semibold text-slate-900 dark:text-white">
          Maintenance checklist
        </h2>
        <ul className="space-y-2 text-sm text-slate-500 dark:text-slate-400">
          <li>✅ Database snapshot complete</li>
          <li>✅ Model deployment queued</li>
          <li>⬜ Scenario analytics backfill</li>
          <li>⬜ Post-maintenance health checks</li>
        </ul>
        <Button variant="secondary">Subscribe for updates</Button>
      </Card>
    </div>
  );
}
