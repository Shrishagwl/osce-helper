"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "../../lib/utils";

export type NavItem = {
  href: string;
  label: string;
  icon?: React.ReactNode;
};

export default function Sidebar({ title, items }: { title: string; items: NavItem[] }) {
  const pathname = usePathname();

  return (
    <aside className="flex h-full w-64 flex-col border-r border-slate-200 bg-white px-4 py-6 dark:border-slate-800 dark:bg-slate-900">
      <div className="mb-6">
        <p className="text-xs uppercase tracking-widest text-slate-400">AI-OSCE</p>
        <h2 className="text-lg font-semibold text-slate-900 dark:text-white">{title}</h2>
      </div>
      <nav className="flex flex-1 flex-col gap-1">
        {items.map((item) => {
          const isActive = pathname === item.href;
          return (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "flex items-center gap-3 rounded-lg px-3 py-2 text-sm font-medium transition",
                isActive
                  ? "bg-blue-50 text-blue-700 dark:bg-blue-500/20 dark:text-blue-200"
                  : "text-slate-600 hover:bg-slate-100 hover:text-slate-900 dark:text-slate-300 dark:hover:bg-slate-800"
              )}
            >
              {item.icon ? <span className="text-base">{item.icon}</span> : null}
              {item.label}
            </Link>
          );
        })}
      </nav>
      <div className="mt-6 rounded-lg border border-slate-200 p-4 text-xs text-slate-500 dark:border-slate-800 dark:text-slate-400">
        Need help? Visit the support center or email admin@ai-osce.io.
      </div>
    </aside>
  );
}
