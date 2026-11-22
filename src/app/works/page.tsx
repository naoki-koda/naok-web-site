"use client";

import { CardBadge } from "@/app/ui/cards";
import {
  BackToTop,
  Chip,
  PageHero,
  PageShell,
} from "@/app/ui/page-parts";
import WorksGallery from "@/app/ui/WorksGallery";
import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card";
import Image from "next/image";

const works = [
  {
    title: "袖野建具店 様",
    url: "https://www.sodeno-tategu.jp/",
    image: { src: "/works-gallery/sodeno-hero.jpg", width: 1600, height: 889 },
    description:
      "建具製作工房の公式サイト。温かみのあるデザインと、施工写真を活かした見やすい構成を重視しました。「名古屋 建具店」の検索結果で1位を獲得しています。",
    tags: ["建具・造作家具", "施工写真の見せ方", "検索1位"],
  },
  {
    title: "すずはな行政書士事務所 様",
    url: "https://www.suzuhana-gyosei.jp/ja",
    image: { src: "/works-gallery/suzuhana-hero.jpg", width: 1600, height: 911 },
    description:
      "名古屋市中区の行政書士事務所の公式サイト。ビザ申請や許認可の案内をわかりやすく整理し、日本語・英語・中国語の3言語に対応しています。",
    tags: ["日本語・英語・中国語", "許認可・入管業務", "Next.js"],
  },
  {
    title: "C-ENT 様",
    url: "https://www.c-ent.jp/",
    image: { src: "/works-gallery/cent-hero.jpg", width: 1600, height: 871 },
    description:
      "企業向けサービスのコーポレートサイト。落ち着いた配色とブランドイメージを意識した、プロフェッショナルなデザインに仕上げています。",
    tags: ["コーポレートサイト", "採用・Web・スクール", "ブランディング"],
  },
];

export default function Page() {
  return (
    <PageShell>
      <PageHero
        badge="WORKS"
        title="制作実績"
        lead="これまでに制作したホームページをご紹介します。デザイン性・操作性・レスポンシブ対応・SEOを考慮した、高品質なWebサイト制作を心がけています。"
      />

      <section className="mx-auto max-w-6xl space-y-5 px-6">
        {works.map((work, i) => (
          <CardContainer
            key={work.url}
            containerClassName="block py-0"
            className="w-full"
          >
            <CardBody className="h-auto w-full rounded-[1.75rem] border border-white/60 bg-[#fffaf9] p-7 shadow-[0_30px_60px_-30px_rgba(21,24,29,0.55)] md:p-12">
              <div className="grid gap-8 md:grid-cols-[1.1fr_0.9fr] md:items-center">
                <CardItem
                  translateZ={80}
                  rotateZ={i % 2 ? -2 : 2}
                  className="w-full overflow-hidden rounded-xl shadow-[0_24px_48px_-24px_rgba(21,24,29,0.6)] ring-1 ring-[#15181d]/10"
                >
                  <Image
                    src={work.image.src}
                    alt={`${work.title}のホームページ`}
                    width={work.image.width}
                    height={work.image.height}
                    sizes="(min-width: 768px) 560px, 100vw"
                    className="h-auto w-full"
                  />
                </CardItem>
                <div>
                  <CardItem translateZ={25}>
                    <CardBadge>{`CASE ${String(i + 1).padStart(2, "0")}`}</CardBadge>
                  </CardItem>
                  <CardItem
                    as="h2"
                    translateZ={40}
                    className="mt-4 text-2xl font-bold"
                  >
                    {work.title}
                  </CardItem>
                  <CardItem
                    as="p"
                    translateZ={25}
                    className="mt-4 text-sm leading-relaxed text-[#4a4d55]"
                  >
                    {work.description}
                  </CardItem>
                  <CardItem translateZ={35} className="mt-5 flex flex-wrap gap-2">
                    {work.tags.map((tag) => (
                      <Chip key={tag}>{tag}</Chip>
                    ))}
                  </CardItem>
                  <CardItem
                    as="a"
                    translateZ={30}
                    href={work.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-6 inline-block border-b-2 border-[#ff4a3f] pb-1 text-sm font-bold"
                  >
                    Webサイトを見る ↗
                  </CardItem>
                </div>
              </div>
            </CardBody>
          </CardContainer>
        ))}
      </section>

      <div className="mt-8">
        <WorksGallery />
      </div>

      <BackToTop />
    </PageShell>
  );
}
