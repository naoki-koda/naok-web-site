"use client";

import { primaryButton } from "@/app/ui/buttons";
import { BentoCell, GlowCard } from "@/app/ui/cards";
import InitPricingCard from "@/app/ui/InitPriceCard";
import {
  DotList,
  PageHero,
  PageShell,
  SectionHeading,
} from "@/app/ui/page-parts";
import PricingCard from "@/app/ui/priceCard";
import { BentoGrid } from "@/components/ui/bento-grid";
import { PuzzlePieceIcon, ShieldCheckIcon } from "@heroicons/react/24/outline";
import Link from "next/link";

const heroHighlights = [
  "戦略ヒアリングとサイト構成案の作成",
  "レスポンシブデザインと基本SEO設定",
  "お問い合わせ導線・CTAの最適化",
];

const productionIncludes = [
  "戦略ヒアリングとサイト構成案の作成",
  "デザイン制作とレスポンシブコーディング",
  "基本的なSEO設定と計測タグの設置",
];

const maintenanceHighlights = [
  "ドメイン・サーバーの契約代行と更新管理",
  "小規模な文言修正・画像差し替え対応",
  "月次の稼働状況・アクセスサマリー共有",
];

const cautionNotes = [
  "価格は税込表示です。特別な機能開発は別途お見積りとなります。",
  "ページ数やコンテンツボリュームに応じて制作期間が変動します。",
  "掲載の内容は予告なく変更する場合があります。最新情報はお問い合わせください。",
];

export default function PricingPage() {
  return (
    <PageShell>
      <PageHero
        badge="PRICING"
        title={
          <>
            ビジネスの成長を支える
            <br className="hidden sm:inline" />
            透明性のある料金プラン
          </>
        }
        lead="1ページごとのシンプルな制作費と、運用体制に合わせた保守プランをご用意しています。初回ヒアリングから公開後のサポートまで、成果へ直結するWebサイト運用をともに描きます。"
        aside={
          <BentoGrid className="mx-0 w-full max-w-none gap-3 md:auto-rows-auto md:grid-cols-1">
            <BentoCell
              icon={
                <span className="inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-[#ff4a3f]/12 text-[#e0372d]">
                  <PuzzlePieceIcon className="h-6 w-6" aria-hidden="true" />
                </span>
              }
              title={<span className="mt-3 block">要件に合わせた柔軟なページ構成</span>}
              description="1ページ単位で拡張できるため、事業の成長に合わせた段階的なサイト構築が可能です。"
            />
            <BentoCell
              icon={
                <span className="inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-[#aaacff]/35 text-[#2a2c5a]">
                  <ShieldCheckIcon className="h-6 w-6" aria-hidden="true" />
                </span>
              }
              title={<span className="mt-3 block">制作費 + 運用保守で安心サポート</span>}
              description="ドメイン・サーバー管理、日々の微修正、アクセス動向の共有をワンストップで対応します。"
            />
          </BentoGrid>
        }
      >
        <DotList items={heroHighlights} />
      </PageHero>

      {/* 初期費用 */}
      <section className="mx-auto max-w-6xl px-6 py-10">
        <SectionHeading title="初期費用" />
        <div className="mt-8 grid gap-4 lg:grid-cols-[1.15fr_0.85fr]">
          <InitPricingCard
            className="w-full"
            title="初期費用（ホームページ制作）"
            subtitle="ページ単位での制作料金"
            originalPrice=""
            currentPrice="¥30,000"
            period="1ページあたり（税込）"
            yearlyTotal=""
            note="テキスト・画像素材とヒアリング内容をもとに、貴社のブランドに沿ったデザインと導線を作成します。"
          />
          <GlowCard innerClassName="md:p-10">
            <h2 className="text-lg font-bold">初期制作に含まれるもの</h2>
            <DotList
              className="mt-6"
              items={[
                ...productionIncludes,
                "追加ページも同額で柔軟に拡張できます。お気軽にご相談ください。",
              ]}
            />
          </GlowCard>
        </div>
      </section>

      {/* 月額運用・保守 */}
      <section className="mx-auto max-w-6xl px-6 py-10">
        <SectionHeading
          title="月額運用・保守プラン"
          lead="安心してサイトを運用いただくために、契約期間に合わせた2つのプランをご用意しています。"
        />
        <div className="mt-8 grid gap-4 md:grid-cols-2">
          <PricingCard
            title="月契約プラン"
            subtitle="短期のキャンペーンやスポット運用に最適"
            originalPrice=""
            currentPrice="¥5,000"
            period="月額（税込）"
            yearlyTotal=""
            note="ドメイン・サーバー管理、小規模な文言修正、計測タグの更新など日常運用を幅広くカバーします。"
          />
          <PricingCard
            title="年間契約プラン"
            subtitle="継続的な改善とコスト最適化を重視する方向け"
            originalPrice="年換算 ¥54,000"
            currentPrice="¥4,500"
            period="月額（税込）"
            yearlyTotal=""
            highlighted
            note="ドメイン・サーバー管理、小規模な文言修正、計測タグの更新など日常運用を幅広くカバーします。"
          />
        </div>
        <GlowCard className="mt-4">
          <p className="text-sm font-bold">保守プランに含まれるもの</p>
          <DotList className="mt-4 md:grid md:grid-cols-3 md:gap-4 md:space-y-0" items={maintenanceHighlights} />
        </GlowCard>
      </section>

      {/* 留意事項 */}
      <section className="mx-auto max-w-6xl px-6 py-10">
        <GlowCard innerClassName="md:p-10">
          <h3 className="text-base font-bold">ご契約にあたってのご留意事項</h3>
          <DotList className="mt-4" items={cautionNotes} />
          <p className="mt-4 text-sm text-[#4a4d55]">
            詳細は
            <Link
              href="/termsOfService"
              className="mx-1 border-b-2 border-[#ff4a3f] font-bold text-[#15181d]"
            >
              ご利用規約
            </Link>
            をご確認ください。
          </p>
          <Link href="/contact" className={`${primaryButton} mt-8`}>
            料金について相談する
          </Link>
        </GlowCard>
      </section>
    </PageShell>
  );
}
