// lib/utils.ts

import { clsx, type ClassValue } from "clsx"; // or classnames
import { twMerge } from "tailwind-merge"; // Tailwindのクラス衝突を解決

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(...inputs));
}
