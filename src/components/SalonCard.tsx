import type { Salon } from '@/app/types/salon';
import { Banknote, Check, MapPin } from 'lucide-react';

export default function SalonCard({ salon }: { salon: Salon }) {
  return (
    <div id={salon.id} className="scroll-mt-24 overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-lg ring-1 ring-gray-100">
      {/* ヘッダー部分 */}
      <div className="relative bg-gradient-to-r from-rose-50 to-white px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <span className="flex h-8 w-8 items-center justify-center rounded-full bg-rose-600 font-bold text-white shadow-md">
              {salon.rank}
            </span>
            <h3 className="text-lg font-bold text-gray-900 md:text-xl">
              {salon.name}
            </h3>
          </div>
          {salon.id === 'beautystyle' && (
            <span className="hidden rounded-full bg-yellow-400 px-3 py-1 text-xs font-bold text-yellow-900 md:inline-block">
              コスパNo.1
            </span>
          )}
        </div>
      </div>

      <div className="p-6">
        {/* 画像エリア（本番ではNext/Imageを使用） */}
        <div className="mb-6 aspect-video w-full overflow-hidden rounded-xl bg-gray-200">
           {/* <Image src={salon.image} alt={salon.name}... /> */}
           <div className="flex h-full w-full items-center justify-center text-gray-400">
             Image Placeholder ({salon.name})
           </div>
        </div>

        {/* 特徴タグ */}
        <div className="mb-4 flex flex-wrap gap-2">
          {salon.features?.map((feature) => (
            <span key={feature} className="rounded-md bg-rose-50 px-2 py-1 text-xs font-medium text-rose-600">
              {feature}
            </span>
          ))}
        </div>

        {/* 説明文 */}
        <p className="mb-6 text-sm leading-relaxed text-gray-600">
          {salon.description}
        </p>

        {/* スペック情報 */}
        <div className="mb-6 space-y-3 rounded-xl bg-gray-50 p-4 text-sm">
          <div className="flex items-start gap-3">
            <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-gray-400" />
            <div>
              <span className="font-bold text-gray-700">エリア:</span> {salon.area}
            </div>
          </div>
          <div className="flex items-start gap-3">
            <Banknote className="mt-0.5 h-4 w-4 shrink-0 text-gray-400" />
            <div>
              <span className="font-bold text-gray-700">料金目安:</span>{' '}
              <span className="font-bold text-rose-600">
                {salon.price ? `¥${salon.price.toLocaleString()}` : '要問合せ'}
                {salon.priceNote && <span className="ml-1 text-xs text-gray-500">{salon.priceNote}</span>}
              </span>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <Check className="mt-0.5 h-4 w-4 shrink-0 text-gray-400" />
            <div>
              <span className="font-bold text-gray-700">こんな人におすすめ:</span>
              <ul className="mt-1 list-inside list-disc text-gray-600">
                {salon.recommendFor?.length ? (
                  salon.recommendFor.map((item) => <li key={item}>{item}</li>)
                ) : (
                  <li>公式サイトで詳細をご確認ください</li>
                )}
              </ul>
            </div>
          </div>
        </div>

        {/* CTAボタン */}
        <div className="flex flex-col gap-3 sm:flex-row">
          <a
            href={salon.link}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 rounded-lg bg-gradient-to-r from-rose-500 to-pink-600 px-6 py-3.5 text-center text-sm font-bold text-white shadow-md transition hover:from-rose-600 hover:to-pink-700"
          >
            公式サイトで予約・空き確認
          </a>
          <a
             href={salon.link} // 実際はホットペッパー等のリンク
             target="_blank"
             rel="nofollow noreferrer"
             className="flex-1 rounded-lg border-2 border-rose-100 bg-white px-6 py-3.5 text-center text-sm font-bold text-rose-600 transition hover:bg-rose-50"
          >
            クーポンをチェック
          </a>
        </div>
      </div>
    </div>
  );
}
