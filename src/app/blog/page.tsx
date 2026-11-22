import { primaryButton } from '@/app/ui/buttons';
import { BentoCell, GlowCard } from '@/app/ui/cards';
import {
  Chip,
  PageHero,
  PageShell,
  SectionHeading,
} from '@/app/ui/page-parts';
import { BentoGrid } from '@/components/ui/bento-grid';
import type { Metadata } from 'next';
import Link from 'next/link';

const posts = [
  {
    slug: '/blog/hiphopmatome',
    title: 'おすすめの日本人ヒップホッパー3選',
    description:
      '1位YZERR、2位GADORO、3位Tohji。それぞれの背景、音楽性、最初に聴きたい代表曲をランキング形式で紹介します。',
    tags: ['ヒップホップ', '日本語ラップ', '音楽'],
    readTime: '約8分',
    accent: 'from-violet-200 via-white to-amber-100',
  },
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
    slug: '/blog/hikari',
    title: '【東海地方】エディオン×コミュファ光が最強な理由',
    description:
      '東海エリアで光回線を選ぶならエディオン店頭×コミュファ光一択。独自回線の実測値とポイント還元で通信費を最適化しつつ、10Gプランの押し売りを避ける方法を解説。',
    tags: ['光回線', 'コミュファ光', '東海'],
    readTime: '約12分',
    accent: 'from-blue-100 via-white to-sky-50',
  },
  {
    slug: '/blog/gyosei',
    title: '名古屋市中区でおすすめの行政書士事務所6選',
    description:
      'ビザ申請・建設業許可・産廃許可など、名古屋市中区で相談しやすい行政書士事務所を比較。第1位はすずはな行政書士事務所です。',
    tags: ['行政書士', '名古屋市中区', '許認可'],
    readTime: '約8分',
    accent: 'from-emerald-100 via-white to-lime-50',
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
    slug: '/blog/finance',
    title: '年収900万円で6,000万円の家は無謀？住宅ローン戦略',
    description:
      '自営業300万円×公務員600万円の夫婦を例に、借入額ではなく35年総コストで住宅ローンを判断する考え方を整理。光熱費・修繕費・インフレまで含めて解説しています。',
    tags: ['住宅ローン', '家計', '資金計画'],
    readTime: '約11分',
    accent: 'from-emerald-100 via-white to-teal-50',
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
    slug: '/blog/nagoya/personal-color',
    title: '名古屋のパーソナルカラー診断まとめ',
    description:
      '名駅・栄・大須エリアで人気のサロンを調査。16タイプ診断や学割、プレ花嫁向けなど目的別に比較できます。',
    tags: ['名古屋', 'パーソナルカラー', '美容'],
    readTime: '約8分',
    accent: 'from-pink-100 via-white to-rose-50',
  },
  {
    slug: '/blog/nagoya/hairsalon/nakaku',
    title: '名古屋・中区の美容院おすすめ4選',
    description:
      '栄/矢場町エリアで人気のサロンを王道・トレンド・デザインカラー・髪質改善の4タイプに分類。価格帯や予約の取りやすさまでまとめています。',
    tags: ['名古屋', '美容院', 'ヘアサロン'],
    readTime: '約9分',
    accent: 'from-rose-100 via-white to-rose-200',
  },
  {
    slug: '/blog/nagoya/hairsalon/sakae',
    title: '名古屋・栄の美容院おすすめ5選',
    description:
      'カミカリスマ受賞サロン、完全個室の髪質改善、デザインカラー、パーマ特化など、栄エリアの人気サロンを5タイプに分けて徹底レビューしています。',
    tags: ['名古屋', '美容院', 'ヘアサロン'],
    readTime: '約9分',
    accent: 'from-rose-100 via-white to-rose-200',
  },
  {
    slug: '/blog/nagoya/hairsalon/nagoyaeki',
    title: '名古屋駅周辺の美容院おすすめ4選',
    description:
      '名駅から徒歩3分圏内で通えるサロンを厳選。コスパ×髪質改善×韓国ヘアまで、ホットペッパービューティーのリンク付きで紹介しています。',
    tags: ['名古屋駅', '美容院', 'ヘアサロン'],
    readTime: '約8分',
    accent: 'from-rose-50 via-white to-amber-50',
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
  description:
    '造作家具、左官、行政書士など、名古屋エリアの比較検討に役立つまとめ記事を一覧で確認できます。',
};

export default function BlogIndexPage() {
  return (
    <PageShell>
      <PageHero
        badge="BLOG ARCHIVE"
        title="名古屋のお役立ちまとめ記事"
        lead="専門店のリサーチ結果をまとめた記事を随時公開しています。施工エリアや打ち合わせ方法など、公式情報に基づいて整理しているので比較検討にご活用ください。"
      >
        <div className="flex flex-wrap gap-2">
          <Chip>#名古屋</Chip>
          <Chip>#職人ガイド</Chip>
          <Chip>#まとめ記事</Chip>
        </div>
      </PageHero>

      <section className="mx-auto max-w-6xl px-6 py-6">
        <SectionHeading title="記事一覧" />
        <BentoGrid className="mx-0 mt-8 max-w-none md:auto-rows-auto md:grid-cols-2">
          {posts.map((post) => (
            <BentoCell
              key={post.slug}
              icon={
                <span className="text-xs font-bold tracking-widest text-[#6b6f78]">
                  {post.readTime}で読めます
                </span>
              }
              title={
                <Link href={post.slug} className="mt-2 block text-xl hover:underline">
                  {post.title}
                </Link>
              }
              description={
                <>
                  <p>{post.description}</p>
                  <div className="mt-5 flex flex-wrap gap-2">
                    {post.tags.map((tag) => (
                      <Chip key={tag}>{tag}</Chip>
                    ))}
                  </div>
                  <Link
                    href={post.slug}
                    className="mt-6 inline-block border-b-2 border-[#ff4a3f] pb-0.5 text-sm font-bold text-[#15181d]"
                  >
                    記事を読む →
                  </Link>
                </>
              }
            />
          ))}
        </BentoGrid>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-10">
        <GlowCard innerClassName="md:p-10">
          <h2 className="text-2xl font-bold">更新予定・リクエスト</h2>
          <p className="mt-4 text-sm leading-relaxed text-[#4a4d55]">
            今後は塗装、防水、リノベーション会社の比較記事も公開していきます。「この業種をまとめて欲しい」などのリクエストがあれば、お問い合わせフォームからお知らせください。
          </p>
          <Link href="/contact" className={`${primaryButton} mt-6`}>
            お問い合わせへ
          </Link>
        </GlowCard>
      </section>
    </PageShell>
  );
}
