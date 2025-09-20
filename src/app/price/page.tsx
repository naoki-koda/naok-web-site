'use client';
import InitPricingCard from '@/app/ui/InitPriceCard';
import PricingCard from '@/app/ui/priceCard';
import { kosugiMaru } from '@/app/ui/fonts';

export default function PricingPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <h1 className={`text-4xl text-center mb-8 ${kosugiMaru.className}`}>料金プラン</h1>
      {/* キャンペーン告知 */}
      <section className="mb-10">
        <h2 className="text-2xl font-semibold text-center mb-4">初期費用(WEBサイトの制作費用)</h2>
        <div className="flex justify-center">
          <InitPricingCard
            className="w-full"
            title="WEBサイト制作費用"
            subtitle="事業開始キャンペーン!"
            originalPrice=""
            currentPrice="無料"
            period=""
            yearlyTotal="￥108,000"
            note="">
          </InitPricingCard>
        </ div>
        <p className="mb-2 p-4">制作費用は個別見積もりとなりますが、以下の条件でのご対応となります。</p>
        <ul className="list-disc list-inside space-y-2 text-gray-800 dark:text-gray-200">
          <li>初回ヒアリングおよび打ち合わせは <strong>4回まで無料</strong> です。</li>
          <li>4回の打ち合わせでWEBサイトの仕様が決まった場合、WEB制作費は無料です。</li>
          <li className="list-item [text-indent:-1em] [padding-left:1em]">
            打ち合わせ内容を記録し、これをWEBサイトの仕様とします。
          </li>
          <li>5回目以降の打ち合わせは <strong>1時間あたり5,000円（税込）</strong> を頂戴します。</li>
          <li>サイトの規模や機能により、制作費用は変動します。</li>
        </ul>
      </section>

      <h2 className="text-2xl font-semibold mb-4 text-center item-center">
        月額費用(ドメイン、サーバ、運用保守費用)
      </h2>
      <div className="flex flex-xol md:flex-row gap-6 item-center">
        <PricingCard
          title="月間契約プラン"
          subtitle="数ヶ月の運用、お試しされたい方向け"
          originalPrice="年間 ￥120,000"
          currentPrice="￥10,000"
          period="月額(税込)"
          yearlyTotal="￥108,000"
          note="軽微な修正、サーバー、ドメインの運用費用を含みます。">
        </PricingCard>
        <PricingCard
          title="年間契約プラン"
          subtitle="年間のコストを抑えたい方向け"
          originalPrice="年間 ￥99,600"
          currentPrice="￥8,300"
          period="月額(税込)"
          yearlyTotal="￥108,000"
          note="軽微な修正、サーバー、ドメインの運用費用を含みます。">
        </PricingCard>
      </div>

      <div className="text-sm text-gray-500 mt-8">
        ※詳細な料金はお問い合わせ時にご案内いたします。<br />
        ※表示価格はすべて税込です。<br />
        ※掲載内容は予告なく変更される場合があります。<br />
        ※トラブルや損害について当方は一切の責任を負いかねます。<br />
        詳しくは<a href="/termsOfService" className="text-blue-500 underline">ご利用規約</a>をご確認ください。
      </div>
    </div>
  );
}
