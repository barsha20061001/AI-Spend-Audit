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
        <h2>Your AI Spend Audit is ready</h2>
        <p>Your estimated monthly savings: <strong>$${monthlySavings}</strong></p>
        <p>You can view your report here:</p>
        <a href="${auditUrl}">${auditUrl}</a>
        <p>If your audit shows high savings, Credex may reach out with optimization suggestions.</p>
      `,
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