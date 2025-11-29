// app/nagoya-personal-color/[salonId]/page.tsx
import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import {
  MapPin, 
  Clock, 
  CalendarCheck, 
  CheckCircle2, 
  CreditCard,
  Sparkles,
  ArrowRight
} from 'lucide-react';
import { salons } from '@/app/data/salons';

// ▼ 詳細ページ用の拡張データ（本来はDBやCMSから取得しますが、ここでは定数として定義）
// リサーチ結果に基づく詳細情報をマッピング
const salonDetails: Record<
  string,
  {
    address: string;
    access: string;
    hours: string;
    payment: string;
    mapUrl: string;
    menus: { name: string; price: string; description: string }[];
    reviews: { title: string; content: string; rating: number }[];
    usp: { title: string; description: string }[];
  }
> = {
  'beautystyle': {
    address: '愛知県名古屋市中村区名駅X-X-X',
    access: 'JR名古屋駅 桜通口より徒歩4分 / 地下鉄東山線 名古屋駅より徒歩4分',
    hours: '10:00 - 19:00 (不定休)',
    payment: '現金 / クレジットカード / PayPay',
    mapUrl: 'https://www.google.com/maps/embed?pb=...', // ダミー
    menus: [
      { name: '16タイプパーソナルカラー診断', price: '¥11,800', description: '一番人気の基本コース。4シーズン診断後に16タイプまで詳しく分析します。' },
      { name: 'ビューティースタイルコース', price: '¥22,800', description: '16タイプカラー診断＋骨格診断のセット。90分で似合う色と服の形が分かります。' },
      { name: 'トータル診断（顔タイプ含む）', price: '¥32,800', description: 'カラー・骨格・顔タイプの全てを網羅した150分のフルコース。' }
    ],
    reviews: [
      { title: 'とにかく安くて満足', content: '学生なので安さを重視しました。安いけど説明は丁寧で、友達と二人で楽しく受けられました。', rating: 5 },
      { title: 'スタッフさんが話しやすい', content: '緊張して行きましたが、同世代くらいのスタッフさんで美容室感覚で相談できました。', rating: 4 }
    ],
    usp: [
      { title: '名古屋エリア最安値級', description: '16タイプ診断が1万円台前半。学生や20代でも通いやすい価格設定です。' },
      { title: '友達・カップルOK', description: 'ペア割引あり。広めの診断スペースで二人同時に診断可能です。' }
    ]
  },
  'etincelle': {
    address: '愛知県尾張旭市 (詳細な住所は予約確定時に案内)',
    access: '名鉄瀬戸線「旭前駅」より徒歩10分 (駐車場あり)',
    hours: '10:00 - 18:00',
    payment: '現金 / 銀行振込',
    mapUrl: 'https://www.google.com/maps/embed?pb=...',
    menus: [
      { name: '16タイプパーソナルカラー診断®', price: '¥20,000', description: '新規様向け。コスメお試し30分付きで、似合うメイクまでしっかり分かります。' },
      { name: 'ウェディングトータル診断コース', price: '¥50,000', description: 'ドレスの形・素材・色・ブーケ・小物まで、結婚式に特化した完全プロデュース。' },
      { name: '7タイプ骨格診断®', price: '¥15,000', description: '愛知県では珍しい「7タイプ」分類。3タイプでしっくりこなかった方に最適。' }
    ],
    reviews: [
      { title: 'プレ花嫁におすすめ', content: 'ドレス選びに迷って駆け込みました。会場の雰囲気やブーケまで提案してくれて、自信を持って準備できます！', rating: 5 },
      { title: 'コスメが試し放題', content: '診断後にデパコスをたくさん試せる時間が幸せでした。そのままデパートに買いに行きました。', rating: 5 }
    ],
    usp: [
      { title: '希少な「7タイプ骨格診断」', description: '一般的な3タイプ骨格診断よりも詳細な分析で、スタイルの悩みを根本解決します。' },
      { title: 'ウェディング特化プラン', description: '一生に一度の日のために、ドレスから小物までトータルコーディネートを提案します。' }
    ]
  },
  'amulet': {
    address: '愛知県名古屋市中村区 (名古屋駅・国際センター駅近く)',
    access: '国際センター駅 徒歩6分 / 名古屋駅 徒歩10分',
    hours: '10:00 - 20:00',
    payment: '現金 / カード',
    mapUrl: 'https://www.google.com/maps/embed?pb=...',
    menus: [
      { name: '16タイプパーソナルカラー診断', price: '¥13,000', description: '基本のカラー診断コース。ベストカラー選定を含みます。' },
      { name: 'トータルメイクコース (人気No.1)', price: '¥33,000', description: 'トータル診断に加え、自己肯定感を高めるフルメイクレッスン付き。約4.5時間。' },
      { name: 'プレミアムコース', price: '¥42,000', description: 'スキンケアから見直す、自分磨きの最上級プラン。' }
    ],
    reviews: [
      { title: '自己肯定感が上がった', content: 'コンプレックスだった部分をチャームポイントに変えるメイクを教えてもらえました。', rating: 5 },
      { title: 'メイクレッスンがすごい', content: 'ただ診断するだけでなく、明日から自分でできるメイクを教えてくれるのが良かったです。', rating: 5 }
    ],
    usp: [
      { title: '「ときめき」を重視', description: 'スペック診断だけでなく、あなたの「なりたい姿」と「自己肯定感」を大切にするカウンセリング。' },
      { title: '実践的メイクレッスン', description: 'ゲートタワーや高島屋ですぐ買えるデパコスを使った、再現性の高いメイク提案。' }
    ]
  },
  'day-color-lab': {
    address: '愛知県名古屋市中区伊勢山1-3-1 岡文ビル6F',
    access: '金山総合駅・東別院駅 徒歩圏内',
    hours: '土・日・月のみ営業 10:00 - 20:00',
    payment: '現金のみ',
    mapUrl: 'https://www.google.com/maps/embed?pb=...',
    menus: [
      { name: '120色ドレープ診断', price: '¥5,000', description: '驚異の価格破壊。120色のドレープを使って丁寧に診断します。' },
      { name: 'パーソナルウィッグカラー診断', price: '+¥2,500', description: 'コスプレ用ウィッグメーカーの色見本を使い、キャラに合う色を特定します。' },
      { name: 'あなただけの色見本スウォッチ', price: '+¥2,500', description: '診断結果に基づいた布製の色見本帳を作成・後日郵送。' }
    ],
    reviews: [
      { title: 'オタクに優しい！', content: '推しの概念コーデやコスプレのウィッグ相談に乗ってもらえて最高でした。店長さんも話しやすい。', rating: 5 },
      { title: '安すぎて心配だったけど...', content: '5000円だから簡易的かと思いきや、1時間以上かけてしっかり見てくれました。コスパ最強です。', rating: 5 }
    ],
    usp: [
      { title: '驚異の5,000円', description: '広告費を削り、ワンオペで運営することで実現した名古屋最安値クラスの価格設定。' },
      { title: 'オタク・レイヤー特化', description: 'ウィッグカラー診断や推し活相談など、他店にはないニッチな需要に応えます。' }
    ]
  },
  'vanness': {
    address: '愛知県名古屋市中村区椿町 (名古屋駅新幹線口すぐ)',
    access: '名古屋駅 新幹線口（太閤通口）より徒歩1分',
    hours: '10:00 - 20:00',
    payment: '現金 / カード',
    mapUrl: 'https://www.google.com/maps/embed?pb=...',
    menus: [
      { name: '12タイプパーソナルカラー診断', price: '¥9,900', description: '1万円以下で受けられる詳細診断。効率よく結果を知りたい方に。' },
      { name: 'ペア診断', price: '¥19,800 (2名分)', description: '友達やカップルで。一人当たり9,900円で診断可能です。' }
    ],
    reviews: [
      { title: 'アクセス最高', content: '新幹線の口からすぐなので、買い物のついでに行けました。サクッと終わって助かります。', rating: 4 },
      { title: 'コスパが良い', content: '4タイプより詳しい12タイプがこの値段なのは嬉しい。', rating: 4 }, 
    ],
    usp: [
      { title: '名駅徒歩1分の好立地', description: '雨の日でもほぼ濡れずに行けるアクセス。買い物ついでや仕事帰りに最適。' },
      { title: '高効率・低価格', description: '無駄を省いたオペレーションで、詳細診断をリーズナブルに提供。' }
    ]
  }
};

// 1. 静的パスの生成 (SSG)
export async function generateStaticParams() {
  return salons.map((salon) => ({
    salonId: salon.id,
  }));
}

// 2. メタデータの生成 (Dynamic SEO)
type PageProps = {
  params: Promise<{ salonId: string }>;
};

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { salonId } = await params;
  const salon = salons.find((s) => s.id === salonId);
  const detail = salonDetails[salonId];

  if (!salon || !detail) return { title: 'サロンが見つかりません' };

  const firstMenuPrice = detail.menus[0]?.price ?? '料金';
  const recommend = salon.recommendFor?.join('・') ?? '幅広い方';

  return {
    title: `${salon.name} 名古屋の口コミ・料金・予約【パーソナルカラー診断】`,
    description: `名古屋エリアにある「${salon.name}」のパーソナルカラー診断を徹底解説。${firstMenuPrice}からの料金プラン、16タイプ診断の有無、予約方法、実際の口コミ評判をまとめました。${recommend}におすすめ。`,
    openGraph: {
      title: `${salon.name} | 名古屋のパーソナルカラー診断口コミ・予約`,
      description: `${salon.name}の特徴、料金、アクセス情報を詳しく解説。失敗しないサロン選びのために。`,
      images: [salon.image ?? '/og-salon.png'],
    },
  };
}

export default async function SalonDetailPage({ params }: PageProps) {
  const { salonId } = await params;
  const salon = salons.find((s) => s.id === salonId);
  const detail = salonDetails[salonId];

  if (!salon || !detail) {
    notFound();
  }

  // 3. 構造化データの生成 (JSON-LD)
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BeautySalon',
    name: salon.name,
    image: salon.image ? `https://yourdomain.com${salon.image}` : undefined,
    '@id': `https://yourdomain.com/nagoya-personal-color/${salon.id}`,
    url: `https://yourdomain.com/nagoya-personal-color/${salon.id}`,
    telephone: '052-000-0000', // データがあれば入れる
    address: {
      '@type': 'PostalAddress',
      streetAddress: detail.address,
      addressLocality: 'Nagoya',
      addressRegion: 'Aichi',
      addressCountry: 'JP',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 35.1709, // 本来は詳細な緯度経度
      longitude: 136.8815,
    },
    openingHoursSpecification: {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
      opens: '10:00',
      closes: '20:00',
    },
    priceRange: salon.price ? `¥${salon.price}` : undefined,
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.8', // 仮のスコア
      reviewCount: '120',
    },
  };

  return (
    <div className="bg-slate-50 pb-20">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* ヒーローセクション */}
      <div className="relative bg-white pb-8 pt-6 shadow-sm">
        <div className="mx-auto max-w-3xl px-4">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-rose-50 px-3 py-1 text-xs font-bold text-rose-600">
            <span className="flex h-5 w-5 items-center justify-center rounded-full bg-rose-600 text-[10px] text-white">
              {salon.rank}
            </span>
            名古屋おすすめランキング {salon.rank}位
          </div>
          <h1 className="mb-4 text-2xl font-extrabold text-slate-900 sm:text-3xl md:text-4xl">
            {salon.name}
          </h1>
          <div className="flex flex-wrap gap-2 text-sm text-slate-600">
            <span className="flex items-center gap-1">
              <MapPin className="h-4 w-4 text-rose-500" />
              {salon.area}
            </span>
            <span className="flex items-center gap-1">
              <Sparkles className="h-4 w-4 text-rose-500" />
              {salon.type}
            </span>
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-3xl px-4 py-8">
        
        {/* メイン画像・キャッチコピー */}
        <div className="mb-10 overflow-hidden rounded-2xl bg-white shadow-sm ring-1 ring-slate-100">
           {/* 本番ではNext/Image */}
          <div className="aspect-video w-full bg-slate-200 flex items-center justify-center text-slate-400">
             {salon.name} Main Image
          </div>
          <div className="p-6">
            <p className="text-lg font-bold leading-relaxed text-slate-800">
              {salon.description}
            </p>
            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              {detail.usp.map((point, i) => (
                <div key={i} className="rounded-xl bg-rose-50 p-4">
                  <h3 className="mb-2 flex items-center gap-2 font-bold text-rose-700">
                    <CheckCircle2 className="h-5 w-5" />
                    {point.title}
                  </h3>
                  <p className="text-sm text-slate-700">{point.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* メニュー・料金表 */}
        <section className="mb-10 rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-100">
          <h2 className="mb-6 flex items-center gap-2 text-xl font-bold text-slate-900">
            <CreditCard className="h-6 w-6 text-rose-500" />
            メニュー・料金
          </h2>
          <div className="space-y-4">
            {detail.menus.map((menu, idx) => (
              <div key={idx} className="flex flex-col justify-between border-b border-slate-100 pb-4 last:border-0 last:pb-0 sm:flex-row sm:items-start sm:gap-4">
                <div className="flex-1">
                  <h3 className="font-bold text-slate-900">{menu.name}</h3>
                  <p className="mt-1 text-sm text-slate-600">{menu.description}</p>
                </div>
                <div className="mt-2 shrink-0 text-right sm:mt-0">
                  <p className="text-lg font-bold text-rose-600">{menu.price}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-6 rounded-lg bg-slate-50 p-3 text-xs text-slate-500">
             <p>支払い方法: {detail.payment}</p>
          </div>
        </section>

        {/* 口コミ・評判 */}
        <section className="mb-10 rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-100">
          <h2 className="mb-6 flex items-center gap-2 text-xl font-bold text-slate-900">
            <Sparkles className="h-6 w-6 text-rose-500" />
            口コミ・評判
          </h2>
          <div className="grid gap-4 sm:grid-cols-2">
            {detail.reviews.map((review, idx) => (
              <div key={idx} className="rounded-xl border border-slate-100 bg-slate-50/50 p-4">
                <div className="mb-2 flex items-center gap-1 text-yellow-500">
                  {[...Array(review.rating)].map((_, i) => (
                    <span key={i}>★</span>
                  ))}
                </div>
                <h3 className="mb-2 font-bold text-slate-800">{review.title}</h3>
                <p className="text-sm leading-relaxed text-slate-600">
                  {review.content}
                </p>
              </div>
            ))}
          </div>
          <div className="mt-4 text-center">
            <a href={salon.link} target="_blank" rel="nofollow" className="text-sm text-blue-600 underline">
              もっと口コミを見る（公式サイト/予約サイト）
            </a>
          </div>
        </section>

        {/* 店舗情報・アクセス */}
        <section className="mb-10 rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-100">
          <h2 className="mb-6 flex items-center gap-2 text-xl font-bold text-slate-900">
            <MapPin className="h-6 w-6 text-rose-500" />
            アクセス・店舗情報
          </h2>
          <div className="space-y-4 text-sm">
            <div className="flex items-start gap-3">
              <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-slate-400" />
              <div>
                <p className="font-bold text-slate-900">住所</p>
                <p className="text-slate-600">{detail.address}</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <ArrowRight className="mt-0.5 h-5 w-5 shrink-0 text-slate-400" />
              <div>
                <p className="font-bold text-slate-900">アクセス</p>
                <p className="text-slate-600">{detail.access}</p>
              </div>
            </div>
             <div className="flex items-start gap-3">
              <Clock className="mt-0.5 h-5 w-5 shrink-0 text-slate-400" />
              <div>
                <p className="font-bold text-slate-900">営業時間</p>
                <p className="text-slate-600">{detail.hours}</p>
              </div>
            </div>
          </div>
          {/* Google Maps Embed Placeholder */}
          <div className="mt-6 aspect-video w-full overflow-hidden rounded-xl bg-slate-100">
            <iframe 
              src={detail.mapUrl} 
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </section>

        {/* コンバージョンエリア */}
        <div className="rounded-2xl bg-gradient-to-br from-rose-500 to-pink-600 p-8 text-center text-white shadow-lg">
          <h2 className="mb-4 text-2xl font-bold">
            {salon.name}で<br />
            「似合う」を見つけよう
          </h2>
          <p className="mb-8 text-rose-100">
            人気のサロンは数ヶ月先まで埋まることもあります。<br />
            まずは空き状況をチェックしてみましょう。
          </p>
          <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
            <a
              href={salon.link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-full bg-white px-8 py-4 font-bold text-rose-600 shadow-md transition hover:bg-rose-50"
            >
              <CalendarCheck className="mr-2 h-5 w-5" />
              公式サイトで予約する
            </a>
            {/* ホットペッパー等がある場合 */}
             <a
              href={salon.link}
              target="_blank"
              rel="nofollow noreferrer"
              className="inline-flex items-center justify-center rounded-full border-2 border-white bg-transparent px-8 py-4 font-bold text-white transition hover:bg-white/10"
            >
              クーポンを見る
            </a>
          </div>
        </div>

        <div className="mt-8 text-center">
          <Link href="/blog/nagoya/personal-color" className="text-sm font-medium text-slate-500 hover:text-rose-600">
            ← 名古屋のサロンランキング一覧に戻る
          </Link>
        </div>

      </div>
    </div>
  );
}
