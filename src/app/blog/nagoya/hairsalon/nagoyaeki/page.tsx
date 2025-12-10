import type { Salon } from '@/app/types/salon';
import { generateItemListSchema } from '@/app/utils/schema';
import React from 'react';

type HighlightSalon = Salon & {
  category: string;
  tagline: string;
  reasons: string[];
  priceGuide: string;
  target: string;
  bookingNote: string;
  mapEmbedUrl: string;
  mapLink: string;
  menuExamples: string[];
};

const salons: HighlightSalon[] = [
  {
    id: 'agu-hair-terrace2',
    rank: 1,
    name: 'Agu hair terrace2 名駅店（アグ ヘアー テラスツー メイエキテン）',
    category: '【コスパ&通いやすさ】全国展開の人気店',
    tagline: '駅徒歩3分×リーズナブルで通いやすいAguグループの旗艦サロン',
    area: '名古屋駅 徒歩3分',
    type: 'イルミナカラー / TOKIOトリートメント',
    description:
      '全国的に予約が殺到する「Agu」ブランドの名古屋駅店。イルミナカラーやTOKIOトリートメントなど薬剤にもこだわり、ハイクオリティを保ちながらも良心価格なので、定期的に通いたい人にぴったりです。',
    features: ['Aguグループクオリティ', 'イルミナカラー対応', 'TOKIOトリートメント', '駅徒歩3分'],
    recommendFor: ['コスパも仕上がりも妥協したくない', 'ショッピングついでに通いたい', 'ハイトーンでもダメージを抑えたい'],
    reasons: [
      '名古屋駅から徒歩3分で仕事帰りにも立ち寄りやすい絶好の立地',
      'ハイブランド薬剤を常備し、トレンドのイルミナカラーやTOKIOトリートメントがワンストップで受けられる',
      '価格設定がリーズナブルで月1ペースのメンテナンスもしやすい',
    ],
    menuExamples: ['カット+イルミナカラー ¥12,000前後', 'カット+TOKIOトリートメント ¥11,000〜', 'フルカラー ¥7,000台〜'],
    priceGuide: 'カット+カラー 10,000〜13,000円',
    priceRange: { min: 10000, max: 13000, currency: 'JPY' },
    price: 10000,
    target: 'コスパ重視の20代〜30代女性',
    bookingNote: '週末の午前〜昼の枠と連休前は早めに埋まるため、2週間前予約が安心',
    mapEmbedUrl: 'https://www.google.com/maps?q=Agu%20hair%20terrace2%20%E5%90%8D%E9%A7%85%E5%BA%97&output=embed',
    mapLink: 'https://www.google.com/maps/place/Agu+hair+terrace2+%E5%90%8D%E9%A7%85%E5%BA%97/',
    link: 'https://beauty.hotpepper.jp/slnH000286479/',
    access: '名古屋駅 徒歩3分',
  },
  {
    id: 'modimo',
    rank: 2,
    name: 'modimo【モディモ】',
    category: '【マンツーマン】落ち着いた大人志向',
    tagline: '太閤通口徒歩2分。大人女性のためのプライベートサロン',
    area: '名古屋駅 太閤通口 徒歩2分',
    type: '髪質改善 / ヘッドスパ',
    description:
      '太閤通口（新幹線口）からすぐの静かな空間で、基本はマンツーマン施術。丁寧なカウンセリングで髪質改善メニューやヘッドスパが人気です。人目を気にせず過ごしたい方におすすめ。',
    features: ['マンツーマン施術', '落ち着いた空間', '髪質改善', 'ヘッドスパ'],
    recommendFor: ['担当を固定したい', 'ダメージを徹底的にケアしたい', 'ヘッドスパでリラックスしたい'],
    reasons: [
      '太閤通口徒歩2分のわかりやすい立地で、新幹線利用前後にも寄りやすい',
      '1席ごとのマンツーマン施術を基本とし、周りを気にせず会話や相談ができる',
      '髪質改善メニューとスパが充実しており、大人女性の悩みに寄り添った提案が得意',
    ],
    menuExamples: ['カット+髪質改善カラー ¥16,000前後', 'プレミアムヘッドスパ ¥8,000〜', 'カット+トリートメント ¥11,000〜'],
    priceGuide: 'カット+髪質改善 15,000〜18,000円',
    priceRange: { min: 15000, max: 18000, currency: 'JPY' },
    price: 15000,
    target: '働く30代〜40代女性 / 忙しいママ',
    bookingNote: 'マンツーマン枠のため当日予約は難しめ。夕方以降は1〜2週間前の確保がベター',
    mapEmbedUrl: 'https://www.google.com/maps?q=modimo%20%E5%90%8D%E5%8F%A4%E5%B1%8B&output=embed',
    mapLink: 'https://www.google.com/maps/place/modimo+%E5%90%8D%E5%8F%A4%E5%B1%8B/',
    link: 'https://beauty.hotpepper.jp/slnH000108261/',
    access: '名古屋駅 太閤通口 徒歩2分',
  },
  {
    id: 'lond-jeloud-nagoya',
    rank: 3,
    name: 'Lond jeloud 名古屋（ロンド ジュルード）',
    category: '【受賞歴多数】ショート&髪質改善',
    tagline: '名駅徒歩1分。ショート・ボブと縮毛矯正で支持される実力サロン',
    area: '名古屋駅 徒歩1分',
    type: 'ショート/ボブ / 髪質改善縮毛矯正',
    description:
      '数々のコンテストで受賞経験を持つ人気サロン。ショート・ボブの似合わせや髪質改善縮毛矯正が得意で、平日は21時過ぎまで営業する日もあり、仕事帰りにも通えます。',
    features: ['受賞歴多数', 'ショート&ボブ', '髪質改善縮毛矯正', '夜21時以降営業日あり'],
    recommendFor: ['ショートで失敗したくない', 'うねり・クセを綺麗に伸ばしたい', '仕事帰りに通いたい'],
    reasons: [
      '名古屋駅徒歩1分の超駅近。地下街から雨でもアクセスしやすい',
      'ショートやボブの骨格補正カットと髪質改善の組み合わせが得意で再現性が高い',
      '平日21時過ぎまで営業する日もあり、残業後に駆け込めるスケジュール感',
    ],
    menuExamples: ['カット+髪質改善TR ¥17,000〜', 'ショートカット+カラー ¥15,000前後', '髪質改善縮毛矯正コース ¥22,000〜'],
    priceGuide: 'カット+髪質改善 16,000〜22,000円',
    priceRange: { min: 16000, max: 22000, currency: 'JPY' },
    price: 16000,
    target: '艶髪志向の20代〜40代 / 仕事帰りのOL',
    bookingNote: 'ショート指名が多いトップスタイリストは特に土日が早期満席。希望日時は余裕を持って相談を',
    mapEmbedUrl: 'https://www.google.com/maps?q=Lond%20jeloud%20%E5%90%8D%E5%8F%A4%E5%B1%8B&output=embed',
    mapLink: 'https://www.google.com/maps/place/Lond+jeloud+%E5%90%8D%E5%8F%A4%E5%B1%8B/',
    link: 'https://beauty.hotpepper.jp/slnH000414649/',
    access: '名古屋駅 徒歩1分',
  },
  {
    id: 'ankh',
    rank: 4,
    name: 'Ankh【アンクー】',
    category: '【韓国風・映え】トレンド更新',
    tagline: '大名古屋ビルヂング隣。韓国レイヤーとヘアセットが得意',
    area: '名古屋駅 徒歩1分',
    type: '韓国風レイヤー / 髪質改善 / ヘアセット',
    description:
      '大名古屋ビルヂング隣のビルに構えるトレンド発信サロン。経験豊富なトップスタイリストが在籍し、韓国風ヘアやレイヤーカット、イベント用ヘアセットも人気。結婚式や推し活の前にも頼れる存在です。',
    features: ['韓国風レイヤー', 'トップスタイリスト常駐', '髪質改善メニュー', 'ヘアセット対応'],
    recommendFor: ['韓国風スタイルを極めたい', 'レイヤーカットで小顔見せしたい', '結婚式やイベントのヘアセットも頼みたい'],
    reasons: [
      '大名古屋ビルヂングのすぐ隣なので集合や待ち合わせがしやすい',
      '韓国風ヘア・レイヤーカット・髪質改善をワンストップで依頼できるトップスタイリストが在籍',
      '結婚式や推し活イベント前のヘアセット対応も人気で、特別な日の準備がスムーズ',
    ],
    menuExamples: ['韓国風レイヤーカット+カラー ¥15,000前後', '髪質改善トリートメント ¥12,000〜', 'ヘアセット ¥5,000〜'],
    priceGuide: 'カット+カラー 13,000〜17,000円',
    priceRange: { min: 13000, max: 17000, currency: 'JPY' },
    price: 13000,
    target: 'トレンド感度の高い20代〜30代 / プレ花嫁',
    bookingNote: 'イベントシーズンの土日午前はヘアセット予約が集中。早朝料金が発生する場合は事前確認を',
    mapEmbedUrl: 'https://www.google.com/maps?q=Ankh%20%E5%90%8D%E5%8F%A4%E5%B1%8B&output=embed',
    mapLink: 'https://www.google.com/maps/place/Ankh+%E5%90%8D%E5%8F%A4%E5%B1%8B/',
    link: 'https://beauty.hotpepper.jp/slnH000546651/',
    access: '名古屋駅 徒歩1分（大名古屋ビルヂング隣）',
  },
];

export default function NagoyaHairSalonNagoyaEkiPage() {
  const jsonLd = generateItemListSchema(salons);
  const currentYear = new Date().getFullYear() + 1;

  return (
    <main className="min-h-screen bg-rose-50">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <header className="mb-10 bg-white">
        <div className="mx-auto max-w-4xl px-4 py-12 text-center md:px-6">
          <span className="inline-block rounded-full bg-rose-100 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-rose-600">
            Nagoya Hair Salon Guide
          </span>
          <h1 className="mt-4 text-2xl font-extrabold leading-tight text-gray-900 md:text-4xl lg:text-5xl">
            【{currentYear}年版】<br className="hidden sm:block" />
            名古屋駅ヘアサロン<br />
            おすすめ4選！
            <br />
            <span className="text-rose-600">
              徒歩3分圏内で通える
              <br />
              髪質改善&トレンド特化
            </span>
          </h1>
          <p className="mt-6 text-lg text-gray-600">
            名古屋駅（名駅）から歩いてすぐの人気美容院を厳選。コスパ派・マンツーマン派・ショート&髪質改善志向・韓国ヘア派まで、ホットペッパービューティーのリンク付きで特徴を整理しました。
            予約のコツやアクセス情報もまとめてチェックできます。
          </p>
          <div className="mt-4 text-sm text-gray-500">最終更新: {currentYear}年 / 監修: 名古屋ビューティー編集部</div>
        </div>
      </header>
      <div className="m-10 flex justify-center">
        <a href="https://px.a8.net/svt/ejp?a8mat=45IGP6+2A5U9E+4H2M+6BMG1" rel="nofollow">
          <img
            width="300"
            height="250"
            alt=""
            src="https://www25.a8.net/svt/bgt?aid=251124234138&wid=001&eno=01&mid=s00000020875001062000&mc=1"
          />
        </a>
        <img width="1" height="1" src="https://www13.a8.net/0.gif?a8mat=45IGP6+2A5U9E+4H2M+6BMG1" alt="" />
      </div>

      <section id="summary" className="mx-auto max-w-5xl px-4 py-10 md:px-6">
        <h2 className="text-2xl font-bold text-gray-900">まずはタイプ別にサロンを把握</h2>
        <p className="mt-2 text-sm text-gray-600">
          駅徒歩圏でアクセス良好なサロンばかり。気になるカテゴリーをタップして詳細に進んでください。
        </p>
        <div className="mt-6 grid gap-4 md:grid-cols-2">
          {salons.map((salon) => (
            <a
              key={salon.id}
              href={`#${salon.id}`}
              className="rounded-2xl border border-rose-100 bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:border-rose-300 hover:shadow-lg"
            >
              <p className="text-xs font-semibold text-rose-500">{salon.category}</p>
              <h3 className="mt-1 text-lg font-bold text-gray-900">{salon.name}</h3>
              <p className="text-sm text-gray-600">{salon.tagline}</p>
              <div className="mt-3 flex flex-wrap gap-2 text-xs text-rose-600">
                <span className="rounded-full bg-rose-50 px-3 py-1 font-semibold">{salon.area}</span>
                <span className="rounded-full bg-rose-50 px-3 py-1 font-semibold">{salon.priceGuide}</span>
              </div>
            </a>
          ))}
        </div>
      </section>

      <section id="review" className="mx-auto max-w-5xl px-4 pb-16 md:px-6">
        <h2 className="text-2xl font-bold text-gray-900">目的別おすすめヘアサロン 詳細レビュー</h2>
        <p className="mt-2 text-sm text-gray-600">
          選ばれる理由・価格帯・ターゲット層・予約の注意点・Googleマップとホットペッパービューティーのリンクまでまとめています。
        </p>

        <div className="mt-8 space-y-10">
          {salons.map((salon, index) => (
            <React.Fragment key={salon.id}>
              <article
                id={salon.id}
                className="scroll-mt-28 overflow-hidden rounded-3xl border border-rose-100 bg-white shadow-lg ring-1 ring-rose-50"
              >
                <div className="bg-gradient-to-r from-rose-50 to-white px-6 py-5">
                  <p className="text-xs font-semibold text-rose-500">{salon.category}</p>
                  <div className="mt-2 flex flex-col gap-2 md:flex-row md:items-center md:justify-between">
                    <h3 className="text-2xl font-bold text-gray-900">
                      #{salon.rank} {salon.name}
                    </h3>
                    <span className="text-sm font-semibold text-rose-600">{salon.area}</span>
                  </div>
                  <p className="mt-2 text-sm text-gray-600">{salon.tagline}</p>
                </div>

                <div className="space-y-8 px-6 py-6 md:px-8">
                  <p className="text-gray-700 leading-relaxed">{salon.description}</p>

                  <div className="grid gap-5 md:grid-cols-2">
                    <div className="rounded-2xl border border-rose-100 bg-rose-50/60 p-5">
                      <h4 className="text-sm font-semibold text-rose-700">おすすめの理由</h4>
                      <ul className="mt-3 space-y-2 text-sm text-gray-700">
                        {salon.reasons.map((reason) => (
                          <li key={reason} className="flex items-start gap-2">
                            <span className="mt-1 h-1.5 w-1.5 rounded-full bg-rose-500" />
                            {reason}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="rounded-2xl border border-gray-100 bg-gray-50 p-5">
                      <h4 className="text-sm font-semibold text-gray-800">メニュー目安</h4>
                      <ul className="mt-3 space-y-2 text-sm text-gray-700">
                        {salon.menuExamples.map((menu) => (
                          <li key={menu} className="flex items-start gap-2">
                            <span className="mt-1 text-gray-400">•</span>
                            {menu}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="grid gap-4 md:grid-cols-3">
                    <div className="rounded-xl border border-rose-100 p-4">
                      <p className="text-xs uppercase tracking-[0.2em] text-rose-400">Price</p>
                      <p className="mt-1 text-lg font-bold text-rose-600">{salon.priceGuide}</p>
                      {salon.priceRange && (
                        <p className="text-xs text-gray-500">
                          参考レンジ: ¥{salon.priceRange.min.toLocaleString()}〜¥{salon.priceRange.max.toLocaleString()}
                        </p>
                      )}
                    </div>
                    <div className="rounded-xl border border-gray-100 p-4">
                      <p className="text-xs uppercase tracking-[0.2em] text-gray-400">Target</p>
                      <p className="mt-1 text-lg font-bold text-gray-800">{salon.target}</p>
                      <p className="text-xs text-gray-500">得意な年代やライフスタイル</p>
                    </div>
                    <div className="rounded-xl border border-gray-100 p-4">
                      <p className="text-xs uppercase tracking-[0.2em] text-gray-400">Booking</p>
                      <p className="mt-1 text-sm font-semibold text-gray-800">{salon.bookingNote}</p>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {salon.features.map((feature) => (
                      <span key={feature} className="rounded-full bg-rose-50 px-3 py-1 text-xs font-semibold text-rose-600">
                        {feature}
                      </span>
                    ))}
                  </div>

                  <div className="space-y-3 rounded-2xl border border-gray-100 p-4">
                    <p className="text-sm font-semibold text-gray-800">Googleマップ</p>
                    <div className="relative w-full overflow-hidden rounded-xl border border-gray-200">
                      <iframe
                        src={salon.mapEmbedUrl}
                        title={`${salon.name}の地図`}
                        loading="lazy"
                        className="h-64 w-full border-0"
                        allowFullScreen
                        referrerPolicy="no-referrer-when-downgrade"
                      />
                    </div>
                    <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
                      <div>
                        <p className="text-sm font-semibold text-gray-700">アクセス</p>
                        <p className="text-sm text-gray-600">{salon.access}</p>
                      </div>
                      <div className="flex flex-col gap-2 md:flex-row">
                        <a
                          href={salon.mapLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="rounded-lg bg-rose-600 px-4 py-2 text-center text-sm font-bold text-white shadow-lg transition hover:bg-rose-700"
                        >
                          Googleマップを開く
                        </a>
                        <a
                          href={salon.link}
                          target="_blank"
                          rel="nofollow noopener noreferrer"
                          className="rounded-lg border border-rose-200 px-4 py-2 text-center text-sm font-bold text-rose-600 transition hover:bg-rose-50"
                        >
                          ホットペッパービューティーで見る
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </article>

              {index === 0 && (
                <div className="flex justify-center gap-3 p-2">
                  <a href="https://px.a8.net/svt/ejp?a8mat=45K8T3+SKTTE+45DI+6LP3L" rel="nofollow">
                    <img
                      width="250"
                      height="250"
                      alt=""
                      src="https://www24.a8.net/svt/bgt?aid=251207319048&wid=001&eno=01&mid=s00000019359001109000&mc=1"
                    />
                  </a>
                  <img width="1" height="1" src="https://www19.a8.net/0.gif?a8mat=45K8T3+SKTTE+45DI+6LP3L" alt="" />
                  <a href="https://px.a8.net/svt/ejp?a8mat=45K8T3+UYK8I+D6Q+3N12TD" rel="nofollow">
                    <img
                      width="300"
                      height="250"
                      alt=""
                      src="https://www26.a8.net/svt/bgt?aid=251207319052&wid=001&eno=01&mid=s00000001709022008000&mc=1"
                    />
                  </a>
                  <img width="1" height="1" src="https://www10.a8.net/0.gif?a8mat=45K8T3+UYK8I+D6Q+3N12TD" alt="" />
                </div>
              )}
              {index === 1 && (
                <div className="flex justify-center gap-3 p-2">
                  <a href="https://px.a8.net/svt/ejp?a8mat=45K8T2+757A42+4RJK+601S1" rel="nofollow">
                    <img
                      width="300"
                      height="250"
                      alt=""
                      src="https://www25.a8.net/svt/bgt?aid=251207318432&wid=001&eno=01&mid=s00000022232001008000&mc=1"
                    />
                  </a>
                  <img width="1" height="1" src="https://www10.a8.net/0.gif?a8mat=45K8T2+757A42+4RJK+601S1" alt="" />
                  <a href="https://px.a8.net/svt/ejp?a8mat=45IJ10+BDM8Z6+5TSI+5YZ75" rel="nofollow">
                    <img
                      width="300"
                      height="250"
                      alt=""
                      src="https://www23.a8.net/svt/bgt?aid=251127252688&wid=001&eno=01&mid=s00000027189001003000&mc=1"
                    />
                  </a>
                  <img width="1" height="1" src="https://www18.a8.net/0.gif?a8mat=45IJ10+BDM8Z6+5TSI+5YZ75" alt="" />
                </div>
              )}
              {index === 2 && (
                <div className="flex justify-center gap-3 p-2">
                  <a href="https://px.a8.net/svt/ejp?a8mat=45K8T3+4RGV02+1KYA+2Z8DRL" rel="nofollow">
                    <img
                      width="300"
                      height="250"
                      alt=""
                      src="https://www24.a8.net/svt/bgt?aid=251207319288&wid=001&eno=01&mid=s00000007381018011000&mc=1"
                    />
                  </a>
                  <img width="1" height="1" src="https://www17.a8.net/0.gif?a8mat=45K8T3+4RGV02+1KYA+2Z8DRL" alt="" />
                  <a href="https://px.a8.net/svt/ejp?a8mat=45K8T3+2WSB8Y+5ESS+5ZMCH" rel="nofollow">
                    <img
                      width="300"
                      height="250"
                      alt=""
                      src="https://www20.a8.net/svt/bgt?aid=251207319176&wid=001&eno=01&mid=s00000025246001006000&mc=1"
                    />
                  </a>
                  <img width="1" height="1" src="https://www19.a8.net/0.gif?a8mat=45K8T3+2WSB8Y+5ESS+5ZMCH" alt="" />
                </div>
              )}
              {index === 3 && (
                <div className="flex justify-center gap-3 p-2">
                  <a href="https://px.a8.net/svt/ejp?a8mat=45K8T3+2QTZ76+5DM0+631SX" rel="nofollow">
                    <img
                      width="300"
                      height="250"
                      alt=""
                      src="https://www23.a8.net/svt/bgt?aid=251207319166&wid=001&eno=01&mid=s00000025092001022000&mc=1"
                    />
                  </a>
                  <img width="1" height="1" src="https://www19.a8.net/0.gif?a8mat=45K8T3+2QTZ76+5DM0+631SX" alt="" />
                  <a href="https://px.a8.net/svt/ejp?a8mat=45K8T3+2WSB8Y+5ESS+5ZMCH" rel="nofollow">
                    <img
                      width="300"
                      height="250"
                      alt=""
                      src="https://www20.a8.net/svt/bgt?aid=251207319176&wid=001&eno=01&mid=s00000025246001006000&mc=1"
                    />
                  </a>
                  <img width="1" height="1" src="https://www19.a8.net/0.gif?a8mat=45K8T3+2WSB8Y+5ESS+5ZMCH" alt="" />
                </div>
              )}
            </React.Fragment>
          ))}
        </div>
      </section>

      <section id="tips" className="bg-white">
        <div className="mx-auto max-w-5xl px-4 py-10 md:px-6">
          <h2 className="text-2xl font-bold text-gray-900">名古屋駅サロンの予約で失敗しないためのヒント</h2>
          <ul className="mt-4 space-y-3 text-sm text-gray-700">
            <li>
              <span className="font-semibold text-rose-600">価格帯:</span> カット+カラーで1万円前後ならハイコスパ、1万5千円以上は髪質改善やスパなどケアを含むプランが中心。メニューを決めかねている場合は「予算と希望スタイル」をセットで伝えると提案がスムーズです。
            </li>
            <li>
              <span className="font-semibold text-rose-600">ターゲット層:</span> Aguは幅広い世代、modimoは大人女性、Londは艶髪志向、Ankhは韓国風を楽しみたい層と相性が良いです。自分と似たライフスタイルの客層が多いサロンを選ぶと仕上がりの共有がラクになります。
            </li>
            <li>
              <span className="font-semibold text-rose-600">予約の取りやすさ:</span> 名古屋駅エリアは会社員のアフター6需要が高いため、平日18時以降と土日の午前は早めに埋まりがち。ホットペッパービューティーの「空席確認」から1〜2週間前に抑えるのが鉄則です。
            </li>
            <li>
              <span className="font-semibold text-rose-600">アクセス:</span> 迷いやすい場合はGoogleマップのストリートビューで入口のビル名をチェックしておくと安心。名駅周辺は地下街→地上の導線が複雑なので、待ち合わせはランドマーク（大名古屋ビルヂング等）指定がおすすめです。
            </li>
          </ul>
          <p className="mt-6 text-sm text-gray-600">
            名古屋駅はサロン数が多いぶん選択肢も豊富。この記事をブックマークして、目的や気分に合わせてベストな1軒を見つけてください。
          </p>
        </div>
      </section>
    </main>
  );
}
