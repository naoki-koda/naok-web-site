import type { Metadata } from 'next';
import React from 'react';
import Link from 'next/link';

export const metadata: Metadata = {
  title: '名古屋・中区（栄/矢場町）の美容院おすすめ4選【2025年最新版】',
  description:
    '栄・矢場町エリアで人気の美容院をタイプ別に厳選。王道サロン、トレンド透明感カラー、デザインカラー、髪質改善など目的別に選び方と価格帯、予約のコツ、Googleマップ情報をまとめました。',
  keywords: ['名古屋 美容院', '栄 美容室', '中区 ヘアサロン', '髪質改善 名古屋', 'ハイトーン 名古屋'],
  alternates: {
    canonical: 'https://yourdomain.com/blog/nagoya/hairsalon/nakaku',
  },
  openGraph: {
    title: '名古屋・中区美容院まとめ｜栄/矢場町のおすすめサロン4選',
    description:
      '失敗したくない王道サロンから派手髪・髪質改善まで、栄・矢場町エリアの美容院をタイプ別に比較。価格帯・ターゲット・予約の注意点をチェック。',
    url: 'https://yourdomain.com/blog/nagoya/hairsalon/nakaku',
    locale: 'ja_JP',
    type: 'article',
    images: ['/og-image-nagoya-hair.jpg'],
  },
  twitter: {
    card: 'summary_large_image',
    title: '栄/矢場町の美容院おすすめ4選',
    description: 'トレンドカラー・デザインカラー・髪質改善が得意な名古屋・中区の人気サロンを徹底比較。',
    images: ['/og-image-nagoya-hair.jpg'],
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="font-sans antialiased">
      <nav className="bg-rose-50 py-3 px-4 text-xs text-rose-500 md:text-sm">
        <ol className="mx-auto flex max-w-5xl items-center space-x-2">
          <li>
            <Link href="/" className="hover:underline">
              Home
            </Link>
          </li>
          <li>&gt;</li>
          <li>
            <Link href="/blog" className="hover:underline">
              美容コラム
            </Link>
          </li>
          <li>&gt;</li>
          <li>
            <Link href="/blog/nagoya" className="hover:underline">
              名古屋エリア
            </Link>
          </li>
          <li>&gt;</li>
          <li className="font-semibold text-rose-700">中区 美容院まとめ</li>
        </ol>
      </nav>

      {children}

      <div className="fixed bottom-0 left-0 right-0 z-50 flex items-center justify-between border-t border-rose-100 bg-white px-4 py-3 text-xs text-gray-600 shadow-lg md:hidden">
        <span className="font-semibold text-rose-600">目的に合うサロンを比較</span>
        <a
          href="#afloat-nagoya"
          className="rounded-full bg-rose-600 px-4 py-2 text-xs font-bold uppercase tracking-wide text-white shadow-md transition hover:bg-rose-700"
        >
          サロンを見る
        </a>
      </div>
    </div>
  );
}
