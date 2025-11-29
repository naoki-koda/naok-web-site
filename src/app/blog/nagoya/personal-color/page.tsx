// app/nagoya/personal-color/page.tsx
import ComparisonTable from '@/app/blog/nagoya/personal-color/ComparisonTables';
import { salons } from '@/app/data/salons';
import { generateItemListSchema } from '@/app/utils/schema'; // 調査データを格納したJSON
import SalonCard from '@/components/SalonCard';
import type { Metadata } from 'next';

// 1. メタデータの設定（Next.js 14 Metadata API）
export const metadata: Metadata = {
  title: '名古屋のパーソナルカラー診断おすすめ10選 | 安い・16タイプ・学割・ペア対応【2025最新】',
  description: '名古屋エリア（名駅・栄・大須）で評判のパーソナルカラー診断サロンを徹底比較。16タイプ診断が安いサロン、学生割引、骨格診断・顔タイプ診断とのセットプラン、プレ花嫁向けコースなどを厳選紹介。',
  keywords: ['名古屋', 'パーソナルカラー診断', '安い', '16タイプ', '口コミ', 'ペア診断'],
  openGraph: {
    title: '名古屋のパーソナルカラー診断おすすめサロン決定版',
    description: '失敗しないサロン選び。16タイプから格安5000円診断まで。',
    images: ['/og-image-nagoya-color.jpg'],
  },
  alternates: {
    canonical: 'https://yourdomain.com/nagoya/personal-color',
  },
};

export default function NagoyaPersonalColorPage() {
  // 2. 構造化データの生成
  // ItemListスキーマを使用して、リスト記事であることをGoogleに伝える
  const jsonLd = generateItemListSchema(salons);

  return (
    <main className="min-h-screen bg-gray-50">
      {/* 構造化データの注入 */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <header className="bg-white py-12 px-4 shadow-sm">
        <div className="container mx-auto max-w-4xl">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            名古屋のパーソナルカラー診断<br className="md:hidden" />おすすめ人気サロン厳選リスト
          </h1>
          <p className="text-gray-600 leading-relaxed">
            「自分に似合う色が知りたい」「名古屋で16タイプ診断を受けたい」そんな方のために、
            名駅・栄・大須エリアの実力派サロンを徹底調査しました。料金の安さ、診断の正確さ、
            口コミ評価を基準に、学生からプレ花嫁まで目的に合わせたベストなサロンをご紹介します。
          </p>
        </div>
      </header>

      <section className="container mx-auto max-w-4xl px-4 py-8">
        {/* 3. クイック比較表（ユーザーの即時離脱を防ぐ） */}
        <h2 className="text-2xl font-bold mb-6 text-gray-800">迷ったらココ！目的別おすすめサロン</h2>
        <ComparisonTable salons={salons} />
        
        {/* 4. サロン詳細リスト */}
        <div className="mt-12 space-y-8">
          {salons.map((salon) => (
            <SalonCard key={salon.id} salon={salon} />
          ))}
        </div>
      </section>
    </main>
  );
}
