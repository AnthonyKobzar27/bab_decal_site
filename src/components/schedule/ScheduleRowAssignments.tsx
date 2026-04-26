import { Badge } from "@/components/ui/Badge";
import { type ScheduleItem } from "@/lib/data/schedule";

type Props = { item: ScheduleItem };

/** Renders homework and project deadline badges for a schedule row. */
export function ScheduleRowAssignments({ item }: Props) {
  const hasAssignments = item.homework || item.project;
  if (!hasAssignments) return null;

  return (
    <div className="flex flex-col gap-1.5">
      {item.homework && (
        <div className="flex flex-col gap-0.5">
          {item.homeworkLink ? (
            <a
              href={item.homeworkLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex"
            >
              <Badge variant="amber">{item.homework}</Badge>
            </a>
          ) : (
            <Badge variant="amber">{item.homework}</Badge>
          )}
          {item.homeworkDue && (
            <span className="text-xs" style={{ color: "var(--cs-muted)" }}>Due {item.homeworkDue}</span>
          )}
        </div>
      )}
      {item.project && (
        <div className="flex flex-col gap-0.5">
          <Badge variant="blue">{item.project}</Badge>
          {item.projectDue && (
            <span className="text-xs" style={{ color: "var(--cs-muted)" }}>Due {item.projectDue}</span>
          )}
        </div>
      )}
    </div>
  );
}
