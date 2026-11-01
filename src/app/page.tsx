"use client";

import MyDrawer from "@/app/ui/Drawer";
import { shipporiAntiqueB1, zenKaku } from "@/app/ui/fonts";
import Image from "next/image";
import Link from "next/link";
import Script from "next/script";
import type { ReactNode } from "react";
import styles from "./home-sections.module.css";

export default function Home() {
  const measures = [
    { label: "表示速度", note: "Next.js SPA + SSG", value: "リロード 0" },
    { label: "制作費用", note: "1ページあたり", value: "3万円〜" },
    { label: "制作実績", note: "名古屋 建具店の検索結果", value: "1位" },
    { label: "セキュリティ", note: "PHP・公開DBを使わない静的配信", value: "PHP 0" },
  ];

  const speedPoints = [
    {
      title: "Next.js のSPA構成",
      text: "ページを移るたびの再読み込みがなく、クリックした瞬間に次の画面へ切り替わります。",
    },
    {
      title: "PWAを見据えた設計",
      text: "ホーム画面への追加など、アプリに近い使い方ができるところまで見越して作ります。",
    },
    {
      title: "静的サイト生成（SSG）",
      text: "サーバーに毎回問い合わせず、事前に用意したHTMLを表示するため速くなります。",
    },
  ];

  const pricePoints = [
    {
      title: "すべてを自社で対応",
      text: "開発・運用・保守・打ち合わせまで外注せず、ワンストップで担当します。",
    },
    {
      title: "中間マージンゼロ",
      text: "代理店や営業担当を挟まないため、その分のコストがかかりません。",
    },
    {
      title: "効率的な開発体制",
      text: "実績のある開発手法を使い、短い納期と低いコストを両立させます。",
    },
  ];

  const sellPoints = [
    {
      title: "導線重視の構成",
      text: "訪れた人がどう動くかを想定して、CTAやナビゲーションを設計します。",
    },
    {
      title: "高速レンダリング",
      text: "表示速度はCore Web Vitalsの評価に直結し、検索での見つかりやすさにつながります。",
    },
    {
      title: "レスポンシブデザイン対応",
      text: "多くの人が使うスマホの画面で、見やすく・使いやすく・買いやすく整えます。",
    },
  ];

  const securityComparison = [
    {
      label: "公開サーバーで動くもの",
      php: "アクセスのたびにPHPプログラムが実行される",
      reewa: "事前に生成したHTMLを配信。サーバーで動く処理は最小限",
    },
    {
      label: "データベース",
      php: "公開サーバー上で稼働し、SQLインジェクションの標的になりやすい",
      reewa: "公開サイト側にデータベースを置かない",
    },
    {
      label: "管理画面",
      php: "ログイン画面（/wp-admin など）が公開され、不正ログインを狙われる",
      reewa: "公開サイトに管理画面を置かず、更新はヘッドレスCMSで別管理",
    },
    {
      label: "プラグイン",
      php: "第三者製プラグインの脆弱性が侵入口になりやすい",
      reewa: "必要な機能だけを自社で実装し、依存パッケージを管理",
    },
    {
      label: "改ざんへの備え",
      php: "サーバー上のファイルが書き換えられると、そのまま公開される",
      reewa: "公開ファイルはビルド時に固定。問題があっても再デプロイですぐ戻せる",
    },
  ];

  const verticalFocus = [
    {
      title: "美容・サロン向けホームページ制作",
      description:
        "美容室・ネイルサロン・エステ・ピラティススタジオなど、予約導線とSNS集客が重要な業種に特化。Instagram連携、ビフォーアフターギャラリー、スタッフ紹介、クーポン連動などをワンストップで構築します。",
      highlights: [
        "スマホファーストなUIとLINE/Instagram連携予約導線",
        "口コミ・ホットペッパー・Googleビジネスプロフィール活用",
        "美容医療LPやキャンペーンLPのスピード制作",
      ],
    },
    {
      title: "職人・工務店・製造業のブランドサイト",
      description:
        "匠の技・施工実績・職人ストーリーを伝え、BtoB/BtoC双方の信頼獲得を目指した構成。見積もり依頼フォーム、CAD図面・製品カタログのダウンロード、補助金情報など専門性をPRします。",
      highlights: [
        "施工事例・製品ギャラリー・お客様の声の見せ方",
        "職人採用ページ・求人導線の設計",
        "英語資料・多言語ページで海外取引にも対応",
      ],
    },
    {
      title: "飲食店・カフェ・宿泊施設の集客設計",
      description:
        "飲食店・カフェ・居酒屋・宿泊施設などローカル検索に強い導線を構築。Googleマップ対策、メニュー管理、ネット予約、季節イベントLP制作、インバウンド向け多言語化まで対応します。",
      highlights: [
        "フードメニュー・価格・アレルギー表示の管理ツール",
        "食べログ・ぐるなび・Uber Eatsなど外部サービス導線",
        "フォトツアーや宿泊プランの訴求強化、OTA連携提案",
      ],
    },
    {
      title: "クリニック・歯科・美容医療サイト",
      description:
        "医療広告ガイドライン・薬機法に配慮したコンテンツ制作と動線設計。ネット予約、初診案内、症例写真、AIによるFAQ生成、英語ページなど患者様の不安を解消する情報を整備します。",
      highlights: [
        "診療メニュー・料金表・医師紹介テンプレート",
        "カウンセリング予約とLINE/メール自動返信の設定",
        "口コミ施策・MEO対策・医療SEOライティング支援",
      ],
    },
  ];

  const featuredWork = {
    title: "袖野建具 様",
    url: "https://www.sodeno-tategu.jp/",
    description:
      "「名古屋 建具店」の検索結果で1位を獲得。公開から半年でお問い合わせ6件、成約2件につながり、制作費用分の利益を回収しました。",
    stats: [
      { label: "検索結果「名古屋 建具店」", value: "1位" },
      { label: "公開から半年のお問い合わせ", value: "6件" },
      { label: "成約", value: "2件" },
    ],
  };

  const otherWorks = [
    {
      title: "すずはな行政書士事務所 様",
      url: "https://www.suzuhana-gyosei.jp/ja",
      image: "/suzuhana.jpg",
      description:
        "名古屋市中区の行政書士事務所の公式サイト。ビザ申請や建設業・廃棄物などの許認可を、初めての方にもわかりやすく案内する構成で制作しました。",
      tags: ["日本語・英語・中国語の3言語対応", "Next.js", "許認可・入管業務"],
    },
  ];

  const faqItems = [
    {
      question: "WordPressなどのPHP製サイトと比べて、セキュリティは大丈夫ですか？",
      answer:
        "公開サーバーでPHPやデータベースを動かさず、事前に生成したページを配信する構成のため、PHP製CMSで多い管理画面への不正ログインやプラグインの脆弱性を突いた攻撃の入口がありません。利用しているライブラリのセキュリティ更新も継続して適用します。",
    },
    {
      question: "名古屋でSEOに強いホームページ制作を依頼できますか？",
      answer:
        "はい。コアウェブバイタルの改善と構造化データの設計を標準で行い、名古屋などの地域キーワードでの検索流入を狙えるよう内部施策を実装します。",
    },
    {
      question: "制作後の検索キーワード対策もサポートしてもらえますか？",
      answer:
        "公開後は検索クエリのレポート共有、コンテンツ改善提案、ローカルSEO対策のアドバイスまで継続サポートします。",
    },
    {
      question: "Q&Aやブログなどのコンテンツ更新はお願いできますか？",
      answer:
        "ご要望に合わせてヒアリングし、集客につながるQ&Aやナレッジ記事の企画・作成・更新まで代行いたします。",
    },
    {
      question: "スマホ表示のパフォーマンスはどのくらい重要視していますか？",
      answer:
        "モバイルでの表示速度を最優先して設計し、画像の最適化や遅延読み込みを組み込んで離脱率を下げます。",
    },
    {
      question: "PWAに対応したホームページ制作は可能ですか？",
      answer:
        "はい。ホーム画面追加やアプリライクな導線設計を見据えたPWA対応サイトの設計に対応しています。表示速度やモバイルUXも含めて、Webサイトを使いやすく最適化します。",
    },
    {
      question: "問い合わせにつながる導線設計は含まれていますか？",
      answer:
        "CTA配置やフォーム最適化、FAQコンテンツなど、問い合わせ獲得に直結するUXをプランニングします。",
    },
  ];

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqItems.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };

  const serviceJsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: "PWA対応ホームページ制作",
    name: "REEWA WEBのPWA対応ホームページ制作",
    provider: {
      "@type": "ProfessionalService",
      name: "REEWA WEB",
      url: "https://www.reewa-web.jp/",
    },
    areaServed: {
      "@type": "City",
      name: "名古屋市",
    },
    description:
      "Next.jsを用いた高速なホームページ制作に加え、PWA対応を見据えたアプリライクなUI、モバイル最適化、SEO設計まで一貫して提供します。",
    offers: {
      "@type": "Offer",
      availability: "https://schema.org/InStock",
      url: "https://www.reewa-web.jp/contact",
    },
  };

  return (
    <main className={`${styles.page} ${zenKaku.className} pb-16`}>
      <Script
        id="service-structured-data"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd) }}
      />
      <Script
        id="faq-structured-data"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

      <div className="fixed bottom-6 left-1/2 z-50 -translate-x-1/2">
        <MyDrawer />
      </div>

      {/* ヒーロー */}
      <section className="mx-auto max-w-6xl px-6 pt-16 pb-14 md:pt-24 md:pb-20">
        <div className="grid gap-12 md:grid-cols-[1.15fr_0.85fr] md:items-start">
          <div>
            <h1
              className={`${shipporiAntiqueB1.className} text-5xl leading-[1.15] md:text-6xl`}
            >
              速い。安い。
              <br />
              売れる。
            </h1>
            <p className="mt-6 max-w-md text-base leading-relaxed text-[#5b5748] md:text-lg">
              名古屋を拠点に、美容室・工務店・クリニックなど地域の中小事業者向けにNext.js製の高速サイトを制作しています。打ち合わせから公開後の運用まで、外注せず自社だけで対応します。
            </p>
            <div className="mt-9 flex flex-wrap items-center gap-x-8 gap-y-4 text-sm font-bold">
              <Link
                href="/contact"
                className="border-b-2 border-[#15181d] pb-1 transition-colors hover:border-[#f0b429]"
              >
                無料で相談する
              </Link>
              <Link
                href="/works"
                className="border-b-2 border-transparent pb-1 text-[#5b5748] transition-colors hover:border-[#15181d] hover:text-[#15181d]"
              >
                制作実績を見る
              </Link>
            </div>
          </div>

          <div className={styles.scale}>
            {measures.map((m) => (
              <div key={m.label} className={styles.scaleRow}>
                <p className="text-xs font-bold text-[#5b5748]">
                  {m.label}
                  <span className="ml-2 font-normal text-[#8a8370]">
                    {m.note}
                  </span>
                </p>
                <p
                  className={`${shipporiAntiqueB1.className} mt-1 text-3xl md:text-4xl`}
                >
                  {m.value}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 速い */}
      <section id="speed" className={`${styles.band} mx-auto max-w-6xl px-6`}>
        <div className="grid gap-10 md:grid-cols-[0.8fr_1.2fr] md:gap-16">
          <div>
            <IconTile src="/fastIcon.webp" label="速い" />
            <p className={`${shipporiAntiqueB1.className} mt-6 text-6xl md:text-7xl`}>
              0
            </p>
            <p className="mt-2 text-lg font-bold">
              リロードで止まらないサイト
            </p>
            <p className="mt-4 text-sm leading-relaxed text-[#5b5748]">
              WordPressより高速に動く、SPA・PWA対応のサイトを作ります。ページを移るたびに読み込みが入らないので、見ている人を待たせません。
            </p>
          </div>
          <div>
            <div className={styles.specList}>
              {speedPoints.map((item) => (
                <div key={item.title} className={styles.specItem}>
                  <p className="font-bold">{item.title}</p>
                  <p className="mt-1 text-sm leading-relaxed text-[#5b5748]">
                    {item.text}
                  </p>
                </div>
              ))}
            </div>
            <div className={`${styles.pullquote} mt-8`}>
              <p className="text-sm leading-relaxed text-[#5b5748]">
                表示が遅いサイトは、半数以上の人がそのまま離れてしまうといわれています。速さは使いやすさだけでなく、検索での見つかりやすさにも直結します。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 安い */}
      <section id="price" className={`${styles.band} mx-auto max-w-6xl px-6`}>
        <div className="grid gap-10 md:grid-cols-[1.2fr_0.8fr] md:gap-16">
          <div className="md:order-1">
            <div className={styles.specList}>
              {pricePoints.map((item) => (
                <div key={item.title} className={styles.specItem}>
                  <p className="font-bold">{item.title}</p>
                  <p className="mt-1 text-sm leading-relaxed text-[#5b5748]">
                    {item.text}
                  </p>
                </div>
              ))}
            </div>
            <div className={`${styles.pullquote} mt-8`}>
              <p className="text-sm leading-relaxed text-[#5b5748]">
                「安かろう悪かろう」ではありません。開発から運用まで一人で担当するからこそ伝達のロスがなく、ご相談から納品まで誠実に対応できます。
              </p>
            </div>
          </div>
          <div className="md:order-2">
            <IconTile src="/cheapIcon.webp" label="安い" />
            <p
              className={`${shipporiAntiqueB1.className} mt-6 text-5xl md:text-6xl`}
            >
              3万円〜
            </p>
            <p className="mt-2 text-lg font-bold">1ページあたりの制作費</p>
            <p className="mt-4 text-sm leading-relaxed text-[#5b5748]">
              最新のフレームワークで開発時間を短縮し、営業・打ち合わせまで自社スタッフが担当することで、外注費や中間マージンを省いています。
            </p>
          </div>
        </div>
      </section>

      {/* 売れる */}
      <section id="sell" className={`${styles.band} mx-auto max-w-6xl px-6`}>
        <div className="grid gap-10 md:grid-cols-[0.8fr_1.2fr] md:gap-16">
          <div>
            <IconTile src="/buyIcon.webp" label="売れる" />
            <p className={`${shipporiAntiqueB1.className} mt-6 text-6xl md:text-7xl`}>
              理由
            </p>
            <p className="mt-2 text-lg font-bold">
              売れるサイトには、理由があります
            </p>
            <p className="mt-4 text-sm leading-relaxed text-[#5b5748]">
              デザインだけでなく、導線設計・文章構成・ユーザー心理までを意識した「成果の出る」サイトを制作します。
            </p>
          </div>
          <div>
            <div className={styles.specList}>
              {sellPoints.map((item) => (
                <div key={item.title} className={styles.specItem}>
                  <p className="font-bold">{item.title}</p>
                  <p className="mt-1 text-sm leading-relaxed text-[#5b5748]">
                    {item.text}
                  </p>
                </div>
              ))}
            </div>
            <div className={`${styles.pullquote} mt-8`}>
              <p className="text-sm leading-relaxed text-[#5b5748]">
                見た目が整っているだけでは売れません。行動を起こしやすい導線と検索に強い作りを組み合わせて、「見られる」を「売れる」に変えます。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 守れる */}
      <section id="security" className={`${styles.band} mx-auto max-w-6xl px-6`}>
        <div className="grid gap-10 md:grid-cols-[0.8fr_1.2fr] md:gap-16">
          <div>
            <IconTile label="守れる">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.6"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-full w-full text-white"
                aria-hidden="true"
              >
                <path d="M12 3 4.5 6v5.5c0 4.6 3.2 8.4 7.5 9.5 4.3-1.1 7.5-4.9 7.5-9.5V6L12 3Z" />
                <path d="m8.8 12.2 2.3 2.3 4.3-4.6" />
              </svg>
            </IconTile>
            <p className={`${shipporiAntiqueB1.className} mt-6 text-6xl md:text-7xl`}>
              PHP 0
            </p>
            <p className="mt-2 text-lg font-bold">
              狙われる入口を、最初から作らない
            </p>
            <p className="mt-4 text-sm leading-relaxed text-[#5b5748]">
              WordPressをはじめとするPHP製のサイトは、プログラム・データベース・管理画面がすべて公開サーバー上で動くため、攻撃の入口が多くなりがちです。REEWA
              WEBのサイトはPHPを使わず、事前に生成したページを配信する構成にしています。
            </p>
          </div>
          <div>
            <div className={styles.compareTable}>
              <div className={styles.compareHead}>
                <span />
                <span>一般的なPHP製サイト</span>
                <span className="text-[#15181d]">REEWA WEB（Next.js）</span>
              </div>
              {securityComparison.map((row) => (
                <div key={row.label} className={styles.compareRow}>
                  <p className="text-sm font-bold">{row.label}</p>
                  <p className="text-sm leading-relaxed text-[#8a8370]">
                    <span className="mr-2 text-xs font-bold md:hidden">PHP製</span>
                    {row.php}
                  </p>
                  <p className="text-sm font-bold leading-relaxed">
                    <span className="mr-2 text-xs text-[#b7811a] md:hidden">REEWA WEB</span>
                    {row.reewa}
                  </p>
                </div>
              ))}
            </div>
            <div className={`${styles.pullquote} mt-8`}>
              <p className="text-sm leading-relaxed text-[#5b5748]">
                どんな仕組みでも、脆弱性を完全にゼロにすることはできません。だからこそ攻撃される入口そのものを減らす作りを選び、使っているライブラリのセキュリティ更新も継続して適用しています。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 業種別 */}
      <section className="mx-auto max-w-6xl px-6 py-16">
        <h2 className="text-2xl font-bold md:text-3xl">
          業種に合わせて、集客の設計を変える
        </h2>
        <p className="mt-3 max-w-2xl text-sm leading-relaxed text-[#5b5748] md:text-base">
          美容、工務店、飲食、クリニックなど、業種ごとに効果的な見せ方と導線は変わります。それぞれの業種で実際に重視しているポイントをまとめました。
        </p>
        <div>
          {verticalFocus.map((item) => (
            <div key={item.title} className={styles.verticalRow}>
              <div className="grid gap-6 md:grid-cols-[0.9fr_1.6fr] md:gap-12">
                <div>
                  <h3 className="text-xl font-bold">{item.title}</h3>
                  <Link
                    href="/contact"
                    className="mt-4 inline-block border-b-2 border-transparent text-sm font-bold text-[#5b5748] transition-colors hover:border-[#15181d] hover:text-[#15181d]"
                  >
                    相談する
                  </Link>
                </div>
                <div>
                  <p className="text-sm leading-relaxed text-[#5b5748]">
                    {item.description}
                  </p>
                  <ul className="mt-4 space-y-1.5 text-xs leading-relaxed text-[#5b5748]">
                    {item.highlights.map((h) => (
                      <li key={h} className="flex gap-2">
                        <span
                          aria-hidden="true"
                          className="mt-[0.45em] h-[3px] w-[3px] shrink-0 rounded-full bg-[#f0b429]"
                        />
                        <span>{h}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 制作実績 */}
      <section className="mx-auto max-w-6xl px-6 py-16">
        <h2 className="text-2xl font-bold md:text-3xl">制作実績</h2>
        <p className="mt-6 text-xl font-bold">{featuredWork.title}</p>
        <div className={`${styles.caseBand} mt-4 p-8 md:p-12`}>
          <div className="grid gap-10 md:grid-cols-2 md:items-center">
            <div>
              <p className="text-sm leading-relaxed text-[#c9c4ad]">
                {featuredWork.description}
              </p>
              <div className="mt-8">
                {featuredWork.stats.map((s) => (
                  <div
                    key={s.label}
                    className={`${styles.caseStat} flex items-baseline justify-between gap-4 py-4`}
                  >
                    <span className="text-sm text-[#c9c4ad]">{s.label}</span>
                    <span
                      className={`${shipporiAntiqueB1.className} text-3xl text-[#f0b429]`}
                    >
                      {s.value}
                    </span>
                  </div>
                ))}
              </div>
              <a
                href={featuredWork.url}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 inline-block border-b-2 border-[#f0b429] pb-1 text-sm font-bold"
              >
                サイトを見る
              </a>
            </div>
            <div className="overflow-hidden rounded-xl">
              <Image
                src="/sodeno.png"
                alt="袖野建具様のホームページ紹介画像"
                width={1200}
                height={800}
                className="h-auto w-full object-cover"
              />
            </div>
          </div>
        </div>

        {otherWorks.map((work) => (
          <a
            key={work.url}
            href={work.url}
            target="_blank"
            rel="noopener noreferrer"
            className={`${styles.workRow} group mt-10 grid gap-8 md:grid-cols-[0.9fr_1.1fr] md:items-center`}
          >
            <div className="overflow-hidden rounded-xl bg-white">
              <Image
                src={work.image}
                alt={`${work.title}のホームページ紹介画像`}
                width={1200}
                height={630}
                className="h-auto w-full object-cover transition-transform duration-500 group-hover:scale-[1.02]"
              />
            </div>
            <div>
              <h3 className="text-xl font-bold md:text-2xl">{work.title}</h3>
              <p className="mt-4 text-sm leading-relaxed text-[#5b5748]">
                {work.description}
              </p>
              <ul className="mt-5 flex flex-wrap gap-2">
                {work.tags.map((tag) => (
                  <li
                    key={tag}
                    className="rounded-full border border-[#15181d]/20 px-3 py-1 text-xs font-bold text-[#5b5748]"
                  >
                    {tag}
                  </li>
                ))}
              </ul>
              <span className="mt-6 inline-block border-b-2 border-[#f0b429] pb-1 text-sm font-bold">
                サイトを見る
              </span>
            </div>
          </a>
        ))}

        <Link
          href="/works"
          className="mt-10 inline-block border-b-2 border-transparent pb-1 text-sm font-bold text-[#5b5748] transition-colors hover:border-[#15181d] hover:text-[#15181d]"
        >
          制作実績をすべて見る
        </Link>
      </section>

      {/* FAQ */}
      <section id="faq" className="mx-auto max-w-4xl px-6 py-16">
        <h2 className="text-2xl font-bold md:text-3xl">よくあるご質問</h2>
        <p className="mt-3 text-sm leading-relaxed text-[#5b5748] md:text-base">
          SEOや集客、制作フローについてよく聞かれることをまとめました。気になる点があれば、お気軽にご相談ください。
        </p>
        <div className="mt-10">
          {faqItems.map((item) => (
            <details key={item.question} className={`${styles.faqItem} group py-5`}>
              <summary className="flex cursor-pointer list-none items-center justify-between gap-6 text-left font-bold [&::-webkit-details-marker]:hidden">
                <span>{item.question}</span>
                <span className="shrink-0 text-xl font-normal text-[#5b5748] transition-transform duration-300 group-open:rotate-45">
                  +
                </span>
              </summary>
              <p className="mt-3 text-sm leading-relaxed text-[#5b5748]">
                {item.answer}
              </p>
            </details>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section
        id="contact"
        className={`${styles.ctaBand} mx-auto max-w-6xl rounded-2xl px-6 py-16 text-center md:px-16`}
      >
        <h2 className={`${shipporiAntiqueB1.className} text-3xl md:text-4xl`}>
          まずは、話してみませんか。
        </h2>
        <p className="mx-auto mt-4 max-w-md text-sm leading-relaxed text-[#c9c4ad] md:text-base">
          料金や進め方のご相談だけでも大丈夫です。スピード感のあるやりとりで、公開までお付き合いします。
        </p>
        <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Link
            href="/contact"
            className="inline-flex items-center justify-center rounded-full bg-[#f0b429] px-8 py-3 text-sm font-bold text-[#15181d] transition hover:brightness-95"
          >
            無料で相談する
          </Link>
          <a
            href="https://www.instagram.com/reewa_web/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 rounded-full border border-[#eae6da]/40 px-8 py-3 text-sm font-bold text-[#eae6da] transition hover:border-[#eae6da]"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              className="h-5 w-5"
              aria-hidden="true"
            >
              <rect x="3" y="3" width="18" height="18" rx="5" ry="5" />
              <path d="M16 11.37a4.5 4.5 0 1 1-3.11-4.25" />
              <circle cx="17.5" cy="6.5" r="0.75" fill="currentColor" stroke="none" />
            </svg>
            Instagramで相談する
          </a>
        </div>
      </section>
    </main>
  );
}

// 「速い・安い・売れる・守れる」を表すアイコンを、目盛り付きのダークタイルに載せる
function IconTile({
  src,
  label,
  children,
}: {
  src?: string;
  label: string;
  children?: ReactNode;
}) {
  return (
    <div className="flex items-center gap-4">
      <div className={styles.iconTile}>
        {src ? (
          // アニメーションWebPのため最適化せずそのまま配信する
          <Image
            src={src}
            alt=""
            width={96}
            height={96}
            unoptimized
            className="h-full w-full object-contain"
          />
        ) : (
          children
        )}
      </div>
      <p className="text-sm font-bold tracking-[0.2em] text-[#5b5748]">
        {label}
      </p>
    </div>
  );
}
