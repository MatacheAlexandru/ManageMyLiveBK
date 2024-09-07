import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
//https://ui.shadcn.com/docs/components/accordion
//https://bubble.io/page?id=matachealexncs&tab=tabs-1&name=index
//https://mdbootstrap.com/
//https://getbootstrap.com/docs/5.3/getting-started/introduction/
