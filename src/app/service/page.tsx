'use client';

import { kosugiMaru } from '@/app/ui/fonts';
import Link from 'next/link';

const servicePackages = [
  {
    title: 'ホームページ制作・リニューアル',
    description:
      '小規模事業者・クリニック・美容サロン・宿泊施設など業種別の導線とライティングをワンストップで設計。1ページ構成から多言語サイトまで対応します。',
    bullets: [
      '要件定義／競合・キーワード分析／サイトマップ策定',
      'Next.js（SPA/SSG）による高速表示、フォームの実装',
      '公開後2週間の初期サポート・修正対応を標準付帯',
    ],
    link: { href: '/price', label: '制作費・相場を見る' },
  },
  {
    title: '運用・SEO・マーケティング支援',
    description:
      '公開後の更新代行、ブログ運用、検索順位改善、SNS連携など成長フェーズを支援します。',
    bullets: [
      '月次アクセスレポート・改善提案・目標設定',
      'ローカルSEO施策（構造化データ・口コミ導線・地域キーワード最適化）',
      'ブログ記事/FAQ生成支援（AI×人のハイブリッド）、E-E-A-T強化',
      '多言語展開（英語 / 中国語）や越境EC向けの翻訳・ローカライズ',
    ],
    link: { href: '/contact', label: '運用相談を無料で予約' },
  }
];

const supportAreas = [
  { area: '東海エリア', detail: '名古屋市 / 愛知県 / 岐阜 / 三重 / 静岡' },
  { area: '関西・近畿', detail: '大阪 / 京都 / 兵庫（神戸） / 奈良 / 和歌山' },
  { area: '九州・沖縄', detail: '福岡市 / 久留米 / 熊本 / 沖縄' },
  { area: '関東・首都圏', detail: '東京 / 神奈川（横浜） / 千葉 / 埼玉 / 茨城（つくば・土浦）' },
  { area: 'その他地域', detail: '北海道 / 東北（青森・仙台） / 北陸（富山・福井） / 中国・四国' },
];

const industryHighlights = [
  {
    title: '医療・クリニック・歯科',
    points: ['ネット集患導線（予約ボタン・初診案内）', '医療法・薬機法対応のコンテンツチェック', '口コミ/Googleマップ施策連携'],
  },
  {
    title: '美容室・ネイルサロン・エステ',
    points: ['Instagram/TikTok連携', 'AIでのヘアスタイルカタログ生成', 'ホットペッパーやLINE予約へのシームレス誘導'],
  },
  {
    title: '習い事・ピアノ教室・フィットネス',
    points: ['スケジュール・体験レッスン予約フォーム', '講師紹介・月謝プランの見せ方最適化', '保護者向けFAQコンテンツ'],
  },
  {
    title: 'ペットショップ・動物病院',
    points: ['診療メニュー・料金表テンプレート', '緊急対応・アクセス導線設計', '安心感を高めるスタッフ/設備紹介'],
  },
  {
    title: '宿泊・観光・旅館',
    points: ['多言語対応（英・中・韓）、OTA連携', 'Googleホテル広告との連携', '季節イベントLP制作'],
  },
  {
    title: 'BtoB製造業・専門サービス',
    points: ['製品カタログ・資料DL導線', '用途別キーワード対策', '展示会/セミナー連携LP制作'],
  },
];

export default function ServicePage() {
  return (
    <div className="bg-slate-50/60 dark:bg-slate-900 min-h-screen pb-24">
      <section className="relative overflow-hidden rounded-b-[3.5rem] bg-gradient-to-br from-orange-400 to-sky-400 text-white">
        <div className="absolute inset-0 -z-10">
          <div className="absolute inset-0 bg-[repeating-linear-gradient(90deg,rgba(255,255,255,0.12)_0,rgba(255,255,255,0.12)_1px,transparent_1px,transparent_80px)] opacity-70" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.25),transparent_55%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,rgba(255,255,255,0.2),transparent_60%)]" />
          <div className="absolute -top-36 -left-20 h-64 w-64 rounded-full bg-white/15 blur-3xl" />
          <div className="absolute -bottom-48 right-[-20%] h-80 w-80 rounded-full bg-white/10 blur-3xl" />
          <div className="absolute inset-0 bg-slate-900/20" />
        </div>
        <div className="relative mx-auto max-w-5xl px-6 py-16 sm:py-20 md:px-10">
          <div className="mx-auto max-w-3xl text-center space-y-6">
            <span className="inline-flex items-center justify-center rounded-full border border-white/25 bg-white/10 px-4 py-1 text-xs font-semibold tracking-[0.35em] text-white/90">
              SERVICE
            </span>
            <h1 className={`text-3xl leading-tight text-white md:text-4xl lg:text-[2.8rem] ${kosugiMaru.className}`}>
              ホームページ制作から運用・補助金活用まで<br className="hidden sm:inline" />
              ビジネス成長を支えるフルサポート
            </h1>
            <p className="text-sm leading-relaxed text-slate-100 md:text-base">
              「制作費の相場を知りたい」「補助金を使ってコストを抑えたい」「業種に合わせたデザインが必要」「AIや多言語サイトを試したい」「フリーランスと協業したい」といった多様なニーズに対し、戦略立案から運用まで伴走します。
            </p>
            <div className="flex flex-wrap justify-center gap-3 text-xs text-white/90">
              <span className="rounded-full border border-white/30 bg-white/15 px-3 py-1">制作費相場診断</span>
              <span className="rounded-full border border-white/30 bg-white/15 px-3 py-1">補助金・助成金サポート</span>
              <span className="rounded-full border border-white/30 bg-white/15 px-3 py-1">AI・ノーコード支援</span>
              <span className="rounded-full border border-white/30 bg-white/15 px-3 py-1">業種特化デザイン</span>
              <span className="rounded-full border border-white/30 bg-white/15 px-3 py-1">フリーランス協業</span>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-6 py-16 space-y-12">
        <h2 className="text-3xl font-semibold text-slate-900 dark:text-white text-center">提供サービス一覧</h2>
        <div className="grid gap-6 md:grid-cols-2">
          {servicePackages.map((pkg) => (
            <article
              key={pkg.title}
              className="rounded-3xl border border-orange-200/70 bg-white/95 p-6 text-slate-900 shadow-lg shadow-orange-200/40 transition hover:border-orange-300 hover:shadow-xl dark:border-white/10 dark:bg-slate-900/80 dark:text-white"
            >
              <h3 className="text-xl font-semibold text-orange-600 dark:text-orange-300">{pkg.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-gray-700 dark:text-gray-200">{pkg.description}</p>
              <ul className="mt-4 space-y-2 text-xs text-gray-600 dark:text-gray-300">
                {pkg.bullets.map((item) => (
                  <li key={item}>・{item}</li>
                ))}
              </ul>
              <Link
                href={pkg.link.href}
                className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-orange-500 underline decoration-dotted hover:text-sky-400"
              >
                {pkg.link.label}
              </Link>
            </article>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-6 py-16">
        <div className="rounded-3xl border border-white/20 bg-gradient-to-br from-slate-900 via-slate-900 to-slate-800 p-10 text-white shadow-xl shadow-slate-900/30">
          <h2 className="text-2xl font-semibold text-center mb-6">地域別サポートエリアと協業ネットワーク</h2>
          <p className="text-sm text-center text-white/80 mb-8">
            名古屋を中心に、大阪・福岡・東京・北海道など全国の制作会社/フリーランスとパートナーシップを構築。現地での打ち合わせや業種特化パートナーの紹介が可能です。
          </p>
          <div className="grid gap-4 md:grid-cols-2">
            {supportAreas.map((area) => (
              <div key={area.area} className="rounded-2xl border border-white/20 bg-white/10 p-5 backdrop-blur">
                <h3 className="text-lg font-semibold">{area.area}</h3>
                <p className="mt-2 text-sm text-white/80">{area.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-6 py-16">
        <h2 className="text-2xl font-semibold text-slate-900 dark:text-white text-center mb-8">業種別ソリューション</h2>
        <div className="grid gap-6 md:grid-cols-3">
          {industryHighlights.map((industry) => (
            <div
              key={industry.title}
              className="rounded-3xl border border-orange-200/60 bg-white/95 p-6 shadow-md shadow-orange-200/40 transition hover:border-orange-300 hover:shadow-lg dark:border-white/10 dark:bg-slate-900/80 dark:text-white"
            >
              <h3 className="text-lg font-semibold text-orange-600 dark:text-orange-300">{industry.title}</h3>
              <ul className="mt-3 space-y-2 text-xs text-gray-600 dark:text-gray-300">
                {industry.points.map((point) => (
                  <li key={point}>・{point}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-6 py-16">
        <div className="rounded-3xl border border-orange-200/70 bg-white/95 p-10 text-slate-900 shadow-xl shadow-orange-200/40 dark:border-white/10 dark:bg-slate-900/80 dark:text-white">
          <h2 className="text-2xl font-semibold text-center">制作の流れと依頼方法</h2>
          <ol className="mt-8 space-y-6 text-sm text-gray-700 dark:text-gray-200">
            <li>
              <strong className="text-orange-500">1. 無料相談（30〜45分）</strong>
              <p className="mt-2">現状の課題、予算、希望納期、補助金利用の有無、運用体制をヒアリング。ビッグキーワードに基づいたSEO戦略と競合チェックを行います。</p>
            </li>
            <li>
              <strong className="text-orange-500">2. プロトタイプとしてホームページを数ページ作成</strong>
                <p className="mt-2">
                  実際のデザインや動きを確認できる簡易サイトを構築し、方向性や世界観を共有します。トップ・サービス・お問い合わせなど主要ページを試作し、完成イメージを明確にします。
                </p>
            </li>
            <li>
              <strong className="text-orange-500">3. お見積り・ご提案</strong>
              <p className="mt-2">ページ構成／スケジュール／費用を明確化し、補助金活用プランやDIYとの比較資料も提示。1ページ単価や相場を明文化します。</p>
            </li>
            <li>
              <strong className="text-orange-500">4. ご契約〜制作</strong>
              <p className="mt-2">要件定義 → デザイン → コーディング → テストと進行。業種別テンプレートとAI活用で短納期にも対応します。</p>
            </li>
            <li>
              <strong className="text-orange-500">5. 公開・運用サポート</strong>
              <p className="mt-2">公開後の更新、SEOレポート、コンテンツ追加、広告・SNS連携などを継続支援。チーム内製化も伴走サポートします。</p>
            </li>
          </ol>
          <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:justify-center">
            <Link
              href="/price"
              className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-orange-400 to-sky-400 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-orange-200/40 transition hover:brightness-105"
            >
              制作費・補助金の詳細を見る
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-full border border-orange-400 px-6 py-3 text-sm font-semibold text-orange-500 transition hover:bg-orange-50"
            >
              無料相談を予約する
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
