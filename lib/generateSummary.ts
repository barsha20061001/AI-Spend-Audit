interface SummaryInput {
  totalMonthlySavings: number;
  totalAnnualSavings: number;
  tools: {
    tool: string;
    recommendation: string;
  }[];
}

export async function generateSummary(
  input: SummaryInput
) {
  try {
    // Temporary mock AI response
    // Later we will connect real API

    const summary = `
Your current AI tooling stack shows an estimated savings opportunity of approximately $${input.totalMonthlySavings} per month and $${input.totalAnnualSavings} annually. Several tools in your stack appear to be operating on plans that may not match your current team size or usage requirements. Optimizing subscriptions, reducing unnecessary enterprise features, and reviewing API usage patterns could significantly improve cost efficiency while maintaining similar productivity outcomes.
`;

    return summary.trim();
  } catch (error) {
    return `
Your AI stack was analyzed successfully. Some opportunities for reducing unnecessary spending were identified based on your current plans, usage profile, and team size.
`.trim();
  }
}


