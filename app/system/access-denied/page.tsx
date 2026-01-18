import Link from "next/link";
import { ShieldAlert } from "lucide-react";
import Breadcrumbs from "../../components/ui/Breadcrumbs";
import Button from "../../components/ui/Button";
import Card from "../../components/ui/Card";

export default function SystemAccessDeniedPage() {
  return (
    <div className="space-y-8">
      <Breadcrumbs />
      <Card className="mx-auto max-w-xl text-center">
        <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-rose-100 text-rose-600 dark:bg-rose-500/20">
          <ShieldAlert className="h-6 w-6" />
        </div>
        <h1 className="mt-4 text-2xl font-semibold text-slate-900 dark:text-white">
          System access denied
        </h1>
        <p className="mt-2 text-sm text-slate-500 dark:text-slate-400">
          This system workspace is restricted to platform administrators. Please return to login or
          contact the AI-OSCE operations team.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-3">
          <Link href="/login">
            <Button>Back to login</Button>
          </Link>
          <Button variant="secondary">Contact admin</Button>
        </div>
      </Card>
    </div>
  );
}
