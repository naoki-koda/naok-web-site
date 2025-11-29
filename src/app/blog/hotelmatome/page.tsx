import { kosugiMaru } from '@/app/ui/fonts';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

type RankingItem = {
  rank: number;
  brand: string;
  name: string;
  summary: string;
  reservation: string[];
  points: string[];
  showcase?: {
    image: string;
    alt: string;
    bullets: string[];
  };
};

type Message = {
  id: number;
  role: 'user' | 'advisor';
  name: string;
  text: string;
};

const selectionCriteria = [
  {
    title: '予約体験の快適さ',
    detail: '公式アプリやWebでの検索・決済・モバイルチェックインなど、旅前のストレスを減らせるか。',
  },
  {
    title: 'ポイント付与率と使いやすさ',
    detail: '宿泊金額に対する還元率、クレジットカード連携、無料宿泊への交換のしやすさを重視。',
  },
];

const messages: Message[] = [
  {
    id: 1,
    role: 'user',
    name: 'ご相談者',
    text: '出張や旅行が多いので、どのホテルブランドでポイントを貯めるべきか迷っています……。',
  },
  {
    id: 2,
    role: 'advisor',
    name: 'アドバイザー',
    text: 'アプリの使いやすさとポイント還元のバランスで選ぶのが近道です。予約の手軽さも旅の満足度に直結しますよ。',
  },
  {
    id: 3,
    role: 'user',
    name: 'ご相談者',
    text: 'OTAやカードの特典も含めると情報が散らばっていて、比較しづらいんですよね。',
  },
  {
    id: 4,
    role: 'advisor',
    name: 'アドバイザー',
    text: 'この記事では、外資・国内チェーンをまとめてランキング化しました。まずは1位のマリオットから順番に見ていきましょう。',
  },
];

const ranking: RankingItem[] = [
  {
    rank: 1,
    brand: 'Marriott Bonvoy',
    name: 'マリオット',
    summary:
      '世界8,000軒超のホテルを横断できるMarriott Bonvoyアプリは、検索→予約→決済→チャット→モバイルキーまで一気通貫で完結。Bonvoyアメリカン・エキスプレスカードとの連携で、日常決済からも爆発的にポイントが貯まります。',
    reservation: [
      'モバイルチェックイン／チェックアウト、モバイルキー、スタッフとのチャットをアプリで完結',
      'Bonvoyアプリ上でアップグレードやレイトチェックアウトのリクエストが可能',
    ],
    points: [
      '1米ドルにつき10ポイント（ラグジュアリー含む多くのブランド）＋ステータスで25〜75%のボーナス',
      'Marriott Bonvoy アメックスで100円=3ポイント／カード継続で15泊分の宿泊実績付与',
    ],
    showcase: {
      image: '/mariottapp.jpg',
      alt: 'Marriott Bonvoyアプリのスクリーンショット',
      bullets: [
        'アプリ全体が日本語対応でUIも直感的',
        'マップに料金と位置が同時表示され、旅程が立てやすい',
        'マップから気になるホテルをタップすると即予約画面へ遷移',
        '予約詳細からワンタップでマップへ戻れ、候補比較がスムーズ',
      ],
    },
  },
  {
    rank: 2,
    brand: 'Hilton Honors',
    name: 'ヒルトン',
    summary:
      'Hilton Honorsアプリは「客室指定」「デジタルキー」「チームメンバーとのチャット」など非接触機能が充実。ポイントは10ポイント/米ドルが基本で、ダブルポイントキャンペーンも頻繁に実施されます。',
    reservation: [
      'アプリからフロア平面図を見ながら客室を指定できる',
      'ウォレット搭載のデジタルキーでフロントをスキップ、家族分のキー共有も可能',
    ],
    points: [
      '1米ドル=10ポイント（トゥルー by Hiltonなど一部ブランドは5ポイント）',
      'シルバー以上で15〜100%のボーナス。ヒルトン・オナーズアメックスで決済ポイント＋ゴールド特典',
    ],
    showcase: {
      image: '/hiltonapp.jpg',
      alt: 'Hilton Honorsアプリの画面',
      bullets: [
        'インターフェースは英語中心で日本語非対応なのが惜しい',
        'スマホアプリで客室選択・デジタルキーが使えるため、非対面チェックインがスムーズ',
      ],
    },
  },
  {
    rank: 3,
    brand: 'Seibu Prince Club',
    name: 'プリンスホテル',
    summary:
      '西武プリンスクラブアプリは宿泊予約に加え、西武鉄道・スポーツ・レジャー施設のチケット購入ともポイントを共通化。国内外のプリンスホテル／ザ・プリンスギャラリーを同じIDで管理できるのが強みです。',
    reservation: [
      'アプリで宿泊・レストラン・ゴルフを一括予約、会員専用料金を即時表示',
      'デジタル会員証でチェックイン、館内のキャッシュレス決済もポイント加算',
    ],
    points: [
      '110円（税込）ごとに1ポイント。1ポイント=1円で利用でき、ダイヤモンド会員は＋7%のボーナス',
      '西武線定期やプリンスカード決済でもポイントが貯まるため日常利用との相性が良い',
    ],
  },
  {
    rank: 4,
    brand: 'MGH Rewards Club',
    name: '三井ガーデンホテル',
    summary:
      'MGH Rewards Clubアプリは、三井ガーデン／sequence／ザ セレスティンといったMGH系列を横断管理。アプリ限定プランや事前チェックイン機能が使いやすく、比較的手軽にステータスが上がるのも魅力です。',
    reservation: [
      'アプリで最安値保証プランを提示、QRコードでスピーディーにチェックイン',
      '宿泊レシートや請求書をアプリで閲覧できるため出張精算が簡単',
    ],
    points: [
      '宿泊料金の5%をポイント還元（100円=5pt）。1pt=1円相当で宿泊代に充当',
      '利用回数に応じて7〜9%まで還元率アップ、アプリ限定で即時ポイント利用可能',
    ],
  },
  {
    rank: 5,
    brand: 'APAポイント',
    name: 'アパホテル',
    summary:
      '「アパ直」アプリは検索スピードと事前チェックイン機能が秀逸。ホテル到着時はQRコードをかざすだけで鍵を受け取り、アプリで領収書も取得できます。ポイントはアプリ・公式サイト経由なら常時10%還元。全国700店以上で使えるのが圧倒的です。',
    reservation: [
      '現在地から最安値ホテルを瞬時に検索、キャッシュレス決済でチェックイン時間を短縮',
      'アプリ上で部屋番号・暗証番号を確認できるスマートパス発行に対応',
    ],
    points: [
      'アパ直（公式アプリ／Web）からの予約は宿泊料金の10%をポイント還元＋即時利用可',
      '会員ランクが上がるとボーナスポイントやレイトチェックアウト特典が追加',
    ],
  },
  {
    rank: 6,
    brand: 'Toyoko Inn Club',
    name: '東横イン',
    summary:
      '東横INNアプリと公式サイトはシンプルで軽く、ビジネス客が数分で予約を完了できる導線が好評。クラブカード（アプリ会員証対応）を持てば、宿泊のたびにポイントが貯まり、10ポイントで1泊無料というわかりやすい仕組みです。',
    reservation: [
      'アプリで周辺ホテルの空室・料金を一発比較し、24時間いつでも即予約',
      'アプリ会員証を提示するだけでチェックインが完了、連泊時は部屋番号が固定されやすい',
    ],
    points: [
      '泊数ポイント制（1泊=1ポイント）。10ポイントでシングル1泊無料',
      '平日5%／休日20%の割引がある会員料金に加え、キャッシュレス決済でさらに1ポイント付与',
    ],
  },
  {
    rank: 7,
    brand: 'Hoshino Resorts',
    name: '星野リゾート',
    summary:
      '星野リゾートはホテル運営に特化する方針で、スマホアプリはなくWeb予約中心。OMOブランドに導入されたOMOメンバーシップでは直営サイト予約でポイントが付与されますが、ハイエンドの「星のや」には適用されないのが惜しいポイントです。一方で、システムの自社開発化を行いITコストを抑えて現場サービスに投資するスタンスが徹底されています。',
    reservation: [
      '公式Webでブランド横断のプラン検索が可能。滞在前アンケートで体験プログラムを提案',
      'OMOブランドではOMOベースのチェックインカウンターやアクティビティ予約がスムーズ',
    ],
    points: [
      'OMOメンバーシップは宿泊料金の約5%相当がポイント還元。ただし星のや・リゾナーレは対象外',
      'ポイントはOMOアクティビティやグッズ購入に充当可能で、現地での使い切りもしやすい',
    ],
  },
];

const dataSources = [
  { name: 'Marriott Bonvoy – Earn Points', url: 'https://www.marriott.com/loyalty/earn/hotels.mi' },
  { name: 'Hilton Honors Program', url: 'https://www.hilton.com/en/hilton-honors/' },
  { name: 'World of Hyatt – Ways to Earn', url: 'https://world.hyatt.com/content/gp/en/rewards/earn-points.html' },
  { name: 'Seibu Prince Club', url: 'https://club.seibu-prince.com/' },
  { name: 'MGH Rewards Club', url: 'https://www.gardenhotels.co.jp/mgh-rewards/' },
  { name: 'アパ直（APA公式サイト）', url: 'https://www.apahotel.com/' },
  { name: '東横INNクラブカード', url: 'https://www.toyoko-inn.com/card/' },
  { name: '星野リゾート公式サイト', url: 'https://www.hoshinoresorts.com/' },
];

export default function Page() {
  const currentYear = new Date().getFullYear();
  return (
    <main className="bg-gradient-to-b from-rose-50 via-white to-slate-50">
      <article className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
        <header className="rounded-[32px] bg-white/90 p-10 shadow-xl shadow-rose-100 ring-1 ring-rose-100">
          <p className="text-sm font-semibold uppercase tracking-widest text-rose-500">Hotel Loyalty Ranking</p>
          <h1 className={`mt-4 text-3xl font-bold text-slate-900 sm:text-4xl ${kosugiMaru.className}`}>
            会員になるべきホテルブランドの予約・ポイントシステム
          </h1>
          <p className="mt-6 text-lg leading-relaxed text-slate-700">
            旅行のたびにホテルを変える楽しさもありますが、ロイヤリティプログラムを活用するとアップグレードや無料宿泊などの特典が加速します。ここでは
            <span className="font-semibold text-rose-600"> 予約体験 </span>
            と<span className="font-semibold text-rose-600"> ポイント還元</span>の2軸で国内外の大手チェーンを比較しました。
          </p>
          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            {selectionCriteria.map((item) => (
              <div key={item.title} className="rounded-2xl border border-rose-100 bg-rose-50/70 p-4">
                <p className="text-sm font-semibold text-rose-600">{item.title}</p>
                <p className="mt-2 text-sm text-slate-700 leading-relaxed">{item.detail}</p>
              </div>
            ))}
          </div>
        </header>
      <header className="mb-12 text-center">
        <span className="inline-block px-3 py-1 mb-4 text-xs font-semibold tracking-wider text-blue-600 uppercase bg-blue-100 rounded-full">
          Business English Strategy
        </span>
        <h1 className="text-2xl font-extrabold leading-tight text-gray-900 md:text-4xl lg:text-5xl">
          【{currentYear}年版】<br className="hidden sm:block" />
          国内ホテル<br/>おすすめ8選！<br />
          <span className="text-blue-600">会員になるべきホテルブランドの予約<br/>ポイントシステム</span>
        </h1>
        <p className="mt-6 text-lg text-gray-600">
            旅行のたびにホテルを変える楽しさもありますが、ロイヤリティプログラムを活用するとアップグレードや無料宿泊などの特典が加速します。ここでは
            <span className="font-semibold text-rose-600"> 予約体験 </span>
            と<span className="font-semibold text-rose-600"> ポイント還元</span>の2軸で国内外の大手チェーンを比較しました。
        </p>
        <div className="mt-4 text-sm text-gray-500">
          最終更新: 2025年11月
        </div>
      </header>

        <section className="mt-12 rounded-[32px] border border-rose-100/80 bg-white/95 p-8 shadow-lg shadow-rose-100">
          <h2 className="text-2xl font-bold text-slate-900">結論：まず押さえておくべきブランド</h2>
          <p className="mt-3 text-sm leading-relaxed text-slate-700">
            公式アプリの使いやすさ・ポイントの貯まりやすさの双方で高評価だったのは以下の順番でした。Marriott BonvoyとHilton
            Honorsはアプリ機能・還元率ともに頭一つ抜けており、国内チェーンではプリンスホテルと三井ガーデンホテルがバランス良く高評価です。
          </p>
          <ol className="mt-5 space-y-2 text-sm font-semibold text-slate-800">
            <li>1位：マリオット（Marriott International）</li>
            <li>2位：ヒルトン（Hilton Hotels & Resorts）</li>
            <li>3位：プリンスホテル（Prince Hotels）</li>
            <li>4位：三井ガーデンホテル（Mitsui Garden Hotel）</li>
            <li>5位：アパホテル</li>
            <li>6位：東横イン</li>
            <li>7位：星野リゾート</li>
          </ol>
        </section>

        <section className="mt-12 rounded-[32px] border border-slate-100 bg-white/95 p-6 shadow-lg shadow-slate-100">
          <h3 className="text-xl font-semibold text-slate-900">アドバイザーとのやり取り</h3>
          <div className="mt-6 space-y-4">
            {messages.map((msg) => {
              const isAdvisor = msg.role === 'advisor';
              return (
                <div
                  key={msg.id}
                  className={`flex items-start gap-3 ${isAdvisor ? 'justify-start' : 'justify-end'}`}
                >
                  {isAdvisor && (
                    <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-blue-600 text-xs font-semibold text-white">
                      A
                    </div>
                  )}
                  <div
                    className={`max-w-[80%] rounded-2xl px-4 py-3 text-sm leading-relaxed shadow-sm ${
                      isAdvisor ? 'bg-white text-slate-900 border border-slate-100' : 'bg-emerald-500 text-white'
                    }`}
                  >
                    <p className="mb-1 text-[11px] font-semibold opacity-70">{msg.name}</p>
                    <p>{msg.text}</p>
                  </div>
                  {!isAdvisor && (
                    <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-emerald-500 text-xs font-semibold text-white">
                      Q
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </section>

        <section className="mt-14 space-y-10">
          {ranking.map((hotel, idx) => (
            <React.Fragment key={hotel.rank}>
                <article
                key={hotel.rank}
                className="rounded-[32px] border border-slate-100 bg-white/95 p-8 shadow-lg shadow-slate-100"
                >
                <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                    <div>
                    <span className="inline-flex items-center rounded-full bg-rose-500/15 px-3 py-1 text-xs font-semibold uppercase tracking-widest text-rose-600">
                        Ranking #{hotel.rank}
                    </span>
                    <h2 className="mt-3 text-2xl font-bold text-slate-900">
                        {hotel.brand} <span className="text-base font-semibold text-slate-500">({hotel.name})</span>
                    </h2>
                    </div>
                    <div className="text-sm font-semibold text-slate-500">予約体験 × ポイント還元で評価</div>
                </div>
                <p className="mt-4 text-sm leading-relaxed text-slate-700">{hotel.summary}</p>
                <div className="mt-6 grid gap-5 lg:grid-cols-2">
                    <div className="rounded-2xl bg-slate-50 p-5">
                    <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">Reservation UX</p>
                    <ul className="mt-3 list-disc space-y-2 pl-5 text-sm leading-relaxed text-slate-700">
                        {hotel.reservation.map((point) => (
                        <li key={point}>{point}</li>
                        ))}
                    </ul>
                    </div>
                <div className="rounded-2xl bg-white p-5 ring-1 ring-slate-100">
                    <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">Point Program</p>
                    <ul className="mt-3 list-disc space-y-2 pl-5 text-sm leading-relaxed text-slate-700">
                    {hotel.points.map((point) => (
                        <li key={point}>{point}</li>
                    ))}
                    </ul>
                </div>
                </div>
                {hotel.showcase && (
                <div className="mt-8 flex flex-col gap-6 md:flex-row md:items-center">
                    <div className="shrink-0 overflow-hidden rounded-2xl border border-slate-100 bg-slate-50 p-4 md:w-1/2">
                    <Image
                        src={hotel.showcase.image}
                        alt={hotel.showcase.alt}
                        width={560}
                        height={360}
                        className="h-auto w-full rounded-xl object-cover"
                    />
                    </div>
                    <div className="flex-1 space-y-3 text-sm leading-relaxed text-slate-700">
                    {hotel.showcase.bullets.map((point) => (
                        <p key={point} className="rounded-2xl bg-slate-50 px-4 py-3">
                        {point}
                        </p>
                    ))}
                    </div>
                </div>
                )}
            </article>
            {idx === 1 && (
            <div className="mt-10 flex justify-center">
                <div>
                <a href="https://px.a8.net/svt/ejp?a8mat=45IGP6+1XNQK2+4XZI+5ZU29" rel="nofollow">
                <img  width="468" height="60" alt="" src="https://www28.a8.net/svt/bgt?aid=251124234117&wid=001&eno=01&mid=s00000023067001007000&mc=1"></img></a>
                <img width="1" height="1" src="https://www17.a8.net/0.gif?a8mat=45IGP6+1XNQK2+4XZI+5ZU29" alt=""></img>
                </div>
            </div>
            )}
            {idx === 3 && (
            <div className="mt-10 flex justify-center">
              <a href="https://px.a8.net/svt/ejp?a8mat=45IGP6+25EDF6+25KS+6EU6P" rel="nofollow">
              <img width="300" height="250" alt="" src="https://www27.a8.net/svt/bgt?aid=251124234130&wid=001&eno=01&mid=s00000010054001077000&mc=1"></img></a>
              <img width="1" height="1" src="https://www17.a8.net/0.gif?a8mat=45IGP6+25EDF6+25KS+6EU6P" alt=""></img>
            </div>
            )}
            {idx === 5 && (
            <div className="mt-10 flex justify-center">
              <a href="https://px.a8.net/svt/ejp?a8mat=45IGP6+28DJG2+5JEM+5Z6WX" rel="nofollow">
              <img width="300" height="250" alt="" src="https://www24.a8.net/svt/bgt?aid=251124234135&wid=001&eno=01&mid=s00000025843001004000&mc=1"></img></a>
              <img width="1" height="1" src="https://www19.a8.net/0.gif?a8mat=45IGP6+28DJG2+5JEM+5Z6WX" alt=""></img>
            </div>
            )}
          </React.Fragment>
          ))}
        </section>
          <div className="mt-10 flex justify-center">
            <a href="https://px.a8.net/svt/ejp?a8mat=45IGP6+2A5U9E+4H2M+6BEQ9" rel="nofollow">
            <img width="300" height="250" alt="" src="https://www20.a8.net/svt/bgt?aid=251124234138&wid=001&eno=01&mid=s00000020875001061000&mc=1"></img></a>
            <img width="1" height="1" src="https://www19.a8.net/0.gif?a8mat=45IGP6+2A5U9E+4H2M+6BEQ9" alt=""></img>
          </div>
        <section className="mt-16 rounded-[32px] bg-slate-900 p-8 text-slate-100">
          <h3 className="text-2xl font-semibold">選び方のヒント</h3>
          <div className="mt-6 grid gap-6 md:grid-cols-3">
            {['出張が多いなら全国展開＆泊数ポイント制（東横INN・アパ）', '海外旅行派は外資チェーンでモバイルキーとアップグレードを重視', '国内旅メインなら国内チェーンのアプリ限定プラン・交通系ポイント連携がお得'].map((tip) => (
              <div key={tip} className="rounded-2xl border border-slate-800 bg-slate-800/60 p-4">
                <p className="text-sm leading-relaxed text-slate-100">{tip}</p>
              </div>
            ))}
          </div>
          <p className="mt-6 text-sm leading-relaxed text-slate-300">
            直販アプリ経由の予約は、OTAよりも柔軟なキャンセルポリシーやレイトチェックアウト特典がつくケースが多いので、ポイント還元と合わせて比較検討するのがおすすめです。
          </p>
        </section>

        <section className="mt-16 rounded-[32px] bg-white/95 p-8 shadow-lg shadow-slate-100">
          <h3 className="text-xl font-semibold text-slate-900">参考情報</h3>
          <p className="mt-2 text-sm text-slate-600">公式サイトとロイヤリティプログラムの公開情報をもとに整理しました。</p>
          <ul className="mt-5 grid gap-3 sm:grid-cols-2">
            {dataSources.map((source) => (
              <li key={source.url}>
                <Link
                  href={source.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm font-semibold text-rose-600 hover:text-rose-800"
                >
                  <span>{source.name}</span>
                  <span aria-hidden="true">↗</span>
                </Link>
              </li>
            ))}
          </ul>
        </section>
      </article>
    </main>
  );
}
