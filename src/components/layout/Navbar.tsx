import Link from "next/link";
import Image from "next/image";
import { SITE_TITLE, COURSE_SUBTITLE } from "@/lib/constants";
import { utilityLinks } from "@/lib/data/nav";
import { DarkModeToggle } from "@/components/ui/DarkModeToggle";
import { AttendanceTab } from "@/components/ui/AttendanceTab";
import { MobileNav } from "./MobileNav";

/**
 * Top bar: brand on left, utility tabs in center, dark mode toggle on right.
 * Below lg the tabs are hidden and MobileNav's menu button takes their place.
 */
export function Navbar() {
  return (
    <nav
      aria-label="Main navigation"
      className="sticky top-0 z-40 border-b border-[var(--cs-border)] bg-[var(--cs-nav-bg)]"
      style={{ boxShadow: "0 1px 2px rgba(0,0,0,0.12), 0 3px 10px rgba(0,0,0,0.08)" }}
    >
      <div className="px-4 sm:px-6">
        <div className="flex h-[3.75rem] items-center gap-4">

          {/* Brand */}
          <Link href="/" className="flex items-center gap-2.5 min-w-0 no-underline mr-2 sm:mr-4">
            <Image
              src="/bab.png"
              alt="BAB logo"
              width={34}
              height={34}
              className="shrink-0"
              priority
            />
            <div className="flex flex-col leading-tight min-w-0">
              <span className="text-base font-bold truncate" style={{ color: "var(--cs-text)" }}>
                {SITE_TITLE}
              </span>
              <span className="text-xs truncate" style={{ color: "var(--cs-muted)" }}>
                {COURSE_SUBTITLE}
              </span>
            </div>
          </Link>

          {/* Tabs (lg and up; MobileNav carries them on smaller screens) */}
          <div className="hidden lg:flex items-stretch ml-auto overflow-x-auto h-full">
            {utilityLinks.map((link) =>
              link.label === "Attendance" ? (
                <AttendanceTab key="Attendance" />
              ) : (
                <a
                  key={link.label}
                  href={link.href}
                  className="nav-tab group relative flex items-center px-3 text-sm font-medium whitespace-nowrap no-underline transition-colors"
                >
                  {link.label}
                  <span
                    className="absolute bottom-0 left-0 right-0 h-0.5 scale-x-0 group-hover:scale-x-100 transition-transform origin-left"
                    style={{ background: "var(--cs-link)" }}
                  />
                </a>
              )
            )}
          </div>

          {/* Dark mode toggle, pushed right on small screens where the tabs are hidden */}
          <div className="ml-auto lg:ml-0 flex items-center gap-1">
            <DarkModeToggle />
            <MobileNav />
          </div>
        </div>
      </div>
    </nav>
  );
}
