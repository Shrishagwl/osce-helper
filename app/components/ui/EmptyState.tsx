import { Inbox } from "lucide-react";
import Button from "./Button";

export default function EmptyState({
  title,
  description,
  actionLabel,
}: {
  title: string;
  description: string;
  actionLabel?: string;
}) {
  return (
    <div className="flex flex-col items-center gap-4 rounded-xl border border-dashed border-slate-200 bg-white px-6 py-12 text-center dark:border-slate-800 dark:bg-slate-900">
      <div className="rounded-full bg-slate-100 p-3 text-slate-500 dark:bg-slate-800 dark:text-slate-200">
        <Inbox className="h-6 w-6" />
      </div>
      <div>
        <p className="text-lg font-semibold text-slate-900 dark:text-white">{title}</p>
        <p className="text-sm text-slate-500 dark:text-slate-400">{description}</p>
      </div>
      {actionLabel ? <Button variant="secondary">{actionLabel}</Button> : null}
    </div>
  );
}
