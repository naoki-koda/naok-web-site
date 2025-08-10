'use client';

import { useEffect, useRef, useState } from 'react';
import { useInView } from 'react-intersection-observer';
import { useTheme } from 'next-themes';

interface AnimatedImageProps {
  triggerId: string;
  srcLight: string;
  srcDark: string;
  alt: string;
}

export default function AnimatedImage({
  triggerId,
  srcLight,
  srcDark,
  alt,
}: AnimatedImageProps) {
  const { theme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [show, setShow] = useState(false);
  const [scrollOut, setScrollOut] = useState(false);
  const [position, setPosition] = useState({ top: 0, left: 0 });

  const { ref, inView } = useInView({
    threshold: 0.3,
    triggerOnce: true,
  });

  useEffect(() => setMounted(true), []);

  useEffect(() => {
    if (inView) setShow(true);
  }, [inView]);

  // ✅ 位置を再計算する関数（共通化）
  const updatePosition = () => {
    const triggerEl = document.getElementById(triggerId);
    if (triggerEl) {
      const rect = triggerEl.getBoundingClientRect();
      setPosition({
        top: rect.top + window.scrollY - 180,
        left: rect.left + window.scrollX - 100,
      });
    }
  };

  useEffect(() => {
    if (!mounted) return;
    requestAnimationFrame(updatePosition);
    window.addEventListener('resize', updatePosition);
    window.addEventListener('scroll', updatePosition); // ← スクロールでも再計算
    return () => {
      window.removeEventListener('resize', updatePosition);
      window.removeEventListener('scroll', updatePosition);
    };
  }, [mounted, triggerId]);

  // スクロールで画面外に出たか判定
  useEffect(() => {
    const handleScroll = () => {
      if (show) {
        setScrollOut(window.scrollY > position.top + 100);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [show, position.top]);

  if (!mounted) return null;

  const currentTheme = theme === 'system' ? resolvedTheme : theme;
  const imgSrc = currentTheme === 'dark' ? srcDark : srcLight;

  return (
    <>
      <div id={triggerId} ref={ref} className="h-1" />

      <img
        src={imgSrc}
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
