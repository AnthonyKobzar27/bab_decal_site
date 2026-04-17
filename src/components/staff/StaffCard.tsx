import { Mail } from "lucide-react";
import { Badge } from "@/components/ui/Badge";
import { type StaffMember } from "@/lib/data/staff";
import { cn } from "@/lib/cn";

type Props = { member: StaffMember };

const roleBadgeVariant: Record<StaffMember["role"], "purple" | "blue" | "green" | "gray"> = {
  instructor: "purple",
  "head-ta": "blue",
  ta: "green",
  tutor: "gray",
};

/** Card for a single staff member. */
export function StaffCard({ member }: Props) {
  return (
    <div
      className={cn(
        "rounded p-5 flex flex-col gap-3 border",
        "hover:shadow-md transition-shadow"
      )}
      style={{ borderColor: "var(--cs-border)", background: "var(--cs-surface)" }}
    >
      {/* Avatar placeholder */}
      <div className="h-14 w-14 rounded-full flex items-center justify-center text-white font-bold text-xl select-none" style={{ background: "var(--cs-accent)" }}>
        {member.name.charAt(0)}
      </div>

      <div>
        <div className="flex items-start gap-2 flex-wrap">
          <span className="font-semibold" style={{ color: "var(--cs-text)" }}>{member.name}</span>
          {member.pronouns && (
            <span className="text-xs mt-0.5" style={{ color: "var(--cs-muted)" }}>
              ({member.pronouns})
            </span>
          )}
        </div>
        <Badge variant={roleBadgeVariant[member.role]} className="mt-1">
          {member.roleLabel}
        </Badge>
      </div>

      {member.bio && (
        <p className="text-sm leading-relaxed" style={{ color: "var(--cs-muted)" }}>{member.bio}</p>
      )}

      {member.email && (
        <a
          href={`mailto:${member.email}`}
          className="inline-flex items-center gap-1.5 text-xs transition-colors mt-auto hover:underline"
          style={{ color: "var(--cs-link)" }}
        >
          <Mail className="h-3.5 w-3.5" aria-hidden="true" />
          {member.email}
        </a>
      )}
    </div>
  );
}
