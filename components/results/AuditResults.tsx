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
}

export default function AuditResults({ results }: Props) {
  const totalMonthlySavings = results.reduce(
    (acc, item) => acc + item.monthlySavings,
    0
  );

  const totalAnnualSavings = totalMonthlySavings * 12;

  return (
    <div className="mt-10 space-y-6">
      {/* Hero */}
      <div className="rounded-3xl border border-emerald-400/20 bg-emerald-400/10 p-8 text-center">
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

          <button className="mt-6 rounded-2xl bg-emerald-400 px-6 py-3 font-semibold text-slate-950 transition hover:bg-emerald-300">
            Book Credex Consultation
          </button>
        </div>
      )}
    </div>
  );
}


