import { primaryButton, secondaryButton } from "@/app/ui/buttons";
import { GlowCard } from "@/app/ui/cards";
import { shipporiAntiqueB1 } from "@/app/ui/fonts";
import { PageShell } from "@/app/ui/page-parts";
import Link from "next/link";

export default function Page() {
  return (
    <PageShell>
      <section className="mx-auto flex min-h-[70vh] max-w-3xl items-center px-6">
        <GlowCard className="w-full" innerClassName="px-6 py-14 text-center md:p-16">
          <div className="text-6xl animate-pulse">😢</div>
          <h1 className={`${shipporiAntiqueB1.className} mt-4 text-3xl md:text-4xl`}>
            メールの送信に失敗しました
          </h1>
          <p className="mt-4 text-sm text-[#4a4d55] md:text-base">
            お手数ですが、時間を置いてもう一度お試しください。
          </p>
          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
            <Link href="/contact" className={primaryButton}>
              再度お問い合わせ
            </Link>
            <Link href="/" className={secondaryButton}>
              トップページに戻る
            </Link>
          </div>
        </GlowCard>
      </section>
    </PageShell>
  );
}
