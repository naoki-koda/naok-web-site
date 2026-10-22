import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "名古屋市中区でおすすめの行政書士事務所6選";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "linear-gradient(135deg, #fff1f2 0%, #ffffff 52%, #fefce8 100%)",
          color: "#111827",
          padding: "72px",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: "18px" }}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              width: "72px",
              height: "72px",
              borderRadius: "999px",
              background: "#e11d48",
              color: "#ffffff",
              fontSize: "36px",
              fontWeight: 800,
            }}
          >
            1
          </div>
          <div
            style={{
              display: "flex",
              borderRadius: "999px",
              background: "#fef3c7",
              color: "#92400e",
              padding: "14px 24px",
              fontSize: "28px",
              fontWeight: 800,
            }}
          >
            一番おすすめ
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
          <div
            style={{
              color: "#e11d48",
              fontSize: "30px",
              fontWeight: 800,
              letterSpacing: "0.08em",
              textTransform: "uppercase",
            }}
          >
            Nagoya Gyosei Guide
          </div>
          <div
            style={{
              fontSize: "68px",
              fontWeight: 900,
              lineHeight: 1.18,
              letterSpacing: "-0.02em",
            }}
          >
            名古屋市中区でおすすめの
            <br />
            行政書士事務所6選
          </div>
          <div
            style={{
              display: "flex",
              color: "#4b5563",
              fontSize: "34px",
              fontWeight: 700,
            }}
          >
            第1位：すずはな行政書士事務所
          </div>
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            color: "#4b5563",
            fontSize: "28px",
            fontWeight: 700,
          }}
        >
          <div>女性スタッフ所属・優しく丁寧に相談できる</div>
          <div>REEWA WEB</div>
        </div>
      </div>
    ),
    size,
  );
}
