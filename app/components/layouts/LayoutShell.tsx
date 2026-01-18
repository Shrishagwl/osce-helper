import Sidebar, { NavItem } from "./Sidebar";
import TopBar from "./TopBar";

export default function LayoutShell({
  title,
  navItems,
  children,
  showSearch,
}: {
  title: string;
  navItems: NavItem[];
  children: React.ReactNode;
  showSearch?: boolean;
}) {
  return (
    <div className="flex min-h-screen">
      <Sidebar title={title} items={navItems} />
      <div className="flex min-h-screen flex-1 flex-col">
        <TopBar title={title} showSearch={showSearch} />
        <main className="flex-1 bg-slate-50 px-6 py-8 dark:bg-slate-950">{children}</main>
      </div>
    </div>
  );
}
