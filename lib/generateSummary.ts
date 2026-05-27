interface SummaryInput {
  totalMonthlySavings: number;
  totalAnnualSavings: number;
  tools: {
    tool: string;
    recommendation: string;
  }[];
}

export async function generateSummary(input: SummaryInput): Promise<string> {
  try {
    const response = await fetch("/api/summary", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(input),
    });

    const data = await response.json();

    if (data?.summary) {
      return data.summary;
    }

    throw new Error("No summary returned");
  } catch {
    return `
Your current AI stack shows opportunities to reduce unnecessary spending while maintaining productivity. Based on this audit, switching from higher-cost or less suitable plans could save approximately $${input.totalMonthlySavings} monthly and $${input.totalAnnualSavings} annually. The recommendations specifically target ${input.tools
      .map((tool) => tool.tool)
      .join(
        ", "
      )} usage patterns and focus on plan optimization, collaboration fit, and lower-cost alternatives. These adjustments can help maintain workflow efficiency while improving overall AI infrastructure cost efficiency.
`;
  }
}