"use client";

import { shipporiAntiqueB1 } from "@/app/ui/fonts";
import Image from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";
import styles from "../home-sections.module.css";

const PDF_HREF = "/docs/reewa-web-spa-guide.pdf";
const PDF_FILENAME = "REEWA_WEB_SPAとは_他社サイトとの技術の違い.pdf";
const PAGE_COUNT = 21;

// PDFの各ページを画像化したもの（スマホでもPDFビューアなしで読めるようにするため）
const pages = Array.from({ length: PAGE_COUNT }, (_, i) => ({
  src: `/docs/spa-guide/p${String(i + 1).padStart(2, "0")}.jpg`,
  number: i + 1,
}));

const contents = [
  { page: 4, title: "WEBサイトを使った集客支援", note: "サイト強化・認知拡大・MEO" },
  { page: 7, title: "Googleが評価する「価値のあるサイト」", note: "E-E-A-Tをわかりやすく" },
  { page: 9, title: "名古屋の建具店の事例", note: "検索1位になった工夫" },
  { page: 15, title: "よくあるサイトとSPAの違い", note: "なぜページ移動が速いのか" },
  { page: 18, title: "Lighthouse 90点以上の実測", note: "当社サイトのスコアを公開" },
];

const previewPages = [4, 9, 15, 18];

export default function SpaGuide() {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const [current, setCurrent] = useState(1);

  const open = (page: number) => {
    setCurrent(page);
    dialogRef.current?.showModal();
  };

  const go = useCallback(
    (delta: number) =>
      setCurrent((p) => Math.min(PAGE_COUNT, Math.max(1, p + delta))),
    [],
  );

  return (
    <section
      id="document"
      className={`${styles.band} mx-auto max-w-6xl px-6`}
      aria-labelledby="document-heading"
    >
      {/* スマホでは「見出し→表紙→目次とボタン」の順、PCでは表紙を右列に縦断させる */}
      <div className="grid gap-10 md:grid-cols-[0.95fr_1.05fr] md:gap-x-16 md:gap-y-0">
        <div>
          <p className="text-sm font-bold tracking-[0.2em] text-[#5b5748]">
            資料ダウンロード
          </p>
          <h2
            id="document-heading"
            className={`${shipporiAntiqueB1.className} mt-4 text-[1.75rem] leading-snug md:text-4xl`}
          >
            SPAとは？
            <br />
            他社サイトとの技術の違い
          </h2>
          <p className="mt-4 text-sm leading-relaxed text-[#5b5748] md:text-base">
            打ち合わせでお見せしている提案資料を、そのまま公開しています。集客の考え方から、ページ移動が速いSPAの仕組みまでを図解でまとめました。社内での検討や、ほかの制作会社との比較にお使いください。
          </p>
        </div>

        <div className="order-last md:order-none md:col-start-1">

          <ol className={`${styles.specList} md:mt-8`}>
            {contents.map((c) => (
              <li key={c.page} className={styles.specItem}>
                <button
                  type="button"
                  onClick={() => open(c.page)}
                  className="group flex w-full items-baseline gap-4 text-left"
                >
                  <span className="w-10 shrink-0 text-xs tabular-nums text-[#8a8370]">
                    P.{c.page}
                  </span>
                  <span className="flex-1">
                    <span className="block text-sm font-bold transition-colors group-hover:text-[#b7791f]">
                      {c.title}
                    </span>
                    <span className="mt-0.5 block text-xs text-[#8a8370]">
                      {c.note}
                    </span>
                  </span>
                  <span
                    aria-hidden="true"
                    className="text-[#8a8370] transition-transform group-hover:translate-x-1"
                  >
                    →
                  </span>
                </button>
              </li>
            ))}
          </ol>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
            <button
              type="button"
              onClick={() => open(1)}
              className="inline-flex items-center justify-center gap-2 rounded-full bg-[#15181d] px-7 py-3 text-sm font-bold text-[#eae6da] transition hover:bg-[#2a2f37]"
            >
              <EyeIcon />
              ブラウザで読む
            </button>
            <a
              href={PDF_HREF}
              download={PDF_FILENAME}
              className="inline-flex items-center justify-center gap-2 rounded-full bg-[#f0b429] px-7 py-3 text-sm font-bold text-[#15181d] transition hover:brightness-95"
            >
              <DownloadIcon />
              PDFをダウンロード
            </a>
          </div>
          <p className="mt-3 text-xs text-[#8a8370]">
            PDF・全{PAGE_COUNT}ページ・約4.3MB／登録不要・無料
          </p>
        </div>

        {/* 表紙：資料が束になっている見た目にし、クリックでビューアを開く */}
        <div className="md:col-start-2 md:row-span-2 md:row-start-1 md:self-center">
          <button
            type="button"
            onClick={() => open(1)}
            aria-label="資料を1ページ目から読む"
            className="group relative block w-full pb-6 pr-6"
          >
            <span
              aria-hidden="true"
              className="absolute inset-0 left-6 top-6 rounded-xl bg-[#15181d]/10"
            />
            <span
              aria-hidden="true"
              className="absolute inset-0 left-3 top-3 bottom-3 right-3 rounded-xl bg-[#15181d]/15"
            />
            <span className="relative block overflow-hidden rounded-xl shadow-[0_24px_48px_-24px_rgba(21,24,29,0.45)] transition-transform duration-300 group-hover:-translate-y-1">
              <Image
                src={pages[0].src}
                alt="資料の表紙「提供内容のご説明」"
                width={1440}
                height={810}
                sizes="(min-width: 768px) 560px, 100vw"
                className="h-auto w-full"
              />
              <span className="absolute bottom-3 right-3 rounded-full bg-[#15181d]/85 px-3 py-1 text-xs font-bold text-[#eae6da]">
                {PAGE_COUNT}ページ
              </span>
            </span>
          </button>

          <ul className="mt-2 grid grid-cols-4 gap-2 pr-6">
            {previewPages.map((n) => (
              <li key={n}>
                <button
                  type="button"
                  onClick={() => open(n)}
                  aria-label={`${n}ページ目を読む`}
                  className="block w-full overflow-hidden rounded-md ring-1 ring-[#15181d]/15 transition hover:ring-2 hover:ring-[#f0b429]"
                >
                  <Image
                    src={pages[n - 1].src}
                    alt=""
                    width={1440}
                    height={810}
                    sizes="140px"
                    className="h-auto w-full"
                  />
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <GuideViewer
        dialogRef={dialogRef}
        current={current}
        setCurrent={setCurrent}
        go={go}
      />
    </section>
  );
}

function GuideViewer({
  dialogRef,
  current,
  setCurrent,
  go,
}: {
  dialogRef: React.RefObject<HTMLDialogElement | null>;
  current: number;
  setCurrent: (page: number) => void;
  go: (delta: number) => void;
}) {
  const touchStartX = useRef<number | null>(null);
  const railRef = useRef<HTMLOListElement>(null);

  // 矢印キーでページ送り（Escはdialog標準で閉じる）
  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight") go(1);
      if (e.key === "ArrowLeft") go(-1);
    };
    dialog.addEventListener("keydown", onKey);
    return () => dialog.removeEventListener("keydown", onKey);
  }, [dialogRef, go]);

  // 表示中のページのサムネイルを見える位置に寄せる
  useEffect(() => {
    railRef.current
      ?.querySelector<HTMLElement>(`[data-page="${current}"]`)
      ?.scrollIntoView({ block: "nearest", inline: "center" });
  }, [current]);

  const close = () => dialogRef.current?.close();

  return (
    <dialog
      ref={dialogRef}
      aria-label="資料ビューア"
      onClick={(e) => {
        if (e.target === e.currentTarget) close();
      }}
      className="m-auto h-[100dvh] max-h-none w-full max-w-none bg-transparent p-0 text-[#eae6da] backdrop:bg-[#15181d]/90 backdrop:backdrop-blur-sm md:h-[min(92dvh,56rem)] md:w-[min(92vw,72rem)]"
    >
      <div className="flex h-full flex-col bg-[#15181d] md:rounded-2xl">
        <div className="flex items-center justify-between gap-4 border-b border-[#eae6da]/15 px-4 py-3">
          <p className="truncate text-sm font-bold">
            SPAとは？他社サイトとの技術の違い
          </p>
          <div className="flex shrink-0 items-center gap-2">
            <a
              href={PDF_HREF}
              download={PDF_FILENAME}
              className="inline-flex items-center gap-1.5 rounded-full bg-[#f0b429] px-4 py-1.5 text-xs font-bold text-[#15181d] transition hover:brightness-95"
            >
              <DownloadIcon />
              <span className="hidden sm:inline">ダウンロード</span>
            </a>
            <button
              type="button"
              onClick={close}
              aria-label="閉じる"
              className="inline-flex h-9 w-9 items-center justify-center rounded-full text-xl transition hover:bg-[#eae6da]/10"
            >
              ✕
            </button>
          </div>
        </div>

        <div
          className="relative flex min-h-0 flex-1 items-center justify-center px-2 py-4 md:px-16"
          onTouchStart={(e) => {
            touchStartX.current = e.touches[0].clientX;
          }}
          onTouchEnd={(e) => {
            if (touchStartX.current === null) return;
            const dx = e.changedTouches[0].clientX - touchStartX.current;
            if (Math.abs(dx) > 40) go(dx < 0 ? 1 : -1);
            touchStartX.current = null;
          }}
        >
          <Image
            key={current}
            src={pages[current - 1].src}
            alt={`資料 ${current}ページ目`}
            width={1440}
            height={810}
            sizes="(min-width: 768px) 72rem, 100vw"
            className="max-h-full w-auto max-w-full rounded-lg object-contain"
          />
          {/* 次のページを先読みしておき、ページ送りで待たせない */}
          {current < PAGE_COUNT && (
            <Image
              src={pages[current].src}
              alt=""
              width={1440}
              height={810}
              sizes="(min-width: 768px) 72rem, 100vw"
              className="hidden"
              aria-hidden="true"
            />
          )}

          <PageButton
            direction="prev"
            disabled={current === 1}
            onClick={() => go(-1)}
          />
          <PageButton
            direction="next"
            disabled={current === PAGE_COUNT}
            onClick={() => go(1)}
          />
        </div>

        <div className="border-t border-[#eae6da]/15 px-4 pb-4 pt-3">
          <div className="flex items-center justify-center gap-6">
            <button
              type="button"
              onClick={() => go(-1)}
              disabled={current === 1}
              aria-label="前のページ"
              className="h-9 w-9 rounded-full text-2xl leading-none disabled:opacity-25 md:hidden"
            >
              ‹
            </button>
            <p className="text-xs tabular-nums text-[#c9c4ad]" aria-live="polite">
              {current} / {PAGE_COUNT}
            </p>
            <button
              type="button"
              onClick={() => go(1)}
              disabled={current === PAGE_COUNT}
              aria-label="次のページ"
              className="h-9 w-9 rounded-full text-2xl leading-none disabled:opacity-25 md:hidden"
            >
              ›
            </button>
          </div>
          <ol
            ref={railRef}
            className="mt-3 flex gap-2 overflow-x-auto pb-1 [scrollbar-width:thin]"
          >
            {pages.map((p) => (
              <li key={p.number} data-page={p.number} className="shrink-0">
                <button
                  type="button"
                  onClick={() => setCurrent(p.number)}
                  aria-label={`${p.number}ページ目`}
                  aria-current={p.number === current ? "page" : undefined}
                  className={`block w-20 overflow-hidden rounded ring-2 transition md:w-24 ${
                    p.number === current
                      ? "ring-[#f0b429]"
                      : "opacity-60 ring-transparent hover:opacity-100"
                  }`}
                >
                  <Image
                    src={p.src}
                    alt=""
                    width={1440}
                    height={810}
                    sizes="96px"
                    loading="lazy"
                    className="h-auto w-full"
                  />
                </button>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </dialog>
  );
}

function PageButton({
  direction,
  disabled,
  onClick,
}: {
  direction: "prev" | "next";
  disabled: boolean;
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      disabled={disabled}
      aria-label={direction === "prev" ? "前のページ" : "次のページ"}
      className={`absolute top-1/2 hidden h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-[#eae6da]/10 text-2xl transition hover:bg-[#eae6da]/20 disabled:opacity-25 md:inline-flex ${
        direction === "prev" ? "left-3" : "right-3"
      }`}
    >
      {direction === "prev" ? "‹" : "›"}
    </button>
  );
}

function DownloadIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-4 w-4"
      aria-hidden="true"
    >
      <path d="M12 4v11m0 0-4.5-4.5M12 15l4.5-4.5M5 19h14" />
    </svg>
  );
}

function EyeIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-4 w-4"
      aria-hidden="true"
    >
      <path d="M2.5 12S6 5 12 5s9.5 7 9.5 7-3.5 7-9.5 7-9.5-7-9.5-7Z" />
      <circle cx="12" cy="12" r="2.5" />
    </svg>
  );
}
