import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

// Эта функция грамотно склеивает классы Tailwind
export function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs));
}