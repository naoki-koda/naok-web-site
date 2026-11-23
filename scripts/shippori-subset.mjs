// 見出しフォント（Shippori Antique B1）を、サイトで使う文字だけに絞ったファイルを作り直す。
// 使い方: 見出しに新しい漢字を使ったら src/app/fonts/shippori-chars.txt に追記して
//   node scripts/shippori-subset.mjs
// を実行する。英数字・ひらがな・カタカナ・よく使う記号は自動で含める。
// ファイルに無い文字は、本文と同じ端末標準のゴシック体で表示される。
import { readFileSync, writeFileSync } from "node:fs";

const range = (from, to) =>
  Array.from({ length: to - from + 1 }, (_, i) => String.fromCodePoint(from + i)).join("");

const used = readFileSync("src/app/fonts/shippori-chars.txt", "utf8");
const always =
  range(0x20, 0x7e) + // 英数字・記号
  range(0x3041, 0x3096) + // ひらがな
  range(0x30a1, 0x30fa) + // カタカナ
  "ー、。「」『』・！？（）〜～￥：；…―‐→←↑↓○×※【】";
const chars = [...new Set(used + always)].filter((c) => c !== "\n").sort().join("");

// Google Fonts に text を渡すと、その文字だけを含む woff2 を返してくれる
const cssUrl =
  "https://fonts.googleapis.com/css2?family=Shippori+Antique+B1&display=swap&text=" +
  encodeURIComponent(chars);
const css = await (
  await fetch(cssUrl, {
    // woff2 形式を返してもらうためにブラウザの User-Agent を付ける
    headers: {
      "User-Agent":
        "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/130.0 Safari/537.36",
    },
  })
).text();
const fontUrl = css.match(/url\((https:\/\/fonts\.gstatic\.com[^)]+)\)/)?.[1];
if (!fontUrl) throw new Error("フォントのURLを取得できませんでした:\n" + css);

const font = Buffer.from(await (await fetch(fontUrl)).arrayBuffer());
writeFileSync("src/app/fonts/ShipporiAntiqueB1-subset.woff2", font);
console.log(`${chars.length}文字 / ${(font.length / 1024).toFixed(1)}KB を書き出しました`);
