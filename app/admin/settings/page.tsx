import Breadcrumbs from "../../components/ui/Breadcrumbs";
import Button from "../../components/ui/Button";
import Card from "../../components/ui/Card";

export default function AdminSettingsPage() {
  return (
    <div className="space-y-6">
      <Breadcrumbs />
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-semibold text-slate-900 dark:text-white">
            Institution settings
          </h1>
          <p className="text-sm text-slate-500 dark:text-slate-400">
            Manage branding, SSO, and retention policies.
          </p>
        </div>
        <Button>Save changes</Button>
      </div>
      <div className="space-y-6">
        <Card className="space-y-4">
          <h3 className="text-base font-semibold text-slate-900 dark:text-white">
            Institution profile
          </h3>
          <div className="grid gap-4 md:grid-cols-2">
            <label className="text-sm text-slate-500">
              Institution name
              <input
                className="mt-2 w-full rounded-lg border border-slate-200 bg-white px-3 py-2 text-sm dark:border-slate-800 dark:bg-slate-900"
                defaultValue="University of Melbourne - Nursing"
              />
            </label>
            <label className="text-sm text-slate-500">
              Institution ID
              <input
                className="mt-2 w-full rounded-lg border border-slate-200 bg-white px-3 py-2 text-sm dark:border-slate-800 dark:bg-slate-900"
                defaultValue="INST-8839-MEL-01"
              />
            </label>
          </div>
          <div className="rounded-lg border border-dashed border-slate-200 p-4 text-sm text-slate-500 dark:border-slate-800">
            Upload branding assets (logo, color palette) in the full release.
          </div>
        </Card>
        <Card className="space-y-4">
          <h3 className="text-base font-semibold text-slate-900 dark:text-white">SSO settings</h3>
          {[
            "Enable SAML",
            "Just-in-time provisioning",
            "Require MFA for admins",
          ].map((item) => (
            <label key={item} className="flex items-center justify-between text-sm text-slate-600">
              {item}
              <input type="checkbox" defaultChecked className="h-4 w-4" />
            </label>
          ))}
        </Card>
        <Card className="space-y-4">
          <h3 className="text-base font-semibold text-slate-900 dark:text-white">Retention</h3>
          <label className="text-sm text-slate-500">
            Data retention policy
            <select className="mt-2 w-full rounded-lg border border-slate-200 bg-white px-3 py-2 text-sm dark:border-slate-800 dark:bg-slate-900">
              <option>24 months</option>
              <option>36 months</option>
              <option>60 months</option>
            </select>
          </label>
        </Card>
      </div>
    </div>
  );
}
