"use client";

import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { Role, useRole } from "../providers/RoleProvider";

export default function RoleGate({
  allowed,
  children,
}: {
  allowed: Role[];
  children: React.ReactNode;
}) {
  const router = useRouter();
  const { role, isReady } = useRole();

  useEffect(() => {
    if (!isReady) {
      return;
    }
    if (role && !allowed.includes(role)) {
      router.replace("/access-restricted");
    }
  }, [allowed, isReady, role, router]);

  if (!isReady) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-slate-50 text-sm text-slate-500 dark:bg-slate-950 dark:text-slate-400">
        Loading layout...
      </div>
    );
  }

  if (role && !allowed.includes(role)) {
    return null;
  }

  return <>{children}</>;
}
