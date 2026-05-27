
"use client";
import LeadCapture from "./LeadCapture";



interface AuditResult {
  tool: string;
  currentSpend: number;
  recommendedSpend: number;
  monthlySavings: number;
  annualSavings: number;
  recommendation: string;
  reason: string;
}

interface Props {
  results: AuditResult[];
  summary: string;
}

export default function AuditResults({
  results,
  summary,
}: Props) {
  const totalMonthlySavings = results.reduce(
    (acc, item) => acc + item.monthlySavings,
    0
  );

  const totalAnnualSavings = totalMonthlySavings * 12;

  
  
const downloadPDF = () => {
  window.print();
};

  return (
    <div id="audit-report" className="mt-10 space-y-6">
      <button
  onClick={downloadPDF}
  className="rounded-xl bg-emerald-400 px-5 py-3 font-semibold text-slate-950"
>
  Download / Print PDF Report
</button>
      {/* Hero */}

      <div className="rounded-3xl border border-emerald-400/20 bg-emerald-400/10 p-8 text-center">
  {totalMonthlySavings > 0 ? (
    <>
      <p className="text-sm uppercase tracking-widest text-emerald-300">
        Estimated Savings
      </p>

      <h2 className="mt-4 text-5xl font-bold text-white">
        ${totalMonthlySavings.toFixed(0)}
        <span className="text-xl text-slate-300">/month</span>
      </h2>

      <p className="mt-3 text-slate-300">
        Potential annual savings:
        <span className="font-semibold text-white">
          {" "}
          ${totalAnnualSavings.toFixed(0)}
        </span>
      </p>
      <p className="mt-4 text-sm text-slate-400">
  Generated on {new Date().toLocaleDateString()}
</p>
    </>
  ) : (
    <>
      <p className="text-sm uppercase tracking-widest text-emerald-300">
        Your AI Spend Looks Healthy
      </p>

      <h2 className="mt-4 text-4xl font-bold text-white">
        No major overspending detected
      </h2>

      <p className="mt-4 text-slate-300">
        Your current AI tooling setup appears reasonably optimized for your
        team size and usage patterns.
      </p>
    </>
  )}
</div>

<div className="flex flex-wrap items-center justify-center gap-4">
  <button
  onClick={() => {
    navigator.clipboard.writeText(window.location.href);
    alert("Shareable link copied!");
  }}
  className="px-4 py-2 rounded bg-blue-600 text-white"
>
  Copy Shareable Link
</button>

  <a
    href={`https://twitter.com/intent/tweet?text=I just analyzed my AI stack savings`}
    target="_blank"
    className="rounded-xl bg-emerald-400 px-5 py-3 text-sm font-semibold text-slate-950 transition hover:bg-emerald-300"
  >
    Share on X
  </a>
</div>

<div className="rounded-3xl border border-white/10 bg-slate-900/60 p-8">
  <div className="mb-4 flex items-center gap-3">
    <div className="rounded-full bg-emerald-400/10 px-3 py-1 text-xs font-semibold uppercase tracking-widest text-emerald-300">
      AI Summary
    </div>
  </div>

<p className="leading-8 text-slate-300">
  {summary || "Generating AI-powered audit summary..."}
</p>
</div>

      {/* Tool Results */}
      <div className="space-y-5">
        {results.map((result, index) => (
          <div
            key={index}
            className="rounded-2xl border border-white/10 bg-slate-900/60 p-6"
          >
            <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
              <div>
                <h3 className="text-xl font-semibold text-white">
                  {result.tool}
                </h3>

                <p className="mt-2 text-slate-300">
                  {result.reason}
                </p>
              </div>

              <div className="text-right">
                <p className="text-sm text-slate-400">
                  Current: ${result.currentSpend}
                </p>

                <p className="text-sm text-slate-400">
                  Recommended: ${result.recommendedSpend}
                </p>

                <p className="mt-2 text-lg font-semibold text-emerald-300">
                  Save ${result.monthlySavings}/mo
                </p>
              </div>
            </div>

            <div className="mt-5 rounded-xl bg-slate-950 p-4 text-sm text-slate-300">
              <span className="font-semibold text-white">
                Recommendation:
              </span>{" "}
              {result.recommendation}
            </div>
          </div>
        ))}
      </div>

      {/* Credex CTA */}
      {totalMonthlySavings >= 500 && (
        <div className="rounded-3xl border border-emerald-400/30 bg-emerald-400/10 p-8 text-center">
          <h3 className="text-2xl font-bold text-white">
            Unlock even more savings with Credex
          </h3>

          <p className="mt-3 text-slate-300">
            Your stack shows significant optimization potential.
            Credex can help reduce enterprise AI infrastructure costs further.
          </p>

          <a
  href="https://calendly.com/"
  target="_blank"
  rel="noopener noreferrer"
  className="mt-6 inline-block rounded-2xl bg-emerald-400 px-6 py-3 font-semibold text-slate-950"
>
  Book Credex Consultation
</a>
        </div>
      )}

      {totalMonthlySavings < 100 && (
  <div className="rounded-3xl border border-white/10 bg-slate-900/60 p-8 text-center">
    <h3 className="text-2xl font-bold text-white">
      Stay updated on future optimizations
    </h3>

    <p className="mt-3 text-slate-300">
      Your stack already looks efficient, but AI pricing changes fast.
      Join the waitlist to get notified when new savings opportunities appear.
    </p>

    <button
  onClick={() => {
    alert("Notification preference saved!");
  }}
  className="mt-6 rounded-2xl border border-white/10 bg-white/10 px-6 py-3 font-semibold text-white"
>
  Notify Me
</button>
      </div>
)}
<LeadCapture monthlySavings={totalMonthlySavings} />

    </div>
  );
}


