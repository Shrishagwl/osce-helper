import { Activity, FileText, Settings, ShieldCheck, Users } from "lucide-react";
import LayoutShell from "./LayoutShell";
import RoleGate from "../shared/RoleGate";

const navItems = [
  {
    href: "/admin/overview",
    label: "Overview",
    icon: <Activity className="h-4 w-4" />,
  },
  {
    href: "/admin/settings",
    label: "Settings",
    icon: <Settings className="h-4 w-4" />,
  },
  {
    href: "/admin/users",
    label: "Users",
    icon: <Users className="h-4 w-4" />,
  },
  {
    href: "/admin/audit",
    label: "Audit",
    icon: <ShieldCheck className="h-4 w-4" />,
  },
  {
    href: "/admin/reports/export",
    label: "Export",
    icon: <FileText className="h-4 w-4" />,
  },
];

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  return (
    <RoleGate allowed={["admin"]}>
      <LayoutShell title="Admin" navItems={navItems}>
        {children}
      </LayoutShell>
    </RoleGate>
  );
}
