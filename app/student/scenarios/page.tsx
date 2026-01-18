"use client";

import { useMemo, useState } from "react";
import Breadcrumbs from "../../components/ui/Breadcrumbs";
import Button from "../../components/ui/Button";
import Card from "../../components/ui/Card";
import EmptyState from "../../components/ui/EmptyState";
import FilterChips from "../../components/ui/FilterChips";
import SearchInput from "../../components/ui/SearchInput";
import Badge from "../../components/ui/Badge";
import { scenarios } from "@/src/data/scenarios";

const difficultyChips = [
  { id: "all", label: "All" },
  { id: "Basic", label: "Basic" },
  { id: "Intermediate", label: "Intermediate" },
  { id: "Advanced", label: "Advanced" },
];

const specialtyChips = [
  { id: "all", label: "All specialties" },
  { id: "Cardiology", label: "Cardiology" },
  { id: "Pediatrics", label: "Pediatrics" },
  { id: "Mental Health", label: "Mental Health" },
  { id: "Surgery", label: "Surgery" },
];

export default function StudentScenariosPage() {
  const [query, setQuery] = useState("");
  const [difficulty, setDifficulty] = useState("all");
  const [specialty, setSpecialty] = useState("all");

  const filtered = useMemo(() => {
    return scenarios.filter((scenario) => {
      const matchesQuery = scenario.title.toLowerCase().includes(query.toLowerCase());
      const matchesDifficulty = difficulty === "all" || scenario.difficulty === difficulty;
      const matchesSpecialty = specialty === "all" || scenario.specialty === specialty;
      return matchesQuery && matchesDifficulty && matchesSpecialty;
    });
  }, [query, difficulty, specialty]);

  return (
    <div className="space-y-6">
      <Breadcrumbs />
      <div className="flex flex-col gap-4">
        <SearchInput
          placeholder="Search scenarios by title or keyword"
          value={query}
          onChange={setQuery}
        />
        <div className="flex flex-wrap gap-4">
          <FilterChips chips={difficultyChips} activeId={difficulty} onChange={setDifficulty} />
          <FilterChips chips={specialtyChips} activeId={specialty} onChange={setSpecialty} />
        </div>
      </div>
      {filtered.length === 0 ? (
        <EmptyState
          title="No scenarios match your filters"
          description="Try clearing filters or search for a different specialty."
          actionLabel="Reset filters"
        />
      ) : (
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {filtered.map((scenario) => (
            <Card key={scenario.id} className="flex flex-col gap-4">
              <div>
                <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
                  {scenario.title}
                </h3>
                <p className="text-sm text-slate-500 dark:text-slate-400">
                  {scenario.description}
                </p>
              </div>
              <div className="flex flex-wrap gap-2">
                <Badge variant="info">{scenario.specialty}</Badge>
                <Badge variant="default">{scenario.difficulty}</Badge>
                <Badge variant="default">{scenario.duration}</Badge>
                {scenario.tags.map((tag) => (
                  <Badge key={tag} variant="default">
                    {tag}
                  </Badge>
                ))}
              </div>
              <Button className="mt-auto" variant="secondary">
                Start
              </Button>
            </Card>
          ))}
        </div>
      )}
    </div>
  );
}
