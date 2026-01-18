"use client";

import { Moon, Sun } from "lucide-react";
import { useRouter } from "next/navigation";
import Avatar from "../ui/Avatar";
import Button from "../ui/Button";
import SearchInput from "../ui/SearchInput";
import { useRole } from "../providers/RoleProvider";
import { useTheme } from "../providers/ThemeProvider";

const defaultRouteByRole: Record<string, string> = {
  student: "/student/dashboard",
  educator: "/educator/dashboard",
  admin: "/admin/overview",
};

export default function TopBar({
  showSearch = true,
  title,
}: {
  showSearch?: boolean;
  title: string;
}) {
  const { role, setRole } = useRole();
  const { resolvedTheme, toggleTheme } = useTheme();
  const router = useRouter();

  const handleRoleChange = (nextRole: string) => {
    if (nextRole === role) {
      return;
    }
    setRole(nextRole as "student" | "educator" | "admin");
    router.push(defaultRouteByRole[nextRole] ?? "/");
  };

  return (
    <header className="flex flex-wrap items-center justify-between gap-4 border-b border-slate-200 bg-white px-6 py-4 dark:border-slate-800 dark:bg-slate-950">
      <div>
        <p className="text-xs uppercase tracking-widest text-slate-400">{title}</p>
        <h1 className="text-lg font-semibold text-slate-900 dark:text-white">AI-OSCE Hub</h1>
      </div>
      <div className="flex flex-1 items-center justify-end gap-3">
        {showSearch ? (
          <div className="hidden min-w-[240px] max-w-sm flex-1 md:block">
            <SearchInput placeholder="Search cases, students, reports..." />
          </div>
        ) : null}
        <div className="flex items-center gap-2 rounded-lg border border-dashed border-slate-200 px-3 py-2 text-xs text-slate-500 dark:border-slate-800 dark:text-slate-300">
          <span className="font-semibold text-slate-700 dark:text-slate-100">Role</span>
          <select
            className="bg-transparent text-xs font-semibold text-slate-600 outline-none dark:text-slate-200"
            value={role ?? "student"}
            onChange={(event) => handleRoleChange(event.target.value)}
          >
            <option value="student">Student</option>
            <option value="educator">Educator</option>
            <option value="admin">Admin</option>
          </select>
        </div>
        <Button variant="ghost" size="sm" onClick={toggleTheme}>
          {resolvedTheme === "dark" ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
          {resolvedTheme === "dark" ? "Light" : "Dark"}
        </Button>
        <div className="flex items-center gap-2 rounded-full border border-slate-200 bg-slate-50 px-3 py-1.5 text-sm text-slate-600 dark:border-slate-800 dark:bg-slate-900 dark:text-slate-200">
          <Avatar name="Jamie Rivera" />
          <div className="hidden sm:block">
            <p className="text-xs font-semibold">Jamie Rivera</p>
            <p className="text-[10px] text-slate-400">Clinical Lead</p>
          </div>
        </div>
      </div>
    </header>
  );
}
