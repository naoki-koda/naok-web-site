"use client";

import { usePathname } from "next/navigation";
import { useEffect, useRef, useState, type ReactNode } from "react";

// 同じ人に何度も出すと離脱が増えるため、表示は24時間に1回まで
const STORAGE_KEY = "blogAdModal:lastShownAt";
const INTERVAL_MS = 24 * 60 * 60 * 1000;

const readLastShown = () => {
  try {
    return Number(localStorage.getItem(STORAGE_KEY)) || 0;
  } catch {
    return 0;
  }
};

const writeLastShown = () => {
  try {
    localStorage.setItem(STORAGE_KEY, String(Date.now()));
  } catch {
    // ストレージが使えない環境では毎回表示されるだけなので無視する
  }
};

// ads: パスの先頭一致で選ぶ広告（長いパスを優先）
export default function BlogAdModal({ ads }: { ads: Record<string, ReactNode> }) {
  const pathname = usePathname();
  const dialogRef = useRef<HTMLDialogElement>(null);
  const [open, setOpen] = useState(false);

  const matchedPath = Object.keys(ads)
    .filter((path) => pathname === path || pathname.startsWith(`${path}/`))
    .sort((a, b) => b.length - a.length)[0];

  useEffect(() => {
    if (!matchedPath) return;
    // 確認用：URLに ?ad=preview を付けると24時間の制限を無視して表示する
    const preview = new URLSearchParams(window.location.search).get("ad") === "preview";
    if (!preview && Date.now() - readLastShown() < INTERVAL_MS) return;
    writeLastShown();
    setOpen(true);
  }, [matchedPath]);

  useEffect(() => {
    const dialog = dialogRef.current;
    if (open && dialog && !dialog.open) dialog.showModal();
  }, [open]);

  if (!matchedPath || !open) return null;

  const close = () => {
    dialogRef.current?.close();
    setOpen(false);
  };

  return (
    <dialog
      ref={dialogRef}
      aria-label="おすすめ商品のご紹介"
      onClose={() => setOpen(false)}
      // モーダルの外（backdrop）をクリックしたら閉じる
      onClick={(e) => {
        if (e.target === e.currentTarget) close();
      }}
      className="m-auto w-[min(92vw,560px)] overflow-visible bg-transparent p-0 backdrop:bg-slate-900/60 backdrop:backdrop-blur-[2px]"
    >
      <div className="relative rounded-3xl bg-white px-4 pt-10 pb-2 shadow-2xl">
        <button
          type="button"
          onClick={close}
          aria-label="閉じる"
          autoFocus
          className="absolute top-3 right-3 flex h-9 w-9 items-center justify-center rounded-full bg-slate-100 text-slate-600 transition hover:bg-slate-200"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            className="h-5 w-5"
            aria-hidden="true"
          >
            <path d="M6 6l12 12M18 6 6 18" />
          </svg>
        </button>
        <p className="text-center text-xs font-semibold tracking-[0.24em] text-amber-600">
          PR
        </p>
        <p className="mt-1 text-center text-base font-bold text-slate-900">
          この記事を読む方におすすめ
        </p>
        <div className="[&>div]:my-4">{ads[matchedPath]}</div>
      </div>
    </dialog>
  );
}
