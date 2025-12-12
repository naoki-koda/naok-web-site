import type { Salon } from "@/app/types/salon";
import { generateItemListSchema } from "@/app/utils/schema";
import React from "react";

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
    id: "noe-sakae",
    rank: 1,
    name: "noe 栄（ノエ）",
    category: "【ミシュラン受賞】切りっぱなし&顔まわり特化",
    tagline:
      "美容業界のミシュラン「カミカリスマ」受賞。切りっぱなしボブとレイヤーで圧倒的支持",
    area: "栄駅 徒歩5分",
    type: "切りっぱなしボブ / 顔まわりレイヤー",
    description:
      "トレンドに敏感な20〜30代から圧倒的な支持を集めるサロン。「カミカリスマ」を受賞した技術力で、切りっぱなしボブや顔まわりレイヤーのデザインがとにかく上手いと口コミで話題です。",
    features: [
      "カミカリスマ受賞店",
      "顔まわりレイヤー",
      "切りっぱなしボブ",
      "トレンド提案",
    ],
    recommendFor: [
      "失敗したくない",
      "トレンドボブを更新したい",
      "顔まわりの似合わせにこだわりたい",
    ],
    reasons: [
      "美容業界のミシュランと言われる「カミカリスマ」受賞で実力が証明されている",
      "切りっぱなしボブや顔まわりレイヤーなど、旬のスタイルを似合わせてくれる提案力",
      "再現性を重視したカットで自宅でのスタイリングも簡単と口コミで高評価",
    ],
    menuExamples: [
      "カット+トレンドカラー ¥16,000前後",
      "切りっぱなしボブカット ¥7,000〜",
      "レイヤーカット+トリートメント ¥13,000〜",
    ],
    priceGuide: "カット+カラー 15,000〜18,000円",
    priceRange: { min: 15000, max: 18000, currency: "JPY" },
    price: 15000,
    target: "20代〜30代のトレンド感度が高い女性",
    bookingNote:
      "土日午前〜昼枠は1〜2週間前に満席になりやすいので早めの確保が安心",
    mapEmbedUrl: "https://www.google.com/maps?q=noe%20%E6%A0%84&output=embed",
    mapLink: "https://www.google.com/maps/search/noe+%E6%A0%84/",
    link: "https://beauty.hotpepper.jp/",
    access: "栄駅 徒歩5分 / 矢場町駅 徒歩4分",
  },
  {
    id: "loren-sakae",
    rank: 2,
    name: "LOREN（ローレン）",
    category: "【外国人風】透明感カラー×おもてなし",
    tagline: "全席タブレット&ドリンク完備。透明感カラーと韓国風ヘアで予約殺到",
    area: "栄・久屋大通",
    type: "透明感カラー / 韓国風ヘア",
    description:
      "名古屋の美容院ランキングで常に上位に君臨する人気店。赤味を抑えた透明感カラーや柔らかい質感のカットに加え、ホスピタリティの高さまで評価されています。",
    features: [
      "透明感カラー",
      "韓国風レイヤー",
      "ホスピタリティ",
      "タブレット・ドリンク完備",
    ],
    recommendFor: [
      "外国人風カラーに挑戦したい",
      "接客・居心地の良さを重視",
      "韓国風の垢抜けヘアを作りたい",
    ],
    reasons: [
      "赤味を抑えるオリジナル配合で透明感のあるカラーを実現",
      "韓国風レイヤーや柔らかい質感のスタイルが得意でSNSでも話題",
      "タブレットとドリンクサービスなどおもてなし面も高評価で長時間の施術も快適",
    ],
    menuExamples: [
      "カット+透明感カラー ¥17,000前後",
      "韓国風レイヤーカット+TR ¥14,000〜",
      "ダブルカラー（ケアブリーチ込） ¥22,000〜",
    ],
    priceGuide: "カット+カラー 16,000〜22,000円",
    priceRange: { min: 16000, max: 22000, currency: "JPY" },
    price: 16000,
    target: "20代〜30代のトレンド&接客重視層",
    bookingNote:
      "SNS経由の予約が多く、週末は2週間前でも埋まることがあるため早めの確認が必須",
    mapEmbedUrl: "https://www.google.com/maps?q=LOREN%20%E6%A0%84&output=embed",
    mapLink: "https://www.google.com/maps/search/LOREN+%E6%A0%84/",
    link: "https://beauty.hotpepper.jp/",
    access: "久屋大通駅 徒歩3分 / 栄駅 徒歩5分",
  },
  {
    id: "mira-resca",
    rank: 3,
    name: "MIRA RESCA 名古屋栄（ミラレスカ）",
    category: "【完全個室】大人の髪質改善サロン",
    tagline: "全席完全個室×最高級トリートメントで静かに髪を整える",
    area: "栄駅 徒歩3分",
    type: "髪質改善 / Aujua / バイカルテ",
    description:
      "「美容院での会話や周囲の目が気になる」という人に最適な完全個室サロン。Aujuaやバイカルテなど最高級トリートメントを取り扱い、静かな空間でマンツーマン施術を受けられます。",
    features: [
      "全席完全個室",
      "Aujua/Baikalte",
      "マンツーマン施術",
      "髪質改善",
    ],
    recommendFor: [
      "静かな空間を最優先",
      "ハイレベルな髪質改善でダメージケアしたい",
      "周囲を気にせず相談したい",
    ],
    reasons: [
      "全席が完全個室で人目を気にせず施術に集中できる",
      "Aujuaやバイカルテなど最高級ケアメニューを常備し髪質改善に特化",
      "マンツーマン施術でカウンセリングから仕上げまで担当が変わらない安心感",
    ],
    menuExamples: [
      "カット+髪質改善TR ¥18,000前後",
      "Aujua集中ケアコース ¥16,000〜",
      "プレミアムスパ+トリートメント ¥12,000〜",
    ],
    priceGuide: "カット+髪質改善 16,000〜22,000円",
    priceRange: { min: 16000, max: 22000, currency: "JPY" },
    price: 16000,
    target: "静かに過ごしたい30代〜40代女性",
    bookingNote:
      "完全個室のため当日予約は難しく、平日昼でも前日までの連絡がベター",
    mapEmbedUrl:
      "https://www.google.com/maps?q=MIRA%20RESCA%20%E6%A0%84&output=embed",
    mapLink: "https://www.google.com/maps/search/MIRA+RESCA+%E6%A0%84/",
    link: "https://beauty.hotpepper.jp/",
    access: "栄駅 徒歩3分",
  },
  {
    id: "buddy-hair-amour",
    rank: 4,
    name: "BUDDY HAIR amour（バディヘア アムル）",
    category: "【デザインカラー】おしゃれとケアの両立",
    tagline:
      "名古屋を代表するBUDDY HAIRグループ。デザインカラー×ケアで差がつくスタイルを提案",
    area: "栄駅 徒歩4分",
    type: "デザインカラー / パーマ / ヘアケア",
    description:
      "インナーカラーやハイトーンなど攻めたデザインカラーが得意な栄店。経験豊富なスタッフがファッションとのバランスを考えた提案をしてくれ、ヘアケア知識も豊富です。",
    features: [
      "デザインカラー",
      "パーマスタイル",
      "ヘアケア知識",
      "ハイセンスなスタッフ",
    ],
    recommendFor: [
      "周りと差がつく色味に挑戦したい",
      "パーマとカラーを両立させたい",
      "おしゃれなスタッフから提案を受けたい",
    ],
    reasons: [
      "インナーカラーやハイトーンなどデザイン性の高いカラーの成功例が豊富",
      "ヘアケアの知識が深く、ダメージを抑えながらデザインを楽しめる",
      "ファッションと連動した一歩先のおしゃれを提案してくれるスタイリストが在籍",
    ],
    menuExamples: [
      "デザインカラー+TR ¥19,000前後",
      "インナーカラー（ブリーチ込） ¥18,000〜",
      "パーマ+カット ¥15,000〜",
    ],
    priceGuide: "カット+デザインカラー 17,000〜23,000円",
    priceRange: { min: 17000, max: 23000, currency: "JPY" },
    price: 17000,
    target: "周りと差をつけたい20代〜30代女性",
    bookingNote:
      "トレンドカラー希望者が集中するため、連休やイベント前は早めの空き確認が必要",
    mapEmbedUrl:
      "https://www.google.com/maps?q=BUDDY%20HAIR%20amour&output=embed",
    mapLink: "https://www.google.com/maps/search/BUDDY+HAIR+amour/",
    link: "https://beauty.hotpepper.jp/",
    access: "栄駅 徒歩4分 / 矢場町駅 徒歩6分",
  },
  {
    id: "teto-hair",
    rank: 5,
    name: "teto hair（テトヘアー）",
    category: "【パーマ・ストリート】雰囲気のある髪を作る",
    tagline:
      "ニュアンス〜スパイラルまで幅広いパーマと、カジュアルでおしゃれな世界観が魅力",
    area: "矢場町・大須エリア",
    type: "パーマスタイル / ウルフカット",
    description:
      "アパレル店員や美容学生など感度の高い層から熱い支持を受けるサロン。ニュアンスパーマやスパイラル、ウルフカットで「雰囲気のある髪」を作るのが得意です。",
    features: [
      "パーマスタイル",
      "ウルフカット",
      "カジュアル/ストリート",
      "メンズOK",
    ],
    recommendFor: [
      "他と被らないスタイルにしたい",
      "ウルフやパーマで質感を出したい",
      "ストリートテイストが好き",
    ],
    reasons: [
      "ニュアンスからスパイラルまで幅広いパーマメニューの経験値が高い",
      "ウルフカットや顔まわりの作り込みで雰囲気を演出するのが得意",
      "感度の高いスタッフが在籍し、ファッションに合わせたデザイン提案が受けられる",
    ],
    menuExamples: [
      "カット+ニュアンスパーマ ¥15,000前後",
      "スパイラル/ツイストパーマ ¥18,000〜",
      "ウルフカット+カラー ¥17,000〜",
    ],
    priceGuide: "カット+パーマ 15,000〜20,000円",
    priceRange: { min: 15000, max: 20000, currency: "JPY" },
    price: 15000,
    target: "カジュアル・ストリート好きな男女",
    bookingNote:
      "イベントシーズンや長期休暇前はメンズ・レディースともに指名が集中するため早期予約推奨",
    mapEmbedUrl:
      "https://www.google.com/maps?q=teto%20hair%20%E5%90%8D%E5%8F%A4%E5%B1%8B&output=embed",
    mapLink:
      "https://www.google.com/maps/search/teto+hair+%E5%90%8D%E5%8F%A4%E5%B1%8B/",
    link: "https://beauty.hotpepper.jp/",
    access: "矢場町駅 徒歩5分 / 大須観音駅 徒歩8分",
  },
];

export default function NagoyaHairSalonSakaePage() {
  const jsonLd = generateItemListSchema(salons);
  const currentYear = new Date().getFullYear() + 1;

  return (
    <main className="min-h-screen bg-rose-50">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <header className="mb-10 bg-white">
        <div className="mx-auto max-w-5xl px-4 py-12 text-center md:px-6">
          <span className="inline-block rounded-full bg-rose-100 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-rose-600">
            Nagoya Hair Salon Guide
          </span>
          <h1 className="mt-4 text-3xl font-extrabold leading-tight text-gray-900 md:text-4xl">
            【名古屋・栄】本当におすすめな美容院5選まとめ
          </h1>
          <p className="mt-4 text-lg text-gray-600">
            栄エリアで口コミ評価が高く、予約が殺到する実力派サロンを厳選。カミカリスマ受賞店から完全個室の髪質改善サロン、デザインカラーが得意なサロンまで、ニーズ別に比較できるようにまとめました。
          </p>
          <p className="mt-2 text-base font-semibold text-rose-500">
            失敗したくない人のための保存版 / 最終更新: {currentYear}年版
          </p>
        </div>
      </header>

      <section id="summary" className="mx-auto max-w-5xl px-4 py-10 md:px-6">
        <h2 className="text-2xl font-bold text-gray-900">
          タイプ別サマリーを先にチェック
        </h2>
        <p className="mt-2 text-sm text-gray-600">
          栄の人気サロンを特徴ごとに整理しました。気になるカードをタップすると詳細レビューにジャンプします。
        </p>
        <div className="mt-6 grid gap-4 md:grid-cols-2">
          {salons.map((salon) => (
            <a
              key={salon.id}
              href={`#${salon.id}`}
              className="rounded-2xl border border-rose-100 bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:border-rose-300 hover:shadow-lg"
            >
              <p className="text-xs font-semibold text-rose-500">
                {salon.category}
              </p>
              <h3 className="mt-1 text-lg font-bold text-gray-900">
                {salon.name}
              </h3>
              <p className="text-sm text-gray-600">{salon.tagline}</p>
              <div className="mt-3 flex flex-wrap gap-2 text-xs text-rose-600">
                <span className="rounded-full bg-rose-50 px-3 py-1 font-semibold">
                  {salon.area}
                </span>
                <span className="rounded-full bg-rose-50 px-3 py-1 font-semibold">
                  {salon.priceGuide}
                </span>
              </div>
            </a>
          ))}
        </div>
      </section>

      <section id="review" className="mx-auto max-w-5xl px-4 pb-16 md:px-6">
        <h2 className="text-2xl font-bold text-gray-900">
          おすすめサロン詳細レビュー
        </h2>
        <p className="mt-2 text-sm text-gray-600">
          選ばれる理由・メニュー目安・ターゲット層・Googleマップを一気に確認できます。各サロンの予約リンクもあわせてチェックしてください。
        </p>

        <div className="mt-8 space-y-10">
          {salons.map((salon, index) => (
            <React.Fragment>
              <article
                key={salon.id}
                id={salon.id}
                className="scroll-mt-28 overflow-hidden rounded-3xl border border-rose-100 bg-white shadow-lg ring-1 ring-rose-50"
              >
                <div className="bg-gradient-to-r from-rose-50 to-white px-6 py-5">
                  <p className="text-xs font-semibold text-rose-500">
                    {salon.category}
                  </p>
                  <div className="mt-2 flex flex-col gap-2 md:flex-row md:items-center md:justify-between">
                    <h3 className="text-2xl font-bold text-gray-900">
                      #{salon.rank} {salon.name}
                    </h3>
                    <span className="text-sm font-semibold text-rose-600">
                      {salon.area}
                    </span>
                  </div>
                  <p className="mt-2 text-sm text-gray-600">{salon.tagline}</p>
                </div>

                <div className="space-y-8 px-6 py-6 md:px-8">
                  <p className="leading-relaxed text-gray-700">
                    {salon.description}
                  </p>

                  <div className="grid gap-5 md:grid-cols-2">
                    <div className="rounded-2xl border border-rose-100 bg-rose-50/60 p-5">
                      <h4 className="text-sm font-semibold text-rose-700">
                        おすすめの理由
                      </h4>
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
                      <h4 className="text-sm font-semibold text-gray-800">
                        メニュー目安
                      </h4>
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
                      <p className="text-xs uppercase tracking-[0.2em] text-rose-400">
                        Price
                      </p>
                      <p className="mt-1 text-lg font-bold text-rose-600">
                        {salon.priceGuide}
                      </p>
                      {salon.priceRange && (
                        <p className="text-xs text-gray-500">
                          参考レンジ: ¥{salon.priceRange.min.toLocaleString()}
                          〜¥{salon.priceRange.max.toLocaleString()}
                        </p>
                      )}
                    </div>
                    <div className="rounded-xl border border-gray-100 p-4">
                      <p className="text-xs uppercase tracking-[0.2em] text-gray-400">
                        Target
                      </p>
                      <p className="mt-1 text-lg font-bold text-gray-800">
                        {salon.target}
                      </p>
                      <p className="text-xs text-gray-500">
                        得意な年代やライフスタイル
                      </p>
                    </div>
                    <div className="rounded-xl border border-gray-100 p-4">
                      <p className="text-xs uppercase tracking-[0.2em] text-gray-400">
                        Booking
                      </p>
                      <p className="mt-1 text-sm font-semibold text-gray-800">
                        {salon.bookingNote}
                      </p>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {salon.features.map((feature) => (
                      <span
                        key={feature}
                        className="rounded-full bg-rose-50 px-3 py-1 text-xs font-semibold text-rose-600"
                      >
                        {feature}
                      </span>
                    ))}
                  </div>

                  <div className="space-y-3 rounded-2xl border border-gray-100 p-4">
                    <p className="text-sm font-semibold text-gray-800">
                      Googleマップ
                    </p>
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
                        <p className="text-sm font-semibold text-gray-700">
                          アクセス
                        </p>
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
                  <a
                    href="https://px.a8.net/svt/ejp?a8mat=45IGP5+56CP4I+40MY+5ZMCH"
                    rel="nofollow"
                  >
                    <img
                      width="300"
                      height="250"
                      alt=""
                      src="https://www28.a8.net/svt/bgt?aid=251124233313&wid=001&eno=01&mid=s00000018745001006000&mc=1"
                    ></img>
                  </a>
                  <img
                    width="1"
                    height="1"
                    src="https://www15.a8.net/0.gif?a8mat=45IGP5+56CP4I+40MY+5ZMCH"
                    alt=""
                  ></img>
                  <a
                    href="https://px.a8.net/svt/ejp?a8mat=45K8T3+4RGV02+1KYA+2Z8DRL"
                    rel="nofollow"
                  >
                    <img
                      width="300"
                      height="250"
                      alt=""
                      src="https://www26.a8.net/svt/bgt?aid=251207319288&wid=001&eno=01&mid=s00000007381018011000&mc=1"
                    ></img>
                  </a>
                  <img
                    width="1"
                    height="1"
                    src="https://www16.a8.net/0.gif?a8mat=45K8T3+4RGV02+1KYA+2Z8DRL"
                    alt=""
                  ></img>
                </div>
              )}
              {index === 1 && (
                <div className="flex justify-center gap-3 p-2">
                  <a
                    href="https://px.a8.net/svt/ejp?a8mat=45K8T2+757A42+4RJK+601S1"
                    rel="nofollow"
                  >
                    <img
                      width="300"
                      height="250"
                      alt=""
                      src="https://www25.a8.net/svt/bgt?aid=251207318432&wid=001&eno=01&mid=s00000022232001008000&mc=1"
                    />
                  </a>
                  <img
                    width="1"
                    height="1"
                    src="https://www10.a8.net/0.gif?a8mat=45K8T2+757A42+4RJK+601S1"
                    alt=""
                  />
                  <a
                    href="https://px.a8.net/svt/ejp?a8mat=45IJ10+BDM8Z6+5TSI+5YZ75"
                    rel="nofollow"
                  >
                    <img
                      width="300"
                      height="250"
                      alt=""
                      src="https://www23.a8.net/svt/bgt?aid=251127252688&wid=001&eno=01&mid=s00000027189001003000&mc=1"
                    />
                  </a>
                  <img
                    width="1"
                    height="1"
                    src="https://www18.a8.net/0.gif?a8mat=45IJ10+BDM8Z6+5TSI+5YZ75"
                    alt=""
                  />
                </div>
              )}
              {index === 2 && (
                <div className="flex justify-center gap-3 p-2">
                  <a
                    href="https://px.a8.net/svt/ejp?a8mat=45K8T3+4RGV02+1KYA+2Z8DRL"
                    rel="nofollow"
                  >
                    <img
                      width="300"
                      height="250"
                      alt=""
                      src="https://www24.a8.net/svt/bgt?aid=251207319288&wid=001&eno=01&mid=s00000007381018011000&mc=1"
                    />
                  </a>
                  <img
                    width="1"
                    height="1"
                    src="https://www17.a8.net/0.gif?a8mat=45K8T3+4RGV02+1KYA+2Z8DRL"
                    alt=""
                  />
                  <a
                    href="https://px.a8.net/svt/ejp?a8mat=45K8T3+2WSB8Y+5ESS+5ZMCH"
                    rel="nofollow"
                  >
                    <img
                      width="300"
                      height="250"
                      alt=""
                      src="https://www20.a8.net/svt/bgt?aid=251207319176&wid=001&eno=01&mid=s00000025246001006000&mc=1"
                    />
                  </a>
                  <img
                    width="1"
                    height="1"
                    src="https://www19.a8.net/0.gif?a8mat=45K8T3+2WSB8Y+5ESS+5ZMCH"
                    alt=""
                  />
                </div>
              )}
              {index === 3 && (
                <div className="flex justify-center gap-3 p-2">
                  <a
                    href="https://px.a8.net/svt/ejp?a8mat=45K8T3+2QTZ76+5DM0+631SX"
                    rel="nofollow"
                  >
                    <img
                      width="300"
                      height="250"
                      alt=""
                      src="https://www23.a8.net/svt/bgt?aid=251207319166&wid=001&eno=01&mid=s00000025092001022000&mc=1"
                    />
                  </a>
                  <img
                    width="1"
                    height="1"
                    src="https://www19.a8.net/0.gif?a8mat=45K8T3+2QTZ76+5DM0+631SX"
                    alt=""
                  />
                  <a
                    href="https://px.a8.net/svt/ejp?a8mat=45K8T3+2WSB8Y+5ESS+5ZMCH"
                    rel="nofollow"
                  >
                    <img
                      width="300"
                      height="250"
                      alt=""
                      src="https://www20.a8.net/svt/bgt?aid=251207319176&wid=001&eno=01&mid=s00000025246001006000&mc=1"
                    />
                  </a>
                  <img
                    width="1"
                    height="1"
                    src="https://www19.a8.net/0.gif?a8mat=45K8T3+2WSB8Y+5ESS+5ZMCH"
                    alt=""
                  />
                </div>
              )}
            </React.Fragment>
          ))}
        </div>
      </section>

      <section id="tips" className="bg-white">
        <div className="mx-auto max-w-5xl px-4 py-10 md:px-6">
          <h2 className="text-2xl font-bold text-gray-900">
            記事作成用ワンポイントアドバイス
          </h2>
          <p className="mt-2 text-sm text-gray-600">
            まとめ記事として紹介する際は、ターゲット別に分類してあげるとクリック率（遷移率）が上がりやすくなります。以下の切り口を見出しやボタンに落とし込むのがおすすめです。
          </p>
          <div className="mt-6 grid gap-4 md:grid-cols-3">
            <div className="rounded-2xl border border-rose-100 bg-rose-50/60 p-5">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-rose-400">
                失敗したくない・流行を取り入れたい
              </p>
              <p className="mt-2 text-sm font-semibold text-gray-800">
                noe / LOREN
              </p>
              <p className="mt-1 text-xs text-gray-600">
                トレンドに敏感で技術力重視の人向け。
              </p>
            </div>
            <div className="rounded-2xl border border-emerald-100 bg-emerald-50/70 p-5">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-emerald-500">
                静かに過ごしたい・髪をきれいにしたい
              </p>
              <p className="mt-2 text-sm font-semibold text-gray-800">
                MIRA RESCA
              </p>
              <p className="mt-1 text-xs text-gray-600">
                完全個室&髪質改善を求める大人女性に。
              </p>
            </div>
            <div className="rounded-2xl border border-indigo-100 bg-indigo-50/70 p-5">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-indigo-500">
                周りと差がつくおしゃれを楽しみたい
              </p>
              <p className="mt-2 text-sm font-semibold text-gray-800">
                BUDDY HAIR / teto hair
              </p>
              <p className="mt-1 text-xs text-gray-600">
                デザインカラーやパーマで個性を出したい人へ。
              </p>
            </div>
          </div>
          <p className="mt-6 text-sm text-gray-600">
            記事冒頭に「まずはタイプ別に選ぶ」などの導線を作り、読者が自分ごと化しやすい導線を設計するのがポイントです。
          </p>
        </div>
      </section>
    </main>
  );
}
