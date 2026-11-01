"use client";

import { useState } from "react";

export type UtilityCost = { month: string; electricity: number; gas: number };

// 電気＝琥珀、ガス＝青（色覚の違いがあっても区別できる組み合わせ）
const SERIES = [
  { key: "electricity", label: "電気代", color: "#d97706" },
  { key: "gas", label: "ガス代", color: "#0284c7" },
] as const;

const MAX = 25000;
const TICKS = [0, 5000, 10000, 15000, 20000, 25000];
const yen = (n: number) => `${n.toLocaleString()}円`;

export default function UtilityCostChart({ data }: { data: UtilityCost[] }) {
  const [active, setActive] = useState<number | null>(null);

  return (
    <figure className="mt-6">
      <figcaption className="flex flex-wrap items-center justify-between gap-3">
        <span className="text-sm font-bold text-slate-900">
          月ごとの光熱費（2026年1〜10月）
        </span>
        <span className="flex gap-4 text-xs text-slate-600">
          {SERIES.map((s) => (
            <span key={s.key} className="flex items-center gap-1.5">
              <span
                aria-hidden="true"
                className="h-2.5 w-2.5 rounded-sm"
                style={{ background: s.color }}
              />
              {s.label}
            </span>
          ))}
        </span>
      </figcaption>

      <div className="relative mt-4 pl-12">
        {/* 目盛り（控えめに） */}
        <div aria-hidden="true" className="absolute left-0 right-0 top-0 h-56">
          {TICKS.map((t) => (
            <div
              key={t}
              className="absolute left-0 right-0 border-t border-slate-200/80"
              style={{ bottom: `${(t / MAX) * 100}%` }}
            >
              <span className="absolute -top-2 left-0 w-10 text-right text-[10px] text-slate-400">
                {t.toLocaleString()}
              </span>
            </div>
          ))}
        </div>

        <div className="relative flex h-56 items-end gap-1 sm:gap-2">
          {data.map((d, i) => {
            const total = d.electricity + d.gas;
            return (
              <button
                key={d.month}
                type="button"
                aria-label={`${d.month} 電気代${yen(d.electricity)} ガス代${yen(d.gas)} 合計${yen(total)}`}
                onMouseEnter={() => setActive(i)}
                onMouseLeave={() => setActive(null)}
                onFocus={() => setActive(i)}
                onBlur={() => setActive(null)}
                onClick={() => setActive(active === i ? null : i)}
                // 当たり判定は棒より広く取る
                className="group relative flex h-full flex-1 cursor-pointer flex-col items-center justify-end outline-none"
              >
                <span
                  className="flex w-3 flex-col justify-end gap-[2px] transition-opacity sm:w-4"
                  style={{
                    height: `${(total / MAX) * 100}%`,
                    opacity: active === null || active === i ? 1 : 0.45,
                  }}
                >
                  <span
                    className="w-full rounded-t-[4px]"
                    style={{
                      height: `${(d.gas / total) * 100}%`,
                      background: SERIES[1].color,
                      minHeight: 3,
                    }}
                  />
                  <span
                    className="w-full flex-1"
                    style={{ background: SERIES[0].color }}
                  />
                </span>

                {active === i && (
                  <span
                    role="tooltip"
                    className={`pointer-events-none absolute bottom-full z-10 mb-2 w-max rounded-xl bg-slate-900 px-3 py-2 text-left text-xs leading-5 text-white shadow-lg ${
                      i > data.length - 3 ? "right-0" : i < 2 ? "left-0" : "left-1/2 -translate-x-1/2"
                    }`}
                  >
                    <span className="block font-bold">{d.month}</span>
                    <span className="block">電気代 {yen(d.electricity)}</span>
                    <span className="block">ガス代 {yen(d.gas)}</span>
                    <span className="mt-1 block border-t border-white/20 pt-1 font-bold">
                      合計 {yen(total)}
                    </span>
                  </span>
                )}
              </button>
            );
          })}
        </div>

        <div className="mt-2 flex gap-1 sm:gap-2">
          {data.map((d) => (
            <span
              key={d.month}
              className="flex-1 text-center text-[10px] text-slate-500 sm:text-xs"
            >
              {d.month}
            </span>
          ))}
        </div>
      </div>

      <details className="mt-5 text-sm text-slate-700">
        <summary className="cursor-pointer font-semibold text-emerald-700">
          数値を表で見る
        </summary>
        <div className="mt-3 overflow-x-auto">
          <table className="w-full min-w-[320px] text-left text-sm">
            <thead className="text-xs text-slate-500">
              <tr>
                <th className="py-2 pr-4 font-semibold">月</th>
                <th className="py-2 pr-4 text-right font-semibold">電気代</th>
                <th className="py-2 pr-4 text-right font-semibold">ガス代</th>
                <th className="py-2 text-right font-semibold">合計</th>
              </tr>
            </thead>
            <tbody>
              {data.map((d) => (
                <tr key={d.month} className="border-t border-slate-100">
                  <td className="py-2 pr-4">{d.month}</td>
                  <td className="py-2 pr-4 text-right tabular-nums">{yen(d.electricity)}</td>
                  <td className="py-2 pr-4 text-right tabular-nums">{yen(d.gas)}</td>
                  <td className="py-2 text-right font-semibold tabular-nums">
                    {yen(d.electricity + d.gas)}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </details>
    </figure>
  );
}
