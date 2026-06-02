import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Sutrah.co — Professional Websites for Malaysian Businesses";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OGImage() {
  return new ImageResponse(
    (
      <div
        style={{
          background: "#0D0D0D",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          justifyContent: "center",
          padding: "80px",
          fontFamily: "sans-serif",
        }}
      >
        {/* Gold accent bar */}
        <div
          style={{
            width: 80,
            height: 6,
            background: "#BF932A",
            borderRadius: 3,
            marginBottom: 40,
          }}
        />

        {/* Logo / brand */}
        <div
          style={{
            fontSize: 56,
            fontWeight: 800,
            color: "#BF932A",
            letterSpacing: "-1px",
            marginBottom: 24,
          }}
        >
          Sutrah.co
        </div>

        {/* Tagline */}
        <div
          style={{
            fontSize: 28,
            fontWeight: 500,
            color: "#E5E5E5",
            maxWidth: 700,
            lineHeight: 1.4,
            marginBottom: 48,
          }}
        >
          Professional websites for Malaysian businesses. Fast delivery, monthly retainer, zero stress.
        </div>

        {/* Pills */}
        <div style={{ display: "flex", gap: 16 }}>
          {["Web Design", "Monthly Retainer", "Made in Malaysia"].map((tag) => (
            <div
              key={tag}
              style={{
                background: "#1A1A1A",
                border: "1px solid #BF932A",
                borderRadius: 999,
                padding: "10px 24px",
                fontSize: 18,
                color: "#BF932A",
                fontWeight: 600,
              }}
            >
              {tag}
            </div>
          ))}
        </div>

        {/* URL bottom right */}
        <div
          style={{
            position: "absolute",
            bottom: 60,
            right: 80,
            fontSize: 20,
            color: "#555",
            fontWeight: 500,
          }}
        >
          sutrah-co.vercel.app
        </div>
      </div>
    ),
    { ...size }
  );
}
