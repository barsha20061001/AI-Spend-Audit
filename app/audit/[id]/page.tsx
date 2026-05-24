"use client";

import { use, useEffect, useState } from "react";
import { getAuditResult } from "@/lib/resultStore";
import AuditResults from "@/components/results/AuditResults";

export default function AuditPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = use(params);
  const [results, setResults] = useState<any[]>([]);

  useEffect(() => {
    const audit = getAuditResult(id);

    if (audit) {
      setResults(audit.results);
    }
  }, [id]);

  if (!results.length) {
    return (
      <main className="flex min-h-screen items-center justify-center bg-slate-950 text-white">
        <div className="text-center">
  <h1 className="text-3xl font-bold text-white">
    Audit not found
  </h1>

  <p className="mt-4 text-slate-300">
    This audit may have expired or was never generated.
  </p>

  <a
    href="/"
    className="mt-6 inline-block rounded-2xl bg-emerald-400 px-6 py-3 font-semibold text-slate-950 transition hover:bg-emerald-300"
  >
    Generate New Audit
  </a>
</div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-950 to-slate-900 px-6 py-16 text-white">
      <div className="mx-auto max-w-5xl">
        <div className="mb-10 text-center">
          <p className="text-sm uppercase tracking-widest text-emerald-300">
            Public AI Spend Audit
          </p>

          <h1 className="mt-4 text-5xl font-bold">
            Shareable Savings Report
          </h1>

          <p className="mt-4 text-slate-300">
            This public audit excludes private company details.
          </p>
        </div>

        <AuditResults results={results} />
      </div>
    </main>
  );
}

