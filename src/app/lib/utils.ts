// lib/utils.ts

import { clsx } from "clsx"; // or classnames
import { twMerge } from "tailwind-merge"; // Tailwindのクラス衝突を解決

export function cn(...inputs: any[]) {
  return twMerge(clsx(...inputs));
}
