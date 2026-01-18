import Card from "./Card";

export type StatCardProps = {
  label: string;
  value: string;
  change?: string;
  helper?: string;
};

export default function StatCard({ label, value, change, helper }: StatCardProps) {
  return (
    <Card className="flex flex-col gap-3">
      <p className="text-sm text-slate-500 dark:text-slate-400">{label}</p>
      <div className="flex items-end justify-between">
        <p className="text-3xl font-semibold text-slate-900 dark:text-white">{value}</p>
        {change ? (
          <span className="rounded-full bg-emerald-100 px-2 py-1 text-xs font-semibold text-emerald-700 dark:bg-emerald-500/20 dark:text-emerald-200">
            {change}
          </span>
        ) : null}
      </div>
      {helper ? (
        <p className="text-xs text-slate-500 dark:text-slate-400">{helper}</p>
      ) : null}
    </Card>
  );
}
