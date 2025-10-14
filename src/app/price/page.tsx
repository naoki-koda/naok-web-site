'use client';

import { kosugiMaru } from '@/app/ui/fonts';
import InitPricingCard from '@/app/ui/InitPriceCard';
import PricingCard from '@/app/ui/priceCard';
import {
  PuzzlePieceIcon,
  ShieldCheckIcon,
  SparklesIcon,
} from '@heroicons/react/24/outline';

const heroHighlights = [
  '戦略ヒアリングとサイト構成案の作成',
  'レスポンシブデザインと基本SEO設定',
  'お問い合わせ導線・CTAの最適化',
];

const productionIncludes = [
  '戦略ヒアリングとサイト構成案の作成',
  'デザイン制作とレスポンシブコーディング',
  '基本的なSEO設定と計測タグの設置',
];

const maintenanceHighlights = [
  'ドメイン・サーバーの契約代行と更新管理',
  '小規模な文言修正・画像差し替え対応',
  '月次の稼働状況・アクセスサマリー共有',
];

const cautionNotes = [
  '価格は税込表示です。特別な機能開発は別途お見積りとなります。',
  'ページ数やコンテンツボリュームに応じて制作期間が変動します。',
  '掲載の内容は予告なく変更する場合があります。最新情報はお問い合わせください。',
];

export default function PricingPage() {
  return (
    <div className="bg-slate-50/60 pb-24 dark:bg-slate-900">
      <section className="relative overflow-hidden rounded-b-[3.5rem] bg-gradient-to-br from-orange-400 to-sky-400 text-white">
        <div className="absolute inset-0 -z-10">
          <div className="absolute -top-36 -left-24 h-72 w-72 rounded-full bg-white/10 blur-3xl" />
          <div className="absolute -bottom-52 right-[-18%] h-96 w-96 rounded-full bg-white/10 blur-3xl" />
          <div className="absolute inset-0 bg-slate-900/30" />
        </div>
        <div className="relative mx-auto max-w-6xl px-6 py-20 sm:py-24 md:px-10">
          <div className="grid gap-8 md:grid-cols-[minmax(0,1.2fr)_minmax(0,0.8fr)] md:items-center">
            <div className="space-y-6 text-center md:text-left">
              <span className="inline-flex items-center justify-center rounded-full border border-white/25 bg-white/10 px-4 py-1 text-xs font-semibold uppercase tracking-[0.35em] text-slate-900/90">
                PRICING
              </span>
              <h1
                className={`text-3xl leading-tight text-slate-900 md:text-4xl lg:text-[2.8rem] ${kosugiMaru.className}`}
              >
                ビジネスの成長を支える<br className="hidden sm:inline" />
                透明性のある料金プラン
              </h1>
              <p className="text-sm leading-relaxed text-slate-900 md:text-base">
                1ページごとのシンプルな制作費と、運用体制に合わせた保守プランをご用意しています。
                初回ヒアリングから公開後のサポートまで、成果へ直結するWebサイト運用をともに描きます。
              </p>
              <div className="grid gap-3 text-left text-sm text-slate-900 md:max-w-lg">
                {heroHighlights.map((item) => (
                  <div key={item} className="flex items-start gap-3">
                    <span className="mt-1 flex h-7 w-7 flex-none items-center justify-center rounded-full bg-white/15">
                      <SparklesIcon className="h-4 w-4 text-slate-900" />
                    </span>
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="hidden md:block">
              <div className="rounded-3xl border border-white/20 bg-white/10 p-8 shadow-[0_20px_60px_-40px_rgba(251,191,36,0.9)] backdrop-blur">
                <div className="flex items-center gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white/20 text-slate-900">
                    <PuzzlePieceIcon className="h-7 w-7" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-slate-900">
                      要件に合わせた柔軟なページ構成
                    </p>
                    <p className="text-xs text-slate-900/80">
                      1ページ単位で拡張できるため、事業の成長に合わせた段階的なサイト構築が可能です。
                    </p>
                  </div>
                </div>
                <div className="mt-6 rounded-2xl border border-white/20 bg-white/10 px-5 py-4 text-xs text-white/80">
                  <div className="flex items-center gap-2 text-slate-900">
                    <ShieldCheckIcon className="h-5 w-5" />
                    <span className="text-sm font-semibold">制作費 + 運用保守で安心サポート</span>
                  </div>
                  <p className="mt-3 leading-relaxed text-slate-900">
                    ドメイン・サーバー管理、日々の微修正、アクセス動向の共有をワンストップで対応。サイトの成果を継続的に高めます。
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mt-12 px-4 pb-20 sm:px-6 lg:mt-16">
        <div className="mx-auto max-w-6xl space-y-16">
          <div className="grid gap-10 lg:grid-cols-[minmax(0,1.15fr)_minmax(0,0.85fr)]">
            <InitPricingCard
              className="w-full"
              title="初期費用（ホームページ制作）"
              subtitle="ページ単位での制作料金"
              originalPrice=""
              currentPrice="¥4,000"
              period="1ページあたり（税込）"
              yearlyTotal=""
              note="テキスト・画像素材とヒアリング内容をもとに、貴社のブランドに沿ったデザインと導線を作成します。"
            />
            <div className="rounded-3xl border border-orange-200/70 bg-white p-8 shadow-xl shadow-orange-200/40 dark:border-white/10 dark:bg-slate-800/80 dark:shadow-none">
              <h2 className="text-lg font-semibold text-slate-900 dark:text-white">
                初期制作に含まれるもの
              </h2>
              <ul className="mt-6 space-y-3 text-sm text-slate-700 dark:text-slate-200">
                {productionIncludes.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="mt-1 h-2 w-2 flex-none rounded-full bg-gradient-to-r from-orange-400 to-sky-400" />
                    <span>{item}</span>
                  </li>
                ))}
                <li className="flex items-start gap-3">
                  <span className="mt-1 h-2 w-2 flex-none rounded-full bg-gradient-to-r from-orange-400 to-sky-400" />
                  <span>追加ページも同額で柔軟に拡張できます。お気軽にご相談ください。</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="rounded-3xl bg-white/95 p-10 shadow-xl shadow-orange-200/30 dark:bg-slate-900/80 dark:shadow-none">
            <h2 className="text-2xl font-semibold text-center text-slate-900 dark:text-white">
              月額運用・保守プラン
            </h2>
            <p className="mt-3 text-center text-sm text-slate-600 dark:text-slate-300">
              安心してサイトを運用いただくために、契約期間に合わせた2つのプランをご用意しています。
            </p>
            <div className="mt-10 grid gap-6 md:grid-cols-2">
              <PricingCard
                title="月契約プラン"
                subtitle="短期のキャンペーンやスポット運用に最適"
                originalPrice=""
                currentPrice="¥5,000"
                period="月契約（税込）"
                yearlyTotal=""
                note="ドメイン・サーバー管理、小規模な文言修正、計測タグの更新など日常運用を幅広くカバーします。"
              />
              <PricingCard
                title="年間契約プラン"
                subtitle="継続的な改善とコスト最適化を重視する方向け"
                originalPrice="年換算 ¥54,000"
                currentPrice="¥4,500"
                period="月額（年間契約・税込）"
                yearlyTotal=""
                note="月契約プランの内容に加え、四半期ごとのアクセスレポートと改善提案をお届けします。"
              />
            </div>
            <div className="mt-8 grid gap-3 text-sm text-slate-600 dark:text-slate-300 md:grid-cols-3">
              {maintenanceHighlights.map((item) => (
                <div key={item} className="flex items-start gap-3">
                  <span className="mt-1 h-2 w-2 flex-none rounded-full bg-gradient-to-r from-orange-400 to-sky-400" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-3xl border border-orange-200/70 bg-white/95 p-8 text-sm text-slate-600 shadow-lg shadow-orange-200/30 dark:border-white/10 dark:bg-slate-800/80 dark:text-slate-300">
            <h3 className="text-base font-semibold text-slate-900 dark:text-white">ご契約にあたってのご留意事項</h3>
            <ul className="mt-4 space-y-2">
              {cautionNotes.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="mt-1 h-2 w-2 flex-none rounded-full bg-gradient-to-r from-orange-400 to-sky-400" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <p className="mt-4">
              詳細は<a href="/termsOfService" className="ml-1 font-semibold text-orange-500 underline hover:text-sky-400">ご利用規約</a>をご確認ください。
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
