import type { Metadata } from 'next';
import Link from 'next/link';
import Script from 'next/script';
import type { ReactNode } from 'react';

const baseUrl = 'https://your-domain.com';
const canonicalPath = '/blog/hikari';
const pageTitle = '【東海地方】光回線の結論。エディオン×コミュファ光が最強な理由';
const description =
  '東海エリアで通信費を最適化したい方向けに、エディオン×コミュファ光のメリットや10Gbpsプランの注意点を徹底解説。独自回線の実測値やポイント還元の活用法まで紹介します。';

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: {
    default: `${pageTitle} | Tokai Fiber Lab`,
    template: '%s | Tokai Fiber Lab',
  },
  description,
  keywords: [
    'コミュファ光',
    'エディオン',
    '東海 光回線',
    'ソフトバンク光 10Gbps',
    '光回線 比較',
  ],
  alternates: {
    canonical: canonicalPath,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
    },
  },
  openGraph: {
    title: pageTitle,
    description,
    type: 'article',
    url: `${baseUrl}${canonicalPath}`,
    locale: 'ja_JP',
    siteName: 'Tokai Fiber Lab',
  },
  twitter: {
    card: 'summary_large_image',
    title: pageTitle,
    description,
  },
  other: {
    'article:author': 'Tokai Fiber Lab 編集部',
    'article:section': '光回線',
  },
};

const breadcrumbLd = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    {
      '@type': 'ListItem',
      position: 1,
      name: 'ホーム',
      item: `${baseUrl}/`,
    },
    {
      '@type': 'ListItem',
      position: 2,
      name: '光回線まとめ',
      item: `${baseUrl}/blog`,
    },
    {
      '@type': 'ListItem',
      position: 3,
      name: 'エディオン×コミュファ光',
      item: `${baseUrl}${canonicalPath}`,
    },
  ],
};

const articleLd = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: pageTitle,
  description,
  mainEntityOfPage: {
    '@type': 'WebPage',
    '@id': `${baseUrl}${canonicalPath}`,
  },
  publisher: {
    '@type': 'Organization',
    name: 'Tokai Fiber Lab',
    logo: {
      '@type': 'ImageObject',
      url: `${baseUrl}/ogp.png`,
    },
  },
};

export default function HikariLayout({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 antialiased">
      {/* 透明性表示（薬機法・ステマ規制対策） */}
      <div className="bg-slate-900 text-[11px] text-slate-200 py-2 text-center">
        本記事にはプロモーションが含まれます。掲載サービスから報酬を受け取る場合がありますが、編集ポリシーに基づき公平に評価しています。
      </div>

      <header className="sticky top-0 z-40 border-b border-slate-200 bg-white/90 backdrop-blur">
        <div className="mx-auto flex h-16 max-w-5xl items-center justify-between px-4 sm:px-6 lg:px-8">
          <Link href="/" className="flex items-center gap-2 font-semibold tracking-tight text-slate-900">
            <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-blue-600 text-white text-lg">TF</span>
            <span className="text-sm sm:text-base">Tokai Fiber Lab</span>
          </Link>
          <nav className="hidden md:flex items-center gap-6 text-sm text-slate-500">
            <Link href="/blog" className="hover:text-blue-600 transition-colors">
              記事一覧
            </Link>
            <Link href="/blog/hikari#ranking" className="hover:text-blue-600 transition-colors">
              ランキング
            </Link>
            <Link href="/blog/hikari#comparison" className="hover:text-blue-600 transition-colors">
              速度比較
            </Link>
          </nav>
          <Link
            href="https://www.commufa.jp/"
            className="hidden md:inline-flex items-center rounded-full bg-blue-600 px-4 py-2 text-xs font-semibold text-white shadow hover:bg-blue-700 transition"
            rel="nofollow"
            target="_blank"
          >
            エディオンで相談
          </Link>
        </div>
      </header>

      <main>{children}</main>

      <footer className="bg-slate-900 text-slate-300 mt-16">
        <div className="mx-auto max-w-5xl px-4 py-10 sm:px-6 lg:px-8 grid gap-8 md:grid-cols-3">
          <div>
            <p className="text-lg font-semibold text-white mb-2">Tokai Fiber Lab</p>
            <p className="text-sm leading-relaxed">
              東海地方の光回線ユーザーに向けて、実測値・費用対効果・申込窓口の選び方を発信する独立系メディアです。
            </p>
          </div>
          <div>
            <p className="text-sm font-semibold text-white mb-2">Navigation</p>
            <ul className="space-y-1 text-sm">
              <li>
                <Link href="/about" className="hover:text-white transition">
                  運営者情報
                </Link>
              </li>
              <li>
                <Link href="/policy" className="hover:text-white transition">
                  プライバシーポリシー
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-white transition">
                  お問い合わせ
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <p className="text-sm font-semibold text-white mb-2">Contact</p>
            <p className="text-sm">info@your-domain.com</p>
            <p className="text-xs text-slate-500 mt-4">&copy; {new Date().getFullYear()} Tokai Fiber Lab.</p>
          </div>
        </div>
      </footer>

      <Script id="breadcrumb-jsonld" type="application/ld+json">
        {JSON.stringify(breadcrumbLd)}
      </Script>
      <Script id="article-jsonld" type="application/ld+json">
        {JSON.stringify(articleLd)}
      </Script>
    </div>
  );
}
