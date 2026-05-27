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
  "Review API usage and explore startup or committed-use credits";

reason =
  "Sustained API spend above this threshold may qualify for lower effective pricing through usage optimization, startup credits, or committed-use discounts.";
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
// Suspiciously high spend detection
if (
  recommendation === "Current setup looks optimal" &&
  (
    tool.tool === "ChatGPT" ||
    tool.tool === "Cursor" ||
    tool.tool === "Claude" ||
    tool.tool === "Gemini" ||
    tool.tool === "Windsurf"
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

// Cross-tool alternative: Cursor Enterprise -> Windsurf Teams
if (
  recommendation === "Current setup looks optimal" &&
  tool.tool === "Cursor" &&
  tool.plan.toLowerCase() === "enterprise" &&
  tool.seats <= 5
) {
  recommendedSpend = 40 * tool.seats;

  recommendation = "Evaluate Windsurf Teams as a lower-cost coding assistant alternative";

  reason =
    "For smaller engineering teams, a lower-cost AI coding assistant may provide similar day-to-day coding support without enterprise-level overhead.";
}

// Cross-tool alternative: Claude Max -> ChatGPT Plus
if (
  recommendation === "Current setup looks optimal" &&
  tool.tool === "Claude" &&
  tool.plan.toLowerCase() === "max" &&
  tool.seats <= 3
) {
  recommendedSpend = 20 * tool.seats;

  recommendation = "Evaluate ChatGPT Plus for general writing and research workflows";

  reason =
    "For small teams using AI mainly for writing, research, or mixed tasks, a lower-cost general AI subscription may be sufficient.";
}

// Seat-count anomaly
if (tool.seats >= 10 && tool.spend / tool.seats < 5) {
  recommendedSpend = tool.spend;

  recommendation = "Review seat count for accuracy";

  reason =
    "The number of paid seats appears high compared with the entered monthly spend, which may indicate unused seats or incorrect billing data.";
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


