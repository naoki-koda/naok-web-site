import type { Metadata } from 'next';
import type { ReactNode } from 'react';

const title = '名古屋のおすすめ造作家具店まとめ｜袖野建具店ほか厳選5社';
const description =
  '建具職人が手がける老舗からデザイナー常駐のインテリアショップまで、名古屋で造作家具・特注収納を任せられる5社を比較。施工エリアや打ち合わせフローを整理しました。';

export const metadata: Metadata = {
  title,
  description,
  keywords: ['名古屋', '造作家具', '建具', 'オーダー家具', '収納', '袖野建具店'],
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

export default function TateguMatomeLayout({ children }: { children: ReactNode }) {
  return <>{children}</>;
}
