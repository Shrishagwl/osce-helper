"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import Breadcrumbs from "../../components/ui/Breadcrumbs";
import SearchInput from "../../components/ui/SearchInput";
import FilterChips from "../../components/ui/FilterChips";
import Table from "../../components/ui/Table";
import Badge from "../../components/ui/Badge";
import Pagination from "../../components/ui/Pagination";
import { students } from "@/src/data/students";

const riskFilters = [
  { id: "all", label: "All" },
  { id: "Low", label: "Low" },
  { id: "Monitor", label: "Monitor" },
  { id: "Moderate", label: "Moderate" },
  { id: "Critical", label: "Critical" },
];

export default function EducatorStudentsPage() {
  const [query, setQuery] = useState("");
  const [riskFilter, setRiskFilter] = useState("all");

  const filtered = useMemo(() => {
    return students.filter((student) => {
      const matchesQuery = student.name.toLowerCase().includes(query.toLowerCase());
      const matchesRisk = riskFilter === "all" || student.risk === riskFilter;
      return matchesQuery && matchesRisk;
    });
  }, [query, riskFilter]);

  return (
    <div className="space-y-6">
      <Breadcrumbs />
      <div className="space-y-4">
        <SearchInput value={query} onChange={setQuery} placeholder="Search students" />
        <FilterChips chips={riskFilters} activeId={riskFilter} onChange={setRiskFilter} />
      </div>
      <Table>
        <thead className="bg-slate-50 text-xs uppercase text-slate-400 dark:bg-slate-900/60">
          <tr>
            <th className="px-4 py-3">Student</th>
            <th className="px-4 py-3">Program</th>
            <th className="px-4 py-3">Last active</th>
            <th className="px-4 py-3">Risk</th>
            <th className="px-4 py-3">Action</th>
          </tr>
        </thead>
        <tbody>
          {filtered.map((student) => (
            <tr key={student.id} className="border-t border-slate-100 dark:border-slate-800">
              <td className="px-4 py-3 font-semibold text-slate-900 dark:text-white">
                {student.name}
              </td>
              <td className="px-4 py-3 text-sm text-slate-500 dark:text-slate-400">
                {student.program}
              </td>
              <td className="px-4 py-3 text-sm text-slate-500 dark:text-slate-400">
                {student.lastActive}
              </td>
              <td className="px-4 py-3">
                <Badge variant={student.risk === "Critical" ? "danger" : "warning"}>
                  {student.risk}
                </Badge>
              </td>
              <td className="px-4 py-3">
                <Link
                  href={`/educator/students/${student.id}`}
                  className="text-sm font-semibold text-blue-600 hover:text-blue-700"
                >
                  View profile
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
      <Pagination />
    </div>
  );
}
