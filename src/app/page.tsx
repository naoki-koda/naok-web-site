'use client';

import { kosugiMaru } from '@/app/ui/fonts';
import { AnimatedImage, CountableAnimation } from '@/app/ui/SliderImage';
import Link from 'next/link';
import Script from "next/script";
import { useEffect, useState } from 'react';


export default function Home() {
  const [isVisible, setIsVisible] = useState(false);

  // 初期表示（右からスライドイン）
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 300); // 少し遅れて表示
    return () => clearTimeout(timer);
  }, []);

  const faqItems = [
    {
      question: "名古屋でSEOに強いホームページ制作を依頼できますか？",
      answer: "はい。コアウェブバイタルの改善と構造化データの設計を標準で行い、名古屋などの地域キーワードでの検索流入を狙えるよう内部施策を実装します。",
    },
    {
      question: "制作後の検索キーワード対策もサポートしてもらえますか？",
      answer: "公開後は検索クエリのレポート共有、コンテンツ改善提案、ローカルSEO対策のアドバイスまで継続サポートします。",
    },
    {
      question: "Q&Aやブログなどのコンテンツ更新はお願いできますか？",
      answer: "ご要望に合わせてヒアリングし、集客につながるQ&Aやナレッジ記事の企画・作成・更新まで代行いたします。",
    },
    {
      question: "スマホ表示のパフォーマンスはどのくらい重要視していますか？",
      answer: "モバイルでの表示速度を最優先して設計し、画像の最適化や遅延読み込みを組み込んで離脱率を下げます。",
    },
    {
      question: "問い合わせにつながる導線設計は含まれていますか？",
      answer: "CTA配置やフォーム最適化、FAQコンテンツなど、問い合わせ獲得に直結するUXをプランニングします。",
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

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqItems.map((item) => ({
      "@type": "Question",
      "name": item.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": item.answer,
      },
    })),
  };
  return (
    <main>
      <Script
        id="faq-structured-data"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      {/* <div className="fixed bottom-0 left-1/2 -translate-x-1/2 pb-6 z-50">
        <MyDrawer />
      </div> */}
      <section className="relative overflow-hidden rounded-b-[3.5rem] bg-gradient-to-br from-orange-400 to-sky-400 text-teal-950">
        <div className="absolute inset-0 -z-10">
          <div className="absolute -top-24 -left-24 h-60 w-60 rounded-full bg-sky-400/40 blur-3xl" />
          <div className="absolute -bottom-40 right-[-15%] h-80 w-80 rounded-full bg-orange-400/35 blur-3xl" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,theme(colors.orange.400)/28%,theme(colors.sky.400)/18%,transparent_70%)]" />
          <div className="absolute inset-0 bg-slate-900/35" />
        </div>
        <div className={`relative mx-auto flex min-h-[520px] max-w-7xl flex-col gap-12 px-4 py-20 transition-all duration-700 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'} md:flex-row md:items-center`}>
          <div className="flex-1 text-center md:text-left">
            <span className="inline-flex items-center justify-center rounded-full border border-white/30 bg-white/10 px-4 py-1 text-xs font-semibold uppercase tracking-[0.35em] text-sky-200">
              NAGOYA WEB CREATIVE
            </span>
            <h1 className={`mt-6 text-4xl font-bold leading-tight md:text-5xl lg:text-6xl text-teal-950 ${kosugiMaru.className}`}>
              名古屋市で成果を<br className="hidden sm:inline" />出す。<br/>ホームページ制作を<br className="hidden sm:inline" />もっと美しく。
            </h1>
            <p className="mt-6 text-base leading-relaxed text-teal-950 md:text-lg">
              UXを重視したNext.jsサイトで表示スピードとSEOを両立。個人事業主・中小企業の集客やお問い合わせの増加をサポートします。
            </p>
            <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:justify-center md:justify-start">
              <a
                href="#contact"
                className="inline-flex items-center justify-center rounded-full bg-teal-900 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-orange-300/35 transition hover:brightness-105"
              >
                サービス内容を見る
              </a>
              <a
                href="/contact"
                className="inline-flex items-center justify-center bg-teal-950 rounded-full border border-white/30 px-6 py-3 text-sm font-semibold text-white transition hover:border-sky-200 hover:text-sky-200"
              >
                制作の相談をする
              </a>
            </div>
          </div>
          <div className="relative flex-1">
            <div className="relative mx-auto w-full max-w-xl overflow-hidden rounded-[2.5rem] border border-white/10 bg-white/5 p-10 shadow-[0_35px_120px_-30px_rgba(14,165,233,0.55)] backdrop-blur">
              <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,theme(colors.sky.400)/45%,transparent_65%)]" />
              <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_80%_0%,theme(colors.orange.400)/40%,transparent_55%)]" />
              <div className="relative flex h-full flex-col justify-between text-left text-teal-950">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.25em] text-slate-300">Performance Focus</p>
                  <h2 className="mt-3 text-2xl font-bold">SPA × SEOで成果に直結</h2>
                  <p className="mt-4 text-lg leading-relaxed text-teal-950">
                    Core Web Vitals改善、ローカルSEO、問い合わせ導線設計までワンストップでサポート。ビジネスの成長を止めないフロントエンドを提供します。
                  </p>
                </div>
                <ul className="mt-6 space-y-3 text-md text-teal-950">
                  <li className="flex items-center gap-2">
                    <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-r from-orange-400/40 to-sky-400/40 text-teal-950">01</span>
                    高速表示とモバイル最適化
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-r from-orange-400/40 to-sky-400/40 text-teal-950">02</span>
                    名古屋エリア向けSEO対策
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-r from-orange-400/40 to-sky-400/40 text-teal-950">03</span>
                    集客を高めるUXライティング
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-7 pb-2 gap-1 sm:p-10 font-[family-name:var(--font-geist-sans)]">
        <div className="flex flex-col gap-[32px] row-start-2 items-center">
          <p className={`text-2xl md:text-5xl text-center ${kosugiMaru.className} mt-0 pb-2`}>
            REEWA WEBのサイトは
          </p>
          <p className={`hidden sm:block text-4xl md:text-5xl text-center ${kosugiMaru.className} mb-1 mt-0 pb-2`}>
            早い、安い、売れる。
          </p>
          <div className="block md:hidden">
            <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-20 mt-5">
              <div>
                <CountableAnimation
                  triggerId="section-0"
                  srcLight="/Hfirst_black.PNG"
                  srcDark="/Hfirst_black.PNG"
                  alt="Concept Image"
                  count={1}
                  size="19rem"
                  lastPosition={{ top: 105, left: 145 }}
                />
              </div>
              <div>
                <CountableAnimation
                  triggerId="section-1"
                  srcLight="/Hcheap_black.PNG"
                  srcDark="/Hcheap_black.PNG"
                  alt="Concept Image"
                  count={2}
                  size="15rem"
                  lastPosition={{ top: 95, left: 120 }}
                />
              </div>
              <div>
                <CountableAnimation
                  triggerId="section-2"
                  srcLight="/Hsell_black.PNG"
                  srcDark="/Hsell_black.PNG"
                  alt="Concept Image"
                  count={3}
                  size="18rem"
                  lastPosition={{ top: 115, left: 130 }}
                />
              </div>
            </div>
          </div>
          <div className="bg-white text-gray-900">
            {/* ヒーローセクション */}
            <section className="rounded-md bg-gradient-to-br from-orange-400 to-sky-400 text-white py-12 px-6 text-center">
              <div className="hidden sm:block">
                <AnimatedImage
                  triggerId="section-4"
                  srcLight="/first_light.PNG"
                  srcDark="/first_light.PNG"
                  alt="速さをアピールする画像"
                />
              </div>
              <h2 className="text-3xl md:text-5xl text-center font-bold mb-4">WordPressより高速、<br />SPAなWEBサイトを提供します。</h2>
              <img
                src="/fastIcon.webp"
                alt="Fast Image Logo"
                className="w-48 mx-auto h-auto" />
              <p className="text-base md:text-xl mb-6 max-w-2xl mx-auto">
                SPAとは表示スピードにこだわったWebサイト<br />
                表示スピードがあなたのビジネスの価値を高めます。<br />このWEBサイトで体感してください。
              </p>
            </section>

            {/* 技術的な速さの説明 */}
            <section className="rounded-md py-16 px-6 bg-gray-50 dark:bg-gradient-to-br from-slate-600 to-slate-900 mb-10 text-gray-900 dark:text-white">
            <h3
              className="relative block w-fit mx-auto text-3xl font-bold text-center mb-12
                        text-slate-800 dark:text-white
                        px-8 py-5 rounded-[2rem]
                        border border-white/15 bg-white/10 backdrop-blur-xl
                        shadow-[0_8px_32px_rgba(14,165,233,0.35)]
                        before:content-[''] before:absolute before:inset-0
                        before:bg-gradient-to-tr before:from-orange-400/30 before:to-sky-400/30
                        before:rounded-[2rem] before:-z-10">
              どうして、<br />そんなに速いの？
            </h3>

              <div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-8 mb-10 text-center g-orange-200/40 dark:bg-gray-700 p-6 rounded shadow-xl shadow-orange-400/30">
                <div className="bg-orange-200/40 dark:bg-gray-700 p-6 rounded shadow-xl shadow-orange-400/30">
                  <h4 className="md:text-xl font-bold mb-2 text-center">Next.js の SPA構成</h4>
                  <p>リロード0でページ遷移が瞬時。<br />再読み込みが不要でストレスゼロ。</p>
                </div>
                <div className="bg-orange-200/40 dark:bg-gray-700 p-6 rounded shadow-xl shadow-orange-400/30">
                  <h4 className="text-xl font-bold mb-2 text-center">静的サイト生成（SSG）</h4>
                  <p>サーバーレスでHTMLを事前に生成。<br />圧倒的な表示スピード。</p>
                </div>
                <div className="bg-orange-200/40 dark:bg-gray-700 p-6 rounded shadow-xl shadow-orange-400/30">
                  <h4 className="text-xl font-bold mb-2 text-center">軽量な設計</h4>
                  <p>余計なJSを使わず<br />モバイルでもスムーズに表示。</p>
                </div>
              </div>

              <h3 className="text-xl font-bold text-center mb-12">表示スピードは、ビジネス成果に直結</h3>
              <div className="max-w-4xl mx-auto text-center text-base space-y-6">
                <p>表示が遅いと約50%以上のユーザーが<br />離脱すると言われています。</p>
                <p>高速表示は、ユーザー体験を高め<br />Google検索にも強くなります。</p>
                <strong className="underline">スピードこそ、信頼と売上アップのカギです。</strong>
              </div>
            </section>

            {/* 安さの説明 */}
            <section className="rounded-md bg-gradient-to-br from-orange-400 to-sky-400 text-white py-12 px-6 text-center">
              <div className="hidden sm:block">
                <AnimatedImage
                  triggerId="section-5"
                  srcLight="/cheap_light.PNG"
                  srcDark="/cheap_light.PNG"
                  alt="安さをアピールする画像" />
              </ div>
              <h2 className="text-4xl md:text-5xl font-bold mb-4">
                ホームページ制作費が<br />
                5ページまで
                <strong className="underline">無料</strong>
              </h2>
              <img
                src="/cheapIcon.webp"
                alt="Cheap Image Logo"
                className="w-48 mx-auto h-auto" />
              <p className="text-base md:text-xl mb-6 max-w-2xl mx-auto">
                {/* 私は一人で Web サイトの開発から運用・保守<br /> */}
                初期費用は頂きません。<br />
                最新のフレームワークを採用して開発時間の短縮。<br />
                営業、打ち合わせまで全てを弊社スタッフが担当し、<br />
                外注費や中間マージンを徹底的に省いています。<br />
                ※5ページ以上は追加費用が発生します。
              </p>
            </section>

            <section className="rounded-md py-16 px-6 bg-gray-50 dark:dark:bg-gradient-to-br from-slate-600 to-slate-900  mb-10 text-gray-900 dark:text-white">
            <h3
              className="relative block w-fit mx-auto text-3xl font-bold text-center mb-12
                        text-slate-800 dark:text-white
                        px-8 py-5 rounded-[2rem]
                        border border-white/15 bg-white/10 backdrop-blur-xl
                        shadow-[0_8px_32px_rgba(14,165,233,0.35)]
                        before:content-[''] before:absolute before:inset-0
                        before:bg-gradient-to-tr before:from-orange-400/30 before:to-sky-400/30
                        before:rounded-[2rem] before:-z-10">
              どうして、<br />そんなに安いの？
            </h3>
              <div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-8 mb-10 text-center g-orange-200/40 dark:bg-gray-700 p-6 rounded shadow-xl shadow-orange-400/30">
                <div className="bg-orange-200/40 dark:bg-gray-700 p-6 rounded shadow-xl shadow-orange-400/30">
                  <h4 className="text-xl font-bold mb-2 text-center">すべてを自社で対応</h4>
                  <p>開発・運用・保守・打ち合わせまで、<br />外注せずワンストップ。</p>
                </div>
                <div className="bg-orange-200/40 dark:bg-gray-700 p-6 rounded shadow-xl shadow-orange-400/30">
                  <h4 className="text-xl font-bold mb-2 text-center">中間マージンゼロ</h4>
                  <p>代理店や営業コストが無いため、<br />価格を抑えられます。</p>
                </div>
                <div className="bg-orange-200/40 dark:bg-gray-700 p-6 rounded shadow-xl shadow-orange-400/30">
                  <h4 className="text-xl font-bold mb-2 text-center">効率的な開発体制</h4>
                  <p>実績あるテンプレートや開発手法を<br />活用し、短納期＆低コストを実現。</p>
                </div>
              </div>
              <h3 className="text-3xl font-bold text-center mb-12">安さと品質の両立を実現</h3>
              <div className="text-base md:text-lg max-w-4xl mx-auto text-center space-y-6">
                <p>「安かろう悪かろう」ではありません。</p>
                <p>開発〜運用まで全てを一貫して請け負うからこそ、<br />伝達ミスやロスのない高品質な制作が可能です。</p>
                <strong className="underline">ご相談から納品まで<br />誠実・スピーディーに対応します。</strong>
              </div>
            </section>

            {/* 売れるの説明 */}
            <section className="rounded-md bg-gradient-to-br from-orange-400 to-sky-400 text-white py-12 px-6 text-center">
              <div className="hidden sm:block">
                <AnimatedImage
                  triggerId="section-3"
                  srcLight="/sell_light.PNG"
                  srcDark="/sell_light.PNG"
                  alt="売れるをアピールする画像"
                />
              </div>
              <h2 className="text-4xl md:text-5xl font-bold mb-4">
                売れるサイトには、<br /><strong className="underline">理由</strong>があります。
              </h2>
              <img
                src="/buyIcon.webp"
                alt="Buy Image Logo"
                className="w-48 mx-auto h-auto" />
              <p className="text-base md:text-xl mb-6 max-w-2xl mx-auto">
                デザインだけでなく、<br />導線設計・文章構成・ユーザー心理までを意識した<br />
                「成果の出る」サイトを制作します。
              </p>
            </section>

            <section className="rounded-md py-16 px-6 bg-gray-50 border-orange-400 shadow-xl shadow-orange-200/40 dark:bg-gradient-to-br from-slate-600 to-slate-900  mb-10 text-gray-900 dark:text-white">
            <h3
              className="relative block w-fit mx-auto text-3xl font-bold text-center mb-12
                        text-slate-800 dark:text-white
                        px-8 py-5 rounded-[2rem]
                        border border-white/15 bg-white/10 backdrop-blur-xl
                        shadow-[0_8px_32px_rgba(14,165,233,0.35)]
                        before:content-[''] before:absolute before:inset-0
                        before:bg-gradient-to-tr before:from-orange-400/30 before:to-sky-400/30
                        before:rounded-[2rem] before:-z-10">
              どうして、<br />そんなに売れるの？
            </h3>
              <div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-8 mb-10 text-center g-orange-200/40 dark:bg-gray-700 p-6 rounded shadow-xl shadow-orange-400/30">
                <div className="bg-orange-200/40 dark:bg-gray-700 p-6 rounded shadow-xl shadow-orange-400/30">
                  <h4 className="text-xl font-bold mb-2 text-center">導線重視の構成</h4>
                  <p>ユーザーの行動を想定した<br />CTAやナビゲーション設計。</p>
                </div>
                <div className="bg-orange-200/40 dark:bg-gray-700 p-6 rounded shadow-xl shadow-orange-400/30">
                  <h4 className="text-xl font-bold mb-2 text-center">高速レンダリング</h4>
                  <p>Core Web Vitals(Googleの評価) <br />のスコアが高くなりやすく、<br />SEO に有利</p>
                </div>
                <div className="bg-orange-200/40 dark:bg-gray-700 p-6 rounded shadow-xl shadow-orange-400/30">
                  <h4 className="text-xl font-bold mb-2 text-center">レスポンシブデザイン対応</h4>
                  <p>多くの訪問者が使うスマホで、<br />見やすく・使いやすく・買いやすく。</p>
                </div>
              </div>
              <h2 className="text-3xl font-bold text-center mb-12">「見られる」から<br />「売れる」へ</h2>
              <div className="max-w-4xl mx-auto text-center text-lg space-y-6">
                <p>ただ見た目が綺麗なだけでは、<br />売れるサイトにはなりません。</p>
                <p>戦略的に構成されたサイトは、<br />訪問者を顧客へと変える力を持っています。</p>
                <strong className="underline">成果にこだわったサイトを提案します。</strong>
              </div>
            </section>
            {/* <section className="rounded-md bg-white/95 py-16 px-6 shadow-xl shadow-orange-200/40 mb-10 text-gray-900 dark:bg-gray-900/80 dark:text-white">
              <h2 className="text-3xl font-bold text-center mb-6">キーワードから選ぶ課題解決ガイド</h2>
              <p className="text-center text-sm md:text-base text-gray-600 dark:text-gray-300 max-w-3xl mx-auto mb-10">
                ホームページ制作のよく検索される疑問に対して、料金・相場・補助金・DIY・フリーランス協業などのテーマ別に解説コンテンツをご用意しています。気になる項目から詳細をご確認ください。
              </p>
              <div className="mx-auto grid gap-6 md:grid-cols-2">
                <article className="rounded-3xl border border-orange-200/60 bg-white/90 p-6 shadow-md transition hover:border-orange-300 hover:shadow-xl dark:border-white/10 dark:bg-gray-800/70">
                  <h3 className="text-xl font-semibold text-orange-600 dark:text-orange-300">制作費・相場と料金表</h3>
                  <p className="mt-3 text-sm leading-relaxed text-gray-700 dark:text-gray-200">
                    「ホームページ制作 相場」「ホームページ制作 料金」「1ページ 単価」といったキーワードに対応。<Link href="/price" className="text-orange-500 underline hover:text-sky-400">料金ページ</Link>で月額・初期費用・各種サブスクプランと共に、個人事業主/法人別の費用感・勘定科目・減価償却のポイントまで整理しています。
                  </p>
                  <ul className="mt-4 space-y-2 text-xs text-gray-600 dark:text-gray-300">
                    <li>・月契約/年間契約の比較とビープラスト等の相場比較</li>
                    <li>・制作費0円プラン、3万円〜30万円、10万円・50万円・100万円帯の費用シナリオ</li>
                    <li>・1ページ構成やLP制作、リニューアル時のページ単価と内訳</li>
                    <li>・医療・クリニック・宿泊施設など業種別費用感とサンプル見積もり</li>
                  </ul>
                </article>
                <article className="rounded-3xl border border-orange-200/60 bg-white/90 p-6 shadow-md transition hover:border-orange-300 hover:shadow-xl dark:border-white/10 dark:bg-gray-800/70">
                  <h3 className="text-xl font-semibold text-orange-600 dark:text-orange-300">補助金・助成金の活用</h3>
                  <p className="mt-3 text-sm leading-relaxed text-gray-700 dark:text-gray-200">
                    「ホームページ制作 補助金」「小規模事業者持続化補助金 2025」「IT導入補助金 2024」など各種制度をフォロー。採択率を高める提案資料の整備から、群馬・京都・大阪など地域ごとの募集スケジュールも<Link href="/contact" className="text-orange-500 underline hover:text-sky-400">無料相談</Link>でご案内します。
                  </p>
                  <ul className="mt-4 space-y-2 text-xs text-gray-600 dark:text-gray-300">
                    <li>・2024〜2025年の公募スケジュールと採択事例（宿泊施設・美容サロン・製造業など）</li>
                    <li>・補助金×SEO/リニューアルでの費用対効果シミュレーション</li>
                    <li>・小規模事業者持続化補助金、IT導入補助金、ものづくり補助金の違いと必要書類</li>
                  </ul>
                </article>
                <article className="rounded-3xl border border-orange-200/60 bg-white/90 p-6 shadow-md transition hover:border-orange-300 hover:shadow-xl dark:border-white/10 dark:bg-gray-800/70">
                  <h3 className="text-xl font-semibold text-orange-600 dark:text-orange-300">自分で作る・AI/ノーコード活用</h3>
                  <p className="mt-3 text-sm leading-relaxed text-gray-700 dark:text-gray-200">
                    「ホームページ制作 自分で」「ホームページ制作 無料」「ホームページ制作 AI」「ワードプレス 料金」といったセルフ制作ニーズに応えるテンプレート集を<Link href="/design" className="text-orange-500 underline hover:text-sky-400">デザインページ</Link>で公開。ChatGPTやCanva、ノーコードでの制作手順やGoogleビジネスプロフィールの連携方法も網羅しています。
                  </p>
                  <ul className="mt-4 space-y-2 text-xs text-gray-600 dark:text-gray-300">
                    <li>・無料/低価格ツール（Wix、STUDIO、WordPress、Notion）の比較</li>
                    <li>・HTML/CSSで自作する場合の最低限のスキルとノーコード代替案</li>
                    <li>・スマホだけで作る場合の注意点と推奨アプリ（Googleサイト、Canva等）</li>
                    <li>・AIライティング/画像生成を使ったコンテンツ量産とSEO対策の共存方法</li>
                  </ul>
                </article>
                <article className="rounded-3xl border border-orange-200/60 bg-white/90 p-6 shadow-md transition hover:border-orange-300 hover:shadow-xl dark:border-white/10 dark:bg-gray-800/70">
                  <h3 className="text-xl font-semibold text-orange-600 dark:text-orange-300">地域別・フリーランス協業</h3>
                  <p className="mt-3 text-sm leading-relaxed text-gray-700 dark:text-gray-200">
                    名古屋を中心に、大阪・福岡・東京・北海道など全国各地の制作会社やフリーランスとも連携。<Link href="/works" className="text-orange-500 underline hover:text-sky-400">制作事例</Link>では地域別の成功事例を紹介し、「フリーランス ホームページ制作 相場」「大阪 格安」などのキーワードで寄せられる相談にもお応えします。
                  </p>
                  <ul className="mt-4 space-y-2 text-xs text-gray-600 dark:text-gray-300">
                    <li>・歯科・美容室・製造業など業種別の集客シナリオ</li>
                    <li>・丸投げ運用/部分委託/社内チームとのハイブリッド体制</li>
                    <li>・英語・多言語サイト、ランディングページやAIチャットの導入</li>
                  </ul>
                </article>
              </div>
            </section> */}
            <section className="rounded-md bg-gray-50 py-16 px-6 shadow-inner shadow-orange-200/30 mb-10 text-gray-900 dark:bg-slate-800/80 dark:text-white">
              <h2 className="text-3xl font-bold text-center mb-6">業種別の集客特化型ホームページ制作</h2>
              <p className="text-center text-sm md:text-base text-gray-600 dark:text-gray-300 max-w-3xl mx-auto mb-10">
                「ホームページ制作 美容」「ホームページ制作 サロン」「ホームページ制作 職人」「ホームページ制作 飲食店」など業種特有のニーズに対し、キーワード戦略とUI/UXを最適化した制作プランをご用意しています。
              </p>
              <div className="mx-auto grid gap-6 md:grid-cols-2">
                {verticalFocus.map((item) => (
                  <article
                    key={item.title}
                    className="rounded-3xl border border-orange-200/60 bg-white/95 p-6 text-slate-900 shadow-md shadow-orange-200/40 transition hover:border-orange-300 hover:shadow-xl dark:border-white/10 dark:bg-slate-900/80 dark:text-white"
                  >
                    <h3 className="text-xl font-semibold text-orange-600 dark:text-orange-300">{item.title}</h3>
                    <p className="mt-3 text-sm leading-relaxed text-gray-700 dark:text-gray-200">{item.description}</p>
                    <ul className="mt-4 space-y-2 text-xs text-gray-600 dark:text-gray-300">
                      {item.highlights.map((point) => (
                        <li key={point}>・{point}</li>
                      ))}
                    </ul>
                    <Link
                      href="/contact"
                      className="mt-5 inline-flex items-center text-sm font-semibold text-orange-500 underline decoration-dotted hover:text-sky-400"
                    >
                      業種別の制作・相場相談をする
                    </Link>
                  </article>
                ))}
              </div>
            </section>
            <section
              id="faq"
              className="rounded-md py-16 px-6 bg-white/95 text-gray-900 shadow-xl shadow-orange-200/40 mb-10 dark:bg-gray-900/80 dark:text-white"
            >
              <h2 className="text-3xl font-bold text-center mb-4">よくあるご質問</h2>
              <p className="text-base md:text-lg text-center text-gray-600 dark:text-gray-300 mb-10">
                SEOや集客、制作フローに関して寄せられるお問い合わせをまとめました。気になる点があればお気軽にご相談ください。
              </p>
              <div className="mx-auto max-w-4xl space-y-6">
                {faqItems.map((item) => (
                  <details
                    key={item.question}
                    className="group rounded-2xl border border-orange-200/60 bg-white/95 p-6 shadow-md transition hover:border-orange-300 hover:shadow-lg dark:border-gray-700 dark:bg-gray-800/80 dark:hover:border-orange-300/60"
                  >
                    <summary className="flex cursor-pointer items-center justify-between text-left text-lg font-semibold text-gray-900 dark:text-white [&::-webkit-details-marker]:hidden">
                      <span>{item.question}</span>
                      <span className="ml-6 text-2xl font-normal text-sky-400 transition-transform duration-300 group-open:rotate-45">
                        +
                      </span>
                    </summary>
                    <p className="mt-4 text-base leading-relaxed text-gray-600 dark:text-gray-300">
                      {item.answer}
                    </p>
                  </details>
                ))}
              </div>
            </section>

            {/* CTAセクション */}
            <section id="contact" className="rounded-md bg-gradient-to-r from-orange-400 to-sky-400 text-white py-12 px-6 text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">まずはお気軽に<br />ご相談ください！</h2>
              <p className="mb-6 text-lg">スピーディーなサイト制作で、<br />あなたのビジネスを後押しします。</p>
              <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
                <a
                  href="/contact"
                  className="inline-flex items-center justify-center rounded-full bg-white px-8 py-3 text-sm font-semibold text-orange-500 shadow-lg shadow-orange-200/40 transition hover:brightness-110"
                >
                  お問い合わせフォームへ
                </a>
                <a
                  href="https://www.instagram.com/reewa_web/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gradient-to-tr from-[#F58529] via-[#DD2A7B] to-[#515BD4] inline-flex items-center justify-center gap-2 rounded-full border border-white px-8 py-3 text-sm font-semibold text-white transition hover:bg-white/15"
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
                  Instagramから問い合わせ
                </a>
              </div>
            </section>
          </div>
        </div >
      </div >
    </main>
  );
}
