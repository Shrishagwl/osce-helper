import React from "react";

type IconProps = React.SVGProps<SVGSVGElement>;

function BaseIcon(props: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...props}
    >
      <rect x="3" y="3" width="18" height="18" rx="4" />
      <path d="M8 12h8" />
    </svg>
  );
}

export const ArrowRight = BaseIcon;
export const ShieldCheck = BaseIcon;
export const Sparkles = BaseIcon;
export const Users = BaseIcon;
export const Building2 = BaseIcon;
export const LogIn = BaseIcon;
export const ShieldAlert = BaseIcon;
export const Home = BaseIcon;
export const Lock = BaseIcon;
export const LayoutDashboard = BaseIcon;
export const BookOpen = BaseIcon;
export const TrendingUp = BaseIcon;
export const CalendarCheck = BaseIcon;
export const Settings = BaseIcon;
export const GraduationCap = BaseIcon;
export const ListChecks = BaseIcon;
export const ClipboardList = BaseIcon;
export const Activity = BaseIcon;
export const FileText = BaseIcon;
export const AlertTriangle = BaseIcon;
export const Cog = BaseIcon;
export const Cpu = BaseIcon;
export const Search = BaseIcon;
export const Moon = BaseIcon;
export const Sun = BaseIcon;
export const CheckCircle = BaseIcon;
export const XCircle = BaseIcon;
export const Info = BaseIcon;
export const Inbox = BaseIcon;
export const X = BaseIcon;
