import Breadcrumbs from "../../components/ui/Breadcrumbs";
import Button from "../../components/ui/Button";
import Card from "../../components/ui/Card";

export default function StudentSettingsPage() {
  return (
    <div className="space-y-6">
      <Breadcrumbs />
      <div className="grid gap-6 lg:grid-cols-[2fr_1fr]">
        <Card className="space-y-6">
          <div>
            <h2 className="text-lg font-semibold text-slate-900 dark:text-white">Profile</h2>
            <p className="text-sm text-slate-500 dark:text-slate-400">
              Update your contact details and preferences.
            </p>
          </div>
          <div className="grid gap-4 md:grid-cols-2">
            <label className="text-sm text-slate-500">
              First name
              <input
                className="mt-2 w-full rounded-lg border border-slate-200 bg-white px-3 py-2 text-sm text-slate-700 dark:border-slate-800 dark:bg-slate-900 dark:text-slate-200"
                defaultValue="Sarah"
              />
            </label>
            <label className="text-sm text-slate-500">
              Last name
              <input
                className="mt-2 w-full rounded-lg border border-slate-200 bg-white px-3 py-2 text-sm text-slate-700 dark:border-slate-800 dark:bg-slate-900 dark:text-slate-200"
                defaultValue="Jenkins"
              />
            </label>
            <label className="text-sm text-slate-500 md:col-span-2">
              Email
              <input
                className="mt-2 w-full rounded-lg border border-slate-200 bg-white px-3 py-2 text-sm text-slate-700 dark:border-slate-800 dark:bg-slate-900 dark:text-slate-200"
                defaultValue="sarah.jenkins@student.edu"
              />
            </label>
          </div>
          <Button className="w-fit">Save profile</Button>
        </Card>
        <div className="space-y-6">
          <Card className="space-y-4">
            <h3 className="text-base font-semibold text-slate-900 dark:text-white">
              Notifications
            </h3>
            {["Scenario assigned", "Reflection reminders", "New feedback"].map((item) => (
              <label key={item} className="flex items-center justify-between text-sm text-slate-600">
                {item}
                <input type="checkbox" defaultChecked className="h-4 w-4" />
              </label>
            ))}
          </Card>
          <Card className="space-y-4">
            <h3 className="text-base font-semibold text-slate-900 dark:text-white">
              Accessibility
            </h3>
            <label className="flex items-center justify-between text-sm text-slate-600">
              Enable high contrast mode
              <input type="checkbox" className="h-4 w-4" />
            </label>
            <label className="flex items-center justify-between text-sm text-slate-600">
              Reduce motion
              <input type="checkbox" defaultChecked className="h-4 w-4" />
            </label>
            <label className="flex items-center justify-between text-sm text-slate-600">
              Captions for audio
              <input type="checkbox" className="h-4 w-4" />
            </label>
          </Card>
        </div>
      </div>
    </div>
  );
}
