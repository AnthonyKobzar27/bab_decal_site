import { cn } from "@/lib/cn";

type Variant = "blue" | "green" | "amber" | "red" | "purple" | "gray";

const variantClasses: Record<Variant, string> = {
  blue:   "bg-[#fdf8e1] text-[#7a5c00]",
  green:  "bg-[#fdf8e1] text-[#7a5c00]",
  amber:  "bg-[#fdf8e1] text-[#7a5c00]",
  red:    "bg-red-50 text-red-700",
  purple: "bg-[#3a3a3a] text-white",
  gray:   "bg-[#f5f6fa] text-[#5c5962]",
};

type Props = {
  children: React.ReactNode;
  variant?: Variant;
  className?: string;
};

export function Badge({ children, variant = "gray", className }: Props) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full px-2 py-0.5 text-xs font-medium",
        variantClasses[variant],
        className
      )}
    >
      {children}
    </span>
  );
}
