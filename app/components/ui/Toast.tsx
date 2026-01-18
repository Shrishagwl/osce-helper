import type { ReactNode } from "react";
import { CheckCircle, Info, XCircle } from "lucide-react";
import { ToastVariant } from "../providers/ToastProvider";
import { cn } from "../../lib/utils";

type Toast = {
  id: string;
  title: string;
  description?: string;
  variant?: ToastVariant;
};

const variantMap: Record<string, { icon: ReactNode; className: string }> = {
  success: {
    icon: <CheckCircle className="h-4 w-4" />,
    className: "border-emerald-500/40 bg-emerald-50 text-emerald-900 dark:bg-emerald-500/20",
  },
  error: {
    icon: <XCircle className="h-4 w-4" />,
    className: "border-rose-500/40 bg-rose-50 text-rose-900 dark:bg-rose-500/20",
  },
  info: {
    icon: <Info className="h-4 w-4" />,
    className: "border-blue-500/40 bg-blue-50 text-blue-900 dark:bg-blue-500/20",
  },
};

export default function ToastViewport({
  toasts,
  onDismiss,
}: {
  toasts: Toast[];
  onDismiss: (id: string) => void;
}) {
  return (
    <div className="fixed right-6 top-6 z-50 flex max-w-sm flex-col gap-3">
      {toasts.map((toast) => {
        const variant = variantMap[toast.variant ?? "info"];
        return (
          <div
            key={toast.id}
            className={cn(
              "flex gap-3 rounded-xl border px-4 py-3 text-sm shadow-lg",
              variant.className
            )}
          >
            <div className="mt-0.5">{variant.icon}</div>
            <div className="flex-1">
              <p className="font-semibold">{toast.title}</p>
              {toast.description ? (
                <p className="text-xs text-slate-600 dark:text-slate-200">
                  {toast.description}
                </p>
              ) : null}
            </div>
            <button
              className="text-xs text-slate-500 hover:text-slate-700"
              onClick={() => onDismiss(toast.id)}
            >
              Dismiss
            </button>
          </div>
        );
      })}
    </div>
  );
}
