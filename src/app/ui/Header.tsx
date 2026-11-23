"use client";

import { FloatingNav } from "@/components/ui/floating-navbar";
import {
  CurrencyYenIcon,
  EnvelopeIcon,
  HomeIcon,
  NewspaperIcon,
  PaintBrushIcon,
  PhotoIcon,
  WrenchScrewdriverIcon,
} from "@heroicons/react/24/outline";
import Image from "next/image";
import Link from "next/link";

const iconClass = "h-5 w-5";

const NAV_ITEMS = [
  {
    name: "TOP",
    link: "/",
    icon: <HomeIcon className={iconClass} />,
    hideOnMobile: true,
  },
  {
    name: "SERVICE",
    link: "/service",
    icon: <WrenchScrewdriverIcon className={iconClass} />,
  },
  { name: "WORKS", link: "/works", icon: <PhotoIcon className={iconClass} /> },
  {
    name: "DESIGN",
    link: "/design",
    icon: <PaintBrushIcon className={iconClass} />,
  },
  {
    name: "PRICE",
    link: "/price",
    icon: <CurrencyYenIcon className={iconClass} />,
  },
  { name: "BLOG", link: "/blog", icon: <NewspaperIcon className={iconClass} /> },
  {
    name: "CONTACT",
    link: "/contact",
    icon: <EnvelopeIcon className={iconClass} />,
  },
];

export default function Header() {
  return (
    <>
      <FloatingNav
        navItems={NAV_ITEMS}
        cta={{ name: "無料で相談する", link: "/contact" }}
        logo={
          <Link
            href="/"
            aria-label="REEWA WEB トップページ"
            className="flex shrink-0 items-center gap-2 rounded-full pr-1 md:pr-2"
          >
            {/* 表示サイズ（32px、高解像度画面で64px）に合わせた1.8KBのロゴ。
                favicon.ico（270KB）を毎回変換して配信しないよう別ファイルにしている */}
            <Image
              src="/nav-logo.webp"
              alt=""
              width={32}
              height={32}
              unoptimized
              className="rounded-full"
            />
            <span className="hidden text-sm font-bold tracking-wider text-[#15181d] lg:block">
              REEWA WEB
            </span>
          </Link>
        }
      />
      {/* ナビは画面に浮いているため、その分だけ本文を下げる */}
      <div aria-hidden="true" className="h-20 md:h-24" />
    </>
  );
}
