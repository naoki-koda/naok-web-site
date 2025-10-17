import Footer from '@/app/ui/Footer';
import Header from '@/app/ui/Header';
import type { Metadata } from "next";
import { ThemeProvider } from 'next-themes';
import { Geist, Geist_Mono } from "next/font/google";
import Script from "next/script";
import "./globals.css";


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.reewa-web.jp"),
  title: {
    default: "名古屋市の個人事業主向けのホームページ制作 | REEWA WEB",
    template: "%s | REEWA WEB",
  },
  description:
    "名古屋市を拠点とするREEWA WEBは、中小企業・個人事業主のためのSEOに強い高速なホームページ制作・運用を提供。美容/クリニック/ネイル/ペットサロンなど業種別サイト構築までトータルで支援します。",
  applicationName: "REEWA WEB",
  creator: "REEWA WEB",
  publisher: "REEWA WEB",
  category: "business",
  alternates: {
    canonical: "https://www.reewa-web.jp/",
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
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "48x48", type: "image/x-icon" },
      { url: "/favicon-192.png", sizes: "192x192", type: "image/png" },
    ],
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180" },
    ],
  },
  keywords: [
    "名古屋 ホームページ制作",
    "愛知 WEB制作",
    "ローカルSEO 名古屋",
    "中小企業 ホームページ",
    "個人事業主 集客サイト",
    "Next.js 制作会社",
    "SPA サイト制作",
    "高速表示 Web制作",
    "ホームページ制作 相場",
    "ホームページ制作 相場 1ページ",
    "ホームページ制作 1ページ 単価",
    "ホームページ制作 10万円",
    "ホームページ制作 30万",
    "ホームページ制作 補助金",
    "ホームページ制作 補助金 2024",
    "ホームページ制作 補助金 2025",
    "ホームページ制作 フリーランス依頼",
    "名古屋 ホームページ制作 フリーランス",
    "ホームページ制作 自分で",
    "ホームページ制作 aiツール",
    "ホームページ制作 料金表",
    "ホームページ制作 運用保守",
    "ホームページ制作 クリニック",
    "ホームページ制作 歯科",
    "ホームページ制作 ネイルサロン",
    "ホームページ制作 美容室",
    "ホームページ制作 ピアノ教室",
    "ホームページ制作 ペットショップ",
    "ホームページ制作会社 名古屋",
    "ホームページ制作会社 選び方",
    "ホームページ制作 フリーランス依頼",
    "ホームページ制作 依頼 流れ",
    "ホームページ制作 いくら",
    "ホームページ制作 英語対応",
  ],
  openGraph: {
    title: "名古屋のホームページ制作・運用 | REEWA WEB開発",
    description:
      "愛知・名古屋で成果につながるWebサイト制作。制作費の相場や1ページ単価、補助金・助成金の活用、AIツールや自作支援、業種別（クリニック・美容・ネイルサロン・ペットサロン等）の戦略、フリーランス協業まで多角的にサポートし、高速表示とSEOに強いNext.jsサイトでお問い合わせ獲得を支援します。",
    url: "https://www.reewa-web.jp/",
    siteName: "REEWA WEB",
    images: [
      {
        url: "/og-image.png", // public ディレクトリに置いたSNS用画像
        width: 1200,
        height: 630,
        alt: "REEWA WEBのWebサイト制作イメージ",
      },
    ],
    type: "website",
    locale: "ja_JP",
    countryName: "Japan",
  },
  twitter: {
    card: "summary_large_image",
    title: "名古屋のWebサイト制作・運用 | REEWA WEB開発",
    description: "愛知・名古屋で売上に貢献するWebサイト制作ならREEWA WEB開発。低コスト・高品質・迅速な開発・運用・保守を提供。",
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
        {/* Schema.org 構造化データ */}
        <Script
          id="structured-data"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify([
              {
                "@context": "https://schema.org",
                "@type": "ProfessionalService",
                "name": "REEWA WEB開発",
                "url": "https://www.reewa-web.jp/",
                "logo": "https://www.reewa-web.jp/logo.png",
                "image": "https://www.reewa-web.jp/og-image.png",
                "description": "名古屋市を拠点に、中小企業・個人事業主のためのSEOに強い高速なホームページ制作・運用を提供しています。",
                "areaServed": ["JP", "Aichi", "Nagoya"],
                "sameAs": [
                  "https://www.instagram.com/nao.k_web_studio/"
                ],
                "address": {
                  "@type": "PostalAddress",
                  "addressLocality": "名古屋市",
                  "addressRegion": "愛知県",
                  "addressCountry": "JP"
                }
              },
              {
                "@context": "https://schema.org",
                "@type": "WebSite",
                "name": "REEWA WEB開発",
                "url": "https://www.reewa-web.jp/",
                "publisher": {
                  "@type": "Organization",
                  "name": "REEWA WEB",
                  "logo": {
                    "@type": "ImageObject",
                    "url": "https://www.reewa-web.jp/logo.png"
                  }
                },
                "potentialAction": {
                  "@type": "SearchAction",
                  "target": "https://www.reewa-web.jp/?s={search_term_string}",
                  "query-input": "required name=search_term_string"
                }
              },
              {
                "@context": "https://schema.org",
                "@type": "ItemList",
                "name": "ホームページ制作サービス一覧",
                "itemListElement": [
                  {
                    "@type": "Service",
                    "name": "ホームページ制作・リニューアル",
                    "url": "https://www.reewa-web.jp/",
                    "areaServed": ["Nagoya", "Aichi", "Osaka", "Fukuoka"],
                    "description": "企業・クリニック・宿泊施設など業種別のホームページ制作。相場のご相談、1ページ制作、短納期対応までサポートします。"
                  },
                  {
                    "@type": "Service",
                    "name": "補助金・助成金を活用したホームページ制作",
                    "url": "https://www.reewa-web.jp/price",
                    "description": "小規模事業者持続化補助金やIT導入補助金を活用した制作費用の削減サポート。2024〜2025年の最新スケジュールに対応します。"
                  },
                  {
                    "@type": "Service",
                    "name": "ホームページ運用・SEO対策",
                    "url": "https://www.reewa-web.jp/service",
                    "description": "ローカルSEO、AIライティング支援、スマホ最適化、アクセス解析レポートなど運用・保守を一括で実施します。"
                  },
                  {
                    "@type": "Service",
                    "name": "DIY・内製支援プラン",
                    "url": "https://www.reewa-web.jp/design",
                    "description": "ワードプレスやノーコードツールで自分でホームページ制作を行いたい方向けに、テンプレート設計・講座・チェックリストを提供します。"
                  },
                  {
                    "@type": "Service",
                    "name": "フリーランス・委託案件サポート",
                    "url": "https://www.reewa-web.jp/works",
                    "description": "フリーランスデザイナー・開発者との協業やアウトソーシング先を探している企業向けに、要件定義からディレクションまで伴走します。"
                  },
                  {
                    "@type": "Service",
                    "name": "業種特化型ホームページ制作",
                    "url": "https://www.reewa-web.jp/works",
                    "description": "クリニック・歯科・美容室・ネイルサロン・ペットショップ・宿泊施設など業種別の集客導線とデザインテンプレートをご提案します。"
                  },
                  {
                    "@type": "Service",
                    "name": "AI・多言語サイト活用支援",
                    "url": "https://www.reewa-web.jp/service",
                    "description": "ChatGPT等AIツールの導入、英語/多言語ページの制作、予約システム・SNS連携など拡張機能を組み合わせた運用をサポートします。"
                  }
                ]
              }
            ]),
          }}
        />
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <ThemeProvider>
          <Header />
          <main>{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
