"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/cn";
import { type NavItem } from "@/lib/data/nav";

type Props = { item: NavItem; depth?: number };

export function SidebarNavItem({ item, depth = 0 }: Props) {
  const pathname = usePathname();
  const isActive = pathname === item.href;
  const hasChildren = !!item.children?.length;

  const childIsActive = item.children?.some((c) => pathname === c.href) ?? false;
  const [open, setOpen] = useState(childIsActive);

  const indent = depth === 0 ? "pl-4" : "pl-8";

  if (!hasChildren) {
    return (
      <Link
        href={item.href}
        className={cn(
          "flex items-center py-1.5 pr-4 text-sm no-underline transition-colors rounded-r",
          indent,
          isActive
            ? "font-semibold"
            : "hover:bg-[var(--cs-accent-pale)]"
        )}
        style={{
          color: isActive ? "var(--cs-link)" : "var(--cs-text)",
          borderLeft: isActive ? "2px solid var(--cs-link)" : "2px solid transparent",
        }}
      >
        {item.label}
      </Link>
    );
  }

  return (
    <div>
      <button
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        className={cn(
          "flex w-full items-center justify-between py-1.5 pr-4 text-sm font-medium transition-colors rounded-r hover:bg-[var(--cs-accent-pale)]",
          indent
        )}
        style={{ color: childIsActive ? "var(--cs-link)" : "var(--cs-text)" }}
      >
        <span>{item.label}</span>
        <ChevronDown
          className={cn("h-3.5 w-3.5 shrink-0 transition-transform", open && "rotate-180")}
          aria-hidden="true"
          style={{ color: "var(--cs-muted)" }}
        />
      </button>

      {open && (
        <div>
          {item.children!.map((child) => (
            <SidebarNavItem key={child.href} item={child} depth={depth + 1} />
          ))}
        </div>
      )}
    </div>
  );
}
