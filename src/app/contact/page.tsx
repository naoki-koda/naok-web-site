import Form from '@/app/ui/contact/contact-form';
import { kosugiMaru } from '@/app/ui/fonts';
import PrivacyPolicyContent from '@/app/ui/privacy-policy';
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
    <div className="bg-slate-50/60 pb-24 dark:bg-slate-900">
      <section className="relative overflow-hidden rounded-b-[3.5rem] bg-gradient-to-br from-orange-400 to-sky-400 text-white">
        <div className="absolute inset-0 -z-10">
          <div className="absolute -top-40 -left-24 h-72 w-72 rounded-full bg-sky-400/40 blur-3xl" />
          <div className="absolute -bottom-52 right-[-18%] h-96 w-96 rounded-full bg-orange-400/35 blur-3xl" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,theme(colors.orange.400)/28%,theme(colors.sky.400)/18%,transparent_70%)]" />
          <div className="absolute inset-0 bg-slate-900/35" />
        </div>
        <div className="relative mx-auto max-w-6xl px-6 py-20 sm:py-24 md:px-10">
          <div className="grid gap-10 md:grid-cols-[minmax(0,1.2fr)_minmax(0,0.8fr)] md:items-center">
            <div className="space-y-6 text-center md:text-left">
              <span className="inline-flex items-center justify-center rounded-full border border-white/20 bg-white/10 px-4 py-1 text-xs font-semibold uppercase tracking-[0.35em] text-sky-200">
                CONTACT
              </span>
              <h1
                className={`text-3xl leading-tight text-slate-900 md:text-4xl lg:text-[2.8rem] ${kosugiMaru.className}`}
              >
                ホームページ制作・リニューアルに関するご相談はこちらから
              </h1>
              <p className="text-sm leading-relaxed text-slate-900 md:text-base">
                サービスの魅力を伝え、成果につながるWebサイトを制作します。まだ要件が固まっていない段階でもお気軽にご相談ください。事業理解から集客戦略、公開後の運用まで一貫してサポートいたします。
              </p>
              <ul className="space-y-3 text-sm text-slate-900">
                {heroHighlights.map((item) => (
                  <li key={item} className="flex items-start justify-center gap-3 text-left md:justify-start">
                    <span className="mt-1 flex h-6 w-6 flex-none items-center justify-center rounded-full bg-sky-400/40 text-xs font-semibold text-white">
                      ✔
                    </span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="hidden md:block">
              <div className="rounded-3xl border border-white/15 bg-white/10 p-8 shadow-[0_20px_60px_-40px_rgba(125,211,252,0.8)] backdrop-blur">
                <div className="flex items-center gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-sky-400/30 text-white">
                    <CalendarDaysIcon className="h-7 w-7" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-slate-900">最短3営業日でサイト構成をご提案</p>
                    <p className="text-xs text-slate-900">
                      ヒアリング後、ターゲットと導線設計をまとめた構成案をスピーディーにご提示します。
                    </p>
                  </div>
                </div>
                <div className="mt-6 grid gap-4 text-xs text-slate-900">
                  <p className="rounded-2xl border border-white/20 bg-white/10 px-4 py-3">
                    <strong className="block text-sm text-slate-900">相談の多いテーマ</strong>
                    ・新サービスの立ち上げ用コーポレートサイト<br />
                    ・既存サイトのSEO改善とCV導線の見直し<br />
                    ・LP量産を前提としたデザインシステム構築
                  </p>
                  <p className="rounded-2xl border border-white/20 bg-slate px-4 py-3">
                    <strong className="block text-sm text-slate-900">対応エリア</strong>
                    名古屋・東海エリアの対面打ち合わせに対応。全国のオンライン相談も歓迎しています。
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="-mt-12 px-4 pb-20 sm:px-6 lg:-mt-16">
        <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-[minmax(0,1.15fr)_minmax(0,0.85fr)]">
          <Form />
          <aside className="space-y-6">
            <div className="rounded-3xl border border-slate-200/70 bg-white p-8 shadow-xl shadow-slate-400/10 dark:border-white/10 dark:bg-slate-900/80 dark:shadow-none">
              <h2 className="flex items-center gap-2 text-lg font-semibold text-slate-900 dark:text-white">
                <SparklesIcon className="h-6 w-6 text-sky-500" />
                制作フローとサポート体制
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-slate-600 dark:text-slate-300">
                ヒアリングから公開後の改善まで、成果にこだわって伴走します。
              </p>
              <ul className="mt-6 space-y-5">
                {supportPoints.map(({ title, description, Icon }) => (
                  <li key={title} className="flex gap-4">
                    <span className="mt-1 flex h-10 w-10 flex-none items-center justify-center rounded-2xl bg-sky-500/15 text-sky-500">
                      <Icon className="h-6 w-6" />
                    </span>
                    <div>
                      <p className="text-sm font-semibold text-slate-900 dark:text-white">{title}</p>
                      <p className="text-xs leading-relaxed text-slate-600 dark:text-slate-300">{description}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-3xl border border-white/30 bg-gradient-to-br from-orange-400 to-sky-400 p-8 text-white shadow-xl shadow-orange-300/30">
              <h2 className="flex items-center gap-2 text-lg font-semibold text-slate-900">
                <RocketLaunchIcon className="h-6 w-6 text-sky-300" />
                ご相談〜公開までの流れ
              </h2>
              <ol className="mt-6 space-y-5 text-sm">
                {timeline.map(({ title, description }) => (
                  <li key={title} className="rounded-2xl border border-white/20 bg-white/10 p-4 text-slate-900">
                    <p className="font-semibold">{title}</p>
                    <p className="mt-2 text-xs leading-relaxed text-slate-900/85">{description}</p>
                  </li>
                ))}
              </ol>
              <p className="mt-6 text-xs text-slate-900/80">
                スケジュールやご予算について不安な点があれば、フォーム内でお気軽にお知らせください。
              </p>
            </div>
          </aside>
        </div>
      </section>

      <PrivacyPolicyContent />
    </div>
  );
}
