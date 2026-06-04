import { createClient } from "@supabase/supabase-js";
import { Resend } from "resend";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const body = await req.json();

  const supabase = createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
  );

  const { error } = await supabase.from("intake_submissions").insert({
    business_name: body.business_name,
    business_type: body.business_type,
    tagline: body.tagline,
    website_goal: body.website_goal,
    owner_name: body.owner_name,
    whatsapp: body.whatsapp,
    email: body.email,
    phone: body.phone,
    address: body.address,
    maps_url: body.maps_url,
    hours_weekday: body.hours_weekday,
    hours_saturday: body.hours_saturday,
    hours_sunday: body.hours_sunday,
    services: body.services,
    about: body.about,
    colors: body.colors,
    websites_like: body.websites_like,
    has_logo: body.has_logo,
    has_photos: body.has_photos,
    package: body.package,
    has_domain: body.has_domain,
    domain_name: body.domain_name,
    domain_registrar: body.domain_registrar,
  });

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }

  // Email notification
  try {
    const resend = new Resend(process.env.RESEND_API_KEY);
    const services = body.services?.filter((s: any) => s.name).map((s: any) =>
      `<tr><td style="padding:6px 10px;border:1px solid #ddd">${s.name}</td><td style="padding:6px 10px;border:1px solid #ddd">${s.price}</td><td style="padding:6px 10px;border:1px solid #ddd">${s.description}</td></tr>`
    ).join("") || "<tr><td colspan='3' style='padding:8px;color:#999'>None provided</td></tr>";

    await resend.emails.send({
      from: "Sutrah.co <hello@sutrah.co>",
      to: "sutrahdotco@gmail.com",
      subject: `📋 New Intake Form: ${body.business_name}`,
      html: `
        <div style="font-family:Arial,sans-serif;max-width:650px;margin:0 auto;color:#333">
          <div style="background:#0D0D0D;padding:20px 24px;border-bottom:3px solid #BF932A">
            <h1 style="color:#BF932A;margin:0;font-size:22px">New Client Intake — Sutrah.co</h1>
            <p style="color:#ECDCAB;margin:4px 0 0;font-size:13px">${body.business_name} · ${body.business_type}</p>
          </div>
          <div style="padding:24px">

            <h3 style="color:#BF932A;border-bottom:1px solid #eee;padding-bottom:6px">Business Info</h3>
            <table style="width:100%;border-collapse:collapse;font-size:13px;margin-bottom:20px">
              <tr><td style="padding:6px 10px;background:#f9f9f9;width:160px"><strong>Business Name</strong></td><td style="padding:6px 10px;border:1px solid #eee">${body.business_name}</td></tr>
              <tr><td style="padding:6px 10px;background:#f9f9f9"><strong>Type</strong></td><td style="padding:6px 10px;border:1px solid #eee">${body.business_type}</td></tr>
              <tr><td style="padding:6px 10px;background:#f9f9f9"><strong>Tagline</strong></td><td style="padding:6px 10px;border:1px solid #eee">${body.tagline || "—"}</td></tr>
              <tr><td style="padding:6px 10px;background:#f9f9f9"><strong>Goal</strong></td><td style="padding:6px 10px;border:1px solid #eee">${body.website_goal || "—"}</td></tr>
            </table>

            <h3 style="color:#BF932A;border-bottom:1px solid #eee;padding-bottom:6px">Contact</h3>
            <table style="width:100%;border-collapse:collapse;font-size:13px;margin-bottom:20px">
              <tr><td style="padding:6px 10px;background:#f9f9f9;width:160px"><strong>Owner</strong></td><td style="padding:6px 10px;border:1px solid #eee">${body.owner_name}</td></tr>
              <tr><td style="padding:6px 10px;background:#f9f9f9"><strong>WhatsApp</strong></td><td style="padding:6px 10px;border:1px solid #eee"><a href="https://wa.me/6${body.whatsapp?.replace(/\D/g,'')}">${body.whatsapp}</a></td></tr>
              <tr><td style="padding:6px 10px;background:#f9f9f9"><strong>Email</strong></td><td style="padding:6px 10px;border:1px solid #eee">${body.email}</td></tr>
              <tr><td style="padding:6px 10px;background:#f9f9f9"><strong>Phone</strong></td><td style="padding:6px 10px;border:1px solid #eee">${body.phone || "—"}</td></tr>
              <tr><td style="padding:6px 10px;background:#f9f9f9"><strong>Address</strong></td><td style="padding:6px 10px;border:1px solid #eee">${body.address || "—"}</td></tr>
            </table>

            <h3 style="color:#BF932A;border-bottom:1px solid #eee;padding-bottom:6px">Operating Hours</h3>
            <table style="width:100%;border-collapse:collapse;font-size:13px;margin-bottom:20px">
              <tr><td style="padding:6px 10px;background:#f9f9f9;width:160px"><strong>Weekdays</strong></td><td style="padding:6px 10px;border:1px solid #eee">${body.hours_weekday || "—"}</td></tr>
              <tr><td style="padding:6px 10px;background:#f9f9f9"><strong>Saturday</strong></td><td style="padding:6px 10px;border:1px solid #eee">${body.hours_saturday || "—"}</td></tr>
              <tr><td style="padding:6px 10px;background:#f9f9f9"><strong>Sunday</strong></td><td style="padding:6px 10px;border:1px solid #eee">${body.hours_sunday || "—"}</td></tr>
            </table>

            <h3 style="color:#BF932A;border-bottom:1px solid #eee;padding-bottom:6px">Services</h3>
            <table style="width:100%;border-collapse:collapse;font-size:13px;margin-bottom:20px">
              <tr style="background:#f9f9f9"><th style="padding:6px 10px;border:1px solid #ddd;text-align:left">Name</th><th style="padding:6px 10px;border:1px solid #ddd;text-align:left">Price</th><th style="padding:6px 10px;border:1px solid #ddd;text-align:left">Description</th></tr>
              ${services}
            </table>

            <h3 style="color:#BF932A;border-bottom:1px solid #eee;padding-bottom:6px">Package & Domain</h3>
            <table style="width:100%;border-collapse:collapse;font-size:13px;margin-bottom:20px">
              <tr><td style="padding:6px 10px;background:#f9f9f9;width:160px"><strong>Package</strong></td><td style="padding:6px 10px;border:1px solid #eee">${body.package || "—"}</td></tr>
              <tr><td style="padding:6px 10px;background:#f9f9f9"><strong>Has Domain?</strong></td><td style="padding:6px 10px;border:1px solid #eee">${body.has_domain || "—"}</td></tr>
              <tr><td style="padding:6px 10px;background:#f9f9f9"><strong>Domain Name</strong></td><td style="padding:6px 10px;border:1px solid #eee">${body.domain_name || "—"}</td></tr>
            </table>

            <p style="color:#999;font-size:11px;border-top:1px solid #eee;padding-top:12px">Submitted via Sutrah.co/intake</p>
          </div>
        </div>
      `,
    });
  } catch (e) {
    console.error("Email failed:", e);
  }

  return NextResponse.json({ success: true });
}
