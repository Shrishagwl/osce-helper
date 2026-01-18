import Breadcrumbs from "../../components/ui/Breadcrumbs";
import ProgressHistoryPanel from "../../components/shared/ProgressHistoryPanel";

export default function StudentHistoryPage() {
  return (
    <div className="space-y-6">
      <Breadcrumbs />
      <ProgressHistoryPanel defaultTab="history" />
    </div>
  );
}
