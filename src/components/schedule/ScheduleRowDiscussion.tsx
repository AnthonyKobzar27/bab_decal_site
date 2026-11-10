import { ExternalLink } from "@/components/ui/ExternalLink";
import { type ScheduleItem } from "@/lib/data/schedule";

type Props = { item: ScheduleItem };

/** Renders the discussion section cell for a schedule row. */
export function ScheduleRowDiscussion({ item }: Props) {
  if (!item.discussionNum && item.discussionNum !== 0) return null;

  return (
    <div className="flex flex-col gap-0.5">
      <span className="text-xs" style={{ color: "var(--cs-muted)" }}>
        Discussion {item.discussionNum}
      </span>
      <span className="text-sm" style={{ color: "var(--cs-text)" }}>{item.discussionTitle}</span>
      {/* Wider gap and vertical padding below md give the links phone-sized tap targets. */}
      <div className="flex gap-4 md:gap-2 mt-0.5">
        {item.discussionWorksheet && (
          <ExternalLink href={item.discussionWorksheet} className="text-xs py-1 md:py-0">Worksheet</ExternalLink>
        )}
        {item.discussionSolutions && (
          <ExternalLink href={item.discussionSolutions} className="text-xs py-1 md:py-0">Solutions</ExternalLink>
        )}
      </div>
    </div>
  );
}
