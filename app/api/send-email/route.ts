import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    const { email, monthlySavings, auditUrl } = await req.json();

    if (!email) {
      return NextResponse.json({ error: "Email is required" }, { status: 400 });
    }

    await resend.emails.send({
      from: "AI Spend Audit <onboarding@resend.dev>",
      to: email,
      subject: "Your AI Spend Audit report is ready",
      html: `
  <h2>Your AI Spend Audit is confirmed</h2>

  <p>Thanks for completing your AI Spend Audit.</p>

  <p>
    Estimated monthly savings:
    <strong>$${monthlySavings}</strong>
  </p>

  ${
    monthlySavings >= 500
      ? `<p><strong>High-savings opportunity detected.</strong> Credex may reach out to help you capture more of these savings through discounted AI infrastructure credits and optimization support.</p>`
      : `<p>Your audit has been saved. We will notify you if new optimization opportunities apply to your AI stack.</p>`
  }

  <p>— StackSaver AI</p>
`
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { error: "Failed to send email" },
      { status: 500 }
    );
  }
}