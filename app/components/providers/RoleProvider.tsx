"use client";

import { createContext, useContext, useEffect, useMemo, useState } from "react";

export type Role = "student" | "educator" | "admin";

const ROLE_KEY = "osce-role";

type RoleContextValue = {
  role: Role | null;
  setRole: (role: Role) => void;
  isReady: boolean;
};

const RoleContext = createContext<RoleContextValue | undefined>(undefined);

export function RoleProvider({ children }: { children: React.ReactNode }) {
  const [role, setRoleState] = useState<Role | null>(null);
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    const stored = (localStorage.getItem(ROLE_KEY) as Role | null) ?? "student";
    localStorage.setItem(ROLE_KEY, stored);
    setRoleState(stored);
    setIsReady(true);
  }, []);

  const setRole = (nextRole: Role) => {
    localStorage.setItem(ROLE_KEY, nextRole);
    setRoleState(nextRole);
  };

  const value = useMemo(() => ({ role, setRole, isReady }), [role, isReady]);

  return <RoleContext.Provider value={value}>{children}</RoleContext.Provider>;
}

export function useRole() {
  const context = useContext(RoleContext);
  if (!context) {
    throw new Error("useRole must be used within RoleProvider");
  }
  return context;
}
