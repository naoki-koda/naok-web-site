export default function TermsOfService() {
  return (
    <main className="max-w-4xl mx-auto p-6 bg-white shadow-md rounded-md my-10">
      <h1 className="text-3xl font-bold mb-6">ご利用規約</h1>

      <p className="mb-6">
        本規約は、nao.k（以下「当方」）が提供するWebサイトの開発、運用、保守サービス（以下「本サービス」）の利用条件を定めるものです。本サービスをご利用される方（以下「利用者」）は、本規約に同意したものとみなします。
      </p>

      <hr className="my-6" />

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-2">第1条（適用範囲）</h2>
        <p>本規約は、利用者が本サービスを利用する際の一切の行為に適用されます。</p>
      </section>

      <hr className="my-6" />

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-2">第2条（サービス内容）</h2>
        <ol className="list-decimal list-inside space-y-1">
          <li>当方は、Webサイトの制作、改修、運用、保守業務を提供します。</li>
          <li>サービス内容や範囲は、契約書または事前の合意によって定めます。</li>
        </ol>
      </section>

      <hr className="my-6" />

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-2">第3条（禁止事項）</h2>
        <p>利用者は、以下の行為をしてはなりません。</p>
        <ol className="list-decimal list-inside space-y-1 mt-2">
          <li>法令または公序良俗に反する行為</li>
          <li>第三者の知的財産権、肖像権、プライバシー権を侵害する行為</li>
          <li>本サービスの運営を妨害する行為</li>
          <li>虚偽の情報を提供する行為</li>
        </ol>
      </section>

      <hr className="my-6" />

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-2">第4条（知的財産権）</h2>
        <ol className="list-decimal list-inside space-y-1">
          <li>本サービスにより制作されたWebサイトの著作権の帰属は、契約内容に基づきます。</li>
          <li>利用者が提供した文章、画像、動画等の素材について、利用者は必要な権利を有し、第三者の権利を侵害しないことを保証するものとします。</li>
        </ol>
      </section>

      <hr className="my-6" />

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-2">第5条（免責事項）</h2>
        <ol className="list-decimal list-inside space-y-1">
          <li>当方は、本サービスの利用に関連して発生した損害について一切の責任を負いません。</li>
          <li>天災、通信障害、サーバトラブル、第三者による不正行為など、当方の責めによらない事由による損害は免責とします。</li>
          <li>納品後の運用・更新に伴う不具合や損害についても、当方は責任を負いません。</li>
        </ol>
      </section>

      <hr className="my-6" />

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-2">第6条（契約の終了）</h2>
        <ol className="list-decimal list-inside space-y-1">
          <li>利用者が本規約に違反した場合、当方は通知なく契約を解除することができます。</li>
          <li>契約終了時点で未払いの料金がある場合、利用者は速やかに支払うものとします。</li>
        </ol>
      </section>

      <hr className="my-6" />

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-2">第7条（規約の変更）</h2>
        <p>
          当方は、必要に応じて本規約を改定できるものとします。改定後の規約は、本サービスのWebサイト上で公表した時点で効力を生じます。
        </p>
      </section>

      <hr className="my-6" />

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-2">第8条（準拠法・管轄）</h2>
        <p>
          本規約は日本法に準拠し、本サービスに関して生じる紛争については、[管轄裁判所]を専属的合意管轄裁判所とします。
        </p>
      </section>

      <hr className="my-6" />

      <footer className="text-sm text-gray-600">
        <p>制定日：2025年9月1日</p>
        <p>nao.k</p>
        <p>愛知県名古屋市西区菊井1-33-23</p>
        <p>naoki.koda1997@gmail.com</p>
      </footer>
    </main>
  );
}
