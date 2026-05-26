"use client";

import { useState } from "react";
import { supabase } from "@/lib/supabase";

interface Props {
  monthlySavings: number;
}

export default function LeadCapture({
  monthlySavings,
}: Props) {
  const [email, setEmail] = useState("");
  const [website, setWebsite] = useState("");
  const [company, setCompany] = useState("");
  const [role, setRole] = useState("");
  const [teamSize, setTeamSize] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async () => {
    if (!email) return;
    if (website) return;

  const { error } = await supabase.from("leads").insert([
  {
    email,
    company,
    role,
    team_size: Number(teamSize),
    monthly_savings: monthlySavings,
  },
]);

await supabase.from("audits").insert([
  {
    results: {
      email,
      company,
      role,
      teamSize,
      monthlySavings,
    },
  },
]);

if (error) {
  console.error(error);
  alert(error.message);
  return;
}

setSubmitted(true);
};

  if (submitted) {
    return (
      <div className="rounded-3xl border border-emerald-400/20 bg-emerald-400/10 p-8 text-center">
        <h3 className="text-2xl font-bold text-white">
          Audit saved successfully
        </h3>

        <p className="mt-3 text-slate-300">
          We'll notify you about future AI pricing optimizations.
        </p>
      </div>
    );
  }

  return (
    <div className="rounded-3xl border border-white/10 bg-slate-900/60 p-8">
      <h3 className="text-2xl font-bold text-white">
        Save your audit report
      </h3>

      <p className="mt-3 text-slate-300">
        Get future optimization alerts and AI pricing updates.
      </p>

      <input
  type="text"
  value={website}
  onChange={(e) => setWebsite(e.target.value)}
  className="hidden"
  tabIndex={-1}
  autoComplete="off"
  aria-hidden="true"
/>

      <div className="mt-6 grid gap-4 md:grid-cols-2">
        <input
          type="email"
          placeholder="Email address"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="rounded-xl border border-white/10 bg-slate-950 px-4 py-3 text-white outline-none focus:border-emerald-400"
        />

        <input
          type="text"
          placeholder="Company"
          value={company}
          onChange={(e) => setCompany(e.target.value)}
          className="rounded-xl border border-white/10 bg-slate-950 px-4 py-3 text-white outline-none focus:border-emerald-400"
        />

        <input
          type="text"
          placeholder="Role"
          value={role}
          onChange={(e) => setRole(e.target.value)}
          className="rounded-xl border border-white/10 bg-slate-950 px-4 py-3 text-white outline-none focus:border-emerald-400"
        />

        <input
          type="number"
          placeholder="Team size"
          value={teamSize}
          onChange={(e) => setTeamSize(e.target.value)}
          className="rounded-xl border border-white/10 bg-slate-950 px-4 py-3 text-white outline-none focus:border-emerald-400"
        />
      </div>

      <button
        onClick={handleSubmit}
        className="mt-6 w-full rounded-2xl bg-emerald-400 px-6 py-4 font-semibold text-slate-950 transition hover:bg-emerald-300"
      >
        Save Audit Report
      </button>
    </div>
  );
}

