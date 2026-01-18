import RoleGate from "../components/shared/RoleGate";

export default function SystemGroupLayout({ children }: { children: React.ReactNode }) {
  return <RoleGate allowed={["admin"]}>{children}</RoleGate>;
}
