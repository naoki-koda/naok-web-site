'use client';
import colors from 'tailwindcss/colors';
import { Button } from '@/components/ui/button';
import { kosugiMaru } from '@/app/ui/fonts';

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
    <div>
      <div className="flex flex-col justify-center gap-4 p-12">
        <h1 className={`text-4xl text-center ${kosugiMaru.className}`}>ボタンの色一覧</h1>
        <h2 className={`text-2xl text-center ${kosugiMaru.className}`}>tailwind CSSで設定可能な色を使用しています。</h2>
      </div>
      <div className="grid gap-3 grid-cols-2 sm:grid-cols-6 mt-8">
        {bgClassList.map((cName) => (
          <Button key={cName} className={`${['black', 'white'].includes(cName) ? `bg-${cName}` : `${cName}`
            } px-5 py-2 text-white`}>{cName}</Button>
        ))}
      </div>
    </div>
  );
}
