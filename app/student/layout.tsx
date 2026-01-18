import RoleGate from "../components/shared/RoleGate";

export default function StudentGroupLayout({ children }: { children: React.ReactNode }) {
  return <RoleGate allowed={["student"]}>{children}</RoleGate>;
}
