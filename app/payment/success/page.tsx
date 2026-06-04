import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Payment Successful",
  robots: { index: false, follow: false },
};

export default function PaymentSuccess({
  searchParams,
}: {
  searchParams: { plan?: string };
}) {
  const plan = searchParams.plan || "your plan";

  return (
    <main className="min-h-screen bg-[#0D0D0D] flex items-center justify-center px-6">
      <div className="max-w-md w-full text-center flex flex-col items-center gap-6">
        <div className="w-16 h-16 rounded-full bg-[#BF932A]/15 flex items-center justify-center">
          <svg width="32" height="32" viewBox="0 0 24 24" fill="none">
            <path
              d="M5 13l4 4L19 7"
              stroke="#BF932A"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>

        <div className="flex flex-col gap-2">
          <h1 className="text-3xl font-extrabold text-[#FCFCF7]">Payment received!</h1>
          <p className="text-[#ECDCAB]/60 text-base">
            Your deposit for the <span className="text-[#BF932A] font-semibold">{plan}</span> plan
            has been confirmed. We'll reach out within 24 hours to get started.
          </p>
        </div>

        <div className="bg-[#1A1A1A] border border-[#FCFCF7]/5 rounded-2xl p-5 w-full text-left flex flex-col gap-2">
          <p className="text-[#ECDCAB]/50 text-sm">What happens next</p>
          <ul className="flex flex-col gap-2 mt-1">
            {[
              "We review your deposit",
              "You receive a welcome email within 24h",
              "Kickoff call to discuss your website",
              "We start building — delivered in 7 days",
            ].map((step, i) => (
              <li key={i} className="flex items-center gap-3 text-sm text-[#ECDCAB]/70">
                <span className="w-5 h-5 rounded-full bg-[#BF932A]/20 text-[#BF932A] text-xs font-bold flex items-center justify-center flex-shrink-0">
                  {i + 1}
                </span>
                {step}
              </li>
            ))}
          </ul>
        </div>

        <Link
          href="/"
          className="text-[#ECDCAB]/50 text-sm hover:text-[#FCFCF7] transition-colors"
        >
          ← Back to home
        </Link>
      </div>
    </main>
  );
}
