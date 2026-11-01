import { shipporiAntiqueB1, zenKaku } from '@/app/ui/fonts';
import Image from 'next/image';
import Link from 'next/link';

const NAV_ITEMS = [
  { href: '/', label: 'TOP', subLabel: 'トップ' },
  { href: '/service', label: 'SERVICE', subLabel: 'サービス' },
  { href: '/works', label: 'WORKS', subLabel: '制作実績' },
  { href: '/design', label: 'DESIGN', subLabel: 'デザイン' },
  { href: '/price', label: 'PRICE', subLabel: '料金' },
  { href: '/blog', label: 'BLOG', subLabel: 'ブログ' },
  { href: '/contact', label: 'CONTACT', subLabel: 'お問い合わせ' },
];

const STRENGTHS = ['速い', '安い', '売れる', '守れる'];

export default function Footer() {
  return (
    // トップページの濃い帯（実績・CTA）と同じ配色。下部の余白は固定表示のボタンと重ならないため
    <footer className={`${zenKaku.className} bg-[#15181d] pb-28 text-[#eae6da]`}>
      {/* 巻尺の目盛り */}
      <div
        aria-hidden="true"
        className="h-2 bg-[repeating-linear-gradient(90deg,#f0b429_0_2px,transparent_2px_12px)] opacity-80"
      />

      <div className="mx-auto max-w-6xl px-6 pt-14">
        <div className="grid gap-12 md:grid-cols-[1.1fr_0.9fr] md:gap-16">
          <div>
            <Link href="/" className="inline-flex items-center gap-3">
              <Image
                src="/favicon.ico"
                alt=""
                width={36}
                height={36}
                className="rounded-full bg-[#eae6da]"
              />
              <span className={`${shipporiAntiqueB1.className} text-2xl`}>
                REEWA WEB
              </span>
            </Link>
            <p
              className={`${shipporiAntiqueB1.className} mt-6 text-3xl leading-snug md:text-4xl`}
            >
              {STRENGTHS.map((word) => (
                <span key={word} className="mr-1 inline-block">
                  {word}
                  <span className="text-[#f0b429]">。</span>
                </span>
              ))}
            </p>
            <p className="mt-5 max-w-md text-sm leading-relaxed text-[#c9c4ad]">
              愛知県名古屋市を中心に、Next.js製の高速なWebサイトの制作・運営を行っています。打ち合わせから公開後の運用まで、自社で一貫して対応します。
            </p>
            <Link
              href="/contact"
              className="mt-8 inline-flex items-center justify-center rounded-full bg-[#f0b429] px-7 py-3 text-sm font-bold text-[#15181d] transition hover:brightness-95"
            >
              無料で相談する
            </Link>
          </div>

          <nav aria-label="フッターナビゲーション">
            <ul className="border-t border-[#eae6da]/15">
              {NAV_ITEMS.map(({ href, label, subLabel }) => (
                <li key={href} className="border-b border-[#eae6da]/15">
                  <Link
                    href={href}
                    className="group flex items-baseline justify-between gap-4 py-3.5"
                  >
                    <span className="text-sm font-bold tracking-[0.2em] transition-colors group-hover:text-[#f0b429]">
                      {label}
                    </span>
                    <span className="text-xs text-[#8a8370]">{subLabel}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        <div className="mt-14 flex flex-col gap-3 border-t border-[#eae6da]/15 pt-6 text-xs leading-relaxed text-[#8a8370] md:flex-row md:items-center md:justify-between">
          <p>
            著作権、及びお客様のプライバシー保護のため、サイト内の写真や内容の無断転載等はお断り致します。
          </p>
          <p className="shrink-0">© NAO.K</p>
        </div>
      </div>
    </footer>
  );
}
