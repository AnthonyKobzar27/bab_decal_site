import Link from "next/link";
import { cn } from "@/lib/cn";

type Props = {
  href: string;
  children: React.ReactNode;
  className?: string;
};

export function InternalLink({ href, children, className }: Props) {
  return (
    <Link
      href={href}
      className={cn(
        "underline underline-offset-2 transition-colors",
        "text-[var(--cs-link)] hover:text-[var(--cs-link-hover)]",
        className
      )}
    >
      {children}
    </Link>
  );
}
