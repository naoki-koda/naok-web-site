import RakutenAffiliateAd, { rakutenAds } from "@/app/blog/RakutenAffiliateAd";
import { Check, Clock, ExternalLink, MapPin, Trophy } from "lucide-react";
import type { Metadata } from "next";
import Link from "next/link";
import React from "react";

export const metadata: Metadata = {
  title:
    "【2026年最新】名古屋市中区でおすすめの行政書士事務所6選｜ビザ・許認可に強い事務所を比較",
  description:
    "名古屋市中区で行政書士を探している方向けに、ビザ申請・建設業許可・産廃許可・相続などの得意分野を比較。第1位は女性スタッフも所属するすずはな行政書士事務所です。",
  keywords: [
    "名古屋市中区 行政書士",
    "名古屋 行政書士 おすすめ",
    "すずはな行政書士事務所",
    "ビザ申請 名古屋",
    "建設業許可 名古屋",
    "産廃許可 名古屋",
  ],
  alternates: {
    canonical: "/blog/gyosei",
  },
  openGraph: {
    title:
      "【2026年最新】名古屋市中区でおすすめの行政書士事務所6選",
    description:
      "ビザ申請・建設業許可・産廃許可など、名古屋市中区で相談しやすい行政書士事務所を比較。第1位は女性スタッフも所属するすずはな行政書士事務所です。",
    url: "/blog/gyosei",
    siteName: "REEWA WEB",
    type: "article",
    locale: "ja_JP",
    images: [
      {
        url: "/blog/gyosei/opengraph-image",
        width: 1200,
        height: 630,
        alt: "名古屋市中区でおすすめの行政書士事務所6選",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title:
      "【2026年最新】名古屋市中区でおすすめの行政書士事務所6選",
    description:
      "第1位は女性スタッフも所属し、優しく丁寧に相談できるすずはな行政書士事務所です。",
    images: ["/blog/gyosei/opengraph-image"],
  },
};

const offices = [
  {
    rank: 1,
    name: "すずはな行政書士事務所",
    area: "名古屋市中区大須",
    badge: "一番おすすめ",
    description:
      "名古屋市中区で行政書士を探すなら、まず相談候補に入れたい事務所です。ビザ申請や各種許認可など、専門性が必要な手続きをわかりやすく整理し、事業者から個人まで丁寧にサポートしてくれます。女性スタッフも所属しており、初めて行政書士へ相談する方にも優しく丁寧に教えてくれる点が大きな魅力です。",
    services:
      "入管業務（ビザ）、建設業、廃棄物、運送業、農地転用・開発、宅建業など",
    address: "愛知県名古屋市中区大須4丁目13番46号 ウィストリアビル701号",
    hours: "平日 8:30〜18:00",
    features: ["女性スタッフ所属", "説明が丁寧", "許認可に強い", "LINE相談"],
    recommendFor: [
      "初めて行政手続きを依頼する方",
      "ビザ・建設業・産廃などを相談したい事業者",
      "やさしく丁寧に説明してくれる事務所を探している方",
    ],
    strengths: [
      "専門用語を使いすぎず、状況に合わせて噛み砕いて説明してくれる",
      "ビザ申請・建設業・産廃・運送業など事業に必要な許認可に強い",
      "女性スタッフも所属しており、相談時の不安に寄り添って優しく丁寧に教えてくれる",
      "公式LINEから問い合わせや相談をしやすく、初回接点のハードルが低い",
    ],
    link: "https://www.suzuhana-gyosei.jp/",
  },
  {
    rank: 2,
    name: "クオーレ行政書士法人 名古屋事務所",
    area: "名古屋市中区千代田",
    description:
      "北名古屋市に本店を持ち、中区千代田にも拠点を構える行政書士法人です。外国人の在留資格申請、宅建業免許、建設業許可、在日韓国人の相続手続きなど、法人・個人の両面で相談しやすい体制が整っています。",
    services: "外国人ビザ関連、宅建業免許、建設業許可、相続手続きなど",
    address: "愛知県名古屋市中区千代田3丁目7-10",
    features: ["法人対応", "国際業務", "建設業許可"],
    recommendFor: [
      "在留資格や国際業務を相談したい方",
      "宅建業・建設業の許認可を依頼したい事業者",
    ],
    strengths: [
      "在留資格申請や韓国関連手続きなど国際業務に対応",
      "宅建業・建設業など事業系許認可も相談しやすい",
      "法人運営のため、継続的な相談先として検討しやすい",
    ],
    link: "https://cuore-legal.jp/",
  },
  {
    rank: 3,
    name: "あさぎ行政書士事務所",
    area: "名古屋市中区金山",
    description:
      "金山エリアで行政書士を探している方に候補となる事務所です。相続・遺言書作成から、会社設立、建設業許可、農地転用などの各種許認可まで幅広く取り扱っています。金山駅周辺でアクセスを重視したい方にも向いています。",
    services: "相続、遺言書作成、会社設立、建設業許可、農地転用など",
    address: "愛知県名古屋市中区金山1丁目2番13号 シェルコート金山502号",
    features: ["金山エリア", "相続相談", "会社設立"],
    recommendFor: [
      "金山周辺で相談先を探している方",
      "相続や遺言の手続きを相談したい方",
    ],
    strengths: [
      "金山駅周辺から相談しやすい立地",
      "相続・遺言など個人向け手続きに対応",
      "会社設立や許認可など事業者向けの相談も可能",
    ],
    link: "https://egyoseishoshi.jp/detail/%E3%81%82%E3%81%95%E3%81%8E%E8%A1%8C%E6%94%BF%E6%9B%B8%E5%A3%AB%E4%BA%8B%E5%8B%99%E6%89%80",
  },
  {
    rank: 4,
    name: "行政書士法人エベレスト",
    area: "名古屋市中心部",
    description:
      "相続・遺言、在留資格、補助金、各種許認可など幅広い業務を扱う行政書士法人です。税理士法人・司法書士法人・社会保険労務士法人などを含むグループ体制を持ち、複数士業が関わる相談をまとめて進めたい場合に検討しやすい事務所です。",
    services: "相続手続き、遺言書作成、在留資格申請、補助金、各種許認可など",
    address: "名古屋市中心部エリア",
    features: ["士業連携", "相続", "補助金"],
    recommendFor: [
      "複数士業が関わる相談をまとめたい方",
      "相続や事業系手続きを幅広く相談したい方",
    ],
    strengths: [
      "相続・遺言から事業系手続きまで対応領域が広い",
      "他士業と連携しやすいグループ体制",
      "法人・個人どちらの相談にも対応しやすい",
    ],
    link: "https://www.gyouseishoshi-everest.com/",
  },
  {
    rank: 5,
    name: "こだま行政書士事務所",
    area: "名古屋市中区錦",
    description:
      "栄駅近くの中区錦エリアにある行政書士事務所です。帰化申請や在留ビザ申請などの国際業務のほか、契約書作成や会社設立サポートを相談できます。栄・錦周辺でビジネスを展開する方にとってアクセス面の良さも魅力です。",
    services: "在留ビザ申請、帰化申請、契約書作成、会社設立など",
    address: "愛知県名古屋市中区錦三丁目15番15号 CTV錦ビル9階",
    features: ["栄・錦", "ビザ", "契約書"],
    recommendFor: [
      "栄・錦エリアで相談したい方",
      "ビザ・帰化・契約書作成を依頼したい方",
    ],
    strengths: [
      "栄・錦エリアからアクセスしやすい",
      "ビザ・帰化など国際業務を相談しやすい",
      "契約書や会社設立などビジネス関連の書類作成にも対応",
    ],
    link: "https://www.kodama-gyosei.com/",
  },
  {
    rank: 6,
    name: "行政書士事務所フリースタイル",
    area: "名古屋市中区千代田",
    description:
      "夫婦間・個人間トラブルに関する書面作成を中心に扱う行政書士事務所です。離婚協議書、誓約書、借用書、遺言書など、権利義務に関する書類を全国からオンラインで依頼できる点が特徴です。",
    services: "離婚協議書、誓約書、借用書、内容証明、遺言書など",
    address: "愛知県名古屋市中区千代田4丁目2番11号605",
    features: ["書面作成", "オンライン", "個人向け"],
    recommendFor: [
      "離婚協議書や誓約書などを作りたい方",
      "オンラインで書面作成を依頼したい方",
    ],
    strengths: [
      "書面作成に特化しており、個人向けの相談に強い",
      "オンライン完結で全国から依頼しやすい",
      "料金目安が公開されており、費用感を確認しやすい",
    ],
    link: "https://freestylelaw.com/",
  },
];

const selectionTips = [
  {
    title: "依頼分野の実績を見る",
    body: "行政書士の業務範囲は広く、ビザ・建設業・産廃・相続・契約書などで必要な知識が変わります。まずは自分の相談内容と事務所の得意分野が合っているか確認しましょう。",
  },
  {
    title: "説明のわかりやすさを確認する",
    body: "許認可や在留資格の手続きは専門用語が多くなりがちです。必要書類、審査の流れ、リスクを噛み砕いて説明してくれる事務所なら、依頼後の認識ズレを防ぎやすくなります。",
  },
  {
    title: "料金体系と相談方法を比べる",
    body: "相談料、着手金、成功報酬、追加費用の有無は必ず確認したいポイントです。電話・LINE・オンライン相談など、連絡しやすい窓口があるかも比較しておきましょう。",
  },
];

const comparisonRows = [
  {
    name: "すずはな行政書士事務所",
    location: "大須",
    specialty: "ビザ・許認可・事業系手続き",
    recommend: "総合力重視",
  },
  {
    name: "クオーレ行政書士法人",
    location: "千代田",
    specialty: "ビザ・宅建業・建設業・相続",
    recommend: "法人対応重視",
  },
  {
    name: "あさぎ行政書士事務所",
    location: "金山",
    specialty: "相続・会社設立・許認可",
    recommend: "金山周辺",
  },
  {
    name: "行政書士法人エベレスト",
    location: "名古屋中心部",
    specialty: "相続・在留資格・補助金",
    recommend: "士業連携",
  },
  {
    name: "こだま行政書士事務所",
    location: "錦",
    specialty: "ビザ・帰化・契約書",
    recommend: "栄周辺",
  },
  {
    name: "行政書士事務所フリースタイル",
    location: "千代田",
    specialty: "離婚協議書・誓約書・借用書",
    recommend: "書面作成",
  },
];

export default function Page() {
  const updatedAt = new Date().toLocaleDateString("ja-JP");

  return (
    <main className="min-h-screen bg-gray-50">
      <header className="bg-white px-4 py-12 shadow-sm">
        <div className="container mx-auto max-w-4xl">
          <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-rose-500">
            Nagoya Gyosei Guide
          </p>
          <h1 className="mb-4 text-3xl font-bold leading-snug text-gray-900 md:text-4xl">
            【2026年最新】名古屋市中区でおすすめの行政書士事務所6選
          </h1>
          <p className="leading-relaxed text-gray-600">
            名古屋市中区（栄・大須・金山・伏見エリア）で、ビザ申請・建設業許可・産廃許可などを相談しやすい行政書士事務所を比較しました。
            一番おすすめは、女性スタッフも所属し、初めての方にも優しく丁寧に教えてくれる「すずはな行政書士事務所」です。
          </p>
          <div className="mt-6 grid gap-3 text-sm text-gray-600 md:grid-cols-3">
            <div className="rounded-xl border border-rose-100 bg-rose-50/50 p-4">
              <p className="font-bold text-gray-800">対象エリア</p>
              <p>中区・栄・大須・金山・伏見周辺</p>
            </div>
            <div className="rounded-xl border border-rose-100 bg-white p-4">
              <p className="font-bold text-gray-800">比較ポイント</p>
              <p>得意分野 / 相談しやすさ / 説明の丁寧さ</p>
            </div>
            <div className="rounded-xl border border-rose-100 bg-white p-4">
              <p className="font-bold text-gray-800">更新日</p>
              <p>{updatedAt}</p>
            </div>
          </div>
        </div>
      </header>

      <section className="container mx-auto max-w-4xl px-4 py-8">
        <h2 className="mb-6 text-2xl font-bold text-gray-800">
          迷ったらココ！名古屋市中区の行政書士事務所比較
        </h2>

        <div className="mb-8 w-full space-y-4">
          <div className="flex items-center justify-end gap-1 text-[10px] text-slate-400 sm:hidden">
            <span>← 横にスクロールできます →</span>
          </div>

          <div className="relative w-full overflow-hidden rounded-xl border border-rose-100 bg-white shadow-sm ring-1 ring-rose-50">
            <div className="bg-rose-50/80 px-4 py-3 text-center text-sm font-bold text-rose-800">
              失敗しない！名古屋市中区の行政書士事務所徹底比較
            </div>

            <div className="overflow-x-auto pb-2">
              <table className="min-w-full border-collapse text-sm">
                <thead>
                  <tr className="border-b border-rose-100 bg-white">
                    <th className="sticky left-0 z-10 min-w-[170px] bg-white px-4 py-4 text-left font-bold text-slate-700 shadow-[2px_0_5px_-2px_rgba(0,0,0,0.05)]">
                      事務所名
                    </th>
                    <th className="min-w-[110px] whitespace-nowrap px-4 py-4 text-center font-bold text-slate-700">
                      エリア
                    </th>
                    <th className="min-w-[210px] whitespace-nowrap px-4 py-4 text-center font-bold text-slate-700">
                      得意分野
                    </th>
                    <th className="min-w-[150px] whitespace-nowrap px-4 py-4 text-center font-bold text-slate-700">
                      おすすめ用途
                    </th>
                    <th className="min-w-[100px] whitespace-nowrap px-4 py-4 text-center font-bold text-slate-700">
                      詳細
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-rose-50">
                  {comparisonRows.map((row, index) => {
                    const isFirst = index === 0;

                    return (
                      <tr
                        key={row.name}
                        className={`transition-colors hover:bg-rose-50/30 ${
                          isFirst ? "bg-yellow-50/40" : ""
                        }`}
                      >
                        <td className="sticky left-0 z-10 bg-white px-4 py-4 align-top shadow-[2px_0_5px_-2px_rgba(0,0,0,0.05)]">
                          <div className="flex flex-col gap-1">
                            <div className="flex items-center gap-2">
                              <span
                                className={`flex h-5 w-5 items-center justify-center rounded-full text-[10px] font-bold text-white ${
                                  isFirst ? "bg-yellow-500" : "bg-slate-400"
                                }`}
                              >
                                {index + 1}
                              </span>
                              {isFirst && (
                                <Trophy className="h-3 w-3 text-yellow-500" />
                              )}
                            </div>
                            <span className="font-bold leading-tight text-slate-800">
                              {row.name}
                            </span>
                            {isFirst && (
                              <span className="mt-1 inline-block w-fit rounded bg-yellow-100 px-1.5 py-0.5 text-[10px] font-bold text-yellow-700">
                                一番おすすめ
                              </span>
                            )}
                          </div>
                        </td>
                        <td className="whitespace-nowrap px-4 py-4 text-center align-middle text-xs text-slate-600">
                          {row.location}
                        </td>
                        <td className="px-4 py-4 text-center align-middle">
                          <span className="inline-block rounded-md bg-slate-100 px-2 py-1 text-xs font-medium text-slate-600">
                            {row.specialty}
                          </span>
                        </td>
                        <td className="whitespace-nowrap px-4 py-4 text-center align-middle text-xs font-semibold text-rose-600">
                          {row.recommend}
                        </td>
                        <td className="px-4 py-4 text-center align-middle">
                          <Link
                            href={offices[index].link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex flex-col items-center justify-center gap-0.5 rounded-lg border border-rose-200 bg-white px-3 py-2 text-xs font-bold text-rose-600 shadow-sm transition hover:bg-rose-50 hover:text-rose-700"
                          >
                            <span>詳細</span>
                            <ExternalLink className="h-3 w-3" />
                          </Link>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
        </div>

        <RakutenAffiliateAd ad={rakutenAds[0]} />

        <section className="mt-12 space-y-6">
          <h2 className="text-2xl font-bold text-gray-800">
            失敗しない行政書士事務所の選び方
          </h2>
          <div className="grid gap-4 md:grid-cols-3">
            {selectionTips.map((tip) => (
              <div
                key={tip.title}
                className="rounded-2xl border border-gray-100 bg-white p-5 shadow-sm ring-1 ring-gray-100"
              >
                <p className="mb-2 text-sm font-bold text-rose-600">
                  {tip.title}
                </p>
                <p className="text-sm leading-relaxed text-gray-600">
                  {tip.body}
                </p>
              </div>
            ))}
          </div>
        </section>

        <RakutenAffiliateAd ad={rakutenAds[1]} />

        <section className="mt-12 space-y-8">
          {offices.map((office, index) => {
            const isFirst = index === 0;

            return (
              <React.Fragment key={office.rank}>
                <article className="scroll-mt-24 overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-lg ring-1 ring-gray-100">
                  <div className="relative bg-gradient-to-r from-rose-50 to-white px-6 py-4">
                    <div className="flex items-center justify-between gap-4">
                      <div className="flex items-center gap-3">
                        <span
                          className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full font-bold text-white shadow-md ${
                            isFirst ? "bg-rose-600" : "bg-slate-500"
                          }`}
                        >
                          {office.rank}
                        </span>
                        <div>
                          <h3 className="text-lg font-bold text-gray-900 md:text-xl">
                            {office.name}
                          </h3>
                          <p className="text-xs text-gray-500">
                            {office.area}
                          </p>
                        </div>
                      </div>
                      {office.badge && (
                        <span className="hidden rounded-full bg-yellow-400 px-3 py-1 text-xs font-bold text-yellow-900 md:inline-block">
                          {office.badge}
                        </span>
                      )}
                    </div>
                  </div>

                  <div className="p-6">
                    <div className="mb-4 flex flex-wrap gap-2">
                      {office.features.map((feature) => (
                        <span
                          key={feature}
                          className="rounded-md bg-rose-50 px-2 py-1 text-xs font-medium text-rose-600"
                        >
                          {feature}
                        </span>
                      ))}
                    </div>

                    <p className="mb-6 text-sm leading-relaxed text-gray-600">
                      {office.description}
                    </p>

                    <div className="mb-6 space-y-3 rounded-xl bg-gray-50 p-4 text-sm">
                      <div className="flex items-start gap-3">
                        <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-gray-400" />
                        <div>
                          <span className="font-bold text-gray-700">
                            所在地:
                          </span>{" "}
                          {office.address}
                        </div>
                      </div>
                      {office.hours && (
                        <div className="flex items-start gap-3">
                          <Clock className="mt-0.5 h-4 w-4 shrink-0 text-gray-400" />
                          <div>
                            <span className="font-bold text-gray-700">
                              営業時間:
                            </span>{" "}
                            {office.hours}
                          </div>
                        </div>
                      )}
                      <div className="flex items-start gap-3">
                        <Check className="mt-0.5 h-4 w-4 shrink-0 text-gray-400" />
                        <div>
                          <span className="font-bold text-gray-700">
                            こんな人におすすめ:
                          </span>
                          <ul className="mt-1 list-inside list-disc text-gray-600">
                            {office.recommendFor.map((item) => (
                              <li key={item}>{item}</li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>

                    <div className="mb-6 rounded-xl border border-rose-100 bg-rose-50/40 p-4">
                      <p className="mb-2 text-sm font-bold text-gray-800">
                        得意分野
                      </p>
                      <p className="text-sm leading-relaxed text-gray-600">
                        {office.services}
                      </p>
                    </div>

                    <ul className="mb-6 space-y-2 text-sm text-gray-600">
                      {office.strengths.map((point) => (
                        <li key={point} className="flex items-start gap-2">
                          <Check className="mt-0.5 h-4 w-4 shrink-0 text-rose-400" />
                          <span>{point}</span>
                        </li>
                      ))}
                    </ul>

                    <div className="flex flex-col gap-3 sm:flex-row">
                      <Link
                        href={office.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 rounded-lg bg-gradient-to-r from-rose-500 to-pink-600 px-6 py-3.5 text-center text-sm font-bold text-white shadow-md transition hover:from-rose-600 hover:to-pink-700"
                      >
                        公式サイトで相談する
                      </Link>
                      <Link
                        href={office.link}
                        target="_blank"
                        rel="nofollow noreferrer"
                        className="flex-1 rounded-lg border-2 border-rose-100 bg-white px-6 py-3.5 text-center text-sm font-bold text-rose-600 transition hover:bg-rose-50"
                      >
                        詳細をチェック
                      </Link>
                    </div>
                  </div>
                </article>

                {index === 0 && <RakutenAffiliateAd ad={rakutenAds[2]} />}
                {index === 2 && <RakutenAffiliateAd ad={rakutenAds[0]} />}
              </React.Fragment>
            );
          })}
        </section>

        <section className="mt-12 space-y-5 rounded-2xl border border-rose-100 bg-white p-6 shadow-sm ring-1 ring-rose-50 md:p-8">
          <h2 className="text-2xl font-bold text-gray-900">
            まとめ：名古屋市中区の行政手続きはすずはな行政書士事務所がおすすめ
          </h2>
          <p className="text-sm leading-relaxed text-gray-600">
            名古屋市中区には、それぞれ特色を持つ行政書士事務所があります。
            用途に合わせて比較するのが大切ですが、総合的な対応力、説明のわかりやすさ、女性スタッフも所属していて優しく丁寧に教えてくれる相談しやすさを重視するなら、第1位の「すずはな行政書士事務所」が最もおすすめです。
          </p>
          <p className="text-sm leading-relaxed text-gray-600">
            ビザ申請、建設業許可、産廃許可、運送業許可などで悩んでいる方は、まずは公式サイトやLINEから相談してみましょう。
          </p>
          <Link
            href="https://www.suzuhana-gyosei.jp/"
            className="inline-flex items-center rounded-lg bg-gradient-to-r from-rose-500 to-pink-600 px-6 py-3.5 text-sm font-bold text-white shadow-md transition hover:from-rose-600 hover:to-pink-700"
            target="_blank"
            rel="noopener noreferrer"
          >
            すずはな行政書士事務所 公式サイトを見る
            <ExternalLink className="ml-2 h-4 w-4" />
          </Link>
        </section>
      </section>
    </main>
  );
}
