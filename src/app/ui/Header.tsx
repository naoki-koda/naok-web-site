'use client'

import { kosugiMaru } from '@/app/ui/fonts';
import { Bars3Icon, CurrencyDollarIcon, EnvelopeIcon, HomeIcon, PencilSquareIcon, PhotoIcon, XMarkIcon } from '@heroicons/react/24/outline';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';


export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <>
      <header className={`shadow-md relative sticky top-0 z-50 bg-gradient-to-r from-orange-400 to-sky-400 text-white p-4 ${kosugiMaru.className}`}>
        <div className="relative mx-auto flex items-center justify-center px-4">
          <div className="flex items-center space-x-2">
            <Image
              src="/favicon.ico"
              alt="Site Icon"
              width={37}
              height={37}
            />
            <Link href="/" className="text-xl font-bold text-slate-900">
              nao.k WEB開発
            </Link>
          </div>
          <div className="absolute right-4">
            <button
              aria-label="メニューを開く"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ?
                (<XMarkIcon className="h-6 w-6 text-slate-900 hover:text-slate-900/80" />)
                :
                (<Bars3Icon className="h-6 w-6 text-slate-900 hover:text-slate-900/80 " />)
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
          <nav className="fixed top1 right-0 h-full w-94 overflow-y-auto bg-gradient-to-b from-orange-400 to-sky-400 shadow-md z-50 pt-16 p-4 item-center text-slate-900">
            <ul className="flex flex-col p-3 space-y-2 pb-10">
              <li>
                <Link
                  href="/"
                  className="group block rounded-2xl border border-white/20 bg-white/15 px-6 py-4 text-slate-900 transition hover:border-white/40 hover:bg-white/25 hover:text-white/85 mb-4"
                  onClick={() => setIsMenuOpen(false)}>
                  <div className="flex flex-col items-center gap-2 text-center">
                    <span className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-white/70 text-slate-900 shadow-sm shadow-orange-200/40 transition group-hover:bg-white group-hover:text-orange-500">
                      <HomeIcon className="h-6 w-6" />
                    </span>
                    <div className="space-y-1">
                      <span className="block text-base font-semibold">Top</span>
                      <div className="mx-auto h-px w-12 bg-gradient-to-r from-orange-400 to-sky-400" />
                      <span className="block text-xs tracking-wide text-slate-800 group-hover:text-white/90">
                        トップページ
                      </span>
                    </div>
                  </div>
                </Link>
              </li>
              <li>
                <Link
                  href="/works"
                  className="group block rounded-2xl border border-white/20 bg-white/15 px-6 py-4 text-slate-900 transition hover:border-white/40 hover:bg-white/25 hover:text-white/85 mb-4"
                  onClick={() => setIsMenuOpen(false)}>
                  <div className="flex flex-col items-center gap-2 text-center">
                    <span className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-white/70 text-slate-900 shadow-sm shadow-orange-200/40 transition group-hover:bg-white group-hover:text-orange-500">
                      <PhotoIcon className="h-6 w-6" />
                    </span>
                    <div className="space-y-1">
                      <span className="block text-base font-semibold">WORKS</span>
                      <div className="mx-auto h-px w-12 bg-gradient-to-r from-orange-400 to-sky-400" />
                      <span className="block text-xs tracking-wide text-slate-800 group-hover:text-white/90">
                        制作事例
                      </span>
                    </div>
                  </div>

                </Link>
              </li>
              <li>
                <Link
                  href="/design"
                  className="group block rounded-2xl border border-white/20 bg-white/15 px-6 py-4 text-slate-900 transition hover:border-white/40 hover:bg-white/25 hover:text-white/85 mb-4"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {/* アイコン + テキスト */}
                  <div className="flex flex-col items-center gap-2 text-center">
                    <span className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-white/70 text-slate-900 shadow-sm shadow-orange-200/40 transition group-hover:bg-white group-hover:text-orange-500">
                      <PencilSquareIcon className="h-6 w-6" />
                    </span>
                    <div className="space-y-1">
                      <span className="block text-base font-semibold">DESIGN</span>
                      <div className="mx-auto h-px w-12 bg-gradient-to-r from-orange-400 to-sky-400" />
                      <span className="block text-xs tracking-wide text-slate-800 group-hover:text-white/90">
                        デザイン
                      </span>
                    </div>
                  </div>
                </Link>
              </li>
              <li>
                <Link
                  href="/price"
                  className="group block rounded-2xl border border-white/20 bg-white/15 px-6 py-4 text-slate-900 transition hover:border-white/40 hover:bg-white/25 hover:text-white/85 mb-4"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <div className="flex flex-col items-center gap-2 text-center">
                    <span className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-white/70 text-slate-900 shadow-sm shadow-orange-200/40 transition group-hover:bg-white group-hover:text-orange-500">
                      <CurrencyDollarIcon className="h-6 w-6" />
                    </span>
                    <div className="space-y-1">
                      <span className="block text-base font-semibold">PRICE</span>
                      <div className="mx-auto h-px w-12 bg-gradient-to-r from-orange-400 to-sky-400" />
                      <span className="block text-xs tracking-wide text-slate-800 group-hover:text-white/90">
                        料金プラン
                      </span>
                    </div>
                  </div>
                </Link>
              </li>

              <li>
                <Link
                  href="/contact"
                  className="group block rounded-2xl border border-white/20 bg-white/15 px-6 py-4 text-slate-900 transition hover:border-white/40 hover:bg-white/25 hover:text-white/85 mb-4"
                  onClick={() => setIsMenuOpen(false)}>
                  <div className="flex flex-col items-center gap-2 text-center">
                    <span className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-white/70 text-slate-900 shadow-sm shadow-orange-200/40 transition group-hover:bg-white group-hover:text-orange-500">
                      <EnvelopeIcon className="h-6 w-6" />
                    </span>
                    <div className="space-y-1">
                      <span className="block text-base font-semibold">CONTACT</span>
                      <div className="mx-auto h-px w-12 bg-gradient-to-r from-orange-400 to-sky-400" />
                      <span className="block text-xs tracking-wide text-slate-800 group-hover:text-white/90">
                        お問い合わせ
                      </span>
                    </div>
                  </div>
                </Link>
              </li>
            </ul>
          </nav>
        )
      }
    </>
  );

}
