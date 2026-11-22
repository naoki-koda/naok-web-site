"use client";

import { BentoCell, CardBadge, GlowCard } from "@/app/ui/cards";
import MyDrawer from "@/app/ui/Drawer";
import WorksGallery from "@/app/ui/WorksGallery";
import LighthouseScores from "@/app/ui/LighthouseScores";
import SpaGuide from "@/app/ui/SpaGuide";
import { shipporiAntiqueB1, zenKaku } from "@/app/ui/fonts";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { BentoGrid } from "@/components/ui/bento-grid";
import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card";
import {
  BuildingStorefrontIcon,
  HeartIcon,
  ScissorsIcon,
  WrenchScrewdriverIcon,
} from "@heroicons/react/24/outline";
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
      icon: ScissorsIcon,
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
      icon: WrenchScrewdriverIcon,
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
      icon: BuildingStorefrontIcon,
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
      icon: HeartIcon,
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
    // 浮いているナビの裏まで背景色を伸ばす（Header の余白分だけ上へずらす）
    <main className={`${styles.page} ${zenKaku.className} -mt-20 pb-16 pt-20 md:-mt-24 md:pt-24`}>
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

      {/* ヒーロー：コピーは3Dカード、指標はBento Grid */}
      <section className="mx-auto max-w-6xl px-6 pt-8 pb-12 md:pt-14 md:pb-16">
        <div className="grid gap-4 md:grid-cols-[1.25fr_0.75fr] md:items-stretch">
          <CardContainer
            containerClassName="block py-0"
            className="h-full w-full"
          >
            <CardBody className="relative h-full w-full rounded-[1.75rem] border border-white/60 bg-[#fffaf9] p-7 shadow-[0_30px_60px_-30px_rgba(21,24,29,0.55)] md:p-12">
              <CardItem translateZ={20}>
                <CardBadge>NAGOYA WEB PRODUCTION</CardBadge>
              </CardItem>
              <CardItem
                as="h1"
                translateZ={60}
                className={`${shipporiAntiqueB1.className} mt-6 text-[2rem] leading-[1.3] sm:text-5xl md:text-[3.25rem]`}
              >
                モダンデザインと
                <br />
                高性能の
                <span className="whitespace-nowrap bg-[linear-gradient(transparent_62%,#aaacff_62%)] px-1">
                  WEBサイト
                </span>
              </CardItem>
              <CardItem
                as="p"
                translateZ={30}
                className="mt-6 max-w-md text-base leading-relaxed text-[#4a4d55] md:text-lg"
              >
                名古屋を拠点に、美容室・工務店・クリニックなど地域の中小事業者向けにNext.js製の高速サイトを制作しています。打ち合わせから公開後の運用まで、外注せず自社だけで対応します。
              </CardItem>
              <CardItem
                translateZ={45}
                className="mt-9 flex flex-wrap items-center gap-x-7 gap-y-4 text-sm font-bold"
              >
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center rounded-full bg-[#ff4a3f] px-7 py-3 text-[#15181d] shadow-[0_10px_24px_-12px_rgba(255,74,63,0.9)] transition hover:brightness-95"
                >
                  無料で相談する
                </Link>
                <Link
                  href="/works"
                  className="border-b-2 border-transparent pb-1 text-[#4a4d55] transition-colors hover:border-[#aaacff] hover:text-[#15181d]"
                >
                  制作実績を見る
                </Link>
                <a
                  href="#document"
                  className="border-b-2 border-transparent pb-1 text-[#4a4d55] transition-colors hover:border-[#aaacff] hover:text-[#15181d]"
                >
                  資料をダウンロード
                </a>
              </CardItem>
            </CardBody>
          </CardContainer>

          <BentoGrid className="mx-0 w-full max-w-none grid-cols-2 gap-3 md:auto-rows-auto md:grid-cols-2">
            {measures.map((m) => (
              <BentoCell
                key={m.label}
                innerClassName="justify-center p-4 md:p-5"
                icon={<CardBadge>{m.label}</CardBadge>}
                title={
                  <span
                    className={`${shipporiAntiqueB1.className} mt-2 block whitespace-nowrap text-lg md:text-[1.4rem]`}
                  >
                    {m.value}
                  </span>
                }
                description={<span className="text-xs">{m.note}</span>}
              />
            ))}
          </BentoGrid>
        </div>
      </section>

      {/* デザインギャラリー */}
      <WorksGallery />

      {/* 速い */}
      <FeatureBento
        id="speed"
        icon={<IconTile src="/fastIcon.webp" label="速い" />}
        big="0"
        heading="リロードで止まらないサイト"
        text="WordPressより高速に動く、SPA・PWA対応のサイトを作ります。ページを移るたびに読み込みが入らないので、見ている人を待たせません。"
        points={speedPoints}
        quote="表示が遅いサイトは、半数以上の人がそのまま離れてしまうといわれています。速さは使いやすさだけでなく、検索での見つかりやすさにも直結します。"
      >
        <GlowCard className="mt-4" innerClassName="md:p-10">
          <LighthouseScores />
        </GlowCard>
      </FeatureBento>

      {/* 安い */}
      <FeatureBento
        id="price"
        reverse
        icon={<IconTile src="/cheapIcon.webp" label="安い" />}
        big="3万円〜"
        heading="1ページあたりの制作費"
        text="最新のフレームワークで開発時間を短縮し、営業・打ち合わせまで自社スタッフが担当することで、外注費や中間マージンを省いています。"
        points={pricePoints}
        quote="「安かろう悪かろう」ではありません。開発から運用まで一人で担当するからこそ伝達のロスがなく、ご相談から納品まで誠実に対応できます。"
      />

      {/* 売れる */}
      <FeatureBento
        id="sell"
        icon={<IconTile src="/buyIcon.webp" label="売れる" />}
        big="理由"
        heading="売れるサイトには、理由があります"
        text="デザインだけでなく、導線設計・文章構成・ユーザー心理までを意識した「成果の出る」サイトを制作します。"
        points={sellPoints}
        quote="見た目が整っているだけでは売れません。行動を起こしやすい導線と検索に強い作りを組み合わせて、「見られる」を「売れる」に変えます。"
      />

      {/* 守れる：比較表を横長のカードに入れる */}
      <section id="security" className="mx-auto max-w-6xl px-6 py-8 md:py-10">
        <BentoGrid className="mx-0 max-w-none md:auto-rows-auto">
          <BentoCell
            className="md:row-span-2"
            header={
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
            }
            title={<FeatureTitle big="PHP 0" heading="狙われる入口を、最初から作らない" />}
            description="WordPressをはじめとするPHP製のサイトは、プログラム・データベース・管理画面がすべて公開サーバー上で動くため、攻撃の入口が多くなりがちです。REEWA WEBのサイトはPHPを使わず、事前に生成したページを配信する構成にしています。"
          />
          <GlowCard className="md:col-span-2">
            <div className={styles.compareTable}>
              <div className={styles.compareHead}>
                <span />
                <span>一般的なPHP製サイト</span>
                <span className="text-[#15181d]">REEWA WEB（Next.js）</span>
              </div>
              {securityComparison.map((row) => (
                <div key={row.label} className={styles.compareRow}>
                  <p className="text-sm font-bold">{row.label}</p>
                  <p className="text-sm leading-relaxed text-[#6b6f78]">
                    <span className="mr-2 text-xs font-bold md:hidden">PHP製</span>
                    {row.php}
                  </p>
                  <p className="text-sm font-bold leading-relaxed">
                    <span className="mr-2 text-xs text-[#6d70ff] md:hidden">REEWA WEB</span>
                    {row.reewa}
                  </p>
                </div>
              ))}
            </div>
          </GlowCard>
          <QuoteCell
            className="md:col-span-2"
            text="どんな仕組みでも、脆弱性を完全にゼロにすることはできません。だからこそ攻撃される入口そのものを減らす作りを選び、使っているライブラリのセキュリティ更新も継続して適用しています。"
          />
        </BentoGrid>
      </section>

      {/* 資料ダウンロード */}
      <SpaGuide />

      {/* 業種別 */}
      <section className="mx-auto max-w-6xl px-6 py-16">
        <SectionHeading
          title="業種に合わせて、集客の設計を変える"
          lead="美容、工務店、飲食、クリニックなど、業種ごとに効果的な見せ方と導線は変わります。それぞれの業種で実際に重視しているポイントをまとめました。"
        />
        <BentoGrid className="mx-0 mt-10 max-w-none md:auto-rows-auto md:grid-cols-2">
          {verticalFocus.map((item) => (
            <BentoCell
              key={item.title}
              icon={
                <span className="inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-[#ff4a3f]/12 text-[#e0372d]">
                  <item.icon className="h-6 w-6" aria-hidden="true" />
                </span>
              }
              title={<span className="mt-3 block text-lg">{item.title}</span>}
              description={
                <>
                  <p>{item.description}</p>
                  <ul className="mt-4 space-y-1.5 text-xs">
                    {item.highlights.map((h) => (
                      <li key={h} className="flex gap-2">
                        <span
                          aria-hidden="true"
                          className="mt-[0.4em] h-1.5 w-1.5 shrink-0 rounded-full bg-[#aaacff]"
                        />
                        <span>{h}</span>
                      </li>
                    ))}
                  </ul>
                  <Link
                    href="/contact"
                    className="mt-5 inline-block border-b-2 border-[#aaacff] pb-0.5 text-sm font-bold text-[#15181d]"
                  >
                    この業種で相談する
                  </Link>
                </>
              }
            />
          ))}
        </BentoGrid>
      </section>

      {/* 制作実績：3Dカード */}
      <section className="mx-auto max-w-6xl px-6 py-16">
        <SectionHeading title="制作実績" />

        <CardContainer containerClassName="mt-10 block py-0" className="w-full">
          <CardBody className="h-auto w-full rounded-[1.75rem] border border-white/60 bg-[#fffaf9] p-7 shadow-[0_30px_60px_-30px_rgba(21,24,29,0.55)] md:p-12">
            <div className="grid gap-10 md:grid-cols-2 md:items-center">
              <div>
                <CardItem translateZ={25}>
                  <CardBadge>CASE STUDY</CardBadge>
                </CardItem>
                <CardItem
                  as="h3"
                  translateZ={40}
                  className="mt-4 text-2xl font-bold"
                >
                  {featuredWork.title}
                </CardItem>
                <CardItem
                  as="p"
                  translateZ={25}
                  className="mt-4 text-sm leading-relaxed text-[#4a4d55]"
                >
                  {featuredWork.description}
                </CardItem>
                <CardItem translateZ={50} className="mt-6 w-full">
                  {featuredWork.stats.map((s) => (
                    <div
                      key={s.label}
                      className="flex items-baseline justify-between gap-4 border-t border-[#15181d]/10 py-4"
                    >
                      <span className="text-sm text-[#4a4d55]">{s.label}</span>
                      <span
                        className={`${shipporiAntiqueB1.className} text-3xl text-[#e0372d]`}
                      >
                        {s.value}
                      </span>
                    </div>
                  ))}
                </CardItem>
                <CardItem
                  as="a"
                  translateZ={30}
                  href={featuredWork.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 inline-block border-b-2 border-[#ff4a3f] pb-1 text-sm font-bold"
                >
                  サイトを見る
                </CardItem>
              </div>
              <CardItem
                translateZ={90}
                rotateX={4}
                rotateZ={-2}
                className="w-full overflow-hidden rounded-xl shadow-[0_24px_48px_-24px_rgba(21,24,29,0.6)]"
              >
                <Image
                  src="/sodeno.png"
                  alt="袖野建具様のホームページ紹介画像"
                  width={1200}
                  height={800}
                  className="h-auto w-full object-cover"
                />
              </CardItem>
            </div>
          </CardBody>
        </CardContainer>

        {otherWorks.map((work) => (
          <CardContainer
            key={work.url}
            containerClassName="mt-5 block py-0"
            className="w-full"
          >
            <CardBody className="h-auto w-full rounded-[1.75rem] border border-white/60 bg-[#fffaf9] p-7 shadow-[0_30px_60px_-30px_rgba(21,24,29,0.55)] md:p-12">
              <div className="grid gap-8 md:grid-cols-[0.9fr_1.1fr] md:items-center">
                <CardItem
                  translateZ={80}
                  rotateZ={2}
                  className="w-full overflow-hidden rounded-xl bg-white ring-1 ring-[#15181d]/10"
                >
                  <Image
                    src={work.image}
                    alt={`${work.title}のホームページ紹介画像`}
                    width={1200}
                    height={630}
                    className="h-auto w-full object-cover"
                  />
                </CardItem>
                <div>
                  <CardItem as="h3" translateZ={40} className="text-xl font-bold md:text-2xl">
                    {work.title}
                  </CardItem>
                  <CardItem
                    as="p"
                    translateZ={25}
                    className="mt-4 text-sm leading-relaxed text-[#4a4d55]"
                  >
                    {work.description}
                  </CardItem>
                  <CardItem as="ul" translateZ={35} className="mt-5 flex flex-wrap gap-2">
                    {work.tags.map((tag) => (
                      <li
                        key={tag}
                        className="rounded-full bg-[#aaacff]/30 px-3 py-1 text-xs font-bold text-[#2a2c5a]"
                      >
                        {tag}
                      </li>
                    ))}
                  </CardItem>
                  <CardItem
                    as="a"
                    translateZ={30}
                    href={work.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-6 inline-block border-b-2 border-[#ff4a3f] pb-1 text-sm font-bold"
                  >
                    サイトを見る
                  </CardItem>
                </div>
              </div>
            </CardBody>
          </CardContainer>
        ))}

        <Link
          href="/works"
          className="mt-8 inline-flex items-center gap-2 rounded-full bg-[#fffaf9] px-6 py-3 text-sm font-bold text-[#15181d] shadow-[0_10px_30px_-18px_rgba(21,24,29,0.45)] transition hover:bg-white"
        >
          制作実績をすべて見る →
        </Link>
      </section>

      {/* FAQ：shadcn の Accordion を1問ずつ光るカードに入れる */}
      <section id="faq" className="mx-auto max-w-4xl px-6 py-16">
        <SectionHeading
          title="よくあるご質問"
          lead="SEOや集客、制作フローについてよく聞かれることをまとめました。気になる点があれば、お気軽にご相談ください。"
        />
        <Accordion
          type="multiple"
          defaultValue={["faq-0"]}
          className="mt-10 space-y-3"
        >
          {faqItems.map((item, i) => (
            <GlowCard key={item.question} innerClassName="p-0 md:p-0">
              <AccordionItem value={`faq-${i}`} className="border-b-0">
                <AccordionTrigger className="gap-6 px-6 py-5 text-left text-base font-bold md:px-7">
                  {item.question}
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-6 text-sm leading-relaxed text-[#4a4d55] md:px-7">
                  {item.answer}
                </AccordionContent>
              </AccordionItem>
            </GlowCard>
          ))}
        </Accordion>
      </section>

      {/* CTA */}
      <section id="contact" className="mx-auto max-w-6xl px-6">
        <GlowCard innerClassName="px-6 py-14 text-center md:px-16 md:py-16">
          <CardBadge>CONTACT</CardBadge>
          <h2 className={`${shipporiAntiqueB1.className} mt-5 text-3xl md:text-4xl`}>
            まずは、話してみませんか。
          </h2>
          <p className="mx-auto mt-4 max-w-md text-sm leading-relaxed text-[#4a4d55] md:text-base">
            料金や進め方のご相談だけでも大丈夫です。スピード感のあるやりとりで、公開までお付き合いします。
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-full bg-[#ff4a3f] px-8 py-3 text-sm font-bold text-[#15181d] shadow-[0_10px_24px_-12px_rgba(255,74,63,0.9)] transition hover:brightness-95"
            >
              無料で相談する
            </Link>
            <a
              href="https://www.instagram.com/reewa_web/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-[#aaacff] bg-[#aaacff]/20 px-8 py-3 text-sm font-bold text-[#15181d] transition hover:bg-[#aaacff]/40"
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
        </GlowCard>
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
      <p className="text-sm font-bold tracking-[0.2em] text-[#4a4d55]">
        {label}
      </p>
    </div>
  );
}

type Point = { title: string; text: string };

// 「速い・安い・売れる」の共通レイアウト。
// 大きいメインのカード1枚＋ポイント3枚＋ひと言の5マスを Bento Grid で組む
function FeatureBento({
  id,
  icon,
  big,
  heading,
  text,
  points,
  quote,
  reverse = false,
  children,
}: {
  id: string;
  icon: ReactNode;
  big: string;
  heading: string;
  text: string;
  points: Point[];
  quote: string;
  reverse?: boolean;
  children?: ReactNode;
}) {
  return (
    <section id={id} className="mx-auto max-w-6xl px-6 py-8 md:py-10">
      <BentoGrid className="mx-0 max-w-none md:auto-rows-auto">
        <BentoCell
          className={
            reverse
              ? "md:col-start-3 md:row-span-2 md:row-start-1"
              : "md:row-span-2"
          }
          header={icon}
          title={<FeatureTitle big={big} heading={heading} />}
          description={text}
        />
        {points.map((p, i) => (
          <BentoCell
            key={p.title}
            icon={
              <span
                className={`${shipporiAntiqueB1.className} text-2xl text-[#ff4a3f]`}
              >
                {String(i + 1).padStart(2, "0")}
              </span>
            }
            title={p.title}
            description={p.text}
          />
        ))}
        <QuoteCell text={quote} />
      </BentoGrid>
      {children}
    </section>
  );
}

function FeatureTitle({ big, heading }: { big: string; heading: string }) {
  return (
    <>
      <span
        className={`${shipporiAntiqueB1.className} mt-4 block text-6xl font-normal md:text-7xl`}
      >
        {big}
      </span>
      <span className="mt-3 block text-lg">{heading}</span>
    </>
  );
}

// ひと言コメント。ラベンダーの縦線で引用らしく見せる
function QuoteCell({ text, className }: { text: string; className?: string }) {
  return (
    <GlowCard className={className}>
      <p className="border-l-[3px] border-[#aaacff] pl-4 text-sm leading-relaxed text-[#4a4d55]">
        {text}
      </p>
    </GlowCard>
  );
}

// 赤い背景の上に置くセクション見出し
function SectionHeading({ title, lead }: { title: string; lead?: string }) {
  return (
    <div>
      <h2 className={`${shipporiAntiqueB1.className} text-3xl md:text-4xl`}>
        {title}
      </h2>
      {lead && (
        <p className="mt-3 max-w-2xl text-sm leading-relaxed text-[#3d1410] md:text-base">
          {lead}
        </p>
      )}
    </div>
  );
}
