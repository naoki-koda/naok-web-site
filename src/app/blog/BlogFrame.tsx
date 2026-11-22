"use client";

import { usePathname } from "next/navigation";
import type { ReactNode } from "react";

// ブログ記事を、トップページと同じ「赤い背景の上の白いカード」に収める。
// 記事ごとの配色や図表はそのまま活かし、外枠だけをサイト全体のトーンに揃える。
// 一覧ページ（/blog）は自前のカードで組んでいるので枠を付けない。
// 角丸の切り抜きは overflow-clip にして、記事内の追従する目次（sticky）を止めないようにする。
export default function BlogFrame({ children }: { children: ReactNode }) {
  const pathname = usePathname();
  if (pathname === "/blog") return <>{children}</>;

  return (
    <div className="mx-auto max-w-6xl px-3 pt-4 pb-16 sm:px-6 md:pt-8">
      <div className="rounded-[2rem] border border-white/50 bg-white/25 p-1.5 shadow-[0_30px_60px_-30px_rgba(21,24,29,0.55)] md:p-2">
        <div className="overflow-clip rounded-[1.6rem] bg-white">
          {children}
        </div>
      </div>
    </div>
  );
}
