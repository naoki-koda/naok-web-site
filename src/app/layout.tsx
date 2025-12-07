import Footer from '@/app/ui/Footer';
import Header from '@/app/ui/Header';
import type { Metadata } from "next";
import { ThemeProvider } from 'next-themes';
import Script from "next/script";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.reewa-web.jp"),
  title: {
    // 変更点: 「会社」という単語を含め、ターゲット（個人・中小企業）を明記
    default: "名古屋のホームページ制作会社 | 個人事業主・中小企業のWeb集客ならREEWA WEB",
    template: "%s | 名古屋のホームページ制作 REEWA WEB",
  },
  description:
    // 変更点: 前半に重要キーワード（名古屋、制作会社、個人事業主、相場）を凝縮
    "名古屋のホームページ制作会社 REEWA WEB。個人事業主や中小企業向けに、集客に強い高速なWebサイトを適正相場・低コストで制作。SEO対策、補助金活用、AI導入支援まで対応。美容室・飲食店・クリニックなど業種別実績多数。",
  applicationName: "REEWA WEB",
  creator: "REEWA WEB",
  publisher: "REEWA WEB",
  category: "business",
  alternates: {
    // 変更点: canonicalは各ページで自動解決させるため、絶対パスの固定記述を削除
    // Next.jsはmetadataBaseと合わせて自動的に現在のパスをcanonicalとして生成します
    // 明示的に書くなら以下のように相対パスなどで記述
    canonical: "./", 
    languages: {
      ja: "https://www.reewa-web.jp/",
    },
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  // iconsなどはそのままでOK
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "48x48", type: "image/x-icon" },
      { url: "/favicon-192.png", sizes: "192x192", type: "image/png" },
    ],
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180" },
    ],
  },
  // keywordsタグはGoogle検索順位には影響しませんが、入れておいて損はありません
  keywords: [
    "名古屋 ホームページ制作",
    "名古屋 ホームページ制作会社", // 追加
    "愛知 WEB制作",
    "名古屋 個人事業主 ホームページ", // 追加
    "中小企業 ホームページ",
    // ... (以下既存のキーワード)
  ],
  openGraph: {
    // OGタイトルも少しキャッチーに
    title: "名古屋のホームページ制作会社 | 個人事業主・中小企業のWeb集客支援",
    description:
      "名古屋で成果につながるWebサイト制作ならREEWA WEB。個人事業主・中小企業に特化し、制作費の相場診断から補助金活用、高速なNext.jsサイト構築までトータルサポート。",
    url: "https://www.reewa-web.jp/",
    siteName: "REEWA WEB",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "REEWA WEBのWebサイト制作サービス",
      },
    ],
    type: "website",
    locale: "ja_JP",
    countryName: "Japan",
  },
  twitter: {
    card: "summary_large_image",
    title: "名古屋のホームページ制作会社 | REEWA WEB",
    description: "名古屋で個人事業主・中小企業の売上に貢献するWebサイト制作。低コスト・高品質・迅速な開発を提供。",
    site: "@naok_web_studio",
    creator: "@naok_web_studio",
    images: ["/og-image.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja" suppressHydrationWarning>
      <head>
        {/* 構造化データの強化案 */}
        <Script
          id="structured-data"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "ProfessionalService", // または "WebSite" や "LocalBusiness"
              "name": "REEWA WEB開発",
              "url": "https://www.reewa-web.jp/",
              "logo": "https://www.reewa-web.jp/logo.png",
              "image": "https://www.reewa-web.jp/og-image.png",
              "description": "名古屋を拠点に、中小企業・個人事業主のためのSEOに強い高速なホームページ制作・運用を提供しています。",
              // 追加: 価格帯の目安を入れると検索結果（リッチリザルト）に出る可能性があります
              "priceRange": "$$", 
              "areaServed": [
                {
                  "@type": "City",
                  "name": "Nagoya"
                },
                {
                  "@type": "AdministrativeArea",
                  "name": "Aichi"
                }
              ],
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "名古屋市",
                "addressRegion": "愛知県",
                "addressCountry": "JP"
              },
              "sameAs": [
                "https://www.instagram.com/nao.k_web_studio/",
                "https://twitter.com/naok_web_studio" // Twitterもあれば追加
              ]
            })
          }}
        />
      </head>
      <body className="font-sans antialiased">
        <ThemeProvider>
          <Header />
          {children}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}