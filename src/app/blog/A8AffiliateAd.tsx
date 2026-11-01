import type { ReactNode } from "react";

export type A8Ad = {
  // A8管理画面「広告リンク作成」→ テキスト広告のHTMLから転記する
  // <a href="..."> の値（https://px.a8.net/svt/ejp?a8mat=...）
  href: string;
  // 同じHTMLにある <img src="..."> の値（https://wwwXX.a8.net/0.gif?a8mat=...）
  pixelSrc: string;
  // バナー広告の場合は <a> 内の <img> の src / width / height
  banner?: { src: string; width: number; height: number };
  name: string;
  catchCopy: string;
  points: string[];
  cta: string;
};

// href が空の案件は表示されない（fallback があればそちらを表示）
export const a8Ads = {
  docomoHikari: {
    href: "https://px.a8.net/svt/ejp?a8mat=4BGAV1+FQSOOI+50+54TT1D",
    pixelSrc: "https://www13.a8.net/0.gif?a8mat=4BGAV1+FQSOOI+50+54TT1D",
    banner: {
      src: "https://www24.a8.net/svt/bgt?aid=261101053952&wid=001&eno=01&mid=s00000000018031044000&mc=1",
      width: 250,
      height: 250,
    },
    name: "ドコモ光",
    catchCopy: "コミュファ光の提供エリア外なら、ドコモユーザーはこちらが有力候補。",
    points: [
      "ドコモのスマホとセット割が使える",
      "1Gbpsプランで普段使いには十分",
      "工事費・キャッシュバックの特典は申込ページで確認",
    ],
    cta: "ドコモ光の特典を確認する",
  },
  softbankHikari: {
    href: "https://px.a8.net/svt/ejp?a8mat=4BGAV1+FTRUPE+50+742JA9",
    pixelSrc: "https://www16.a8.net/0.gif?a8mat=4BGAV1+FTRUPE+50+742JA9",
    banner: {
      src: "https://www25.a8.net/svt/bgt?aid=261101053957&wid=001&eno=01&mid=s00000000018043010000&mc=1",
      width: 300,
      height: 300,
    },
    name: "ソフトバンク光",
    catchCopy: "ソフトバンク / Y!mobileユーザーは、1Gbpsプランで「おうち割」を。",
    points: [
      "1Gbpsでもおうち割の割引はしっかり適用",
      "10Gbpsにしなければ年間約2万円の節約",
      "スマホ代とまとめて通信費を最適化",
    ],
    cta: "ソフトバンク光の詳細を見る",
  },
  mortgageComparison: {
    href: "",
    pixelSrc: "",
    name: "住宅ローン一括比較",
    catchCopy: "金利だけでなく、手数料・団信まで含めた総額で比べる。",
    points: [
      "複数の金融機関の条件をまとめて比較",
      "ペアローン・自営業の審査相談にも",
      "今の借入条件の見直しにも使える",
    ],
    cta: "住宅ローンを比較する",
  },
  fpConsultation: {
    href: "",
    pixelSrc: "",
    name: "FP無料相談",
    catchCopy: "「借りられる額」ではなく「耐えられる家計」をプロと確認。",
    points: [
      "住宅ローン・保険・教育費をまとめて相談",
      "ライフプランをもとに返済余力を試算",
      "相談は無料、オンライン対応も",
    ],
    cta: "無料相談を予約する",
  },
  hotelBooking: {
    href: "https://px.a8.net/svt/ejp?a8mat=4BGAV1+FM17UA+AD2+3B4U5D",
    pixelSrc: "https://www19.a8.net/0.gif?a8mat=4BGAV1+FM17UA+AD2+3B4U5D",
    banner: {
      src: "https://www27.a8.net/svt/bgt?aid=261101053944&wid=001&eno=01&mid=s00000001343020010000&mc=1",
      width: 234,
      height: 60,
    },
    name: "エアトリ",
    catchCopy: "ブランド公式とあわせて、予約サイトの料金も比べておく。",
    points: [
      "複数ブランドのホテルを一度に比較",
      "航空券とホテルをまとめて手配できる",
      "公式アプリの料金と見比べて選べる",
    ],
    cta: "空室と料金を確認する",
  },
} satisfies Record<string, A8Ad>;

export function A8Pixel({ src }: { src: string }) {
  if (!src) return null;
  return (
    <img
      src={src}
      width={1}
      height={1}
      alt=""
      className="absolute h-px w-px opacity-0"
    />
  );
}

export default function A8AffiliateAd({
  ad,
  fallback,
}: {
  ad: A8Ad;
  fallback?: ReactNode;
}) {
  if (!ad.href) return fallback ?? null;

  return (
    <div className="my-10 flex justify-center">
      <aside className="relative w-full max-w-[560px] overflow-hidden rounded-2xl border border-slate-200 bg-white p-6 text-left shadow-sm">
        <p className="text-xs font-semibold uppercase tracking-[0.24em] text-amber-600">
          PR
        </p>
        {ad.banner && (
          <a
            href={ad.href}
            target="_blank"
            rel="nofollow sponsored noopener"
            className="mt-3 flex justify-center"
          >
            <img
              src={ad.banner.src}
              width={ad.banner.width}
              height={ad.banner.height}
              alt={ad.name}
              className="h-auto max-w-full"
            />
          </a>
        )}
        <p className="mt-2 text-lg font-bold text-slate-900">{ad.name}</p>
        <p className="mt-2 text-sm leading-6 text-slate-700">{ad.catchCopy}</p>
        <ul className="mt-4 space-y-2 text-sm text-slate-700">
          {ad.points.map((point) => (
            <li key={point} className="flex items-start gap-2">
              <span className="mt-0.5 text-emerald-500">✓</span>
              <span>{point}</span>
            </li>
          ))}
        </ul>
        <a
          href={ad.href}
          target="_blank"
          rel="nofollow sponsored noopener"
          className="mt-6 block rounded-full bg-emerald-600 px-4 py-3 text-center text-sm font-semibold text-white transition hover:bg-emerald-700"
        >
          {ad.cta}
        </a>
        <A8Pixel src={ad.pixelSrc} />
      </aside>
    </div>
  );
}
