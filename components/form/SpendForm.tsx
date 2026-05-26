
"use client";
import { v4 as uuidv4 } from "uuid";
import { generateSummary } from "@/lib/generateSummary";
import { saveAuditResult } from "@/lib/resultStore";

import { runAudit } from "@/lib/audit"; 

import AuditResults from "../results/AuditResults";

import { useEffect, useState } from "react";  



const toolOptions = [
  "Cursor",
  "GitHub Copilot",
  "Claude",
  "ChatGPT",
  "Gemini",
  "OpenAI API",
  "Anthropic API",
  "Windsurf",
];
const planOptions: Record<string, string[]> = {
  Cursor: ["Hobby", "Pro", "Business", "Enterprise"],
  "GitHub Copilot": ["Individual", "Business", "Enterprise"],
  Claude: ["Free", "Pro", "Max", "Team", "Enterprise", "API direct"],
  ChatGPT: ["Plus", "Team", "Enterprise", "API direct"],
  Gemini: ["Pro", "Ultra", "API"],
  "OpenAI API": ["API direct"],
  "Anthropic API": ["API direct"],
  Windsurf: ["Free", "Pro", "Teams", "Enterprise"],
};




export default function SpendForm() {
  const [tools, setTools] = useState([
    {
      tool: "Cursor",
      plan: "",
      spend: "",
      seats: "",
    },
  ]);

  const [teamSize, setTeamSize] = useState("");
  const [useCase, setUseCase] = useState("coding");
  const [auditResults, setAuditResults] = useState<any[]>([]);  
  const [summary, setSummary] = useState("");
  
useEffect(() => {
const saved = localStorage.getItem("audit-form");
if (saved) {
  const parsed = JSON.parse(saved);
  setTeamSize(parsed.teamSize || "");
  setUseCase(parsed.useCase || "");
  setTools(parsed.tools || tools);
        }
     }, []);

   useEffect(() => {
  localStorage.setItem(
    "audit-form",
    JSON.stringify({
      teamSize,
      useCase,
      tools,
    })
  );
  }, [teamSize, useCase, tools]);
   
  const addTool = () => {
    setTools([
      ...tools,
      {
        tool: "Cursor",
        plan: "",
        spend: "",
        seats: "",
      },
    ]);
  };
  const handleAudit = async () => {
  const formattedTools = tools.map((tool) => ({
    tool: tool.tool,
    plan: tool.plan,
    spend: Number(tool.spend),
    seats: Number(tool.seats),
  }));

  const results = runAudit(formattedTools);

  setAuditResults(results);

  const totalMonthlySavings = results.reduce(
  (acc, item) => acc + item.monthlySavings,
  0
);

const generatedSummary = await generateSummary({
  totalMonthlySavings,
  totalAnnualSavings: totalMonthlySavings * 12,
  tools: results.map((item) => ({
    tool: item.tool,
    recommendation: item.recommendation,
  })),
});

setSummary(generatedSummary);

const auditId = uuidv4();

saveAuditResult(auditId, results);

window.history.pushState(
  {},
  "",
  `/audit/${auditId}`
);
};

  const updateTool = (
    index: number,
    field: string,
    value: string
  ) => {
    const updated = [...tools];
    updated[index] = {
      ...updated[index],
      [field]: value,
    };

    setTools(updated);
  };


  return (
    <form className="space-y-8 text-left">
      {/* Team Details */}
      <div className="grid gap-6 md:grid-cols-2">
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
            Primary Use Case
          </label>

          <select
            value={useCase}
            onChange={(e) => setUseCase(e.target.value)}
            className="w-full rounded-xl border border-white/10 bg-slate-900 px-4 py-3 text-white outline-none transition focus:border-emerald-400"
          >
            <option value="coding">Coding</option>
            <option value="writing">Writing</option>
            <option value="research">Research</option>
            <option value="data">Data Analysis</option>
            <option value="mixed">Mixed</option>
          </select>
        </div>
      </div>

      {/* Tools */}
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <h2 className="text-lg font-semibold text-white">
            AI Tools
          </h2>

          <button
            type="button"
            onClick={addTool}
            className="rounded-lg border border-emerald-400/30 bg-emerald-400/10 px-4 py-2 text-sm text-emerald-300 transition hover:bg-emerald-400/20"
          >
            + Add Tool
          </button>
        </div>

        {tools.map((tool, index) => (
          <div
            key={index}
            className="rounded-2xl border border-white/10 bg-slate-900/60 p-5"
          >
            <div className="grid gap-4 md:grid-cols-4">
              {/* Tool */}
              <div>
                <label className="mb-2 block text-sm text-slate-300">
                  Tool
                </label>

                <select
                  value={tool.tool}
                  onChange={(e) => {
  updateTool(index, "tool", e.target.value);
  updateTool(index, "plan", "");
}}
                  className="w-full rounded-xl border border-white/10 bg-slate-950 px-4 py-3 text-white outline-none focus:border-emerald-400"
                >
                  {toolOptions.map((item) => (
                    <option key={item}>{item}</option>
                  ))}
                </select>
              </div>

              {/* Plan */}
              <div>
                <label className="mb-2 block text-sm text-slate-300">
                  Plan
                </label>

                <select
  value={tool.plan}
  onChange={(e) => updateTool(index, "plan", e.target.value)}
  className="w-full rounded-xl border border-white/10 bg-slate-950 px-4 py-3 text-white"
>
  <option value="">Select plan</option>
  {(planOptions[tool.tool] || []).map((plan) => (
    <option key={plan} value={plan}>
      {plan}
    </option>
  ))}
</select>
              </div>

              {/* Spend */}
              <div>
                <label className="mb-2 block text-sm text-slate-300">
                  Monthly Spend
                </label>

                <input
                  type="number"
                  placeholder="$"
                  value={tool.spend}
                  onChange={(e) =>
                    updateTool(index, "spend", e.target.value)
                  }
                  className="w-full rounded-xl border border-white/10 bg-slate-950 px-4 py-3 text-white outline-none focus:border-emerald-400"
                />
              </div>

              {/* Seats */}
              <div>
                <label className="mb-2 block text-sm text-slate-300">
                  Seats
                </label>

                <input
                  type="number"
                  placeholder="e.g. 5"
                  value={tool.seats}
                  onChange={(e) =>
                    updateTool(index, "seats", e.target.value)
                  }
                  className="w-full rounded-xl border border-white/10 bg-slate-950 px-4 py-3 text-white outline-none focus:border-emerald-400"
                />
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* CTA */}
      <button
        type="button"
        onClick={handleAudit}
        className="w-full rounded-2xl bg-emerald-400 px-6 py-4 text-lg font-semibold text-slate-950 transition hover:bg-emerald-300"
      >
        Run Free AI Spend Audit
      </button>

      {auditResults.length > 0 && (
  <AuditResults
  results={auditResults}
  summary={summary}
/>
)}

    </form>
  );
}    

