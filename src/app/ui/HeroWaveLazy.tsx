"use client";

import dynamic from "next/dynamic";

// 背景の波線は装飾なので、ページが表示されてから読み込んでふわっと出す。
// パスデータ（約17KB）を最初の HTML と JS に含めず、モバイルの初回表示を速くするため
const HeroWave = dynamic(() => import("@/app/ui/HeroWave"), { ssr: false });

export default function HeroWaveLazy({ className }: { className?: string }) {
  return <HeroWave className={className} />;
}
