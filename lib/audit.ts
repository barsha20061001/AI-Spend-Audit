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
    // OpenAI API overspend
if (
  tool.tool === "OpenAI API" &&
  tool.spend > 500 &&
  tool.seats <= 5
) {
  recommendedSpend = tool.spend * 0.75;

  recommendation =
    "Optimize API usage or explore discounted infrastructure credits";

  reason =
    "Your API spend appears high relative to team size. Usage optimization or discounted credits could reduce costs substantially.";
}

// Anthropic API overspend
if (
  tool.tool === "Anthropic API" &&
  tool.spend > 400
) {
  recommendedSpend = tool.spend * 0.8;

  recommendation =
    "Review token usage and consider lower-cost access options";

  reason =
    "Heavy Claude API usage often contains opportunities for prompt and token optimization.";
}

// Gemini Ultra logic
if (
  tool.tool === "Gemini" &&
  tool.plan.toLowerCase() === "ultra" &&
  tool.seats <= 2
) {
  recommendedSpend = 20 * tool.seats;

  recommendation = "Downgrade to Gemini Pro";

  reason =
    "Gemini Ultra is typically unnecessary for smaller general-purpose workflows.";
}

// GitHub Copilot Enterprise logic
if (
  tool.tool === "GitHub Copilot" &&
  tool.plan.toLowerCase() === "enterprise" &&
  tool.seats <= 5
) {
  recommendedSpend = 19 * tool.seats;

  recommendation = "Switch to GitHub Copilot Business";

  reason =
    "Enterprise-tier controls are usually unnecessary for smaller engineering teams.";
}

// Suspiciously high spend detection
if (
  (
    tool.tool === "ChatGPT" ||
    tool.tool === "Cursor" ||
    tool.tool === "Claude"
  ) &&
  tool.seats <= 2 &&
  tool.spend > 100
) {
  recommendedSpend = 100;

  recommendation =
    "Review duplicate subscriptions or unexpected billing usage";

  reason =
    "Your reported spend appears unusually high for the selected plan and team size.";
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


