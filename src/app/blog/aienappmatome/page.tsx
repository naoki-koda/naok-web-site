import { apps } from '@/app/data/app';
import ComparisonTable from '@/components/ComparisonTable';
import JsonLd from '@/components/JsonLd';
import { CheckCircleIcon, XCircleIcon } from '@heroicons/react/24/solid';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: '【2025年最新】AI英会話アプリおすすめ7選！ビジネス英語・スピーキング特化',
  description: '恥をかかずに英語が話せるようになる。Speak、Spiful、ELSAなど人気のAI英会話アプリを徹底比較。効果、料金、口コミを解説。',
  keywords: ['AI英会話', 'Speak', 'Spiful', 'ELSA', '英語学習アプリ'],
};

export default function Page() {
  const currentYear = new Date().getFullYear();

  return (
    <main className="max-w-3xl mx-auto px-4 py-8 sm:px-6 lg:px-8 bg-white text-slate-800 font-sans">
      <JsonLd apps={apps} />
      
      {/* ヒーローセクション */}
      <header className="mb-12 text-center">
        <span className="inline-block px-3 py-1 mb-4 text-xs font-semibold tracking-wider text-blue-600 uppercase bg-blue-100 rounded-full">
          Business English Strategy
        </span>
        <h1 className="text-2xl font-extrabold leading-tight text-gray-900 md:text-4xl lg:text-5xl">
          【{currentYear}年版】<br className="hidden sm:block" />
          AI英会話アプリ<br/>おすすめ7選！<br />
          <span className="text-blue-600">ビジネス英語を「恥をかかずに」<br/>マスターする</span>
        </h1>
        <p className="mt-6 text-lg text-gray-600">
          「オンライン英会話は緊張する」「予約が面倒で続かない」...そんな悩みを解決するのが、最新のAI英会話です。
          24時間いつでも、誰にも気を使わずにアウトプット量を最大化できる最強のツールを徹底比較します。
        </p>
        <div className="mt-4 text-sm text-gray-500">
          最終更新: 2025年11月 • 監修: AI教育アナリスト
        </div>
      </header>
      <div className="m-10 flex justify-center">
        <a href="https://px.a8.net/svt/ejp?a8mat=45IGP6+2A5U9E+4H2M+6BMG1" rel="nofollow">
        <img width="300" height="250" alt="" src="https://www25.a8.net/svt/bgt?aid=251124234138&wid=001&eno=01&mid=s00000020875001062000&mc=1"></img></a>
        <img width="1" height="1" src="https://www13.a8.net/0.gif?a8mat=45IGP6+2A5U9E+4H2M+6BMG1" alt=""></img>
      </div>

      {/* 導入：なぜAIなのか？ */}
      <section className="prose prose-lg prose-blue mx-auto mb-12">
        <h2>なぜ今、人間ではなく「AI」なのか？</h2>
        <p>
          従来の英会話スクールには致命的な欠点がありました。それは<strong>「圧倒的なアウトプット不足」</strong>と<strong>「心理的なバリア（恥ずかしさ）」</strong>です。
        </p>
        <p>
          25分のオンラインレッスンで、あなたが実際に英語を話している時間は何分でしょうか？講師の話を聞いている時間が大半ではないですか？
          AI英会話アプリ（特に『Speak』など）は、この問題を根本から解決します。
        </p>
        <ul>
          <li><strong>発話量は人間の10倍以上</strong>：待ったなしで質問が飛んでくるため、休む暇がありません。</li>
          <li><strong>恥ずかしさゼロ</strong>：相手はAIです。何度噛んでも、文法が滅茶苦茶でも、嫌な顔一つされません。</li>
          <li><strong>コストは1/3以下</strong>：月額数千円で使い放題です。</li>
        </ul>
      </section>

      <div className="m-10 flex justify-center">
        <a href="https://px.a8.net/svt/ejp?a8mat=45IJ0V+1OQ8HE+4YJS+60WN5" rel="nofollow">
        <img width="300" height="250" alt="" src="https://www22.a8.net/svt/bgt?aid=251127247102&wid=001&eno=01&mid=s00000023140001012000&mc=1"></img></a>
        <img width="1" height="1" src="https://www13.a8.net/0.gif?a8mat=45IJ0V+1OQ8HE+4YJS+60WN5" alt=""></img>
      </div>

      {/* 比較テーブル */}
      <section id="comparison" className="mb-16">
        <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
          <span className="bg-blue-600 text-white w-8 h-8 rounded-full flex items-center justify-center mr-3 text-lg">1</span>
          主要AI英会話アプリ 比較一覧表
        </h2>
        <ComparisonTable />
      </section>

      {/* アプリ詳細レビュー */}
      <section className="space-y-16">
        <h2 className="text-2xl font-bold text-gray-900 mb-8 border-b pb-4">
          おすすめAI英会話アプリ 詳細レビュー
        </h2>

        {apps.map((app, index) => (
          <article key={app.id} id={app.id} className="scroll-mt-20">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-2xl font-bold text-gray-900 flex items-center">
                <span className="text-gray-300 mr-3">#{index + 1}</span>
                {app.name}
              </h3>
              <div className="flex items-center bg-yellow-100 px-3 py-1 rounded-lg">
                <span className="text-yellow-700 font-bold mr-1">{app.rating}</span>
                <span className="text-xs text-yellow-800">Expert Score</span>
              </div>
            </div>

            <div className="bg-gray-50 rounded-2xl p-6 border border-gray-100 shadow-sm">
              <p className="text-lg font-medium text-gray-700 mb-4">
                {app.tagline}
              </p>
              <p className="text-gray-600 mb-6 leading-relaxed">
                {app.description}
              </p>

              <div className="grid md:grid-cols-2 gap-6 mb-8">
                <div className="bg-white p-5 rounded-xl shadow-sm border border-green-100">
                  <h4 className="font-bold text-green-700 mb-3 flex items-center">
                    <CheckCircleIcon className="w-5 h-5 mr-2" />
                    メリット (Pros)
                  </h4>
                  <ul className="space-y-2">
                    {app.pros.map((pro, i) => (
                      <li key={i} className="text-sm text-gray-700 flex items-start">
                        <span className="mr-2 text-green-500">•</span>{pro}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="bg-white p-5 rounded-xl shadow-sm border border-red-100">
                  <h4 className="font-bold text-red-700 mb-3 flex items-center">
                    <XCircleIcon className="w-5 h-5 mr-2" />
                    デメリット (Cons)
                  </h4>
                  <ul className="space-y-2">
                    {app.cons.map((con, i) => (
                      <li key={i} className="text-sm text-gray-700 flex items-start">
                        <span className="mr-2 text-red-500">•</span>{con}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row items-center justify-between bg-white p-4 rounded-xl border border-gray-200">
                <div className="mb-4 sm:mb-0 text-center sm:text-left">
                  <span className="block text-xs text-gray-500 uppercase">Monthly Price</span>
                  <span className="text-xl font-bold text-gray-900">¥{app.priceMonthly.toLocaleString()}</span>
                  <span className="text-sm text-gray-500 ml-1">/月〜</span>
                </div>
                <a 
                  href={app.affiliateLink}
                  target="_blank"
                  rel="nofollow noreferrer"
                  className="w-full sm:w-auto text-center bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-lg shadow-lg transform transition hover:-translate-y-0.5"
                >
                  {app.trialDays > 0? `${app.trialDays}日間 無料で試す` : '公式サイトを見る'}
                  <span className="block text-[10px] font-normal opacity-80 mt-0.5">
                    {app.trialDays > 0? '期間中に解約すれば0円' : 'アプリストアへ移動'}
                  </span>
                </a>
              </div>
            </div>
          </article>
        ))}
      </section>
      <div className="m-10 flex justify-center">
        <a href="https://px.a8.net/svt/ejp?a8mat=45IGP6+1XNQK2+4XZI+609HT" rel="nofollow">
        <img width="300" height="250" alt="" src="https://www28.a8.net/svt/bgt?aid=251124234117&wid=001&eno=01&mid=s00000023067001009000&mc=1"></img></a>
        <img width="1" height="1" src="https://www11.a8.net/0.gif?a8mat=45IGP6+1XNQK2+4XZI+609HT" alt=""></img>
      </div>
      {/* 締めくくり */}
      <section className="mt-16 pt-8 border-t border-gray-200 text-center">
        <h2 className="text-2xl font-bold mb-4">迷ったらまずは「体験」から</h2>
        <p className="text-gray-600 mb-8">
          この記事で紹介したアプリの多くは、無料体験期間（7日間など）を設けています。
          英語力を伸ばす最短のルートは、あれこれ悩むよりも、まずはスマホにインストールして
          「AIと話してみる」ことです。その一歩が、あなたのキャリアを変えるかもしれません。
        </p>
      </section>

    </main>
  );
}
