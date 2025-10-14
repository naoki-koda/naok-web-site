'use client';

import { kosugiMaru } from '@/app/ui/fonts';
import {
  Bars3Icon,
  CurrencyDollarIcon,
  EnvelopeIcon,
  HomeIcon,
  PencilSquareIcon,
  PhotoIcon,
  XMarkIcon,
} from '@heroicons/react/24/outline';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

const NAV_ITEMS = [
  {
    href: '/',
    label: 'Top',
    subLabel: 'トップページ',
    icon: HomeIcon,
  },
  {
    href: '/works',
    label: 'WORKS',
    subLabel: '制作事例',
    icon: PhotoIcon,
  },
  {
    href: '/design',
    label: 'DESIGN',
    subLabel: 'デザイン',
    icon: PencilSquareIcon,
  },
  {
    href: '/price',
    label: 'PRICE',
    subLabel: '料金プラン',
    icon: CurrencyDollarIcon,
  },
  {
    href: '/contact',
    label: 'CONTACT',
    subLabel: 'お問い合わせ',
    icon: EnvelopeIcon,
  },
];

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      <header
        className={`sticky top-0 z-50 h-16 bg-gradient-to-r from-orange-400 to-sky-400 px-4 shadow-md ${kosugiMaru.className}`}
      >
        <div className="mx-auto flex h-full max-w-5xl items-center justify-between">
          <Link href="/" className="flex items-center gap-3 text-slate-900">
            <Image src="/favicon.ico" alt="Site Icon" width={40} height={40} className="rounded-lg" />
            <span className="text-lg font-semibold leading-none">nao.k WEB開発</span>
          </Link>
          <nav className="hidden items-center gap-6 text-sm font-semibold text-slate-900 md:flex">
            {NAV_ITEMS.map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                className="rounded-full bg-white/30 px-4 py-2 transition hover:bg-white/50"
              >
                {label}
              </Link>
            ))}
          </nav>
          <button
            type="button"
            aria-label={isMenuOpen ? 'メニューを閉じる' : 'メニューを開く'}
            aria-expanded={isMenuOpen}
            onClick={() => setIsMenuOpen((prev) => !prev)}
            className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/30 text-slate-900 shadow-sm transition hover:bg-white/50 md:hidden"
          >
            {isMenuOpen ? <XMarkIcon className="h-6 w-6" /> : <Bars3Icon className="h-6 w-6" />}
          </button>
        </div>
      </header>

      {isMenuOpen && (
        <button
          type="button"
          aria-label="メニューを閉じる"
          className="fixed inset-x-0 top-16 bottom-0 z-40 bg-slate-900/30 backdrop-blur-sm md:hidden"
          onClick={() => setIsMenuOpen(false)}
        />
      )}

      {isMenuOpen && (
        <nav
          className={`fixed inset-x-0 top-16 bottom-0 z-50 flex flex-col bg-gradient-to-br from-orange-400 to-sky-400 px-6 pb-12 pt-8 text-slate-900 md:hidden ${kosugiMaru.className}`}
        >
          <div className="mx-auto w-full max-w-sm flex-1 space-y-6 overflow-y-auto">
            <div className="flex items-center justify-between text-white">
            </div>

            <ul className="flex flex-col space-y-4">
              {NAV_ITEMS.map(({ href, label, subLabel, icon: Icon }) => (
                <li key={href}>
                  <Link
                    href={href}
                    onClick={() => setIsMenuOpen(false)}
                    className="group block rounded-3xl border border-white/20 bg-white/15 px-6 py-5 text-center text-slate-900 shadow-[0_20px_40px_-30px_rgba(15,23,42,0.45)] backdrop-blur transition hover:border-white/40 hover:bg-white/25 hover:text-white/90"
                  >
                    <div className="flex flex-col items-center gap-3">
                      <span className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-white/70 text-slate-900 shadow-sm shadow-orange-200/40 transition group-hover:bg-white group-hover:text-orange-500">
                        <Icon className="h-6 w-6" />
                      </span>
                      <div className="space-y-1">
                        <span className="block text-base font-semibold">{label}</span>
                        <div className="mx-auto h-px w-14 bg-gradient-to-r from-orange-400 to-sky-400" />
                        <span className="block text-xs tracking-wide text-slate-700 group-hover:text-white/80">
                          {subLabel}
                        </span>
                      </div>
                    </div>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </nav>
      )}
    </>
  );
}
