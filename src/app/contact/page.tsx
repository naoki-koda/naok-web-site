import { kosugiMaru } from '@/app/ui/fonts';
import Form from '@/app/ui/contact/contact-form';
import PrivacyPolicyContent from '@/app/ui/privacy-policy';



export default function Page() {
  return (
    <div className="flex flex-col justify-center gap-4 p-12">
      <h1 className={`text-4xl text-center ${kosugiMaru.className}}`}>お問い合わせ</h1>
      <p className="text-center">
        お気軽にお問い合わせください。
      </p>
      <section>
        <Form />
      </section>
      {/* <h2 className={`text-2xl text-center ${kosugiMaru.className}}`}>お電話からお問い合わせ</h2>
      <section className="rounded-md bg-gradient-to-r from-orange-400 to-sky-400  text-center mx-auto">
        <div className="text-center p-6">
          <p className="mb-2 text-lg text-white font-semibold">お電話からののお問い合わせはこちら</p>
          <a href="tel:08012345678" className="text-blue-600 text-xl underline hover:text-blue-800">
            080-1234-5678
          </a>
        </div>
      </section> */}
      <PrivacyPolicyContent />
    </div >
  )
}


