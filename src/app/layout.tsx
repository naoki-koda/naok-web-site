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
  title: "名古屋のWebサイト制作・運用 | nao.k WEB開発",
  description: "愛知・名古屋で低コスト・高品質なWebサイト制作を提供。迅速な開発・運用・保守で売上アップに貢献するWeb制作ならnao.k WEB開発。",
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "48x48", type: "image/x-icon" },
      { url: "/favicon-192.png", sizes: "192x192", type: "image/png" },
    ],
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180" },
    ],
  },
  keywords: ["名古屋", "愛知",  "ホームページ", "ホームページ制作","web制作"],
  openGraph: {
    title: "名古屋のホームページ制作・運用 | nao.k WEB開発",
    description: "愛知・名古屋で成果につながるWebサイト制作。低コスト・高品質・迅速なWeb開発ならnao.k WEB開発にお任せください。",
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
  },
  twitter: {
    card: "summary_large_image",
    title: "名古屋のWebサイト制作・運用 | nao.k WEB開発",
    description: "愛知・名古屋で売上に貢献するWebサイト制作ならnao.k WEB開発。低コスト・高品質・迅速な開発・運用・保守を提供。",
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
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "Naok Web Studio",
              "url": "https://www.naok-webstudio.jp",
              "logo": "https://www.naok-webstudio.jp/logo.png",
            }),
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
