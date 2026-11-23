"use client";

import { Button } from "@/components/ui/button";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
} from "@/components/ui/drawer";
import Link from 'next/link';

// 画面下の「無料で相談する」ボタンから開くドロワーの中身。
// ドロワーのライブラリ（vaul）は初回表示に不要なので、Drawer.tsx から後で読み込む
export default function DrawerPanel({
  open,
  onOpenChange,
}: {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}) {
  return (
    <Drawer open={open} onOpenChange={onOpenChange}>
      <DrawerContent>
        <DrawerHeader>
          <DrawerTitle></DrawerTitle>

        </DrawerHeader>

        <DrawerFooter>
          <Button
            asChild
            className="inline-flex items-center justify-center rounded-full bg-[#aaacff] px-6 py-3 text-sm font-bold text-[#15181d] shadow-none transition hover:brightness-95"
          >
            <Link href="/contact">
              メールで無料お見積もり
            </Link>
          </Button>
            <a
              href="https://www.instagram.com/reewa_web/"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gradient-to-tr from-[#F58529] via-[#DD2A7B] to-[#515BD4] inline-flex items-center justify-center gap-2 rounded-full border border-white px-8 py-3 text-sm font-semibold text-white transition hover:bg-white/15"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                className="h-5 w-5"
                aria-hidden="true"
              >
                <rect x="3" y="3" width="18" height="18" rx="5" ry="5" />
                <path d="M16 11.37a4.5 4.5 0 1 1-3.11-4.25" />
                <circle cx="17.5" cy="6.5" r="0.75" fill="currentColor" stroke="none" />
              </svg>
              InstagramのDMからお問い合わせ
            </a>
          <DrawerClose asChild>
            <Button variant="outline">キャンセル</Button>
          </DrawerClose>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  )
}
