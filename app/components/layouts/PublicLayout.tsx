import { Home, Lock, LogIn } from "lucide-react";
import LayoutShell from "./LayoutShell";

const navItems = [
  { href: "/", label: "Landing", icon: <Home className="h-4 w-4" /> },
  { href: "/login", label: "SSO Login", icon: <LogIn className="h-4 w-4" /> },
  {
    href: "/access-restricted",
    label: "Access Restricted",
    icon: <Lock className="h-4 w-4" />,
  },
];

export default function PublicLayout({ children }: { children: React.ReactNode }) {
  return (
    <LayoutShell title="Public" navItems={navItems} showSearch={false}>
      {children}
    </LayoutShell>
  );
}
