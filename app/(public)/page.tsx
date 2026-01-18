import Link from "next/link";
import { ArrowRight, ShieldCheck, Sparkles, Users } from "lucide-react";
import Breadcrumbs from "../components/ui/Breadcrumbs";
import Button from "../components/ui/Button";
import Card from "../components/ui/Card";

export default function LandingPage() {
  return (
    <div className="space-y-10">
      <Breadcrumbs />
      <section className="grid gap-8 rounded-3xl border border-slate-200 bg-white p-10 shadow-sm dark:border-slate-800 dark:bg-slate-900">
        <div className="max-w-2xl space-y-4">
          <p className="text-xs uppercase tracking-[0.2em] text-blue-600">AI-OSCE MVP</p>
          <h1 className="text-4xl font-semibold text-slate-900 dark:text-white">
            Build clinical confidence with AI-powered OSCE simulations.
          </h1>
          <p className="text-base text-slate-600 dark:text-slate-300">
            Practice high-stakes patient interactions with structured feedback, cohort insights, and
            clinician-ready reports.
          </p>
          <div className="flex flex-wrap items-center gap-3">
            <Link href="/login">
              <Button>
                Launch institutional SSO
                <ArrowRight className="h-4 w-4" />
              </Button>
            </Link>
            <Button variant="secondary">Request a demo</Button>
          </div>
        </div>
        <div className="grid gap-4 md:grid-cols-3">
          <Card>
            <Sparkles className="h-6 w-6 text-blue-600" />
            <h3 className="mt-4 text-lg font-semibold">Realistic OSCE practice</h3>
            <p className="text-sm text-slate-500 dark:text-slate-400">
              Simulated patients, adaptive scoring, and immediate remediation tips.
            </p>
          </Card>
          <Card>
            <Users className="h-6 w-6 text-blue-600" />
            <h3 className="mt-4 text-lg font-semibold">Cohort intelligence</h3>
            <p className="text-sm text-slate-500 dark:text-slate-400">
              Track performance across cohorts with actionable insights and alerts.
            </p>
          </Card>
          <Card>
            <ShieldCheck className="h-6 w-6 text-blue-600" />
            <h3 className="mt-4 text-lg font-semibold">Governance-ready</h3>
            <p className="text-sm text-slate-500 dark:text-slate-400">
              Built-in audit trails, rubric exports, and institutional controls.
            </p>
          </Card>
        </div>
      </section>
      <section className="grid gap-6 md:grid-cols-3">
        {[
          "Evidence-based scoring rubrics",
          "Customizable institution workflows",
          "Secure compliance-ready analytics",
        ].map((item) => (
          <Card key={item} className="border-slate-100">
            <p className="text-sm font-semibold text-slate-700 dark:text-slate-200">{item}</p>
            <p className="mt-2 text-xs text-slate-500 dark:text-slate-400">
              Configure scenarios, rubrics, and competencies aligned to your curriculum.
            </p>
          </Card>
        ))}
      </section>
      <footer className="flex flex-wrap items-center justify-between gap-4 border-t border-slate-200 pt-6 text-xs text-slate-500 dark:border-slate-800">
        <p>© 2024 AI-OSCE Platform. All rights reserved.</p>
        <div className="flex gap-4">
          <Link href="/login" className="hover:text-slate-900 dark:hover:text-white">
            Login
          </Link>
          <Link href="/access-restricted" className="hover:text-slate-900 dark:hover:text-white">
            Access help
          </Link>
        </div>
      </footer>
    </div>
  );
}
