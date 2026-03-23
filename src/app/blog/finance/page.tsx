import { kosugiMaru } from "@/app/ui/fonts";
import type { Metadata } from "next";

type Role = "advisor" | "user";

type Message = {
  id: number;
  role: Role;
  name: string;
  text: string;
};

const introMessages: Message[] = [
  {
    id: 1,
    role: "user",
    name: "相談者",
    text: "世帯年収900万円で6,000万円の家って、やっぱり無謀ですか？ 返済が怖くて決めきれません。",
  },
  {
    id: 2,
    role: "advisor",
    name: "アドバイザー",
    text: "借入額だけで見ると不安になります。ただ、本当に見るべきなのは毎月の返済額だけではなく、35年間の総支出です。",
  },
  {
    id: 3,
    role: "user",
    name: "相談者",
    text: "総支出というと、住宅ローン以外に何を含めればいいんですか？",
  },
  {
    id: 4,
    role: "advisor",
    name: "アドバイザー",
    text: "光熱費、修繕費、外装メンテナンス、そしてインフレです。高性能住宅は初期費用が高くても、将来コストを削る設計にできます。",
  },
  {
    id: 5,
    role: "user",
    name: "相談者",
    text: "つまり『高い家=危険』じゃなくて、『安く見える家が将来高くつく』こともあるんですね。",
  },
  {
    id: 6,
    role: "advisor",
    name: "アドバイザー",
    text: "その通りです。今回は、自営業300万円×公務員600万円の夫婦が、なぜ6,000万円を適正だと判断したのかを具体的に整理します。",
  },
];

const strategyPoints = [
  "夫は自営業300万円、妻は公務員600万円。収入の安定性と節税感覚の両方を持つ世帯構成。",
  "ペアローンで妻の信用力を活かしつつ、夫婦それぞれが住宅ローン控除を取りにいく設計。",
  "借入額だけでなく、住んだ後の固定費削減まで含めて『払えるか』を判断。",
];

const equipmentCards = [
  {
    title: "断熱等級6",
    body:
      "冷暖房効率を底上げし、夏冬の光熱費を圧縮。室温の安定はヒートショック対策や睡眠の質にも直結します。",
  },
  {
    title: "太陽光発電 + エコワン",
    body:
      "電気とガスを分散して持つことで、どちらかの価格が上がっても家計のダメージを和らげられます。エネルギー高騰への保険として機能します。",
  },
  {
    title: "メンテナンス負担の低い外装",
    body:
      "初期費用を少し積んで塗り替えや補修の頻度を下げると、10年後・15年後の大きな出費を避けやすくなります。",
  },
];

const macroPoints = [
  {
    title: "現金の安心は、インフレ局面では目減りする",
    body:
      "物価が上がる時代は、手元現金の購買力が下がります。低金利で固定資産を持つことは、実質的に借金の価値が薄まる方向に働きます。",
  },
  {
    title: "高性能住宅は『消費』だけで終わりにくい",
    body:
      "断熱性や設備性能が高い家は、中古で見たときにも説明しやすい価値が残りやすく、住み替えや売却の際の防御力になります。",
  },
  {
    title: "金利は単体で見るのではなく、家計全体で考える",
    body:
      "固定金利は返済額が読める安心があり、変動金利は当初負担を軽くしやすい選択です。重要なのは、金利差よりも将来の家計耐性です。",
  },
];

const checklist = [
  "自営業の収入が落ちた年でも、公務員側の収入で固定費を支えられるか。",
  "安い仕様で建てた場合の修繕費を、30年スパンで見積もっているか。",
  "電気代が1.5倍になっても、断熱性や創エネで家計が崩れないか。",
  "住宅ローン控除、保険、教育費まで含めてキャッシュフローを見ているか。",
  "売却や住み替えを考えたときに、性能面で説明しやすい家になっているか。",
];

const summaryCards = [
  {
    label: "借入額",
    value: "6,000万円",
    note: "数字だけ見ると大きいが、判断材料としては不十分",
  },
  {
    label: "世帯年収",
    value: "900万円",
    note: "自営業300万円 + 公務員600万円",
  },
  {
    label: "本当に見るべき指標",
    value: "35年総コスト",
    note: "返済額 + 光熱費 + 修繕費 + インフレ",
  },
];

export const metadata: Metadata = {
  title:
    "年収900万円で6,000万円の家は無謀？自営業×公務員夫婦の住宅ローン戦略",
  description:
    "借入額だけでなく、光熱費・修繕費・インフレまで含めた生涯コストで住宅ローンを考える記事。自営業300万円と公務員600万円のペアローン戦略を具体例で解説します。",
};

const adLink =
  "https://px.a8.net/svt/ejp?a8mat=4AZLSE+1FSQEQ+5ULO+5YZ75";
const adImage =
  "https://www20.a8.net/svt/bgt?aid=260322062087&wid=001&eno=01&mid=s00000027294001003000&mc=1";
const adTrackingPixel =
  "https://www19.a8.net/0.gif?a8mat=4AZLSE+1FSQEQ+5ULO+5YZ75";

export default function FinancePage() {
  return (
    <main className="bg-[linear-gradient(180deg,#f6f7f2_0%,#ffffff_22%,#eef4f0_100%)] text-slate-800">
      <article className="mx-auto max-w-5xl px-4 py-16 sm:px-6 lg:px-8">
        <header className="overflow-hidden rounded-[32px] border border-emerald-100/80 bg-white/90 shadow-xl shadow-emerald-100/50">
          <div className="bg-[radial-gradient(circle_at_top_left,_rgba(16,185,129,0.18),_transparent_42%),linear-gradient(135deg,_rgba(15,23,42,0.98),_rgba(20,83,45,0.92))] px-6 py-10 text-white sm:px-10 sm:py-12">
            <p className="text-sm font-semibold uppercase tracking-[0.32em] text-emerald-200">
              Housing Finance Strategy
            </p>
            <h1
              className={`mt-4 max-w-4xl text-3xl leading-tight font-bold sm:text-4xl ${kosugiMaru.className}`}
            >
              年収900万円で6,000万円の家は無謀？
              <br />
              自営業×公務員夫婦が選んだ
              <br />
              「将来のコストを削る」究極の住宅ローン戦略
            </h1>
            <p className="mt-6 max-w-3xl text-base leading-8 text-emerald-50/90 sm:text-lg">
              ローン返済額だけを見て家づくりを判断すると、住み始めてから苦しくなります。
              大切なのは、借金額ではなく、住んだ後まで含めた支出の総額です。
            </p>
          </div>

          <div className="grid gap-4 px-6 py-8 sm:px-10 lg:grid-cols-3">
            {summaryCards.map((card) => (
              <div
                key={card.label}
                className="rounded-3xl border border-slate-200 bg-slate-50/80 p-5"
              >
                <p className="text-xs font-semibold uppercase tracking-[0.22em] text-slate-500">
                  {card.label}
                </p>
                <p className="mt-3 text-2xl font-bold text-slate-900">
                  {card.value}
                </p>
                <p className="mt-2 text-sm leading-6 text-slate-600">
                  {card.note}
                </p>
              </div>
            ))}
          </div>
        </header>

        <section className="mt-10 rounded-[32px] border border-slate-200 bg-white/85 p-6 shadow-lg shadow-slate-100 sm:p-8">
          <div className="flex items-center justify-between gap-4 border-b border-slate-100 pb-4">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.24em] text-emerald-700">
                Intro Dialogue
              </p>
              <h2 className="mt-2 text-2xl font-bold text-slate-900">
                まずは、よくある不安から
              </h2>
            </div>
            <div className="rounded-full bg-emerald-50 px-4 py-2 text-xs font-semibold text-emerald-700">
              対話で要点整理
            </div>
          </div>

          <div className="mt-6 space-y-4">
            {introMessages.map((message) => {
              const isAdvisor = message.role === "advisor";

              return (
                <div
                  key={message.id}
                  className={`flex items-start gap-3 ${
                    isAdvisor ? "justify-start" : "justify-end"
                  }`}
                >
                  {isAdvisor && (
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-slate-900 text-xs font-bold text-white">
                      A
                    </div>
                  )}
                  <div
                    className={`max-w-[85%] rounded-3xl px-5 py-4 text-sm leading-7 shadow-sm sm:max-w-[78%] ${
                      isAdvisor
                        ? "border border-slate-200 bg-white text-slate-800"
                        : "bg-emerald-600 text-white"
                    }`}
                  >
                    <p
                      className={`text-[11px] font-semibold uppercase tracking-[0.2em] ${
                        isAdvisor ? "text-slate-500" : "text-emerald-100"
                      }`}
                    >
                      {message.name}
                    </p>
                    <p className="mt-2">{message.text}</p>
                  </div>
                  {!isAdvisor && (
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-emerald-600 text-xs font-bold text-white">
                      Q
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </section>

        <section className="mt-10 rounded-[32px] bg-white/85 p-6 shadow-lg shadow-slate-100 ring-1 ring-slate-100 sm:p-8">
          <p className="text-sm font-semibold uppercase tracking-[0.24em] text-emerald-700">
            1. はじめに
          </p>
          <h2 className="mt-3 text-2xl font-bold text-slate-900">
            住宅ローンは「借金額」より「支出の総額」で考える
          </h2>
          <p className="mt-5 text-base leading-8 text-slate-700">
            「年収の何倍までなら安全か」「毎月いくらなら払えるか」という問いは、
            住宅ローンの入り口としては正しいです。ただし、その視点だけでは不十分です。
            家は住んだ後に、光熱費、修繕費、外壁メンテナンス、設備交換といった支出を
            何十年も発生させます。さらにインフレが進めば、今は小さく見える固定費の差が、
            長期では大きな差になります。
          </p>
          <p className="mt-4 text-base leading-8 text-slate-700">
            だからこそ、判断軸はローン返済額ではなく、
            <span className="font-semibold text-emerald-800">
              生涯コスト
            </span>
            です。注文住宅のファイナンスは、目先の月額を抑えるゲームではなく、
            35年間の総支出を最適化する設計だと考えた方が失敗しにくくなります。
          </p>
        </section>

        <section className="mt-10 grid gap-8 lg:grid-cols-[1.2fr_0.8fr]">
          <div className="rounded-[32px] bg-slate-900 p-6 text-slate-50 shadow-xl shadow-slate-200 sm:p-8">
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-emerald-300">
              2. 実録
            </p>
            <h2 className="mt-3 text-2xl font-bold">
              わが家のペアローン戦略
            </h2>
            <p className="mt-5 text-base leading-8 text-slate-200">
              わが家は、夫が自営業で年収300万円、妻が公務員で年収600万円の世帯です。
              単純な年収倍率だけ見ると、6,000万円は高く見えるかもしれません。
              ただ、実際には収入の性質が違うからこそ、組み方次第で家計はかなり安定します。
            </p>
            <div className="mt-6 space-y-4">
              {strategyPoints.map((point) => (
                <div
                  key={point}
                  className="rounded-2xl border border-white/10 bg-white/5 p-4 text-sm leading-7 text-slate-100"
                >
                  {point}
                </div>
              ))}
            </div>
          </div>

          <aside className="rounded-[32px] border border-emerald-100 bg-emerald-50/80 p-6 shadow-lg shadow-emerald-100/60 sm:p-8">
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-emerald-700">
              年収構成
            </p>
            <div className="mt-5 space-y-4">
              <div className="rounded-2xl bg-white/90 p-4">
                <p className="text-sm font-medium text-slate-500">夫</p>
                <p className="mt-1 text-2xl font-bold text-slate-900">
                  300万円
                </p>
                <p className="mt-1 text-sm text-slate-600">自営業</p>
              </div>
              <div className="rounded-2xl bg-white/90 p-4">
                <p className="text-sm font-medium text-slate-500">妻</p>
                <p className="mt-1 text-2xl font-bold text-slate-900">
                  600万円
                </p>
                <p className="mt-1 text-sm text-slate-600">公務員</p>
              </div>
              <div className="rounded-2xl bg-slate-900 p-4 text-white">
                <p className="text-sm font-medium text-slate-300">世帯年収</p>
                <p className="mt-1 text-3xl font-bold">900万円</p>
                <p className="mt-2 text-sm text-slate-300">
                  信用力と節税メリットを分けて使えるのが強みです。
                </p>
              </div>
            </div>
          </aside>
        </section>

        <section className="mt-10 rounded-[32px] border border-amber-100 bg-[linear-gradient(135deg,rgba(255,251,235,0.95),rgba(255,255,255,0.96))] p-6 shadow-lg shadow-amber-100/50 sm:p-8">
          <p className="text-sm font-semibold uppercase tracking-[0.24em] text-amber-700">
            3. 設備選び
          </p>
          <h2 className="mt-3 text-2xl font-bold text-slate-900">
            「高い家」が実は「安い」こともある
          </h2>
          <p className="mt-5 text-base leading-8 text-slate-700">
            初期投資を抑えると、契約時は安心できます。ただし、家づくりでは
            イニシャルコストを削ったぶんだけ、ランニングコストや修繕コストが後ろに回るケースが多いです。
            だからこそ、将来の障害コストを意識した設備投資は合理的です。
          </p>
          <div className="mt-6 grid gap-4 md:grid-cols-3">
            {equipmentCards.map((card) => (
              <div
                key={card.title}
                className="rounded-3xl border border-amber-100 bg-white/90 p-5"
              >
                <h3 className="text-lg font-bold text-slate-900">{card.title}</h3>
                <p className="mt-3 text-sm leading-7 text-slate-700">
                  {card.body}
                </p>
              </div>
            ))}
          </div>
        </section>

        <section className="mt-10 rounded-[32px] bg-white/85 p-6 shadow-lg shadow-slate-100 ring-1 ring-slate-100 sm:p-8">
          <p className="text-sm font-semibold uppercase tracking-[0.24em] text-emerald-700">
            4. マクロ視点
          </p>
          <h2 className="mt-3 text-2xl font-bold text-slate-900">
            インフレ時代は、現金より家計耐性が重要
          </h2>
          <div className="mt-6 space-y-4">
            {macroPoints.map((point) => (
              <div
                key={point.title}
                className="rounded-3xl border border-slate-200 bg-slate-50/80 p-5"
              >
                <h3 className="text-lg font-semibold text-slate-900">
                  {point.title}
                </h3>
                <p className="mt-3 text-sm leading-7 text-slate-700">
                  {point.body}
                </p>
              </div>
            ))}
          </div>
        </section>

        <aside className="mt-10 overflow-hidden rounded-[32px] border border-emerald-100 bg-[linear-gradient(135deg,rgba(236,253,245,0.96),rgba(255,255,255,0.98))] p-6 shadow-lg shadow-emerald-100/60 sm:p-8">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
            <div className="max-w-2xl">
              <p className="inline-flex rounded-full bg-emerald-700 px-3 py-1 text-xs font-semibold uppercase tracking-[0.22em] text-white">
                PR
              </p>
              <h2 className="mt-4 text-2xl font-bold text-slate-900">
                住宅費を考えるなら、比較の質も上げておきたい
              </h2>
              <p className="mt-4 text-sm leading-7 text-slate-700 sm:text-base">
                月々の返済額だけでなく、性能や将来コストまで含めて比較すると、
                家づくりの判断はかなり変わります。気になる方は、候補整理の参考として確認してください。
              </p>
            </div>

            <div className="relative mx-auto w-full max-w-[320px] shrink-0 rounded-[28px] border border-white/80 bg-white/95 p-3 shadow-xl shadow-emerald-200/50">
              <a href={adLink} rel="nofollow" className="block">
                <img
                  width={300}
                  height={250}
                  alt="住宅関連サービスの広告"
                  src={adImage}
                  className="h-auto w-full rounded-2xl"
                />
              </a>
              <img
                width={1}
                height={1}
                src={adTrackingPixel}
                alt=""
                className="pointer-events-none absolute opacity-0"
              />
            </div>
          </div>
        </aside>

        <section className="mt-10 grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="rounded-[32px] bg-[linear-gradient(180deg,#062b22_0%,#0f3b30_100%)] p-6 text-white shadow-xl shadow-emerald-200/60 sm:p-8">
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-emerald-300">
              5. 診断
            </p>
            <h2 className="mt-3 text-2xl font-bold">
              失敗しないための住宅ローン診断
            </h2>
            <p className="mt-5 text-sm leading-7 text-emerald-50/90">
              借入可能額ではなく、耐えられる家計かどうかを確認してください。
              下の5項目に明確に答えられるほど、判断の精度は上がります。
            </p>
          </div>

          <div className="rounded-[32px] border border-slate-200 bg-white p-6 shadow-lg shadow-slate-100 sm:p-8">
            <ul className="space-y-4">
              {checklist.map((item, index) => (
                <li
                  key={item}
                  className="flex gap-4 rounded-2xl bg-slate-50/90 p-4"
                >
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-emerald-600 text-sm font-bold text-white">
                    {index + 1}
                  </div>
                  <p className="text-sm leading-7 text-slate-700">{item}</p>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section className="mt-10 rounded-[32px] border border-slate-200 bg-white/90 p-6 shadow-lg shadow-slate-100 sm:p-8">
          <p className="text-sm font-semibold uppercase tracking-[0.24em] text-emerald-700">
            6. まとめ
          </p>
          <h2 className="mt-3 text-2xl font-bold text-slate-900">
            今の「安心」より、将来の「自由」を買う
          </h2>
          <p className="mt-5 text-base leading-8 text-slate-700">
            6,000万円という借入額だけを見ると、誰でも一度は身構えます。
            ただ、注文住宅の本質は、今の支払いを小さく見せることではありません。
            将来にわたって発生する光熱費、修繕費、設備更新費、そしてインフレまで含めて、
            どちらが自由を残せるかを比較することです。
          </p>
          <p className="mt-4 text-base leading-8 text-slate-700">
            わが家にとっては、
            <span className="font-semibold text-emerald-800">
              ペアローン × 高性能住宅
            </span>
            という組み合わせが、単なる背伸びではなく、35年間のトータルコストを削るための合理的な選択でした。
            家を建てることは借金を背負うことでもありますが、同時に、将来の光熱費高騰やインフレから家計を守るシェルターを持つことでもあります。
          </p>
        </section>
      </article>
    </main>
  );
}
