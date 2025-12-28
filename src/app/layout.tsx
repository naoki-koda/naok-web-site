import Footer from "@/app/ui/Footer";
import Header from "@/app/ui/Header";
import { Analytics } from "@vercel/analytics/next";
import type { Metadata } from "next";
import { ThemeProvider } from "next-themes";
import Script from "next/script";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.reewa-web.jp"),
  title: {
    // 「名古屋」「ホームページ制作」を左側に寄せ、SPAや不動産などの強みを強調
    default:
      "名古屋のホームページ制作会社 REEWA WEB | 高速SPA・不動産・集客特化",
    template: "%s | 名古屋のホームページ制作 REEWA WEB",
  },
  description:
    "名古屋を拠点とするホームページ制作会社 REEWA WEB。Next.js/SPAによる爆速・堅牢なサイト制作で、不動産業界や中小企業のWeb集客を支援。「脱WordPress」で保守性・表示速度を最大化。名古屋市近郊のSEO対策・運用保守もお任せください。",
  applicationName: "REEWA WEB",
  authors: [{ name: "REEWA WEB" }],
  creator: "REEWA WEB",
  publisher: "REEWA WEB",
  category: "technology",
  alternates: {
    canonical: "/",
    languages: {
      "ja-JP": "https://www.reewa-web.jp/",
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
  keywords: [
    "REEWA WEB",
    "名古屋 ホームページ制作",
    "名古屋 ホームページ制作会社",
    "名古屋 ホームページ制作 SPA",
    "名古屋 ホームページ制作 不動産",
    "Next.js 制作代行",
    "脱WordPress",
    "高速Webサイト制作",
    "愛知県 WEB制作",
  ],
  openGraph: {
    title: "名古屋のホームページ制作会社 REEWA WEB | 次世代の高速Webサイト制作",
    description:
      "名古屋で「本当に成果が出る」SPAサイト・不動産サイトを作るならREEWA WEB。最新技術Next.jsで、競合に差をつける表示速度とSEOを実現します。",
    url: "https://www.reewa-web.jp/",
    siteName: "REEWA WEB",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "名古屋のホームページ制作会社 REEWA WEB",
      },
    ],
    type: "website",
    locale: "ja_JP",
  },
  twitter: {
    card: "summary_large_image",
    title: "名古屋のホームページ制作会社 REEWA WEB",
    description:
      "高速SPA・不動産向けサイト制作に強い、名古屋のWeb制作スタジオ。最新技術でビジネスを加速させます。",
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
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-1YSXLNJL1Q"
          strategy="afterInteractive"
        />
        <Script
          id="google-analytics"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-1YSXLNJL1Q');
            `,
          }}
        />
        {/* 構造化データのさらなる強化 */}
        <Script
          id="structured-data"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "ProfessionalService",
              name: "REEWA WEB (リーワウェブ)",
              url: "https://www.reewa-web.jp/",
              logo: "https://www.reewa-web.jp/logo.png",
              image: "https://www.reewa-web.jp/og-image.png",
              description:
                "名古屋市を拠点に、SPA(Next.js)を活用した高速なホームページ制作を提供。不動産業界向けサイトや集客に特化したWeb制作に強みがあります。",
              address: {
                "@type": "PostalAddress",
                addressLocality: "名古屋市",
                addressRegion: "愛知県",
                addressCountry: "JP",
              },
              geo: {
                "@type": "GeoCoordinates",
                latitude: 35.1815, // 名古屋市の代表的な座標（適宜修正してください）
                longitude: 136.9066,
              },
              knowsAbout: [
                "Single Page Application",
                "Next.js",
                "Search Engine Optimization",
                "Real Estate Web Design",
                "WordPress Migration",
              ],
              openingHours: "Mo-Fr 09:00-18:00",
              priceRange: "¥10,000 - ¥500,000",
              contactPoint: {
                "@type": "ContactPoint",
                contactType: "customer support",
                url: "https://www.reewa-web.jp/contact",
              },
            }),
          }}
        />
      </head>
      <body className="font-sans antialiased">
        <ThemeProvider>
          <Header />
          {children}
          <Analytics />
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
