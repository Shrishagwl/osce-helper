import RoleGate from "../components/shared/RoleGate";

export default function AdminGroupLayout({ children }: { children: React.ReactNode }) {
  return <RoleGate allowed={["admin"]}>{children}</RoleGate>;
}
