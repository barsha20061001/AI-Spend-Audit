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

    return data.summary;
  } catch {
    return "Your audit was completed successfully. The recommendations above are based on your current AI tool spend, team size, and selected plans. Review the suggested changes to identify possible monthly and annual savings while keeping your workflow practical.";
  }
}


