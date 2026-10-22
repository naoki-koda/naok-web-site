import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "REEWA WEB ブログ";
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
          background: "linear-gradient(135deg, #f8fafc 0%, #ffffff 50%, #fff7ed 100%)",
          color: "#0f172a",
          padding: "72px",
          fontFamily: "sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "20px",
            color: "#475569",
            fontSize: "30px",
            fontWeight: 800,
            letterSpacing: "0.12em",
            textTransform: "uppercase",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              width: "72px",
              height: "72px",
              borderRadius: "20px",
              background: "#0f172a",
              color: "#ffffff",
              fontSize: "30px",
              fontWeight: 900,
              letterSpacing: "0",
            }}
          >
            RW
          </div>
          REEWA WEB Blog
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
          <div
            style={{
              fontSize: "72px",
              fontWeight: 900,
              lineHeight: 1.12,
            }}
          >
            名古屋のお役立ち
            <br />
            まとめ記事
          </div>
          <div
            style={{
              display: "flex",
              color: "#475569",
              fontSize: "34px",
              fontWeight: 700,
            }}
          >
            比較・選び方・おすすめ情報をわかりやすく整理
          </div>
        </div>

        <div
          style={{
            display: "flex",
            gap: "16px",
            color: "#9a3412",
            fontSize: "28px",
            fontWeight: 800,
          }}
        >
          <div
            style={{
              display: "flex",
              borderRadius: "999px",
              background: "#ffedd5",
              padding: "12px 22px",
            }}
          >
            名古屋
          </div>
          <div
            style={{
              display: "flex",
              borderRadius: "999px",
              background: "#ffedd5",
              padding: "12px 22px",
            }}
          >
            比較記事
          </div>
          <div
            style={{
              display: "flex",
              borderRadius: "999px",
              background: "#ffedd5",
              padding: "12px 22px",
            }}
          >
            REEWA WEB
          </div>
        </div>
      </div>
    ),
    size,
  );
}
