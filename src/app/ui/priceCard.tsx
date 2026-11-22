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
}

export default function PricingCard({
  title,
  subtitle,
  originalPrice,
  currentPrice,
  period,
  note,
  highlighted = false,
}: PricingCardProps) {
  return (
    <GlowCard innerClassName="flex flex-col justify-between">
      <div>
        {highlighted && (
          <span className="mb-3 inline-flex rounded-full bg-[#ff4a3f] px-3 py-1 text-[11px] font-bold text-[#15181d]">
            おすすめ
          </span>
        )}
        <h3 className="text-lg font-bold">{title}</h3>
        <p className="mt-1 text-sm text-[#4a4d55]">{subtitle}</p>

        <div className="mt-6">
          {originalPrice && (
            <p className="text-xs text-[#6b6f78]">{originalPrice}</p>
          )}
          <p className="flex items-baseline gap-2">
            <span
              className={`${shipporiAntiqueB1.className} text-4xl text-[#e0372d]`}
            >
              {currentPrice}
            </span>
            <span className="text-sm font-bold text-[#4a4d55]">/{period}</span>
          </p>
        </div>
      </div>

      <p className="mt-6 border-t border-[#15181d]/10 pt-4 text-xs leading-relaxed text-[#4a4d55]">
        {note}
      </p>
    </GlowCard>
  );
}
