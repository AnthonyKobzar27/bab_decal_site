import Link from "next/link";
import { SITE_TITLE, COURSE_SUBTITLE } from "@/lib/constants";

/** Top bar: brand on left, Attendance link on right. */
export function Navbar() {
  return (
    <nav
      aria-label="Main navigation"
      className="sticky top-0 z-40 border-b border-[var(--cs-border)] bg-[var(--cs-nav-bg)]"
      style={{ boxShadow: "0 1px 2px rgba(0,0,0,0.12), 0 3px 10px rgba(0,0,0,0.08)" }}
    >
      <div className="px-6">
        <div className="flex h-[3.75rem] items-center justify-between gap-4">
          {/* Brand */}
          <Link href="/" className="flex flex-col leading-tight shrink-0 no-underline">
            <span className="text-base font-bold" style={{ color: "var(--cs-text)" }}>
              {SITE_TITLE}
            </span>
            <span className="text-xs" style={{ color: "var(--cs-muted)" }}>
              {COURSE_SUBTITLE}
            </span>
          </Link>

          {/* Attendance */}
          <a
            href="#"
            className="inline-flex items-center rounded px-4 py-1.5 text-sm font-semibold no-underline transition-opacity hover:opacity-80"
            style={{ background: "var(--cs-link)", color: "#fff" }}
          >
            Attendance
          </a>
        </div>
      </div>
    </nav>
  );
}
