import type { Metadata } from 'next';
import Link from 'next/link';

const SITE_URL = 'https://naok-web.com';
const PAGE_PATH = '/blog/nagoya/hairsalon/nagoyaeki';

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    template: '%s | 名古屋駅ヘアサロン厳選ガイド',
    default: '名古屋駅徒歩3分内の美容院おすすめ4選 | 名駅ヘアサロン特集',
  },
  description:
    '名古屋駅（名駅）から徒歩3分圏内で通える厳選ヘアサロン4店を紹介。髪質改善・韓国風レイヤー・マンツーマン施術など、目的別に選べるサロン情報と予約のコツをまとめました。',
  keywords: ['名古屋駅 美容院', '名駅 ヘアサロン', '髪質改善 名古屋駅', '韓国ヘア 名駅'],
  alternates: {
    canonical: PAGE_PATH,
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    type: 'article',
    title: '名古屋駅徒歩3分内の美容院おすすめ4選',
    description:
      '名古屋駅近くの人気ヘアサロンをカテゴリー別に紹介。アクセス、価格帯、予約Tipsまで網羅した完全ガイドです。',
    url: `${SITE_URL}${PAGE_PATH}`,
    siteName: 'Nagoya Beauty Journal',
    locale: 'ja_JP',
  },
  twitter: {
    card: 'summary_large_image',
    title: '名古屋駅徒歩3分内の美容院おすすめ4選',
    description:
      '名駅で人気の髪質改善・韓国ヘアサロンを厳選掲載。アクセス・価格目安・予約導線をチェック。',
  },
  other: {
    'article:section': 'Beauty',
    'article:tag': 'Nagoya Hair Salon',
  },
};

export default function NagoyaEkiLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="bg-rose-50 text-gray-900">
      {/* ステマ規制対応のPR表記 */}
      <p className="bg-rose-100 py-1 text-center text-[11px] text-rose-700">
        本ページはプロモーションが含まれています。掲載サービスで予約・購入されると運営に収益が入る場合があります。
      </p>

      <header className="border-b border-rose-100 bg-white/90 backdrop-blur">
        <div className="mx-auto flex max-w-5xl flex-col gap-4 px-4 py-4 sm:flex-row sm:items-center sm:justify-between md:px-6">
          <Link href="/" className="flex items-center gap-3 text-rose-600 transition hover:opacity-80">
            <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-rose-600 text-white font-bold">NB</span>
            <span className="text-lg font-bold tracking-tight text-gray-900">
              Nagoya Beauty <span className="text-rose-500">Journal</span>
            </span>
          </Link>

          <nav className="flex flex-wrap items-center justify-center gap-4 text-sm font-semibold text-gray-500 sm:justify-end">
            <a href="#summary" className="hover:text-rose-600">
              早見表
            </a>
            <a href="#review" className="hover:text-rose-600">
              サロン詳細
            </a>
            <a href="#tips" className="hover:text-rose-600">
              予約のコツ
            </a>
            <a
              href="https://beauty.hotpepper.jp"
              target="_blank"
              rel="nofollow noopener"
              className="rounded-full border border-rose-200 px-4 py-1 text-rose-600 hover:border-rose-400 hover:text-rose-700"
            >
              空席確認
            </a>
          </nav>
        </div>
      </header>

      {/* パンくずリストで内部リンクと文脈を明示 */}
      <div className="border-b border-rose-100 bg-white">
        <nav className="mx-auto max-w-5xl px-4 py-2 text-xs text-gray-500 md:px-6" aria-label="Breadcrumb">
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
            <li className="text-gray-700">名古屋駅 美容院おすすめ4選</li>
          </ol>
        </nav>
      </div>

      <main>{children}</main>

      <footer className="border-t border-rose-100 bg-white">
        <div className="mx-auto max-w-5xl px-4 py-10 md:px-6">
          <div className="grid gap-8 md:grid-cols-3">
            <div>
              <p className="text-lg font-bold text-gray-900">Nagoya Beauty Journal</p>
              <p className="mt-3 text-sm text-gray-600">
                名古屋女子の「似合う」を叶える美容メディア。ヘアサロン、メイク、トレンド情報をローカル目線で発信しています。
              </p>
            </div>
            <div>
              <p className="text-sm font-semibold text-gray-900">コンテンツ</p>
              <ul className="mt-3 space-y-2 text-sm text-gray-600">
                <li>
                  <Link href="/blog/nagoya/hairsalon" className="hover:text-rose-600">
                    ヘアサロンまとめ
                  </Link>
                </li>
                <li>
                  <Link href="/blog/nagoya/makeup" className="hover:text-rose-600">
                    メイク/コスメ
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="hover:text-rose-600">
                    取材・掲載について
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
                  <Link href="/sitemap" className="hover:text-rose-600">
                    サイトマップ
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
          <p className="mt-10 text-center text-xs text-gray-500">&copy; {new Date().getFullYear()} Nagoya Beauty Journal</p>
        </div>
      </footer>
    </div>
  );
}
