import { kosugiMaru } from '@/app/ui/fonts';
import type { Metadata } from 'next';
import Link from 'next/link';
import React from 'react';
// app/components/ConversationIntro.tsx
type Role = "advisor" | "user";

type Message = {
  id: number;
  role: Role;
  name: string;
  text: string;
};

const messages: Message[] = [
  {
    id: 1,
    role: "user",
    name: "ご相談者",
    text: "名古屋で造作家具をお願いしたいんですが、どこに頼めばいいか全然わからなくて……。"
  },
  {
    id: 2,
    role: "advisor",
    name: "アドバイザー",
    text: "でしたら、職人さんの技術と提案力のバランスが良いお店を選ぶのがポイントですね。"
  },
  {
    id: 3,
    role: "user",
    name: "ご相談者",
    text: "ネットで調べても情報がバラバラで、比較しづらいんですよね。"
  },
  {
    id: 4,
    role: "advisor",
    name: "アドバイザー",
    text: "この記事では、名古屋でおすすめの造作家具店を厳選してご紹介します。まずは第1位の袖野建具店さんから見ていきましょう。"
  }
];
const selectionCriteria = [
  {
    title: '職人の実績と専門性',
    detail: '造作家具＋建具の実績年数や、木材・石材など素材提案の幅を確認。',
  },
  {
    title: '設計～施工の伴走力',
    detail: 'ヒアリングから図面・3D提案まで内製しているか、打ち合わせの工数を確認。',
  },
  {
    title: '施工エリアとアフター',
    detail: '名古屋市内はもちろん、近郊対応・メンテナンス窓口の明記を評価。',
  },
];

const ranking = [
  {
    rank: 1,
    name: '袖野建具店',
    tagline: '創業70年以上。建具と造作家具を一気通貫で任せられる熱田区の老舗',
    area: '名古屋市熱田区 / 名古屋市内・愛知県近郊に対応',
    website: 'https://www.sodeno-tategu.jp/',
    summary:
      '1940年代創業の袖野建具店は、障子・襖・框戸など木製建具と造作家具を一人の職人が手掛けるファクトリー。メラミン化粧板を含む多彩な素材から、寸法ぴったりの建具・収納・造作家具を提案し、暮らしの変化に合わせた修繕にも応えてくれます。',
    highlights: [
      '引き戸・障子・格子スクリーン・洗面・収納など「木で作れるものはほぼ全て対応」',
      '名古屋市16区＋知多・三河まで施工エリアを明記。張替えだけの依頼にも柔軟に対応',
      '「図面に現れない触感を大切にする」ポリシーで、オーダー後の調整もきめ細かい',
    ],
    contact: {
      address: '〒456-0057 名古屋市熱田区五番町7-6',
      note: '電話・フォーム相談／障子張替えや造作家具の無料相談が可能',
    },
  },
  {
    rank: 2,
    name: 'K’s Furniture（ケイズファニチャー）',
    tagline: '「暮らしにとけこむ家具」をテーマにした日進市発の造作専門チーム',
    area: '日進市浅田町 / 名古屋〜長久手・豊田方面まで訪問',
    website: 'https://ks-furniture.net/',
    summary:
      '壁面収納・カップボード・洗面台などの造作家具を、3Dイメージ＋素材サンプルで共有しながら作り込む工房。2〜3回の打ち合わせで仕様を固め、製作期間は1〜2か月が目安。無料の概算見積と3D提案で納得いくまで相談できます。',
    highlights: [
      '愛知県日進市の事務所にショールームを併設し、実物サンプルを触りながら打ち合わせ可能',
      '3Dイメージ図を無料で作成。採寸・現地確認までは無償で進められる',
      '壁面収納、キッチン背面収納、洗面、玄関収納などライフスタイル別の施工事例が豊富',
    ],
    contact: {
      address: '〒470-0124 愛知県日進市浅田町森下12-1 浅井ビル1A',
      note: 'TEL 052-875-8455 / 365日9:00〜18:00で相談受付',
    },
  },
  {
    rank: 3,
    name: 'クラフト株式会社（クラフトギャラリー鶴舞）',
    tagline: '自社工場×デザイナー直対応。天然石も扱う高難度造作を得意とする上場',
    area: '名古屋市中区千代田 / 地下鉄鶴舞駅1番出口徒歩1分',
    website: 'https://craft-gallery.jp/',
    summary:
      '鶴舞にショールームを構え、ヒアリングから1mm単位の設計、社内工場での製造までワンストップ。天然石カウンターや壁面収納など大型造作を得意とし、耐震仕様まで考慮した提案が魅力です。営業マンを介さずデザイナーと直談判でき、コストを抑えた高級感を実現します。',
    highlights: [
      '天然石や無垢材を使った高難度オーダーにも対応する自社工場体制',
      'デザイナーが直接ヒアリング＆提案。mm単位で図面化してから着工',
      'ショールームは予約制で駐車場あり、TEL 052-212-8712 で相談可',
    ],
    contact: {
      address: '〒460-0012 名古屋市中区千代田2-14-13 鵜飼ビル1F',
      note: 'ショールームは完全予約制／デザイナーが打ち合わせを担当',
    },
  },
  {
    rank: 4,
    name: 'DOUGU株式会社',
    tagline: '機能から逆算する設計思想で住宅・店舗の造作を提案',
    area: '日進市竹の山 / 名古屋市内・東海エリア',
    website: 'https://dougu-studio.com/',
    summary:
      '「使いやすさから機能美を導く」コンセプトで、住宅の収納家具やキッチンはもちろん、店舗什器・オフィス造作まで幅広く製作。木材から大理石・樹脂まで素材をフラットに提案し、アフターメンテナンスまで自社で面倒を見る体制です。',
    highlights: [
      '相談→ヒアリング→図面→製作→施工→メンテナンスまで7ステップを公開',
      '住宅に限らず、店舗やマンション共用部など多用途の造作経験があるスタッフが対応',
      '2006年創業。所在地・代表名・事業内容を公開し、信頼性が高い',
    ],
    contact: {
      address: '〒470-0136 愛知県日進市竹の山1-618-2',
      note: 'お問い合わせフォーム・電話で随時受付',
    },
  },
  {
    rank: 5,
    name: 'LUFT（ルフトインテリア）',
    tagline: 'オーダー家具とインテリアコーディネートを一体で頼める仕立てる家具店',
    area: '愛知県一宮市（名古屋から車で約30分） / 愛知・岐阜・三重ほか広域対応',
    website: 'https://luft-interior.com/',
    summary:
      '天然木のテレビボードやフロート収納などフルオーダー家具を中心に、照明・ファブリック・観葉植物までワンストップで提案するショップ。熟練職人による国内製造にこだわり、インテリアデザイナーがヒアリング〜プレゼンまで伴走。カフェ併設のショールームで、コーディネートまでまとめて依頼できます。',
    highlights: [
      '尾張エリアのショールーム×カフェで、暮らし全体をイメージしながら相談',
      '施工エリアは愛知全域＋岐阜・三重・滋賀・京都・奈良・福井・長野南部・静岡西部までカバー',
      'インテリアデザイナーが図面・プレゼン資料を作り込み、モデルルーム等の案件実績も多数',
    ],
    contact: {
      address: '〒491-0931 愛知県一宮市大和町馬引字古宮59-4',
      note: 'TEL 0586-52-7109 / 火・水曜定休 11:00〜17:00',
    },
  },
];

const dataSources = [
  { name: 'Web幹事「名古屋市の優良ホームページ制作会社20社」', url: 'https://web-kanji.com/posts/nagoya-city' },
  { name: '袖野建具店 公式サイト', url: 'https://www.sodeno-tategu.jp/' },
  { name: 'K’s Furniture 公式サイト', url: 'https://ks-furniture.net/' },
  { name: 'クラフト株式会社 公式サイト', url: 'https://craft-gallery.jp/' },
  { name: 'DOUGU株式会社 公式サイト', url: 'https://dougu-studio.com/' },
  { name: 'LUFT インテリア公式サイト', url: 'https://luft-interior.com/' },
];

export const metadata: Metadata = {
  title: '名古屋のおすすめ造作家具店まとめ｜袖野建具店を筆頭に厳選5社',
  description:
    'Web幹事の記事構成を参考にしながら、名古屋でオーダー家具・造作家具を相談できるおすすめ5社を紹介。袖野建具店を第1位に、施工エリアや打ち合わせ体制、公式サイト情報を整理しました。',
};

export default function Page() {
  return (
    <main className="bg-gradient-to-b from-amber-50 via-white to-slate-50">
      <article className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
        <section className="rounded-3xl bg-white/80 p-8 shadow-xl ring-1 ring-amber-100">
          <p className="text-sm font-semibold tracking-widest text-amber-600">Nagoya Built-in Furniture Guide</p>
          <h1 className={`mt-4 text-3xl font-bold text-slate-900 sm:text-4xl ${kosugiMaru.className}`}>
            名古屋のおすすめ造作家具店まとめ
          </h1>
          <p className="mt-6 text-lg leading-relaxed text-slate-700">
            Web幹事のまとめ記事形式を参考に、{ranking.length}社を横並びで調査。 第一位には
            <span className="font-semibold text-amber-700"> 袖野建具店</span>
            を選出しました。建具・造作の老舗からデザイナー常駐のショップまで、公式サイトで開示されている特徴・施工エリア・相談方法を整理しています。
          </p>
          <div className="mt-3 space-y-4">
              {messages.map((msg) => {
              const isAdvisor = msg.role === "advisor";  
              return (
                  <div
                  key={msg.id}
                  className={`flex items-start gap-3 ${
                      isAdvisor ? "justify-start" : "justify-end"
                  }`}
                  >
                  {/* アイコン（丸いイニシャル） */}
                  {isAdvisor && (
                      <div className="flex h-9 w-9 items-center justify-center rounded-full bg-blue-600 text-xs font-semibold text-white shrink-0">
                      A
                      </div>
                  )}  
                  <div
                      className={`max-w-[80%] rounded-2xl px-4 py-3 text-sm leading-relaxed shadow-sm
                      ${
                          isAdvisor
                          ? "bg-white text-slate-900 border border-slate-100"
                          : "bg-emerald-500 text-white"
                      }`}
                  >
                      <p className="mb-1 text-[11px] font-semibold opacity-70">
                      {msg.name}
                      </p>
                      <p>{msg.text}</p>
                  </div>  
                  {!isAdvisor && (
                      <div className="flex h-9 w-9 items-center justify-center rounded-full bg-emerald-500 text-xs font-semibold text-white shrink-0">
                      Q
                      </div>
                  )}
                  </div>
              );
              })}
          </div>
          <div className="mt-8 grid gap-4 sm:grid-cols-3">
            {selectionCriteria.map((item) => (
              <div key={item.title} className="rounded-2xl border border-amber-100 bg-amber-50/70 p-4">
                <p className="text-sm font-semibold text-amber-600">{item.title}</p>
                <p className="mt-2 text-sm text-slate-700 leading-relaxed">{item.detail}</p>
              </div>
            ))}
          </div>
        </section>
        <div className="p-3">
         <a href="https://px.a8.net/svt/ejp?a8mat=45IGP5+5SDQIA+40T2+5Z6WX" rel="nofollow">
         <img width="468" height="60" alt="" src="https://www28.a8.net/svt/bgt?aid=251124233350&wid=001&eno=01&mid=s00000018767001004000&mc=1"></img></a>
         <img width="1" height="1" src="https://www11.a8.net/0.gif?a8mat=45IGP5+5SDQIA+40T2+5Z6WX" alt=""></img>
        </div>
        <section className="space-y-10">
          {ranking.map((shop, index) => (
            <React.Fragment key={shop.rank}>
            <div
              key={shop.rank}
              className="rounded-3xl border border-slate-100 bg-white/90 p-8 shadow-lg shadow-slate-100 transition hover:-translate-y-1 hover:shadow-amber-100/60"
            >
              <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                <div>
                  <span className="inline-flex items-center rounded-full bg-amber-500/15 px-3 py-1 text-xs font-semibold uppercase tracking-widest text-amber-700">
                    Ranking #{shop.rank}
                  </span>
                  <h2 className="mt-3 text-2xl font-bold text-slate-900">{shop.name}</h2>
                  <p className="text-sm text-slate-600">{shop.area}</p>
                </div>
                <Link
                  href={shop.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center rounded-full border border-amber-200 bg-white px-5 py-2 text-sm font-semibold text-amber-700 transition hover:bg-amber-50"
                >
                  公式サイトを見る
                </Link>
              </div>
              <p className="mt-6 text-base leading-relaxed text-slate-700">{shop.tagline}</p>
              <p className="mt-4 text-sm leading-relaxed text-slate-600">{shop.summary}</p>
              <div className="mt-6 grid gap-4 md:grid-cols-2">
                <div className="rounded-2xl bg-slate-50 p-4">
                  <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">Strengths</p>
                  <ul className="mt-3 list-disc space-y-2 pl-5 text-sm leading-relaxed text-slate-700">
                    {shop.highlights.map((point) => (
                      <li key={point}>{point}</li>
                    ))}
                  </ul>
                </div>
                <div className="rounded-2xl bg-white p-4 ring-1 ring-slate-100">
                  <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">Contact / Notes</p>
                  <p className="mt-3 text-sm font-semibold text-slate-900">{shop.contact.address}</p>
                  <p className="mt-2 text-sm text-slate-600">{shop.contact.note}</p>
                </div>
              </div>
            </div>
            {index === 1 && (
                <>
                  <a href="https://px.a8.net/svt/ejp?a8mat=45IGP5+5U61BM+3OGM+601S1" rel="nofollow">
                  <img width="300" height="250" alt="" src="https://www23.a8.net/svt/bgt?aid=251124233353&wid=001&eno=01&mid=s00000017167001008000&mc=1"></img></a>
                  <img width="1" height="1" src="https://www14.a8.net/0.gif?a8mat=45IGP5+5U61BM+3OGM+601S1" alt=""></img>
                </>
            )}
            </React.Fragment>
          ))}
        </section>

        <section className="mt-16 rounded-3xl bg-slate-900 p-8 text-slate-100">
          <h3 className="text-2xl font-semibold">どう選べばいい？チェックリスト</h3>
          <div className="mt-6 grid gap-6 md:grid-cols-3">
            {['建具・家具一体で相談できるか', '図面や3D提案の回数・有料化のタイミング', '施工エリア・搬入体制・メンテ窓口'].map(
              (point) => (
                <div key={point} className="rounded-2xl border border-slate-800 bg-slate-800/60 p-4">
                  <p className="text-sm leading-relaxed">{point}</p>
                </div>
              ),
            )}
          </div>
          <p className="mt-6 text-sm leading-relaxed text-slate-300">
            名古屋では建具職人が造作まで担う老舗と、インテリアショップ型の造作チームが混在しています。初回相談では、
            <span className="text-white">① 家全体か部分施工か</span>
            、<span className="text-white">② 既存キッチン・設備との取り合い</span>
            、<span className="text-white">③ 納期と予算の許容幅</span> をセットで伝えると打ち合わせがスムーズです。
          </p>
        </section>
        <div className="p-4">
          <a href="https://px.a8.net/svt/ejp?a8mat=45IGP5+62I3SI+4KYW+60H7L" rel="nofollow">
          <img width="468" height="120" alt="" src="https://www21.a8.net/svt/bgt?aid=251124233367&wid=001&eno=01&mid=s00000021380001010000&mc=1"></img></a>
          <img width="1" height="1" src="https://www16.a8.net/0.gif?a8mat=45IGP5+62I3SI+4KYW+60H7L" alt=""></img>
        </div>
        <section className="mt-16 rounded-3xl bg-white/90 p-8 shadow-lg shadow-slate-100">
          <h3 className="text-xl font-semibold text-slate-900">参考にした情報源</h3>
          <p className="mt-4 text-sm text-slate-600">
            Web幹事の記事構成と公式サイトの公開情報（所在地／サービス内容／相談フロー）をもとに整理しています。
          </p>
          <ul className="mt-6 grid gap-3 sm:grid-cols-2">
            {dataSources.map((source) => (
              <li key={source.url}>
                <Link
                  href={source.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm font-semibold text-amber-700 hover:text-amber-900"
                >
                  <span>{source.name}</span>
                  <span aria-hidden="true">↗</span>
                </Link>
              </li>
            ))}
          </ul>
        </section>
        <a href="https://px.a8.net/svt/ejp?a8mat=45IGP5+68GFUA+1KUO+631SX" rel="nofollow">
        <img width="300" height="300" alt="" src="https://www22.a8.net/svt/bgt?aid=251124233377&wid=001&eno=01&mid=s00000007368001022000&mc=1"></img></a>
        <img width="1" height="1" src="https://www18.a8.net/0.gif?a8mat=45IGP5+68GFUA+1KUO+631SX" alt=""></img>
      </article>
    </main>
  );
}
