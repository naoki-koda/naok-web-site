
import { kosugiMaru } from '@/app/ui/fonts';
import Link from 'next/link';


export default function Page() {
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="text-center">
        <div className="text-6xl animate-bounce">🎈</div>
        <h1 className={`text-4xl mb-4 ${kosugiMaru.className}`}>
          メールの送信ありがとうございました。
        </h1>
        <p className="text-2xl font-semibold mb-4">
          ご確認ありがとうございました。
        </p>
        <Link
          href="/"
          className="inline-block rounded-md bg-orange-400 px-6 py-2 text-white hover:bg-blue-700 transition"
        >
          トップページに戻る
        </Link>

      </div>

    </div >
  )
}
