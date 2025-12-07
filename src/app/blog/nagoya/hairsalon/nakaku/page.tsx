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
    id: 'afloat-nagoya',
    rank: 1,
    name: 'AFLOAT NAGOYA（アフロート ナゴヤ）',
    category: '【王道・実力派】失敗したくない人向け',
    tagline: '東京・青山の名門ブランドクオリティを栄で体験',
    area: '栄（ナディアパーク近く）',
    type: '小顔補正カット / 艶カラー',
    description:
      '「ここに行けば間違いない」と名古屋女子の信頼が厚いサロン。顔周りの似合わせに特化した小顔カットと、丁寧で上質な接客で初来店でもリラックスできます。',
    features: ['ブランド力と技術力', '小顔補正カット', '丁寧なホスピタリティ'],
    recommendFor: ['初めての本格サロン選び', '顔まわりの似合わせ重視', '接客重視で安心したい人'],
    reasons: [
      '東京・青山のトップサロン「AFLOAT」の名古屋店でブランド力と教育体制が盤石',
      '「すべての女性を可愛くする」小顔補正カットが20〜40代に支持される理由',
      '技術だけでなく接客の質も高く、初来店でも緊張せず過ごせる',
    ],
    menuExamples: ['カット+艶カラー ¥15,400〜', '顔まわり小顔カット ¥7,700〜', 'プレミアムケアコース ¥19,800〜'],
    priceGuide: 'カット+カラー 15,000〜20,000円',
    priceRange: { min: 15000, max: 20000, currency: 'JPY' },
    price: 15000,
    target: '20代〜40代の大人女性・プレ花嫁',
    bookingNote: '人気スタイリストは土日の予約が早めに埋まるため2〜3週間前の確保が安心',
    mapEmbedUrl: 'https://www.google.com/maps?q=AFLOAT%20NAGOYA&output=embed',
    mapLink: 'https://www.google.com/maps/place/AFLOAT+NAGOYA/',
    link: 'https://www.google.com/maps/place/AFLOAT+NAGOYA/',
    access: '栄駅 徒歩6分 / 矢場町駅 徒歩5分',
  },
  {
    id: 'loren',
    rank: 2,
    name: 'LOREN（ローレン）',
    category: '【トレンド・透明感】おしゃれに敏感な20代〜30代向け',
    tagline: '外国人風・透明感カラーの代名詞サロン',
    area: '栄・久屋大通',
    type: '透明感カラー / ショート・ボブ',
    description:
      'ナチュラルで抜け感のある「外国人風」ヘアの火付け役。赤みを抑えたグレージュやベージュ系カラー、柔らかい質感づくりでInstagramでも話題です。',
    features: ['赤みレス透明感カラー', 'おしゃれ空間', 'ショート〜ボブの再現性'],
    recommendFor: ['トレンド最優先', 'SNS映えするサロンを探している', 'ショートやボブでおしゃれを更新したい'],
    reasons: [
      '赤味を消した透明感カラー（グレージュ/ベージュ）に特化した薬剤とレシピ',
      '店内デザインとスタッフのSNS発信力が強く「Instagramで話題」という訴求ができる',
      'ショート〜ボブの似合わせが得意で、女性らしいシルエット作りに定評あり',
    ],
    menuExamples: ['カット+透明感カラー+TR ¥17,000前後', 'ブリーチなしダブルカラー ¥18,000〜', 'ショート/ボブカット ¥6,600〜'],
    priceGuide: 'カット+カラー 16,000〜22,000円',
    priceRange: { min: 16000, max: 22000, currency: 'JPY' },
    price: 16000,
    target: '感度の高い20代〜30代女性',
    bookingNote: 'SNS経由の予約が多く、特に土日の午後は1〜2週間前から埋まりやすい',
    mapEmbedUrl: 'https://www.google.com/maps?q=LOREN%20%E6%A0%84&output=embed',
    mapLink: 'https://www.google.com/maps/search/LOREN+%E6%A0%84/',
    link: 'https://www.google.com/maps/search/LOREN+%E6%A0%84/',
    access: '久屋大通駅 徒歩3分 / 栄駅 徒歩5分',
  },
  {
    id: 'the-order',
    rank: 3,
    name: 'THE ORDER（ジ オーダー）',
    category: '【デザインカラー】派手髪・個性派向け',
    tagline: 'ケアブリーチ×ハイトーンの名門スタジオ',
    area: '矢場町・栄',
    type: '特殊カラー / デザインカラー',
    description:
      'ケアブリーチを駆使したハイトーン、インナーカラー、ビビッドカラーまで幅広く対応。ファッションに馴染む計算されたデザイン提案でファッショニスタに人気です。',
    features: ['ケアブリーチ', 'ビビッドカラー', 'エッジの効いたデザイン'],
    recommendFor: ['ダブルカラーや派手髪に挑戦したい', 'アパレル・美容学生', '個性を表現したい'],
    reasons: [
      'ケアブリーチを使ったハイトーン・インナー・バレイヤージュなど難易度の高い施術を断らない',
      '奇抜さだけでなくファッションに馴染むバランスを提案するクリエイティブチーム',
      'アパレル店員や美容学生など感度の高い層からの信頼が厚い',
    ],
    menuExamples: ['ケアブリーチダブルカラー ¥24,000〜', 'インナーカラー（ブリーチ込） ¥20,000前後', 'ビビッドカラースペシャル ¥30,000〜'],
    priceGuide: 'カット+ダブルカラー 22,000〜33,000円',
    priceRange: { min: 22000, max: 33000, currency: 'JPY' },
    price: 22000,
    target: '派手髪・個性派を楽しみたい20代〜30代',
    bookingNote: 'カラープランは施術時間が長いため平日午後や夕方枠が人気。早めの相談がマスト',
    mapEmbedUrl: 'https://www.google.com/maps?q=THE%20ORDER%20%E7%9F%A2%E5%A0%B4%E7%94%BA&output=embed',
    mapLink: 'https://www.google.com/maps/place/THE+ORDER/',
    link: 'https://www.google.com/maps/place/THE+ORDER/',
    access: '矢場町駅 徒歩2分',
  },
  {
    id: 'londjeloud',
    rank: 4,
    name: 'Londjeloud 名古屋（ロンドジュルード）',
    category: '【髪質改善・艶髪】ダメージケア重視の大人向け',
    tagline: 'Londグループの髪質改善テクニックを名古屋で',
    area: '栄',
    type: '髪質改善 / 縮毛矯正 / 酸熱トリートメント',
    description:
      '東京・銀座の人気サロン「Lond」グループ。ハイグレード薬剤を使いながらも通いやすい価格帯で、艶髪ケアや縮毛矯正が得意です。個室・半個室空間で落ち着いて過ごせます。',
    features: ['酸熱トリートメント', '縮毛矯正', '半個室空間'],
    recommendFor: ['ダメージケアを最優先', '艶髪をキープしたい大人女性', '落ち着いた空間で過ごしたい'],
    reasons: [
      'Londグループの技術を栄で受けられ、価格とクオリティのバランスが良い',
      '縮毛矯正や酸熱トリートメントなど美髪メニューが充実し、伸ばしかけの髪も綺麗に整う',
      '半個室で周りを気にせず施術を受けられるため、リラックス志向の大人女性に最適',
    ],
    menuExamples: ['髪質改善トリートメント ¥12,000〜', 'カット+カラー+TR ¥16,000前後', '縮毛矯正+ケアコース ¥22,000〜'],
    priceGuide: 'カット+髪質改善カラー 14,000〜20,000円',
    priceRange: { min: 14000, max: 20000, currency: 'JPY' },
    price: 14000,
    target: '30代〜40代の大人女性 / ダメージケア重視',
    bookingNote: '平日昼間は比較的取りやすいが、梅雨時期の縮毛矯正シーズンは早めの予約推奨',
    mapEmbedUrl: 'https://www.google.com/maps?q=Londjeloud%20%E5%90%8D%E5%8F%A4%E5%B1%8B&output=embed',
    mapLink: 'https://www.google.com/maps/place/Londjeloud%E5%90%8D%E5%8F%A4%E5%B1%8B/',
    link: 'https://www.google.com/maps/place/Londjeloud%E5%90%8D%E5%8F%A4%E5%B1%8B/',
    access: '栄駅 徒歩4分',
  },
];

export default function NagoyaHairSalonNakakuPage() {
  const jsonLd = generateItemListSchema(salons);

  return (
    <main className="min-h-screen bg-rose-50">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <header className="bg-white shadow-sm">
        <div className="mx-auto max-w-5xl px-4 py-12 md:px-6">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-rose-500">Nagoya Hair Salon Guide</p>
          <h1 className="mt-3 text-3xl font-bold text-gray-900 md:text-4xl">
            名古屋・中区（栄/矢場町）<br className="md:hidden" />
            美容院おすすめ4選
          </h1>
          <p className="mt-4 text-gray-600 leading-relaxed">
            パーソナルカラー診断ページの構成を活かしつつ、「失敗したくない」「トレンドを追いたい」「派手髪を楽しみたい」「艶髪を育てたい」という4つのニーズにフォーカスしたまとめ記事です。
            価格帯・ターゲット層・予約の取りやすさ・Googleマップの位置情報まで一気に確認できます。
          </p>
          <div className="mt-6 text-sm text-gray-500">最終更新: {new Date().getFullYear()}年 / 監修: 名古屋ビューティー編集部</div>
        </div>
      </header>

      <section className="mx-auto max-w-5xl px-4 py-10 md:px-6">
        <h2 className="text-2xl font-bold text-gray-900">まずはタイプ別にサロンを把握</h2>
        <p className="mt-2 text-sm text-gray-600">
          それぞれの強みを一言で把握できるサマリーです。気になったサロンをタップして詳細に進んでください。
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

      <section className="mx-auto max-w-5xl px-4 pb-16 md:px-6">
        <h2 className="text-2xl font-bold text-gray-900">目的別おすすめヘアサロン 詳細レビュー</h2>
        <p className="mt-2 text-sm text-gray-600">
          それぞれのサロンについて、選ばれる理由・価格帯・ターゲット層・予約の注意点・Googleマップをまとめました。
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
                            公式/予約ページを見る
                        </a>
                        </div>
                    </div>
                    </div>
                </div>
                </article>

                { index === 0 && (
                    <div className="flex p-2 justify-center gap-3">
                        <a href="https://px.a8.net/svt/ejp?a8mat=45K8T3+SKTTE+45DI+6LP3L" rel="nofollow">
                        <img width="250" height="250" alt="" src="https://www24.a8.net/svt/bgt?aid=251207319048&wid=001&eno=01&mid=s00000019359001109000&mc=1"></img></a>
                        <img width="1" height="1" src="https://www19.a8.net/0.gif?a8mat=45K8T3+SKTTE+45DI+6LP3L" alt=""></img>
                        <a href="https://px.a8.net/svt/ejp?a8mat=45K8T3+UYK8I+D6Q+3N12TD" rel="nofollow">
                        <img width="300" height="250" alt="" src="https://www26.a8.net/svt/bgt?aid=251207319052&wid=001&eno=01&mid=s00000001709022008000&mc=1"></img></a>
                        <img width="1" height="1" src="https://www10.a8.net/0.gif?a8mat=45K8T3+UYK8I+D6Q+3N12TD" alt=""></img>
                    </div>
                )}
                { index === 1 && (
                    <div className="flex p-2 justify-center gap-3">
                        <a href="https://px.a8.net/svt/ejp?a8mat=45K8T2+757A42+4RJK+601S1" rel="nofollow">
                        <img width="300" height="250" alt="" src="https://www25.a8.net/svt/bgt?aid=251207318432&wid=001&eno=01&mid=s00000022232001008000&mc=1"></img></a>
                        <img width="1" height="1" src="https://www10.a8.net/0.gif?a8mat=45K8T2+757A42+4RJK+601S1" alt=""></img>
                        <a href="https://px.a8.net/svt/ejp?a8mat=45IJ10+BDM8Z6+5TSI+5YZ75" rel="nofollow">
                        <img width="300" height="250" alt="" src="https://www23.a8.net/svt/bgt?aid=251127252688&wid=001&eno=01&mid=s00000027189001003000&mc=1"></img></a>
                        <img width="1" height="1" src="https://www18.a8.net/0.gif?a8mat=45IJ10+BDM8Z6+5TSI+5YZ75" alt=""></img>
                    </div>
                )}
                { index === 2 && (
                    <div className="flex p-2 justify-center gap-3">
                        <a href="https://px.a8.net/svt/ejp?a8mat=45K8T3+4RGV02+1KYA+2Z8DRL" rel="nofollow">
                        <img width="300" height="250" alt="" src="https://www24.a8.net/svt/bgt?aid=251207319288&wid=001&eno=01&mid=s00000007381018011000&mc=1"></img></a>
                        <img width="1" height="1" src="https://www17.a8.net/0.gif?a8mat=45K8T3+4RGV02+1KYA+2Z8DRL" alt=""></img>
                        <a href="https://px.a8.net/svt/ejp?a8mat=45K8T3+2WSB8Y+5ESS+5ZMCH" rel="nofollow">
                        <img width="300" height="250" alt="" src="https://www20.a8.net/svt/bgt?aid=251207319176&wid=001&eno=01&mid=s00000025246001006000&mc=1"></img></a>
                        <img width="1" height="1" src="https://www19.a8.net/0.gif?a8mat=45K8T3+2WSB8Y+5ESS+5ZMCH" alt=""></img>
                    </div>
                )}
                { index === 3 && (
                    <div className="flex p-2 justify-center gap-3">
                        <a href="https://px.a8.net/svt/ejp?a8mat=45K8T3+2QTZ76+5DM0+631SX" rel="nofollow">
                        <img width="300" height="250" alt="" src="https://www23.a8.net/svt/bgt?aid=251207319166&wid=001&eno=01&mid=s00000025092001022000&mc=1"></img></a>
                        <img width="1" height="1" src="https://www19.a8.net/0.gif?a8mat=45K8T3+2QTZ76+5DM0+631SX" alt=""></img>
                        <a href="https://px.a8.net/svt/ejp?a8mat=45K8T3+2WSB8Y+5ESS+5ZMCH" rel="nofollow">
                        <img width="300" height="250" alt="" src="https://www20.a8.net/svt/bgt?aid=251207319176&wid=001&eno=01&mid=s00000025246001006000&mc=1"></img></a>
                        <img width="1" height="1" src="https://www19.a8.net/0.gif?a8mat=45K8T3+2WSB8Y+5ESS+5ZMCH" alt=""></img>
                    </div>
                )}
            </React.Fragment>
          ))}
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto max-w-5xl px-4 py-10 md:px-6">
          <h2 className="text-2xl font-bold text-gray-900">予約で失敗しないための+αアドバイス</h2>
          <ul className="mt-4 space-y-3 text-sm text-gray-700">
            <li>
              <span className="font-semibold text-rose-600">価格帯:</span> カット+カラーが15,000〜20,000円前後ならミドルハイクラス。デザインカラーはブリーチ回数で料金が大きく変わるので、相談時に「希望の色味と予算」をセットで伝えると安心です。
            </li>
            <li>
              <span className="font-semibold text-rose-600">ターゲット年代:</span> AFLOATとLondjeloudは大人女性、LORENとTHE ORDERは20代〜30代の感度高め層との相性が抜群。自分のライフスタイルに近いお客様が多いサロンは、仕上がりイメージの共有がスムーズです。
            </li>
            <li>
              <span className="font-semibold text-rose-600">予約の取りやすさ:</span> トップスタイリストは土日の午前枠から埋まります。気になるサロンはGoogleマップで場所を押さえつつ、2週間前までにWeb予約を入れておくのが中区攻略のコツです。
            </li>
            <li>
              <span className="font-semibold text-rose-600">Googleマップ:</span> 栄・矢場町エリアはビルが密集しているため、地図のストリートビューで入り口をチェックしておくと迷いません。友人とシェアして待ち合わせにも便利です。
            </li>
          </ul>
          <p className="mt-6 text-sm text-gray-600">
            それぞれのサロンが得意とする領域は異なるので、この記事をブックマークして目的に合わせて選んでみてください。
          </p>
        </div>
      </section>
    </main>
  );
}
