"use client"

import { useEffect, useRef, useState, type CSSProperties, type ReactNode } from "react"

// Magic UI の Blur Fade と同じ見た目（ぼかし＋フェード＋少し移動して現れる）を、
// アニメーションライブラリ（motion）を使わず IntersectionObserver と CSS の transition で実装したもの。
// 初回読み込みの JS を減らしてモバイルの表示速度を上げるため。

interface BlurFadeProps {
  children: ReactNode
  className?: string
  duration?: number
  delay?: number
  offset?: number
  direction?: "up" | "down" | "left" | "right"
  // true のとき画面に入ってから表示する。false なら読み込み後すぐ表示する
  inView?: boolean
  // 画面に入ったとみなす範囲（例: "-50px" なら画面の端から50px内側に入ったとき）
  inViewMargin?: string
  blur?: string
}

export function BlurFade({
  children,
  className,
  duration = 0.4,
  delay = 0,
  offset = 6,
  direction = "down",
  inView = false,
  inViewMargin = "-50px",
  blur = "6px",
}: BlurFadeProps) {
  const ref = useRef<HTMLDivElement>(null)
  const [shown, setShown] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    if (!inView || typeof IntersectionObserver === "undefined") {
      setShown(true)
      return
    }
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries.some((e) => e.isIntersecting)) {
          setShown(true)
          observer.disconnect()
        }
      },
      { rootMargin: inViewMargin },
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [inView, inViewMargin])

  const horizontal = direction === "left" || direction === "right"
  const distance = direction === "right" || direction === "down" ? -offset : offset
  const hiddenTransform = horizontal
    ? `translateX(${distance}px)`
    : `translateY(${distance}px)`

  const style: CSSProperties = {
    opacity: shown ? 1 : 0,
    filter: shown ? "blur(0px)" : `blur(${blur})`,
    transform: shown ? "none" : hiddenTransform,
    transitionProperty: "opacity, filter, transform",
    transitionDuration: `${duration}s`,
    transitionTimingFunction: "ease-out",
    transitionDelay: `${0.04 + delay}s`,
  }

  return (
    <div ref={ref} className={className} style={style}>
      {children}
    </div>
  )
}
