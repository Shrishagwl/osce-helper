import { cn } from "../../lib/utils";

type TableProps = {
  children: React.ReactNode;
  className?: string;
};

export default function Table({ children, className }: TableProps) {
  return (
    <div
      className={cn(
        "overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm dark:border-slate-800 dark:bg-slate-900",
        className
      )}
    >
      <table className="w-full border-collapse text-left text-sm">{children}</table>
    </div>
  );
}
