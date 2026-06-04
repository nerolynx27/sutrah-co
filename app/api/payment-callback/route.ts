import { NextRequest, NextResponse } from "next/server";

// BillPlz sends a POST callback when payment status changes
export async function POST(req: NextRequest) {
  const body = await req.formData();

  const billId = body.get("id");
  const paid = body.get("paid");
  const paidAt = body.get("paid_at");

  // TODO: store payment record, send confirmation email, notify via WhatsApp, etc.
  console.log("BillPlz callback:", { billId, paid, paidAt });

  return NextResponse.json({ received: true });
}
