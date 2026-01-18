"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const labelMap: Record<string, string> = {
  student: "Student",
  educator: "Educator",
  admin: "Admin",
  system: "System",
  dashboard: "Dashboard",
  scenarios: "Scenarios",
  progress: "Progress",
  history: "History",
  settings: "Settings",
  reflection: "Reflection",
  students: "Students",
  reports: "Reports",
  audit: "Audit",
  overview: "Overview",
  status: "Status",
  maintenance: "Maintenance",
  processing: "Processing",
  login: "Login",
  "access-restricted": "Access Restricted",
  "access-denied": "Access Denied",
};

export default function Breadcrumbs() {
  const pathname = usePathname();
  const segments = pathname.split("/").filter(Boolean);

  const crumbs = segments.map((segment, index) => {
    const href = "/" + segments.slice(0, index + 1).join("/");
    const label = labelMap[segment] ?? segment.replace(/-/g, " ");
    return { href, label };
  });

  return (
    <nav className="text-xs text-slate-500 dark:text-slate-400">
      <ol className="flex flex-wrap items-center gap-2">
        <li>
          <Link href="/" className="hover:text-slate-900 dark:hover:text-white">
            Home
          </Link>
        </li>
        {crumbs.map((crumb) => (
          <li key={crumb.href} className="flex items-center gap-2">
            <span>/</span>
            <Link href={crumb.href} className="hover:text-slate-900 dark:hover:text-white">
              {crumb.label}
            </Link>
          </li>
        ))}
      </ol>
    </nav>
  );
}
