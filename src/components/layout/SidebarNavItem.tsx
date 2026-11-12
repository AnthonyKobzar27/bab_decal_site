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
        aria-current={isActive ? "page" : undefined}
        className={cn(
          // The 2px left bar marks the current page. Other items show it
          // (and an underline) only while hovered.
          "flex items-center py-1.5 pr-4 text-sm no-underline border-l-2 transition-colors",
          indent,
          isActive
            ? "font-semibold border-[var(--cs-link)]"
            : "border-transparent hover:border-[var(--cs-link)] hover:underline"
        )}
        style={{
          color: isActive ? "var(--cs-link)" : "var(--cs-text)",
          // Inline so it beats the global `a:hover { text-decoration: underline }`
          // in globals.css: the current page is never underlined.
          textDecoration: isActive ? "none" : undefined,
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
          // Same hover treatment as leaf links: left bar plus underlined label.
          "group flex w-full items-center justify-between py-1.5 pr-4 text-sm font-medium transition-colors border-l-2 border-transparent hover:border-[var(--cs-link)]",
          indent
        )}
        style={{ color: childIsActive ? "var(--cs-link)" : "var(--cs-text)" }}
      >
        <span className="group-hover:underline">{item.label}</span>
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
