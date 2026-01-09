import { scenarios } from "../lib/scenarios";
import SimulationClient from "./SimulationClient";

type SimulationPageProps = {
  searchParams?: { scenario?: string };
};

export default function SimulationPage({ searchParams }: SimulationPageProps) {
  const defaultScenarioId = scenarios[0]?.id;
  const scenarioId = searchParams?.scenario ?? defaultScenarioId;

  return (
    <SimulationClient scenarioId={scenarioId} scenarios={scenarios} />
  );
}
