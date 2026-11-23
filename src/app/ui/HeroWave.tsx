import { heroWaveColors, heroWavePaths } from "@/app/ui/hero-wave-paths";

// ファーストビュー背景のラベンダーの波線（装飾）
export default function HeroWave({ className }: { className?: string }) {
  return (
    <svg
      aria-hidden="true"
      focusable="false"
      viewBox="0 0 709.16 414.56"
      fill="none"
      strokeMiterlimit={10}
      className={className}
    >
      {heroWavePaths.map(([color, d], i) => (
        <path key={i} stroke={heroWaveColors[color]} d={d} />
      ))}
    </svg>
  );
}
