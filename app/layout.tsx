import type { Metadata } from "next";
import { Fraunces, Epilogue } from "next/font/google";
import "./globals.css";
import Loader from "@/components/Loader";

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "900"],
});

const epilogue = Epilogue({
  variable: "--font-epilogue",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const BASE_URL = "https://sutrah-co.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: {
    default: "Sutrah.co — Professional Websites for Malaysian Businesses",
    template: "%s | Sutrah.co",
  },
  description: "We build professional, fully managed websites for Malaysian businesses. Fast delivery, monthly retainer, zero stress. Starting from RM500.",
  keywords: ["website Malaysia", "web design Malaysia", "kedai online", "website murah Malaysia", "web agency Malaysia", "laman web perniagaan"],
  authors: [{ name: "Sutrah.co" }],
  creator: "Sutrah.co",
  openGraph: {
    type: "website",
    locale: "en_MY",
    url: BASE_URL,
    siteName: "Sutrah.co",
    title: "Sutrah.co — Professional Websites for Malaysian Businesses",
    description: "We build professional, fully managed websites for Malaysian businesses. Fast delivery, monthly retainer, zero stress.",
    images: [{ url: "/opengraph-image", width: 1200, height: 630, alt: "Sutrah.co" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Sutrah.co — Professional Websites for Malaysian Businesses",
    description: "We build professional, fully managed websites for Malaysian businesses. Fast delivery, monthly retainer, zero stress.",
    images: ["/opengraph-image"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${fraunces.variable} ${epilogue.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col bg-bg text-text">
        <Loader />
        {children}
      </body>
    </html>
  );
}
