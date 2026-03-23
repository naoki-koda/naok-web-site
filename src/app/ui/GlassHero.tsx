"use client";

import { kosugiMaru } from "@/app/ui/fonts";
import { motion, useReducedMotion } from "framer-motion";
import type { Variants } from "framer-motion";
import styles from "./glass-hero.module.css";

type GlassNote = {
  label: string;
  title: string;
  text: string;
};

type GlassHeroProps = {
  tags: string[];
  notes: GlassNote[];
};

export default function GlassHero({ tags, notes }: GlassHeroProps) {
  const prefersReducedMotion = useReducedMotion();

  const fadeUp: Variants = {
    hidden: { opacity: 0, y: prefersReducedMotion ? 0 : 28 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, ease: "easeOut" },
    },
  };

  const staggerGroup: Variants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: prefersReducedMotion ? 0 : 0.12,
        delayChildren: prefersReducedMotion ? 0 : 0.08,
      },
    },
  };

  return (
    <section className={styles.heroSection}>
      <div className={styles.heroBackdrop} />
      <div className={styles.heroGlowA} />
      <div className={styles.heroGlowB} />
      <div className={styles.heroGrid} />
      <div className={styles.heroNoise} />
      <div className="relative mx-auto flex min-h-[620px] max-w-7xl flex-col gap-12 px-4 py-20 md:flex-row md:items-center">
        <motion.div
          className="flex-1 text-center md:text-left"
          initial={false}
          whileInView="visible"
          viewport={{ once: true, amount: 0.35 }}
          variants={staggerGroup}
        >
          <motion.span
            variants={fadeUp}
            className="inline-flex items-center justify-center rounded-full border border-white/30 bg-white/10 px-4 py-1 text-xs font-semibold uppercase tracking-[0.35em] text-sky-100 backdrop-blur-md"
          >
            NAGOYA WEB CREATIVE
          </motion.span>
          <motion.h1
            variants={fadeUp}
            className={`mt-6 text-4xl font-bold leading-tight text-white md:text-5xl lg:text-6xl ${kosugiMaru.className}`}
          >
            名古屋で成果を
            <br className="hidden sm:inline" />
            出す。
            <br />
            ホームページ制作を
            <br className="hidden sm:inline" />
            もっと美しく。
          </motion.h1>
          <motion.p
            variants={fadeUp}
            className="mt-6 max-w-2xl text-base leading-relaxed text-white/88 md:text-lg"
          >
            UXを重視したNext.jsサイトで表示スピードとSEOを両立。PWA対応も見据えた設計で、個人事業主・中小企業の集客やお問い合わせの増加をサポートします。
          </motion.p>
          <motion.div
            variants={staggerGroup}
            className="mt-8 flex flex-wrap justify-center gap-3 md:justify-start"
          >
            {tags.map((tag) => (
              <motion.span key={tag} variants={fadeUp} className={styles.glassTag}>
                {tag}
              </motion.span>
            ))}
          </motion.div>
          <motion.div
            variants={staggerGroup}
            className="mt-10 flex flex-col gap-4 sm:flex-row sm:justify-center md:justify-start"
          >
            <motion.a
              variants={fadeUp}
              href="#contact"
              className="inline-flex items-center justify-center rounded-full border border-white/40 bg-white/70 px-6 py-3 text-sm font-semibold text-slate-900 shadow-lg shadow-orange-300/25 backdrop-blur-md transition hover:brightness-105"
            >
              サービス内容を見る
            </motion.a>
            <motion.a
              variants={fadeUp}
              href="/contact"
              className="inline-flex items-center justify-center rounded-full border border-orange-200/70 bg-orange-400 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-orange-900/20 transition hover:bg-orange-300 hover:border-orange-100"
            >
              無料お見積もり
            </motion.a>
          </motion.div>
        </motion.div>
        <div className="relative flex flex-1 items-center justify-center">
          <motion.div
            className={styles.glassCanvas}
            initial={false}
            whileInView="visible"
            viewport={{ once: true, amount: 0.25 }}
            variants={staggerGroup}
          >
            <motion.article
              variants={fadeUp}
              className={`${styles.glassPanel} ${styles.mainPanel}`}
            >
              <p className={styles.panelLabel}>Performance Focus</p>
              <h2 className="mt-3 text-2xl font-bold text-slate-950 md:text-3xl">
                テキストそのものを、
                <br />
                触感のあるUIにする。
              </h2>
              <p className="mt-4 text-base leading-relaxed text-slate-700 md:text-lg">
                コンテンツをただ並べるのではなく、ガラス越しに覗くような情報設計へ。短い言葉も説明文も、視線の流れに合わせて層として配置します。
              </p>
            </motion.article>
            <motion.div variants={staggerGroup} className={styles.summaryGrid}>
              {notes.map((note) => (
                <motion.article
                  key={note.title}
                  variants={fadeUp}
                  className={`${styles.glassPanel} ${styles.notePanel}`}
                >
                  <p className={styles.panelLabel}>{note.label}</p>
                  <h3 className="mt-2 text-lg font-semibold text-slate-950">
                    {note.title}
                  </h3>
                  <p className="mt-3 text-sm leading-6 text-slate-700">
                    {note.text}
                  </p>
                </motion.article>
              ))}
              <motion.div
                variants={fadeUp}
                className={`${styles.glassPanel} ${styles.metricPanel}`}
              >
                <span className={styles.metricValue}>01</span>
                <p className="text-sm uppercase tracking-[0.3em] text-slate-500">
                  layered reading
                </p>
                <p className="mt-3 text-sm leading-6 text-slate-700">
                  見出し、補足、キーワード、CTA を別の深度で重ねています。
                </p>
              </motion.div>
              <motion.div
                variants={fadeUp}
                className={`${styles.glassPanel} ${styles.ribbonPanel}`}
              >
                <span>透明感</span>
                <span>速度感</span>
                <span>検索導線</span>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
