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
          <Badge variant="amber">{item.homework}</Badge>
          {item.homeworkDue && (
            <span className="text-xs text-gray-500 dark:text-gray-400">Due {item.homeworkDue}</span>
          )}
        </div>
      )}
      {item.project && (
        <div className="flex flex-col gap-0.5">
          <Badge variant="blue">{item.project}</Badge>
          {item.projectDue && (
            <span className="text-xs text-gray-500 dark:text-gray-400">Due {item.projectDue}</span>
          )}
        </div>
      )}
    </div>
  );
}
