import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
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
  title: "愛知・名古屋のWebサイト制作 | NAOK. WEB開発",
  description: "愛知県・名古屋市を中心に、Webサイトの開発・運用・保守を一貫して提供。迅速で低コスト、売上に貢献するサイト制作を行います。",
  openGraph: {
    title: "愛知・名古屋のWebサイト制作 | NAOK. WEB開発",
    description: "低コスト・高品質・成果の出るWeb制作。愛知・名古屋でWeb開発ならNAOK.",
    url: "https://example.com", // 実際のURLに変更してください
    siteName: "NAOK. WEB開発",
    images: [
      {
        url: "/favicon.ico", // publicディレクトリに置いた画像のパス
        width: 1200,
        height: 630,
        alt: "NAOK. WEB開発のサイトイメージ",
      },
    ],
    type: "website",
    locale: "ja_JP",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja" suppressHydrationWarning>
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
