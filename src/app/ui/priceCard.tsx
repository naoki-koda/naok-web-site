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
        "rounded-lg border p-6 bg-gray-50 text-black max-w-sm flex flex-col justify-between",
        highlighted ? "border-blue-500" : "border-black"
      )}
    >
      <div>
        <h3 className="text-lg font-medium">{title}</h3>
        <p className="text-sm text-gray-800">{subtitle}</p>

        <div className="mt-4">
          <p className="text-sm text-gray-800">{originalPrice}</p>
          <p className="text-3xl font-bold">{currentPrice}
            <span className="text-base font-normal"> /{period}</span>
          </p>
        </div>
      </div>

      <p className="text-xs text-gray-800 border-t border-gray-600 pt-4 mt-4">{note}</p>
    </div>
  );
}
