"use client";

import { AnimatedCircularProgressBar } from "@/components/ui/animated-circular-progress-bar";
import { shipporiAntiqueB1 } from "@/app/ui/fonts";
import { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";

// 資料（P.18）に掲載している reewa-web.jp の Lighthouse 計測結果
const scores = [
  { label: "パフォーマンス", sub: "Performance", value: 93 },
  { label: "アクセシビリティ", sub: "Accessibility", value: 96 },
  { label: "おすすめの設定", sub: "Best Practices", value: 100 },
  { label: "SEO", sub: "SEO", value: 100 },
];

const DURATION = 1600;
const STAGGER = 180;

// 画面に入ったら 0 から目標値まで数え上げる（動きを減らす設定なら即座に最終値）
function useCountUp(target: number, start: boolean, delay: number) {
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (!start) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setValue(target);
      return;
    }
    let frame = 0;
    let begin: number | null = null;
    const tick = (now: number) => {
      begin ??= now + delay;
      const t = Math.min(1, Math.max(0, (now - begin) / DURATION));
      // 終わりにかけてゆっくり止まる
      setValue(Math.round(target * (1 - Math.pow(1 - t, 3))));
      if (t < 1) frame = requestAnimationFrame(tick);
    };
    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [target, start, delay]);

  return value;
}

export default function LighthouseScores() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.4 });

  return (
    <div ref={ref}>
      <div className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-1">
        <p className="text-sm font-bold">
          Google Lighthouse の計測スコア
          <span className="ml-2 font-normal text-[#6b6f78]">reewa-web.jp</span>
        </p>
        <p className="text-xs text-[#6b6f78]">100点満点</p>
      </div>

      <ul className="mt-8 grid grid-cols-2 gap-x-6 gap-y-10 md:grid-cols-4">
        {scores.map((s, i) => (
          <Gauge key={s.sub} {...s} start={inView} delay={i * STAGGER} />
        ))}
      </ul>

      <p className="mt-8 text-xs leading-relaxed text-[#6b6f78]">
        ※Lighthouseは、サイトの速さや使いやすさをGoogleの基準で採点するChromeの機能です。スコアは計測する環境や時期によって多少変わります。
      </p>
    </div>
  );
}

function Gauge({
  label,
  sub,
  value,
  start,
  delay,
}: {
  label: string;
  sub: string;
  value: number;
  start: boolean;
  delay: number;
}) {
  const current = useCountUp(value, start, delay);

  return (
    <li className="flex flex-col items-center text-center">
      <div aria-hidden="true">
        <AnimatedCircularProgressBar
          value={current}
          gaugePrimaryColor="#aaacff"
          gaugeSecondaryColor="rgba(21, 24, 29, 0.15)"
          className={`${shipporiAntiqueB1.className} size-28 text-3xl text-[#15181d] md:size-32 md:text-4xl`}
        />
      </div>
      <p className="mt-4 text-sm font-bold">{label}</p>
      <p className="mt-0.5 text-xs text-[#6b6f78]">{sub}</p>
      {/* 読み上げではアニメ途中の数字ではなく最終スコアを伝える */}
      <span className="sr-only">{`${value}点`}</span>
    </li>
  );
}
