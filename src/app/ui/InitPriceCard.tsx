import { GlowCard } from "@/app/ui/cards";
import { shipporiAntiqueB1 } from "@/app/ui/fonts";

interface PricingCardProps {
  title: string;
  subtitle: string;
  originalPrice: string;
  currentPrice: string;
  period: string;
  yearlyTotal: string;
  note: string;
  highlighted?: boolean;
  className?: string;
}

// 初期費用の大きなカード。金額を中央に大きく見せる
export default function InitPricingCard({
  title,
  subtitle,
  originalPrice,
  currentPrice,
  period,
  note,
  className = "",
}: PricingCardProps) {
  return (
    <GlowCard
      className={className}
      innerClassName="flex flex-col items-center justify-center text-center md:p-10"
    >
      <h2 className="text-lg font-bold">{title}</h2>
      <p className="mt-1 text-sm text-[#4a4d55]">{subtitle}</p>
      {originalPrice && (
        <p className="mt-4 text-xs text-[#6b6f78]">{originalPrice}</p>
      )}
      <div className="mt-6 inline-flex flex-col items-center gap-1 rounded-2xl bg-[#ff4a3f]/10 px-8 py-5">
        <p className={`${shipporiAntiqueB1.className} text-5xl text-[#e0372d]`}>
          {currentPrice}
        </p>
        <span className="text-sm font-bold text-[#4a4d55]">{period}</span>
      </div>
      <p className="mt-6 max-w-md text-xs leading-relaxed text-[#4a4d55]">
        {note}
      </p>
    </GlowCard>
  );
}
