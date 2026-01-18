import { ClipboardList, GraduationCap, LayoutDashboard, ListChecks } from "lucide-react";
import LayoutShell from "./LayoutShell";
import RoleGate from "../shared/RoleGate";

const navItems = [
  {
    href: "/educator/dashboard",
    label: "Dashboard",
    icon: <LayoutDashboard className="h-4 w-4" />,
  },
  {
    href: "/educator/students",
    label: "Students",
    icon: <GraduationCap className="h-4 w-4" />,
  },
  {
    href: "/educator/scenarios/assign",
    label: "Assign Scenarios",
    icon: <ListChecks className="h-4 w-4" />,
  },
  {
    href: "/educator/reports/report-001",
    label: "Reports",
    icon: <ClipboardList className="h-4 w-4" />,
  },
];

export default function EducatorLayout({ children }: { children: React.ReactNode }) {
  return (
    <RoleGate allowed={["educator"]}>
      <LayoutShell title="Educator" navItems={navItems}>
        {children}
      </LayoutShell>
    </RoleGate>
  );
}
