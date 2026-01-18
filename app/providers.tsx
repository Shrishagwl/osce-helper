"use client";

import { RoleProvider } from "./components/providers/RoleProvider";
import { ThemeProvider } from "./components/providers/ThemeProvider";
import { ToastProvider } from "./components/providers/ToastProvider";

export default function Providers({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ThemeProvider>
      <RoleProvider>
        <ToastProvider>{children}</ToastProvider>
      </RoleProvider>
    </ThemeProvider>
  );
}
