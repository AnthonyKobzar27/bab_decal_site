"use client";

import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { navItems, utilityLinks } from "@/lib/data/nav";
import { SidebarNavItem } from "./SidebarNavItem";
import { AttendanceTab } from "@/components/ui/AttendanceTab";

/**
 * Menu button and drop-down panel for screens below the lg breakpoint, where
 * the Sidebar and the navbar tabs are hidden. The panel lists the sidebar
 * pages followed by the utility links, so every page stays reachable on a
 * phone.
 *
 * Must be rendered inside the sticky <nav>: the panel is absolutely
 * positioned against it and opens directly under the bar.
 */
export function MobileNav() {
  const [open, setOpen] = useState(false);

  // Escape closes the panel; the page behind it can't scroll while it's open.
  useEffect(() => {
    if (!open) return;
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") setOpen(false);
    }
    document.addEventListener("keydown", onKey);
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = prevOverflow;
    };
  }, [open]);

  // Close after any link inside the panel is followed. Buttons (the sidebar's
  // expandable groups) are ignored so they can still toggle.
  function closeOnLinkClick(e: React.MouseEvent) {
    if ((e.target as HTMLElement).closest("a")) setOpen(false);
  }

  return (
    <div className="lg:hidden">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        aria-controls="mobile-nav-panel"
        aria-label={open ? "Close menu" : "Open menu"}
        className="nav-tab flex items-center justify-center w-9 h-9 rounded-md"
      >
        {open ? <X className="h-5 w-5" aria-hidden="true" /> : <Menu className="h-5 w-5" aria-hidden="true" />}
      </button>

      {open && (
        <div
          id="mobile-nav-panel"
          onClick={closeOnLinkClick}
          className="absolute left-0 right-0 top-full overflow-y-auto border-b border-[var(--cs-border)] py-3"
          style={{
            background: "var(--cs-nav-bg)",
            maxHeight: "calc(100dvh - 3.75rem)",
            boxShadow: "0 6px 12px rgba(0,0,0,0.12)",
          }}
        >
          <nav aria-label="Site pages">
            {navItems.map((item) => (
              <SidebarNavItem key={item.href} item={item} />
            ))}
          </nav>

          <hr className="my-3 border-[var(--cs-border)]" />

          <ul aria-label="Course links" className="flex flex-col">
            {utilityLinks.map((link) => (
              <li key={link.label} className="py-1.5 pl-1">
                {link.label === "Attendance" ? (
                  <AttendanceTab />
                ) : (
                  <a
                    href={link.href}
                    className="nav-tab block px-3 text-sm font-medium no-underline"
                  >
                    {link.label}
                  </a>
                )}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
