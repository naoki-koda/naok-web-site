'use client';

import Image from "next/image";
import { kosugiMaru } from '@/app/ui/fonts';
import { useEffect, useState } from 'react';
import AnimatedImage from '@/app/ui/SliderImage';


export default function Home() {
  const [isVisible, setIsVisible] = useState(false);
  const [isScrolled, setIsHidden] = useState(false);

  // 初期表示（右からスライドイン）
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 300); // 少し遅れて表示
    return () => clearTimeout(timer);
  }, []);

  // スクロールで非表示フラグを切り替え
  useEffect(() => {
    const handleScroll = () => {
      const y = window.scrollY;
      setIsHidden(y > 10); // 10px以上スクロールで非表示
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  return (
    <main>
      <div className="relative">
        <Image
          src={isVisible ? '/mainview.png' : '/hero_image_placeholder.png'}
          alt="Hero Image"
          width={2560}
          height={700}
          quality={100}
          className={`w-full h-auto object-cover transition-transform duration-500 ${isVisible ? 'translate-x-0' : 'translate-x-full'}`}
        />
        <p className="text-white absolute inset-0 flex items-start justify-center mt-8 text-2xl"
          style={{ textShadow: '3px 3px 8px rgba(0, 0, 0, 0.85)' }}>
            ー愛知県・名古屋市を中心とした事業者向けWEBサイトの開発ー
        </p>
        <div className="absolute inset-0 flex items-center justify-center gap-4 -translate-x-12 translate-y-25">
          <Image
            src="/favicon.ico"
            alt="Company Icon"
            width={64}
            height={64}
          />

          <h1 className={`text-white text-4xl font-bold drop-shadow-2xl ${kosugiMaru.className}`}
            style={{ textShadow: '3px 3px 8px rgba(0, 0, 0, 0.85)' }}>
            NAO.K WEB開発
          </h1>
        </div>
      </div>
      <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-7 pb-2 gap-1 sm:p-10 font-[family-name:var(--font-geist-sans)]">
        <div className="flex flex-col gap-[32px] row-start-2 items-center">
          <p className={`text-4xl md:text-5xl text-center ${kosugiMaru.className} mb-1 mt-0 pb-2`}>
            NAOK. WEB開発のサイトは<br />早い、安い、売れる。
          </p>

          <div className="bg-white dark:bg-black text-gray-900">
            {/* ヒーローセクション */}
            <section className="rounded-md bg-gradient-to-r from-orange-400 to-sky-400 text-white py-20 px-6 text-center">
              <AnimatedImage
                triggerId="section-1"
                srcLight="/first_dark.PNG"
                srcDark="/first_dark.PNG"
                alt="1番目の画像"
              />
              <h2 className="text-4xl md:text-5xl text-center font-bold mb-4">速さは、信頼につながる。</h2>
              <img
                src="/fastIcon.webp"
                alt="Fast Image Logo"
                className="w-48 mx-auto h-auto"/>
              <p className="text-lg md:text-xl mb-6 max-w-2xl mx-auto">
                WordPressよりも高速。<br />最新のフレームワークNext.js を用いて、<br />表示スピードにこだわったWebサイトを制作します。<br />
                読み込みの速さがあなたのビジネスの価値を高めます。<br/>このWEBサイトで画面遷移の速さを体感してください。
              </p>
              <a
                href="#contact"
                className="bg-white text-orange-500 font-semibold px-6 py-3 rounded-md shadow hover:bg-gray-100 transition"
              >
                お問い合わせはこちら
              </a>
            </section>

            {/* 技術的な速さの説明 */}
            <section className="rounded-md py-16 px-6 bg-gray-50 dark:bg-gray-800 mb-10 text-gray-900 dark:text-white">
              <h3 className="text-3xl font-bold text-center mb-12">どうして、そんなに速いの？</h3>

              <div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-8 mb-10">
                <div className="bg-white dark:bg-gray-700 p-6 rounded shadow">
                  <h3 className="text-xl font-bold mb-2 text-center">Next.js の SPA構成</h3>
                  <p>リロード0でページ遷移が瞬時。<br />再読み込みが不要でストレスゼロ。</p>
                </div>
                <div className="bg-white dark:bg-gray-700 p-6 rounded shadow">
                  <h3 className="text-xl font-bold mb-2 text-center">静的サイト生成（SSG）</h3>
                  <p>サーバーレスでHTMLを事前に生成。<br />圧倒的な表示スピード。</p>
                </div>
                <div className="bg-white dark:bg-gray-700 p-6 rounded shadow">
                  <h3 className="text-xl font-bold mb-2 text-center">軽量な設計</h3>
                  <p>余計なJSを使わず<br />モバイルでもスムーズに表示。</p>
                </div>
              </div>

              <h2 className="text-3xl font-bold text-center mb-12">表示スピードは、ビジネス成果に直結</h2>
              <div className="max-w-4xl mx-auto text-center text-lg space-y-6">
                <p>表示が遅いと、約50%以上のユーザーが離脱すると言われています。</p>
                <p>高速表示は、ユーザー体験を高め、Google検索にも強くなります。</p>
                <p>スピードこそ、信頼と売上アップのカギです。</p>
              </div>
            </section>

            {/* 安さの説明 */}
            <section className="rounded-md bg-gradient-to-r from-orange-400 to-sky-400 text-white py-20 px-6 text-center">
              <AnimatedImage
                triggerId="section-2"
                srcLight="/cheap_light.PNG"
                srcDark="/cheap_dark.PNG"
                alt="2番目の画像" />

              <h2 className="text-4xl md:text-5xl font-bold mb-4">
                安さの理由、<br />
                <strong className="underline">無駄がない</strong>から。
              </h2>
              <img
                src="/cheapIcon.webp"
                alt="Cheap Image Logo"
                className="w-48 mx-auto h-auto"/>
              <p className="text-lg md:text-xl mb-6 max-w-2xl mx-auto">
                {/* 私は一人で Web サイトの開発から運用・保守<br /> */}
                最新のフレームワークを採用して開発時間の短縮。<br/>
                営業、打ち合わせまで全てを弊社スタッフが担当し、<br />
                外注費や中間マージンなどの無駄を徹底的に省いています。
              </p>
              <a
                href="#contact"
                className="bg-white text-orange-600 font-semibold px-6 py-3 rounded-md shadow hover:bg-gray-100 transition"
              >
                見積もり・ご相談はこちら
              </a>
            </section>

            <section className="rounded-md py-16 px-6 bg-gray-50 dark:bg-gray-800 mb-10 text-gray-900 dark:text-white">
              <h3 className="text-3xl font-bold text-center mb-12">どうして、そんなに安いの？</h3>
              <div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-8 mb-10">
                <div className="bg-white dark:bg-gray-700 p-6 rounded shadow">
                  <h3 className="text-xl font-bold mb-2 text-center">すべてを自社で対応</h3>
                  <p>開発・運用・保守・打ち合わせまで、<br />外注せずワンストップ。</p>
                </div>
                <div className="bg-white dark:bg-gray-700 p-6 rounded shadow">
                  <h3 className="text-xl font-bold mb-2 text-center">中間マージンゼロ</h3>
                  <p>代理店や営業コストが無いため、<br />価格を抑えられます。</p>
                </div>
                <div className="bg-white dark:bg-gray-700 p-6 rounded shadow">
                  <h3 className="text-xl font-bold mb-2 text-center">効率的な開発体制</h3>
                  <p>実績あるテンプレートや開発手法を<br />活用し、短納期＆低コストを実現。</p>
                </div>
              </div>
              <h2 className="text-3xl font-bold text-center mb-12">安さと品質の両立を実現</h2>
              <div className="max-w-4xl mx-auto text-center text-lg space-y-6">
                <p>「安かろう悪かろう」ではありません。</p>
                <p>開発〜運用まで全てを一貫して請け負うからこそ、<br />伝達ミスやロスのない高品質な制作が可能です。</p>
                <p>ご相談から納品まで、誠実・スピーディーに対応します。</p>
              </div>
            </section>

            {/* 売れるの説明 */}
            <section className="rounded-md bg-gradient-to-r from-orange-400 to-sky-400 text-white py-20 px-6 text-center">
              <AnimatedImage
                triggerId="section-3"
                srcLight="/sell_light.PNG"
                srcDark="/sell_dark.PNG"
                alt="3番目の画像"
              />
              <h2 className="text-4xl md:text-5xl font-bold mb-4">
                売れるサイトには、<br/><strong className="underline">理由</strong>があります。
              </h2>
              <img
                src="/buyIcon.webp"
                alt="Buy Image Logo"
                className="w-48 mx-auto h-auto"/>
              <p className="text-lg md:text-xl mb-6 max-w-2xl mx-auto">
                デザインだけでなく、導線設計・文章構成・ユーザー心理までを意識した<br />
                「成果の出る」サイトを制作します。
              </p>
              <a
                href="#contact"
                className="bg-white text-orange-600 font-semibold px-6 py-3 rounded-md shadow hover:bg-gray-100 transition"
              >
                売上につながるサイトを相談する
              </a>
            </section>

            <section className="rounded-md py-16 px-6 bg-gray-50 dark:bg-gray-800 mb-10 text-gray-900 dark:text-white">
              <h3 className="text-3xl font-bold text-center mb-12">どうして、そんなに売れるの？</h3>
              <div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-8 mb-10">
                <div className="bg-white dark:bg-gray-700 p-6 rounded shadow">
                  <h3 className="text-xl font-bold mb-2 text-center">導線重視の構成</h3>
                  <p>ユーザーの行動を想定した<br />CTAやナビゲーション設計。</p>
                </div>
                <div className="bg-white dark:bg-gray-700 p-6 rounded shadow">
                  <h3 className="text-xl font-bold mb-2 text-center">高速レンダリング</h3>
                  <p>Core Web Vitals(Googleの評価) <br />のスコアが高くなりやすく、<br />SEO に有利</p>
                </div>
                <div className="bg-white p-6 dark:bg-gray-700 rounded shadow">
                  <h3 className="text-xl font-bold mb-2 text-center">スマホ最適化</h3>
                  <p>多くの訪問者が使うスマホで、<br />見やすく・使いやすく・買いやすく。</p>
                </div>
              </div>
              <h2 className="text-3xl font-bold text-center mb-12">「見られる」から「売れる」へ</h2>
              <div className="max-w-4xl mx-auto text-center text-lg space-y-6">
                <p>ただ見た目が綺麗なだけでは、売れるサイトにはなりません。</p>
                <p>戦略的に構成されたサイトは、<br />訪問者を顧客へと変える力を持っています。</p>
                <p>私たちは、成果にこだわったサイトを提案します。</p>
              </div>
            </section>




            {/* CTAセクション */}
            <section id="contact" className="bg-gradient-to-r from-orange-400 to-sky-400 text-white py-20 px-6 text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">まずはお気軽にご相談ください！</h2>
              <p className="mb-6 text-lg">スピーディーなサイト制作で、あなたのビジネスを後押しします。</p>
              <a
                href="/contact"
                className="bg-white text-orange-500 font-semibold px-6 py-3 rounded shadow hover:bg-gray-100 transition"
              >
                お問い合わせページへ
              </a>
            </section>
          </div>
        </div >
      </div >
    </main>
  );
}
