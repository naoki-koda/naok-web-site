'use client';
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
  show:   { opacity: 1, y: 0,  filter: 'blur(0px)', transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] } }
};
export default function Page() {

  const shadeList = [
    "50",
    "100",
    "200",
    "300",
    "400",
    "500",
    "600",
    "700",
    "800",
    "900",
    "950"
  ];
  // const colorList :  string[] = [];
  const colorList = Object.keys(colors).filter(
    (colorName) => !['inherit', 'current', 'transparent', 'black', 'white'].includes(colorName)
  );
  // 組み合わせを生成
  const bgClassList = colorList.flatMap((cName) =>
    shadeList.map((shade) => `bg-${cName}-${shade}`)
  );
  return (
    <div className="min-h-screen bg-slate-50/60 pb-24 dark:bg-slate-900">
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
            {/* <div className="space-y-6">
              <span className="inline-flex items-center justify-center rounded-full border border-white/40 bg-white/15 px-4 py-1 text-xs font-semibold uppercase tracking-[0.35em] text-white/90 shadow-inner shadow-white/20">
                DESIGN SYSTEM
              </span>
              <h1
                className={`text-3xl leading-tight text-white md:text-4xl lg:text-[2.8rem] ${kosugiMaru.className}`}
              >
                Tailwind カラーパレットで
                <br className="hidden sm:inline" />
                ボタンデザインを素早く確認
              </h1>
              <p className="text-sm leading-relaxed text-slate-100 md:text-base">
                Tailwind CSS で利用できるカラークラスを一覧表示。
                プロトタイプ作成やブランドカラーの検討に役立つよう、クラス名をそのままラベルにしています。
              </p>
            </div> */}
            <HeroBlock kosugiMaru={kosugiMaru} />
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-6 py-12">
        <div className="flex flex-col items-center gap-3 pb-8 text-center">
          <h2 className={`text-2xl font-semibold text-slate-900 dark:text-white ${kosugiMaru.className}`}>
            ボタンの色一覧
          </h2>
          <p className="text-sm text-slate-600 dark:text-slate-300">
            クリックするとクラス名がコピーされます。配色パターンの比較やデザインガイドライン作成にご活用ください。
          </p>
        </div>
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-4 md:grid-cols-6">
          {bgClassList.map((cName) => {
            const className = ['black', 'white'].includes(cName)
              ? `bg-${cName}`
              : cName;
            return (
              <Button
                key={cName}
                className={`${className} px-5 py-2 text-white hover:scale-[1.02] transition-transform`}
              >
                {cName}
              </Button>
            );
          })}
        </div>
      </section>
    </div>
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
          DESIGN SYSTEM
        </motion.span>

        {/* 見出し：スプリングでスッと */}
        <motion.h1
          variants={item}
          transition={{ type: 'spring', stiffness: 220, damping: 24 }}
          className={`text-3xl leading-tight text-white md:text-4xl lg:text-[2.8rem] ${kosugiMaru.className}`}
        >
          Tailwind カラーパレットで
          <br className="hidden sm:inline" />
          ボタンデザインを素早く確認
        </motion.h1>

        {/* 説明文：フェードイン */}
        <motion.p
          variants={item}
          className="text-sm leading-relaxed text-slate-100 md:text-base"
        >
          Tailwind CSS で利用できるカラークラスを一覧表示。
          プロトタイプ作成やブランドカラーの検討に役立つよう、クラス名をそのままラベルにしています。
        </motion.p>
      </motion.div>
    </MotionConfig>
  );
}
