"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { ChevronDown } from "lucide-react";
import { type NavItem } from "@/lib/data/nav";
import { cn } from "@/lib/cn";

type Props = { item: NavItem };

export function NavDropdown({ item }: Props) {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleOutsideClick(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    }
    document.addEventListener("mousedown", handleOutsideClick);
    return () => document.removeEventListener("mousedown", handleOutsideClick);
  }, []);

  const baseLinkCls =
    "rounded px-2 py-1 text-sm font-medium text-[var(--cs-text)] hover:bg-[var(--cs-bg)] hover:text-[var(--cs-link)] transition-colors no-underline";

  if (!item.children?.length) {
    return (
      <Link href={item.href} className={baseLinkCls}>
        {item.label}
      </Link>
    );
  }

  return (
    <div ref={ref} className="relative">
      <button
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        aria-haspopup="true"
        className={cn("flex items-center gap-1", baseLinkCls)}
      >
        {item.label}
        <ChevronDown
          className={cn("h-3.5 w-3.5 transition-transform", open && "rotate-180")}
          aria-hidden="true"
        />
      </button>

      {open && (
        <div
          className="absolute left-0 top-full z-50 mt-1 min-w-48 rounded border border-[var(--cs-border)] bg-[var(--cs-surface)] py-1"
          style={{ boxShadow: "0 1px 2px rgba(0,0,0,0.12), 0 3px 10px rgba(0,0,0,0.08)" }}
        >
          {item.children.map((child) => (
            <Link
              key={child.href}
              href={child.href}
              onClick={() => setOpen(false)}
              className="block px-4 py-1.5 text-sm text-[var(--cs-text)] hover:bg-[var(--cs-bg)] hover:text-[var(--cs-link)] transition-colors no-underline"
            >
              {child.label}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}
