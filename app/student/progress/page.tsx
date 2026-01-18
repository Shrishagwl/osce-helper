import Breadcrumbs from "../../components/ui/Breadcrumbs";
import ProgressHistoryPanel from "../../components/shared/ProgressHistoryPanel";

export default function StudentProgressPage() {
  return (
    <div className="space-y-6">
      <Breadcrumbs />
      <ProgressHistoryPanel defaultTab="progress" />
    </div>
  );
}
