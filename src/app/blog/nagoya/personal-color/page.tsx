// app/nagoya/personal-color/page.tsx
import ComparisonTable from '@/app/blog/nagoya/personal-color/ComparisonTables';
import { salons } from '@/app/data/salons';
import { generateItemListSchema } from '@/app/utils/schema'; // 調査データを格納したJSON
import SalonCard from '@/components/SalonCard';
import React from 'react';

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
        <div className="m-8 flex justify-center">
          <a href="https://px.a8.net/svt/ejp?a8mat=45IJ10+BBTY5U+34VM+25F7I9" rel="nofollow">
          <img width="468" height="60" alt="" src="https://www22.a8.net/svt/bgt?aid=251127252685&wid=001&eno=01&mid=s00000014629013004000&mc=1"></img></a>
          <img width="1" height="1" src="https://www11.a8.net/0.gif?a8mat=45IJ10+BBTY5U+34VM+25F7I9" alt=""></img>
        </div>
        {/* 4. サロン詳細リスト */}
        <div className="mt-12 space-y-8">
          {salons.map((salon, idx) => (
            <React.Fragment key={salon.rank}>
              <SalonCard key={salon.id} salon={salon} />
              {idx === 0 && (
              <div className="mt-10 flex justify-center">
                <a href="https://px.a8.net/svt/ejp?a8mat=45IJ10+BDM8Z6+5TSI+5Z6WX" rel="nofollow">
                <img width="300" height="250" alt="" src="https://www23.a8.net/svt/bgt?aid=251127252688&wid=001&eno=01&mid=s00000027189001004000&mc=1"></img></a>
                <img width="1" height="1" src="https://www15.a8.net/0.gif?a8mat=45IJ10+BDM8Z6+5TSI+5Z6WX" alt=""></img>
              </div>
              )}
              {idx === 1 && (
              <div className="mt-10 flex justify-center">
                <a href="https://px.a8.net/svt/ejp?a8mat=45IJ0V+1MCI2A+2DDC+CEJQUP" rel="nofollow">
                <img width="300" height="250" alt="" src="https://www25.a8.net/svt/bgt?aid=251127247098&wid=001&eno=01&mid=s00000011064075003000&mc=1"></img></a>
                <img width="1" height="1" src="https://www11.a8.net/0.gif?a8mat=45IJ0V+1MCI2A+2DDC+CEJQUP" alt=""></img>
              </div>
              )}
              {idx === 2 && (
              <div className="mt-10 flex justify-center">
                <a href="https://px.a8.net/svt/ejp?a8mat=45IGP6+28DJG2+5JEM+5Z6WX" rel="nofollow">
                <img width="300" height="250" alt="" src="https://www29.a8.net/svt/bgt?aid=251124234135&wid=001&eno=01&mid=s00000025843001004000&mc=1"></img></a>
                <img width="1" height="1" src="https://www16.a8.net/0.gif?a8mat=45IGP6+28DJG2+5JEM+5Z6WX" alt=""></img>
              </div>
              )}
              {idx === 3 && (
              <div className="mt-10 flex justify-center">
                <a href="https://px.a8.net/svt/ejp?a8mat=45IJ0V+1O4SVM+3Q7E+1TJLZL" rel="nofollow">
                <img width="300" height="250" alt="" src="https://www21.a8.net/svt/bgt?aid=251127247101&wid=001&eno=01&mid=s00000017393011009000&mc=1"></img></a>
                <img width="1" height="1" src="https://www19.a8.net/0.gif?a8mat=45IJ0V+1O4SVM+3Q7E+1TJLZL" alt=""></img>
              </div>
              )}
              {idx === 4 && (
              <div className="mt-10 flex justify-center">
                <a href="https://px.a8.net/svt/ejp?a8mat=45IJ0V+1OQ8HE+4YJS+60WN5" rel="nofollow">
                <img width="300" height="250" alt="" src="https://www20.a8.net/svt/bgt?aid=251127247102&wid=001&eno=01&mid=s00000023140001012000&mc=1"></img></a>
                <img width="1" height="1" src="https://www14.a8.net/0.gif?a8mat=45IJ0V+1OQ8HE+4YJS+60WN5" alt=""></img>
              </div>
              )}
            </React.Fragment>
          ))}
        </div>
      </section>
    </main>
  );
}
