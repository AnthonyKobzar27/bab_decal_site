import { utilityLinks } from "@/lib/data/nav";
import { ExternalLink } from "@/components/ui/ExternalLink";

/** Slim top bar with quick-access utility links (Ed, OH Queue, etc.). */
export function UtilityBar() {
  return (
    <div className="border-b border-[var(--cs-border)] bg-[var(--cs-util-bg)]">
      <div className="mx-auto max-w-screen-2xl px-4">
        <ul className="flex flex-wrap items-center gap-x-5 gap-y-1 py-1.5 text-xs text-[var(--cs-muted)]">
          {utilityLinks.map((link) => (
            <li key={link.label}>
              <ExternalLink href={link.href} className="text-xs no-underline hover:underline">
                {link.label}
              </ExternalLink>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
