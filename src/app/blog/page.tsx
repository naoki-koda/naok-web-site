import type { Metadata } from 'next';
import Link from 'next/link';
import { kosugiMaru } from '@/app/ui/fonts';

const posts = [
  {
    slug: '/blog/tategumatome',
    title: '名古屋のおすすめ造作家具店まとめ',
    description:
      '袖野建具店を筆頭に、オーダー家具・造作家具を任せられる5社を比較。施工エリアや打ち合わせフロー、公式サイトで公開されている強みを整理しました。',
    tags: ['造作家具', '建具', '名古屋'],
    readTime: '約8分',
    accent: 'from-amber-100 via-white to-amber-50',
  },
  {
    slug: '/blog/hotelmatome',
    title: 'ホテル会員プログラムの予約・ポイントランキング',
    description:
      'Marriott BonvoyやHilton Honorsなど、アプリ体験とポイント還元の2軸で国内外チェーンを比較。スマホ予約の快適さと無料宿泊までの距離を見える化しました。',
    tags: ['ホテル', 'ポイント', '旅行'],
    readTime: '約9分',
    accent: 'from-rose-100 via-white to-rose-50',
  },
  {
    slug: '/blog/aienappmatome',
    title: 'AI英会話アプリまとめ',
    description:
      'SpeakやSpifulなど、ビジネス英語に効くAI英会話アプリを比較。料金・強み・無料体験情報を網羅しました。',
    tags: ['AI学習', '英会話', 'アプリ'],
    readTime: '約10分',
    accent: 'from-indigo-100 via-white to-blue-50',
  },
  {
    slug: '/blog/sakanmatome',
    title: '名古屋の左官職人・工務店まとめ',
    description:
      '自然素材の仕上げに強い職人から、大規模現場を得意とする施工会社まで、技術力と伴走力で選んだ左官のプロ5選。対応範囲や得意領域をひと目で確認できます。',
    tags: ['左官工事', '自然素材', '施工会社'],
    readTime: '約7分',
    accent: 'from-sky-100 via-white to-blue-50',
  },
];

export const metadata: Metadata = {
  title: 'まとめ記事一覧｜名古屋の職人・施工会社ガイド',
  description: '造作家具や左官など、名古屋エリアの住まいづくりに役立つまとめ記事を一覧で確認できます。',
};

export default function BlogIndexPage() {
  return (
    <main className="bg-gradient-to-b from-slate-50 via-white to-slate-100">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
        <header className="rounded-3xl bg-white/90 p-10 shadow-lg shadow-slate-100 ring-1 ring-slate-100">
          <p className="text-sm font-semibold uppercase tracking-widest text-amber-500">Blog Archive</p>
          <h1 className={`mt-4 text-3xl font-bold text-slate-900 sm:text-4xl ${kosugiMaru.className}`}>
            名古屋の住まいづくりまとめ記事
          </h1>
          <p className="mt-4 text-base leading-relaxed text-slate-700">
            職人や専門店のリサーチ結果をまとめた記事を随時公開しています。施工エリアや打ち合わせ方法など、公式情報に基づいて整理しているので比較検討にご活用ください。
          </p>
          <div className="mt-6 flex flex-wrap gap-3 text-sm text-slate-500">
            <span className="inline-flex items-center rounded-full bg-slate-100 px-3 py-1">#名古屋</span>
            <span className="inline-flex items-center rounded-full bg-slate-100 px-3 py-1">#職人ガイド</span>
            <span className="inline-flex items-center rounded-full bg-slate-100 px-3 py-1">#まとめ記事</span>
          </div>
        </header>

        <section className="mt-12 grid gap-8 lg:grid-cols-2">
          {posts.map((post) => (
            <article
              key={post.slug}
              className={`group rounded-3xl bg-gradient-to-br ${post.accent} p-1 shadow-lg shadow-slate-100 transition hover:-translate-y-1`}
            >
              <div className="h-full rounded-[26px] bg-white/90 p-8">
                <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-slate-500">
                  {post.readTime}
                  <span aria-hidden="true">•</span>
                  最新更新
                </div>
                <h2 className="mt-4 text-2xl font-bold text-slate-900">{post.title}</h2>
                <p className="mt-3 text-sm leading-relaxed text-slate-700">{post.description}</p>
                <div className="mt-6 flex flex-wrap gap-2">
                  {post.tags.map((tag) => (
                    <span key={tag} className="inline-flex items-center rounded-full border border-slate-100 bg-slate-50 px-3 py-1 text-xs font-medium text-slate-600">
                      {tag}
                    </span>
                  ))}
                </div>
                <Link
                  href={post.slug}
                  className="mt-8 inline-flex items-center rounded-full bg-slate-900 px-6 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-slate-700"
                >
                  記事を読む
                  <span className="ml-2" aria-hidden="true">
                    →
                  </span>
                </Link>
              </div>
            </article>
          ))}
        </section>

        <section className="mt-16 rounded-3xl bg-slate-900 p-8 text-slate-100">
          <h2 className="text-2xl font-semibold">更新予定・リクエスト</h2>
          <p className="mt-4 text-sm leading-relaxed text-slate-300">
            今後は塗装、防水、リノベーション会社の比較記事も公開していきます。「この業種をまとめて欲しい」などのリクエストがあれば、お問い合わせフォームからお知らせください。
          </p>
          <Link
            href="/contact"
            className="mt-6 inline-flex items-center rounded-full bg-amber-400/90 px-5 py-2 text-sm font-semibold text-slate-900 transition hover:bg-amber-300"
          >
            お問い合わせへ
          </Link>
        </section>
      </div>
    </main>
  );
}
