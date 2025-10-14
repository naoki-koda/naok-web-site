import { cn } from "@/app/lib/utils"; // 任意: classNamesをまとめる関数があると便利

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
  yearlyTotal,
  note,
  highlighted = false,
}: PricingCardProps) {
  return (
    <div
      className={cn(
        "rounded-xl border border-orange-200/70 bg-white/95 p-6 text-slate-900 shadow-lg shadow-orange-200/40 flex flex-col justify-between",
        highlighted ? "border-orange-400 shadow-orange-300/50" : "",
      )}
    >
      <div>
        <h3 className="text-lg font-medium">{title}</h3>
        <p className="text-sm text-gray-800">{subtitle}</p>

        <div className="mt-4">
          <p className="text-sm text-gray-800">{originalPrice}</p>
          <div className="inline-flex flex-col gap-1">
            <p className="text-3xl font-bold bg-gradient-to-r from-orange-400 to-sky-400 bg-clip-text text-transparent">
              {currentPrice}
            </p>
            <span className="text-sm font-semibold text-orange-600/90">/{period}</span>
          </div>
        </div>
      </div>

      <p className="text-xs text-slate-600 border-t border-orange-200/70 pt-4 mt-4">{note}</p>
    </div>
  );
}
