'use client'

import { useState } from 'react';
import Link from 'next/link';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import { kosugiMaru } from '@/app/ui/fonts';
import Image from 'next/image';


export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <>
      <header className={`relative sticky top-0 z-50 bg-gradient-to-r from-orange-400 to-sky-400 bg-gray-800 text-white p-4 ${kosugiMaru.className}`}>
        <div className="relative mx-auto flex items-center justify-center px-4">
          <div className="flex items-center space-x-2">
            <Image
              src="/favicon.ico"
              alt="Site Icon"
              width={37}
              height={37}
            />
            <Link href="/" className="text-xl font-bold ">
              NAOK. WEB開発
            </Link>
          </div>
          <div className="absolute right-4">
            <button
              aria-label="メニューを開く"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ?
                (<XMarkIcon className="h-6 w-6 text-white hover:text-gray-300" />)
                :
                (<Bars3Icon className="h-6 w-6 text-white hover:text-gray-300 " />)
              }
            </button>
          </div>
        </div>
      </header>
      {/* オーバーレイ（クリックで閉じる） */}
      {isMenuOpen && (
        <div
          className="fixed inset1 z-10"
          onClick={() => setIsMenuOpen(false)}
        />
      )}
      {
        isMenuOpen && (
          <nav className="fixed top1 right-0 h-full w-64 bg-sky-400/80 shadow-md z-20 pt-16 p-4">
            <ul className="flex flex-col p-3 space-y-2">
              <li>
                <Link
                  href="/"
                  className="text-white block hover:text-gray-300 text-center mb-4"
                  onClick={() => setIsMenuOpen(false)}>
                  <span className="block text-base">Top</span>
                  <div className="border-t border-white mx-auto my0"></div>
                  <span className="block text-sm">トップページ</span>
                </Link>
              </li>
              <li>
                <Link
                  href="/works"
                  className="text-white block hover:text-gray-300 text-center mb-4"
                  onClick={() => setIsMenuOpen(false)}>
                  <span className="block text-base">WORKS</span>
                  <div className="border-t border-white mx-auto my0"></div>
                  <span className="block text-sm">制作事例</span>
                </Link>
              </li>
              <li>
                <Link
                  href="/price"
                  className="text-white block hover:text-gray-300 text-center mb-4"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <span className="block text-base">PRICE</span>
                  <div className="border-t border-white mx-auto my0"></div>
                  <span className="block text-sm">料金プラン</span>
                </Link>
              </li>

              <li>
                <Link
                  href="/contact"
                  className="text-white block hover:text-gray-300 text-center mb-4"
                  onClick={() => setIsMenuOpen(false)}>
                  <span className="block text-base">CONTACT</span>
                  <div className="border-t border-white mx-auto my0"></div>
                  <span className="block text-sm">お問い合わせ</span>
                </Link>
              </li>

            </ul>
          </nav>
        )
      }
    </>
  );

}
