import React from "react";

function normalizePhone(value: string) {
  // 数字だけにする（送信用）
  return value.replace(/[^\d]/g, "");
}

function formatPhoneJP(value: string) {
  // 数字とハイフン以外は除去
  const digits = normalizePhone(value).slice(0, 11);

  // 090 / 080 / 070 の11桁を想定して整形（簡易）
  if (digits.length <= 3) return digits;
  if (digits.length <= 7) return `${digits.slice(0, 3)}-${digits.slice(3)}`;
  return `${digits.slice(0, 3)}-${digits.slice(3, 7)}-${digits.slice(7)}`;
}

export function PhoneField({
  defaultValue = "",
  error,
  name = "phone",
}: {
  defaultValue?: string;
  error?: React.ReactNode;
  name?: string;
}) {
  const [displayValue, setDisplayValue] = React.useState(
    formatPhoneJP(defaultValue)
  );

  const normalized = normalizePhone(displayValue);

  return (
    <div>
      <label
        htmlFor={name}
        className="flex items-center justify-between text-sm font-medium text-slate-800 dark:text-slate-100"
      >
        <span>電話番号</span>
        <span className="text-xs font-semibold text-slate-400 dark:text-slate-500">
          任意
        </span>
      </label>

      <input
        id={name}
        name={`${name}Display`}
        type="tel"
        inputMode="tel"
        autoComplete="tel"
        placeholder="例）090-1234-5678"
        value={displayValue}
        onChange={(e) => setDisplayValue(formatPhoneJP(e.target.value))}
        className="mt-2 w-full rounded-2xl border border-slate-200/80 bg-white px-4 py-3 text-sm text-slate-900 shadow-inner
                   focus:border-sky-400 focus:outline-none focus:ring-2 focus:ring-sky-300/60
                   dark:border-white/10 dark:bg-slate-950/70 dark:text-slate-100"
        aria-describedby={`${name}-hint ${name}-error`}
        aria-invalid={Boolean(error)}
      />

      {/* 送信用：数字のみ */}
      <input type="hidden" name={name} value={normalized} />

      <p id={`${name}-hint`} className="mt-2 text-xs text-slate-500">
        ハイフンは自動で整形されます。
      </p>

      <div id={`${name}-error`} aria-live="polite" aria-atomic="true">
        {error}
      </div>
    </div>
  );
}
