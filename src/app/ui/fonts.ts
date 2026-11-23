import { Shippori_Antique_B1 } from "next/font/google";

export const kosugiMaru = {
  className: 'font-sans',
};

export const shipporiAntiqueB1 = Shippori_Antique_B1({
  subsets: ["latin"],
  weight: "400",
  display: "swap",
  // 日本語フォントは文字範囲ごとに数百ファイルへ分割されるため、先読みすると
  // CSS より先に約2MBのフォントを取りに行って初回表示が遅れる。必要な分だけ後から読む
  preload: false,
});

// 本文は端末の標準ゴシック体を使う（定義は globals.css の .font-jp-sans）。
// Web フォントの Zen Kaku Gothic New はフォント定義CSSだけで約64KBあり、表示前に
// 必ず読み込まれて LCP を約1秒遅らせていたため、表示速度を優先して置き換えた。
export const zenKaku = {
  className: "font-jp-sans",
};
