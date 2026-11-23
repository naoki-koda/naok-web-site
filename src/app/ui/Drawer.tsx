"use client";

import { Button } from "@/components/ui/button";
import dynamic from "next/dynamic";
import { useEffect, useState } from "react";

// ドロワー本体（vaul を含む）は初回表示に不要なので、ページの読み込みが終わってから取得する。
// こうすると最初に読み込む JS が減り、モバイルの表示速度（Lighthouse の LCP）が良くなる
const loadPanel = () => import("@/app/ui/DrawerPanel");
const DrawerPanel = dynamic(loadPanel, { ssr: false });

export default function MyDrawer() {
  const [requested, setRequested] = useState(false);
  const [open, setOpen] = useState(false);

  // 読み込み完了後の空き時間に先読みしておき、ボタンを押したときにすぐ開けるようにする
  useEffect(() => {
    const preload = () => {
      if ("requestIdleCallback" in window) {
        window.requestIdleCallback(() => void loadPanel());
      } else {
        setTimeout(() => void loadPanel(), 1500);
      }
    };
    if (document.readyState === "complete") preload();
    else window.addEventListener("load", preload, { once: true });
    return () => window.removeEventListener("load", preload);
  }, []);

  return (
    <>
      <Button
        variant="outline"
        aria-haspopup="dialog"
        aria-expanded={open}
        onClick={() => {
          setRequested(true);
          setOpen(true);
        }}
        className="rounded-full border-none bg-[#15181d] px-8 py-3 text-lg font-bold text-white shadow-lg shadow-[#15181d]/25 hover:bg-[#2a2f37]"
      >
        無料で相談する
      </Button>
      {requested && <DrawerPanel open={open} onOpenChange={setOpen} />}
    </>
  );
}
