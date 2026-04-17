import Link from "next/link";
import { navItems } from "@/lib/data/nav";
import { NavDropdown } from "./NavDropdown";
import { SITE_TITLE, COURSE_SUBTITLE } from "@/lib/constants";

/** Primary site navigation bar. */
export function Navbar() {
  /* height matches Just the Docs: 3.75rem */
  return (
    <nav
      aria-label="Main navigation"
      className="sticky top-0 z-40 border-b border-[var(--cs-border)] bg-[var(--cs-nav-bg)]"
      style={{ boxShadow: "0 1px 2px rgba(0,0,0,0.12), 0 3px 10px rgba(0,0,0,0.08)" }}
    >
      <div className="mx-auto max-w-[68.75rem] px-4">
        <div className="flex h-[3.75rem] items-center justify-between gap-4">
          {/* Brand */}
          <Link href="/" className="flex flex-col leading-tight shrink-0 no-underline">
            <span className="text-base font-bold text-[var(--cs-text)]">{SITE_TITLE}</span>
            <span className="text-xs text-[var(--cs-muted)]">{COURSE_SUBTITLE}</span>
          </Link>

          {/* Nav items */}
          <div className="hidden lg:flex items-center flex-wrap gap-0.5">
            {navItems.map((item) => (
              <NavDropdown key={item.href} item={item} />
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
}
