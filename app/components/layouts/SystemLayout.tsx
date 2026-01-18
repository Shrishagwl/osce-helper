import { AlertTriangle, Cog, Cpu, ShieldAlert } from "lucide-react";
import LayoutShell from "./LayoutShell";
import RoleGate from "../shared/RoleGate";

const navItems = [
  {
    href: "/system/status",
    label: "Status",
    icon: <Cpu className="h-4 w-4" />,
  },
  {
    href: "/system/maintenance",
    label: "Maintenance",
    icon: <Cog className="h-4 w-4" />,
  },
  {
    href: "/system/processing",
    label: "Processing",
    icon: <AlertTriangle className="h-4 w-4" />,
  },
  {
    href: "/system/access-denied",
    label: "Access Denied",
    icon: <ShieldAlert className="h-4 w-4" />,
  },
];

export default function SystemLayout({ children }: { children: React.ReactNode }) {
  return (
    <RoleGate allowed={["admin"]}>
      <LayoutShell title="System" navItems={navItems}>
        {children}
      </LayoutShell>
    </RoleGate>
  );
}
