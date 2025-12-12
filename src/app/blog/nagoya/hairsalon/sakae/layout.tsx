import type { Metadata } from "next";
import Link from "next/link";

const SITE_URL = "https://naok-web.com";
const PAGE_PATH = "/blog/nagoya/hairsalon/sakae";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    template: "%s | 栄美容院おすすめ5選",
    default: "【栄】本当におすすめな美容院5選 | Nagoya Beauty Journal",
  },
  description:
    "名古屋・栄エリアで口コミ評価が高い実力派美容院5店を厳選。カミカリスマ受賞サロン、完全個室の髪質改善、デザインカラー、パーマ特化など目的別に比較しながら選べます。",
  keywords: [
    "栄 美容院",
    "名古屋 栄 ヘアサロン",
    "栄 髪質改善",
    "栄 デザインカラー",
    "名古屋 パーマ サロン",
  ],
  alternates: {
    canonical: PAGE_PATH,
  },
  robots: { index: true, follow: true },
  openGraph: {
    type: "article",
    title: "栄で本当におすすめな美容院5選",
    description:
      "カミカリスマ受賞サロンから完全個室の髪質改善まで、栄で予約が殺到する実力派サロンを網羅。アクセス・価格・予約のコツも紹介。",
    url: `${SITE_URL}${PAGE_PATH}`,
    siteName: "Nagoya Beauty Journal",
    locale: "ja_JP",
  },
  twitter: {
    card: "summary_large_image",
    title: "栄で本当におすすめな美容院5選",
    description:
      "トレンドボブ、完全個室の髪質改善、デザインカラー、パーマ特化など栄の人気サロンをまとめてチェック。",
  },
  other: {
    "article:section": "Beauty",
    "article:tag": "Sakae Hair Salon",
  },
};

export default function SakaeHairSalonLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="bg-rose-50 text-gray-900">
      <p className="bg-rose-100 py-1 text-center text-[11px] text-rose-700">
        本ページはプロモーションを含みます。リンク経由での予約・購入により運営が収益を得る場合があります。
      </p>

      <header className="border-b border-rose-100 bg-white/90 backdrop-blur">
        <div className="mx-auto flex max-w-5xl flex-col gap-4 px-4 py-4 sm:flex-row sm:items-center sm:justify-between md:px-6">
          <Link
            href="/"
            className="flex items-center gap-3 text-rose-600 transition hover:opacity-80"
          >
            <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-rose-600 text-white font-bold">
              NB
            </span>
            <span className="text-lg font-bold tracking-tight text-gray-900">
              Nagoya Beauty <span className="text-rose-500">Journal</span>
            </span>
          </Link>
          <nav className="flex flex-wrap items-center justify-center gap-4 text-sm font-semibold text-gray-500 sm:justify-end">
            <a href="#summary" className="hover:text-rose-600">
              タイプ別まとめ
            </a>
            <a href="#review" className="hover:text-rose-600">
              詳細レビュー
            </a>
            <a href="#tips" className="hover:text-rose-600">
              記事作成Tips
            </a>
            <a
              href="https://beauty.hotpepper.jp"
              target="_blank"
              rel="nofollow noopener"
              className="rounded-full border border-rose-200 px-4 py-1 text-rose-600 hover:border-rose-400 hover:text-rose-700"
            >
              ホットペッパーで探す
            </a>
          </nav>
        </div>
      </header>

      <div className="border-b border-rose-100 bg-white">
        <nav
          className="mx-auto max-w-5xl px-4 py-2 text-xs text-gray-500 md:px-6"
          aria-label="Breadcrumb"
        >
          <ol className="flex flex-wrap items-center gap-2">
            <li>
              <Link href="/" className="hover:text-rose-600">
                ホーム
              </Link>
            </li>
            <li>/</li>
            <li>
              <Link href="/blog/nagoya" className="hover:text-rose-600">
                名古屋特集
              </Link>
            </li>
            <li>/</li>
            <li>
              <Link
                href="/blog/nagoya/hairsalon"
                className="hover:text-rose-600"
              >
                名古屋ヘアサロン
              </Link>
            </li>
            <li>/</li>
            <li className="text-gray-700">栄 美容院おすすめ5選</li>
          </ol>
        </nav>
      </div>

      <main>{children}</main>

      <footer className="border-t border-rose-100 bg-white">
        <div className="mx-auto max-w-5xl px-4 py-10 md:px-6">
          <div className="grid gap-8 md:grid-cols-3">
            <div>
              <p className="text-lg font-bold text-gray-900">
                Nagoya Beauty Journal
              </p>
              <p className="mt-3 text-sm text-gray-600">
                名古屋ローカルの美容情報を発信する編集チーム。サロン選びで迷う読者にリアルな視点を届けます。
              </p>
            </div>
            <div>
              <p className="text-sm font-semibold text-gray-900">
                人気カテゴリー
              </p>
              <ul className="mt-3 space-y-2 text-sm text-gray-600">
                <li>
                  <Link
                    href="/blog/nagoya/hairsalon/nagoyaeki"
                    className="hover:text-rose-600"
                  >
                    名古屋駅ヘアサロン
                  </Link>
                </li>
                <li>
                  <Link
                    href="/blog/nagoya/hairsalon/nakaku"
                    className="hover:text-rose-600"
                  >
                    中区/矢場町サロン
                  </Link>
                </li>
                <li>
                  <Link
                    href="/blog/nagoya/hairsalon"
                    className="hover:text-rose-600"
                  >
                    名古屋ヘア特集一覧
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <p className="text-sm font-semibold text-gray-900">ポリシー</p>
              <ul className="mt-3 space-y-2 text-sm text-gray-600">
                <li>
                  <Link href="/privacy" className="hover:text-rose-600">
                    プライバシーポリシー
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="hover:text-rose-600">
                    お問い合わせ・掲載依頼
                  </Link>
                </li>
                <li>
                  <Link href="/guideline" className="hover:text-rose-600">
                    編集/広告掲載ガイドライン
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <p className="mt-10 text-center text-xs text-gray-500">
            &copy; {new Date().getFullYear()} Nagoya Beauty Journal
          </p>
        </div>
      </footer>
    </div>
  );
}
