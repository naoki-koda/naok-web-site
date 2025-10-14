import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Script from "next/script";
import Header from '@/app/ui/Header';
import Footer from '@/app/ui/Footer';
import "./globals.css";
import { ThemeProvider } from 'next-themes';


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.naok-webstudio.jp"),
  title: {
    default: "名古屋市の個人事業主向けのホームページ制作 | nao.k WEB開発",
    template: "%s | nao.k WEB開発",
  },
  description: "名古屋市を拠点とするnao.k WEB開発は、中小企業・個人事業主のためのSEOに強い高速なホームページ制作・運用を提供。お問い合わせ獲得に直結するUI/UXとローカルSEO対策までフルサポートします。",
  applicationName: "nao.k WEB開発",
  creator: "nao.k WEB開発",
  publisher: "nao.k WEB開発",
  category: "business",
  alternates: {
    canonical: "https://www.naok-webstudio.jp/",
    languages: {
      ja: "https://www.naok-webstudio.jp/",
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
  ],
  openGraph: {
    title: "名古屋のホームページ制作・運用 | nao.k WEB開発",
    description: "愛知・名古屋で成果につながるWebサイト制作。高速表示とSEOに強いNext.jsサイトでお問い合わせ獲得を支援します。",
    url: "https://www.naok-webstudio.jp/",
    siteName: "nao.k WEB開発",
    images: [
      {
        url: "/og-image.png", // public ディレクトリに置いたSNS用画像
        width: 1200,
        height: 630,
        alt: "nao.k WEB開発のWebサイト制作イメージ",
      },
    ],
    type: "website",
    locale: "ja_JP",
    countryName: "Japan",
  },
  twitter: {
    card: "summary_large_image",
    title: "名古屋のWebサイト制作・運用 | nao.k WEB開発",
    description: "愛知・名古屋で売上に貢献するWebサイト制作ならnao.k WEB開発。低コスト・高品質・迅速な開発・運用・保守を提供。",
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
                "name": "nao.k WEB開発",
                "url": "https://www.naok-webstudio.jp/",
                "logo": "https://www.naok-webstudio.jp/logo.png",
                "image": "https://www.naok-webstudio.jp/og-image.png",
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
                "name": "nao.k WEB開発",
                "url": "https://www.naok-webstudio.jp/",
                "publisher": {
                  "@type": "Organization",
                  "name": "nao.k WEB開発",
                  "logo": {
                    "@type": "ImageObject",
                    "url": "https://www.naok-webstudio.jp/logo.png"
                  }
                },
                "potentialAction": {
                  "@type": "SearchAction",
                  "target": "https://www.naok-webstudio.jp/?s={search_term_string}",
                  "query-input": "required name=search_term_string"
                }
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
