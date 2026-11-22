import { BentoCell, GlowCard } from '@/app/ui/cards';
import Form from '@/app/ui/contact/contact-form';
import { DotList, PageHero, PageShell } from '@/app/ui/page-parts';
import PrivacyPolicyContent from '@/app/ui/privacy-policy';
import { BentoGrid } from '@/components/ui/bento-grid';
import {
  CalendarDaysIcon,
  ChatBubbleLeftRightIcon,
  RocketLaunchIcon,
  SparklesIcon,
} from '@heroicons/react/24/outline';

const heroHighlights = [
  '目的設計から公開までワンストップで支援',
  'Next.js × SPA で高速表示とSEOを両立',
  '公開後の運用・改善も伴走サポート',
];

const supportPoints = [
  {
    title: 'ヒアリングとゴール設計',
    description:
      '現状の課題・ターゲット・競合を丁寧にヒアリングし、成果につながる構成とコンテンツ戦略を策定します。',
    Icon: ChatBubbleLeftRightIcon,
  },
  {
    title: 'デザイン＆UX設計',
    description:
      '利用シナリオに沿った導線・UIを設計。ヒーローコピーやCTA設計まで一貫してクリエイティブを支援します。',
    Icon: SparklesIcon,
  },
  {
    title: '高速な制作と公開後フォロー',
    description:
      'Next.jsでの高速フロント実装に加え、公開後の改善提案や集客施策、運用体制づくりまで伴走します。',
    Icon: RocketLaunchIcon,
  },
];

const timeline = [
  {
    title: '1. 初回オンライン相談（60分）',
    description: '事業内容・現状課題・ゴールをヒアリング。提案やお見積りの方針をすり合わせます。',
  },
  {
    title: '2. ご提案・お見積り提出',
    description: 'サイト構成案・スケジュール・見積りをご提示。ご要望に応じてブラッシュアップします。',
  },
  {
    title: '3. ご契約〜制作開始',
    description: '要件定義・ワイヤーフレーム・デザイン・実装の順に進行し、進捗を共有しながら制作します。',
  },
  {
    title: '4. 公開 & 伴走サポート',
    description: '公開後の導線改善・コンテンツ追加・運用支援まで継続フォローが可能です。',
  },
];

export default function Page() {
  return (
    <PageShell>
      <PageHero
        badge="CONTACT"
        title={
          <>
            ホームページ制作・リニューアルの
            <br className="hidden sm:inline" />
            ご相談はこちらから
          </>
        }
        lead="サービスの魅力を伝え、成果につながるWebサイトを制作します。まだ要件が固まっていない段階でもお気軽にご相談ください。事業理解から集客戦略、公開後の運用まで一貫してサポートいたします。"
        aside={
          <BentoGrid className="mx-0 w-full max-w-none gap-3 md:auto-rows-auto md:grid-cols-1">
            <BentoCell
              icon={
                <span className="inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-[#ff4a3f]/12 text-[#e0372d]">
                  <CalendarDaysIcon className="h-6 w-6" aria-hidden="true" />
                </span>
              }
              title={<span className="mt-3 block">最短3営業日でサイト構成をご提案</span>}
              description="ヒアリング後、ターゲットと導線設計をまとめた構成案をスピーディーにご提示します。"
            />
            <BentoCell
              title="相談の多いテーマ"
              description={
                <DotList
                  className="text-xs"
                  items={[
                    '新サービスの立ち上げ用コーポレートサイト',
                    '既存サイトのSEO改善とCV導線の見直し',
                    'LP量産を前提としたデザインシステム構築',
                  ]}
                />
              }
            />
            <BentoCell
              title="対応エリア"
              description="名古屋・東海エリアの対面打ち合わせに対応。全国のオンライン相談も歓迎しています。"
            />
          </BentoGrid>
        }
      >
        <DotList items={heroHighlights} />
      </PageHero>

      <section className="mx-auto max-w-6xl px-6">
        <div className="grid gap-4 lg:grid-cols-[minmax(0,1.15fr)_minmax(0,0.85fr)]">
          <GlowCard innerClassName="p-0 md:p-0">
            <Form />
          </GlowCard>
          <aside className="space-y-4">
            <GlowCard innerClassName="md:p-8">
              <h2 className="flex items-center gap-2 text-lg font-bold">
                <SparklesIcon className="h-6 w-6 text-[#ff4a3f]" />
                制作フローとサポート体制
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-[#4a4d55]">
                ヒアリングから公開後の改善まで、成果にこだわって伴走します。
              </p>
              <ul className="mt-6 space-y-5">
                {supportPoints.map(({ title, description, Icon }) => (
                  <li key={title} className="flex gap-4">
                    <span className="mt-1 flex h-10 w-10 flex-none items-center justify-center rounded-2xl bg-[#aaacff]/35 text-[#2a2c5a]">
                      <Icon className="h-6 w-6" />
                    </span>
                    <div>
                      <p className="text-sm font-bold">{title}</p>
                      <p className="mt-1 text-xs leading-relaxed text-[#4a4d55]">{description}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </GlowCard>
            <GlowCard innerClassName="md:p-8">
              <h2 className="flex items-center gap-2 text-lg font-bold">
                <RocketLaunchIcon className="h-6 w-6 text-[#ff4a3f]" />
                ご相談〜公開までの流れ
              </h2>
              <ol className="mt-6 space-y-3 text-sm">
                {timeline.map(({ title, description }) => (
                  <li key={title} className="rounded-2xl bg-[#aaacff]/12 p-4">
                    <p className="font-bold">{title}</p>
                    <p className="mt-1.5 text-xs leading-relaxed text-[#4a4d55]">{description}</p>
                  </li>
                ))}
              </ol>
              <p className="mt-6 text-xs text-[#6b6f78]">
                スケジュールやご予算について不安な点があれば、フォーム内でお気軽にお知らせください。
              </p>
            </GlowCard>
          </aside>
        </div>
      </section>

      <PrivacyPolicyContent />
    </PageShell>
  );
}
