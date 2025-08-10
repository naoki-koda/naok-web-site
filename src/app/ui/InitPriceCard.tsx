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
        "rounded-lg border p-6 bg-yellow-100  text-black max-w-sm flex flex-col justify-between item-center w-full max-w-full",
        highlighted ? "border-blue-500" : "border-black",
        className
      )}
    >
      <div className="text-center">
        <h3 className="text-lg font-medium">{title}</h3>
        {/* <p className="text-sm text-gray-800">{subtitle}</p> */}
        🎉 <strong>事業開始キャンペーン</strong> 実施中！<br />


        <div className="mt-4">
          <p className="text-sm text-gray-800 text-center">{originalPrice}</p>
          <p className="text-4xl font-extrabold text-blue-600 bg-blue-50 inline-block px-4 py-2 rounded-lg shadow-lg text-center">
            {currentPrice}
            <span className="text-lg font-normal text-gray-700"> {period}</span>
          </p>
        </div>
      </div>

      <p className="text-xs text-gray-800 border-t border-gray-600 pt-4 mt-4">{note}</p>
    </div>
  );
}
