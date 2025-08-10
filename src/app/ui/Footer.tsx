

import { kosugiMaru } from '@/app/ui/fonts';
import Image from 'next/image'

export default function Footer() {
  return (
    <footer className="bg-white dark:bg-black text-black dark:text-white border-t">
      <div className="max-w-7xl mx-auto px-4 py-6 text-center" >
        <h2 className="mb-2">NAOK WEB DEVELOP</h2>
        <div className="flex items-center justify-center gap-2 mb-3">
          <Image
            src="/favicon.ico"
            alt="Site Icon"
            width={37}
            height={37}
            className="align-middle"
          />
          <p className={`text-lg ${kosugiMaru.className}`}>NAOK. WEB開発</p>
        </div>
        <p className="mb-2 mb-8">愛知県名古屋市を中心としたWEBサイトの開発、運営</p>
        <p>著作権、及びお客様のプライバシー保護のため、サイト内の写真や内容の無断転載等はお断り致します。</p>
        <p>© NAO.K</p>
      </div>
      <div className="w-full mx-auto bg-gradient-to-r from-orange-400 to-sky-400">
        <div className="w-full bg-transparent h-9"></div>
        <div className="flex justify-between items-center">
          <div className="flex-1 h-11 bg-white dark:bg-black"></div>
          <div className="w-24 h-11 bg-transparent"></div>
          <div className="w-100 h-11 bg-white dark:bg-black"></div>
          <div className="w-24 h-11 bg-transparent"></div>
          <div className="flex-1 h-11 bg-white dark:bg-black"></div>
        </div>
        <div className="w-full bg-transparent h-10"></div>
      </div>
    </footer >

  )
}
