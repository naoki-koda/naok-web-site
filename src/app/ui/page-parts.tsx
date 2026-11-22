"use client";

import { CardBadge } from "@/app/ui/cards";
import { shipporiAntiqueB1, zenKaku } from "@/app/ui/fonts";
import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card";
import { cn } from "@/lib/utils";
import Link from "next/link";
import type { ReactNode } from "react";

// 下層ページ共通のパーツ。トップページと同じ「赤い背景＋白いカード」のトーンで組む。

export function PageShell({ children }: { children: ReactNode }) {
  return (
    <main className={`${zenKaku.className} pb-20 text-[#15181d]`}>
      {children}
    </main>
  );
}

// ページ冒頭の見出し。トップのファーストビューと同じ3Dカードで、マウスに合わせて傾く
export function PageHero({
  badge,
  title,
  lead,
  children,
  aside,
}: {
  badge: string;
  title: ReactNode;
  lead?: ReactNode;
  children?: ReactNode;
  aside?: ReactNode;
}) {
  return (
    <section className="mx-auto max-w-6xl px-6 pt-8 pb-10 md:pt-14 md:pb-14">
      <div
        className={cn(
          "grid gap-4",
          aside && "md:grid-cols-[1.25fr_0.75fr] md:items-stretch",
        )}
      >
        <CardContainer containerClassName="block py-0" className="h-full w-full">
          <CardBody className="relative h-full w-full rounded-[1.75rem] border border-white/60 bg-[#fffaf9] p-7 shadow-[0_30px_60px_-30px_rgba(21,24,29,0.55)] md:p-12">
            <CardItem translateZ={20}>
              <CardBadge>{badge}</CardBadge>
            </CardItem>
            <CardItem
              as="h1"
              translateZ={60}
              className={`${shipporiAntiqueB1.className} mt-6 text-[1.85rem] leading-[1.35] sm:text-4xl md:text-[2.75rem]`}
            >
              {title}
            </CardItem>
            {lead && (
              <CardItem
                as="p"
                translateZ={30}
                className="mt-6 max-w-2xl text-sm leading-relaxed text-[#4a4d55] md:text-base"
              >
                {lead}
              </CardItem>
            )}
            {children && (
              <CardItem translateZ={40} className="mt-8 w-full">
                {children}
              </CardItem>
            )}
          </CardBody>
        </CardContainer>
        {aside}
      </div>
    </section>
  );
}

// 赤い背景の上に置くセクション見出し
export function SectionHeading({
  title,
  lead,
  center = false,
}: {
  title: string;
  lead?: string;
  center?: boolean;
}) {
  return (
    <div className={center ? "text-center" : undefined}>
      <h2 className={`${shipporiAntiqueB1.className} text-3xl md:text-4xl`}>
        {title}
      </h2>
      {lead && (
        <p
          className={cn(
            "mt-3 max-w-2xl text-sm leading-relaxed text-[#3d1410] md:text-base",
            center && "mx-auto",
          )}
        >
          {lead}
        </p>
      )}
    </div>
  );
}

// ラベンダーの小さなタグ
export function Chip({ children }: { children: ReactNode }) {
  return (
    <span className="inline-flex items-center rounded-full bg-[#aaacff]/30 px-3 py-1 text-xs font-bold text-[#2a2c5a]">
      {children}
    </span>
  );
}

// 先頭に赤い点を付けた箇条書き
export function DotList({
  items,
  className,
}: {
  items: ReactNode[];
  className?: string;
}) {
  return (
    <ul className={cn("space-y-2 text-sm text-[#4a4d55]", className)}>
      {items.map((item, i) => (
        <li key={i} className="flex gap-2.5">
          <span
            aria-hidden="true"
            className="mt-[0.5em] h-1.5 w-1.5 shrink-0 rounded-full bg-[#ff4a3f]"
          />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}

export function BackToTop() {
  return (
    <div className="mx-auto mt-12 max-w-6xl px-6">
      <Link
        href="/"
        className="inline-flex items-center gap-2 rounded-full bg-[#fffaf9] px-6 py-3 text-sm font-bold text-[#15181d] shadow-[0_10px_30px_-18px_rgba(21,24,29,0.45)] transition hover:bg-white"
      >
        ← トップページへ戻る
      </Link>
    </div>
  );
}
