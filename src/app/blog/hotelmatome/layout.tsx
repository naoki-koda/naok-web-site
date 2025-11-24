import type { Metadata } from 'next';
import type { ReactNode } from 'react';

const title = '会員になるべきホテルブランドの予約・ポイントシステムランキング';
const description =
  'マリオットやヒルトンなど大手ホテルチェーンを、公式アプリの使い勝手とポイント還元率の2軸で比較。アップグレードや無料宿泊を狙う旅好きに向けたロイヤリティプログラムのまとめです。';

export const metadata: Metadata = {
  title,
  description,
  keywords: ['ホテル会員', 'ポイント', 'Marriott Bonvoy', 'Hilton Honors', 'ロイヤリティプログラム'],
  openGraph: {
    title,
    description,
    type: 'article',
    siteName: 'naok-web',
  },
  twitter: {
    card: 'summary_large_image',
    title,
    description,
  },
};

export default function HotelMatomeLayout({ children }: { children: ReactNode }) {
  return <>{children}</>;
}
