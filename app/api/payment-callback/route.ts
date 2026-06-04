import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);
const OWNER_EMAIL = "sutrahdotco@gmail.com";

export async function POST(req: NextRequest) {
  const body = await req.formData();

  const billId = body.get("id") as string;
  const paid = body.get("paid") as string;
  const paidAt = body.get("paid_at") as string;
  const amount = body.get("amount") as string;
  const name = body.get("name") as string;
  const email = body.get("email") as string;
  const description = body.get("description") as string;

  // Only act on successful payments
  if (paid !== "true") {
    return NextResponse.json({ received: true });
  }

  const amountRM = amount ? `RM ${(parseInt(amount) / 100).toFixed(2)}` : "—";
  const paidAtFormatted = paidAt ? new Date(paidAt).toLocaleString("en-MY", { timeZone: "Asia/Kuala_Lumpur" }) : "—";

  await resend.emails.send({
    from: "Sutrah Payments <onboarding@resend.dev>",
    to: OWNER_EMAIL,
    subject: `New deposit received — ${description || "Sutrah Plan"}`,
    html: `
      <div style="font-family: sans-serif; max-width: 480px; margin: 0 auto; padding: 24px;">
        <h2 style="color: #BF932A; margin: 0 0 16px;">💰 New deposit received</h2>
        <table style="width: 100%; border-collapse: collapse; font-size: 14px;">
          <tr><td style="padding: 8px 0; color: #888;">Client name</td><td style="padding: 8px 0; font-weight: bold;">${name || "—"}</td></tr>
          <tr><td style="padding: 8px 0; color: #888;">Client email</td><td style="padding: 8px 0;">${email || "—"}</td></tr>
          <tr><td style="padding: 8px 0; color: #888;">Plan</td><td style="padding: 8px 0;">${description || "—"}</td></tr>
          <tr><td style="padding: 8px 0; color: #888;">Amount paid</td><td style="padding: 8px 0; font-weight: bold; color: #16a34a;">${amountRM}</td></tr>
          <tr><td style="padding: 8px 0; color: #888;">Paid at</td><td style="padding: 8px 0;">${paidAtFormatted}</td></tr>
          <tr><td style="padding: 8px 0; color: #888;">Bill ID</td><td style="padding: 8px 0; font-size: 12px; color: #aaa;">${billId}</td></tr>
        </table>
        <p style="margin: 24px 0 0; font-size: 13px; color: #888;">Reply to the client within 24 hours to kick off their project.</p>
      </div>
    `,
  });

  return NextResponse.json({ received: true });
}
