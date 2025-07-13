'use client';

export default function PricingPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold mb-8">料金プラン</h1>
      {/* キャンペーン告知 */}
      <div className="mb-8 p-4 bg-yellow-100 text-yellow-900 border-l-4 border-yellow-500 rounded">
        🎉 <strong>事業開始キャンペーン</strong> 実施中！<br />
        今だけ先着10社様に限り、<strong>初回制作費無料</strong>でご提供いたします。
      </div>
      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-4">制作プラン（コーポレートサイト）</h2>
        <p className="mb-2">制作費用は個別見積もりとなりますが、以下の条件でのご対応となります。</p>
        <ul className="list-disc list-inside space-y-2 text-gray-800 dark:text-gray-200">
          <li>初回ヒアリングおよび打ち合わせは <strong>4回まで無料</strong> です。</li>
          <li>4回の打ち合わせでWEBサイトの仕様が決まった場合、WEB制作費は無料です。</li>
          <li className="list-item [text-indent:-1em] [padding-left:1em]">
            コストカットのためWEBサイトの仕様書の作成等は行いません。<br />
            &nbsp;打ち合わせ時に打ち合わせの内容を記録し、これをWEBサイトの仕様とします。
          </li>
          <li>5回目以降の打ち合わせは <strong>1時間あたり5,000円（税込）</strong> を頂戴します。</li>
          <li>サイトの規模や機能により、制作費用は変動します。</li>
        </ul>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-4">月額保守プラン</h2>
        <ul className="list-disc list-inside space-y-2 text-gray-800 dark:text-gray-200">
          <li>月額 <strong>10,000円（税込）〜</strong></li>
          <li>軽微な修正対応・コンテンツ更新を含みます。</li>
        </ul>
      </section>

      <div className="text-sm text-gray-500 mt-8">
        ※詳細な料金はお問い合わせ時にご案内いたします。<br />
        ※表示価格はすべて税込です。<br />
        ※掲載内容は予告なく変更される場合があります。<br />
        ※トラブルや損害について当方は一切の責任を負いかねます。<br />
        詳しくは<a href="/terms" className="text-blue-500 underline">ご利用規約</a>をご確認ください。
      </div>
    </div>
  );
}
