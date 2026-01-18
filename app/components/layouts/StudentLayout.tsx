import {
  BookOpen,
  CalendarCheck,
  LayoutDashboard,
  Settings,
  TrendingUp,
} from "lucide-react";
import LayoutShell from "./LayoutShell";
import RoleGate from "../shared/RoleGate";

const navItems = [
  {
    href: "/student/dashboard",
    label: "Dashboard",
    icon: <LayoutDashboard className="h-4 w-4" />,
  },
  {
    href: "/student/scenarios",
    label: "Scenarios",
    icon: <BookOpen className="h-4 w-4" />,
  },
  {
    href: "/student/progress",
    label: "Progress",
    icon: <TrendingUp className="h-4 w-4" />,
  },
  {
    href: "/student/history",
    label: "History",
    icon: <CalendarCheck className="h-4 w-4" />,
  },
  {
    href: "/student/settings",
    label: "Settings",
    icon: <Settings className="h-4 w-4" />,
  },
];

export default function StudentLayout({ children }: { children: React.ReactNode }) {
  return (
    <RoleGate allowed={["student"]}>
      <LayoutShell title="Student" navItems={navItems}>
        {children}
      </LayoutShell>
    </RoleGate>
  );
}
