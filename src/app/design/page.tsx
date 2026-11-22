'use client';
import { GlowCard } from '@/app/ui/cards';
import { PageHero, PageShell } from '@/app/ui/page-parts';
import { Button } from '@/components/ui/button';
import colors from 'tailwindcss/colors';

export default function Page() {

  const shadeList = [
    "50",
    "100",
    "200",
    "300",
    "400",
    "500",
    "600",
    "700",
    "800",
    "900",
    "950"
  ];
  // const colorList :  string[] = [];
  const colorList = Object.keys(colors).filter(
    (colorName) => !['inherit', 'current', 'transparent', 'black', 'white'].includes(colorName)
  );
  // 組み合わせを生成
  const bgClassList = colorList.flatMap((cName) =>
    shadeList.map((shade) => `bg-${cName}-${shade}`)
  );
  return (
    <PageShell>
      <PageHero
        badge="DESIGN SYSTEM"
        title={
          <>
            Tailwind カラーパレットで
            <br className="hidden sm:inline" />
            ボタンデザインを素早く確認
          </>
        }
        lead="Tailwind CSS で利用できるカラークラスを一覧表示。プロトタイプ作成やブランドカラーの検討に役立つよう、クラス名をそのままラベルにしています。"
      />

      <section className="mx-auto max-w-6xl px-6">
        <GlowCard innerClassName="md:p-10">
          <div className="flex flex-col gap-2 pb-8">
            <h2 className="text-2xl font-bold">ボタンの色一覧</h2>
            <p className="text-sm text-[#4a4d55]">
              配色パターンの比較やデザインガイドライン作成にご活用ください。
            </p>
          </div>
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-4 md:grid-cols-6">
            {bgClassList.map((cName) => {
              const className = ['black', 'white'].includes(cName)
                ? `bg-${cName}`
                : cName;
              return (
                <Button
                  key={cName}
                  className={`${className} px-5 py-2 text-white hover:scale-[1.02] transition-transform`}
                >
                  {cName}
                </Button>
              );
            })}
          </div>
        </GlowCard>
      </section>
    </PageShell>
  );
}
