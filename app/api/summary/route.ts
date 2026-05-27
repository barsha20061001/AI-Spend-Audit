import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const prompt = `
You are an AI spend optimization assistant.

Write a concise 90-120 word personalized audit summary.
Use only the given data. Do not invent numbers.

Monthly savings: $${body.totalMonthlySavings}
Annual savings: $${body.totalAnnualSavings}

Recommendations:
${body.tools
  .map(
    (tool: any) =>
      `- ${tool.tool}: ${tool.recommendation}`
  )
  .join("\n")}
`;

    const response = await fetch("https://api.openai.com/v1/chat/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${process.env.OPENAI_API_KEY}`,
      },
      body: JSON.stringify({
        model: "gpt-4o-mini",
        messages: [{ role: "user", content: prompt }],
        temperature: 0.3,
      }),
    });

    if (!response.ok) {
      throw new Error("OpenAI API failed");
    }

    const data = await response.json();

    return NextResponse.json({
      summary: data.choices[0].message.content,
    });
  } catch {
    return NextResponse.json({
      summary:
        "Your audit was completed successfully. The recommendations above are based on your current AI tool spend, team size, and selected plans. Review the suggested changes to identify possible monthly and annual savings while keeping your workflow practical.",
    });
  }
}