"use client";

import { useState } from "react";

export default function SpendForm() {
  const [teamSize, setTeamSize] = useState("");
  const [monthlySpend, setMonthlySpend] = useState("");

  return (
    <form className="space-y-6 text-left">
      <div>
        <label className="mb-2 block text-sm font-medium text-slate-200">
          Team Size
        </label>

        <input
          type="number"
          placeholder="e.g. 8"
          value={teamSize}
          onChange={(e) => setTeamSize(e.target.value)}
          className="w-full rounded-xl border border-white/10 bg-slate-900 px-4 py-3 text-white outline-none transition focus:border-emerald-400"
        />
      </div>

      <div>
        <label className="mb-2 block text-sm font-medium text-slate-200">
          Monthly AI Spend ($)
        </label>

        <input
          type="number"
          placeholder="e.g. 450"
          value={monthlySpend}
          onChange={(e) => setMonthlySpend(e.target.value)}
          className="w-full rounded-xl border border-white/10 bg-slate-900 px-4 py-3 text-white outline-none transition focus:border-emerald-400"
        />
      </div>

      <button
        type="button"
        className="w-full rounded-xl bg-emerald-400 px-5 py-3 font-semibold text-slate-950 transition hover:bg-emerald-300"
      >
        Run Free Audit
      </button>
    </form>
  );
}