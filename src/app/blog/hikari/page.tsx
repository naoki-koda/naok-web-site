import {
  BoltIcon,
  CheckCircleIcon,
  ExclamationTriangleIcon,
  StarIcon,
} from "@heroicons/react/24/solid";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "【東海地方】エディオン×コミュファ光が最強な理由｜回線選びの落とし穴",
  description:
    "東海エリアで光回線を選ぶならエディオン店頭×コミュファ光一択。独自回線の実測値とポイント還元で通信費を最適化しつつ、10Gプランの押し売りを避ける方法を解説。",
  keywords: [
    "コミュファ光",
    "エディオン",
    "東海地方",
    "光回線",
    "ソフトバンク光",
    "10Gbps",
  ],
};

const personaPoints = [
  "東海地方（＋長野）在住。コミュファの提供エリアに住んでいる。",
  "通信費を抑えつつも、動画視聴やZoomでストレスのない速度を求めている。",
  "派手なキャッシュバック広告よりも、近所のエディオン店頭の安心感を重視している。",
  "営業トークで無駄に高いプランを契約させられないか不安。",
];

const reasons = [
  {
    title: "独自回線の実測値が強すぎる",
    detail:
      "コミュファ光はNTTの卸回線を介さない独自ファイバー網。夕方でも速度が落ちにくく、「理論値（10Gbps）」よりも「実測値が安定」している点が東海エリアで圧倒的な支持を集めています。",
  },
  {
    title: "エディオンポイントが即時で使える",
    detail:
      "公式キャンペーン＋店頭限定ポイントで、家電や日用品にすぐ使えるリターンが得られます。ネットキャッシュバックのような「申請忘れ」を狙った罠もゼロ。",
  },
  {
    title: "au・UQユーザーのスマホ代も圧縮",
    detail:
      "auスマートバリューが適用されれば、家族のスマホまで割引。通信費のトータルコストで見ると、現金還元よりも年間インパクトが大きくなるケースがほとんどです。",
  },
];

const ranking = [
  {
    rank: 1,
    label: "コミュファ光（エディオン店頭申込）",
    grade: "S",
    tagline: "東海地方では「迷ったらこれ」でOK。速度・コストともに妥協なし。",
    reasons: [
      "独自回線×v6対応でピークタイムでも爆速",
      "エディオンポイント還元が現金より使いやすい",
      "au / UQモバイルとのセット割で通信費を一括最適化",
    ],
    cta: {
      text: "近くのエディオンで相談する",
      href: "https://www.commufa.jp/",
    },
  },
  {
    rank: 2,
    label: "ドコモ光（GMOとくとくBBなど）",
    grade: "A",
    tagline: "コミュファ圏外 or ドコモユーザーなら無難な次点。",
    reasons: [
      "ドコモユーザーはスマホ割が使える",
      "v6プラスで速度が安定",
      "ルーター無料レンタルで初期コスト抑制",
    ],
  },
  {
    rank: 3,
    label: "楽天ひかり",
    grade: "B",
    tagline: "楽天モバイルユーザーならSPUアップ狙いで検討。",
    reasons: [
      "1年無料キャンペーンが頻繁に開催",
      "SPU目的ならコストメリット大",
      "ただし混雑時間帯の速度は要チェック",
    ],
  },
];

const fiberPlanComparisons = [
  {
    rank: '1位',
    plan: 'コミュファ光（1G ホーム）',
    monthly: '3,980円〜5,170円',
    monthlyNote: '※スタート割等適用時',
    initial: '実質無料',
    initialNote: '※事務手数料770円のみ',
    feature: '今回の「最強」枠',
    detail: 'エディオンならさらにポイント還元あり',
  },
  {
    rank: '注意',
    plan: 'ソフトバンク光（10Gb プラン）',
    monthly: '6,380円',
    monthlyNote: '※1Gより高額',
    initial: '実質無料',
    initialNote: '※事務手数料3,300円',
    feature: '今回の「非推奨」枠',
    detail: 'オーバースペックで月額が高い',
  },
  {
    rank: '参考',
    plan: 'ソフトバンク光（1Gb プラン）',
    monthly: '5,720円',
    initial: '実質無料',
    feature: '一般的なコラボ光の価格',
  },
  {
    rank: '2位',
    plan: 'ドコモ光（1G タイプA）',
    monthly: '5,720円',
    initial: '完全無料',
    initialNote: '（特典による）',
    feature: 'ドコモユーザー向け',
    detail: '工事費「完全無料」が強み',
  },
  {
    rank: '3位',
    plan: '楽天ひかり（1G ファミリー）',
    monthly: '5,280円',
    initial: '実質無料不可',
    initialNote: '（約2万円自己負担）',
    feature: 'SPU目当て以外は初期費用が高く非推奨',
  },
];

const fiberPlanDetails = [
  {
    title: 'コミュファ光（エディオン申込）',
    description:
      '公式キャンペーン＋店頭ポイントの二重取りができ、1年目の実質月額が大幅に下がる。独自回線で夕方の混雑も感じにくい。',
    note: 'まずは近隣のエディオンで実測値とキャンペーンを確認。',
  },
  {
    title: 'ソフトバンク光（10Gb / 1Gb）',
    description:
      '10Gbpsは年間約2万円のコスト増。1Gbpsならおうち割のメリットは取れるので、用途に合わせて1Gbpsを選べば十分。',
    note: '「標準は10Gbps」という営業トークに注意。',
  },
  {
    title: 'ドコモ光 / 楽天ひかり',
    description:
      'コミュファが入らない地域や他キャリアユーザー向け。ドコモ光は特典で工事費が完全無料。楽天はSPU目的以外は初期費用負担が大きい。',
    note: 'スマホセット割と工事費条件を同時にチェック。',
  },
];

const cautionPoints = [
  "一般家庭で10Gbpsは過剰性能。YouTube・Netflix・オンライン会議でも1Gbpsで十分。",
  "10Gbpsプランは1Gbpsより毎月1,000〜1,500円高い＝年間約2万円のロス。",
  "代理店は単価が高いプランほどインセンティブが増えるため、必要性に関係なく勧めがち。",
];

const killerPhrases = [
  "速度は「理論値（10Gb）」より「実測値（独自回線）」が重要です。",
  "使いもしない10Gbプランに払う月額差額は、ただの寄付と同じです。",
  "ネットでの振込キャッシュバックは「申請忘れ」を狙っていますが、エディオンポイントならその場で確実です。",
];

export default function Page() {
  const currentYear = new Date().getFullYear();

  return (
    <main className="max-w-3xl mx-auto px-4 py-12 sm:px-6 lg:px-8 bg-white text-slate-800 font-sans">
      <header className="mb-12 text-center">
        <span className="inline-flex items-center gap-2 px-4 py-1 mb-4 text-xs font-semibold tracking-widest text-blue-700 uppercase bg-blue-50 rounded-full">
          <BoltIcon className="w-4 h-4" />
          Tokai Fiber Insight
        </span>
        <h1 className="text-3xl font-extrabold leading-tight text-gray-900 md:text-4xl">
          【東海地方】光回線の結論
          <br className="hidden md:block" />
          <span className="text-blue-600">エディオン × コミュファ光が最強</span>
        </h1>
        <p className="mt-6 text-lg text-gray-600">
          「最大◯◯円還元！」の広告に惑わされず、必要な速度と確実な特典を両立する方法を徹底解説。
          {currentYear}年版の最新事情を、エディオン利用者目線でまとめました。
        </p>
        <p className="mt-3 text-sm text-gray-500">
          最終更新：{currentYear}年 • 想定読者：東海エリア在住のau / UQユーザー
        </p>
      </header>

      <section className="mb-12 bg-slate-50 border border-slate-100 rounded-3xl p-6">
        <h2 className="text-xl font-bold text-slate-900 mb-4 flex items-center gap-2">
          <StarIcon className="w-5 h-5 text-amber-500" />
          この記事のターゲット（ペルソナ）
        </h2>
        <ul className="space-y-3 text-sm text-slate-700">
          {personaPoints.map((point) => (
            <li key={point} className="flex items-start gap-2">
              <CheckCircleIcon className="w-5 h-5 text-emerald-500 flex-shrink-0 mt-0.5" />
              <span>{point}</span>
            </li>
          ))}
        </ul>
      </section>

      <section id="comparison" className="mb-16">
        <div className="flex items-center mb-6">
          <span className="bg-blue-600 text-white w-9 h-9 rounded-full flex items-center justify-center mr-3 text-lg font-semibold">3</span>
          <h2 className="text-2xl font-bold text-gray-900">主要光回線の料金・初期費用早見表</h2>
        </div>
        <p className="text-sm text-slate-600 mb-4">
          1年目の実質コスト・初期費用・特徴をまとめました。10Gbpsの押し売りに引っ掛からないためにも、まずはここで全体像を把握してください。
        </p>
        <div className="overflow-x-auto rounded-2xl border border-slate-100">
          <table className="min-w-full text-sm text-left text-slate-700">
            <thead className="bg-slate-50 text-xs uppercase tracking-widest text-slate-500">
              <tr>
                <th className="px-4 py-3">順位</th>
                <th className="px-4 py-3">光回線（プラン）</th>
                <th className="px-4 py-3">月額費用（1年目目安）</th>
                <th className="px-4 py-3">初期費用（工事費・手数料）</th>
                <th className="px-4 py-3">特徴</th>
              </tr>
            </thead>
            <tbody>
              {fiberPlanComparisons.map((item) => (
                <tr key={`${item.rank}-${item.plan}`} className="border-t border-slate-100">
                  <td className="px-4 py-4 font-semibold text-slate-900">{item.rank}</td>
                  <td className="px-4 py-4">
                    <p className="font-semibold text-slate-900">{item.plan}</p>
                  </td>
                  <td className="px-4 py-4">
                    <p className="font-semibold text-slate-900">{item.monthly}</p>
                    {item.monthlyNote && <p className="text-xs text-slate-500">{item.monthlyNote}</p>}
                  </td>
                  <td className="px-4 py-4">
                    <p className="font-semibold text-slate-900">{item.initial}</p>
                    {item.initialNote && <p className="text-xs text-slate-500">{item.initialNote}</p>}
                  </td>
                  <td className="px-4 py-4">
                    <p className="font-semibold text-slate-900">{item.feature}</p>
                    {item.detail && <p className="text-xs text-slate-500 mt-1">{item.detail}</p>}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="mt-6 grid gap-4 md:grid-cols-3">
          {fiberPlanDetails.map((detail) => (
            <article key={detail.title} className="p-4 rounded-2xl border border-slate-100 bg-white shadow-sm">
              <h3 className="text-base font-semibold text-slate-900">{detail.title}</h3>
              <p className="mt-2 text-sm text-slate-600">{detail.description}</p>
              <p className="mt-3 text-xs font-semibold text-blue-600">{detail.note}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="mb-16 prose prose-slate max-w-none">
        <h2>はじめに：光回線選びで損をしないために</h2>
        <p>
          キャッシュバック金額だけを比較して契約したものの、月額料金が高くて結果的に損をする——そんな相談が後を絶ちません。
          結論を先に言えば、
          <strong>
            東海地方に住んでいるならエディオン店頭で「コミュファ光」を申し込むのが最適解
          </strong>
          です。
        </p>
        <blockquote>{killerPhrases[0]}</blockquote>
        <p>
          いま最優先すべきは「混雑時にも安定して速いこと」と「確実に受け取れる特典」の両立。これを実現できるのがエディオン特約のコミュファ光です。
        </p>
      </section>

      <section id="ranking" className="mb-16">
        <div className="flex items-center mb-6">
          <span className="bg-blue-600 text-white w-9 h-9 rounded-full flex items-center justify-center mr-3 text-lg font-semibold">
            1
          </span>
          <h2 className="text-2xl font-bold text-gray-900">
            なぜ「エディオン × コミュファ光」が最強なのか
          </h2>
        </div>
        <div className="grid gap-6">
          {reasons.map((reason) => (
            <article
              key={reason.title}
              className="p-6 border border-slate-100 rounded-2xl shadow-sm bg-white"
            >
              <h3 className="text-lg font-semibold text-blue-700 mb-2">
                {reason.title}
              </h3>
              <p className="text-sm leading-relaxed text-slate-700">
                {reason.detail}
              </p>
            </article>
          ))}
        </div>
        <blockquote className="mt-6 border-l-4 border-blue-600 pl-4 text-sm text-slate-600">
          {killerPhrases[2]}
        </blockquote>
      </section>

      <section className="mb-16 bg-amber-50 border border-amber-100 rounded-3xl p-6">
        <div className="flex items-center gap-3 mb-4">
          <ExclamationTriangleIcon className="w-8 h-8 text-amber-500" />
          <h2 className="text-2xl font-bold text-amber-900">
            【警告】10Gbプランを勧められていませんか？
          </h2>
        </div>
        <p className="text-sm text-amber-900 mb-4">
          営業現場では「これからは10Gbpsが標準」と言われがちですが、一般家庭ではオーバースペック。月額差額は純粋なコスト増です。
        </p>
        <ul className="space-y-3 text-sm text-amber-900">
          {cautionPoints.map((point) => (
            <li key={point} className="flex items-start gap-2">
              <ExclamationTriangleIcon className="w-5 h-5 flex-shrink-0 mt-0.5" />
              <span>{point}</span>
            </li>
          ))}
        </ul>
        <blockquote className="mt-6 border-l-4 border-amber-400 pl-4 text-sm text-amber-800 italic">
          {killerPhrases[1]}
        </blockquote>
        <p className="mt-4 text-xs text-amber-700">
          ※ソフトバンク /
          Y!mobileユーザーが1Gbpsプランを選べば「おうち割」での恩恵は十分に得られます。無駄にハイスペックなプランは避けましょう。
        </p>
      </section>

      <section className="mb-16">
        <div className="flex items-center mb-6">
          <span className="bg-blue-600 text-white w-9 h-9 rounded-full flex items-center justify-center mr-3 text-lg font-semibold">
            4
          </span>
          <h2 className="text-2xl font-bold text-gray-900">
            おすすめ光回線ランキング（まとめ）
          </h2>
        </div>
        <div className="space-y-8">
          {ranking.map((item) => (
            <article
              key={item.label}
              className="border border-slate-100 rounded-3xl p-6 shadow-sm"
            >
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4">
                <div>
                  <p className="text-sm text-slate-500">#{item.rank}</p>
                  <h3 className="text-xl font-bold text-slate-900">
                    {item.label}
                  </h3>
                  <p className="text-sm text-slate-500">
                    おすすめ度：{item.grade}
                  </p>
                </div>
                {item.cta && (
                  <a
                    href={item.cta.href}
                    target="_blank"
                    rel="nofollow noreferrer"
                    className="mt-4 sm:mt-0 inline-flex items-center justify-center px-6 py-3 text-sm font-semibold text-white bg-blue-600 rounded-full shadow hover:bg-blue-700 transition"
                  >
                    {item.cta.text}
                  </a>
                )}
              </div>
              <p className="text-sm text-slate-600 mb-4">{item.tagline}</p>
              <ul className="space-y-2 text-sm text-slate-700">
                {item.reasons.map((reason) => (
                  <li key={reason} className="flex items-start gap-2">
                    <CheckCircleIcon className="w-5 h-5 text-emerald-500 flex-shrink-0 mt-0.5" />
                    <span>{reason}</span>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>

      <section className="mb-16 prose prose-slate max-w-none">
        <h2>まとめ：必要な速度を、最もお得な窓口で</h2>
        <p>
          ベストな選択肢はシンプルです。<strong>必要十分な1Gbpsプラン</strong>
          を、<strong>エディオンという信頼できる窓口</strong>
          で申し込む。これだけで通信費は最適化されます。
        </p>
        <p>
          近くのエディオンでキャンペーン状況を確認し、コミュファ光を相談するだけで「速度・安心・割引」の三拍子がそろいます。
          申し込み窓口さえ間違えなければ、余計な10Gbpsアップセルに悩まされることもありません。
        </p>
        <p>
          {killerPhrases[0]}{" "}
          ——この視点を忘れずに、まずは家から一番近いエディオンで最新キャンペーンをチェックしてみてください。
        </p>
      </section>
    </main>
  );
}
