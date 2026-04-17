import { ExternalLink } from "@/components/ui/ExternalLink";
import { type ScheduleItem } from "@/lib/data/schedule";

type Props = { item: ScheduleItem };

/** Renders the discussion section cell for a schedule row. */
export function ScheduleRowDiscussion({ item }: Props) {
  if (!item.discussionNum && item.discussionNum !== 0) return null;

  return (
    <div className="flex flex-col gap-0.5">
      <span className="text-xs text-gray-400 dark:text-gray-500">
        Discussion {item.discussionNum}
      </span>
      <span className="text-sm text-gray-800 dark:text-gray-200">{item.discussionTitle}</span>
      <div className="flex gap-2 mt-0.5">
        {item.discussionWorksheet && (
          <ExternalLink href={item.discussionWorksheet} className="text-xs">Worksheet</ExternalLink>
        )}
        {item.discussionSolutions && (
          <ExternalLink href={item.discussionSolutions} className="text-xs">Solutions</ExternalLink>
        )}
      </div>
    </div>
  );
}
