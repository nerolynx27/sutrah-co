import { NextRequest, NextResponse } from "next/server";

const BILLPLZ_API_URL = process.env.BILLPLZ_SANDBOX === "true"
  ? "https://billplz-staging.herokuapp.com/api/v3"
  : "https://www.billplz.com/api/v3";

const BILLPLZ_API_KEY = process.env.BILLPLZ_API_KEY!;
const BILLPLZ_COLLECTION_ID = process.env.BILLPLZ_COLLECTION_ID!;
const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL || "https://sutrah-co.vercel.app";

export async function POST(req: NextRequest) {
  try {
    const { name, email, plan, amount } = await req.json();

    if (!name || !email || !plan || !amount) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
    }

    const credentials = Buffer.from(`${BILLPLZ_API_KEY}:`).toString("base64");

    const body = new URLSearchParams({
      collection_id: BILLPLZ_COLLECTION_ID,
      email,
      name,
      amount: String(amount * 100), // BillPlz uses cents
      callback_url: `${BASE_URL}/api/payment-callback`,
      redirect_url: `${BASE_URL}/payment/success?plan=${encodeURIComponent(plan)}`,
      description: `Sutrah.co — ${plan} Plan Deposit`,
    });

    const response = await fetch(`${BILLPLZ_API_URL}/bills`, {
      method: "POST",
      headers: {
        Authorization: `Basic ${credentials}`,
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: body.toString(),
    });

    const data = await response.json();

    if (!response.ok) {
      return NextResponse.json({ error: data }, { status: response.status });
    }

    return NextResponse.json({ url: data.url });
  } catch (err) {
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}
