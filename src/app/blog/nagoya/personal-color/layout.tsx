import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: '名古屋のパーソナルカラー診断おすすめ10選【2025年最新】',
  description:
    '名駅・栄・大須エリアを中心に、16タイプ診断・学割・ペアプラン・プレ花嫁向けプランなどを提供する人気サロンを徹底比較。料金や予約方法など失敗しないサロン選びのポイントを解説します。',
  keywords: ['名古屋', 'パーソナルカラー診断', '16タイプ', '学割', '骨格診断', 'プレ花嫁'],
  alternates: {
    canonical: 'https://yourdomain.com/blog/nagoya/personal-color',
  },
  openGraph: {
    title: '名古屋のパーソナルカラー診断おすすめサロン【最新版】',
    description:
      '名古屋駅・栄・大須で人気のサロンを厳選。料金・診断タイプ・口コミを比較して自分に合うサロンを見つけましょう。',
    url: 'https://yourdomain.com/blog/nagoya/personal-color',
    images: ['/og-image-nagoya-color.jpg'],
    type: 'article',
    locale: 'ja_JP',
  },
  twitter: {
    card: 'summary_large_image',
    title: '名古屋のパーソナルカラー診断まとめ',
    description: '16タイプ診断や学割対応サロンなどを厳選紹介。料金や口コミをチェック！',
    images: ['/og-image-nagoya-color.jpg'],
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="font-sans antialiased">
      {/* パンくずリスト（SEO上の階層構造を明確化） */}
      <nav className="bg-gray-100 py-3 px-4 text-xs md:text-sm text-gray-500">
        <ol className="container mx-auto max-w-4xl flex items-center space-x-2">
          <li><Link href="/" className="hover:underline">Home</Link></li>
          <li>&gt;</li>
          <li><Link href="/nagoya" className="hover:underline">名古屋エリア</Link></li>
          <li>&gt;</li>
          <li className="font-semibold text-gray-700">パーソナルカラー診断</li>
        </ol>
      </nav>

      {children}

      {/* 固定フッターCTA（スマホでの予約率向上） */}
      <div className="fixed bottom-0 z-50 flex w-full items-center justify-between border-t bg-white p-4 text-sm shadow-lg md:hidden">
        <p className="text-xs font-bold text-gray-600">自分に似合う色を見つけよう</p>
        <a href="#comparison-table" className="rounded-full bg-pink-500 px-6 py-2 font-bold text-white shadow-md">
          サロンを比較する
        </a>
      </div>
    </div>
  );
}
