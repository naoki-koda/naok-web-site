import localFont from "next/font/local";

export const kosugiMaru = {
  className: 'font-sans',
};

// 見出し用。Google Fonts 版は文字範囲ごとに約120ファイルへ分割され、フォント定義CSSだけで
// 約94KBあって表示を遅らせていたため、サイトで使う文字だけに絞った1ファイル（約67KB）を使う。
// 見出しに新しい漢字を足したら scripts/shippori-subset.mjs の手順でファイルを作り直す。
export const shipporiAntiqueB1 = localFont({
  src: "../fonts/ShipporiAntiqueB1-subset.woff2",
  weight: "400",
  display: "swap",
  // ファイルに無い文字は本文と同じ端末標準のゴシック体で表示する
  fallback: [
    "Hiragino Sans",
    "Hiragino Kaku Gothic ProN",
    "Noto Sans JP",
    "Meiryo",
    "sans-serif",
  ],
});

// 本文は端末の標準ゴシック体を使う（定義は globals.css の .font-jp-sans）。
// Web フォントの Zen Kaku Gothic New はフォント定義CSSだけで約64KBあり、表示前に
// 必ず読み込まれて LCP を約1秒遅らせていたため、表示速度を優先して置き換えた。
export const zenKaku = {
  className: "font-jp-sans",
};
