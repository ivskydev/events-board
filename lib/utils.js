import { clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs) {
  return twMerge(clsx(inputs))
}

export function generateDummyId(radix) {
  return Math.random().toString(radix).slice(2);
}