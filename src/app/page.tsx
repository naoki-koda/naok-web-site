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
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-7 pb-2 gap-1 sm:p-10 font-[family-name:var(--font-geist-sans)]">

      <main className="flex flex-col gap-[32px] row-start-2 items-center">
        <h1 className={`text-4xl md:text-5xl text-center ${kosugiMaru.className} mb-1 mt-0 pb-2`}>
          NAOK. WEB開発のサイトは<br />早い、安い、売れる。
        </h1>
        <p>
          愛知県・名古屋市を中心としたWEBサイト開発事務所
        </p>
        <div className="bg-white text-gray-900">
          {/* ヒーローセクション */}
          <section className="rounded-md bg-gradient-to-r from-orange-400 to-sky-400 text-white py-20 px-6 text-center">
            <AnimatedImage
              triggerId="section-1"
              src="/first.PNG"
              alt="1番目の画像"
            />
            <h2 className="text-4xl md:text-5xl text-center font-bold mb-4">速さは、信頼につながる。</h2>
            <p className="text-lg md:text-xl mb-6 max-w-2xl mx-auto">
              私たちは Next.js を用いて、<br />表示スピードにこだわったWebサイトを制作します。<br />
              読み込みの速さがあなたのビジネスの価値を高めます。
            </p>
            <a
              href="#contact"
              className="bg-white text-orange-500 font-semibold px-6 py-3 rounded-md shadow hover:bg-gray-100 transition"
            >
              お問い合わせはこちら
            </a>
          </section>

          {/* 技術的な速さの説明 */}
          <section className="rounded-md py-16 px-6 bg-gray-50 mb-10">

            <h3 className="text-3xl font-bold text-center mb-12">どうして、そんなに速いの？</h3>
            <div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-8 mb-10">
              <div className="bg-white p-6 rounded shadow">
                <h3 className="text-xl font-bold mb-2 text-center">Next.js の SPA構成</h3>
                <p>ページ遷移が瞬時。再読み込みが不要でストレスゼロ。</p>
              </div>
              <div className="bg-white p-6 rounded shadow">
                <h3 className="text-xl font-bold mb-2 text-center">静的サイト生成（SSG）</h3>
                <p>サーバーレスでHTMLを事前に生成。<br />圧倒的な表示スピード。</p>
              </div>
              <div className="bg-white p-6 rounded shadow">
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
              src="/cheap.PNG"
              alt="2番目の画像" />

            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              安さの理由、<br />
              それは<strong className="underline">無駄がない</strong>から。
            </h2>
            <p className="text-lg md:text-xl mb-6 max-w-2xl mx-auto">
              私は一人で Web サイトの開発から運用・保守、<br />
              営業、打ち合わせまで全てを担当しています。<br />
              外注費や中間マージンなどの無駄を徹底的に省くことができます。
            </p>
            <a
              href="#contact"
              className="bg-white text-orange-600 font-semibold px-6 py-3 rounded-md shadow hover:bg-gray-100 transition"
            >
              見積もり・ご相談はこちら
            </a>
          </section>

          <section className="rounded-md py-16 px-6 bg-gray-50 mb-10">
            <h3 className="text-3xl font-bold text-center mb-12">どうして、そんなに安いの？</h3>
            <div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-8 mb-10">
              <div className="bg-white p-6 rounded shadow">
                <h3 className="text-xl font-bold mb-2 text-center">すべてを一人で対応</h3>
                <p>開発・運用・保守・打ち合わせまで、<br />外注せずワンストップ。</p>
              </div>
              <div className="bg-white p-6 rounded shadow">
                <h3 className="text-xl font-bold mb-2 text-center">中間マージンゼロ</h3>
                <p>代理店や営業コストが無いため、<br />価格を抑えられます。</p>
              </div>
              <div className="bg-white p-6 rounded shadow">
                <h3 className="text-xl font-bold mb-2 text-center">効率的な制作体制</h3>
                <p>実績あるテンプレートや開発手法を活用し、<br />短納期＆低コストを実現。</p>
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
              src="/sell.PNG"
              alt="3番目の画像"
            />
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              売れるサイトには、<strong className="underline">理由</strong>があります。
            </h2>
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

          <section className="rounded-md py-16 px-6 bg-gray-50 mb-10">
            <h3 className="text-3xl font-bold text-center mb-12">どうして、そんなに売れるの？</h3>
            <div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-8 mb-10">
              <div className="bg-white p-6 rounded shadow">
                <h3 className="text-xl font-bold mb-2 text-center">導線重視の構成</h3>
                <p>ユーザーの行動を想定した<br />CTAやナビゲーション設計。</p>
              </div>
              <div className="bg-white p-6 rounded shadow">
                <h3 className="text-xl font-bold mb-2 text-center">ターゲットに響くコピー</h3>
                <p>「誰に」「何を」「どう伝えるか」<br />言葉の力で興味を惹きつけます。</p>
              </div>
              <div className="bg-white p-6 rounded shadow">
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
      </main >
    </div >
  );
}
