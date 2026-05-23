export interface ToolInput {
  tool: string;
  plan: string;
  spend: number;
  seats: number;
}

export interface AuditResult {
  tool: string;
  currentSpend: number;
  recommendedSpend: number;
  monthlySavings: number;
  annualSavings: number;
  recommendation: string;
  reason: string;
}

export function runAudit(tools: ToolInput[]): AuditResult[] {
  return tools.map((tool) => {
    let recommendedSpend = tool.spend;
    let recommendation = "Current setup looks optimal";
    let reason = "No significant savings opportunity detected.";

    // Cursor logic
    if (
      tool.tool === "Cursor" &&
      tool.plan.toLowerCase() === "business" &&
      tool.seats <= 2
    ) {
      recommendedSpend = 20 * tool.seats;

      recommendation = "Downgrade to Cursor Pro";

      reason =
        "Small teams often do not need Business-tier collaboration features.";
    }

    // ChatGPT Team logic
    if (
      tool.tool === "ChatGPT" &&
      tool.plan.toLowerCase() === "team" &&
      tool.seats <= 2
    ) {
      recommendedSpend = 20 * tool.seats;

      recommendation = "Switch to ChatGPT Plus";

      reason =
        "ChatGPT Team becomes cost-inefficient for very small teams.";
    }

    // Claude Max logic
    if (
      tool.tool === "Claude" &&
      tool.plan.toLowerCase() === "max"
    ) {
      recommendedSpend = 30 * tool.seats;

      recommendation = "Switch to Claude Team";

      reason =
        "Claude Team is often more cost-effective for collaborative usage.";
    }

    // Generic overspend
    if (tool.spend > 300 && tool.seats <= 3) {
      recommendedSpend = tool.spend * 0.7;

      recommendation = "Reduce plan or optimize usage";

      reason =
        "Your spend appears unusually high relative to team size.";
    }

    const monthlySavings = Math.max(
      0,
      tool.spend - recommendedSpend
    );

    return {
      tool: tool.tool,
      currentSpend: tool.spend,
      recommendedSpend,
      monthlySavings,
      annualSavings: monthlySavings * 12,
      recommendation,
      reason,
    };
  });
}


