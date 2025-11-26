import { apps } from '@/app/data/app';
import { StarIcon } from '@heroicons/react/24/solid';

export default function ComparisonTable() {
  return (
    <div className="my-8 overflow-hidden rounded-xl border border-gray-200 shadow-sm">
      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200 bg-white text-sm">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-4 py-3 text-left font-bold text-gray-900 whitespace-nowrap">アプリ名</th>
              <th className="px-4 py-3 text-center font-bold text-gray-900 whitespace-nowrap">評価</th>
              <th className="px-4 py-3 text-center font-bold text-gray-900 whitespace-nowrap">おすすめタイプ</th>
              <th className="px-4 py-3 text-center font-bold text-gray-900 whitespace-nowrap">月額換算(年割)</th>
              <th className="px-4 py-3 text-center font-bold text-gray-900 whitespace-nowrap">無料体験</th>
              <th className="px-4 py-3 text-center font-bold text-gray-900 whitespace-nowrap">詳細</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {apps.map((app) => (
              <tr key={app.id} className="hover:bg-gray-50 transition-colors">
                <td className="px-4 py-4 font-medium text-gray-900 whitespace-nowrap">
                  <div className="flex items-center gap-2">
                    {/* Next/Imageの使用を推奨 */}
                    <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center text-xs font-bold text-blue-600">
                      {app.name.charAt(0)}
                    </div>
                    {app.name}
                  </div>
                </td>
                <td className="px-4 py-4 text-center whitespace-nowrap">
                  <div className="flex items-center justify-center gap-1 text-yellow-500 font-bold">
                    <span>{app.rating}</span>
                    <StarIcon className="w-4 h-4" />
                  </div>
                </td>
                <td className="px-4 py-4 text-center whitespace-nowrap">
                  <span className={`px-2 py-1 rounded-full text-xs font-semibold
                    ${app.bestFor === 'Business'? 'bg-blue-100 text-blue-800' : 
                      app.bestFor === 'Pronunciation'? 'bg-purple-100 text-purple-800' : 'bg-green-100 text-green-800'}`}>
                    {app.bestFor}
                  </span>
                </td>
                <td className="px-4 py-4 text-center whitespace-nowrap">
                  <div className="font-bold">¥{app.priceAnnualMonthlyCalc.toLocaleString()}</div>
                  <span className="text-xs text-gray-500">/月</span>
                </td>
                <td className="px-4 py-4 text-center whitespace-nowrap">
                  {app.trialDays > 0? `${app.trialDays}日間` : '無料版あり'}
                </td>
                <td className="px-4 py-4 text-center whitespace-nowrap">
                  <a href={app.affiliateLink} target="_blank" rel="nofollow noreferrer" 
                     className="inline-block bg-blue-600 hover:bg-blue-700 text-white text-xs font-bold py-2 px-4 rounded transition-colors">
                    公式サイト
                  </a>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <p className="p-2 text-right text-xs text-gray-400 bg-gray-50">※料金は2025年11月時点の税込価格（年額プラン月割り計算含む）</p>
    </div>
  );
}