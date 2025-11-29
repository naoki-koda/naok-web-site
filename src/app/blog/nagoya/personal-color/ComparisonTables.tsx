import type { Salon } from '@/app/types/salon';
import { Check, ExternalLink, Trophy } from 'lucide-react';

type Props = {
  salons: Salon[];
};

export default function ComparisonTable({ salons }: Props) {
  return (
    <div className="w-full space-y-4">
      {/* スマホユーザーへのスクロール誘導ヒント */}
      <div className="flex items-center justify-end gap-1 text-[10px] text-slate-400 sm:hidden">
        <span>← 横にスクロールできます →</span>
      </div>

      <div className="relative w-full overflow-hidden rounded-xl border border-rose-100 bg-white shadow-sm ring-1 ring-rose-50">
        {/* ヘッダータイトル */}
        <div className="bg-rose-50/80 px-4 py-3 text-center text-sm font-bold text-rose-800">
          失敗しない！名古屋の人気サロン徹底比較
        </div>

        <div className="overflow-x-auto pb-2">
          <table className="min-w-full border-collapse text-sm">
            <thead>
              <tr className="border-b border-rose-100 bg-white">
                {/* 固定列（ランク・サロン名） */}
                <th className="sticky left-0 z-10 min-w-[140px] bg-white px-4 py-4 text-left font-bold text-slate-700 shadow-[2px_0_5px_-2px_rgba(0,0,0,0.05)]">
                  サロン名
                </th>
                <th className="min-w-[120px] whitespace-nowrap px-4 py-4 text-center font-bold text-slate-700">
                  料金目安
                </th>
                <th className="min-w-[140px] whitespace-nowrap px-4 py-4 text-center font-bold text-slate-700">
                  診断タイプ
                </th>
                <th className="min-w-[150px] whitespace-nowrap px-4 py-4 text-center font-bold text-slate-700">
                  こんな人におすすめ
                </th>
                <th className="min-w-[100px] whitespace-nowrap px-4 py-4 text-center font-bold text-slate-700">
                  エリア
                </th>
                <th className="min-w-[100px] whitespace-nowrap px-4 py-4 text-center font-bold text-slate-700">
                  予約
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-rose-50">
              {salons.map((salon, index) => {
                const isFirst = index === 0;
                return (
                  <tr
                    key={salon.id}
                    className={`transition-colors hover:bg-rose-50/30 ${
                      isFirst? 'bg-yellow-50/30' : ''
                    }`}
                  >
                    {/* 固定列：サロン名とランク */}
                    <td className="sticky left-0 z-10 bg-white px-4 py-4 align-top shadow-[2px_0_5px_-2px_rgba(0,0,0,0.05)]">
                      <div className="flex flex-col gap-1">
                        <div className="flex items-center gap-2">
                          <span
                            className={`flex h-5 w-5 items-center justify-center rounded-full text-[10px] font-bold text-white ${
                              isFirst? 'bg-yellow-500' : 'bg-slate-400'
                            }`}
                          >
                            {salon.rank}
                          </span>
                          {isFirst && (
                            <Trophy className="h-3 w-3 text-yellow-500" />
                          )}
                        </div>
                        <span className="font-bold text-slate-800 leading-tight">
                          {salon.name}
                        </span>
                        {/* 1位のみタグを表示 */}
                        {isFirst && (
                          <span className="mt-1 inline-block w-fit rounded bg-yellow-100 px-1.5 py-0.5 text-[10px] font-bold text-yellow-700">
                            コスパNo.1
                          </span>
                        )}
                      </div>
                    </td>

                    {/* 料金 */}
                    <td className="whitespace-nowrap px-4 py-4 text-center align-middle">
                      <div className="flex flex-col items-center">
                        <span className="text-base font-bold text-rose-600">
                          {salon.price ? `¥${salon.price.toLocaleString()}` : '要問合せ'}
                        </span>
                        <span className="text-[10px] text-slate-400">
                          {salon.priceNote ?? '〜'}
                        </span>
                      </div>
                    </td>

                    {/* 診断タイプ */}
                    <td className="px-4 py-4 text-center align-middle">
                      <span className="inline-block whitespace-nowrap rounded-md bg-slate-100 px-2 py-1 text-xs font-medium text-slate-600">
                        {salon.type}
                      </span>
                    </td>

                    {/* おすすめユーザー */}
                    <td className="min-w-[180px] px-4 py-4 align-middle">
                      <ul className="space-y-1">
                        {salon.recommendFor?.map((item) => (
                          <li
                            key={item}
                            className="flex items-center gap-1.5 text-xs text-slate-600"
                          >
                            <Check className="h-3 w-3 shrink-0 text-rose-400" />
                            {item}
                          </li>
                        )) ?? (
                          <li className="text-xs text-slate-500">詳細は公式サイトへ</li>
                        )}
                      </ul>
                    </td>

                    {/* エリア */}
                    <td className="whitespace-nowrap px-4 py-4 text-center align-middle text-xs text-slate-600">
                      {salon.area ?? '-'}
                    </td>

                    {/* CVボタン */}
                    <td className="px-4 py-4 text-center align-middle">
                      <a
                        href={salon.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex flex-col items-center justify-center gap-0.5 rounded-lg bg-white border border-rose-200 px-3 py-2 text-xs font-bold text-rose-600 transition hover:bg-rose-50 hover:text-rose-700 shadow-sm"
                      >
                        <span>詳細</span>
                        <ExternalLink className="h-3 w-3" />
                      </a>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
