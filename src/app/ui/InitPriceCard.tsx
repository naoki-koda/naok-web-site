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
  className?: string;
}

export default function InitPricingCard({
  title,
  subtitle,
  originalPrice,
  currentPrice,
  period,
  yearlyTotal,
  note,
  highlighted = false,
  className = ''
}: PricingCardProps) {
  return (
    <div
      className={cn(
        "rounded-xl border border-orange-200/70 bg-white/95 p-6 text-teal-950 shadow-lg shadow-orange-200/40 flex flex-col justify-between item-center w-full max-w-full",
        highlighted ? "border-orange-400 shadow-orange-300/50" : "",
        className
      )}
    >
      <div className="text-center">
        <h3 className="text-lg font-medium">{title}</h3>
        <div className="mt-4">
          <p className="text-sm text-gray-800 text-center">{originalPrice}</p>
          <div className="inline-flex flex-col items-center gap-2 rounded-2xl bg-gradient-to-r from-orange-400/15 to-sky-400/15 px-6 py-3 shadow-inner shadow-orange-200/50">
            <p className="text-4xl font-extrabold bg-gradient-to-r from-orange-400 to-sky-400 bg-clip-text text-transparent">
              {currentPrice}
            </p>
            <span className="text-sm font-semibold text-orange-600/90">{period}</span>
          </div>
        </div>
      </div>

      <p className="text-xs text-slate-600 border-t border-orange-200/70 pt-4 mt-4">{note}</p>
    </div>
  );
}
