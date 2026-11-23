"use client";

import { BlurFade } from "@/components/ui/blur-fade";
import { shipporiAntiqueB1 } from "@/app/ui/fonts";
import { LazyMount } from "@/components/ui/lazy-mount";
import Image from "next/image";

type Shot = {
  src: string;
  width: number;
  height: number;
  site: string;
  part: string;
  url: string;
  // スマホ表示のキャプチャは端末の枠をつけて見せる
  mobile?: boolean;
};

const SODENO = { site: "袖野建具店", url: "https://www.sodeno-tategu.jp/" };
const SUZUHANA = {
  site: "すずはな行政書士事務所",
  url: "https://www.suzuhana-gyosei.jp/ja",
};
const CENT = { site: "C-ENT", url: "https://www.c-ent.jp/" };

// CSSの段組みは列ごとに上から並ぶため、縦長・横長が各列に散らばる順にしている
const shots: Shot[] = [
  { ...SODENO, src: "/works-gallery/sodeno-hero.jpg", width: 1600, height: 889, part: "写真を主役にしたファーストビュー" },
  { ...SUZUHANA, src: "/works-gallery/suzuhana-mobile.jpg", width: 720, height: 1440, part: "桔梗をあしらったスマホ表示", mobile: true },
  { ...CENT, src: "/works-gallery/cent-service.jpg", width: 1400, height: 933, part: "写真で伝える事業紹介" },
  { ...SUZUHANA, src: "/works-gallery/suzuhana-intro.jpg", width: 1400, height: 629, part: "すりガラス風のカード" },
  { ...SODENO, src: "/works-gallery/sodeno-detail.jpg", width: 1100, height: 1367, part: "部材選びと図面の見せ方" },
  { ...CENT, src: "/works-gallery/cent-mobile.jpg", width: 720, height: 1440, part: "見上げる構図のスマホ表示", mobile: true },
  { ...SODENO, src: "/works-gallery/sodeno-mobile.jpg", width: 720, height: 1440, part: "筆文字ロゴのスマホ表示", mobile: true },
  { ...SUZUHANA, src: "/works-gallery/suzuhana-service.jpg", width: 1400, height: 902, part: "業種ごとのサービスカード" },
  { ...SODENO, src: "/works-gallery/sodeno-about.jpg", width: 1400, height: 1053, part: "工房の写真で伝える会社紹介" },
];

export default function WorksGallery() {
  return (
    <section
      id="gallery"
      aria-labelledby="gallery-heading"
      className="mx-auto max-w-6xl px-6 py-16"
    >
      <BlurFade inView>
        <p className="text-sm font-bold tracking-[0.2em] text-[#3d1410]">
          DESIGN GALLERY
        </p>
        <h2
          id="gallery-heading"
          className={`${shipporiAntiqueB1.className} mt-4 text-3xl leading-snug md:text-4xl`}
        >
          細部まで、美しく。
        </h2>
        <p className="mt-4 max-w-xl text-sm leading-relaxed text-[#3d1410] md:text-base">
          これまでに制作したサイトから、こだわった部分を切り取りました。業種やお客様の雰囲気に合わせて、毎回ゼロからデザインしています。
        </p>
      </BlurFade>

      <div className="mt-10 columns-2 gap-3 sm:gap-4 lg:columns-3 [&>*]:mb-3 sm:[&>*]:mb-4">
        {shots.map((shot, i) => (
          <BlurFade
            key={shot.src}
            inView
            delay={0.08 + (i % 3) * 0.12}
            inViewMargin="-80px"
            className="break-inside-avoid"
          >
            <a
              href={shot.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group block"
            >
              <figure
                className={
                  shot.mobile
                    ? "rounded-[1.4rem] bg-[#15181d] p-1.5 shadow-[0_24px_48px_-28px_rgba(21,24,29,0.55)]"
                    : "overflow-hidden rounded-xl bg-white shadow-[0_24px_48px_-28px_rgba(21,24,29,0.45)] ring-1 ring-[#15181d]/10"
                }
              >
                <div
                  className={
                    shot.mobile
                      ? "overflow-hidden rounded-[1.1rem] sm:rounded-[1.2rem]"
                      : "overflow-hidden"
                  }
                >
                  {/* 画面に近づいてから画像を読み込む。それまでは同じ縦横比の枠だけ確保する */}
                  <LazyMount style={{ aspectRatio: `${shot.width} / ${shot.height}` }}>
                    <Image
                      src={shot.src}
                      alt={`${shot.site}様のサイト：${shot.part}`}
                      width={shot.width}
                      height={shot.height}
                      sizes="(min-width: 1024px) 360px, 50vw"
                      className="h-auto w-full transition-transform duration-700 ease-out group-hover:scale-[1.03]"
                    />
                  </LazyMount>
                </div>
                <figcaption
                  className={`flex items-baseline justify-between gap-3 px-2 pb-1.5 pt-2 text-[10px] sm:px-3 sm:pb-2 sm:pt-3 sm:text-xs ${
                    shot.mobile ? "text-[#c9c4ad]" : "text-[#3d1410]"
                  }`}
                >
                  {/* スマホの2列表示では幅が足りないため、どこの部分かは代替テキストに任せる */}
                  <span className="hidden sm:inline">{shot.part}</span>
                  <span
                    className={`shrink-0 font-bold ${
                      shot.mobile ? "text-[#eae6da]" : "text-[#15181d]"
                    }`}
                  >
                    {shot.site} 様
                    <span
                      aria-hidden="true"
                      className="ml-1 inline-block transition-transform group-hover:translate-x-0.5"
                    >
                      ↗
                    </span>
                  </span>
                </figcaption>
              </figure>
            </a>
          </BlurFade>
        ))}
      </div>
    </section>
  );
}
