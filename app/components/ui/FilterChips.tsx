"use client";

import { cn } from "../../lib/utils";

type FilterChip = {
  id: string;
  label: string;
};

type FilterChipsProps = {
  chips: FilterChip[];
  activeId: string;
  onChange: (id: string) => void;
};

export default function FilterChips({ chips, activeId, onChange }: FilterChipsProps) {
  return (
    <div className="flex flex-wrap gap-2">
      {chips.map((chip) => (
        <button
          key={chip.id}
          onClick={() => onChange(chip.id)}
          className={cn(
            "rounded-full border px-3 py-1 text-xs font-semibold transition",
            activeId === chip.id
              ? "border-blue-600 bg-blue-600 text-white"
              : "border-slate-200 bg-white text-slate-600 hover:border-slate-300 dark:border-slate-800 dark:bg-slate-900 dark:text-slate-300"
          )}
        >
          {chip.label}
        </button>
      ))}
    </div>
  );
}
