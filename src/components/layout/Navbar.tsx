import Link from "next/link";
import { SITE_TITLE, COURSE_SUBTITLE } from "@/lib/constants";
import { utilityLinks } from "@/lib/data/nav";
import { DarkModeToggle } from "@/components/ui/DarkModeToggle";

/** Top bar: brand on left, utility tabs in center, dark mode toggle on right. */
export function Navbar() {
  return (
    <nav
      aria-label="Main navigation"
      className="sticky top-0 z-40 border-b border-[var(--cs-border)] bg-[var(--cs-nav-bg)]"
      style={{ boxShadow: "0 1px 2px rgba(0,0,0,0.12), 0 3px 10px rgba(0,0,0,0.08)" }}
    >
      <div className="px-6">
        <div className="flex h-[3.75rem] items-center gap-4">

          {/* Brand */}
          <Link href="/" className="flex flex-col leading-tight shrink-0 no-underline mr-4">
            <span className="text-base font-bold" style={{ color: "var(--cs-text)" }}>
              {SITE_TITLE}
            </span>
            <span className="text-xs" style={{ color: "var(--cs-muted)" }}>
              {COURSE_SUBTITLE}
            </span>
          </Link>

          {/* Tabs */}
          <div className="flex items-stretch flex-1 overflow-x-auto h-full">
            {utilityLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="nav-tab group relative flex items-center px-3 text-sm font-medium whitespace-nowrap no-underline transition-colors"
              >
                {link.label}
                {/* Active underline bar */}
                <span
                  className="absolute bottom-0 left-0 right-0 h-0.5 scale-x-0 group-hover:scale-x-100 transition-transform origin-left"
                  style={{ background: "var(--cs-link)" }}
                />
              </a>
            ))}
          </div>

          {/* Dark mode toggle */}
          <DarkModeToggle />
        </div>
      </div>
    </nav>
  );
}
