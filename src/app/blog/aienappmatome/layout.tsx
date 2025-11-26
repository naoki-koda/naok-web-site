import type { Metadata } from "next";
import { Inter, Noto_Sans_JP } from "next/font/google";
import Link from "next/link";

// フォントの最適化読み込み
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const notoSansJP = Noto_Sans_JP({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-noto-sans-jp",
  display: "swap",
});

// サイト全体のメタデータ設定（SEOベース）
export const metadata: Metadata = {
  metadataBase: new URL('https://your-domain.com'), // 本番ドメインに書き換えてください
  title: {
    template: '%s | BizEnglish AI Lab',
    default: 'BizEnglish AI Lab | ビジネス英語×AI学習の専門情報サイト',
  },
  description: '多忙なビジネスパーソンに向けて、最短で英語力を伸ばすためのAI活用法とアプリ比較情報を提供する専門メディアです。',
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
    <div className={`${inter.variable} ${notoSansJP.variable}`}>
      <div className="min-h-screen bg-slate-50 text-slate-800 font-sans flex flex-col antialiased">
        {/* ▼ ステマ規制対応（全ページ共通） ▼ */}
        <div className="bg-slate-100 py-1 text-center">
          <p className="text-[10px] text-slate-500">
            本サイトはプロモーションが含まれています。記事で紹介した商品を購入すると、売上の一部が当社に還元されることがあります。
          </p>
        </div>

        {/* ▼ ヘッダー ▼ */}
        <header className="sticky top-0 z-50 w-full border-b border-slate-200 bg-white/80 backdrop-blur-md">
          <div className="mx-auto flex h-16 max-w-5xl items-center justify-between px-4 sm:px-6 lg:px-8">
            <Link href="/" className="flex items-center gap-2 transition hover:opacity-80">
              {/* ロゴアイコン（SVGなどで置き換え推奨） */}
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-blue-600 text-white">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z" />
                </svg>
              </div>
              <span className={`text-lg font-bold tracking-tight text-slate-900 ${inter.className}`}>
                BizEnglish <span className="text-blue-600">AI</span> Lab
              </span>
            </Link>

            {/* PC用ナビゲーション */}
            <nav className="hidden md:flex gap-6 text-sm font-medium text-slate-600">
              <Link href="#comparison" className="hover:text-blue-600 transition-colors">比較ランキング</Link>
              <Link href="#review" className="hover:text-blue-600 transition-colors">アプリレビュー</Link>
              <Link href="#column" className="hover:text-blue-600 transition-colors">学習コラム</Link>
            </nav>

            {/* モバイル用CVボタン（ヘッダーにも配置して機会損失を防ぐ） */}
            <div className="md:hidden">
              <Link href="#comparison" className="bg-blue-600 text-white text-xs font-bold px-3 py-2 rounded-full">
                比較を見る
              </Link>
            </div>
          </div>
        </header>

        {/* ▼ メインコンテンツ ▼ */}
        <main className="flex-grow">
          {children}
        </main>

        {/* ▼ フッター ▼ */}
        <footer className="bg-slate-900 text-slate-400 py-12 border-t border-slate-800">
          <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 grid gap-8 md:grid-cols-4">
            <div className="col-span-1 md:col-span-2">
              <span className="text-lg font-bold text-slate-100 block mb-4">BizEnglish AI Lab</span>
              <p className="text-sm leading-relaxed mb-4">
                「恥をかかずに、最短で話せる」をテーマに、最新のAI技術を活用した英語学習法を研究・発信するWebメディアです。
              </p>
            </div>
            
            <div>
              <h3 className="text-slate-100 font-semibold mb-3 text-sm">Contents</h3>
              <ul className="space-y-2 text-sm">
                <li><Link href="#" className="hover:text-white transition">新着記事一覧</Link></li>
                <li><Link href="#" className="hover:text-white transition">おすすめアプリ診断</Link></li>
                <li><Link href="#" className="hover:text-white transition">インタビュー掲載</Link></li>
              </ul>
            </div>

            <div>
              <h3 className="text-slate-100 font-semibold mb-3 text-sm">Legal</h3>
              <ul className="space-y-2 text-sm">
                <li><Link href="#" className="hover:text-white transition">運営者情報</Link></li>
                <li><Link href="#" className="hover:text-white transition">プライバシーポリシー</Link></li>
                <li><Link href="#" className="hover:text-white transition">お問い合わせ</Link></li>
              </ul>
            </div>
          </div>
          <div className="mt-12 border-t border-slate-800 pt-8 text-center text-xs text-slate-500">
            &copy; {new Date().getFullYear()} BizEnglish AI Lab. All rights reserved.
          </div>
        </footer>

        {/* Google Analytics (IDを入れてください) */}
        {/* <GoogleAnalytics gaId="G-XXXXXXXXXX" /> */}
      </div>
    </div>
  );
}
