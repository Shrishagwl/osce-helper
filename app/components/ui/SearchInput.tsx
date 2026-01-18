import { Search } from "lucide-react";

export default function SearchInput({
  placeholder = "Search...",
  value,
  onChange,
}: {
  placeholder?: string;
  value?: string;
  onChange?: (value: string) => void;
}) {
  return (
    <label className="flex items-center gap-2 rounded-lg border border-slate-200 bg-white px-3 py-2 text-sm text-slate-600 shadow-sm focus-within:border-blue-500 dark:border-slate-800 dark:bg-slate-900 dark:text-slate-300">
      <Search className="h-4 w-4" />
      <input
        className="w-full bg-transparent text-sm text-slate-900 outline-none placeholder:text-slate-400 dark:text-slate-100"
        placeholder={placeholder}
        type="search"
        value={value}
        onChange={(event) => onChange?.(event.target.value)}
      />
    </label>
  );
}
