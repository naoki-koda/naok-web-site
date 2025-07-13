'use client';

import { useEffect, useRef, useState } from 'react';
import { useInView } from 'react-intersection-observer';

interface AnimatedImageProps {
  triggerId: string; // トリガーにするセクションのID
  src: string;
  alt: string;
}

export default function AnimatedImage({ triggerId, src, alt }: AnimatedImageProps) {
  const [show, setShow] = useState(false);
  const [scrollOut, setScrollOut] = useState(false);
  const [position, setPosition] = useState({ top: 0, left: 0 });

  const { ref, inView } = useInView({
    threshold: 0.3,
    triggerOnce: true,
  });

  const sectionRef = useRef<HTMLDivElement | null>(null);

  // 表示トリガー
  useEffect(() => {
    if (inView) {
      setShow(true);
    }
  }, [inView]);

  // スクロールで画面上に消える
  useEffect(() => {
    const handleScroll = () => {
      if (show) {
        setScrollOut(window.scrollY > (position.top + 100));
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [show, position.top]);

  // トリガー位置に画像を表示させるために座標取得
  useEffect(() => {
    const triggerEl = document.getElementById(triggerId);
    if (triggerEl) {
      const rect = triggerEl.getBoundingClientRect();
      setPosition({
        top: rect.top + window.scrollY - 180,
        left: rect.left + window.scrollX - 100,
      });
    }
  }, [triggerId]);

  return (
    <>
      {/* トリガー要素 */}
      <div id={triggerId} ref={ref} className="h-1" />

      {/* スライド画像 */}
      <img
        src={src}
        alt={alt}
        style={{
          position: 'absolute',
          top: position.top,
          left: position.left,
          transform: show
            ? scrollOut
              ? 'translateY(-200%)'
              : 'translateX(0) rotate(-10deg)'
            : 'translateX(100%)',
          opacity: show ? (scrollOut ? 0 : 1) : 0,
          transition: 'transform 0.8s ease, opacity 0.6s ease',
          zIndex: 40,
          pointerEvents: 'none',
          width: '16rem',
          height: 'auto',
        }}
      />
    </>
  );
}
