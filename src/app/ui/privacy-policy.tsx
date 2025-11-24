
export default function PrivacyPolicyPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-24">
      <h1 className="text-3xl font-bold mb-6 text-center dark:text-white">個人情報保護方針</h1>

      <div className="max-h-96 overflow-y-scroll p-4 border rounded bg-white text-sm space-y-4 dark:text-gray-800">
        <p>
          当サイト（以下「当社」）では、お客様の個人情報を適切かつ厳格に管理するために、以下のプライバシーポリシーを定め、これに基づいて運営いたします。
        </p>

        <h2 className="font-semibold">1. 個人情報とは</h2>
        <p>
          個人情報とは、氏名、住所、年齢、電話番号、メールアドレス等、お客様個人を識別できる情報、またはお客様個人に固有の情報を指します。
        </p>

        <h2 className="font-semibold">2. 個人情報の収集</h2>
        <p>
          当社は、当ウェブサイトを通じてお客様から個人情報をご提供いただく際には、その利用目的を明示し、必要な範囲においてのみ収集いたします。
          ご提供はお客様のご判断によりますが、提供いただけない場合、一部サービスがご利用いただけないことがあります。
        </p>

        <h2 className="font-semibold">3. 個人情報の利用</h2>
        <p>
          ご提供いただいた個人情報は、明示した利用目的の範囲内で利用します。
          利用目的の変更がある場合は、事前にお知らせし、ご同意をいただきます。
        </p>

        <h2 className="font-semibold">4. 個人情報の第三者提供</h2>
        <p>
          以下の場合を除き、お客様の同意なく第三者に提供することはありません。
        </p>
        <ul className="list-disc pl-5">
          <li>法令に基づく場合</li>
          <li>人の生命・身体・財産の保護が必要な場合で、ご本人の同意を得ることが困難なとき</li>
          <li>公衆衛生の向上に特に必要な場合で、ご本人の同意を得ることが困難なとき</li>
        </ul>

        <h2 className="font-semibold">5. Gmailを用いた送信について</h2>
        <p>
          当サイトのお問い合わせフォームにて送信された内容は、Gmail を通じて送信されます。これにより、Google のプライバシーポリシーに準拠して情報が取り扱われます。
        </p>

        <h2 className="font-semibold">6. 個人情報に関する権利</h2>
        <p>
          お客様は、当社が保有するご自身の個人情報について、開示、訂正、削除、利用停止等を求めることができます。
          修正をご希望の場合は、お問い合わせフォームから再送信することで対応いたします。
        </p>

        <h2 className="font-semibold">7. 法令遵守と継続的な改善</h2>
        <p>
          当社は、関連法令およびその他の規範を遵守し、プライバシーポリシーの継続的な見直しと改善に努めます。
        </p>

        <p className="text-xs text-gray-500 pt-4">
          制定日：2025年7月10日<br />
          お問い合わせ先：naoki.koda1997@gmail.com
        </p>
      </div>
    </div>
  );
}
