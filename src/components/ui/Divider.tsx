import { cn } from "@/lib/cn";

export function Divider({ className }: { className?: string }) {
  return <hr className={cn("border-gray-200 dark:border-gray-700", className)} />;
}
