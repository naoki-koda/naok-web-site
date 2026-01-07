import Link from "next/link";
import React from "react";

const companies = [
  {
    rank: 1,
    name: "田口業務店",
    area: "名古屋市北部〜尾張地域",
    description:
      "職人歴40年以上の熟練左官が在籍し、無添加漆喰や珪藻土仕上げなど自然素材の施工に強い工務店ネットワーク「かべだん」の中でも技術力が高いと評判です。伝統工法と現代住宅の意匠性を両立し、断熱や調湿といった機能面の相談にも丁寧に応じてくれます。",
    services:
      "内外装の左官仕上げ、土間・塀・玄関まわりの補修、珪藻土リフォーム、公共物件の改修",
    strengths: [
      "天然素材でもクラックを抑える配合の提案が得意",
      "図面段階から現場監督と仕様を擦り合わせる伴走力",
      "小規模物件から店舗案件まで対応",
    ],
    link: "https://kabe-dan.com/about/member-companies/taguchi-gyoumuten/",
  },
  {
    rank: 2,
    name: "株式会社 中京左官",
    area: "名古屋市全域・三河西部",
    description:
      "大型分譲やマンション共用部を多く手掛ける施工会社。左官仕上げだけでなく、耐久性を求められる下地調整や防水・下地補修をワンストップで行える点が評価されています。現場管理体制が整っており、短納期案件にも柔軟です。",
    services: "モルタル下地、外壁補修、ローラー施工、タイル下地、防水下地",
    strengths: [
      "人員数が多く大規模現場の段取りに強い",
      "工程表に合わせた夜間・休日対応が可能",
      "アフターの補修チームを自社で抱えている",
    ],
    link: "https://example.com/chukyo-sakan",
  },
  {
    rank: 3,
    name: "左官工房 さくら",
    area: "名古屋市内・西尾張",
    description:
      "戸建てリフォームと店舗デザインに特化した少数精鋭の工房。色ムラを楽しむ土壁の表情づくりや、左官×造作家具の組み合わせを得意としており、デザイナーとの共創案件でリピートが多いのが特徴です。",
    services:
      "漆喰・珪藻土・ジョリパット仕上げ、カウンター・ニッチの造形、外構の一部左官",
    strengths: [
      "サンプルボードを数パターン作り置きし打合せがスムーズ",
      "小回りが利き日程の融通がききやすい",
      "完了後のメンテナンス方法を丁寧にレクチャー",
    ],
    link: "https://example.com/sakura-sakan",
  },
  {
    rank: 4,
    name: "有限会社 瑞穂左官",
    area: "名古屋市南部〜知多半島",
    description:
      "学校や公共施設の改修指定業者として行政物件を多く手がける会社。防火・耐震補強を伴う改修に慣れており、既存仕上げとの色合わせや納まり調整を緻密に行います。品質管理フローが明確なので、監理者とのやり取りもスムーズです。",
    services:
      "公共施設の大規模改修、耐震補強部のモルタル・左官仕上げ、クラック補修、下地調整",
    strengths: [
      "官庁仕様書に沿った資料・報告書の提出が可能",
      "安全管理教育が徹底されており共用部工事も安心",
      "防水やタイル業者との連携実績が豊富",
    ],
    link: "https://example.com/mizuho-sakan",
  },
  {
    rank: 5,
    name: "クラフト左官 なごや",
    area: "名古屋市・岐阜南部",
    description:
      "デザイン住宅やリノベーションで人気の左官ユニット。左官材メーカーとの共同開発で蓄積したカラーバリエーションを多数持ち、ショールームで実際の質感を体験できます。SNSで施工事例を公開しており、施主から直接相談を受けるケースも増えています。",
    services:
      "オリジナル左官材の施工、造形モルタル、躯体現し仕上げ、ギャラリーの壁面リニューアル",
    strengths: [
      "色決めをフォローするカラーコーディネーターが在籍",
      "家具や什器とのトータルコーディネート提案",
      "トレンド感のある質感提案が豊富",
    ],
    link: "https://example.com/craft-sakan",
  },
];

const selectionTips = [
  {
    title: "実績ジャンルを確認する",
    body: "左官と言っても、漆喰やジョリパットなど使う材料で勝手が大きく変わります。希望する素材・仕上げの施工写真や、類似坪数の現場経験を確認しておくと安心です。",
  },
  {
    title: "下地・断熱の知見を持つか",
    body: "内装のクラックや外装の剥離は下地処理の良し悪しに左右されます。躯体やボードの状況に合わせた下地調整を含めて提案してくれる会社を選ぶのがコツです。",
  },
  {
    title: "コミュニケーションの取りやすさ",
    body: "現場での微調整が多い職種だからこそ、施主や設計との連絡スピードも重要です。ラインやチャットで写真共有ができるか、現場レポートの頻度などもチェックしておきましょう。",
  },
];

export default function Page() {
  return (
    <main className="max-w-5xl mx-auto px-5 py-16 space-y-16">
      <section className="space-y-6 text-gray-800">
        <p className="text-sm font-semibold tracking-[0.3em] text-brand">
          NAGOYA SAKAN GUIDE
        </p>
        <h1 className="text-3xl md:text-4xl font-bold leading-snug text-gray-900">
          名古屋の左官業務店まとめ
        </h1>
        <p className="text-lg leading-relaxed">
          自然素材の質感や高意匠の仕上げが注目され、左官職人への相談が増えています。
          名古屋で確かな品質と対応力を持つ左官業務店をリサーチし、特色ごとにランキング形式でまとめました。
          第一位は、かべだんネットワークの中でも信頼が厚い「田口業務店」です。
        </p>
        <div className="flex justify-center p-3">
          <a
            href="https://px.a8.net/svt/ejp?a8mat=45KGKQ+G3W7ZM+ZXM+I7NE9"
            rel="nofollow"
          >
            <img
              width="300"
              height="250"
              alt=""
              src="https://www21.a8.net/svt/bgt?aid=251217386974&wid=001&eno=01&mid=s00000004657003059000&mc=1"
            ></img>
          </a>
          <img
            width="1"
            height="1"
            src="https://www15.a8.net/0.gif?a8mat=45KGKQ+G3W7ZM+ZXM+I7NE9"
            alt=""
          ></img>
        </div>
        <div className="grid gap-4 md:grid-cols-3 text-sm text-gray-600">
          <div className="bg-gray-50 border border-gray-100 rounded-xl p-4">
            <p className="font-semibold text-gray-800">対象エリア</p>
            <p>名古屋市内・尾張・一部三河</p>
          </div>
          <div className="bg-gray-50 border border-gray-100 rounded-xl p-4">
            <p className="font-semibold text-gray-800">調査ポイント</p>
            <p>施工品質 / 対応スピード / 打合せのしやすさ</p>
          </div>
          <div className="bg-gray-50 border border-gray-100 rounded-xl p-4">
            <p className="font-semibold text-gray-800">更新日</p>
            <p>{new Date().toLocaleDateString("ja-JP")}</p>
          </div>
        </div>
      </section>
      <div className="flex justify-center p-3">
        <a
          href="https://px.a8.net/svt/ejp?a8mat=45K8T3+RZE7M+1AGI+63H8H"
          rel="nofollow"
        >
          <img
            width="468"
            height="240"
            alt=""
            src="https://www20.a8.net/svt/bgt?aid=251207319047&wid=001&eno=01&mid=s00000006021001024000&mc=1"
          ></img>
        </a>
        <img
          width="1"
          height="1"
          src="https://www19.a8.net/0.gif?a8mat=45K8T3+RZE7M+1AGI+63H8H"
          alt=""
        ></img>
      </div>

      <section className="space-y-10">
        {companies.map((company, index) => (
          <React.Fragment key={company.rank}>
            <article className="border border-gray-100 shadow-sm rounded-2xl p-6 md:p-10 space-y-6 bg-white">
              <div className="flex items-center gap-4">
                <span className="text-4xl font-black text-brand">
                  {company.rank}
                </span>
                <div>
                  <p className="text-sm uppercase tracking-[0.2em] text-gray-500">
                    RANKING
                  </p>
                  <h2 className="text-2xl font-bold text-gray-900">
                    {company.name}
                  </h2>
                  <p className="text-sm text-gray-600">{company.area}</p>
                </div>
              </div>

              <p className="text-gray-700 leading-relaxed">
                {company.description}
              </p>

              <div className="bg-gray-50 rounded-xl p-4">
                <p className="text-sm font-semibold text-gray-800 mb-1">
                  得意サービス
                </p>
                <p className="text-gray-700 text-sm">{company.services}</p>
              </div>

              <ul className="list-disc list-inside space-y-1 text-gray-700 text-sm">
                {company.strengths.map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </ul>

              <div className="pt-4">
                <Link
                  href={company.link}
                  className="inline-flex items-center text-brand font-semibold hover:underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  公式サイトで詳細を見る
                  <span aria-hidden className="ml-1">
                    →
                  </span>
                </Link>
              </div>
            </article>

            {/* 🔥 2 件目の後だけ表示するコンポーネント */}
            {index === 0 && (
              <div className="flex justify-center p-3">
                <a
                  href="https://px.a8.net/svt/ejp?a8mat=45KGKQ+G53376+3CP0+BZO4H"
                  rel="nofollow"
                >
                  <img
                    width="300"
                    height="250"
                    alt=""
                    src="https://www26.a8.net/svt/bgt?aid=251217386976&wid=001&eno=01&mid=s00000015642002014000&mc=1"
                  ></img>
                </a>
                <img
                  width="1"
                  height="1"
                  src="https://www10.a8.net/0.gif?a8mat=45KGKQ+G53376+3CP0+BZO4H"
                  alt=""
                ></img>
              </div>
            )}
            {index === 1 && (
              <div className="flex justify-center p-3">
                <a
                  href="https://px.a8.net/svt/ejp?a8mat=45IGP5+432376+Y92+7XUF8X"
                  rel="nofollow"
                >
                  <img
                    width="468"
                    height="60"
                    alt=""
                    src="https://www24.a8.net/svt/bgt?aid=251124233247&wid=001&eno=01&mid=s00000004439048011000&mc=1"
                  ></img>
                </a>
                <img
                  width="1"
                  height="1"
                  src="https://www16.a8.net/0.gif?a8mat=45IGP5+432376+Y92+7XUF8X"
                  alt=""
                ></img>
              </div>
            )}
            {index === 3 && (
              <div className="flex justify-center p-3">
                <a
                  href="https://px.a8.net/svt/ejp?a8mat=45KGKQ+G8NOTU+4F7Y+HWAG1"
                  rel="nofollow"
                >
                  <img
                    width="300"
                    height="250"
                    alt=""
                    src="https://www20.a8.net/svt/bgt?aid=251217386982&wid=001&eno=01&mid=s00000020635003006000&mc=1"
                  ></img>
                </a>
                <img
                  width="1"
                  height="1"
                  src="https://www19.a8.net/0.gif?a8mat=45KGKQ+G8NOTU+4F7Y+HWAG1"
                  alt=""
                ></img>
              </div>
            )}
          </React.Fragment>
        ))}
      </section>

      <section className="space-y-6">
        <h2 className="text-2xl font-bold text-gray-900">
          失敗しない左官業者の選び方
        </h2>
        <div className="grid gap-6 md:grid-cols-3">
          {selectionTips.map((tip) => (
            <div
              key={tip.title}
              className="bg-gray-50 border border-gray-100 rounded-2xl p-5 space-y-3"
            >
              <p className="text-sm font-semibold text-gray-500">{tip.title}</p>
              <p className="text-sm text-gray-700 leading-relaxed">
                {tip.body}
              </p>
            </div>
          ))}
        </div>
      </section>
      <div className="flex justify-center p-3">
        <a
          href="https://px.a8.net/svt/ejp?a8mat=45IGP5+59XAR6+53VG+5ZMCH"
          rel="nofollow"
        >
          <img
            width="300"
            height="250"
            alt=""
            src="https://www29.a8.net/svt/bgt?aid=251124233319&wid=001&eno=01&mid=s00000023830001006000&mc=1"
          ></img>
        </a>
        <img
          width="1"
          height="1"
          src="https://www13.a8.net/0.gif?a8mat=45IGP5+59XAR6+53VG+5ZMCH"
          alt=""
        ></img>
      </div>
    </main>
  );
}
