import { createClient } from "@supabase/supabase-js";
import { Resend } from "resend";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const body = await req.json();

  // Save to Supabase
  const supabase = createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
  );

  const { error } = await supabase.from("leads").insert({
    name: body.name,
    business_name: body.business_name,
    business_type: body.business_type,
    email: body.email,
    whatsapp: body.whatsapp,
    message: body.message,
  });

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }

  // Send email notification via Resend
  try {
    const resend = new Resend(process.env.RESEND_API_KEY);
    await resend.emails.send({
      from: "Sutrah.co <onboarding@resend.dev>",
      to: "mamunmuaz463@gmail.com",
      subject: `🔔 New Lead: ${body.business_name}`,
      html: `
        <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #BF932A;">New lead from Sutrah.co</h2>
          <table style="width: 100%; border-collapse: collapse;">
            <tr><td style="padding: 8px; color: #666;">Name</td><td style="padding: 8px;"><strong>${body.name}</strong></td></tr>
            <tr style="background:#f9f9f9"><td style="padding: 8px; color: #666;">Business</td><td style="padding: 8px;"><strong>${body.business_name}</strong></td></tr>
            <tr><td style="padding: 8px; color: #666;">Type</td><td style="padding: 8px;">${body.business_type}</td></tr>
            <tr style="background:#f9f9f9"><td style="padding: 8px; color: #666;">Email</td><td style="padding: 8px;"><a href="mailto:${body.email}">${body.email}</a></td></tr>
            <tr><td style="padding: 8px; color: #666;">WhatsApp</td><td style="padding: 8px;"><a href="https://wa.me/6${body.whatsapp.replace(/\D/g, '')}">${body.whatsapp}</a></td></tr>
            <tr style="background:#f9f9f9"><td style="padding: 8px; color: #666;">Message</td><td style="padding: 8px;">${body.message || "—"}</td></tr>
          </table>
          <p style="margin-top: 24px; color: #999; font-size: 12px;">Sent from Sutrah.co contact form</p>
        </div>
      `,
    });
  } catch (emailError) {
    // Don't fail the request if email fails — lead is already saved
    console.error("Email send failed:", emailError);
  }

  return NextResponse.json({ success: true });
}
