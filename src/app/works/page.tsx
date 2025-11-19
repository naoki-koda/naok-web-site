'use client';

import React from 'react';
import Link from 'next/link';
import { kosugiMaru } from '@/app/ui/fonts';
import { Button } from '@/components/ui/button';
import type { Variants } from 'framer-motion';
import { motion, MotionConfig } from 'framer-motion';
import colors from 'tailwindcss/colors';

const container: Variants = {
  hidden: { opacity: 0, y: 10 },
  show: {
    opacity: 1, y: 0,
    transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1], staggerChildren: 0.08 }
  }
};

const item: Variants = {
  hidden: { opacity: 0, y: 14, filter: 'blur(4px)' },
  show: { opacity: 1, y: 0, filter: 'blur(0px)', transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] } }
};

export default function Page() {
  return (
    <main className="min-h-screen bg-slate-50/60 pb-23 dark:bg-slate-900">
      <section className="relative overflow-hidden rounded-b-[3.5rem] bg-gradient-to-br from-orange-400 to-sky-400 text-white">
        <div className="absolute inset-0 -z-10">
          <div className="absolute inset-0 bg-[repeating-linear-gradient(90deg,rgba(255,255,255,0.12)_0,rgba(255,255,255,0.12)_1px,transparent_1px,transparent_80px)] opacity-70" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.25),transparent_55%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,rgba(255,255,255,0.2),transparent_60%)]" />
          <div className="absolute -top-36 -left-20 h-64 w-64 rounded-full bg-white/15 blur-3xl" />
          <div className="absolute -bottom-48 right-[-20%] h-80 w-80 rounded-full bg-white/10 blur-3xl" />
          <div className="absolute inset-0 bg-slate-900/20" />
        </div>
        <div className="relative mx-auto max-w-5xl px-6 py-16 sm:py-20 md:px-10">
          <div className="mx-auto max-w-3xl space-y-6 rounded-[2.75rem] border border-white/25 bg-white/10 px-8 py-12 text-center shadow-[0_20px_60px_-30px_rgba(15,23,42,0.45)] backdrop-blur-xl">
            <HeroBlock kosugiMaru={kosugiMaru} />
          </div>
        </div>
      </section>
      <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 dark:bg-gray-900 text-center px-4 py-16">
        {/*   <h1 className="text-4xl font-bold text-gray-800 dark:text-white mb-6"> */}
        {/*     制作実績（Works） */}
        {/*   </h1> */}
        {/* <p className="text-lg text-gray-600 dark:text-gray-300 mb-10 max-w-xl leading-relaxed"> */}
        {/*   弊社がこれまでに制作したホームページをご紹介します。<br /> */}
        {/*   デザイン性・操作性・レスポンシブ対応・SEOを考慮した */}
        {/*   <span className="font-semibold">高品質なWebサイト制作</span>を心がけています。 */}
        {/* </p> */}

        <div className="flex flex-col gap-6 w-full max-w-2xl">
          {/* 1つめの実績 */}
          <a
            href="https://www.sodeno-tategu.jp/"
            target="_blank"
            rel="noopener noreferrer"
            className="block rounded-xl bg-white dark:bg-gray-800 shadow-md hover:shadow-lg transition p-6 text-left"
          >
            <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-2">
              そでの建具 様
            </h2>
            <p className="text-gray-600 dark:text-gray-300 text-base mb-3">
              建具製作工房の公式サイト。
              温かみのあるデザインと、施工写真を活かした見やすい構成を重視しました。
            </p>
            <span className="text-orange-500 font-medium">→ Webサイトを見る</span>
          </a>

          {/* 2つめの実績 */}
          <a
            href="https://www.c-ent.jp/"
            target="_blank"
            rel="noopener noreferrer"
            className="block rounded-xl bg-white dark:bg-gray-800 shadow-md hover:shadow-lg transition p-6 text-left"
          >
            <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-2">
              C-ENT 様
            </h2>
            <p className="text-gray-600 dark:text-gray-300 text-base mb-3">
              企業向けサービスのコーポレートサイト。
              落ち着いた配色とブランドイメージを意識した
              プロフェッショナルなデザインに仕上げています。
            </p>
            <span className="text-orange-500 font-medium">→ Webサイトを見る</span>
          </a>
        </div>

        {/* 戻るボタン */}
        <Link
          href="/"
          className="mt-12 inline-block rounded-md bg-gradient-to-r from-orange-400 to-sky-400 px-8 py-3 text-white shadow-md shadow-orange-300/30 transition hover:brightness-105"
        >
          トップページへ戻る
        </Link>
      </div>
    </main >
  );
}

function HeroBlock({ kosugiMaru }: { kosugiMaru: { className: string } }) {
  return (
    <MotionConfig reducedMotion="user">
      <motion.div
        className="space-y-6"
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.6 }}
      >
        {/* ラベル：少しスケール＋グロウ */}
        <motion.span
          variants={item}
          whileHover={{ scale: 1.04, boxShadow: '0 0 32px rgba(255,255,255,0.18)' }}
          className="inline-flex items-center justify-center rounded-full border border-white/40 bg-white/15 px-4 py-1 text-xs font-semibold uppercase tracking-[0.35em] text-white/90 shadow-inner shadow-white/20"
        >
          WORKS
        </motion.span>

        {/* 見出し：スプリングでスッと */}
        <motion.h1
          variants={item}
          transition={{ type: 'spring', stiffness: 220, damping: 24 }}
          className={`text-3xl leading-tight text-white md:text-4xl lg:text-[2.8rem] ${kosugiMaru.className}`}
        >
          制作実績
        </motion.h1>

        {/* 説明文：フェードイン */}
        <motion.p
          variants={item}
          className="text-sm leading-relaxed text-slate-100 md:text-base"
        >
          弊社がこれまでに制作したホームページをご紹介します。<br />
          デザイン性・操作性・レスポンシブ対応・SEOを考慮した
          <span className="font-semibold">高品質なWebサイト制作</span>を心がけています。
        </motion.p>
      </motion.div>
    </MotionConfig>
  );
}
