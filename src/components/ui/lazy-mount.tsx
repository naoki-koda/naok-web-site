"use client";

import { useEffect, useRef, useState, type CSSProperties, type ReactNode } from "react";

// 画面に近づくまで中身（主に画像）を描画しない。下の方にある画像が最初の読み込みで
// 一緒に取得され、モバイルの初回表示（Lighthouse の LCP）を遅らせるのを防ぐ。
// 描画前は style の aspectRatio などで同じ大きさの枠を確保し、レイアウトがずれないようにする。
export function LazyMount({
  children,
  className,
  style,
  rootMargin = "300px",
}: {
  children: ReactNode;
  className?: string;
  style?: CSSProperties;
  rootMargin?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (typeof IntersectionObserver === "undefined") {
      setVisible(true);
      return;
    }
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries.some((e) => e.isIntersecting)) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { rootMargin },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [rootMargin]);

  return (
    <div ref={ref} className={className} style={style}>
      {visible ? children : null}
    </div>
  );
}
