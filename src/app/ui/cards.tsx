"use client";

import { BentoGridItem } from "@/components/ui/bento-grid";
import { GlowingEffect } from "@/components/ui/glowing-effect";
import { cn } from "@/lib/utils";
import type { ReactNode } from "react";

// トップページのカードの共通パーツ。
// 外側の半透明の枠＋内側の白い面の二重構造にし、枠にマウスを近づけると赤とラベンダーで光る。

export function GlowCard({
  children,
  className,
  innerClassName,
  as: Tag = "div",
}: {
  children: ReactNode;
  className?: string;
  innerClassName?: string;
  as?: "div" | "li" | "article";
}) {
  return (
    <Tag
      className={cn(
        "relative rounded-[1.75rem] border border-white/50 bg-white/25 p-1.5 md:p-2",
        className,
      )}
    >
      <GlowingEffect
        spread={40}
        glow
        disabled={false}
        proximity={64}
        inactiveZone={0.01}
        borderWidth={2}
      />
      <div
        className={cn(
          "relative h-full rounded-[1.35rem] bg-[#fffaf9] p-6 shadow-[0_10px_30px_-18px_rgba(21,24,29,0.45)] md:p-7",
          innerClassName,
        )}
      >
        {children}
      </div>
    </Tag>
  );
}

// Bento Grid の1マス。光る枠の中に BentoGridItem を置く
export function BentoCell({
  className,
  innerClassName,
  header,
  icon,
  title,
  description,
}: {
  className?: string;
  innerClassName?: string;
  header?: ReactNode;
  icon?: ReactNode;
  title?: ReactNode;
  description?: ReactNode;
}) {
  return (
    <div
      className={cn(
        "relative rounded-[1.75rem] border border-white/50 bg-white/25 p-1.5 md:p-2",
        className,
      )}
    >
      <GlowingEffect
        spread={40}
        glow
        disabled={false}
        proximity={64}
        inactiveZone={0.01}
        borderWidth={2}
      />
      <BentoGridItem
        className={cn(
          "relative h-full justify-start rounded-[1.35rem] border-0 bg-[#fffaf9] p-6 shadow-[0_10px_30px_-18px_rgba(21,24,29,0.45)] hover:shadow-[0_18px_40px_-20px_rgba(21,24,29,0.5)] md:p-7",
          innerClassName,
        )}
        header={header}
        icon={icon}
        title={title}
        description={description}
      />
    </div>
  );
}

// カード内の小見出しに使うラベンダーのバッジ
export function CardBadge({ children }: { children: ReactNode }) {
  return (
    <span className="inline-flex items-center rounded-full bg-[#aaacff]/35 px-3 py-1 text-[11px] font-bold tracking-[0.18em] text-[#2a2c5a]">
      {children}
    </span>
  );
}
