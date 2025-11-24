import type { Metadata } from 'next';
import type { ReactNode } from 'react';

const title = '名古屋の左官職人・左官工務店まとめ｜おすすめ5社の特徴と得意領域';
const description =
  '名古屋エリアで左官工事を依頼したい方向けに、自然素材の仕上げに強い職人から大規模案件に対応する施工会社まで厳選5社を比較。対応エリア、強み、サービス内容を整理しました。';

export const metadata: Metadata = {
  title,
  description,
  keywords: ['名古屋', '左官', '左官工事', '漆喰', '珪藻土', '施工会社', '職人'],
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

export default function SakanMatomeLayout({ children }: { children: ReactNode }) {
  return <>{children}</>;
}
