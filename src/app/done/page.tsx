import { primaryButton } from "@/app/ui/buttons";
import { GlowCard } from "@/app/ui/cards";
import { shipporiAntiqueB1 } from "@/app/ui/fonts";
import { PageShell } from "@/app/ui/page-parts";
import Link from "next/link";

export default function Page() {
  return (
    <PageShell>
      <section className="mx-auto flex min-h-[70vh] max-w-3xl items-center px-6">
        <GlowCard className="w-full" innerClassName="px-6 py-14 text-center md:p-16">
          <div className="text-6xl animate-bounce">🎈</div>
          <h1 className={`${shipporiAntiqueB1.className} mt-4 text-3xl md:text-4xl`}>
            メールの送信ありがとうございました。
          </h1>
          <p className="mt-4 text-sm text-[#4a4d55] md:text-base">
            内容を確認のうえ、1営業日以内にメールでご連絡いたします。
          </p>
          <Link href="/" className={`${primaryButton} mt-8`}>
            トップページに戻る
          </Link>
        </GlowCard>
      </section>
    </PageShell>
  );
}
