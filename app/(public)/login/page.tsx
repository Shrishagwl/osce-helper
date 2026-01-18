import { Building2, LogIn } from "lucide-react";
import Breadcrumbs from "../../components/ui/Breadcrumbs";
import Button from "../../components/ui/Button";
import Card from "../../components/ui/Card";

export default function LoginPage() {
  return (
    <div className="space-y-8">
      <Breadcrumbs />
      <Card className="mx-auto max-w-lg space-y-6">
        <div className="space-y-2">
          <p className="text-xs uppercase tracking-[0.2em] text-blue-600">Institutional SSO</p>
          <h1 className="text-2xl font-semibold text-slate-900 dark:text-white">
            Sign in with your institution
          </h1>
          <p className="text-sm text-slate-500 dark:text-slate-400">
            Select your organization to continue with SSO.
          </p>
        </div>
        <div className="space-y-3">
          <label className="text-xs font-semibold text-slate-500">Institution</label>
          <div className="flex items-center gap-2 rounded-lg border border-slate-200 bg-slate-50 px-3 py-2 text-sm text-slate-700 dark:border-slate-800 dark:bg-slate-900 dark:text-slate-200">
            <Building2 className="h-4 w-4 text-blue-500" />
            <select className="w-full bg-transparent outline-none">
              <option>University of Melbourne</option>
              <option>Monash Health</option>
              <option>Queensland Clinical School</option>
            </select>
          </div>
        </div>
        <Button className="w-full" size="lg">
          <LogIn className="h-4 w-4" />
          Continue with SSO
        </Button>
        <p className="text-xs text-slate-500 dark:text-slate-400">
          Trouble signing in? Contact your institution administrator or email support@ai-osce.io.
        </p>
      </Card>
    </div>
  );
}
