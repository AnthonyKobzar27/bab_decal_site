import { ExternalLink as ExternalLinkIcon } from "lucide-react";
import { cn } from "@/lib/cn";

type Props = {
  href: string;
  children: React.ReactNode;
  className?: string;
  showIcon?: boolean;
};

/** Safe external link — always opens in new tab with rel noopener noreferrer. */
export function ExternalLink({ href, children, className, showIcon = false }: Props) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={cn(
        "inline-flex items-center gap-1 underline underline-offset-2 transition-colors",
        "text-[var(--cs-link)] hover:text-[var(--cs-link-hover)]",
        className
      )}
    >
      {children}
      {showIcon && <ExternalLinkIcon className="h-3 w-3 flex-shrink-0" aria-hidden="true" />}
    </a>
  );
}
