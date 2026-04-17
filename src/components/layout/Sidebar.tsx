import { navItems } from "@/lib/data/nav";
import { SidebarNavItem } from "./SidebarNavItem";

/** Fixed left sidebar: nav tree only. */
export function Sidebar() {
  return (
    <aside
      aria-label="Site navigation"
      className="hidden lg:flex flex-col shrink-0 border-r border-[var(--cs-border)] overflow-y-auto"
      style={{
        width: "20rem",
        background: "var(--cs-bg)",
        position: "sticky",
        top: "3.75rem",
        height: "calc(100vh - 3.75rem)",
      }}
    >
      <nav aria-label="Sidebar navigation" className="flex-1 py-3 overflow-y-auto">
        {navItems.map((item) => (
          <SidebarNavItem key={item.href} item={item} />
        ))}
      </nav>
    </aside>
  );
}
