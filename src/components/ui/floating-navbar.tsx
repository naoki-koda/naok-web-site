"use client";
import React, { useState } from "react";
import {
  motion,
  AnimatePresence,
  useScroll,
  useMotionValueEvent,
} from "motion/react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

// Aceternity の Floating Navbar をもとに、ロゴ・現在地表示・CTA を追加したもの。
// ページ最上部では常に表示し、下へスクロールすると隠れ、上へ戻すと再び現れる。
export const FloatingNav = ({
  navItems,
  logo,
  cta,
  className,
}: {
  navItems: {
    name: string;
    link: string;
    icon?: React.ReactNode;
    // スマホでは幅が足りないため、ロゴと役割が重なる項目は隠す
    hideOnMobile?: boolean;
  }[];
  logo?: React.ReactNode;
  cta?: { name: string; link: string };
  className?: string;
}) => {
  const { scrollY } = useScroll();
  const [visible, setVisible] = useState(true);
  const pathname = usePathname();

  useMotionValueEvent(scrollY, "change", (current) => {
    const previous = scrollY.getPrevious() ?? 0;
    if (current < 80) {
      setVisible(true);
    } else {
      setVisible(current < previous);
    }
  });

  const isActive = (link: string) =>
    link === "/" ? pathname === "/" : pathname.startsWith(link);

  return (
    <AnimatePresence mode="wait">
      <motion.div
        initial={{
          opacity: 1,
          y: 0,
        }}
        animate={{
          y: visible ? 0 : -100,
          opacity: visible ? 1 : 0,
        }}
        transition={{
          duration: 0.2,
        }}
        className={cn(
          "flex max-w-[calc(100vw-1rem)] fixed top-3 md:top-5 inset-x-0 mx-auto w-fit z-[5000] items-center justify-center",
          className
        )}
      >
        <nav
          aria-label="グローバルナビゲーション"
          className="flex items-center justify-center gap-1 rounded-full border border-[#15181d]/10 bg-white/85 py-1.5 pl-2 pr-1.5 shadow-lg shadow-[#15181d]/15 backdrop-blur-md md:gap-2"
        >
          {logo}

          <div className="flex items-center">
            {navItems.map((navItem) => {
              const active = isActive(navItem.link);
              return (
                <Link
                  key={navItem.link}
                  href={navItem.link}
                  aria-label={navItem.name}
                  aria-current={active ? "page" : undefined}
                  className={cn(
                    "relative items-center rounded-full px-2.5 py-2 text-xs font-bold tracking-wider text-[#15181d]/70 transition-colors hover:bg-[#aaacff]/30 hover:text-[#15181d] lg:px-3.5",
                    navItem.hideOnMobile ? "hidden sm:flex" : "flex",
                    active && "bg-[#aaacff]/45 text-[#15181d]"
                  )}
                >
                  <span className="block md:hidden">{navItem.icon}</span>
                  <span className="hidden md:block">{navItem.name}</span>
                </Link>
              );
            })}
          </div>

          {cta && (
            <>
              <div className="hidden h-5 w-px bg-[#15181d]/15 md:block" />
              <Link
                href={cta.link}
                className="relative hidden rounded-full bg-[#ff4a3f] px-4 py-2 text-xs font-bold text-[#15181d] transition-all hover:brightness-95 hover:shadow-lg hover:shadow-[#ff4a3f]/30 md:block"
              >
                {cta.name}
              </Link>
            </>
          )}
        </nav>
      </motion.div>
    </AnimatePresence>
  );
};
