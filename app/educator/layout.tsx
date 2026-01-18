import RoleGate from "../components/shared/RoleGate";

export default function EducatorGroupLayout({ children }: { children: React.ReactNode }) {
  return <RoleGate allowed={["educator"]}>{children}</RoleGate>;
}
