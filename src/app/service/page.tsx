"use client";

import { primaryButton, secondaryButton } from "@/app/ui/buttons";
import { BentoCell, GlowCard } from "@/app/ui/cards";
import { shipporiAntiqueB1 } from "@/app/ui/fonts";
import {
  Chip,
  DotList,
  PageHero,
  PageShell,
  SectionHeading,
} from "@/app/ui/page-parts";
import { BentoGrid } from "@/components/ui/bento-grid";
import {
  AcademicCapIcon,
  BuildingOffice2Icon,
  HeartIcon,
  HomeModernIcon,
  ScissorsIcon,
  SparklesIcon,
} from "@heroicons/react/24/outline";
import Link from "next/link";

const servicePackages = [
  {
    title: "ホームページ制作・リニューアル",
    description:
      "小規模事業者・クリニック・美容サロン・宿泊施設など業種別の導線とライティングをワンストップで設計。1ページ構成から多言語サイトまで対応します。",
    bullets: [
      "要件定義／競合・キーワード分析／サイトマップ策定",
      "Next.js（SPA/SSG）による高速表示、フォームの実装",
      "公開後2週間の初期サポート・修正対応を標準付帯",
    ],
    link: { href: "/price", label: "制作費・相場を見る" },
  },
  {
    title: "運用・SEO・マーケティング支援",
    description:
      "公開後の更新代行、ブログ運用、検索順位改善、SNS連携など成長フェーズを支援します。",
    bullets: [
      "月次アクセスレポート・改善提案・目標設定",
      "ローカルSEO施策（構造化データ・口コミ導線・地域キーワード最適化）",
      "ブログ記事/FAQ生成支援（AI×人のハイブリッド）、E-E-A-T強化",
      "多言語展開（英語 / 中国語）や越境EC向けの翻訳・ローカライズ",
    ],
    link: { href: "/contact", label: "運用相談を無料で予約" },
  },
];

const supportAreas = [
  { area: "東海エリア", detail: "名古屋市 / 愛知県 / 岐阜 / 三重 / 静岡" },
  { area: "関西・近畿", detail: "大阪 / 京都 / 兵庫（神戸） / 奈良 / 和歌山" },
  { area: "九州・沖縄", detail: "福岡市 / 久留米 / 熊本 / 沖縄" },
  {
    area: "関東・首都圏",
    detail: "東京 / 神奈川（横浜） / 千葉 / 埼玉 / 茨城（つくば・土浦）",
  },
  {
    area: "その他地域",
    detail: "北海道 / 東北（青森・仙台） / 北陸（富山・福井） / 中国・四国",
  },
];

const industryHighlights = [
  {
    title: "医療・クリニック・歯科",
    icon: HeartIcon,
    points: [
      "ネット集患導線（予約ボタン・初診案内）",
      "医療法・薬機法対応のコンテンツチェック",
      "口コミ/Googleマップ施策連携",
    ],
  },
  {
    title: "美容室・ネイルサロン・エステ",
    icon: ScissorsIcon,
    points: [
      "Instagram/TikTok連携",
      "AIでのヘアスタイルカタログ生成",
      "ホットペッパーやLINE予約へのシームレス誘導",
    ],
  },
  {
    title: "習い事・ピアノ教室・フィットネス",
    icon: AcademicCapIcon,
    points: [
      "スケジュール・体験レッスン予約フォーム",
      "講師紹介・月謝プランの見せ方最適化",
      "保護者向けFAQコンテンツ",
    ],
  },
  {
    title: "ペットショップ・動物病院",
    icon: SparklesIcon,
    points: [
      "診療メニュー・料金表テンプレート",
      "緊急対応・アクセス導線設計",
      "安心感を高めるスタッフ/設備紹介",
    ],
  },
  {
    title: "宿泊・観光・旅館",
    icon: HomeModernIcon,
    points: [
      "多言語対応（英・中・韓）、OTA連携",
      "Googleホテル広告との連携",
      "季節イベントLP制作",
    ],
  },
  {
    title: "BtoB製造業・専門サービス",
    icon: BuildingOffice2Icon,
    points: [
      "製品カタログ・資料DL導線",
      "用途別キーワード対策",
      "展示会/セミナー連携LP制作",
    ],
  },
];

const flow = [
  {
    title: "無料相談（30〜45分）",
    text: "現状の課題、予算、希望納期、補助金利用の有無、運用体制をヒアリング。ビッグキーワードに基づいたSEO戦略と競合チェックを行います。",
  },
  {
    title: "プロトタイプとしてホームページを数ページ作成",
    text: "実際のデザインや動きを確認できる簡易サイトを構築し、方向性や世界観を共有します。トップ・サービス・お問い合わせなど主要ページを試作し、完成イメージを明確にします。",
  },
  {
    title: "お見積り・ご提案",
    text: "ページ構成／スケジュール／費用を明確化し、補助金活用プランやDIYとの比較資料も提示。1ページ単価や相場を明文化します。",
  },
  {
    title: "ご契約〜制作",
    text: "要件定義 → デザイン → コーディング → テストと進行。業種別テンプレートとAI活用で短納期にも対応します。",
  },
  {
    title: "公開・運用サポート",
    text: "公開後の更新、SEOレポート、コンテンツ追加、広告・SNS連携などを継続支援。チーム内製化も伴走サポートします。",
  },
];

export default function ServicePage() {
  return (
    <PageShell>
      <PageHero
        badge="SERVICE"
        title={
          <>
            ホームページ制作から、
            <br className="hidden sm:inline" />
            事業サイトの広め方まで。
          </>
        }
        lead="「制作費の相場を知りたい」「業種に合わせたデザインが必要」「AIや多言語サイトを試したい」といった多様なニーズに対し、戦略立案から運用まで二人三脚で伴走します。"
      >
        <div className="flex flex-wrap gap-2">
          <Chip>制作費相場診断</Chip>
          <Chip>AI・ノーコード支援</Chip>
          <Chip>業種特化デザイン</Chip>
        </div>
      </PageHero>

      {/* 提供サービス */}
      <section className="mx-auto max-w-6xl px-6 py-10">
        <SectionHeading title="提供サービス一覧" />
        <BentoGrid className="mx-0 mt-8 max-w-none md:auto-rows-auto md:grid-cols-2">
          {servicePackages.map((pkg, i) => (
            <BentoCell
              key={pkg.title}
              icon={
                <span className={`${shipporiAntiqueB1.className} text-2xl text-[#ff4a3f]`}>
                  {String(i + 1).padStart(2, "0")}
                </span>
              }
              title={<span className="mt-2 block text-xl">{pkg.title}</span>}
              description={
                <>
                  <p>{pkg.description}</p>
                  <DotList items={pkg.bullets} className="mt-4 text-xs" />
                  <Link
                    href={pkg.link.href}
                    className="mt-6 inline-block border-b-2 border-[#ff4a3f] pb-0.5 text-sm font-bold text-[#15181d]"
                  >
                    {pkg.link.label} →
                  </Link>
                </>
              }
            />
          ))}
        </BentoGrid>
      </section>

      {/* 業種別 */}
      <section className="mx-auto max-w-6xl px-6 py-10">
        <SectionHeading
          title="業種別ソリューション"
          lead="業種ごとに、お客様が知りたいことと行動のきっかけは変わります。それぞれに合わせた導線を用意しています。"
        />
        <BentoGrid className="mx-0 mt-8 max-w-none md:auto-rows-auto">
          {industryHighlights.map((industry) => (
            <BentoCell
              key={industry.title}
              icon={
                <span className="inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-[#ff4a3f]/12 text-[#e0372d]">
                  <industry.icon className="h-6 w-6" aria-hidden="true" />
                </span>
              }
              title={<span className="mt-3 block text-lg">{industry.title}</span>}
              description={<DotList items={industry.points} className="text-xs" />}
            />
          ))}
        </BentoGrid>
      </section>

      {/* 制作の流れ */}
      <section className="mx-auto max-w-6xl px-6 py-10">
        <SectionHeading title="制作の流れと依頼方法" />
        <GlowCard className="mt-8" innerClassName="md:p-12">
          <ol className="relative space-y-8 before:absolute before:left-[1.15rem] before:top-2 before:bottom-2 before:w-px before:bg-[#aaacff]">
            {flow.map((step, i) => (
              <li key={step.title} className="relative flex gap-5">
                <span className="relative z-10 inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#ff4a3f] text-sm font-bold text-[#15181d]">
                  {i + 1}
                </span>
                <div>
                  <p className="font-bold">{step.title}</p>
                  <p className="mt-1.5 text-sm leading-relaxed text-[#4a4d55]">
                    {step.text}
                  </p>
                </div>
              </li>
            ))}
          </ol>
          <div className="mt-10 flex flex-col gap-3 sm:flex-row">
            <Link href="/contact" className={primaryButton}>
              無料相談を予約する
            </Link>
            <Link href="/price" className={secondaryButton}>
              制作費・料金を見る
            </Link>
          </div>
        </GlowCard>
      </section>
    </PageShell>
  );
}
