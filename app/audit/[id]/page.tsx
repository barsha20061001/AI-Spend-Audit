"use client";

import { use, useEffect, useState } from "react";
import { getAuditResult } from "@/lib/resultStore";
import AuditResults from "@/components/results/AuditResults";
import jsPDF from "jspdf";
import html2canvas from "html2canvas";

export default function AuditPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = use(params);
  const [results, setResults] = useState<any[]>([]);

  const downloadPDF = async () => {
  const input = document.getElementById("audit-report");

  if (!input) return;

  const canvas = await html2canvas(input);

  const imgData = canvas.toDataURL("image/png");

  const pdf = new jsPDF("p", "mm", "a4");

  const pdfWidth = pdf.internal.pageSize.getWidth();

  const pdfHeight =
    (canvas.height * pdfWidth) / canvas.width;

  pdf.addImage(imgData, "PNG", 0, 0, pdfWidth, pdfHeight);

  pdf.save("ai-spend-audit-report.pdf");
};

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
      <div id="audit-report" className="mx-auto max-w-5xl">
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

        <button
  onClick={downloadPDF}
  className="mb-6 rounded-xl bg-emerald-400 px-5 py-3 font-semibold text-slate-950"
>
  Download PDF Report
</button>

        <AuditResults
  results={results}
  summary="This shareable audit report summarizes the detected AI spend optimization opportunities based on the saved audit results."
/>
      </div>
    </main>
  );
}

